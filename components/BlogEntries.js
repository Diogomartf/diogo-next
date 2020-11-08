/** @jsx jsx */
import { jsx, Text, Link } from "theme-ui";
import NextLink from "next/link";

const BlogEntries = ({ entries }) => (
  <>
    {entries.map((slug) => (
      <NextLink href="/blog/[id]" as={`/blog/${slug}`} key={slug} passHref>
        <Link variant="card.blog" w={1} h={1}>
          <Text variant="blog">{slug}</Text>
          <Text variant="small" my={1}>
            8-11-2020
          </Text>
        </Link>
      </NextLink>
    ))}
  </>
);

export default BlogEntries;
