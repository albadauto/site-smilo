import Eyebrow from "./Eyebrow";

export default function SectionHeading({
  eyebrow,
  title,
  description,
  align = "center",
  tone = "light",
  className = "",
}) {
  const alignClasses = align === "left" ? "items-start text-left" : "items-center text-center";
  const descTone = tone === "dark" ? "text-white/65" : "text-ink-600";
  const titleTone = tone === "dark" ? "text-white" : "text-ink-950";

  return (
    <div className={`flex flex-col gap-4 ${alignClasses} ${className}`}>
      {eyebrow ? <Eyebrow tone={tone}>{eyebrow}</Eyebrow> : null}
      <h2 className={`text-balance text-3xl font-semibold tracking-tight sm:text-4xl ${titleTone}`}>
        {title}
      </h2>
      {description ? (
        <p className={`max-w-2xl text-balance text-base leading-relaxed sm:text-lg ${descTone}`}>
          {description}
        </p>
      ) : null}
    </div>
  );
}
