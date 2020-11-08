/** @jsx jsx */
import { jsx, Box, ThemeProvider } from "theme-ui";

import Nav from "../components/Nav";
import HtmlHead from "../components/HtmlHead";

import theme from "../theme";
import "../styles.css";
import MDX from "../components/MDX";

const app = ({ Component, pageProps }) => (
  <ThemeProvider theme={theme}>
    <HtmlHead />
    <Box py={3}>
      <Nav />
    </Box>
    <MDX>
      <Component {...pageProps} />
    </MDX>
  </ThemeProvider>
);

export default app;
