/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {},
    colors: {
      'ctm-lightest-purple': '#592250',
      'ctm-light-purple': '#4b1d43',
      'ctm-dark-purple': '#33132e',
      'ctm-darkest-purple': '#240e20',
      'ctm-pink-base': '#f6498d',
      'ctm-yellow-base': '#ffd756',
      'ctm-black': '#000',
      'ctm-white': '#fff'
    }
  },
  plugins: [],
}

