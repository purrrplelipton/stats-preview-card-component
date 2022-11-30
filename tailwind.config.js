/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./index.html"],
  theme: {
    extend: {
      colors: {
        "vd-blu": "hsl(233, 47%, 7%)",
        "dd-blu": "hsl(233, 38%, 16%)",
        "soft-v": "hsl(277, 64%, 61%)",
        "white-75": "hsla(0, 0%, 100%, 0.75)",
        "white-60": "hsla(0, 0%, 100%, 0.6)",
        "clr-attribution": "hsl(228, 45%, 44%)"
      },
      fontFamily: {
        "lex-dec": "'Lexend Deca', sans-serif",
        "int": "'Inter', sans-serif"
      }
    },
  },
  plugins: [],
}