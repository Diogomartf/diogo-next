import { Text } from "theme-ui";
import theme from "../styles/theme";

const MediumTitle = ({ children }) => (
  <Text
    sx={{
      mt: [3, 4],
      mb: [2, 3],
      fontSize: [3, 4],
      fontWeight: "semibold",
      color: theme.colors.gray,
    }}
  >
    {children}
  </Text>
);

export default MediumTitle;
