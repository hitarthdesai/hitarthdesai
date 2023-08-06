/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    extend: {
      colors: {
        "chrome-active-tab": "#424242",
        "chrome-dark": "#212121",
      },
      fontFamily: {
        hero: ["'Luckiest Guy'", "cursive"],
      },
      keyframes: {
        "background-gradient": {
          "0%": {
            "background-position": "0% 50%",
          },
          "50%": {
            "background-position": "100% 50%",
          },
          "100%": {
            "background-position": "0% 50%",
          },
        },
      },
      animation: {
        "spin-slow": "spin 10s linear infinite",
        "spin-slow-reverse": "spin 10s linear infinite reverse",
        "background-gradient": "background-gradient 15s ease infinite",
      },
    },
  },
  plugins: [],
};
