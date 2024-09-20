import { ImageData } from '@/api/types';
import Image from 'next/image';
import React from 'react';

type Props = {
  pictures: ImageData[];
};

export const UsersContent: React.FC<Props> = ({ pictures }) => {
  return (
    <div>
      <div
        className={
          'container px-0 mb-10 grid grid-flow-col auto-cols-[24%] grid-rows-2 gap-1 overflow-x-auto overscroll-x-contain md:auto-cols-[15%] lg:mb-19 lg:auto-cols-[13%] xl:grid-cols-11'
        }
      >
        {pictures.map(({ id, attributes }) => (
          <div key={id}>
            <Image
              src={attributes.url}
              width={attributes.width}
              height={attributes.height}
              alt={"user's picture in our cloth"}
            />
          </div>
        ))}
      </div>
    </div>
  );
};
