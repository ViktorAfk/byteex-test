import { footerInfoData } from '@/utils/fotter-info';
import Image from 'next/image';
import React from 'react';

export const FooterInfo: React.FC = () => {
  return (
    <ul className={'flex'}>
      {footerInfoData.map(({ id, text, image }) => (
        <li
          key={id}
          className={
            'w-48 flex gap-3 items-center pl-3 border-l border-[#C4C4C480] first:border-l-0'
          }
        >
          <div
            className={
              'w-8 h-8 flex basis-8 justify-center items-center rounded-full bg-[#6666661A]'
            }
          >
            <Image
              src={image.url}
              alt={image.imageInfo}
              width={image.width}
              height={image.height}
            />
          </div>
          <p className={'font-montserrat flex-1 text-secondary text-impact'}>
            {text}
          </p>
        </li>
      ))}
    </ul>
  );
};
