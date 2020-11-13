import { Text } from "theme-ui";

const HighLightText = ({ children }) => (
  <Text
    as="p"
    my={[4, 5]}
    sx={{
      textAlign: "center",
      fontSize: [3, 4],
      lineHeight: ["28px", "32px"],
    }}
  >
    {children}
  </Text>
);

export default HighLightText;
