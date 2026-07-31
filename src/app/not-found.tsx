import Link from "next/link";
import { Home, Compass } from "lucide-react";

export default function NotFound() {
  return (
    <div className="relative flex min-h-[70vh] w-full flex-col items-center justify-center overflow-hidden px-4 text-center">
      <p className="bg-gradient-to-b from-neutral-900 to-neutral-300 bg-clip-text text-9xl font-extrabold text-transparent">
        404
      </p>
      <p className="mt-4 max-w-sm text-neutral-500">
        The page you&apos;re looking for might have been moved or
        doesn&apos;t exist.
      </p>

      <div className="mt-8 flex gap-3">
        <Link
          href="/"
          className="inline-flex items-center gap-2 rounded-full bg-neutral-900 px-5 py-2.5 text-sm font-semibold text-white transition hover:bg-neutral-700"
        >
          <Home className="h-4 w-4" strokeWidth={1.75} />
          Go Home
        </Link>

        <Link
          href="/blog"
          className="inline-flex items-center gap-2 rounded-full border border-neutral-300 px-5 py-2.5 text-sm font-semibold text-neutral-900 transition hover:border-neutral-500"
        >
          <Compass className="h-4 w-4" strokeWidth={1.75} />
          Explore
        </Link>
      </div>
    </div>
  );
}
