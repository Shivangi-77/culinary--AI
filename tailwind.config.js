/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],
  theme: {
    extend: {
      colors: {
        primary: {
  50: '#F5F7F2',
  100: '#E5EBE1',
  200: '#C8D5C4',
  300: '#A8BEA4',
  400: '#719477',
  500: '#244C3A',
  600: '#1E4031',
  700: '#193629',
  800: '#142B21',
  900: '#102219',
},
secondary: {
  50: '#FFF5EB',
  100: '#FCE7D5',
  200: '#F5CEAD',
  300: '#EEB183',
  400: '#E6955B',
  500: '#D97736',
  600: '#BF622A',
  700: '#984B23',
  800: '#743B20',
  900: '#542D1B',
},

        
        accent: {
          50: '#f2f8fd',
          100: '#e4f1fa',
          200: '#c9e3f6',
          300: '#aed4f1',
          400: '#93c6ec',
          500: '#78b7e7', // Main accent color
          600: '#6292b9',
          700: '#4c6e8b',
          800: '#36495c',
          900: '#21242e',
        },
        success: {
          500: '#10b981',
        },
        warning: {
          500: '#f59e0b',
        },
        error: {
          500: '#ef4444',
        },
      },
      fontFamily: {
        heading: ['Playfair Display', 'serif'],
        body: ['Source Sans 3', 'sans-serif'],
      },
      animation: {
        'bounce-slow': 'bounce 3s infinite',
      },
    },
  },
  plugins: [],
};