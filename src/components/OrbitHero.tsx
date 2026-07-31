"use client";

import { Canvas } from "@react-three/fiber";
import { OrbitControls } from "@react-three/drei";
import { OrbitSphere } from "./OrbitSphere";

const orbitImages = [
  "https://images.pexels.com/photos/302899/pexels-photo-302899.jpeg?auto=compress&cs=tinysrgb&w=600",
  "https://images.pexels.com/photos/894695/pexels-photo-894695.jpeg?auto=compress&cs=tinysrgb&w=600",
  "https://images.pexels.com/photos/1058277/pexels-photo-1058277.jpeg?auto=compress&cs=tinysrgb&w=600",
  "https://images.pexels.com/photos/373948/pexels-photo-373948.jpeg?auto=compress&cs=tinysrgb&w=600",
  "https://images.pexels.com/photos/1600711/pexels-photo-1600711.jpeg?auto=compress&cs=tinysrgb&w=600",
  "https://images.pexels.com/photos/302902/pexels-photo-302902.jpeg?auto=compress&cs=tinysrgb&w=600",
  "https://images.pexels.com/photos/1855214/pexels-photo-1855214.jpeg?auto=compress&cs=tinysrgb&w=600",
  "https://images.pexels.com/photos/4050292/pexels-photo-4050292.jpeg?auto=compress&cs=tinysrgb&w=600",
  "https://images.pexels.com/photos/4050315/pexels-photo-4050315.jpeg?auto=compress&cs=tinysrgb&w=600",
  "https://images.pexels.com/photos/3184183/pexels-photo-3184183.jpeg?auto=compress&cs=tinysrgb&w=600",
  "https://images.pexels.com/photos/1435904/pexels-photo-1435904.jpeg?auto=compress&cs=tinysrgb&w=600",
  "https://images.pexels.com/photos/574071/pexels-photo-574071.jpeg?auto=compress&cs=tinysrgb&w=600",
];

export default function OrbitHero() {
  return (
    <section className="relative h-screen w-full overflow-hidden bg-black">
      <div className="pointer-events-none absolute inset-x-0 top-24 z-10 px-6">
        <p className="text-center text-xs font-medium uppercase tracking-[0.4em] text-neutral-500">
          Food &middot; Lifestyle &middot; Technology
        </p>
        <h1 className="font-hero mx-auto mt-4 max-w-4xl text-center text-6xl uppercase leading-[0.9] tracking-wide text-white sm:text-7xl md:text-8xl">
          The Wired
          <br />
          <span className="bg-gradient-to-r from-rose-300 via-red-400 to-rose-500 bg-clip-text text-transparent">
            Palate
          </span>
        </h1>
      </div>

      <div className="pointer-events-none absolute inset-x-0 bottom-14 z-10 flex justify-center px-6">
        <p className="max-w-md text-center text-sm text-neutral-400">
          Where culinary craft meets digital culture — dispatches on what we
          taste, how we live, and the tech reshaping both.
        </p>
      </div>

      <Canvas camera={{ position: [-10, 1.5, 10], fov: 50 }}>
        <ambientLight intensity={0.5} />
        <pointLight position={[10, 10, 10]} intensity={1} />
        <OrbitSphere images={orbitImages} />
        <OrbitControls enablePan={false} enableZoom={false} enableRotate autoRotate={false} />
      </Canvas>
    </section>
  );
}
