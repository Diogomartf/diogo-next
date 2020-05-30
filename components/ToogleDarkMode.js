/** @jsx jsx */
import { jsx } from "theme-ui";
import { useColorMode } from "theme-ui";
import MoonIcon from "../icons/MoonIcon";
import SunIcon from "../icons/SunIcon";

export default () => {
  const [colorMode, setColorMode] = useColorMode();
  return (
    <header>
      <div
        sx={{
          cursor: "pointer",
        }}
        onClick={(e) => {
          setColorMode(colorMode === "default" ? "dark" : "default");
        }}
      >
        {colorMode === "default" ? <MoonIcon /> : <SunIcon />}
      </div>
    </header>
  );
};
