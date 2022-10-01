const defaultTheme = require("tailwindcss/defaultTheme");

module.exports = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx}",
    "./components/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
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
