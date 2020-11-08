import { Box } from "theme-ui";
import BigTitle from "../../components/BigTitle";
import BlogEntries from "../../components/BlogEntries";
import Container from "../../components/Container";
import Hero from "../../components/Hero";
import { getAllPosts } from "../../lib/posts";

export default function Blog({ entries }) {
  return (
    <Container>
      <Box my={[5, 6]}>
        <Hero title="Free Thoughts" />
      </Box>
      <Box my={[5, 6]}>
        <BlogEntries entries={entries} />
      </Box>
    </Container>
  );
}

export async function getStaticProps() {
  const posts = await getAllPosts();

  return {
    props: {
      entries: posts.map((post) => post.slug),
    },
  };
}

export async function getStaticPaths() {
  const posts = await getAllPosts();

  const slugs = posts.map((post) => ({
    params: { post: post.slug },
  }));

  return {
    paths: slugs,
    fallback: false,
  };
}
