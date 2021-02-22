import Head from "next/head";

import { getAllPosts, getSerializeableFrontmatter } from "../../lib/posts";

import Container from "../../components/Container";
import Hero from "../../components/Hero";
import Spacy from "../../components/Spacy";
import BlogPostCard from "../../components/BlogPostCard";

export default function Blog({ posts }) {
  return (
    <Container>
      <Head>
        <title>{`Blog | Diogo Ferreira`}</title>
      </Head>
      <Spacy>
        <Hero title="Thoughts">
          <div className="text-sm text-grayish">My journal.</div>
          <div className="text-sm text-grayish">
            Life decisions. Curiosities. Experiences.
          </div>
        </Hero>
      </Spacy>
      <div className="space-y-5 md:space-y-6">
        {Object.keys(posts)
          .reverse()
          .map((year) => (
            <div key={year} className="space-y-2">
              <div className="font-bold text-grayish md:text-lg dark:text-greenlight">
                {year}
              </div>
              {posts[year] &&
                posts[year].map((post) => (
                  <BlogPostCard key={post.slug} post={post} />
                ))}
            </div>
          ))}
      </div>
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
