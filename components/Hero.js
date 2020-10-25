/** @jsx jsx */
import { jsx, Box, Text } from "theme-ui";

const Hero = () => (
  <>
    <h1
      className="gradient-text"
      sx={{
        fontWeight: "regular",
        fontSize: [3, 4],
        color: "primary",
        my: 1,
      }}
    >
      Diogo Ferreira
    </h1>
    <Box my={1}>
      <Text sx={{ fontSize: [1, 2] }}>
        Curious. Thinker. Distracted. Stubborn.
      </Text>
      <Text sx={{ fontSize: [1, 2] }}>Born in 93.</Text>
    </Box>
  </>
);

export default Hero;
