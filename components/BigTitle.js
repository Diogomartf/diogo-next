import { Text } from "theme-ui";

const BigTitle = ({ children }) => (
  <Text
    as="h1"
    className="gradient-text"
    sx={{
      fontFamily: "Space Grotesk",
      fontWeight: "bold",
      fontSize: [4, 5],
      mt: [3, 4],
      mb: [2, 3],
    }}
  >
    {children}
  </Text>
);

export default BigTitle;
