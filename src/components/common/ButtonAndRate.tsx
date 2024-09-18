import React from 'react';
import { NavigationButton } from './Button';
import { Rate } from './Rate';

export const ButtonAndRate: React.FC = () => {
  return (
    <div className={'flex flex-col items-center'}>
      <NavigationButton classes={'mb-3'} text={'Customize Your Outfit'} />
      <div className={'flex justify-center items-center gap-3'}>
        <Rate rate={5} />
        <p className={'text-xs text-secondary'}>
          {'Over 500+ 5 Star Reviews Online'}
        </p>
      </div>
    </div>
  );
};
