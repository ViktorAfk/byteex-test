import { bannerInfo } from '@/utils/banner-info';
import Image from 'next/image';
import React from 'react';

export const GreenImpactInfo: React.FC = () => {
  return (
    <div className={'flex justify-center'}>
      <ul className={'flex flex-col w-full px-8 gap-10 md:flex-row md:px-0'}>
        {bannerInfo.map(({ id, image, impotentStat, text }) => (
          <li
            key={id}
            className={
              'flex flex-col gap-3 w-full items-center border-b pb-5 md:last:border-r-0 md:pr-10 md:border-r md:pb-2 md:border-b-0 border-[#C4C4C480]'
            }
          >
            <div
              className={
                'w-11 h-11 flex items-center justify-center bg-[#E2E2E2] rounded-full'
              }
            >
              <Image
                src={image.url}
                width={image.width}
                height={image.height}
                alt={image.imageInfo}
              />
            </div>
            <p
              className={
                'flex flex-col gap-1 text-infoText font-montserrat text-impact'
              }
            >
              <span className={'text-impactBold'}>{impotentStat}</span>
              {text}
            </p>
          </li>
        ))}
      </ul>
    </div>
  );
};
