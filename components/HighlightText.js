import { Text } from "theme-ui";

const HighLightText = ({ children }) => (
  <Text
    my={[4, 5]}
    sx={{
      fontSize: [3, 4],
      lineHeight: ["28px", "32px"],
    }}
  >
    {children}
  </Text>
);

export default HighLightText;
