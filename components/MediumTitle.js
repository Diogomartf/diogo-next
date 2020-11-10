import { Text } from "theme-ui";

const MediumTitle = ({ children }) => (
  <Text
    sx={{
      my: [2, 3],
      fontSize: [3, 4],
      fontWeight: "bold",
    }}
  >
    {children}
  </Text>
);

export default MediumTitle;
