"use client";

import { motion } from "framer-motion";

const swatches = [
  { label: "Food", className: "bg-palate-food" },
  { label: "Lifestyle", className: "bg-palate-lifestyle" },
  { label: "Technology", className: "bg-palate-tech" },
];

export default function PaletteStrip() {
  return (
    <div className="flex items-center justify-center gap-3 py-10">
      <motion.div
        initial={{ scaleX: 0 }}
        whileInView={{ scaleX: 1 }}
        viewport={{ once: true, margin: "-40px" }}
        transition={{ duration: 0.6, ease: "easeOut" }}
        className="h-px max-w-24 flex-1 origin-right bg-ink/15"
      />
      <div className="flex items-center gap-4">
        {swatches.map((swatch, i) => (
          <div key={swatch.label} className="group relative">
            <motion.span
              initial={{ scale: 0, opacity: 0 }}
              whileInView={{ scale: 1, opacity: 1 }}
              viewport={{ once: true, margin: "-40px" }}
              transition={{
                type: "spring",
                stiffness: 260,
                damping: 16,
                delay: 0.15 + i * 0.1,
              }}
              whileHover={{ scale: 1.4 }}
              className={`block h-3 w-3 rounded-full ${swatch.className}`}
            />
            <span className="pointer-events-none absolute left-1/2 top-full mt-2 -translate-x-1/2 whitespace-nowrap text-[10px] uppercase tracking-widest text-ink/50 opacity-0 transition-opacity group-hover:opacity-100">
              {swatch.label}
            </span>
          </div>
        ))}
      </div>
      <motion.div
        initial={{ scaleX: 0 }}
        whileInView={{ scaleX: 1 }}
        viewport={{ once: true, margin: "-40px" }}
        transition={{ duration: 0.6, ease: "easeOut" }}
        className="h-px max-w-24 flex-1 origin-left bg-ink/15"
      />
    </div>
  );
}
