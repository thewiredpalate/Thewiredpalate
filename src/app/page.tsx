import Link from "next/link";
import { getAllPosts } from "@/lib/posts";

export default function Home() {
  const recentPosts = getAllPosts().slice(0, 3);

  return (
    <div className="space-y-10">
      <section>
        <h1 className="text-3xl font-bold tracking-tight">The Wired Palate</h1>
        <p className="mt-3 text-neutral-600">
          Welcome. This is where new writing shows up first.
        </p>
      </section>

      <section>
        <h2 className="text-xl font-semibold">Recent posts</h2>
        <ul className="mt-4 space-y-6">
          {recentPosts.map((post) => (
            <li key={post.slug}>
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
        <Link
          href="/blog"
          className="mt-6 inline-block text-sm font-medium text-neutral-900 underline underline-offset-4"
        >
          View all posts →
        </Link>
      </section>
    </div>
  );
}
