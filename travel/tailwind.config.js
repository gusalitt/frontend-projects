/** @type {import('tailwindcss').Config} */
module.exports = {
  darkMode: "class",
  content: ["./public/**/*.{html,js}"],
  theme: {
    extend: {
      fontFamily: {
        Inter: ["Inter"],
      },
      colors: {
        ungu: "#9333ea",
        pink: "#F85E9F",
        orange: "#FF5722",
        kuning: "#FACD49",
      },
    },
  },
  plugins: [],
};
