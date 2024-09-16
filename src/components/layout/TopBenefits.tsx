import { AsSeenIn } from '../common/AsSeenIn';
import LongueWearContainer from '../common/Container/LongueWearContainer';

export const TopBenefits = () => {
  return (
    <section className={'wave pt-23 pb-11 md:benefits lg:pb-13 lg:pt-19'}>
      <div className={'container'}>
        <AsSeenIn />
        <div>
          <LongueWearContainer />
        </div>
      </div>
    </section>
  );
};
