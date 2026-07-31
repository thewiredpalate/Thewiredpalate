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

  if (!post) {
    return { title: "Post not found" };
  }

  const title = `${post.title} — The Wired Palate`;

  return {
    title,
    description: post.excerpt,
    openGraph: {
      title,
      description: post.excerpt,
      type: "article",
      publishedTime: post.date,
      url: `/blog/${post.slug}`,
    },
    twitter: {
      card: "summary_large_image",
      title,
      description: post.excerpt,
    },
    alternates: {
      canonical: `/blog/${post.slug}`,
    },
  };
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
    <article className="mx-auto max-w-3xl px-4 pb-10 pt-28">
      <p className="text-xs font-semibold uppercase tracking-[0.3em] text-ink/50">
        {post.category}
      </p>
      <h1 className="font-display mt-3 text-3xl font-medium tracking-tight text-ink sm:text-4xl">
        {post.title}
      </h1>
      <p className="mt-2 text-sm text-ink/50">
        {new Date(post.date).toLocaleDateString("en-US", {
          year: "numeric",
          month: "long",
          day: "numeric",
        })}
      </p>

      <div className="mt-8 flex flex-col gap-5 text-ink/80">
        {post.content.map((block, i) => {
          if (block.type === "h2") {
            return (
              <h2
                key={i}
                className="font-display mt-4 text-2xl font-medium text-ink"
              >
                {block.text}
              </h2>
            );
          }
          if (block.type === "list") {
            return (
              <ul key={i} className="list-disc space-y-2 pl-5">
                {block.items.map((item, j) => (
                  <li key={j}>{item}</li>
                ))}
              </ul>
            );
          }
          return (
            <p key={i} className="leading-relaxed">
              {block.text}
            </p>
          );
        })}
      </div>
    </article>
  );
}
