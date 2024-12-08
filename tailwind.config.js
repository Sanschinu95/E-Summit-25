/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./**/*.html"],
  theme: {
    extend: {
      colors:{
        "primary":"#E50914"
      },
      fontFamily:{
        "fancyheading":["lemonmilk","sans-serif"],
        "inter":["Inter", "sans-serif"],
        "counter":["Bahnschrift", "sans-serif"]
      }
    },
  },
  plugins: [],
}

