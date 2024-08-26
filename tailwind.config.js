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
      backgroundImage: {
        'img1': "url('assets/img1.png')",
        
      },
      colors: {
        'bgcolor' : "#ABEF5F"
      }
    },
  },
  plugins: [
    require('daisyui'),
  ],
}
