import { Text } from "theme-ui";

const BigTitle = ({ children }) => (
  <Text
    sx={{
      fontSize: [4, 5],
      my: [2, 3],
    }}
    css={{
      background: "linear-gradient(90deg, #616161 0%, #9bc5c3 100%)",
      "-webkitBackgroundClip": "text",
      "-webkitTextFillColor": "transparent",
      fontWeight: "bold",
    }}
  >
    {children}
  </Text>
);

export default BigTitle;
