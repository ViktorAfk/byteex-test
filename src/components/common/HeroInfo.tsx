import { baseUrl, getStrapiData } from '@/api/api';
import Image from 'next/image';
import React from 'react';

export default async function HeroInfo() {
  const { data: advantages } = await getStrapiData('/api/hero-advantages');

  return (
    <div className={'mb-10 flex flex-col gap-5'}>
      {advantages.map(({ id, attributes: { description, icon } }) => {
        const {
          data: {
            attributes: { url, width, height, name },
          },
        } = icon;

        return (
          <div className={'flex gap-2 items-center'} key={id}>
            <div
              className={
                'w-8 h-8 flex justify-center items-center basis-8 bg-iconBackground rounded-full'
              }
            >
              <Image
                src={`${baseUrl}${url}`}
                width={width}
                height={height}
                alt={name}
              />
            </div>
            <p
              className={
                'flex-1 font-montserrat text-medium text-secondary leading-6 tracking-wider'
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
