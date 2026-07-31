"use client";

import { motion } from "framer-motion";
import type { Post } from "@/lib/posts";
import ReadingProgress from "@/components/ReadingProgress";

export default function PostBody({ post }: { post: Post }) {
  return (
    <>
      <ReadingProgress />

      <article className="mx-auto max-w-3xl px-4 pb-10 pt-28">
        <motion.p
          initial={{ opacity: 0, y: 12 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, ease: "easeOut" }}
          className="text-xs font-semibold uppercase tracking-[0.3em] text-ink/50"
        >
          {post.category}
        </motion.p>
        <motion.h1
          initial={{ opacity: 0, y: 16 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.1, ease: "easeOut" }}
          className="font-display mt-3 text-3xl font-medium tracking-tight text-ink sm:text-4xl"
        >
          {post.title}
        </motion.h1>
        <motion.p
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.5, delay: 0.2 }}
          className="mt-2 text-sm text-ink/50"
        >
          {new Date(post.date).toLocaleDateString("en-US", {
            year: "numeric",
            month: "long",
            day: "numeric",
          })}
        </motion.p>

        <div className="mt-8 flex flex-col gap-5 text-ink/80">
          {post.content.map((block, i) => {
            if (block.type === "h2") {
              return (
                <motion.h2
                  key={i}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true, margin: "-80px" }}
                  transition={{ duration: 0.5, ease: "easeOut" }}
                  className="font-display mt-4 text-2xl font-medium text-ink"
                >
                  {block.text}
                </motion.h2>
              );
            }
            if (block.type === "list") {
              return (
                <motion.ul
                  key={i}
                  initial={{ opacity: 0, y: 16 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true, margin: "-80px" }}
                  transition={{ duration: 0.5, ease: "easeOut" }}
                  className="list-disc space-y-2 pl-5"
                >
                  {block.items.map((item, j) => (
                    <li key={j}>{item}</li>
                  ))}
                </motion.ul>
              );
            }
            return (
              <motion.p
                key={i}
                initial={{ opacity: 0, y: 16 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-80px" }}
                transition={{ duration: 0.5, ease: "easeOut" }}
                className="leading-relaxed"
              >
                {block.text}
              </motion.p>
            );
          })}
        </div>
      </article>
    </>
  );
}
