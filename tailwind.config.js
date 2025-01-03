/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        'brand': {
          light: '#FDF2F8',
          DEFAULT: '#DB2777',
          dark: '#9D174D',
        }
      }
    },
  },
  plugins: [],
}