const { nextui } = require("@nextui-org/react");

/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
    "./node_modules/@nextui-org/theme/dist/**/*.{js,ts,jsx,tsx}"

  ],
  theme: {
    extend: {
      colors:{
        primary:"#0FF1F6",
      },
      backgroundColor:{
        primaryBG:"#002228",
        secondary:"#07292F",
      }
    },
  },
  darkMode:"class",
  plugins: [nextui()],
}

