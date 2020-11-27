import { Text } from "theme-ui";

const NormalText = ({ children }) => (
  <Text
    as="p"
    mt={[1, 2]}
    mb={[3, "24px"]}
    sx={{
      fontSize: [2, 3],
      lineHeight: ["28px", "32px"],
    }}
  >
    {children}
  </Text>
);

export default NormalText;
