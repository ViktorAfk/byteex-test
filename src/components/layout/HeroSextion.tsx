import Image from 'next/image';
import React from 'react';
import { NavigationButton } from '../common/Button';
import HeroInfo from '../common/HeroInfo';
import { MainImage } from '../common/MainImage';
import ReviewCard from '../common/ReviewCard';
import { Title } from '../common/Title';

export const HeroSection: React.FC = () => {
  return (
    <div>
      <div className={'container pt-8'}>
        <Image
          src={'/company-logo.png'}
          width={235}
          height={36}
          alt={'company logo'}
          className={'mb-16 sm:text-center'}
        />
        <div className={'flex gap-6'}>
          <div className={'flex-1'}>
            <Title
              className={
                'text-primary mb-6 font-montserrat text-header tracking-wide leading-header'
              }
              tag={'h1'}
            >
              {'Don’t apologize for being comfortable.'}
            </Title>
            <HeroInfo />
            <NavigationButton text={'Customize Your Outfit'} />
          </div>
          <div>
            <MainImage />
          </div>
        </div>
        <ReviewCard />
      </div>
    </div>
  );
};
