import React from "react";
import ReactDOMServer from "react-dom/server";
import MDX from "../../components/MDX";
import Container from "../../components/Container";
import { getAllPosts, getSerializeableFrontmatter } from "../../lib/posts";
import Hero from "../../components/Hero";
import { Box, Text } from "theme-ui";

export default function Post({ frontmatter, content }) {
  return (
    <Container>
      <Box my={[5, 6]}>
        <Hero title={frontmatter.title}>
          <Text variant="small">{frontmatter.excerpt}</Text>
        </Hero>
      </Box>
      <Box pb={[4, 5]}>
        <article dangerouslySetInnerHTML={{ __html: content }} />
      </Box>
    </Container>
  );
}

export async function getStaticProps(context) {
  const post = (await getAllPosts()).find(
    (post) => post.frontmatter.slug === context.params.post
  );

  const { frontmatter, MDXContent } = post;

  return {
    props: {
      frontmatter: getSerializeableFrontmatter(frontmatter),
      content: ReactDOMServer.renderToStaticMarkup(
        <MDX>
          <MDXContent />
        </MDX>
      ),
    },
  };
}

export async function getStaticPaths() {
  const posts = await getAllPosts();

  const slugs = posts.map((post) => ({
    params: { post: post.frontmatter.slug },
  }));

  return {
    paths: slugs,
    fallback: false,
  };
}
