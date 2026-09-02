import Link from "next/link";
import Icon from "./Icon";

export default function FeatureCard({ icon, name, short, slug, compact = false }) {
  const Wrapper = slug ? Link : "div";
  const wrapperProps = slug ? { href: `/funcionalidades#${slug}` } : {};

  return (
    <Wrapper
      {...wrapperProps}
      className={`group flex h-full flex-col gap-4 rounded-2xl border border-ink-100 bg-white p-6 transition-all duration-200 hover:-translate-y-1 hover:border-ink-900 hover:shadow-[0_20px_40px_-24px_rgba(0,0,0,0.4)] ${
        compact ? "" : "sm:p-7"
      }`}
    >
      <div className="flex h-11 w-11 items-center justify-center rounded-xl bg-ink-950 text-white transition-colors group-hover:bg-ink-800">
        <Icon name={icon} className="h-5 w-5" />
      </div>
      <div className="flex flex-1 flex-col gap-1.5">
        <h3 className="text-base font-semibold text-ink-950">{name}</h3>
        <p className="text-sm leading-relaxed text-ink-600">{short}</p>
      </div>
      {slug ? (
        <span className="inline-flex items-center gap-1.5 text-sm font-medium text-ink-900">
          Saiba mais
          <Icon
            name="ArrowRight"
            className="h-3.5 w-3.5 transition-transform group-hover:translate-x-0.5"
          />
        </span>
      ) : null}
    </Wrapper>
  );
}
