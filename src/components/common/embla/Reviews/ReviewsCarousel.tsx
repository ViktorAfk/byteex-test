'use client';

import { Review } from '@/api/types';
import clsx from 'clsx';
import type { EmblaCarouselType, EmblaEventType } from 'embla-carousel';
import AutoHeight from 'embla-carousel-auto-height';
import useEmblaCarousel from 'embla-carousel-react';
import React, { useCallback, useEffect, useRef } from 'react';
import { CustomerReviewCard } from '../../CustomerReviewCard';
import { DotButton, useDotButton } from '../EmblaDots';

import {
  NextButton,
  PrevButton,
  usePrevNextButtons,
} from '../LoungeWear/LongCarouselArrowButton';

type Props = {
  reviews: Review[];
};

const TWEEN_FACTOR_BASE = 0.2;

const numberWithinRange = (number: number, min: number, max: number): number =>
  Math.min(Math.max(number, min), max);

export const ReviewsCarousel: React.FC<Props> = ({ reviews }) => {
  const [emblaRef, emblaApi] = useEmblaCarousel({ loop: true }, [AutoHeight()]);
  const tweenFactor = useRef(0);
  const tweenNodes = useRef<HTMLElement[]>([]);
  const { selectedIndex, scrollSnaps, onDotButtonClick } =
    useDotButton(emblaApi);

  const setTweenNodes = useCallback((emblApi: EmblaCarouselType) => {
    tweenNodes.current = emblApi
      .slideNodes()
      .map((slideNode) => {
        return slideNode.querySelector('.embla__slide__number');
      })
      .filter((elem): elem is HTMLElement => elem !== null);
  }, []);

  const setTweenFactor = useCallback((emblApi: EmblaCarouselType) => {
    tweenFactor.current = TWEEN_FACTOR_BASE * emblApi.scrollSnapList().length;
  }, []);

  const tweenScale = useCallback(
    (emblApi: EmblaCarouselType, eventName?: EmblaEventType) => {
      const engine = emblApi.internalEngine();
      const scrollProgress = emblApi.scrollProgress();
      const slidesInView = emblApi.slidesInView();
      const isScrollEvent = eventName === 'scroll';

      emblApi.scrollSnapList().forEach((scrollSnap, snapIndex) => {
        let diffToTarget = scrollSnap - scrollProgress;
        const slidesInSnap = engine.slideRegistry[snapIndex];

        slidesInSnap.forEach((slideIndex) => {
          if (isScrollEvent && !slidesInView.includes(slideIndex)) return;

          if (engine.options.loop) {
            engine.slideLooper.loopPoints.forEach((loopItem) => {
              const target = loopItem.target();

              if (slideIndex === loopItem.index && target !== 0) {
                const sign = Math.sign(target);

                if (sign === -1) {
                  diffToTarget = scrollSnap - (1 + scrollProgress);
                }

                if (sign === 1) {
                  diffToTarget = scrollSnap + (1 - scrollProgress);
                }
              }
            });
          }

          const tweenValue = 1 - Math.abs(diffToTarget * tweenFactor.current);
          const scale = numberWithinRange(tweenValue, 0, 1).toString();
          const tweenNode = tweenNodes.current[slideIndex];
          tweenNode.style.transform = `scale(${scale})`;
        });
      });
    },
    [],
  );

  const {
    prevBtnDisabled,
    nextBtnDisabled,
    onPrevButtonClick,
    onNextButtonClick,
  } = usePrevNextButtons(emblaApi);

  useEffect(() => {
    if (emblaApi) {
      setTweenNodes(emblaApi);
      setTweenFactor(emblaApi);
      tweenScale(emblaApi);
      emblaApi
        .on('reInit', setTweenNodes)
        .on('reInit', setTweenFactor)
        .on('reInit', tweenScale)
        .on('scroll', tweenScale)
        .on('slideFocus', tweenScale);
    }
  }, [emblaApi, tweenScale, setTweenFactor, setTweenNodes]);

  return (
    <div
      className={'embla mb-7 flex gap-3 px-4 md:max-w-full lg:mb-10 lg:px-0'}
    >
      <PrevButton onClick={onPrevButtonClick} disabled={prevBtnDisabled} />
      <div
        className={'embla__viewport h-91 mb-3 md:px-8 lg:h-85 lg:mb-0 '}
        ref={emblaRef}
      >
        <div
          className={
            'embla__container mb-5 flex items-start justify-between ml-left lg:mb-0 lg:gap-10'
          }
        >
          {reviews.map(
            (
              { id, attributes: { customerName, reviewRate, reviewText } },
              index,
            ) => {
              return (
                <div
                  key={id}
                  className={'embla__slide pl-4 md:basis-1/2 lg:basis-1/3'}
                >
                  <CustomerReviewCard
                    classes={
                      'p-8 flex-1 shadow-card border bg-white border-borderColor rounded-lg md:w-[300px] lg:w-84 embla__slide__number'
                    }
                    chosenCard={selectedIndex === index}
                    key={id}
                    rate={reviewRate}
                    customerName={customerName}
                    reviewInfo={reviewText}
                  />
                </div>
              );
            },
          )}
        </div>
        <div className={'embla__controls lg:hidden'}>
          <div className={'embla__dots'}>
            {scrollSnaps.map((snap, index) => {
              return (
                <DotButton
                  key={snap}
                  onClick={() => onDotButtonClick(index)}
                  className={clsx('w-2 h-2 rounded-full bg-dot', {
                    '!bg-black': index === selectedIndex,
                  })}
                />
              );
            })}
          </div>
        </div>
      </div>
      <NextButton onClick={onNextButtonClick} disabled={nextBtnDisabled} />
    </div>
  );
};
