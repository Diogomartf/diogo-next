/** @jsx jsx */
import { jsx, Flex, Link, Box } from "theme-ui";
import ToogleDarkMode from "./ToogleDarkMode";
import NextLink from "next/link";

const Nav = () => (
  <Box p={[4]} sx={{ maxWidth: ["100%", "600px", "780px"], margin: "auto" }}>
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
  </Box>
);

export default Nav;
