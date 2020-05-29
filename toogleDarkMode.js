import { useColorMode, Button } from "theme-ui";

export default (props) => {
  const [colorMode, setColorMode] = useColorMode();
  return (
    <header>
      <Button
        onClick={(e) => {
          setColorMode(colorMode === "default" ? "dark" : "default");
        }}
      >
        {colorMode === "default" ? "🌙" : "☀️"}
      </Button>
    </header>
  );
};
