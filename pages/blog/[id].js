import Container from "../../components/Container";
import { getAllPostIds, getPostData } from "../../lib/posts";

export default function Blog({ postData }) {
  return (
    <Container>
      {postData.title}
      <br />
      {postData.id}
      <br />
      {postData.date}
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
  const postData = getPostData(params.id);
  return {
    props: {
      postData,
    },
  };
}
