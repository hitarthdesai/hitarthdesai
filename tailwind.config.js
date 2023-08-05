/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    extend: {
      fontFamily: {
        hero: ["'Luckiest Guy'", "cursive"],
      },
      animation: {
        "spin-slow": "spin 10s linear infinite",
        "spin-slow-reverse": "spin 10s linear infinite reverse",
      },
    },
  },
  plugins: [],
};
