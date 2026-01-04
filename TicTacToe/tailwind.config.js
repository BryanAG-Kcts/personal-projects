/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      fontFamily : {
        "Quick" : ["Quick", "sans-serif"],
      },
      colors : {
        "light-beige" : "#ffe8d6",
        "dark-beige" : "#ddbea9"
      }
    },
  },
  plugins: [],
}