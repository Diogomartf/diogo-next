/** @jsx jsx */
import { jsx, Box, Link } from "theme-ui";

const Footer = () => (
  <>
    <Link href="mailto:diogomf@hey.com" variant="links.footer">
      diogomf@hey.com
    </Link>
    <Link
      target="_blank"
      href="https://twitter.com/diogomartf"
      variant="links.footer"
    >
      Twitter
    </Link>
    <Link
      target="_blank"
      href="https://github.com/Diogomartf"
      variant="links.footer"
    >
      Github
    </Link>
  </>
);

export default Footer;
