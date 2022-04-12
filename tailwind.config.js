module.exports = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx}",
    "./components/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        epgreen: {
          DEFAULT: "#b5c838",
        },
        epdark: {
          DEFAULT: "#111111",
        },
        epgray: {
          DEFAULT: "#292929",
        },
        eplight: {
          DEFAULT: "#efefef",
        },
      },
    },
  },
  plugins: [
    require("@tailwindcss/forms"),
    require("@tailwindcss/aspect-ratio"),
    require("@tailwindcss/typography"),
  ],
};
