import BigTitle from "./BigTitle";

const Hero = ({ title, description }) => (
  <>
    <BigTitle>{title}</BigTitle>
    {description && (
      <div className="my-3 text-sm text-grayish">{description}</div>
    )}
  </>
);

export default Hero;
