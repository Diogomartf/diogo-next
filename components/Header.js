/** @jsx jsx */
import { jsx, Flex } from "theme-ui";
import ToogleDarkMode from "../components/ToogleDarkMode";

const Header = () => (
  <Flex
    sx={{
      justifyContent: "space-between",
    }}
  >
    <div></div>
    <ToogleDarkMode />
  </Flex>
);

export default Header;
