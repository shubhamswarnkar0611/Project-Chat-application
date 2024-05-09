/** @type {import('tailwindcss').Config} */
/** @type {import('tailwindcss').Config} */

module.exports = {
  content: ["./src/**/*.{html,js}"],
  theme: {
    extend: {
      colors: {
        "#FCF7FF": "#FCF7FF",
        "#595f39":"#595f39",
        "#3C3B34":"#3C3B34",
        "#fdfcf3":"#fdfcf3",
        "#1A451E":"#1A451E",
        "#1D201D":"#1D201D",
        "#373730":"#373730",
        "#3FACFF":"#3FACFF",
        "#CACECA":"#CACECA",
        "#979D74":"#979D74",
        "#2A344A":"#2A344A",
        "#A3CBC4":"#A3CBC4",
        "#AFAD88":"#AFAD88",
        "#AEAC9A":"#AEAC9A",

       
      },
      keyframes: {
        typing: {
          "0%": {
            width: "0%",
            visibility: "hidden"
          },
          "100%": {
            width: "100%"
          }
        },
        blink: {
          "50%": {
            borderColor: "transparent"
          },
          "100%": {
            borderColor: "white"
          }
        }
      },
      animation: {
        typing: "typing 2s steps(20) infinite alternate, blink .7s infinite"
      }
    },
  },
  plugins: [],
};
