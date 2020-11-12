import React, { useState } from "react";
import { MDXProvider } from "@mdx-js/react";

import BigTitle from "./BigTitle";
import NormalText from "./NomalText";
import HighLightText from "./HighlightText";
import MediumTitle from "./MediumTitle";
import MDImage from "./MdImage";

export default function MDX({ children }) {
  const [components, setComponents] = useState({
    h1: BigTitle,
    h2: MediumTitle,
    h3: HighLightText,
    p: NormalText,
    img: MDImage,
  });

  return <MDXProvider components={components}>{children}</MDXProvider>;
}
