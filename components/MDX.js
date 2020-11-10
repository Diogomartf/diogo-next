import React, { useState } from "react";
import { MDXProvider } from "@mdx-js/react";

import BigTitle from "./BigTitle";
import NormalText from "./NomalText";
import HighLightText from "./HighlightText";

export default function MDX({ children }) {
  const [components, setComponents] = useState({
    h1: BigTitle,
    h3: HighLightText,
    p: NormalText,
  });

  return <MDXProvider components={components}>{children}</MDXProvider>;
}
