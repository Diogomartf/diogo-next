import React from "react";
import Head from "next/head";

import { getSerializeableFrontmatter, getAllPostsByTag } from "../../lib/posts";

import SocialMetaTags from "../../components/SocialMetaTags";
import Hero from "../../components/Hero";
import Container from "../../components/Container";
import TagList from "../../components/TagList";
import Spacy from "../../components/Spacy";
import BlogPostsList from "../../components/BlogList";

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
      <Spacy>
        <Hero title={`#${tag}`}>
          <TagList tags={tags} />
        </Hero>
      </Spacy>
      <Spacy>
        <div className="font-bold text-grayish md:text-lg dark:text-greenlight">
          Articles
        </div>
        <BlogPostsList posts={posts} />
      </Spacy>
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
