/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      fontFamily: {
        sans: "DM Sans, san-serif",
      },
      colors: {
        brandGreen: "#7EC34C",
        brandGreenDark: "#32931F",
        brandBlack: "#242424",
        brandGrey: "#989898",
        brandLightGrey: "#F7F9F5",
      },
    },
  },
  plugins: [],
};
