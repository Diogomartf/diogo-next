import { getAllPosts, getSerializeableFrontmatter } from "../lib/posts";

import Hero from "../components/Hero";
import Container from "../components/Container";
import Spacy from "../components/Spacy";
import BlogPostsList from "../components/BlogList";

const Home = ({ posts }) => {
  return (
    <Container>
      <Spacy>
        <Hero title="Diogo Ferreira" description="Thinker. Dreamer" />
      </Spacy>
      <Spacy>
        <div className="font-bold text-grayish md:text-lg dark:text-greenlight">
          Thoughts
        </div>
        <BlogPostsList posts={posts} />
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
