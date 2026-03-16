/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        brand: {
          yellow: '#FFB800',
          dark: '#1A1A1A',
          gray: '#F5F5F5',
        }
      },
      fontFamily: {
        sans: ['Roboto', 'sans-serif'],
        condensed: ['Roboto Condensed', 'sans-serif'],
      }
    },
  },
  plugins: [],
}
