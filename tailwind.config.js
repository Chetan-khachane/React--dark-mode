/** @type {import('tailwindcss').Config} */
export default {
  darkMode: "class", // 👈 important
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}", // adjust if your files are elsewhere
  ],
  theme: {
    extend: {},
  },
  plugins: [],
};
