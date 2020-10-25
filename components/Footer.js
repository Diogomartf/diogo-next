/** @jsx jsx */
import { jsx, Box, Link } from "theme-ui";

const Footer = () => (
  <Box mt={6} mb={4}>
    <Link
      href="mailto:diogomf@hey.com"
      mr={2}
      sx={{ fontSize: [1, 2], color: "#353535" }}
    >
      Email
    </Link>
    <Link
      target="_blank"
      href="https://twitter.com/diogomartf"
      mr={2}
      sx={{ fontSize: [1, 2], color: "#353535" }}
    >
      Twitter
    </Link>
    <Link
      target="_blank"
      href="https://github.com/Diogomartf"
      mr={2}
      sx={{ fontSize: [1, 2], color: "#353535" }}
    >
      Github
    </Link>
  </Box>
);

export default Footer;
