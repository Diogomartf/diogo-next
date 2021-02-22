import NextLink from "next/link";

import Container from "./Container";

const Nav = () => (
  <Container>
    <div className="py-6">
      <div className="flex items-center justify-between">
        <NextLink href="/">
          <a className="cursor-pointer circle-logo"></a>
        </NextLink>
        <div className="flex items-center space-x-4 md:space-x-5">
          <NextLink href="/blog" passHref>
            <a className="font-bold no-underline cursor-pointer dark:text-greenlight md:text-lg">
              Blog
            </a>
          </NextLink>
          <NextLink href="/about" passHref>
            <a className="font-bold no-underline cursor-pointer dark:text-greenlight md:text-lg">
              About
            </a>
          </NextLink>
        </div>
      </div>
    </div>
  </Container>
);

export default Nav;
