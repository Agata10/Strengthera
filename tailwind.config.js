/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],
  theme: {
    extend: {
      fontFamily: {
        logo: ['Mulish'],
        workout: ['Noto Sans'],
      },
      fontSize: {
        max: '10rem',
      },
    },
  },
  plugins: [],
};
