/** @jsx jsx */
import { jsx, Box, Text } from "theme-ui";

const Hero = () => (
  <Box py={[5, 6]}>
    <h1
      sx={{
        fontWeight: "regular",
        fontSize: [5, 7],
        color: "primary",
        my: 3,
      }}
    >
      Thoughts on life, code and design.
    </h1>
    <Text sx={{ lineHeight: "160%", fontSize: [2, 3] }}>
      I'm Diogo Ferreira, a Full-stack web developer and designer. Currently
      working as Frontend web developer and designer at Q-Better.
    </Text>
  </Box>
);

export default Hero;
