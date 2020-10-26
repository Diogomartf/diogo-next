const colors = {
  blackPepper: "#202020",
  white: "#fff",
  black: "#000",
  brightBlue: "#33e",
  brightGreen: "#00ffbd",
  orange: "#ea8220",
  grays: {
    0: "#ebebeb",
    10: "#e1e2e3",
    20: "#d8dadc",
    30: "#a9aeae",
    40: "#595c5c",
  },
  nightGrays: {
    0: "#1a1a23",
    10: "#27272d",
    20: "#4f4f56",
    30: "#9c9c9c",
    40: "#ebebeb",
  },
};

export default {
  space: [0, 4, 8, 16, 24, 32, 64, 128, 256, 512],
  colors: {
    text: colors.blackPepper,
    background: colors.white,
    primary: "#525B5B",
    grays: colors.grays,
    secondary: colors.orange,
    modes: {
      dark: {
        text: colors.white,
        background: colors.black,
        primary: colors.brightGreen,
        grays: colors.nightGrays,
      },
    },
  },
  fonts: {
    body: '"Inter", system-ui, sans-serif',
    heading: '"Inter", sans-serif',
    monospace: "Menlo, monospace",
  },
  text: {
    dates: {
      fontSize: 1,
      color: "grays.30",
    },
  },
  links: {
    default: {
      cursor: "pointer",
    },
    blog: {
      fontSize: [2, 3],
      textDecoration: "underline",
      variant: "links.default",
      fontWeight: "semibold",
      color: "primary",
    },
    nav: {
      variant: "links.default",
      p: 2,
      borderRadius: "4px",
      fontWeight: "bold",
      color: "inherit",
      "&:hover": {
        bg: "grays.0",
      },
    },
  },
};
