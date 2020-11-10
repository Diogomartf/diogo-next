const colors = {
  black: "#0D0D0D",
  gray: "#525B5B",
  greenlight: "#AEC2C2",
  white: "#fff",
};

export default {
  space: [0, 4, 8, 16, 24, 32, 64, 128, 256, 512],
  colors: {
    primary: colors.gray,
    gray: colors.gray,
    background: colors.white,
    text: colors.black,
    blogBg: "#f9f9f9",
    blogBgHover: "#f4f4f4",
    modes: {
      dark: {
        primary: colors.greenlight,
        text: colors.greenlight,
        background: colors.black,
        blogBg: "#131313",
        blogBgHover: "#161616",
      },
    },
  },
  fonts: {
    body: '"Inter", system-ui, sans-serif',
    heading: '"Inter", sans-serif',
    monospace: "Menlo, monospace",
  },
  text: {
    bigTitle: {
      fontSize: [3, 4, 5],
      fontWeight: "bold",
    },
    midTitle: {
      fontSize: [2, 3],
      fontWeight: "bold",
      color: "primary",
    },
    normal: {
      fontSize: [2, 3],
    },
    small: {
      fontSize: [0, 1],
      color: "gray",
    },
    blog: {
      fontSize: [2, 3],
      color: "primary",
    },
  },
  card: {
    blog: {
      display: "block",
      textDecoration: "none",
      my: 2,
      px: 3,
      py: 3,
      bg: "blogBg",
      borderRadius: "6px",
      cursor: "pointer",
      "&:hover": {
        bg: "blogBgHover",
      },
    },
  },
  links: {
    default: {
      cursor: "pointer",
      "&:hover": {
        textDecoration: "underline",
      },
    },
    footer: {
      variant: "links.default",
      mr: 2,
      fontSize: [0, 1],
      color: "gray",
      textDecoration: "none",
    },

    blog: {
      my: [2, 3],
      px: [3],
      py: [3],
      bg: "blogBg",
      borderRadius: "6px",
      cursor: "pointer",
      "&:hover": {
        bg: "blogBgHover",
      },
    },
  },
};
