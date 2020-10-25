import { ThemeProvider } from "theme-ui";

import Nav from "../components/Nav";
import HtmlHead from "../components/HtmlHead";
import Container from "../components/Container";

import theme from "../theme";
import "../styles.css";

const app = ({ Component, pageProps }) => (
  <ThemeProvider theme={theme}>
    <HtmlHead />
    <Container>
      <Nav />
      <Component {...pageProps} />
    </Container>
  </ThemeProvider>
);

export default app;
