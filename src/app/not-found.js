import Container from "@/components/Container";
import Button from "@/components/Button";
import Icon from "@/components/Icon";

export const metadata = {
  title: "Página não encontrada",
  robots: { index: false, follow: false },
};

export default function NotFound() {
  return (
    <section className="flex min-h-[70vh] items-center justify-center bg-white py-24">
      <Container className="flex flex-col items-center gap-6 text-center">
        <span className="flex h-16 w-16 items-center justify-center rounded-2xl bg-ink-950 text-white">
          <Icon name="Layers" className="h-7 w-7" />
        </span>
        <h1 className="text-3xl font-semibold tracking-tight text-ink-950 sm:text-4xl">
          Página não encontrada
        </h1>
        <p className="max-w-md text-balance text-base leading-relaxed text-ink-600">
          A página que você procura não existe ou foi movida. Volte para a página inicial ou
          confira nossas funcionalidades e preços.
        </p>
        <div className="flex flex-col gap-3 sm:flex-row">
          <Button href="/">Voltar para o início</Button>
          <Button href="/funcionalidades" variant="outline">
            Ver funcionalidades
          </Button>
        </div>
      </Container>
    </section>
  );
}
