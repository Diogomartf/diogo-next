import { Text } from "theme-ui";

const NormalText = ({ children }) => (
  <Text
    my={[3, 4]}
    sx={{
      fontSize: [2, 3],
      lineHeight: ["28px", "32px"],
    }}
  >
    {children}
  </Text>
);

export default NormalText;
