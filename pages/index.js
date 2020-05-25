/** @jsx jsx */
import { jsx, Container, Box, Flex } from "theme-ui";
import Head from "next/head";
import ToogleDarkMode from "../toogleDarkMode";

export default function Home() {
  return (
    <div>
      <Head>
        <title>Diogo - Thoughts on life, design and code.</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <Box p={5}>
        <Flex justifyContent="flex-end">
          <ToogleDarkMode />
        </Flex>
        <h1
          sx={{
            fontWeight: "regular",
            fontSize: [5, 6, 8], // picks up value from `theme.fontSizes[4]`
            color: "primary", // picks up value from `theme.colors.primary`
            py: 1,
          }}
        >
          Thoughts on life, design and code.
        </h1>
      </Box>
    </div>
  );
}
