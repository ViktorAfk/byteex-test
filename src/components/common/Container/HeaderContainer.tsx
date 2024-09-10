import React from 'react';
import Banners from '../Banner';

export const HeaderContainer: React.FC = () => {
  return (
    <div
      className={
        'max-w-xs md:max-w-sm lg:max-w-md xl:max-w-5xl mx-auto overflow-x-hidden scrollbar-hide'
      }
    >
      <Banners />
    </div>
  );
};
