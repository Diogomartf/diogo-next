import Head from "next/head";
import Hero from "../components/Hero";
import Container from "../components/Container";
import Header from "../components/Header";

export default function Home() {
  return (
    <>
      <Head>
        <title>Diogo - Thoughts on life, design and code.</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <Container>
        <Header></Header>
        <Hero />
      </Container>
    </>
  );
}
