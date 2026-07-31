"use client";

import { useState } from "react";
import { motion } from "framer-motion";

export default function NewsletterCta() {
  const [submitted, setSubmitted] = useState(false);

  function handleSubmit(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault();
    setSubmitted(true);
  }

  return (
    <section className="bg-ink py-24 text-center text-paper">
      <div className="mx-auto max-w-xl px-4 sm:px-8">
        <motion.h2
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-80px" }}
          transition={{ duration: 0.5, ease: "easeOut" }}
          className="font-display text-3xl font-medium tracking-tight sm:text-4xl"
        >
          Get new posts in your inbox
        </motion.h2>
        <p className="mt-3 text-paper/60">
          No spam — just food, lifestyle, and tech writing when it's ready.
        </p>

        {submitted ? (
          <p className="mt-8 text-sm font-medium text-paper">
            Thanks — you&apos;re on the list.
          </p>
        ) : (
          <form
            onSubmit={handleSubmit}
            className="mt-8 flex flex-col items-center justify-center gap-3 sm:flex-row"
          >
            <input
              type="email"
              required
              placeholder="you@email.com"
              className="w-full max-w-xs rounded-full border border-paper/20 bg-transparent px-5 py-3 text-sm text-paper placeholder:text-paper/40 focus:border-paper/50 focus:outline-none"
            />
            <motion.button
              whileHover={{ scale: 1.04 }}
              whileTap={{ scale: 0.97 }}
              type="submit"
              className="rounded-full bg-paper px-6 py-3 text-sm font-semibold text-ink"
            >
              Subscribe
            </motion.button>
          </form>
        )}
      </div>
    </section>
  );
}
