/** @jsx jsx */
import { Text, jsx } from "theme-ui";

const BigTitle = ({ children }) => (
  <Text
    className="gradient-text"
    sx={{
      fontSize: [3, 4, 5],
      fontWeight: "bold",
    }}
  >
    {children}
  </Text>
);

export default BigTitle;
