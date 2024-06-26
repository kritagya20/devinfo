/** @type {import('tailwindcss').Config} */
// tailwind.config.js
module.exports = {
  content: [
    "./index.html",
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        light: {
          primary: '#0366d6',
          secondary: '#86b9b0',
          tertiary: '#d0d6d6  ',
          text1: '#24292e',
          text2: '#586069',
        },
        dark: {
          primary: '#22303C',
          secondary: '#15202b',
          tertiary: '#192734',
          text1: '#c9d1d9',
          text2: '#8b949e',
        }
      },
    },
  },
  plugins: [],
}
