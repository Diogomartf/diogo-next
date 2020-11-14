import { Box } from "theme-ui";

// space Y -> spacy
const Spacy = ({ children, ...props }) => (
  <Box my={[5, 6]} {...props}>
    {children}
  </Box>
);

export default Spacy;
