import Image from 'next/image';
import React from 'react';
import { NavigationButton } from '../common/Button';
import HeroInfo from '../common/HeroInfo';
import { MainImage } from '../common/MainImage';
import ReviewCard from '../common/ReviewCard';
import { Title } from '../common/Title';

export const HeroSection: React.FC = () => {
  return (
    <section>
      <div
        className={
          'container relative pt-8 pb-bottom lg:pr-10 lg:pl-20 xl:pr-14 xl:pl-24 xl:pb-14'
        }
      >
        <div className={'flex justify-center mb-4 lg:mb-16 lg:justify-start'}>
          <Image
            src={'/company-logo.png'}
            width={235}
            height={36}
            alt={'company logo'}
          />
        </div>
        <div className={'lg:flex gap-15'}>
          <div className={'flex-1'}>
            <Title
              className={
                'text-primary text-center text-2xl mb-4 font-montserrat tracking-wide leading-mobile lg:text-header lg:mb-6: lg:leading-header lg:text-left'
              }
              tag={'h1'}
            >
              {'Don’t apologize for being comfortable.'}
            </Title>
            <div className={'text-center mb-6 lg:hidden'}>
              <MainImage />
            </div>
            <HeroInfo />
            <div className={'px-4'}>
              <NavigationButton text={'Customize Your Outfit'} />
            </div>
          </div>
          <div className={'hidden lg:block xl:flex-[1.5]'}>
            <MainImage />
          </div>
        </div>
        <ReviewCard />
      </div>
    </section>
  );
};
