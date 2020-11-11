import { Box } from "theme-ui";

import Container from "./Container";
import Nav from "./Nav";
import Footer from "./Footer";

const Layout = ({ children }) => {
  return (
    <>
      <Container>
        <Box py={3}>
          <Nav />
        </Box>
      </Container>
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
