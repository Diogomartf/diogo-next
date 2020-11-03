/** @jsx jsx */
import { jsx, Box, Text, Link } from "theme-ui";
import NextLink from "next/link";

const Blog = ({ allPostsData }) => (
  <>
    <Text variant="midTitle">Free thoughts</Text>
    {allPostsData.map(({ id, date, title }) => (
      <NextLink href="/blog/[id]" as={`/blog/${id}`} key={id} passHref>
        <Link variant="card.blog" w={1} h={1}>
          <Text variant="blog">{title}</Text>
          <Text variant="small" my={1}>
            {date}
          </Text>
        </Link>
      </NextLink>
    ))}
  </>
);

export default Blog;
