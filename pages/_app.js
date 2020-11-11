import { ThemeProvider } from "theme-ui";

import "../styles/main.css";
import theme from "../styles/theme";

import HtmlHead from "../components/HtmlHead";
import MDX from "../components/MDX";
import Layout from "../components/Layout";

const app = ({ Component, pageProps }) => {
  return (
    <ThemeProvider theme={theme}>
      <HtmlHead />
      <Layout>
        <MDX>
          <Component {...pageProps} />
        </MDX>
      </Layout>
    </ThemeProvider>
  );
};

export default app;
