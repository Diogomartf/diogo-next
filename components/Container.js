import PropTypes from "prop-types";
import { Box } from "theme-ui";

const Container = ({ children, ...props }) => (
  <Box
    {...props}
    sx={{
      px: 4,
      mx: "auto",
      maxWidth: ["100%", "600px", "780px"],
    }}
  >
    {children}
  </Box>
);

Container.propTypes = {
  children: PropTypes.oneOfType([
    PropTypes.arrayOf(PropTypes.node),
    PropTypes.node,
    PropTypes.func,
  ]).isRequired,
};

export default Container;
