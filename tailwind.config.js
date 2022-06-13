module.exports = {
  mode: 'jit',
  content: ['./src/**/*.{js,ts,jsx,tsx}'],
  theme: {
    extend: {
      colors: {
        primary: '#FF6B4A',
        accent: '#F76342',
      },
      screens: {
        tablet: '800px',
        desktop: '1440px',
      },
      fontSize: {
        xs: ['0.75rem', { lineHeight: '1.125rem' }], // font-size: 12px, line-height: 18px
        'xl': ['1.125rem', { lineHeight: '1.69rem' }], // font-size: 18px, line-height: 150%,
        '2xl': ['1.25rem', { lineHeight: '1.875rem' }], // font-size: 20px, line-height: 30px
        '3xl': ['1.5rem', { lineHeight: '1.5rem' }], // font-size: 24px, line-height: 24px
        '4xl': ['2rem', { lineHeight: '2rem' }], // font-size: 32px, line-height: 32px
        '5xl': ['2.5rem', { lineHeight: '2.5rem' }], // font-size: 40px, line-height: 40px
        '6xl': ['3rem', { lineHeight: '3rem' }], // font-size: 40px, line-height: 40px
        '7xl': ['4rem', { lineHeight: '4rem' }], // font-size: 64px, line-height: 64px
      },
      spacing: {
        4.5: '1.125rem',
        8.5: '2.125rem',
        26: '6.5rem',
        30: '7.5rem',
        74: '18.5rem',
        124: '31rem',
      },
      maxWidth: {
        '1.5xl': '39rem',
        '8xl': '90rem',
      },
      lineHeight: {
        3.5: '0.875rem', // line-height: 14px
      },
      gridColumn: {
        'span-none': 'none',
      },
      backgroundImage: {
        'dashed-border': `url(
          "data:image/svg+xml,%3csvg width='100%25' height='100%25' xmlns='http://www.w3.org/2000/svg'%3e%3crect width='100%25' height='100%25' fill='none' rx='8' ry='8' stroke='white' stroke-opacity='0.5' stroke-width='1.5' stroke-dasharray='6%2c 6' stroke-dashoffset='0' stroke-linecap='square'/%3e%3c/svg%3e"
        )`,
        // eslint-disable-next-line
        'gradient-border': `url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg'%3E%3ClinearGradient id='a' x1='0' x2='0' y1='0' y2='1'%3E%3Cstop offset='0%25' stop-color='%23fff' stop-opacity='100%25'/%3E%3Cstop offset='100%25' stop-color='%23fff' stop-opacity='12%25'/%3E%3C/linearGradient%3E%3Crect width='100%25' height='100%25' rx='8' ry='8' fill='none' stroke='url(%23a)' stroke-width='1'/%3E%3C/svg%3E")`,
      },
    },
  },
  variants: {
    extend: {},
  },
  plugins: [],
};