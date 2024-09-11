import { BenefitImage } from '@/utils/benefit-images';
import clsx from 'clsx';
import useEmblaCarousel from 'embla-carousel-react';
import Image from 'next/image';
import React from 'react';
import { DotButton, useDotButton } from './EmblaDots';

type Props = {
  images: BenefitImage[];
};

export const EmblaCarousel: React.FC<Props> = ({ images }) => {
  const [emblaRef, emblaApi] = useEmblaCarousel();

  const { selectedIndex, scrollSnaps, onDotButtonClick } =
    useDotButton(emblaApi);

  return (
    <div className={'embla xl:max-w-full xl:m-0 xl:pointer-events-none'}>
      <div className={'embla__viewport mb-3'} ref={emblaRef}>
        <div className={'embla__container lg:justify-between lg:h-fit lg:g-0'}>
          {images.map(({ id, url, width, height, description }) => (
            <Image
              className={'embla__slide lg:flex-none'}
              tabIndex={0}
              key={id}
              src={url}
              width={width}
              height={height}
              alt={description}
            />
          ))}
        </div>
      </div>

      <div className={'embla__controls xl:hidden'}>
        <div className={'embla__dots'}>
          {scrollSnaps.map((snap, index) => {
            return (
              <DotButton
                key={snap}
                onClick={() => onDotButtonClick(index)}
                className={clsx('w-2 h-2 rounded-full bg-dot', {
                  'bg-black': index === selectedIndex,
                })}
              />
            );
          })}
        </div>
      </div>
    </div>
  );
};
