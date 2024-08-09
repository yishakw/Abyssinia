/** @type {import('tailwindcss').Config} */

export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      backgroundImage: {
        "main-bg": "url('/2081.jpg')",
      },
      fontFamily: {
        yatara: ["Yatra One", "system-ui"],
      },
    },
  },
  plugins: [],
};