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
      {/* <div
        ref={scroll}
        className={
          'mb-3 grid grid-flow-col auto-cols-max gap-4 overflow-x-auto overscroll-x-contain snap-x snap-mandatory lg:flex lg:gap-0 lg:items-center lg:justify-between'
        }
      >
        {benefitImages.map(({ id, url, width, height, description }) => (
          <Image
            tabIndex={0}
            key={id}
            src={url}
            width={width}
            height={height}
            alt={description}
          />
        ))}
      </div> */}
      <EmblaCarousel images={benefitImages} />
      {/* <div className={'embla'} ref={emblaRef}>
        <div className={'embla__container'}>
          {benefitImages.map(({ id, url, width, height, description }) => (
            <Image
              className={'embla__slide'}
              tabIndex={0}
              key={id}
              src={url}
              width={width}
              height={height}
              alt={description}
            />
          ))}
        </div>
      </div>
      <div className={'flex w-full justify-center gap-2 lg:hidden'}>
        {dots.map((dot) => (
          <span key={dot} className={'w-2 h-2 rounded-full bg-dot'} />
        ))} */}
      {/* </div> */}
    </div>
  );
};
