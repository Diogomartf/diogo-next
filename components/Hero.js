/** @jsx jsx */
import { jsx, Box, Text } from "theme-ui";

const Hero = () => (
  <>
    <Text className="gradient-text" variant="bigTitle">
      Diogo Ferreira
    </Text>
    <Box my={2}>
      <Text variant="small">Curious. Thinker. Distracted. Stubborn.</Text>
      <Text variant="small">Born in 93.</Text>
    </Box>
  </>
);

export default Hero;
