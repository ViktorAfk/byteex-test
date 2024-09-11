import { AsSeenIn } from '../common/AsSeenIn';
import { Title } from '../common/Title';

export const TopBenefits = () => {
  return (
    <section className={'benefits pt-23 pb-11 max-sm:wave lg:pb-13 lg:pt-19'}>
      <div className={'container'}>
        <AsSeenIn />
        <div>
          <Title tag={'h2'}>{'Loungewear you can be proud of.'}</Title>
        </div>
      </div>
    </section>
  );
};
