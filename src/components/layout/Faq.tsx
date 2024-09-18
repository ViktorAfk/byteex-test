import React from 'react';
import { FaqList } from '../common/FaqList';

export const Faq: React.FC = () => {
  return (
    <section>
      <div className={'container'}>
        <FaqList />
      </div>
    </section>
  );
};
