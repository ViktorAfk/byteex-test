import React from 'react';
import { NavigationButton } from './Button';

export const BeYourBest: React.FC = () => {
  return (
    <div>
      <div className={'flex flex-col gap-6 px-4 lg:px-0 lg:mb-7'}>
        <p className={'font-montserrat text-description text-connection'}>
          {'Hi! My name’s [Insert Name], and I founded [Insert] in ____.'}
        </p>
        <p className={'font-montserrat text-description text-connection'}>
          {
            'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Fusce lobortis sapien facilisis tincidunt pellentesque. In eget ipsum et felis finibusconsequat.'
          }
        </p>
        <p className={'font-montserrat text-description text-connection'}>
          {
            '  Fusce non nibh luctus, dignissim risus quis, bibendum dolor. Donec placerat volutpat ligula, ac consectetur felis varius non. Aliquam anunc rutrum, porttitor dolor eu, pellentesque est. Vivamus id arcucongue, faucibus libero nec, placerat ligula.'
          }
        </p>
        <p className={'font-montserrat text-description text-connection'}>
          {
            'Orci varius natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus. Sed eu nisl a metus ultrices sodales.'
          }
        </p>
        <p className={'font-montserrat text-description text-connection'}>
          {
            '      Fusce non ante velit. Sed auctor odio eu semper molestie. Nam mattis, sapien eget lobortis fringilla, eros ipsum tristique tellus, ac convallisurna massa at nibh.'
          }
        </p>
        <p className={'font-montserrat text-description text-connection'}>
          {
            'Duis non fermentum augue. Vivamus laoreet aliquam risus, sed euismod leoliquam ut. Vivamus in felis eu lacus feugiat aliquam nec in sapien.'
          }
        </p>
        <p className={'font-montserrat text-description text-connection'}>
          {'Cras mattis varius mollis.'}
        </p>
      </div>
      <div className={'hidden lg:block'}>
        <NavigationButton text={'Customize Your Outfit'} />
      </div>
    </div>
  );
};
