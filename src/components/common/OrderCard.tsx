import { baseUrl } from '@/api/api';
import clsx from 'clsx';
import Image from 'next/image';
import React from 'react';
import { Title } from './Title';

type Props = {
  classes?: string;
  isOdd?: boolean;
  width: number;
  height: number;
  imgInfo: string;
  imageUrl: string;
  orderTitle: string;
  orderInfo: string;
};

export const OrderCard: React.FC<Props> = ({
  isOdd = false,
  height,
  width,
  imageUrl,
  imgInfo,
  orderTitle,
  orderInfo,
}) => {
  return (
    <article
      className={clsx(
        'flex h-72 w-72 border border-borderColor,  px-8 flex-col items-center justify-center gap-[0.875rem] rounded-lg bg-[#F9F0E6] lg:px-9 lg:w-[321px] lg:h-[346px]',
        {
          '!bg-[#F0EEEF] !shadow-order': isOdd,
        },
      )}
    >
      <Image
        width={width}
        height={height}
        src={`${baseUrl}${imageUrl}`}
        alt={imgInfo}
      />
      <Title
        tag={'h3'}
        className={
          'font-montserrat text-primary text-center text-h3-mobile lg:text-h3'
        }
      >
        {orderTitle}
      </Title>
      <p
        className={
          'font-montserrat text-secondary text-center text-description'
        }
      >
        {orderInfo}
      </p>
    </article>
  );
};
