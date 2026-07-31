"use client";

import Link from "next/link";
import { motion } from "framer-motion";
import type { Post } from "@/lib/posts";

const categorySwatch: Record<Post["category"], string> = {
  Food: "bg-palate-food",
  Lifestyle: "bg-palate-lifestyle",
  Technology: "bg-palate-tech",
};

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
              initial={{ opacity: 0, y: 24, scale: 0.98 }}
              whileInView={{ opacity: 1, y: 0, scale: 1 }}
              viewport={{ once: true, margin: "-80px" }}
              transition={{ duration: 0.55, delay: i * 0.09, ease: "easeOut" }}
              className="group relative flex flex-col gap-1 border-b border-ink/10 py-6 pl-4 transition-colors sm:flex-row sm:items-baseline sm:gap-8"
            >
              <motion.span
                initial={{ scaleY: 0 }}
                whileInView={{ scaleY: 1 }}
                viewport={{ once: true, margin: "-80px" }}
                transition={{ duration: 0.4, delay: i * 0.09 + 0.2, ease: "easeOut" }}
                className={`absolute left-0 top-6 h-5 w-[3px] origin-top ${categorySwatch[post.category]}`}
              />

              <p className="w-24 shrink-0 text-xs font-medium uppercase tracking-widest text-ink/40">
                {post.date}
              </p>
              <div>
                <Link
                  href={`/blog/${post.slug}`}
                  className="font-display inline-flex items-center gap-2 text-xl font-medium text-ink transition group-hover:opacity-70"
                >
                  {post.title}
                  <span className="opacity-0 transition-all -translate-x-1 group-hover:translate-x-0 group-hover:opacity-100">
                    →
                  </span>
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
