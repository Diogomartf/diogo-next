/** @jsx jsx */
import { jsx, Container } from "theme-ui";
import Head from "next/head";

export default function Home() {
  return (
    <Container>
      <Head>
        <title>Diogo - Thoughts on life, design and code.</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <h1
        sx={{
          fontWeight: "regular",
          fontSize: [5, 6, 8], // picks up value from `theme.fontSizes[4]`
          color: "primary", // picks up value from `theme.colors.primary`
          p: 4,
        }}
      >
        Thoughts on life, design and code.
      </h1>
    </Container>
  );
}
