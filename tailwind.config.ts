import type { Config } from 'tailwindcss';

const config: Config = {
  content: [
    './src/components/**/*.{js,ts,jsx,tsx,mdx}',
    './src/app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      animation: {
        scroll: 'scroll 20s linear 0s infinite',
      },
      keyframes: {
        scroll: {
          to: { transform: 'translateX(-50%)' },
        },
      },
      fontFamily: {
        montserrat: ['Montserrat', 'sans-serif'],
        inter: ['Inter', 'serif'],
      },
      boxShadow: {
        card: '0px 3px 10px 0px #00000014',
      },
      fontSize: {
        xxs: [
          '0.69rem',
          {
            lineHeight: '35px',
            letterSpacing: '0.88px',
            fontWeight: 400,
          },
        ],
        header: '38px',
        medium: '15px',
      },
      lineHeight: {
        header: '45px',
        mobile: '34px',
      },
      padding: {
        bottom: '86px',
      },
      colors: {
        primary: '#01005B',
        secondary: '#676869',
        iconBackground: '#F9F0E5',
        star: '#FFB801',
        borderColor: '#EDEDED',
        banner: '#565656',
      },
      height: {
        33: '132px',
      },
      width: {
        89: '356px',
        104: '416px',
      },
      borderRadius: {
        button: '5px',
      },
      container: {
        center: true,
        padding: {
          DEFAULT: '1rem',
          sm: '1rem',
          md: '2rem',
        },
      },
      backgroundImage: {
        'gradient-wave':
          'linear-gradient(180deg, #F9F0E5 -7.8%, rgba(249, 240, 229, 0.18) 38.6%, rgba(249, 240, 229, 0.00) 100%);',
      },
    },
    screens: {
      sm: '425px',
      md: '744px',
      lg: '1024px',
      xl: '1440px',
    },
  },
  plugins: [],
};

export default config;
