/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./**/*.html"],
  theme: {
    extend: {
      backgroundImage: {
        'red-to-black': 'linear-gradient(to right, #E50914, #000000)',
      },
      colors:{
        "primary":"#E50914"
      },
      fontFamily:{
        "fancyheading":["lemonmilk","sans-serif"],
        "inter":["Inter", "sans-serif"],
        "counter":["Bahnschrift", "sans-serif"],
        "montserrat":["Montserrat", "sans-serif"]
      }
    },
  },
  plugins: [],
}

