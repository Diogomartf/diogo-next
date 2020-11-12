import { Box, Text, Link } from "theme-ui";
import Head from "next/head";
import NextLink from "next/link";

import { getAllPosts, getSerializeableFrontmatter } from "../../lib/posts";

import Container from "../../components/Container";
import Hero from "../../components/Hero";

export default function Blog({ posts }) {
  return (
    <Container>
      <Head>
        <title>{`Blog | Diogo Ferreira`}</title>
      </Head>
      <Box my={[5, 6]}>
        <Hero title="Thoughts">
          <Text variant="small">My journal.</Text>
          <Text variant="small">Life decisions. Curiosities. Experiences.</Text>
        </Hero>
      </Box>
      {Object.keys(posts)
        .reverse()
        .map((year) => (
          <Box key={year} my={[4, 5]}>
            <Text variant="midTitle">{year}</Text>
            {posts[year] &&
              posts[year].map((post) => (
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
        ))}
    </Container>
  );
}

export async function getStaticProps(context) {
  const entries = {};

  const posts = (await getAllPosts()).map((post) =>
    getSerializeableFrontmatter(post.frontmatter)
  );

  const years = new Set(posts.map((post) => new Date(post.date).getFullYear()));

  years.forEach((year) => {
    entries[year] = new Array();
  });

  posts.forEach((post) =>
    entries[new Date(post.date).getFullYear()].push(post)
  );

  years.forEach((year) => {
    entries[year] = entries[year].sort(
      (a, b) => new Date(b.date) - new Date(a.date)
    );
  });

  return {
    props: {
      posts: entries,
    },
  };
}
