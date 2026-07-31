export const metadata = {
  title: "About",
  description:
    "The Wired Palate is a food, lifestyle, and technology blog based in the Philippines, covering Metro Manila's food scene, coworking spaces, and the tools shaping how Filipinos live and work.",
};

export default function About() {
  return (
    <div className="mx-auto max-w-3xl px-4 pb-10 pt-28">
      <p className="text-xs font-semibold uppercase tracking-[0.3em] text-ink/50">
        About
      </p>
      <h1 className="font-display mt-3 text-3xl font-medium tracking-tight text-ink sm:text-4xl">
        Food, lifestyle, and technology — from the Philippines
      </h1>

      <div className="mt-8 flex flex-col gap-5 text-ink/80">
        <p className="leading-relaxed">
          The Wired Palate is a blog about the places worth eating at, the
          routines worth keeping, and the tools worth using — written from
          Metro Manila and shaped by life in the Philippines.
        </p>
        <p className="leading-relaxed">
          It started from a simple observation: most food coverage in the
          Philippines is either tourist-facing or restaurant-PR, most
          lifestyle content is imported and doesn&apos;t account for Manila
          traffic or tropical heat, and most tech writing ignores what it
          actually means to build and work here — spotty internet, brownouts,
          and all.
        </p>
        <p className="leading-relaxed">
          So this is where those three things meet: honest restaurant and
          coffee shop guides, essays on building a slower life in a fast
          city, and practical notes on the tools, coworking spaces, and
          infrastructure that Filipino developers and remote workers actually
          rely on.
        </p>
        <p className="leading-relaxed">
          New posts go up as they&apos;re ready, not on a schedule. If
          you&apos;d rather they land in your inbox, the newsletter on the
          homepage is the easiest way to keep up.
        </p>
      </div>
    </div>
  );
}
