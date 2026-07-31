"use client";

import Link from "next/link";
import { motion } from "framer-motion";
import type { Post } from "@/lib/posts";

export default function RevealPosts({ posts }: { posts: Post[] }) {
  return (
    <section className="bg-neutral-50 py-24">
      <div className="mx-auto max-w-6xl px-4 sm:px-8">
        <motion.h2
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-80px" }}
          transition={{ duration: 0.5, ease: "easeOut" }}
          className="text-3xl font-bold tracking-tight text-neutral-900 sm:text-4xl"
        >
          Recent posts
        </motion.h2>

        <div className="mt-10 grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {posts.map((post, i) => (
            <motion.article
              key={post.slug}
              initial={{ opacity: 0, y: 24 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-80px" }}
              transition={{ duration: 0.5, delay: i * 0.08, ease: "easeOut" }}
              className="flex flex-col rounded-2xl border border-neutral-200 bg-white p-6 transition hover:-translate-y-1 hover:shadow-md"
            >
              <p className="text-xs font-medium uppercase tracking-widest text-neutral-400">
                {post.date}
              </p>
              <Link
                href={`/blog/${post.slug}`}
                className="mt-3 text-lg font-semibold text-neutral-900 hover:underline"
              >
                {post.title}
              </Link>
              <p className="mt-2 flex-1 text-sm text-neutral-600">
                {post.excerpt}
              </p>
              <Link
                href={`/blog/${post.slug}`}
                className="mt-4 text-sm font-medium text-neutral-900 underline underline-offset-4"
              >
                Read more →
              </Link>
            </motion.article>
          ))}
        </div>

        <div className="mt-10">
          <Link
            href="/blog"
            className="text-sm font-medium text-neutral-900 underline underline-offset-4"
          >
            View all posts →
          </Link>
        </div>
      </div>
    </section>
  );
}
