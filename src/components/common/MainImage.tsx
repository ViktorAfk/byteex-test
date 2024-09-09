import Image from 'next/image';
import React from 'react';

type Props = {
  classes?: string;
};

export const MainImage: React.FC<Props> = ({ classes = '' }) => {
  return (
    <Image
      className={classes}
      width={725}
      height={423}
      src={'/main-image.png'}
      alt={'collage of girls in different underwear'}
    />
  );
};
