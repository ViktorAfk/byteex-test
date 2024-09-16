import { getOrderRulesData } from '@/api/order-rules';
import React from 'react';
import { NavigationButton } from '../Button';
import { Rate } from '../Rate';
import { Title } from '../Title';
import { OrderCarousel } from '../embla/OrderSteps/OrderCarousel';

export default async function OrderContainer() {
  const { data: orderSteps } = await getOrderRulesData('api/order-rules');

  return (
    <div className={'container'}>
      <Title
        tag={'h2'}
        className={
          'text-primary font-montserrat text-center mb-24 text-h2-mobile lg:text-h2 lg:mb-46'
        }
      >
        {'Comfort made easy'}
      </Title>
      <div className={'mb-10 lg:mb-14 xl:flex xl:justify-center'}>
        <OrderCarousel steps={orderSteps} />
      </div>
      <div className={'flex flex-col items-center'}>
        <NavigationButton classes={'mb-3'} text={'Customize Your Outfit'} />
        <div className={'flex justify-center items-center gap-3'}>
          <Rate rate={5} />
          <p className={'text-xs text-secondary'}>
            {'Over 500+ 5 Star Reviews Online'}
          </p>
        </div>
      </div>
    </div>
  );
}
