const defaultTheme = require("tailwindcss/defaultTheme");
const colors = require("tailwindcss/colors");

module.exports = {
  darkMode: "class",
  content: [
    "./pages/**/*.{js,ts,jsx,tsx}",
    "./components/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    colors: {
      transparent: "transparent",
      current: "currentColor",
      black: "#0D0D0D",
      white: colors.white,
      gray: colors.neutral,
      green: colors.green,
      yellow: colors.amber,
    },
    fontFamily: {
      sans: ["Inter", ...defaultTheme.fontFamily.sans],
      grotesk: ['"Space Grotesk"', ...defaultTheme.fontFamily.serif],
    },
    extend: {
      colors: {
        greenlight: "#AEC2C2",
        grayish: "#525B5B",
        blackish: "#0d0e0d",
        whitish: "#F9F9F9",
      },
    },
  },
  plugins: [],
};
