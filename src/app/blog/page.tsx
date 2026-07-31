import Link from "next/link";
import { getAllPosts } from "@/lib/posts";

export const metadata = {
  title: "Blog — The Wired Palate",
};

export default function BlogIndex() {
  const posts = getAllPosts();

  return (
    <div className="mx-auto max-w-3xl px-4 pb-10 pt-28">
      <h1 className="text-2xl font-bold tracking-tight">Blog</h1>
      <ul className="mt-6 space-y-6">
        {posts.map((post) => (
          <li key={post.slug} className="border-b border-neutral-100 pb-6">
            <Link
              href={`/blog/${post.slug}`}
              className="text-lg font-medium hover:underline"
            >
              {post.title}
            </Link>
            <p className="text-sm text-neutral-500">{post.date}</p>
            <p className="mt-1 text-neutral-700">{post.excerpt}</p>
          </li>
        ))}
      </ul>
    </div>
  );
}
