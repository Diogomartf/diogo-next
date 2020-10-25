/** @jsx jsx */

import { jsx, Box, Text, Link } from "theme-ui";
import NextLink from "next/link";

const Blog = ({ allPostsData }) => (
  <>
    <Text
      sx={{
        fontWeight: "bold",
        color: "primary",
        my: 1,
      }}
    >
      Free thoughts
    </Text>
    {allPostsData.map(({ id, date, title }) => (
      <NextLink href="/blog/[id]" as={`/blog/${id}`} key={id}>
        <Box
          my={1}
          py={2}
          sx={{
            bg: "rgba(92, 101, 101, 0.01)",
            borderRadius: "4px",
            cursor: "pointer",
          }}
        >
          <Link variant="links.blog">{title}</Link>
          <Text variant="dates" my={1}>
            {date}
          </Text>
        </Box>
      </NextLink>
    ))}
  </>
);

export default Blog;
