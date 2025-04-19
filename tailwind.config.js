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
      // Modern UI specific extensions
      spacing: {
        '18': '4.5rem',
        '22': '5.5rem',
      },
      borderRadius: {
        'modern': '0.625rem',
      },
      boxShadow: {
        'modern': '0 4px 20px -2px rgb(0 0 0 / 0.1)',
        'modern-lg': '0 8px 30px -4px rgb(0 0 0 / 0.1)',
      },
      animation: {
        'fade-in': 'fadeIn 0.5s ease-out',
        'slide-up': 'slideUp 0.5s ease-out',
      },
      keyframes: {
        fadeIn: {
          '0%': { opacity: '0' },
          '100%': { opacity: '1' },
        },
        slideUp: {
          '0%': { transform: 'translateY(20px)', opacity: '0' },
          '100%': { transform: 'translateY(0)', opacity: '1' },
        },
      },
    },
    screens: {
      'sm': '640px',
      'md': '768px',
      'lg': '1024px',
      'xl': '1280px',
      '2xl': '1536px',
    },
  },
  plugins: [
    function ({ addVariant }) {
      addVariant('modern-ux', '.modern-ux &')
    },
  ],
}
