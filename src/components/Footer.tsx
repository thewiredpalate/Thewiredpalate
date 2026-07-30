export default function Footer() {
  return (
    <footer className="mt-16 border-t border-neutral-200">
      <div className="mx-auto max-w-3xl px-4 py-8 text-sm text-neutral-500">
        © {new Date().getFullYear()} The Wired Palate. All rights reserved.
      </div>
    </footer>
  );
}
