import Container from "./Container";

function GoogleWordmark() {
  return (
    <span
      className="text-3xl font-medium tracking-[-0.08em] sm:text-4xl"
      aria-label="Google"
    >
      <span className="text-[#4285f4]">G</span>
      <span className="text-[#ea4335]">o</span>
      <span className="text-[#fbbc05]">o</span>
      <span className="text-[#4285f4]">g</span>
      <span className="text-[#34a853]">l</span>
      <span className="text-[#ea4335]">e</span>
    </span>
  );
}

function SatisfactionMark() {
  const faces = [
    { color: "bg-[#ff3f6c]", mouth: "M8 17c1-1.5 2.3-2 4-2s3 .5 4 2" },
    { color: "bg-[#ffbd16]", mouth: "M8 16h8" },
    { color: "bg-[#08c995]", mouth: "M8 15c1 1.5 2.3 2 4 2s3-.5 4-2" },
  ];

  return (
    <div className="flex items-center gap-1.5" aria-label="Indicador de satisfação">
      {faces.map((face) => (
        <span
          key={face.color}
          className={`flex h-8 w-8 items-center justify-center ${face.color}`}
          aria-hidden="true"
        >
          <svg viewBox="0 0 24 24" className="h-6 w-6 text-white" fill="none">
            <circle cx="8.5" cy="10" r="1" fill="currentColor" />
            <circle cx="15.5" cy="10" r="1" fill="currentColor" />
            <path d={face.mouth} stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" />
          </svg>
        </span>
      ))}
    </div>
  );
}

function Stars({ partial = false }) {
  return (
    <div className="flex items-center gap-1" aria-label={partial ? "4,8 de 5 estrelas" : "5 de 5 estrelas"}>
      {[0, 1, 2, 3, 4].map((star) => (
        <span
          key={star}
          className={`text-3xl leading-none sm:text-4xl ${partial && star === 4 ? "social-proof-partial-star" : "text-[#ffc928]"}`}
          aria-hidden="true"
        >
          ★
        </span>
      ))}
    </div>
  );
}

export default function SocialProofSection() {
  return (
    <section className="border-b border-ink-100 bg-white py-14 sm:py-18" aria-labelledby="social-proof-title">
      <Container>
        <div className="mx-auto max-w-3xl text-center">
          <h2
            id="social-proof-title"
            className="text-balance text-3xl font-medium tracking-tight text-ink-950 sm:text-4xl"
          >
            Quem usa, <strong className="font-bold">recomenda</strong>
          </h2>
          <p className="mt-3 text-balance text-base text-ink-600 sm:text-lg">
            Satisfação real, comprovada por avaliações públicas.
          </p>
        </div>

        <div className="mx-auto mt-10 grid max-w-4xl gap-5 md:grid-cols-2">
          <article className="flex min-h-64 flex-col justify-between rounded-[2.75rem] border border-[#d4e5f5] bg-[#f7fbff] p-8 shadow-[0_16px_28px_-22px_rgba(31,89,132,0.45)] sm:p-10">
            <GoogleWordmark />
            <div className="mt-8 flex flex-wrap items-center justify-between gap-4">
              <p className="text-5xl font-semibold tracking-tight text-[#2f3c51]">
                5<span className="text-ink-400">/5</span>
              </p>
              <Stars />
            </div>
            <p className="mt-7 text-xl font-medium text-[#526078] sm:text-2xl">
              Avaliações no Google
            </p>
          </article>

          <article className="flex min-h-64 flex-col justify-between rounded-[2.75rem] border border-[#d4e5f5] bg-[#f7fbff] p-8 shadow-[0_16px_28px_-22px_rgba(31,89,132,0.45)] sm:p-10">
            <SatisfactionMark />
            <div className="mt-8 flex flex-wrap items-center justify-between gap-4">
              <p className="text-5xl font-semibold tracking-tight text-[#2f3c51]">
                9,8<span className="text-ink-400">/10</span>
              </p>
              <Stars partial />
            </div>
            <p className="mt-7 text-xl font-medium text-[#526078] sm:text-2xl">
              Grau de satisfação
            </p>
          </article>
        </div>
      </Container>
    </section>
  );
}
