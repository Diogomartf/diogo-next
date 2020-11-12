import { Text } from "theme-ui";

const NormalText = ({ children }) => (
  <Text
    mt={[1, 2]}
    mb={["24px", 4]}
    sx={{
      fontSize: [2, 3],
      lineHeight: ["28px", "32px"],
    }}
  >
    {children}
  </Text>
);

export default NormalText;
