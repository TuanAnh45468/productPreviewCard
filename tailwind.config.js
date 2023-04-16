/** @type {import('tailwindcss').Config} */
const colors = require('tailwindcss/colors')
module.exports = {
  content: ["./dist/**/*.{html,js}"],
  theme: {
    colors:{
      "dark-cyan": "hsl(158, 36%, 37%)",
      "cream": "hsl(30, 38%, 92%)",
      "dark-blue": "hsl(212, 21%, 14%)",
      "dark-grayish-blue": "hsl(228, 12%, 48%)",
      "white": "hsl(0, 0%, 100%)",
      ...colors
    },

    extend: {
      fontFamily: {
        'montserrat': ['Montserrat', 'sans-serif'],
        'fraunces': ['Fraunces', 'serif']
      },

      fontWeight: {
        'normal': 500,
        'bold': 700,
      }
    },
  },
  plugins: [],
}

