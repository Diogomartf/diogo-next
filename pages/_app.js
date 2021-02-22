import { ThemeProvider } from "next-themes";
import "tailwindcss/tailwind.css";
import "../styles/main.css";

import HtmlHead from "../components/HtmlHead";
import MDX from "../components/MDX";
import SocialMetaTags from "../components/SocialMetaTags";
import Layout from "../components/Layout";

const app = ({ Component, pageProps }) => {
  return (
    <ThemeProvider>
      <HtmlHead />
      <SocialMetaTags />
      <Layout>
        <MDX>
          <Component {...pageProps} />
        </MDX>
      </Layout>
    </ThemeProvider>
  );
};

export default app;
