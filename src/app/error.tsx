"use client";

import { useEffect } from "react";
import { Home, RotateCw } from "lucide-react";

export default function Error({
  error,
  reset,
}: {
  error: Error & { digest?: string };
  reset: () => void;
}) {
  useEffect(() => {
    console.error(error);
  }, [error]);

  return (
    <div className="relative flex min-h-[70vh] w-full flex-col items-center justify-center overflow-hidden px-4 text-center">
      <p className="bg-gradient-to-b from-neutral-900 to-neutral-300 bg-clip-text text-9xl font-extrabold text-transparent">
        Oops
      </p>
      <p className="mt-4 max-w-sm text-neutral-500">
        Something went wrong on our end. Try again, or head back home.
      </p>

      <div className="mt-8 flex gap-3">
        <button
          onClick={() => reset()}
          className="inline-flex items-center gap-2 rounded-full bg-neutral-900 px-5 py-2.5 text-sm font-semibold text-white transition hover:bg-neutral-700"
        >
          <RotateCw className="h-4 w-4" strokeWidth={1.75} />
          Try Again
        </button>

        <a
          href="/"
          className="inline-flex items-center gap-2 rounded-full border border-neutral-300 px-5 py-2.5 text-sm font-semibold text-neutral-900 transition hover:border-neutral-500"
        >
          <Home className="h-4 w-4" strokeWidth={1.75} />
          Go Home
        </a>
      </div>
    </div>
  );
}
