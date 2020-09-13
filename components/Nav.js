/** @jsx jsx */
import { jsx, Flex, Link } from "theme-ui";
import ToogleDarkMode from "./ToogleDarkMode";
import NextLink from "next/link";

const Nav = () => (
  <Flex
    sx={{
      alignItems: "center",
      justifyContent: "space-between",
    }}
  >
    <NextLink href="/">
      <Link variant="links.nav">Home</Link>
    </NextLink>
    <ToogleDarkMode />
  </Flex>
);

export default Nav;
