import React from "react";
import NextLink from "next/link";

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
    <div className="flex flex-wrap items-center">
      {sortTags(tags).map((tag) => (
        <NextLink
          href="/tags/[tag]"
          as={`/tags/${tag.name}`}
          key={tag.name}
          passHref
        >
          <a className="m-1 text-sm no-underline text-grayish">#{tag.name}</a>
        </NextLink>
      ))}
    </div>
  );
};

export default TagList;
