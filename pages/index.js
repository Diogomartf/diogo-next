import { Text, Link } from "theme-ui";
import NextLink from "next/link";

import { getAllPosts, getSerializeableFrontmatter } from "../lib/posts";

import Hero from "../components/Hero";
import Container from "../components/Container";
import Spacy from "../components/Spacy";

const Home = ({ posts }) => {
  return (
    <Container>
      <Spacy>
        <Hero title="Diogo Ferreira">
          <Text variant="small">Thinker. Programmer.</Text>
        </Hero>
      </Spacy>
      <Spacy>
        <Text variant="midTitle">Thoughts</Text>
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
      </Spacy>
    </Container>
  );
};

const NUMBER_OF_POSTS = 5;

export async function getStaticProps() {
  const posts = (await getAllPosts())
    .slice(0, NUMBER_OF_POSTS)
    .map((post) => getSerializeableFrontmatter(post.frontmatter));

  return {
    props: {
      posts,
    },
  };
}

export default Home;
