import { getFaqData } from '@/api/faq';
import React from 'react';
import iconsCollection from './Icons-catalog';
import { SvgIcon } from './SvgIcon';
import { Title } from './Title';
const { plusIcon } = iconsCollection;

export const FaqList: React.FC = async () => {
  const { data: questions } = await getFaqData('api/faqs');

  return (
    <div>
      <Title
        tag={'h2'}
        className={
          'text-primary mb-7 font-montserrat text-h2-mobile lg:text-h2 lg:mb-14'
        }
      >
        {'Frequently asked questions.'}
      </Title>
      <div className={'w-full'}>
        {questions.map(({ id, attributes: { answer, question } }) => (
          <details
            key={id}
            className={'pt-6 pb-7 border-b border-borderColor first:border-t'}
          >
            <summary
              className={
                'flex justify-between cursor-pointer list-none font-montserrat text-primary text-summary'
              }
            >
              {question}
              <span>
                <SvgIcon
                  path={plusIcon.path}
                  width={plusIcon.width}
                  height={plusIcon.height}
                  fill={plusIcon.fill}
                  viewBox={plusIcon.viewBox}
                  title={plusIcon.title}
                />
              </span>
            </summary>
            <p className={'font-montserrat text-answer text-secondary'}>
              {answer}
            </p>
          </details>
        ))}
      </div>
    </div>
  );
};
