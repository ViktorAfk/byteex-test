import React from 'react';
import { Title } from '../common/Title';

export const Order: React.FC = () => {
  return (
    <section className={'pt-14 lg:pt-19'}>
      <div className={'container'}>
        <Title
          tag={'h2'}
          className={
            'text-primary font-montserrat text-center mb-24 text-h2-mobile lg:text-h2 lg:mb-46'
          }
        >
          {'Comfort made easy'}
        </Title>
      </div>
    </section>
  );
};
