// import App from 'next/app'
import { ThemeProvider } from "theme-ui";
import theme from "../theme";
import "../styles.css";

function MyApp({ Component, pageProps }) {
  return (
    <ThemeProvider theme={theme}>
      <Component {...pageProps} />
    </ThemeProvider>
  );
}

export default MyApp;
