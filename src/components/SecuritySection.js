import Image from "next/image";
import Container from "./Container";
import SectionHeading from "./SectionHeading";
import Icon from "./Icon";
import { securityHighlights } from "@/lib/content";

export default function SecuritySection() {
  return (
    <section className="bg-ink-950 py-20 text-white sm:py-28">
      <Container>
        <div className="grid grid-cols-1 items-center gap-14 lg:grid-cols-2 lg:gap-20">
          <div>
            <SectionHeading
              tone="dark"
              align="left"
              eyebrow="Segurança e controle"
              title="Dados sensíveis pedem acesso controlado — não planilhas soltas"
              description="Prontuários, comorbidades e informações financeiras dos pacientes ficam protegidos por login individual e permissões configuráveis por perfil de usuário."
            />
            <div className="mt-10 grid grid-cols-1 gap-6 sm:grid-cols-3 lg:grid-cols-1">
              {securityHighlights.map((item) => (
                <div key={item.title} className="flex items-start gap-4">
                  <span className="flex h-10 w-10 shrink-0 items-center justify-center rounded-xl bg-white/10">
                    <Icon name={item.icon} className="h-5 w-5" />
                  </span>
                  <div>
                    <h3 className="text-sm font-semibold text-white">{item.title}</h3>
                    <p className="mt-1 text-sm leading-relaxed text-white/60">{item.description}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>

          <div className="browser-frame border border-white/10">
            <div className="flex items-center gap-1.5 border-b border-white/10 bg-ink-900 px-4 py-3">
              <span className="h-2.5 w-2.5 rounded-full bg-white/20" />
              <span className="h-2.5 w-2.5 rounded-full bg-white/20" />
              <span className="h-2.5 w-2.5 rounded-full bg-white/20" />
            </div>
            <Image
              src="/images/screens/usuarios-lista2.png"
              alt="Administração de usuários e permissões no Smilo CRM"
              width={1440}
              height={900}
              className="w-full"
              sizes="(min-width: 1024px) 560px, 100vw"
            />
          </div>
        </div>
      </Container>
    </section>
  );
}
