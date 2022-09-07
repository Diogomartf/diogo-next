import Link from "next/link";

const BlogPostCard = ({ post }) => (
  <Link href="/blog/[post]" as={`/blog/${post.slug}`} passHref>
    <div className="block p-6 rounded-lg cursor-pointer md:p-5 no-decoration dark:bg-opacity-10 dark:hover:bg-opacity-20 bg-whitish dark:bg-green-900 hover:bg-opacity-100 border-2 border-orange-500">
      <div className="bg-transparent text-grayish dark:text-greenlight md:text-lg">
        {post.title}
      </div>
      <div className="my-0.5 text-xs text-greenlight dark:text-grayish bg-transparent">
        {post.date}
      </div>
    </div>
  </Link>
);

export default BlogPostCard;
