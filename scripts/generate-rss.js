import React, { Fragment } from "react";
import ReactDOMServer from "react-dom/server";
import fs from "fs";
import RSS from "rss";

import MDX from "../components/MDX";
import { getAllPosts } from "../lib/posts";

const SITE_URL = "https://diogo.xyz";

async function generate() {
  const feed = new RSS({
    title: "Diogo Ferreira",
    description:
      "I write about things I'm curious about be it life experiences, products, code, design or stuff related to the mind",
    site_url: `${SITE_URL}/blog`,
    feed_url: `${SITE_URL}/feed.xml`,
    image_url: `${SITE_URL}/images/moon.png`,
    language: "en",
  });

  const posts = await getAllPosts();

  posts.forEach((post) => {
    const { frontmatter, MDXContent } = post;

    feed.item({
      title: frontmatter.title,
      guid: frontmatter.slug,
      url: `${SITE_URL}/blog/${frontmatter.slug}`,
      date: frontmatter.date,
      description: frontmatter.excerpt,
      categories: [
        "mind",
        "productivity",
        "programming",
        "life experience",
        "tech",
        "startups",
      ],
      custom_elements: [
        {
          "content:encoded": ReactDOMServer.renderToStaticMarkup(
            <Fragment>
              <MDX>
                <MDXContent />
              </MDX>
              <a
                href={`mailto:diogomf@hey.com?subject=Reply%20to:%20“${frontmatter.title}”`}
              >
                Reply via e-mail
              </a>
            </Fragment>
          ),
        },
      ],
    });
  });

  fs.writeFileSync("./public/feed.xml", feed.xml({ indent: true }));
}

generate();
