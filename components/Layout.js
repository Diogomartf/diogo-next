import { Box } from "theme-ui";

import Container from "./Container";
import Nav from "./Nav";
import Footer from "./Footer";

const Layout = ({ children }) => {
  return (
    <>
      <Nav />
      {children}
      <Container>
        <Box my={[5, 6]}>
          <Footer />
        </Box>
      </Container>
    </>
  );
};

export default Layout;
