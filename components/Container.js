import PropTypes from "prop-types";

const Container = ({ children, ...props }) => (
  <div
    className="container w-full px-6 mx-auto md:max-w-2xl lg:max-w-3xl"
    {...props}
  >
    {children}
  </div>
);

Container.propTypes = {
  children: PropTypes.oneOfType([
    PropTypes.arrayOf(PropTypes.node),
    PropTypes.node,
    PropTypes.func,
  ]).isRequired,
};

export default Container;
