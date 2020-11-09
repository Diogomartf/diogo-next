import { Box, ThemeProvider } from "theme-ui";

import "../styles.css";
import theme from "../theme";
import Nav from "../components/Nav";
import HtmlHead from "../components/HtmlHead";
import MDX from "../components/MDX";
import Container from "../components/Container";

const app = ({ Component, pageProps }) => (
  <ThemeProvider theme={theme}>
    <HtmlHead />
    <Container>
      <Box py={3}>
        <Nav />
      </Box>
    </Container>
    <MDX>
      <Component {...pageProps} />
    </MDX>
  </ThemeProvider>
);

export default app;
