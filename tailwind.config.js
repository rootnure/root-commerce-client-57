/** @type {import('tailwindcss').Config} */
export default {
  darkMode: "class",
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      fontFamily: {
        pacifico: ["'Pacifico', cursive"],
        "exo-2": ["'Exo 2', sans-serif"],
      },
      backgroundImage: {
        "nav-light": 'url("https://i.ibb.co/pdVXyKp/bg-light.png")',
        "nav-dark": 'url("https://i.ibb.co/vwDxXNq/bg-dark.png")',
      },
    },
  },
  plugins: [require("daisyui")],
};
