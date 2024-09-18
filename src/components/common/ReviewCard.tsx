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
      attributes: { name: imageName, url },
    },
  } = userIcon;

  return (
    <article
      className={
        ' absolute bottom-0 z-40 w-96 translate-y-1/2 h-33 p-4 lg:w-104 shadow-card border bg-white border-borderColor rounded-lg xl:h-44'
      }
    >
      <div className={'flex gap-3 mb-3 items-center w-full'}>
        <Image
          width={39}
          height={39}
          src={`${baseUrl}${url}`}
          alt={imageName}
        />
        <div className={'flex flex-col-reverse lg:flex-row lg:gap-3'}>
          <p
            className={
              'font-montserrat text-secondary text-medium leading-6 tracking-wider'
            }
          >
            {userName}
          </p>
          <div className={'flex gap-1 items-center'}>
            <Rate rate={rate} />
            <p className={'text-xs text-secondary'}>{additionalInfo}</p>
          </div>
        </div>
      </div>
      <div>
        <p
          className={
            'text-xs text-secondary overflow-y-hidden line-clamp-2 font-inter tracking-wider leading-6 h-full xl:line-clamp-5'
          }
        >
          {description}
        </p>
      </div>
    </article>
  );
}
