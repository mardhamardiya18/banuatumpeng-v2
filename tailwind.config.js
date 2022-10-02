/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './public/**/*.{html,css,js}',
    './src/**/*.[html,css,js}',
    './index.html'
  ],
  theme: {
    container :{
      center : true,
    },
    extend: {
      colors: {
        'marronku' : '#911F27',
        'orangeku' : '#ECAC5D',
        'cream-1'  : '#FCF0C8',
        'cream-2'   : '#FFFAE1',
        'blacku'    : '#1E1B1B'
      }
    },
  },
  plugins: [],
}
