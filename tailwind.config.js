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
          light: '#FADA88',
          DEFAULT: '#FFC01A',
          dark: '#A8811B',
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
