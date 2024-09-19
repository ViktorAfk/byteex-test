import { getStrapiData } from '@/api/api';
import Image from 'next/image';
import React from 'react';

export default async function HeroInfo() {
  const { data: advantages } = await getStrapiData('/api/hero-advantages');

  return (
    <div className={'flex flex-col gap-6 mb-7 lg:gap-5 lg:mb-10'}>
      {advantages.map(({ id, attributes: { description, icon } }) => {
        const {
          data: {
            attributes: { url, width, height, name },
          },
        } = icon;

        return (
          <div className={'flex gap-3 items-center px-8 lg:px-2'} key={id}>
            <div
              className={
                'w-8 h-8 flex justify-center items-center basis-8 bg-iconBackground rounded-full'
              }
            >
              <Image src={url} width={width} height={height} alt={name} />
            </div>
            <p
              className={
                'flex-1 font-montserrat text-xs text-secondary leading-6 tracking-wider lg:text-medium'
              }
            >
              {description}
            </p>
          </div>
        );
      })}
    </div>
  );
}
