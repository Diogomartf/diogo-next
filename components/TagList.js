import React from "react";
import NextLink from "next/link";
import { Flex, Text, Link } from "theme-ui";

const sortTags = (tags) => {
  return tags.sort(function (a, b) {
    var A = a.name.toLowerCase();
    var B = b.name.toLowerCase();
    if (A < B) {
      return -1; //A comes first
    }
    if (A > B) {
      return 1; // B comes first
    }
    return 0; // names must be equal
  });
};

const TagList = ({ tags }) => {
  return (
    <Flex
      sx={{
        flexFlow: "row wrap",
        alignItems: "center",
      }}
    >
      {sortTags(tags).map((tag) => (
        <NextLink
          href="/tags/[tag]"
          as={`/tags/${tag.name}`}
          key={tag.name}
          passHref
        >
          <Link mr={3} mb={2} variant="links.footer">
            #{tag.name}
          </Link>
        </NextLink>
      ))}
    </Flex>
  );
};

export default TagList;
