/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      fontFamily:{
        neue: ['NeueMontreal', 'sans-serif'],
        technor: ['"Technor"', 'sans-serif'],
        syne: ['Syne', 'sans-serif'],
      }
    },
  },
  plugins: [],
}

