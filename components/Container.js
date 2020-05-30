import PropTypes from "prop-types";
import { Box } from "theme-ui";

function Container({ children }) {
  return (
    <Box
      sx={{
        px: [4, 0],
        py: [3],
        mx: "auto",
        maxWidth: ["100%", "800px"],
      }}
    >
      {children}
    </Box>
  );
}

Container.propTypes = {
  children: PropTypes.oneOfType([
    PropTypes.arrayOf(PropTypes.node),
    PropTypes.node,
    PropTypes.func,
  ]).isRequired,
};

export default Container;
