import { baseUrl } from '@/api/api';
import { getReviewData } from '@/api/hero-review';
import Image from 'next/image';
import React from 'react';
import { Rate } from './Rate';

export default async function ReviewCard() {
  const { data: review } = await getReviewData('/api/review-card');

  const {
    attributes: { userName, additionalInfo, rate, userIcon, description },
  } = review;

  const {
    data: {
      attributes: { name: imageName, width, height, url },
    },
  } = userIcon;
  return (
    <article
      className={
        'absolute bottom-0 translate-y-1/2 p-4 w-104 shadow-card border border-borderColor rounded-lg'
      }
    >
      <div className={'flex gap-3 mb-3 items-center w-full'}>
        <Image
          width={39}
          height={39}
          src={`${baseUrl}${url}`}
          alt={imageName}
        />
        <div className={'flex gap-3'}>
          <p
            className={
              'font-montserrat text-secondary text-medium leading-6 tracking-wider'
            }
          >
            {userName}
          </p>
          <div className="flex gap-1 items-center">
            <Rate rate={rate} />
            <p className={'text-xs text-secondary'}>{additionalInfo}</p>
          </div>
        </div>
      </div>
      <p
        className={'text-xs text-secondary font-inter tracking-wider leading-6'}
      >
        {description}
      </p>
    </article>
  );
}
