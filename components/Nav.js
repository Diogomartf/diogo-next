import { Flex, Link } from "theme-ui";
import NextLink from "next/link";

import ToogleDarkMode from "./ToogleDarkMode";

const Nav = () => (
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
    <Flex
      sx={{
        alignItems: "center",
      }}
    >
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
      <NextLink href="/about" passHref>
        <Link
          variant="text.midTitle"
          sx={{
            textDecoration: "none",
            cursor: "pointer",
            mr: [3, 4],
          }}
        >
          About
        </Link>
      </NextLink>
      <ToogleDarkMode />
    </Flex>
  </Flex>
);

export default Nav;
