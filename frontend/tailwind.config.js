/** @type {import('tailwindcss').Config} */
/** @type {import('tailwindcss').Config} */

module.exports = {
  content: ["./src/**/*.{html,js}"],
  theme: {
    extend: {
      colors: {
        "#FCF7FF": "#FCF7FF",
        "#595f39":"#595f39",
        "#C4C5BA":"#C4C5BA",
        "#E4E4DE":"#E4E4DE",
        "#F4F1DE":"#F4F1DE",
        "#FAF9F6":"#FAF9F6",
        "#fdfcf3":"#fdfcf3",
       
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
