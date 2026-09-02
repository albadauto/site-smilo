export default function Eyebrow({ children, tone = "light" }) {
  const toneClasses =
    tone === "dark"
      ? "border-white/15 bg-white/5 text-white/70"
      : "border-ink-200 bg-ink-50 text-ink-600";
  return (
    <span
      className={`inline-flex items-center gap-2 rounded-full border px-3.5 py-1.5 text-xs font-semibold uppercase tracking-wide ${toneClasses}`}
    >
      {children}
    </span>
  );
}
