/** @jsx jsx */
import { jsx, Flex, Link, Box } from "theme-ui";
import NextLink from "next/link";

import ToogleDarkMode from "./ToogleDarkMode";
import Container from "./Container";

const Nav = () => (
  <Container py={4}>
    <Flex
      sx={{
        alignItems: "center",
        justifyContent: "space-between",
      }}
    >
      <NextLink href="/">
        <Link
          className="circle-logo"
          sx={{
            cursor: "pointer",
          }}
        ></Link>
      </NextLink>
      <ToogleDarkMode />
    </Flex>
  </Container>
);

export default Nav;
