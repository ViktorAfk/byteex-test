import React from 'react';
import Banners from '../Banner';

export const HeaderContainer: React.FC = () => {
  return (
    <div className={'container overflow-x-auto'}>
      <Banners />
    </div>
  );
};
