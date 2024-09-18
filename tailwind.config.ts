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
        fadeInDown: 'fadeInDown 1s ease-out',
      },
      keyframes: {
        scroll: {
          to: { transform: 'translateX(-50%)' },
        },
        fadeInDown: {
          '0%': {
            opacity: '0',
            transform: 'translate3d(0, -100%, 0)',
          },
          '100%': {
            opacity: '1',
            transform: 'none',
          },
        },
      },
      fontFamily: {
        montserrat: ['Montserrat', 'sans-serif'],
        inter: ['Inter', 'serif'],
      },
      boxShadow: {
        card: '0px 3px 10px 0px #00000014',
        order: '0px 3px 10px 1px rgba(0, 0, 0, 0.08);',
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
        'h2-mobile': [
          '1.625rem',
          {
            lineHeight: '34px',
            letterSpacing: '1.04px',
            fontWeight: 400,
          },
        ],
        h2: [
          '2rem',
          {
            lineHeight: '40px',
            letterSpacing: '1.28px',
            fontWeight: 400,
          },
        ],
        'h3-mobile': [
          '1.25rem',
          {
            lineHeight: '24px',
            letterSpacing: '0.8px',
            fontWeight: 400,
          },
        ],
        h3: [
          '1.375rem',
          {
            lineHeight: '24px',
            letterSpacing: '0.88px',
            fontWeight: 400,
          },
        ],
        description: [
          '0.94rem',
          {
            lineHeight: '23px',
            letterSpacing: '0.45px',
            fontWeight: 400,
          },
        ],
        'description-sm': [
          '0.88rem',
          {
            lineHeight: '18px',
            letterSpacing: '0.42px',
            fontWeight: 400,
          },
        ],
        textSeenIn: [
          '0.9375',
          {
            lineHeight: '18px',
            letterSpacing: '0.45px',
            fontWeight: 400,
          },
        ],
        'textSeenIn-sm': [
          '0.9375',
          {
            lineHeight: '18px',
            letterSpacing: '0.45px',
            fontWeight: 400,
          },
        ],
        imageHeader: [
          '13px',
          {
            lineHeight: '22px',
            letterSpacing: '0.39px',
            fontWeight: 400,
          },
        ],
        summary: [
          '1.125rem',
          {
            lineHeight: '24px',
            letterSpacing: '0.64px',
            fontWeight: 400,
          },
        ],
        answer: [
          '0.94rem',
          {
            lineHeight: '22px',
            fontWeight: 400,
            letterSpacing: '0.48px',
          },
        ],
        header: '38px',
        medium: '15px',
      },
      lineHeight: {
        header: '45px',
        mobile: '34px',
      },
      gap: {
        22: '88px',
      },
      padding: {
        13: '52px',
        15: '60px',
        18: '72px',
        19: '76px',
        bottom: '86px',
        22: '88px',
        23: '92px',
        27: '104px',
      },
      margin: {
        left: 'calc(1rem * -1)',
        18: '72px',
        19: '76px',
      },
      colors: {
        primary: '#01005B',
        secondary: '#676869',
        iconBackground: '#F9F0E5',
        star: '#FFB801',
        borderColor: '#EDEDED',
        banner: '#565656',
        'seen-in': '#868787',
        dot: '#C4C4C4',
        'connection-bg': '#F0EEEF',
        connection: '#6C6C6C',
      },
      height: {
        33: '132px',
        85: '340px',
        91: '364px',
      },
      width: {
        89: '356px',
        104: '416px',
        84: '336px',
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
