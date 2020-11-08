import ReactDOMServer from "react-dom/server";
import Container from "../../components/Container";
import { getAllPosts } from "../../lib/posts";
// import Head from "next/head";
import MDX from "../../components/MDX";

export default function Post({ content }) {
  return (
    <Container>
      <article dangerouslySetInnerHTML={{ __html: content }} />
    </Container>
  );
}

export async function getStaticProps(context) {
  const posts = await getAllPosts();
  const post = posts.find((post) => post.slug === context.params.post);

  const { MDXContent } = post;

  return {
    props: {
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
    params: { post: post.slug },
  }));

  return {
    paths: slugs,
    fallback: false,
  };
}
