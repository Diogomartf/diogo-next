import { Image, Text } from "theme-ui";
import theme from "../styles/theme";

const MDImage = ({ src, alt, title }) => (
  <div>
    <Image
      src={src}
      alt={alt}
      sx={{
        objectFit: "cover",
        objectPosition: "center",
        maxHeight: ["220px", "320px", "420px"],
        width: "100%",
      }}
    />
    <Text
      sx={{
        mt: -2,
        textAlign: "center",
        color: theme.colors.gray,
        fontSize: [0],
      }}
    >
      {title}
    </Text>
  </div>
);

export default MDImage;
