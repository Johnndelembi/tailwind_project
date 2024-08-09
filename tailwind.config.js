/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ['./*.html'],
  theme: {
    screens: {
      sm: '480px',
      md: '768px',
      lg: '976px',
      xl: '14440px',
    },
    extend: {
      colors: {
        // you can write your custom colors in here .ie brightRed: '',
      }
    },
  },
  plugins: [],
}

