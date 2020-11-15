import Head from "next/head";

const HtmlHead = () => (
  <Head>
    <title>Diogo Ferreira | Curious. Thinker. Programmer.</title>
    <meta charSet="utf-8" />
    <meta name="viewport" content="width=device-width, initial-scale=1" />
    <meta name="author" content="Diogo Ferreira" />
    <meta
      name="description"
      content="I write about things I'm curious about be it life experiences, products, code, design or stuff related to the mind."
    />
    <link rel="apple-touch-icon" sizes="180x180" href="/apple-touch-icon.png" />
    <link rel="icon" type="image/png" sizes="32x32" href="/favicon-32x32.png" />
    <link rel="icon" type="image/png" sizes="16x16" href="/favicon-16x16.png" />
    <link rel="manifest" href="/site.webmanifest" />
    <meta name="msapplication-config" content="/browserconfig.xml" />
    <meta name="msapplication-TileColor" content="#D6D6D6" />
    <meta name="theme-color" content="#D6D6D6"></meta>
    <link
      rel="alternate"
      type="application/rss+xml"
      title="RSS"
      href="/feed.xml"
    />
    <script async src="https://cdn.splitbee.io/sb.js"></script>
  </Head>
);

export default HtmlHead;
