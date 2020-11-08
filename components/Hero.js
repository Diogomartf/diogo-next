/** @jsx jsx */
import { jsx, Box } from "theme-ui";
import BigTitle from "./BigTitle";

const Hero = ({ title, children }) => (
  <>
    <BigTitle>{title}</BigTitle>
    {children && <Box my={2}>{children}</Box>}
  </>
);

export default Hero;
