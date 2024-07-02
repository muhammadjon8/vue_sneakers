/** @type {import('tailwindcss').Config} */
const {
  addDynamicIconSelectors,
  addIconSelectors,
} = require("@iconify/tailwind");

module.exports = {
  content: ["./index.html", "./src/**/*.{vue,js,ts,jsx,tsx}"],
  theme: {
    extend: {
      container: {
        center: true,
        padding: {
          default: "1rem",
          sm: "1.5rem",
          md: "2rem",
          lg: "3rem",
          xl: "4rem",
        },
      },
    },
  },
  plugins: [
    addIconSelectors([
      "mdi",
      "mdi-light",
      "ph",
      "solar",
      "codicon",
      "ri",
      "ic",
      "icon-park",
      "dashicons",
    ]),
    addDynamicIconSelectors(),
  ],
};
