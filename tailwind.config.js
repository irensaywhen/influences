const defaultTheme = require('tailwindcss/defaultTheme');

module.exports = {
  purge: ['./src/**/*.js', './public/index.html'],
  darkMode: false, // or 'media' or 'class'
  theme: {
    extend: {
      fontFamily: {
        sans: ['Lato', ...defaultTheme.fontFamily.sans],
      },
      colors: {
        primary: {
          light: '#FFCC46',
          DEFAULT: '#FFC01A',
          dark: '#DB9F00',
        },
        secondary: {
          light: '#6870AC',
          DEFAULT: '#2838B4',
          dark: '#11184D',
        },
      },
    },
  },
  variants: {},
  plugins: [],
};
