"use client";

import { useRef } from "react";
import Image from "next/image";
import Link from "next/link";
import { motion, useScroll, useTransform, type Variants } from "framer-motion";

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

const textContainer: Variants = {
  hidden: {},
  visible: { transition: { staggerChildren: 0.09, delayChildren: 0.15 } },
};

const textItem: Variants = {
  hidden: { opacity: 0, y: 18 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.5, ease: "easeOut" },
  },
};

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
  const y = useTransform(scrollYProgress, [0, 1], [-32, 32]);

  return (
    <div
      ref={ref}
      className={`grid grid-cols-1 items-center gap-8 sm:gap-12 lg:grid-cols-2 ${
        reversed ? "lg:[&>*:first-child]:order-2" : ""
      }`}
    >
      <motion.div
        initial={{ clipPath: "inset(0 100% 0 0)" }}
        whileInView={{ clipPath: "inset(0 0% 0 0)" }}
        viewport={{ once: true, margin: "-100px" }}
        transition={{ duration: 0.8, ease: [0.65, 0, 0.35, 1] }}
        className="group relative aspect-[4/3] w-full overflow-hidden rounded-sm"
      >
        <motion.div
          style={{ y }}
          className="absolute inset-[-8%] transition-transform duration-500 ease-out group-hover:scale-105"
        >
          <Image
            src={pillar.image}
            alt={pillar.alt}
            fill
            sizes="(min-width: 1024px) 50vw, 100vw"
            className="object-cover"
          />
        </motion.div>
      </motion.div>

      <motion.div
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, margin: "-100px" }}
        variants={textContainer}
        className={reversed ? "lg:pl-4" : "lg:pr-4"}
      >
        <motion.div variants={textItem} className="flex items-center gap-2">
          <span className={`h-2 w-2 rounded-full ${pillar.swatchClass}`} />
          <p className="text-xs font-semibold uppercase tracking-[0.3em] text-ink/50">
            {pillar.eyebrow}
          </p>
        </motion.div>

        <motion.h3
          variants={textItem}
          className="font-display mt-4 text-3xl font-medium tracking-tight text-ink sm:text-4xl"
        >
          {pillar.headline}
        </motion.h3>

        <motion.p variants={textItem} className="mt-4 max-w-md text-ink/70">
          {pillar.copy}
        </motion.p>

        <motion.div variants={textItem}>
          <Link
            href="/blog"
            className="group/link mt-6 inline-flex items-center gap-1 text-sm font-medium text-ink decoration-ink/30 underline-offset-4 hover:underline hover:decoration-ink"
          >
            {pillar.linkLabel}
            <span className="transition-transform group-hover/link:translate-x-1">
              →
            </span>
          </Link>
        </motion.div>
      </motion.div>
    </div>
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
