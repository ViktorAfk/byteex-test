import Image from 'next/image';
import React from 'react';
import { FaqList } from '../common/FaqList';

export const Faq: React.FC = () => {
  return (
    <section className={'pb-13 lg:pb-22'}>
      <div className={'container lg:pl-40 lg:pr-20 xl:pl-52 xl:pr-24'}>
        <div className={'lg:flex lg:gap-22'}>
          <FaqList />
          <div className={'hidden lg:block lg:flex-1'}>
            <Image
              src={'/faq-image.png'}
              width={430}
              height={645}
              alt={'image of girls in different underwear'}
            />
          </div>
        </div>
      </div>
    </section>
  );
};
