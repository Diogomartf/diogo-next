import ReactDOMServer from "react-dom/server";
import Head from "next/head";
import { Box, Text } from "theme-ui";

import { getAllPosts, getSerializeableFrontmatter } from "../../lib/posts";

import MDX from "../../components/MDX";
import SocialMetaTags from "../../components/SocialMetaTags";
import Container from "../../components/Container";
import Hero from "../../components/Hero";
import TagList from "../../components/TagsList";

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
    <Box mt={[5, 6]} mb={[3, 4]}>
      <Hero title={frontmatter.title}>
        <Text variant="small" my={1}>
          {frontmatter.date}
        </Text>
        <Box>
          <TagList tags={tagsWithName(frontmatter.tags)} />
        </Box>
        <Text variant="small">{frontmatter.excerpt}</Text>
      </Hero>
    </Box>
    <Box pb={[4, 5]}>
      <article dangerouslySetInnerHTML={{ __html: content }} />
    </Box>
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
