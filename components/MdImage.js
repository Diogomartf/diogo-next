import { Flex, Image, Text } from "theme-ui";
import theme from "../styles/theme";

const MDImage = ({ src, alt, title }) => (
  <Flex
    sx={{
      flexDirection: "column",
      alignItems: "center",
    }}
  >
    <Image
      src={src}
      alt={alt}
      sx={{
        objectFit: "cover",
        objectPosition: "center",
        maxHeight: ["220px", "320px", "420px"],
        width: "100%",
        borderRadius: "12px",
      }}
    />
    <Text
      my={1}
      as="small"
      sx={{
        textAlign: "center",
        color: theme.colors.gray,
        fontSize: [0],
      }}
    >
      {title}
    </Text>
  </Flex>
);

export default MDImage;
