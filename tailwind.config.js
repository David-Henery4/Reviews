/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./app/**/*.jsx", "./components/**/*.jsx"],
  theme: {
    extend: {
      fontFamily: {
        orbitron: ["var(--font-orbitron)", "sans-serif"]
      }
    },
  },
  plugins: [
    require("@tailwindcss/typography"),
  ],
};

