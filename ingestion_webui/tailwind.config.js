/** @type {import('tailwindcss').Config} */
module.exports = {
  darkMode: "class",
  content: [
    "./index.html", // Add if using plain HTML
    "./src/**/*.{js,ts,jsx,tsx}", // Add this for React, Next.js, or Vite
    "./components/**/*.{js,ts,jsx,tsx}", // If you have a `components` folder
    "./node_modules/react-tailwindcss-datepicker/dist/index.cjs.js",
  ],
  theme: {
    extend: {},
  },
  plugins: [],
};
