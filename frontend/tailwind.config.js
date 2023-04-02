/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    screens: {
      'esm': {'min': '320px', 'max': '620px'}
    },
    extend: {},
  },
  plugins: [],
}
