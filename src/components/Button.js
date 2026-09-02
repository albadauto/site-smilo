import Link from "next/link";
import Icon from "./Icon";

const base =
  "inline-flex items-center justify-center gap-2 rounded-full px-6 py-3 text-sm font-semibold transition-all duration-200 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-ink-900 disabled:opacity-50 disabled:pointer-events-none";

const variants = {
  primary:
    "bg-ink-950 text-white hover:bg-ink-800 shadow-[0_1px_0_rgba(255,255,255,0.08)_inset] active:scale-[0.98]",
  inverse:
    "bg-white text-ink-950 hover:bg-ink-100 active:scale-[0.98]",
  outline:
    "border border-ink-300 text-ink-900 hover:border-ink-900 hover:bg-ink-50 active:scale-[0.98]",
  outlineInverse:
    "border border-white/30 text-white hover:bg-white/10 active:scale-[0.98]",
  ghost: "text-ink-700 hover:text-ink-950 hover:bg-ink-100",
};

export default function Button({
  href,
  children,
  variant = "primary",
  className = "",
  icon,
  external = false,
  ...props
}) {
  const classes = `${base} ${variants[variant] || variants.primary} ${className}`;

  const content = (
    <>
      {children}
      {icon ? <Icon name={icon} className="h-4 w-4" /> : null}
    </>
  );

  if (href) {
    if (external || href.startsWith("http") || href.startsWith("mailto:") || href.startsWith("tel:")) {
      return (
        <a
          href={href}
          className={classes}
          target={external ? "_blank" : undefined}
          rel={external ? "noopener noreferrer" : undefined}
          {...props}
        >
          {content}
        </a>
      );
    }
    return (
      <Link href={href} className={classes} {...props}>
        {content}
      </Link>
    );
  }

  return (
    <button className={classes} {...props}>
      {content}
    </button>
  );
}
