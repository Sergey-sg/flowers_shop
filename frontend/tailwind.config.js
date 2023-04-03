/** @type {import('tailwindcss').Config} */
const defaultTheme = require('tailwindcss/defaultTheme')

module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    screens: {
      'esm': {'min': '320px', 'max': '620px'},
      ...defaultTheme.screens,
    },
    extend: {},
  },
  plugins: [],
}
