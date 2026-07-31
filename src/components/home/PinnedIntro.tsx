"use client";

import { useRef } from "react";
import Image from "next/image";
import { motion, useScroll, useTransform } from "framer-motion";
import WordCycle from "./WordCycle";
import StickyNote from "./StickyNote";

export default function PinnedIntro() {
  const containerRef = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start start", "end end"],
  });

  const scale = useTransform(scrollYProgress, [0, 1], [1, 1.25]);

  const phase1Opacity = useTransform(scrollYProgress, [0, 0.12, 0.3, 0.38], [0, 1, 1, 0]);
  const phase1Y = useTransform(scrollYProgress, [0, 0.12, 0.3, 0.38], [16, 0, 0, -16]);

  const phase2Opacity = useTransform(scrollYProgress, [0.38, 0.48, 0.66, 0.74], [0, 1, 1, 0]);
  const phase2Y = useTransform(scrollYProgress, [0.38, 0.48, 0.66, 0.74], [16, 0, 0, -16]);

  const phase3Opacity = useTransform(scrollYProgress, [0.74, 0.85, 1], [0, 1, 1]);
  const phase3Y = useTransform(scrollYProgress, [0.74, 0.85, 1], [16, 0, 0]);

  return (
    <div ref={containerRef} className="relative h-[300vh]">
      <div className="sticky top-0 h-screen w-full overflow-hidden bg-ink">
        <motion.div style={{ scale }} className="absolute inset-0">
          <Image
            src="/images/intro-zoom.jpg"
            alt="A warm, plant-filled cafe and workspace"
            fill
            sizes="100vw"
            className="object-cover"
            priority={false}
          />
        </motion.div>
        <div className="pointer-events-none absolute inset-0 bg-gradient-to-b from-ink/70 via-ink/50 to-ink/80" />

        <div className="relative flex h-full items-center justify-center px-6 text-center">
          <motion.p
            style={{ opacity: phase1Opacity, y: phase1Y }}
            className="font-display absolute max-w-2xl text-3xl font-medium text-paper sm:text-5xl"
          >
            Everyone can start a blog.
          </motion.p>

          <motion.p
            style={{ opacity: phase2Opacity, y: phase2Y }}
            className="font-display absolute max-w-2xl text-3xl font-medium text-paper sm:text-5xl"
          >
            Almost no one makes you feel like you were actually there.
          </motion.p>

          <motion.div
            style={{ opacity: phase3Opacity, y: phase3Y }}
            className="absolute flex max-w-2xl flex-col items-center gap-8"
          >
            <p className="font-display text-2xl font-medium leading-snug text-paper sm:text-4xl">
              From{" "}
              <WordCycle
                words={[
                  "a 2am sisig run",
                  "a Manila blackout",
                  "a slow Sunday in Cebu",
                  "a coworking wifi test",
                ]}
                className="font-sans text-lg sm:text-2xl"
              />{" "}
              — that&apos;s the difference.
            </p>

            <div className="flex flex-wrap items-center justify-center gap-4">
              <StickyNote text="Food." rotate={-3} />
              <StickyNote text="Lifestyle." rotate={2} />
              <StickyNote text="Technology." rotate={-1.5} />
            </div>
          </motion.div>
        </div>
      </div>
    </div>
  );
}
