import Image from 'next/image';
import React from 'react';
import { NavigationButton } from './Button';

export const FooterButton: React.FC = () => {
  return (
    <div className={' hidden  flex-col gap-2 lg:flex'}>
      <NavigationButton classes={'lg:w-92'} text={'Customize Your Outfit'} />
      <div className={'flex gap-2 items-center'}>
        <p
          className={
            'pr-2 border-r flex gap-1 items-center text-xxs font-inter text-[#1FAD40] border-[#C4C4C480]'
          }
        >
          <span>
            <Image
              width={11}
              height={11}
              src={'/footer-clock-icon.svg'}
              alt={'Clock icon which means fast delivery'}
            />
          </span>
          {'Ships in 1-2 Days'}
        </p>
        <Image
          width={243}
          height={22}
          src={'/footer-payment-system.png'}
          alt={'List of labels different payment resources'}
        />
      </div>
    </div>
  );
};
