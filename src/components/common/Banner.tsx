import { getBannersData } from '@/api/banner';
import { Fragment } from 'react';

export default async function Banners() {
  const { data: banners } = await getBannersData('api/banners');
  const reversedCopy = Array.from(banners).map((banner) => ({
    ...banner,
    id: crypto.randomUUID(),
  }));
  const mixedArray = [...banners, ...reversedCopy];
  const arrayMiddle = mixedArray.length / 2;

  return (
    <div className={'flex max-v-max animate-scroll px-4'}>
      {mixedArray.map(({ id, attributes }, index) => (
        <Fragment key={id}>
          <p
            className={
              'font-inter px-2 first:pl-0 last:pr-0 text-banner text-xxs text-nowrap'
            }
          >
            {attributes.benefit}
          </p>
          {(index + 1) % arrayMiddle !== 0 && (
            <span className={'text-xxs text-[#56565680]'}>{'|'}</span>
          )}
        </Fragment>
      ))}
    </div>
  );
}
