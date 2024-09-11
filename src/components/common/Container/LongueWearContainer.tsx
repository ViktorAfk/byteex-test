import { getLoungeWearData } from '@/api/lounge-wear';
import React from 'react';
import { LongWearCarousel } from '../embla/LoungeWear/LongWearCarousel';

export default async function LongueWearContainer() {
  const { data: images } = await getLoungeWearData('api/loungewears');

  return (
    <div>
      <LongWearCarousel images={images} />
    </div>
  );
}
