/** @jsx jsx */

import { jsx, Box } from "theme-ui";
import { getSortedPostsData } from "../lib/posts";

import Hero from "../components/Hero";
import Blog from "../components/Blog";
import AskMe from "../components/AskMe";
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
    <Box py={[2]} my={[2, 3]}>
      <Hero />
    </Box>
    <Box py={[2]} my={[2, 3]}>
      <Blog allPostsData={allPostsData} />
    </Box>
    <Box py={[2]} my={[2, 3]}>
      <AskMe />
    </Box>
    <Footer />
  </Container>
);

export default Home;
