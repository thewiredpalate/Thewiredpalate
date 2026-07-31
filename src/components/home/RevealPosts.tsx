"use client";

import Link from "next/link";
import { motion } from "framer-motion";
import type { Post } from "@/lib/posts";

export default function RevealPosts({ posts }: { posts: Post[] }) {
  return (
    <section className="py-24">
      <div className="mx-auto max-w-3xl px-4 sm:px-8">
        <p className="text-xs font-semibold uppercase tracking-[0.3em] text-ink/50">
          From the journal
        </p>
        <motion.h2
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-80px" }}
          transition={{ duration: 0.5, ease: "easeOut" }}
          className="font-display mt-3 text-3xl font-medium tracking-tight text-ink sm:text-4xl"
        >
          Recent dispatches
        </motion.h2>

        <div className="mt-10 border-t border-ink/10">
          {posts.map((post, i) => (
            <motion.article
              key={post.slug}
              initial={{ opacity: 0, y: 16 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-80px" }}
              transition={{ duration: 0.5, delay: i * 0.08, ease: "easeOut" }}
              className="flex flex-col gap-1 border-b border-ink/10 py-6 sm:flex-row sm:items-baseline sm:gap-8"
            >
              <p className="w-24 shrink-0 text-xs font-medium uppercase tracking-widest text-ink/40">
                {post.date}
              </p>
              <div>
                <Link
                  href={`/blog/${post.slug}`}
                  className="font-display text-xl font-medium text-ink transition hover:opacity-70"
                >
                  {post.title}
                </Link>
                <p className="mt-1 text-sm text-ink/60">{post.excerpt}</p>
              </div>
            </motion.article>
          ))}
        </div>

        <div className="mt-8">
          <Link
            href="/blog"
            className="text-sm font-medium text-ink underline decoration-ink/30 underline-offset-4 transition hover:decoration-ink"
          >
            View all posts →
          </Link>
        </div>
      </div>
    </section>
  );
}
