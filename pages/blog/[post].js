import ReactDOMServer from "react-dom/server";
import Head from "next/head";

import { getAllPosts, getSerializeableFrontmatter } from "../../lib/posts";

import MDX from "../../components/MDX";
import SocialMetaTags from "../../components/SocialMetaTags";
import Container from "../../components/Container";
import Hero from "../../components/Hero";
import TagList from "../../components/TagList";

const tagsWithName = (tags) =>
  tags.map((tag) => {
    return { name: tag };
  });

const Post = ({ frontmatter, content }) => (
  <Container>
    <Head>
      <title>{`${frontmatter.title} | Diogo Ferreira`}</title>
    </Head>
    <SocialMetaTags
      title={frontmatter.title}
      description={frontmatter.excerpt}
      image={frontmatter.image}
    />
    <div className="mt-6 mb-4 md:mt-7 md:mb-5">
      <Hero title={frontmatter.title}>
        <div className="mb-3 text-sm text-grayish">{frontmatter.date}</div>
      </Hero>
      <TagList tags={tagsWithName(frontmatter.tags)} />
    </div>
    <div className="pb-5 md:pb-6" pb={[4, 5]}>
      <article dangerouslySetInnerHTML={{ __html: content }} />
    </div>
  </Container>
);

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

export default Post;
