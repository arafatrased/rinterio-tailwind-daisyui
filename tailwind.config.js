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
    extend: {
      colors: {
        'bgcolor' : "#ABEF5F"
      }
    },
  },
  plugins: [
    require('daisyui'),
  ],
}
