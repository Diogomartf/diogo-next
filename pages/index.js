/** @jsx jsx */

import { jsx, Box } from "theme-ui";
import { getSortedPostsData } from "../lib/posts";

import Hero from "../components/Hero";
import Blog from "../components/Blog";
import AskMe from "../components/AskMe";
import Footer from "../components/Footer";

export async function getStaticProps() {
  const allPostsData = getSortedPostsData();
  return {
    props: {
      allPostsData,
    },
  };
}

const Home = ({ allPostsData }) => (
  <Box px={4} sx={{ maxWidth: ["100%", "600px", "780px"], margin: "auto" }}>
    <Box py={[2, 3]} my={[2, 3]}>
      <Hero />
    </Box>
    <Box py={[2, 3]} my={[2, 3]}>
      <Blog allPostsData={allPostsData} />
    </Box>
    <Box py={[2, 3]} my={[2, 3]}>
      <AskMe />
    </Box>
    <Footer />
  </Box>
);

export default Home;
