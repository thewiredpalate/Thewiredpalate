import { getAllPosts } from "@/lib/posts";
import BlogList from "@/components/blog/BlogList";

export const metadata = {
  title: "Blog",
  description:
    "Food, lifestyle, and technology articles from the Philippines — restaurant guides, coworking reviews, and dev notes from Metro Manila and beyond.",
};

export default function BlogIndex() {
  const posts = getAllPosts();

  return <BlogList posts={posts} />;
}
