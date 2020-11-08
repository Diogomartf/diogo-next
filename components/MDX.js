import React, { useState } from "react";
import { MDXProvider } from "@mdx-js/react";
import BigTitle from "./BigTitle";

export default function MDX({ children }) {
  const [components, setComponents] = useState({
    h1: BigTitle,
  });

  return <MDXProvider components={components}>{children}</MDXProvider>;
}
