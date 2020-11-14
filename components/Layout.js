import { Box } from "theme-ui";

import Container from "./Container";
import Nav from "./Nav";
import Footer from "./Footer";
import Spacy from "./Spacy";

const Layout = ({ children }) => {
  return (
    <>
      <Nav />
      {children}
      <Container>
        <Spacy>
          <Footer />
        </Spacy>
      </Container>
    </>
  );
};

export default Layout;
