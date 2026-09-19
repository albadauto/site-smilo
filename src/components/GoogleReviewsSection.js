import Container from "./Container";
import Icon from "./Icon";

const reviews = [
  {
    author: "Santiago Rodrigues",
    text: "Ótimo trabalho! O pessoal foi super atencioso desde o início, entenderam bem o que eu precisava e entregaram tudo de forma rápida e bem feita. Recomendo muito o trabalho deles!",
  },
  {
    author: "Beatriz Araujo",
    text: "Gentee, depois que comecei a usar a Smilo, meus pacientes nunca mais ficaram perdido no WhatsApp, plataforma muito fácil de usar e tem o fluxo perfeito para dentista, cadastro de pacientes, financeiro, agenda etc. Estou amando 😍",
  },
  {
    author: "Renata Santos",
    text: "Ótimo trabalho! Desde o primeiro contato, a equipe se mostrou muito atenciosa, entendeu exatamente o que eu precisava e conduziu tudo com clareza. A entrega foi rápida e o resultado ficou muito bem feito, superando minhas expectativas. Recomendo o trabalho deles sem hesitar!",
  },
  {
    author: "Janio Macedo",
    text: "O suporte que a Smilo oferece é muito bom! Os analistas acompanham de perto cada detalhe! Irei recomendar para outras pessoas!",
  },
  {
    author: "Maria Alice",
    text: "Maravilhoso suporte! Maravilhoso sistema! Super recomendo!",
  },
  {
    author: "Raily Rodrigues",
    text: "Usei o sistemae recomendo.",
  },
];

function Stars() {
  return (
    <div className="flex gap-0.5 text-[#ffc928]" aria-label="5 de 5 estrelas">
      {[0, 1, 2, 3, 4].map((star) => (
        <span key={star} className="text-2xl leading-none" aria-hidden="true">
          ★
        </span>
      ))}
    </div>
  );
}

export default function GoogleReviewsSection() {
  return (
    <section className="border-y border-ink-100 bg-white py-20 sm:py-28" aria-labelledby="google-reviews-title">
      <Container>
        <div className="mx-auto max-w-3xl text-center">
          <span className="text-sm font-semibold uppercase tracking-[0.16em] text-blue-600">
            Avaliações no Google
          </span>
          <h2 id="google-reviews-title" className="mt-4 text-balance text-3xl font-semibold tracking-tight text-ink-950 sm:text-4xl">
            Quem usa o Smilo recomenda
          </h2>
          <p className="mt-4 text-balance text-base leading-relaxed text-ink-600 sm:text-lg">
            Experiências compartilhadas publicamente por clientes e usuários do Smilo.
          </p>
        </div>

        <div className="mt-12 grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {reviews.map((review) => (
            <article
              key={review.author}
              className="flex h-full flex-col rounded-[1.75rem] border border-ink-100 bg-white p-7 shadow-[0_18px_40px_-18px_rgba(15,23,42,0.28)]"
            >
              <h3 className="text-lg font-semibold text-[#2f3c51]">{review.author}</h3>
              <div className="mt-4">
                <Stars />
              </div>
              <p className="mt-5 text-base leading-relaxed text-[#526078]">{review.text}</p>
            </article>
          ))}
        </div>

        <div className="mt-10 flex justify-center">
          <a
            href="https://share.google/I8JNiiT87SejI78TH"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 rounded-full border border-ink-200 bg-white px-6 py-3 text-sm font-semibold text-ink-900 transition-colors hover:border-ink-950 hover:bg-ink-950 hover:text-white focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-ink-950"
          >
            Ver avaliações no Google
            <Icon name="ArrowRight" className="h-4 w-4" />
          </a>
        </div>
      </Container>
    </section>
  );
}
