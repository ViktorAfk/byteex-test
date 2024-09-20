import { getCustomersReviewsData } from '@/api/customer-reviews';
import React from 'react';
import { ButtonAndRate } from '../Buttons/ButtonAndRate';
import { ReviewsCarousel } from '../embla/Reviews/ReviewsCarousel';

export default async function ReviewContainer() {
  const { data: reviews } = await getCustomersReviewsData('api/reviews');

  return (
    <div className={'container lg:pr-10 lg:px-18 xl:px-27'}>
      <ReviewsCarousel reviews={reviews} />
      <div className={'flex justify-center'}>
        <ButtonAndRate buttonClasses={'lg:w-92'} />
      </div>
    </div>
  );
}
