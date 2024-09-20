'use client';
import { benefitImages } from '@/utils/benefit-images';
import { Title } from './Title';
import { EmblaCarousel } from './embla/EmblaCarousel';

export const AsSeenIn: React.FC = () => {
  return (
    <div className={'mb-11 lg:mb-28 xl:pr-14 xl:pl-24'}>
      <Title
        className={
          'font-montserrat mb-4 text-seen-in text-textSeenIn text-center lg:text-textSeenIn-sm lg:mb-8'
        }
      >
        {'as seen in'}
      </Title>
      <EmblaCarousel images={benefitImages} />
    </div>
  );
};
