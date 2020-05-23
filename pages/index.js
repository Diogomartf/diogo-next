import Head from "next/head";

export default function Home() {
  return (
    <div>
      <Head>
        <title>Diogo - Thoughts on life, design and code.</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <h1>Thoughts on life, design and code.</h1>

      <style jsx global>{`
        @import url("https://fonts.googleapis.com/css2?family=Inter:wght@400;700&display=swap");
        html,
        body {
          padding: 0;
          margin: 0;
          font-family: "Inter", -apple-system, BlinkMacSystemFont, Segoe UI,
            Roboto, Oxygen, Ubuntu, Cantarell, Fira Sans, Droid Sans,
            Helvetica Neue, sans-serif;
        }

        * {
          box-sizing: border-box;
        }
      `}</style>
    </div>
  );
}
