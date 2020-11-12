import { Flex, Link, Box } from "theme-ui";
import NextLink from "next/link";

import Container from "./Container";
import ToogleDarkMode from "./ToogleDarkMode";

const Nav = () => (
  <Container>
    <Box py={3}>
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
    </Box>
  </Container>
);

export default Nav;
