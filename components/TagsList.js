import React from "react";
import NextLink from "next/link";
import { Flex, Text, Link } from "theme-ui";

export default function TagList({ tags }) {
  return (
    <Flex
      sx={{
        flexFlow: "row wrap",
        alignItems: "center",
      }}
    >
      {tags.map((tag) => (
        <NextLink
          href="/tags/[tag]"
          as={`/tags/${tag.name}`}
          key={tag.name}
          passHref
        >
          <Link mr={2} my={1}>
            <Text variant="small">{tag.name}</Text>
          </Link>
        </NextLink>
      ))}
    </Flex>
  );
}
