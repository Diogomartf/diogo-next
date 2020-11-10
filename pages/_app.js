import { Box, ThemeProvider } from "theme-ui";

import "../styles/main.css";
import theme from "../styles/theme";

import Nav from "../components/Nav";
import HtmlHead from "../components/HtmlHead";
import MDX from "../components/MDX";
import Container from "../components/Container";
import Footer from "../components/Footer";

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
    <Container>
      <Box my={[5, 6]}>
        <Footer />
      </Box>
    </Container>
  </ThemeProvider>
);

export default app;
