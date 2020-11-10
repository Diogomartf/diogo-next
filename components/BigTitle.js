import { Text } from "theme-ui";

const BigTitle = ({ children }) => (
  <Text
    className="gradient-text"
    sx={{
      my: [2, 3],
      fontSize: [4, 5],
      fontWeight: "bold",
    }}
  >
    {children}
  </Text>
);

export default BigTitle;
