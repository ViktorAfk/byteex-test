import { getLoungeWearData } from '@/api/lounge-wear';
import React from 'react';
import LoungeWearAdvantages from '../LoungwearAdvantages';
import { Title } from '../Title';
import { LongWearCarousel } from '../embla/LoungeWear/LongWearCarousel';

export default async function LongueWearContainer() {
  const { data: images } = await getLoungeWearData('api/loungewears');

  return (
    <div className={'container lg:flex lg:gap-16 xl:pr-14 xl:pl-24 xl:gap-24'}>
      <div>
        <Title
          className={
            'font-montserrat text-center px-2 mb-6 text-primary text-h2-mobile lg:text-h2 lg:mb-12 xl:text-left xl:mb-18'
          }
          tag={'h2'}
        >
          {'Loungewear you can be proud of.'}
        </Title>
        <div className={'mb-14 lg:hidden lg:mb-0'}>
          <LongWearCarousel images={images} />
        </div>
        <LoungeWearAdvantages />
      </div>
      <div className={'hidden lg:block'}>
        <LongWearCarousel images={images} />
      </div>
    </div>
  );
}
