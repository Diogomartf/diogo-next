import path from "path";
import fs from "fs";
import slug from "./slug";

export function getSerializeableFrontmatter(frontmatter) {
  // Initialize with required keys
  const fm = {
    title: null,
    slug: null,
    date: new Date(frontmatter.date).toJSON(),
    excerpt: null,
    image: null,
  };

  Object.entries(frontmatter).forEach(([key, value]) => {
    fm[key] = value ?? null;
  });

  return fm;
}

export async function getAllPosts() {
  const directory = path.join(process.cwd(), "content", "posts");
  const files = fs.readdirSync(directory);

  const entries = await Promise.all(
    files.map((file) => import(`../content/posts/${file}`))
  );

  const posts = entries.map((entry) => ({
    frontmatter: {
      ...entry.frontmatter,
      slug: slug(entry.frontmatter.title),
    },
    MDXContent: entry.default,
  }));

  return posts.sort(
    (a, b) => new Date(b.frontmatter.date) - new Date(a.frontmatter.date)
  );
}
