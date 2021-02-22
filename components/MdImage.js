const MDImage = ({ src, alt, title }) => (
  <div className="flex-col items-center">
    <img
      src={src}
      alt={alt}
      className="object-cover object-center w-full rounded max-h-64 md:max-h-80 lg:max-h-96"
    />
    <p className="my-2 text-xs text-center text-grayish">{title}</p>
  </div>
);

export default MDImage;
