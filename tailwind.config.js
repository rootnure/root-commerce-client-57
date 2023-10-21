/** @type {import('tailwindcss').Config} */
export default {
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
    },
  },
  plugins: [require("daisyui")],
}

