"use client";

import { motion } from "framer-motion";
import { Utensils, Compass, Cpu } from "lucide-react";

const pillars = [
  {
    icon: Utensils,
    title: "Food",
    description:
      "Restaurant reviews, tasting notes, and dishes worth crossing town for — written the way you'd tell a friend about them.",
  },
  {
    icon: Compass,
    title: "Lifestyle",
    description:
      "Routines, spaces, and small rituals that shape how a day actually feels — the stuff between the headlines.",
  },
  {
    icon: Cpu,
    title: "Technology",
    description:
      "Dev projects, tools, and the occasional rant about whatever's reshaping how we build and work right now.",
  },
];

export default function PillarsSticky() {
  return (
    <section className="mx-auto max-w-6xl px-4 py-24 sm:px-8">
      <div className="grid grid-cols-1 gap-12 lg:grid-cols-[1fr_1.4fr]">
        <div className="lg:sticky lg:top-24 lg:self-start">
          <p className="text-xs font-semibold uppercase tracking-[0.3em] text-neutral-400">
            What you&apos;ll find here
          </p>
          <h2 className="mt-4 text-3xl font-bold tracking-tight text-neutral-900 sm:text-4xl">
            Three things we obsess over
          </h2>
          <p className="mt-4 max-w-sm text-neutral-600">
            Every post lives at the intersection of one of these — sometimes
            all three at once.
          </p>
        </div>

        <div className="flex flex-col gap-10">
          {pillars.map((pillar, i) => (
            <motion.div
              key={pillar.title}
              initial={{ opacity: 0, y: 24 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-80px" }}
              transition={{ duration: 0.5, delay: i * 0.1, ease: "easeOut" }}
              className="rounded-2xl border border-neutral-200 bg-white p-8 shadow-sm"
            >
              <pillar.icon className="h-8 w-8 text-neutral-900" strokeWidth={1.5} />
              <h3 className="mt-4 text-xl font-semibold text-neutral-900">
                {pillar.title}
              </h3>
              <p className="mt-2 text-neutral-600">{pillar.description}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
