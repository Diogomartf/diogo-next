import { Box, Text, Link } from "theme-ui";

import { getAllPosts, getSerializeableFrontmatter } from "../lib/posts";

import Hero from "../components/Hero";
import Container from "../components/Container";
import NextLink from "next/link";

const Home = ({ posts }) => (
  <Container>
    <Box my={[5, 6]}>
      <Hero title="Diogo Ferreira">
        <Text variant="small">Curious. Thinker. Distracted. Stubborn.</Text>
        <Text variant="small">Born in 93.</Text>
      </Hero>
    </Box>
    <Box my={[5, 6]}>
      <Text variant="midTitle">Free thoughts</Text>
      {posts.map((post) => (
        <NextLink
          href="/blog/[post]"
          as={`/blog/${post.slug}`}
          key={post.slug}
          passHref
        >
          <Link variant="card.blog" w={1} h={1}>
            <Text variant="blog">{post.title}</Text>
            <Text variant="small" my={1}>
              {post.date}
            </Text>
          </Link>
        </NextLink>
      ))}
    </Box>
  </Container>
);

export async function getStaticProps() {
  const posts = (await getAllPosts())
    .slice(0, 10)
    .map((post) => getSerializeableFrontmatter(post.frontmatter));

  return {
    props: {
      posts,
    },
  };
}

export default Home;
