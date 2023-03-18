/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ['./src/**/*.{js,jsx}', './public/index.html'],
  theme: {
    extend: {
      colors: {
        myGreen: '#3dbe14',
      },
      spacing: {
        18: '4.5rem',
        30: '7.5rem',
        88: '22rem',
        104: '26rem',
        112: '28rem',
        128: '32rem',
        mobileScreen: 'calc(var(--vh, 1vh) * 100)',
      },
    },
  },
  plugins: [],
};
