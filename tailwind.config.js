/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ['*'],
  theme: {
    fontFamily: {
      'monrope': ["Manrope", "sans-serif"],

    },
    container: {
      center: true,
    },
    extend: {},
  },
  plugins: [
    require('daisyui'),
  ],
}
