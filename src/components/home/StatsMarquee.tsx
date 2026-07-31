"use client";

const tags = [
  "Restaurant Reviews",
  "Dev Projects",
  "Personal Stories",
  "Coffee Culture",
  "Tech Deep Dives",
  "Lifestyle Notes",
];

const loop = [...tags, ...tags];

export default function StatsMarquee() {
  return (
    <div className="overflow-hidden border-y border-neutral-200 bg-white py-5">
      <div className="marquee-track flex w-max gap-10">
        {loop.map((tag, i) => (
          <span
            key={`${tag}-${i}`}
            className="whitespace-nowrap text-sm font-medium uppercase tracking-[0.2em] text-neutral-400"
          >
            {tag}
            <span className="ml-10 text-neutral-300">&bull;</span>
          </span>
        ))}
      </div>

      <style jsx>{`
        @keyframes marquee {
          from {
            transform: translateX(0);
          }
          to {
            transform: translateX(-50%);
          }
        }
        .marquee-track {
          animation: marquee 28s linear infinite;
        }
      `}</style>
    </div>
  );
}
