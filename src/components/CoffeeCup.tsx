"use client";

import { useState, useRef } from "react";

type Droplet = {
  id: number;
  left: number;
  delay: number;
};

let dropletId = 0;

export default function CoffeeCup() {
  const [hovered, setHovered] = useState(false);
  const [droplets, setDroplets] = useState<Droplet[]>([]);
  const timeoutsRef = useRef<ReturnType<typeof setTimeout>[]>([]);

  function handleEnter() {
    setHovered(true);

    const count = 3 + Math.floor(Math.random() * 2);
    const newDroplets: Droplet[] = Array.from({ length: count }, () => ({
      id: dropletId++,
      left: 38 + Math.random() * 24,
      delay: Math.random() * 0.15,
    }));
    setDroplets(newDroplets);

    const t = setTimeout(() => {
      setDroplets([]);
    }, 900);
    timeoutsRef.current.push(t);
  }

  function handleLeave() {
    setHovered(false);
  }

  return (
    <div
      className="relative flex flex-col items-center py-6"
      onMouseEnter={handleEnter}
      onMouseLeave={handleLeave}
    >
      <div className="pointer-events-none absolute -top-4 left-1/2 h-40 w-40 -translate-x-1/2 rounded-full bg-purple-500/30 blur-3xl" />

      <div className="relative flex h-16 items-end justify-center gap-2">
        <span className="steam-wisp steam-wisp-1" />
        <span className="steam-wisp steam-wisp-2" />
        <span className="steam-wisp steam-wisp-3" />
      </div>

      <div
        className={`relative ${hovered ? "animate-cup-wobble" : "animate-cup-float"}`}
      >
        {droplets.map((d) => (
          <span
            key={d.id}
            className="droplet"
            style={{
              left: `${d.left}%`,
              animationDelay: `${d.delay}s`,
            }}
          />
        ))}

        <svg
          width="140"
          height="120"
          viewBox="0 0 140 120"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
          className="drop-shadow-[0_10px_25px_rgba(168,85,247,0.35)]"
        >
          <ellipse cx="60" cy="108" rx="52" ry="8" fill="#3a2a55" opacity="0.6" />

          <path
            d="M18 34h68a4 4 0 0 1 4 4v26c0 16.6-16.8 30-38 30S14 80.6 14 64V38a4 4 0 0 1 4-4Z"
            fill="#f4ede4"
          />
          <path
            d="M18 34h68a4 4 0 0 1 4 4v26c0 16.6-16.8 30-38 30S14 80.6 14 64V38a4 4 0 0 1 4-4Z"
            fill="url(#cupShade)"
            fillOpacity="0.5"
          />

          <ellipse cx="52" cy="38" rx="38" ry="7" fill="#3b2417" />
          <ellipse cx="52" cy="37" rx="34" ry="5.5" fill="#6b4226" />

          <path
            d="M90 44c11 0 20 7.5 20 17s-9 17-20 17"
            stroke="#f4ede4"
            strokeWidth="7"
            strokeLinecap="round"
            fill="none"
          />

          <defs>
            <linearGradient id="cupShade" x1="14" y1="34" x2="90" y2="94" gradientUnits="userSpaceOnUse">
              <stop stopColor="#c9a7e8" />
              <stop offset="1" stopColor="#f4ede4" stopOpacity="0" />
            </linearGradient>
          </defs>
        </svg>
      </div>

      <style jsx>{`
        @keyframes cup-float {
          0%,
          100% {
            transform: translateY(0);
          }
          50% {
            transform: translateY(-6px);
          }
        }
        @keyframes cup-wobble {
          0% {
            transform: rotate(0deg);
          }
          20% {
            transform: rotate(-6deg);
          }
          40% {
            transform: rotate(5deg);
          }
          60% {
            transform: rotate(-3deg);
          }
          80% {
            transform: rotate(2deg);
          }
          100% {
            transform: rotate(0deg);
          }
        }
        :global(.animate-cup-float) {
          animation: cup-float 3.5s ease-in-out infinite;
        }
        :global(.animate-cup-wobble) {
          animation: cup-wobble 0.5s ease-in-out;
          transform-origin: 50% 100%;
        }

        @keyframes droplet-arc {
          0% {
            opacity: 1;
            transform: translate(0, 0) scale(1);
          }
          70% {
            opacity: 1;
          }
          100% {
            opacity: 0;
            transform: translate(var(--dx, 12px), -30px) scale(0.4);
          }
        }
        :global(.droplet) {
          position: absolute;
          top: 34px;
          width: 6px;
          height: 6px;
          border-radius: 9999px;
          background: #6b4226;
          animation: droplet-arc 0.7s ease-out forwards;
        }
        :global(.droplet:nth-child(odd)) {
          --dx: 16px;
        }
        :global(.droplet:nth-child(even)) {
          --dx: -14px;
        }

        @keyframes steam-rise {
          0% {
            opacity: 0;
            transform: translateY(0) scaleX(1);
          }
          30% {
            opacity: 0.6;
          }
          100% {
            opacity: 0;
            transform: translateY(-28px) scaleX(1.4);
          }
        }
        :global(.steam-wisp) {
          width: 3px;
          height: 20px;
          border-radius: 9999px;
          background: rgba(255, 255, 255, 0.5);
          animation: steam-rise 2.6s ease-in infinite;
        }
        :global(.steam-wisp-1) {
          animation-delay: 0s;
        }
        :global(.steam-wisp-2) {
          animation-delay: 0.7s;
        }
        :global(.steam-wisp-3) {
          animation-delay: 1.4s;
        }
      `}</style>
    </div>
  );
}
