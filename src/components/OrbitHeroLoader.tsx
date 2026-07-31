"use client";

import dynamic from "next/dynamic";

const OrbitHero = dynamic(() => import("./OrbitHero"), {
  ssr: false,
  loading: () => <div className="h-screen w-full bg-black" />,
});

export default function OrbitHeroLoader() {
  return <OrbitHero />;
}
