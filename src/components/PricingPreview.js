import Container from "./Container";
import SectionHeading from "./SectionHeading";
import Button from "./Button";
import PricingCard from "./PricingCard";
import { pricingPlans } from "@/lib/content";

export default function PricingPreview() {
  return (
    <section className="bg-ink-50/60 py-20 sm:py-28">
      <Container>
        <SectionHeading
          eyebrow="Preços"
          title="Um plano para cada tamanho de clínica"
          description="Sem taxa de implantação escondida e sem limite de pacientes cadastrados. Escolha o plano pelo tamanho da sua equipe e evolua quando precisar."
        />

        <div className="mt-14 grid grid-cols-1 gap-6 md:grid-cols-2 max-w-3xl mx-auto">
          {pricingPlans.map((plan) => (
            <PricingCard key={plan.id} plan={plan} />
          ))}
        </div>

        <div className="mt-10 flex justify-center">
          <Button href="/precos" variant="outline" icon="ArrowRight">
            Comparar todos os recursos dos planos
          </Button>
        </div>
      </Container>
    </section>
  );
}
