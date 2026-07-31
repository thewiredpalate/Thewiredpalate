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
      <div className="h-px flex-1 max-w-24 bg-ink/15" />
      <div className="flex items-center gap-4">
        {swatches.map((swatch) => (
          <div key={swatch.label} className="group relative">
            <motion.span
              className={`block h-3 w-3 rounded-full ${swatch.className}`}
              whileHover={{ scale: 1.4 }}
              transition={{ type: "spring", stiffness: 300, damping: 15 }}
            />
            <span className="pointer-events-none absolute left-1/2 top-full mt-2 -translate-x-1/2 whitespace-nowrap text-[10px] uppercase tracking-widest text-ink/50 opacity-0 transition-opacity group-hover:opacity-100">
              {swatch.label}
            </span>
          </div>
        ))}
      </div>
      <div className="h-px flex-1 max-w-24 bg-ink/15" />
    </div>
  );
}
