/** @jsx jsx */
import { jsx, Box, Text } from "theme-ui";

const Hero = () => (
  <Box py={[5, 6]}>
    <h1
      sx={{
        fontWeight: "regular",
        fontSize: [4, 5],
        color: "primary",
        my: 3,
      }}
    >
      Hello. I'm Diogo.
    </h1>
    <Text sx={{ lineHeight: "160%", fontSize: [2, 3] }}>
      I'm a Portuguese Full-stack web developer.
    </Text>
    <Text sx={{ lineHeight: "160%", fontSize: [2, 3] }}>
      Currently writting react apps at Q-Better.
    </Text>
  </Box>
);

export default Hero;
