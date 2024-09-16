import { baseUrl } from '@/api/api';
import { getLoungeWearAdvantagesData } from '@/api/loungewear-advantages';
import Image from 'next/image';
import React from 'react';
import { NavigationButton } from './Button';
import { Rate } from './Rate';

export default async function LoungeWearAdvantages() {
  const { data: advantages } = await getLoungeWearAdvantagesData(
    'api/loungewear-advantages',
  );

  return (
    <div>
      <div>
        {advantages.map(
          ({ id, attributes: { title, description, advantageIcon } }) => {
            const { name, width, height, url } = advantageIcon.data.attributes;

            return (
              <article
                key={id}
                className={
                  'flex flex-col items-center px-11 gap-5 pb-10 mb-8 border-b border-[#C4C4C480] last:border-none lg:flex-row lg:px-0 lg:gap-8 lg:pb-4 lg:border-none lg:mb-0 xl:mb-8'
                }
              >
                <div
                  className={
                    'w-11 h-11 flex justify-center items-center lg:self-start basis-11 bg-iconBackground rounded-full'
                  }
                >
                  <Image
                    width={width}
                    height={height}
                    src={`${baseUrl}${url}`}
                    alt={name}
                  />
                </div>
                <div className={'flex-1'}>
                  <h3
                    className={
                      'text-primary font-montserrat text-center text-h3-mobile mb-5 lg:text-h3 lg:mb-4 lg:text-left lg:pt-2'
                    }
                  >
                    {title}
                  </h3>
                  <p
                    className={
                      'text-secondary font-montserrat text-center text-description-sm lg:text-description lg:text-left'
                    }
                  >
                    {description}
                  </p>
                </div>
              </article>
            );
          },
        )}
      </div>
      <div className={'lg:hidden'}>
        <NavigationButton classes={'mb-3'} text={'Customize Your Outfit'} />
        <div className={'flex justify-center items-center gap-3'}>
          <Rate rate={5} />
          <p className={'text-xs text-secondary'}>
            {'Over 500+ 5 Star Reviews Online'}
          </p>
        </div>
      </div>
    </div>
  );
}
