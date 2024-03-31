/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{js,jsx,ts,tsx}",],
  theme: {
    extend: {
      colors: {
        turquoise: ['red']
      },
      fontFamily: {
        custom: ['Montserrat', 'sans-serif'],
      },
    },
  },
  plugins: [],
}

