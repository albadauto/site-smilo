import Container from "./Container";
import Eyebrow from "./Eyebrow";

export default function PageHero({ eyebrow, title, description }) {
  return (
    <section className="relative overflow-hidden bg-ink-950 py-20 text-white sm:py-24">
      <div className="bg-grid-dark absolute inset-0 [mask-image:radial-gradient(ellipse_at_top,black_20%,transparent_75%)]" />
      <Container className="relative flex flex-col items-center gap-5 text-center">
        {eyebrow ? <Eyebrow tone="dark">{eyebrow}</Eyebrow> : null}
        <h1 className="max-w-3xl text-balance text-4xl font-semibold tracking-tight sm:text-5xl">
          {title}
        </h1>
        {description ? (
          <p className="max-w-2xl text-balance text-base leading-relaxed text-white/65 sm:text-lg">
            {description}
          </p>
        ) : null}
      </Container>
    </section>
  );
}
