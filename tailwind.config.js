/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{vue,js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      fontFamily: {
        sans: ['Lato', '"Helvetica Neue"', 'Helvetica', 'sans-serif'], // Or your preferred sans-serif stack
        serif: ['Merriweather', 'Georgia', 'serif'],
      },
      // Add colors if not in default palette or needed specifically
      colors: {
        'gr-blue': '#00635d', // For links
        'gr-grey-border': '#D8D8D8', // For borders
        'gr-light-grey': '#DEE7E9', // Header background
        'gr-light-yellow': '#f4f2e9', // Nav background
        'gr-button-grey': '#F4F1EA', // Default button background
        'gr-button-border': '#D6D0C4', // Default button border
        'gr-button-amazon-bg': '#f5d47a', // Amazon button background
        'gr-button-amazon-border': '#B38B22', // Amazon button border
        'gr-dark-grey': '#999999', // Legal text
      },
    },
  },
  plugins: [],
}
