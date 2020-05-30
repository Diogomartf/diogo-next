const colors = {
  blackPepper: "#202020",
  white: "#fff",
  black: "#000",
  brightBlue: "#33e",
  brightGreen: "#00ffbd",
};

export default {
  fonts: {
    body: '"Inter", system-ui, sans-serif',
    heading: '"Inter", sans-serif',
    monospace: "Menlo, monospace",
  },
  colors: {
    text: colors.blackPepper,
    background: colors.white,
    primary: colors.brightBlue,
    modes: {
      dark: {
        text: colors.white,
        background: colors.black,
        primary: colors.brightGreen,
      },
    },
  },
  space: [0, 4, 8, 16, 24, 32, 64, 128, 256, 512],
};
