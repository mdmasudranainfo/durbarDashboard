/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {},
    colors: {
      "dark-blue": {
        50: "#32363F",
        100: "#2B2E37",
      },
      "white-base": "#FFFFFF",
      primary: "#F75757",
    },
  },
  plugins: [],
};
