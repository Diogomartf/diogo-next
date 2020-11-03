/** @jsx jsx */

import { jsx, Box } from "theme-ui";
import { getSortedPostsData } from "../lib/posts";

import Hero from "../components/Hero";
import Blog from "../components/Blog";
import Footer from "../components/Footer";
import Container from "../components/Container";

export async function getStaticProps() {
  const allPostsData = getSortedPostsData();
  return {
    props: {
      allPostsData,
    },
  };
}

const Home = ({ allPostsData }) => (
  <Container>
    <Box my={[5, 6]}>
      <Hero />
    </Box>
    <Box my={[5, 6]}>
      <Blog allPostsData={allPostsData} />
    </Box>
    <Box my={[5, 6]}>
      <Footer />
    </Box>
  </Container>
);

export default Home;
