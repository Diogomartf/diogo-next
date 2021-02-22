import BigTitle from "./BigTitle";

const Hero = ({ title, children }) => (
  <>
    <BigTitle>{title}</BigTitle>
    {children && <div className="my-2">{children}</div>}
  </>
);

export default Hero;
