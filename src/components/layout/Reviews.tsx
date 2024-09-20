import { getUsersContentData } from '@/api/users-content';
import React from 'react';
import ReviewContainer from '../common/Container/ReviewContainer';
import { Title } from '../common/Title';
import { UsersContent } from '../common/UsersContent';

export default async function ReviewContent() {
  const {
    data: {
      attributes: { usersPictures },
    },
  } = await getUsersContentData('api/users-content');
  const { data: pictures } = usersPictures;

  return (
    <section className={'pb-22 lg:pb-27'}>
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
      <UsersContent pictures={pictures} />
      <ReviewContainer />
    </section>
  );
}
