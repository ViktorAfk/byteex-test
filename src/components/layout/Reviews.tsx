import React from 'react';
import { Title } from '../common/Title';

export const ReviewContent: React.FC = () => {
  return (
    <section>
      <div className={'container'}>
        <Title
          tag={'h2'}
          className={
            'text-primary font-montserrat text-center mb-10 text-h2-mobile lg:text-h2'
          }
        >
          {'What are our fans saying?'}
        </Title>

        <div className={'flex justify-center px-2 mb-12'}>
          <p
            className={
              'text-secondary font-montserrat text-center text-description w-[610px]'
            }
          >
            {
              'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Fusce lobortis sapien facilisis tincidunt pellentesque. In eget ipsum et felis finibus consequat. Fusce non nibh luctus.'
            }
          </p>
        </div>
      </div>
    </section>
  );
};
