"use client";

import { motion } from "framer-motion";

const paragraphs = [
  "The Wired Palate is a blog about the places worth eating at, the routines worth keeping, and the tools worth using — written from Metro Manila and shaped by life in the Philippines.",
  "It started from a simple observation: most food coverage in the Philippines is either tourist-facing or restaurant-PR, most lifestyle content is imported and doesn't account for Manila traffic or tropical heat, and most tech writing ignores what it actually means to build and work here — spotty internet, brownouts, and all.",
  "So this is where those three things meet: honest restaurant and coffee shop guides, essays on building a slower life in a fast city, and practical notes on the tools, coworking spaces, and infrastructure that Filipino developers and remote workers actually rely on.",
  "New posts go up as they're ready, not on a schedule. If you'd rather they land in your inbox, the newsletter on the homepage is the easiest way to keep up.",
];

export default function AboutContent() {
  return (
    <div className="mx-auto max-w-3xl px-4 pb-10 pt-28">
      <motion.p
        initial={{ opacity: 0, y: 12 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5, ease: "easeOut" }}
        className="text-xs font-semibold uppercase tracking-[0.3em] text-ink/50"
      >
        About
      </motion.p>
      <motion.h1
        initial={{ opacity: 0, y: 16 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5, delay: 0.1, ease: "easeOut" }}
        className="font-display mt-3 text-3xl font-medium tracking-tight text-ink sm:text-4xl"
      >
        Food, lifestyle, and technology — from the Philippines
      </motion.h1>

      <div className="mt-8 flex flex-col gap-5 text-ink/80">
        {paragraphs.map((text, i) => (
          <motion.p
            key={i}
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-80px" }}
            transition={{ duration: 0.5, delay: i * 0.05, ease: "easeOut" }}
            className="leading-relaxed"
          >
            {text}
          </motion.p>
        ))}
      </div>
    </div>
  );
}
