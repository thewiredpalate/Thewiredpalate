import Link from "next/link";
import CoffeeCup from "./CoffeeCup";

export default function Hero() {
  return (
    <section className="bg-neutral-950 px-4 py-16 text-center text-white sm:px-8">
      <CoffeeCup />

      <p className="mt-2 text-xs font-medium uppercase tracking-[0.3em] text-neutral-400">
        Food &middot; Lifestyle &middot; Technology
      </p>

      <h1 className="mt-4 text-5xl font-bold tracking-tight sm:text-6xl">
        <span className="block">The Wired</span>
        <span className="block bg-gradient-to-r from-amber-300 via-orange-300 to-pink-300 bg-clip-text text-transparent">
          Palate
        </span>
      </h1>

      <p className="mx-auto mt-6 max-w-xl text-neutral-300">
        Where culinary craft meets digital culture. Thoughtful dispatches on
        what we taste, how we live, and the tech reshaping both.
      </p>

      <div className="mt-8 flex flex-wrap items-center justify-center gap-4">
        <Link
          href="/blog"
          className="rounded-full bg-gradient-to-r from-purple-500 to-pink-500 px-6 py-3 text-sm font-semibold text-white transition hover:opacity-90"
        >
          Start Reading →
        </Link>
        <Link
          href="/about"
          className="rounded-full border border-neutral-700 px-6 py-3 text-sm font-semibold text-neutral-200 transition hover:border-neutral-500"
        >
          About the site
        </Link>
      </div>
    </section>
  );
}
