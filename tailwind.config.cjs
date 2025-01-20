/** @type {import('tailwindcss').Config} */
module.exports = {
  darkMode: 'class', // Enable dark mode based on class
  content: [
    "./index.html",
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        // Custom color setup for the black theme
        background: "#000000", // Black background color
        text: "#FFFFFF", // White text for contrast
      },
    },
  },
  plugins: [],
};
