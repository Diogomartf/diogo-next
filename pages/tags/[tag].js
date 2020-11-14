import React from "react";
import { Box, Link, Text } from "theme-ui";
import NextLink from "next/link";
import Head from "next/head";

import { getSerializeableFrontmatter, getAllPostsByTag } from "../../lib/posts";

import SocialMetaTags from "../../components/SocialMetaTags";
import Hero from "../../components/Hero";
import Container from "../../components/Container";
import TagList from "../../components/TagList";

export default function Tag({ tag, tags, posts }) {
  return (
    <Container>
      <Head>
        <title>{`${tag} | Diogo Ferreira`}</title>
      </Head>
      <SocialMetaTags
        title={`Diogo Ferreira | #${tag}`}
        description={`#${tag} • ${posts.length} posts`}
      />
      <Box my={[5, 6]}>
        <Hero title={`#${tag}`}>
          <TagList tags={tags} />
        </Hero>
      </Box>
      <Box my={[5, 6]}>
        <Text variant="midTitle">Articles</Text>
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
}

export async function getStaticProps(context) {
  const { tags } = await import("../../content/tags.json");
  const tag = tags.find((tag) => tag.name.toLowerCase() === context.params.tag);

  const posts = (await getAllPostsByTag(tag.name)).map((post) =>
    getSerializeableFrontmatter(post.frontmatter)
  );

  return {
    props: {
      tags: tags,
      tag: tag.name,
      posts,
    },
  };
}

export async function getStaticPaths() {
  const { tags } = await import("../../content/tags.json");

  return {
    paths: tags.map((tag) => ({
      params: {
        tag: tag.name.toLowerCase(),
      },
    })),
    fallback: false,
  };
}
