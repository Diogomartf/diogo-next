import BlogPostCard from "./BlogPostCard";

const BlogPostsList = ({ posts }) => (
  <div className="space-y-2">
    <div className="my-2 space-y-4">
      {posts.map((post) => (
        <BlogPostCard key={post.slug} post={post} />
      ))}
    </div>
  </div>
);

export default BlogPostsList;
