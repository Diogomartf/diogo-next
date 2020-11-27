import { Box } from "theme-ui";

const QuotedText = ({ children }) => (
  <Box
    bg="rgb(155 155 155 / 6%)"
    my={3}
    p={[3, 4]}
    sx={{
      borderRadius: "12px",
    }}
  >
    {children}
  </Box>
);

export default QuotedText;
