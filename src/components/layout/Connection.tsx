import Image from 'next/image';
import React from 'react';
import { BeYourBest } from '../common/BeYourBest';
import { Title } from '../common/Title';

export const Connection: React.FC = () => {
  return (
    <section className={'bg-connection-bg pt-10 pb-14 lg:pt-20'}>
      <div
        className={'container lg:flex lg:gap-16 xl:pr-14 xl:pl-24 xl:gap-22'}
      >
        <div className={'pb-12 hidden lg:block lg:flex-1 '}>
          <Image
            src={'/conection-image-gr.png'}
            width={524}
            height={664}
            alt={'Image with girls in different underwear'}
          />
        </div>
        <div className={'px-4 lg:px-0 lg:flex-1'}>
          <Title
            tag={'h2'}
            className={
              'text-primary text-center font-montserrat text-h2-mobile mb-10 lg:text-h2 xl:text-left'
            }
          >
            {'Be your best self.'}
          </Title>
          <div className={'pb-12 flex justify-center lg:hidden'}>
            <Image
              src={'/conection-image-gr.png'}
              width={490}
              height={360}
              alt={'Image with girls in different underwear'}
            />
          </div>
          <BeYourBest />
        </div>
      </div>
    </section>
  );
};
