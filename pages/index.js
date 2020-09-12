import Hero from "../components/Hero";
import Container from "../components/Container";
import Header from "../components/Header";
import { getSortedPostsData } from "../lib/posts";
import { Flex, Box } from "theme-ui";
import Link from "next/link";

export async function getStaticProps() {
  const allPostsData = getSortedPostsData();
  return {
    props: {
      allPostsData,
    },
  };
}

const Home = ({ allPostsData }) => (
  <>
    <Container>
      <Header></Header>
      <Hero />
      <h3>blog</h3>
      <ul>
        {allPostsData.map(({ id, date, title }) => (
          <Box my={2} key={id}>
            <Link href="/blog/[id]" as={`/blog/${id}`}>
              <Flex>
                <Box>{title}</Box>
                {" - "}
                <Box>{date}</Box>
              </Flex>
            </Link>
          </Box>
        ))}
      </ul>
    </Container>
  </>
);

export default Home;
