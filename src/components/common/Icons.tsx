interface Icon {
  path: string;
  width: string;
  height: string;
  viewBox: string;
  fill: string;
  title: string;
}

export const arrowIcon: Icon = {
  path: 'M18.1072 10L23 5.00003L18.1072 0L16.6372 1.5022L19.0205 3.93781L0 3.93781V6.06226L19.0205 6.06226L16.6372 8.4978L18.1072 10Z',
  width: '23',
  height: '10',
  viewBox: '0 0 23 10',
  title: 'Arrow right icon',
  fill: 'white',
};

type GroupProps = {
  classes?: string;
};

export const GroupIcon: React.FC<GroupProps> = ({ classes }) => {
  return (
    <svg
      className={classes}
      width={'26'}
      height={'23'}
      viewBox={'0 0 26 23'}
      fill={'none'}
      xmlns={'http://www.w3.org/2000/svg'}
    >
      <title>{'Group icon'}</title>
      <path
        d={'M14.5 1.5V22'}
        stroke={'#15005B'}
        stroke-width={'1.1'}
        stroke-miterlimit={'10'}
        stroke-linecap={'round'}
        stroke-linejoin={'round'}
      />
      <path
        d={
          'M14.4999 17.2694C11.4486 17.2694 8.98071 14.8015 8.98071 11.7502C8.98071 8.69884 11.4486 6.23096 14.4999 6.23096'
        }
        stroke={'#15005B'}
        stroke-width={'1.1'}
        stroke-miterlimit={'10'}
        stroke-linecap={'round'}
        stroke-linejoin={'round'}
      />
      <path
        d={'M7.25391 4.50439L8.92545 6.17593'}
        stroke={'#15005B'}
        stroke-width={'1.1'}
        stroke-miterlimit={'10'}
        stroke-linecap={'round'}
        stroke-linejoin={'round'}
      />
      <path
        d={'M4.25 11.75H6.61538'}
        stroke={'#15005B'}
        stroke-width={'1.1'}
        stroke-miterlimit={'10'}
        stroke-linecap={'round'}
        stroke-linejoin={'round'}
      />
      <path
        d={'M7.25391 18.9962L8.92545 17.3247'}
        stroke={'#15005B'}
        stroke-width={'1.1'}
        stroke-miterlimit={'10'}
        stroke-linecap={'round'}
        stroke-linejoin={'round'}
      />
      <path
        d={
          'M14.5 9.03C15.4462 7.35846 17.2438 6.23096 19.3017 6.23096C19.4279 6.23096 19.5462 6.23884 19.6723 6.24673C18.3556 6.94057 17.4646 8.32038 17.4646 9.90519C17.4646 12.1917 19.3175 14.0446 21.604 14.0446C22.8656 14.0446 23.9931 13.4769 24.75 12.586C24.34 15.2431 22.0613 17.2694 19.3017 17.2694C17.2438 17.2694 1.94615 15.7161 1 14.0446'
        }
        stroke={'#15005B'}
        stroke-width={'1.1'}
        stroke-miterlimit={'10'}
        stroke-linecap={'round'}
        stroke-linejoin={'round'}
      />
    </svg>
  );
};
