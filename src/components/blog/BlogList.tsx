"use client";

import Link from "next/link";
import { motion } from "framer-motion";
import type { Post } from "@/lib/posts";

const categorySwatch: Record<Post["category"], string> = {
  Food: "bg-palate-food",
  Lifestyle: "bg-palate-lifestyle",
  Technology: "bg-palate-tech",
};

export default function BlogList({ posts }: { posts: Post[] }) {
  return (
    <div className="mx-auto max-w-3xl px-4 pb-10 pt-28">
      <motion.p
        initial={{ opacity: 0, y: 12 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5, ease: "easeOut" }}
        className="text-xs font-semibold uppercase tracking-[0.3em] text-ink/50"
      >
        The journal
      </motion.p>
      <motion.h1
        initial={{ opacity: 0, y: 16 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5, delay: 0.1, ease: "easeOut" }}
        className="font-display mt-3 text-3xl font-medium tracking-tight text-ink sm:text-4xl"
      >
        All posts
      </motion.h1>

      <div className="mt-10 border-t border-ink/10">
        {posts.map((post, i) => (
          <motion.article
            key={post.slug}
            initial={{ opacity: 0, y: 24 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-80px" }}
            transition={{ duration: 0.5, delay: i * 0.05, ease: "easeOut" }}
            className="border-b border-ink/10 py-7"
          >
            <div className="flex items-center gap-2">
              <span
                className={`h-1.5 w-1.5 rounded-full ${categorySwatch[post.category]}`}
              />
              <p className="text-xs font-semibold uppercase tracking-widest text-ink/40">
                {post.category} &middot;{" "}
                {new Date(post.date).toLocaleDateString("en-US", {
                  year: "numeric",
                  month: "long",
                  day: "numeric",
                })}
              </p>
            </div>
            <Link
              href={`/blog/${post.slug}`}
              className="font-display mt-2 block text-2xl font-medium text-ink transition hover:opacity-70"
            >
              {post.title}
            </Link>
            <p className="mt-2 max-w-xl text-ink/60">{post.excerpt}</p>
          </motion.article>
        ))}
      </div>
    </div>
  );
}
