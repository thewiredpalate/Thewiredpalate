import { notFound } from "next/navigation";
import { getAllPosts, getPostBySlug } from "@/lib/posts";

export function generateStaticParams() {
  return getAllPosts().map((post) => ({ slug: post.slug }));
}

export async function generateMetadata({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const { slug } = await params;
  const post = getPostBySlug(slug);
  return { title: post ? `${post.title} — The Wired Palate` : "Post not found" };
}

export default async function BlogPost({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const { slug } = await params;
  const post = getPostBySlug(slug);

  if (!post) {
    notFound();
  }

  return (
    <article>
      <h1 className="text-2xl font-bold tracking-tight">{post.title}</h1>
      <p className="mt-2 text-sm text-neutral-500">{post.date}</p>
      <div className="prose mt-6 max-w-none text-neutral-800">
        <p>{post.content}</p>
      </div>
    </article>
  );
}
