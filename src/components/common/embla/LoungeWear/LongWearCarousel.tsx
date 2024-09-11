'use client';
import { baseUrl } from '@/api/api';
import { LoungeWear } from '@/api/types';
import useEmblaCarousel from 'embla-carousel-react';
import Image from 'next/image';
import React from 'react';

type Props = {
  images: LoungeWear[];
};

export const LongWearCarousel: React.FC<Props> = ({ images }) => {
  const [emblaRef, emblaApi] = useEmblaCarousel();

  const duplicateArray = [...images]
    .reverse()
    .map((image) => ({ ...image, id: crypto.randomUUID() }));

  return (
    <div className={'embla'}>
      <div className={'embla__viewport'} ref={emblaRef}>
        <div className={'embla__container'}>
          {[...images, ...duplicateArray].map(
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
                    src={`${baseUrl}${url}`}
                    width={width}
                    height={height}
                    alt={name}
                  />
                  <h4 className={'text-center'}>{title}</h4>
                </div>
              );
            },
          )}
        </div>
      </div>
    </div>
  );
};
