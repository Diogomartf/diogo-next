/** @jsx jsx */
import { jsx, Flex, Link, Box } from "theme-ui";
import NextLink from "next/link";

import ToogleDarkMode from "./ToogleDarkMode";
import Container from "./Container";

const Nav = () => (
  <Container>
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
      <Flex>
        <NextLink href="/blog" passHref>
          <Link
            variant="text.midTitle"
            sx={{
              textDecoration: "none",
              cursor: "pointer",
              mr: [3, 4],
            }}
          >
            Blog
          </Link>
        </NextLink>
        <ToogleDarkMode />
      </Flex>
    </Flex>
  </Container>
);

export default Nav;
