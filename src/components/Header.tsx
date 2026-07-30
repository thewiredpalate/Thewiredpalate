import Link from "next/link";

export default function Header() {
  return (
    <header className="border-b border-neutral-200">
      <div className="mx-auto flex max-w-3xl items-center justify-between px-4 py-6">
        <Link href="/" className="text-lg font-semibold tracking-tight">
          The Wired Palate
        </Link>
        <nav className="flex gap-6 text-sm text-neutral-600">
          <Link href="/" className="hover:text-neutral-900">
            Home
          </Link>
          <Link href="/blog" className="hover:text-neutral-900">
            Blog
          </Link>
          <Link href="/about" className="hover:text-neutral-900">
            About
          </Link>
        </nav>
      </div>
    </header>
  );
}
