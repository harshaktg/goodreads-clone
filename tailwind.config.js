/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{vue,js,ts,jsx,tsx}",
  ],
  darkMode: 'class', // Enable class-based dark mode
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
        // Dark mode colors
        'dark': {
          'bg-primary': '#1a1a1a',
          'bg-secondary': '#2d2d2d',
          'text-primary': '#e5e5e5',
          'text-secondary': '#a3a3a3',
          'border': '#404040',
          'button': '#3d3d3d',
          'button-hover': '#4a4a4a',
          'link': '#7dd3cf'
        }
      },
    },
  },
  plugins: [],
}
