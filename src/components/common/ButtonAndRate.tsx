import React from 'react';
import { NavigationButton } from './Button';
import { Rate } from './Rate';

type Props = {
  classes?: string;
  buttonClasses?: string;
};

export const ButtonAndRate: React.FC<Props> = ({ classes, buttonClasses }) => {
  return (
    <div className={`flex flex-col items-center ${classes}`}>
      <NavigationButton
        classes={`mb-3 ${buttonClasses}`}
        text={'Customize Your Outfit'}
      />
      <div className={'flex justify-center items-center gap-3'}>
        <Rate rate={5} />
        <p className={'text-xs text-secondary'}>
          {'Over 500+ 5 Star Reviews Online'}
        </p>
      </div>
    </div>
  );
};
