/** @type {import('tailwindcss').Config} */
export default {
  content: ["./src/**/*.{astro,html,js,jsx,md,mdx,svelte,ts,tsx,vue}"],
  theme: {
    extend: {
      colors: {
        primary: {
          100: '#FFF5F2',
          200: '#FFC7BB',
          300: '#FC9183',
          400: '#F4544A',
          500: '#E61515',
          600: '#B60707',
          700: '#860202',
          800: '#560000',
          900: '#260000',
        },
        accent: {
          100: '#F5F2FF',
          200: '#D0C6FF',
          300: '#A599FD',
          400: '#746CFA',
          500: '#3F3FF2',
          600: '#1C25BF',
          700: '#0C1B8C',
          800: '#061459',
          900: '#020B26',
        },
        neutral: {
          100: '#FCFBFA',
          200: '#F0EDEC',
          300: '#E4DFDF',
          400: '#D8D1D1',
          500: '#CCC4C4',
          600: '#A39A9A',
          700: '#797171',
          800: '#504949',
          900: '#262222',
        },
      },
    },
  },
  plugins: [],
};