import { getFaqData } from '@/api/faq';
import React from 'react';
import { ButtonAndRate } from './Buttons/ButtonAndRate';
import iconsCollection from './Icons/Icons-catalog';
import { SvgIcon } from './Icons/SvgIcon';
import { Title } from './Title';
const { plusIcon, minusIcon } = iconsCollection;

export const FaqList: React.FC = async () => {
  const { data: questions } = await getFaqData('api/faqs');

  return (
    <div className={'px-4 md:px-0 lg:flex-1 xl:flex-[1.5]'}>
      <Title
        tag={'h2'}
        className={
          'text-primary px-8 text-center mb-7 font-montserrat text-h2-mobile lg:text-left lg:text-h2 lg:px-0 lg:mb-14'
        }
      >
        {'Frequently asked questions.'}
      </Title>
      <div className={'w-full mb-10 lg:mb-0'}>
        {questions.map(({ id, attributes: { answer, question } }) => (
          <details
            key={id}
            className={
              'group details pt-6 pb-7 md:px-0 border-b border-borderColor first:border-t'
            }
          >
            <summary
              className={
                'flex justify-between cursor-pointer list-none font-montserrat text-primary text-summary'
              }
            >
              {question}
              <span className={'group-open:hidden'}>
                <SvgIcon
                  path={plusIcon.path}
                  width={plusIcon.width}
                  height={plusIcon.height}
                  fill={plusIcon.fill}
                  viewBox={plusIcon.viewBox}
                  title={plusIcon.title}
                />
              </span>
              <span className={'hidden group-open:flex items-center'}>
                <SvgIcon
                  path={minusIcon.path}
                  width={minusIcon.width}
                  height={minusIcon.height}
                  fill={minusIcon.fill}
                  viewBox={minusIcon.viewBox}
                  title={minusIcon.title}
                />
              </span>
            </summary>
            <div
              className={
                'group-open:animate-fadeInDown font-montserrat pt-3 text-answer text-secondary'
              }
            >
              {answer}
            </div>
          </details>
        ))}
      </div>
      <div className={'lg:hidden'}>
        <ButtonAndRate />
      </div>
    </div>
  );
};
