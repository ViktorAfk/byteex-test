import React from 'react';
import { GreenImpactInfo } from '../common/GreenImpactInfo';
import { Title } from '../common/Title';

export const InfoBanner: React.FC = () => {
  return (
    <section className={'bg-connection-bg pt-10 pb-14 lg:pt-13 lg:pb-11'}>
      <div className={'container'}>
        <Title
          className={
            'font-montserrat text-center mb-9 text-infoText text-bannerHeader lg:mb-5'
          }
        >
          {'Our Total Green Impact'}
        </Title>
        <GreenImpactInfo />
      </div>
    </section>
  );
};
