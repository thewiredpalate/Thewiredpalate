"use client";

import { useRef } from "react";
import Image from "next/image";
import Link from "next/link";
import { motion, useScroll, useTransform } from "framer-motion";

const pillars = [
  {
    eyebrow: "Food",
    swatchClass: "bg-palate-food",
    headline: "What's worth the trip",
    copy: "Restaurant reviews, tasting notes, and dishes worth crossing town for — written the way you'd tell a friend about them.",
    linkLabel: "Read the food stories",
    image: "/images/pillar-food.jpg",
    alt: "Fork lifting a bite of pasta with cherry tomatoes and basil",
  },
  {
    eyebrow: "Lifestyle",
    swatchClass: "bg-palate-lifestyle",
    headline: "The stuff between headlines",
    copy: "Routines, spaces, and small rituals that shape how a day actually feels — quiet mornings, slow work, better habits.",
    linkLabel: "Read the lifestyle stories",
    image: "/images/pillar-lifestyle.jpg",
    alt: "Laptop, tea, and magazines during a slow morning at home",
  },
  {
    eyebrow: "Technology",
    swatchClass: "bg-palate-tech",
    headline: "What we're building",
    copy: "Dev projects, tools, and the occasional rant about whatever's reshaping how we build and work right now.",
    linkLabel: "Read the tech notes",
    image: "/images/pillar-tech.jpg",
    alt: "Hands typing on a laptop with code on screen",
  },
];

function PillarItem({
  pillar,
  reversed,
}: {
  pillar: (typeof pillars)[number];
  reversed: boolean;
}) {
  const ref = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start end", "end start"],
  });
  const y = useTransform(scrollYProgress, [0, 1], [-24, 24]);

  return (
    <motion.div
      ref={ref}
      initial={{ opacity: 0, y: 32 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-100px" }}
      transition={{ duration: 0.6, ease: "easeOut" }}
      className={`grid grid-cols-1 items-center gap-8 sm:gap-12 lg:grid-cols-2 ${
        reversed ? "lg:[&>*:first-child]:order-2" : ""
      }`}
    >
      <div className="relative aspect-[4/3] w-full overflow-hidden rounded-sm">
        <motion.div style={{ y }} className="absolute inset-[-8%]">
          <Image
            src={pillar.image}
            alt={pillar.alt}
            fill
            sizes="(min-width: 1024px) 50vw, 100vw"
            className="object-cover"
          />
        </motion.div>
      </div>

      <div className={reversed ? "lg:pl-4" : "lg:pr-4"}>
        <div className="flex items-center gap-2">
          <span className={`h-2 w-2 rounded-full ${pillar.swatchClass}`} />
          <p className="text-xs font-semibold uppercase tracking-[0.3em] text-ink/50">
            {pillar.eyebrow}
          </p>
        </div>

        <h3 className="font-display mt-4 text-3xl font-medium tracking-tight text-ink sm:text-4xl">
          {pillar.headline}
        </h3>

        <p className="mt-4 max-w-md text-ink/70">{pillar.copy}</p>

        <Link
          href="/blog"
          className="mt-6 inline-block text-sm font-medium text-ink underline decoration-ink/30 underline-offset-4 transition hover:decoration-ink"
        >
          {pillar.linkLabel} →
        </Link>
      </div>
    </motion.div>
  );
}

export default function Pillars() {
  return (
    <section className="mx-auto max-w-6xl px-4 py-8 sm:px-8">
      <div className="flex flex-col gap-24 sm:gap-32">
        {pillars.map((pillar, i) => (
          <PillarItem key={pillar.eyebrow} pillar={pillar} reversed={i % 2 === 1} />
        ))}
      </div>
    </section>
  );
}
