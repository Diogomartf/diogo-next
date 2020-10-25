import Hero from "../components/Hero";
import { getSortedPostsData } from "../lib/posts";
import { Box, Text, Link } from "theme-ui";
import NextLink from "next/link";

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
    <Hero />
    <Text sx={{ fontSize: 3 }}>Writting</Text>
    <Text sx={{ fontSize: 2 }} my={2}>
      I try to follow my curiousity which lately has been around{" "}
      <code>computers</code>, <code>systems</code> and <code>how to live</code>.
    </Text>
    <Box my={3}>
      {allPostsData.map(({ id, date, title }) => (
        <Box my={2} key={id}>
          <NextLink href="/blog/[id]" as={`/blog/${id}`}>
            <Link variant="links.blog">{title}</Link>
          </NextLink>
          <Text variant="dates" my={1}>
            {date}
          </Text>
        </Box>
      ))}
    </Box>
  </>
);

export default Home;
