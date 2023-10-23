/** @type {import('tailwindcss').Config} */
export default {
  darkMode: 'class',
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      fontFamily: {
        'pacifico': ["'Pacifico', cursive"],
        'exo-2': ["'Exo 2', sans-serif"],
      },
      backgroundImage: {
        'nav-light': 'url("https://i.ibb.co/TRb60nH/10.png")',
        'nav-dark': 'url("https://i.ibb.co/4827d4m/7.png")',
      },
    },
  },
  plugins: [require("daisyui")],
}

