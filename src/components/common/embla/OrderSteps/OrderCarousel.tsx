'use client';
import { OrderRule } from '@/api/types';
import useEmblaCarousel from 'embla-carousel-react';
import React from 'react';
import { OrderCard } from '../../OrderCard';
import {
  NextButton,
  PrevButton,
  usePrevNextButtons,
} from '../LoungeWear/LongCarouselArrowButton';
type Props = {
  steps: OrderRule[];
};

export const OrderCarousel: React.FC<Props> = ({ steps }) => {
  const [emblaRef, emblaApi] = useEmblaCarousel();

  const {
    prevBtnDisabled,
    nextBtnDisabled,
    onPrevButtonClick,
    onNextButtonClick,
  } = usePrevNextButtons(emblaApi);

  return (
    <div
      className={
        'embla flex gap-4 px-4 xl:max-w-full lg:px-0 xl:m-0 xl:pointer-events-none'
      }
    >
      <PrevButton
        isHidden={true}
        onClick={onPrevButtonClick}
        disabled={prevBtnDisabled}
      />
      <div className={'embla__viewport mb-3'} ref={emblaRef}>
        <div className={'embla__container lg:h-fit lg:gap-10'}>
          {steps.map(
            (
              { id, attributes: { information, orderIcon, orderTitle } },
              index,
            ) => {
              const { width, height, name, url } = orderIcon.data.attributes;
              const itemNumber = index + 1;

              return (
                <div
                  key={id}
                  className={
                    'embla__slide flex justify-center md:basis-1/3 xl:flex-none'
                  }
                >
                  <OrderCard
                    key={id}
                    isOdd={itemNumber % 2 === 1}
                    orderTitle={orderTitle}
                    orderInfo={information}
                    imageUrl={url}
                    imgInfo={name}
                    width={width}
                    height={height}
                  />
                </div>
              );
            },
          )}
        </div>
      </div>
      <NextButton
        isHidden={true}
        onClick={onNextButtonClick}
        disabled={nextBtnDisabled}
      />
    </div>
  );
};
