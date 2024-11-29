/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{html,ts}",
  ],
  theme: {
    extend: {
      fontFamily: {
        'neue': ['Bebas Neue', 'sans-serif'],
        'anton': ['Anton', 'sans-serif'],
        'montserrat': ['Montserrat', 'sans-serif']
      },
      colors: {
        'brown-1': '#C57530',
        'brown-2':'#522412',
        'brown-3': '#E9CEB1'
      },
      backgroundImage: {
        'cover1': "url(/assets/image/bg-2.png)"
      }
    },
  },
  plugins: [],
}