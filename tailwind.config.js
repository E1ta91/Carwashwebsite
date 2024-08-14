/** @type {import('tailwindcss').Config} */
export default {
  content: [ "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      keyframes: {
        colorChange: {
          '0%': { color: '#e74c3c' },  /* Blue */
          '75%': { color: '#f1c40f' }, /* Red */
          '50%': { color: '#000000' }, /* Yellow */
          
        },
        fadeIn: {
          '0%': { opacity: '0' },
          '100%': { opacity: '1' }
        }
      },
      animation: {
        colorChange: 'colorChange 5s infinite',
        fadeIn: 'fadeIn 2s ease-in-out',
        fadeInColorChange: 'fadeIn 2s ease-in-out, colorChange 4s infinite'
      }
    },
  },
  plugins: [],
}

