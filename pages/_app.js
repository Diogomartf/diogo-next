/** @jsx jsx */
import { jsx, Box, ThemeProvider } from "theme-ui";

import Nav from "../components/Nav";
import HtmlHead from "../components/HtmlHead";

import theme from "../theme";
import "../styles.css";

const app = ({ Component, pageProps }) => (
  <ThemeProvider theme={theme}>
    <HtmlHead />
    <Box py={3}>
      <Nav />
    </Box>
    <Component {...pageProps} />
  </ThemeProvider>
);

export default app;
