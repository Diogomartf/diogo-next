/** @jsx jsx */
import { jsx, Box, Text } from "theme-ui";
import { getAllPosts } from "../lib/posts";

import Hero from "../components/Hero";
import BlogEntries from "../components/BlogEntries";
import Footer from "../components/Footer";
import Container from "../components/Container";

export async function getStaticProps() {
  const posts = await getAllPosts();

  return {
    props: {
      entries: posts.map((post) => post.slug),
    },
  };
}

const Home = ({ entries }) => (
  <Container>
    <Box my={[5, 6]}>
      <Hero title="Diogo Ferreira">
        <>
          <Text variant="small">Curious. Thinker. Distracted. Stubborn.</Text>
          <Text variant="small">Born in 93.</Text>
        </>
      </Hero>
    </Box>
    <Box my={[5, 6]}>
      <Text variant="midTitle">Free thoughts</Text>
      <BlogEntries entries={entries} />
    </Box>
    <Box my={[5, 6]}>
      <Footer />
    </Box>
  </Container>
);

export default Home;
