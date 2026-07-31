"use client";

import { useRef } from "react";
import { useInView, motion } from "framer-motion";
import Link from "next/link";

function WordsPullUp({
  text,
  className = "",
}: {
  text: string;
  className?: string;
}) {
  const ref = useRef<HTMLDivElement>(null);
  const isInView = useInView(ref, { once: true });
  const words = text.split(" ");

  return (
    <div ref={ref} className={`inline-flex flex-wrap justify-center ${className}`}>
      {words.map((word, i) => (
        <motion.span
          key={i}
          initial={{ y: 20, opacity: 0 }}
          animate={isInView ? { y: 0, opacity: 1 } : {}}
          transition={{ duration: 0.6, delay: i * 0.08, ease: [0.16, 1, 0.3, 1] }}
          className="inline-block"
          style={{ marginRight: "0.25em" }}
        >
          {word}
        </motion.span>
      ))}
    </div>
  );
}

export default function VideoHero() {
  return (
    <section className="relative h-screen w-full overflow-hidden bg-black">
      <video
        autoPlay
        loop
        muted
        playsInline
        className="absolute inset-0 h-full w-full object-cover opacity-60"
        src="/videos/hero.mp4"
      />

      <div className="pointer-events-none absolute inset-0 bg-gradient-to-b from-black/50 via-black/10 to-black/70" />

      <div className="relative flex h-full flex-col items-center justify-center px-6 text-center">
        <p className="text-xs font-medium uppercase tracking-[0.4em] text-neutral-300">
          Food &middot; Lifestyle &middot; Technology
        </p>

        <h1 className="font-hero mt-4 max-w-4xl text-6xl uppercase leading-[0.9] tracking-wide text-white sm:text-7xl md:text-8xl">
          <WordsPullUp text="The Wired" />
          <br />
          <WordsPullUp
            text="Palate"
            className="bg-gradient-to-r from-rose-300 via-red-400 to-rose-500 bg-clip-text text-transparent"
          />
        </h1>

        <motion.p
          initial={{ y: 20, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ duration: 0.8, delay: 0.6, ease: [0.16, 1, 0.3, 1] }}
          className="mt-6 max-w-md text-sm text-neutral-300"
        >
          Where culinary craft meets digital culture — dispatches on what we
          taste, how we live, and the tech reshaping both.
        </motion.p>

        <motion.div
          initial={{ y: 20, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ duration: 0.8, delay: 0.8, ease: [0.16, 1, 0.3, 1] }}
        >
          <Link
            href="/blog"
            className="mt-8 inline-flex items-center gap-2 rounded-full bg-gradient-to-r from-purple-500 to-pink-500 px-6 py-3 text-sm font-semibold text-white transition hover:opacity-90"
          >
            Start Reading →
          </Link>
        </motion.div>
      </div>
    </section>
  );
}
