import clsx from 'clsx';
import React from 'react';
import { Rate } from './Rate';

type Props = {
  customerName: string;
  reviewInfo: string;
  rate: number;
  classes: string;
  chosenCard: boolean;
};

export const CustomerReviewCard: React.FC<Props> = ({
  customerName,
  reviewInfo,
  rate,
  classes,
  chosenCard = false,
}) => {
  return (
    <article className={classes}>
      <div className={'flex gap-4 mb-3'}>
        <div className={'w-10 h-10 bg-primary rounded-full'} />
        <div>
          <Rate classes={'mb-1'} rate={rate} />
          <h4
            className={
              'font-montserrat text-secondary text-medium leading-6 tracking-wider'
            }
          >
            {customerName}
          </h4>
        </div>
      </div>
      <p
        className={clsx(
          'text-secondary font-inter tracking-wider leading-6 text-sm lg:line-clamp-4',
          { 'lg:line-clamp-none': chosenCard },
        )}
      >
        {reviewInfo}
      </p>
    </article>
  );
};
