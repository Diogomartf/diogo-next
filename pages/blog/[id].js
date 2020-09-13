import Container from "../../components/Container";
import { getAllPostIds, getPostData } from "../../lib/posts";
import Head from "next/head";

export default function Blog({ postData }) {
  return (
    <Container>
      <Head>
        <title>{postData.title}</title>
      </Head>
      {postData.date}
      <div dangerouslySetInnerHTML={{ __html: postData.contentHtml }} />
    </Container>
  );
}

export async function getStaticPaths() {
  // Return a list of possible value for id
  const paths = getAllPostIds();
  return {
    paths,
    fallback: false,
  };
}

export async function getStaticProps({ params }) {
  // Fetch necessary data for the blog post using params.id
  const postData = await getPostData(params.id);
  return {
    props: {
      postData,
    },
  };
}
