/** @jsx jsx */
import { jsx, Box, Flex, Text, Link } from "theme-ui";

const AskMe = () => (
  <Flex
    sx={{
      flexDirection: "column",
    }}
  >
    <Box>
      <Text
        sx={{
          fontSize: 2,
          fontWeight: "500",
          color: "primary",
        }}
      >
        Ask me questions!
      </Text>
      <Text
        sx={{
          fontSize: 1,
          my: 1,

          color: "#D6D6D6",
        }}
      >
        Why did you thought about XYZ?
      </Text>
      <Text
        sx={{
          fontSize: 1,
          my: 1,
          color: "#D6D6D6",
        }}
      >
        I disagree with you on this and this why
      </Text>
      <Text
        sx={{
          fontSize: 1,
          my: 1,
          color: "#D6D6D6;",
        }}
      >
        What are you reading?
      </Text>
      <Text
        sx={{
          fontSize: 1,
          color: "#D6D6D6;",
        }}
      >
        Why did you start this blog?
      </Text>
    </Box>
    <Box
      sx={{
        my: [3, 4],
      }}
    >
      <Link
        className="gradient-text"
        href="mailto:diogomf@hey.com"
        sx={{
          fontSize: 3,
        }}
      >
        Diogomf@hey.com
      </Link>
    </Box>
  </Flex>
);

export default AskMe;
