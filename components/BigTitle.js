import { Text } from "theme-ui";

const BigTitle = ({ children }) => (
  <Text
    className="gradient-text"
    sx={{
      fontWeight: "bold",
      fontSize: [4, 5],
      my: [2, 3],
    }}
  >
    {children}
  </Text>
);

export default BigTitle;
