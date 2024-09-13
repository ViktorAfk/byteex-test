import { baseUrl } from '@/api/api';
import clsx from 'clsx';
import Image from 'next/image';
import React from 'react';
import { Title } from './Title';

type Props = {
  isOdd?: boolean;
  width: number;
  height: number;
  imgInfo: string;
  imageUrl: string;
  orderTitle: string;
  orderInfo: string;
};
// /api/order-rules

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
        'flex h-[321px] w-[346px] flex-col items-center gap-[0.875rem] rounded-lg bg-connection',
        {
          'bg-[F9F0E6]': isOdd,
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
        className={'font-montserrat text-primary text-h3-mobile lg:text-h3'}
      >
        {orderTitle}
      </Title>
      <p className={'font-montserrat text-secondary text-description'}>
        {orderInfo}
      </p>
    </article>
  );
};
