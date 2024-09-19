import Image from 'next/image';
import React from 'react';
import { ButtonAndRate } from '../common/ButtonAndRate';
import { FooterButton } from '../common/FooterButton';
import { FooterInfo } from '../common/FooterInfo';
import { Title } from '../common/Title';

export const Footer: React.FC = () => {
  return (
    <footer className={'py-13 footer lg:pt-22 lg:pb-20'}>
      <div className={'container'}>
        <Title
          className={
            'font-montserrat text-primary text-center text-h2-mobile mb-5 lg:text-h2'
          }
          tag={'h2'}
        >
          {'Find something you love.'}
        </Title>
        <p
          className={
            'hidden text-center font-montserrat text-answer text-secondary mb-10 lg:block'
          }
        >
          {
            'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Fusce lobortis sapien'
          }{' '}
          <br />
          {
            'facilisis tincidunt pellentesque. In eget ipsum et felis finibus consequat.'
          }
        </p>
        <p
          className={
            'font-montserrat text-center text-secondary text-answer mb-6 lg:hidden'
          }
        >
          {'Click below to browse our collection!'}
        </p>

        <div className={'flex justify-center mb-13 lg:mb-14'}>
          <Image
            width={815}
            height={373}
            src={'/footer-image.png'}
            alt={'group of girls in our Loungewear'}
          />
        </div>
        <div className={'flex justify-center lg:mb-5'}>
          <FooterButton />
          <ButtonAndRate classes={'lg:hidden'} />
        </div>
        <div className={'hidden lg:flex justify-center'}>
          <FooterInfo />
        </div>
      </div>
    </footer>
  );
};
