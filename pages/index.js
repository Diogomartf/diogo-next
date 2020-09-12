import Hero from "../components/Hero";
import Container from "../components/Container";
import Header from "../components/Header";

export default function Home() {
  return (
    <>
      <Container>
        <Header></Header>
        <Hero />
      </Container>
    </>
  );
}
