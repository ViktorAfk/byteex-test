'use client';
import { LoungeWear } from '@/api/types';
import clsx from 'clsx';
import useEmblaCarousel from 'embla-carousel-react';
import Image from 'next/image';
import React from 'react';
import { DotButton, useDotButton } from '../EmblaDots';
import {
  NextButton,
  PrevButton,
  usePrevNextButtons,
} from './LongCarouselArrowButton';

type Props = {
  images: LoungeWear[];
};

export const LongWearCarousel: React.FC<Props> = ({ images }) => {
  const [emblaRef, emblaApi] = useEmblaCarousel();

  const {
    prevBtnDisabled,
    nextBtnDisabled,
    onPrevButtonClick,
    onNextButtonClick,
  } = usePrevNextButtons(emblaApi);

  const { selectedIndex, onDotButtonClick } = useDotButton(emblaApi);

  const dataImages = images.map(({ attributes }) => ({
    ...attributes.picture.data,
  }));

  return (
    <div className={'embla max-w-[480px] flex gap-4'}>
      <PrevButton onClick={onPrevButtonClick} disabled={prevBtnDisabled} />
      <div className={'embla__viewport relative'} ref={emblaRef}>
        <div className={'embla__container'}>
          {images.map(
            ({
              id,
              attributes: {
                picture: { data },
                name: title,
              },
            }) => {
              const {
                attributes: { url, width, height, name },
              } = data;

              return (
                <div className={'embla__slide'} key={id}>
                  <Image
                    className={'max-h-dvh mb-3'}
                    src={url}
                    width={width}
                    height={height}
                    alt={name}
                  />
                  <h4
                    className={
                      'text-center font-inter text-imageHeader text-secondary'
                    }
                  >
                    {title}
                  </h4>
                </div>
              );
            },
          )}
        </div>
        <div
          className={
            'flex gap-2 absolute bottom-12 mx-auto left-1/2 -translate-x-1/2'
          }
        >
          {dataImages.map((image, index) => (
            <DotButton
              key={image.id}
              onClick={() => onDotButtonClick(index)}
              className={clsx('w-8 h-8 relative', {
                'border-[2px] border-white': index === selectedIndex,
              })}
            >
              <Image
                src={image.attributes.url}
                fill
                objectFit={'cover'}
                alt={image.attributes.name}
              />
            </DotButton>
          ))}
        </div>
      </div>
      <NextButton onClick={onNextButtonClick} disabled={nextBtnDisabled} />
    </div>
  );
};
