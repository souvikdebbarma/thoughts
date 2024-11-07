/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        graphite: {
          DEFAULT: '#353535',
          light: '#535353',
          dark: '#252525',
        },
        aloe: '#F9F0DE',
        desert: '#F5F3E9',
        mist: '#EBE9E0',
      },
      fontFamily: {
        'display': ['Cardo', 'serif'],
      }
    },
  },
  plugins: [],
}

