/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    container: {
      center: true,
    },
    extend: {
      colors: {
        'primary': '#14b8a6',
        'secondary': '#64748b',
        'dark': '#0f172a',
      },
      screens: {
        '2xl' : '1320px'
      },
      fontFamily: {
        poppins : ['Poppins', 'sans-serif']
      },
    },
  },
  plugins: [],
}

