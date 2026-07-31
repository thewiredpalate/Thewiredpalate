export default function StickyNote({
  text,
  rotate = -2,
  className = "",
}: {
  text: string;
  rotate?: number;
  className?: string;
}) {
  return (
    <span
      style={{ transform: `rotate(${rotate}deg)` }}
      className={`inline-block bg-paper px-4 py-2 font-display text-lg text-ink shadow-[0_6px_16px_rgba(20,17,15,0.25)] ${className}`}
    >
      {text}
    </span>
  );
}
