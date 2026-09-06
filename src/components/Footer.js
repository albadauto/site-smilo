import Link from "next/link";
import Image from "next/image";
import Icon from "./Icon";
import Container from "./Container";
import { navLinks, siteConfig } from "@/lib/site";

const productLinks = [
  { href: "/funcionalidades#dashboard", label: "Dashboard" },
  { href: "/funcionalidades#pacientes", label: "Pacientes" },
  { href: "/funcionalidades#prontuario", label: "Prontuário clínico" },
  { href: "/funcionalidades#agenda", label: "Agenda" },
  { href: "/funcionalidades#cobrancas", label: "Cobranças" },
];

export default function Footer() {
  return (
    <footer className="border-t border-white/10 bg-ink-950 text-white">
      <Container className="py-16">
        <div className="grid grid-cols-1 gap-12 lg:grid-cols-[1.4fr_1fr_1fr_1fr]">
          <div>
            <Image
              src="/images/brand/logo-full-white.png"
              alt="Smilo"
              width={140}
              height={51}
              className="h-8 w-auto"
            />
            <p className="mt-4 max-w-xs text-sm leading-relaxed text-white/60">
              {siteConfig.description}
            </p>
            <p className="mt-6 text-xs uppercase tracking-wide text-white/40">
              Um produto {siteConfig.legalName}
            </p>
          </div>

          <div>
            <h2 className="text-sm font-semibold text-white">Produto</h2>
            <ul className="mt-4 space-y-3 text-sm text-white/60">
              {productLinks.map((link) => (
                <li key={link.href}>
                  <Link href={link.href} className="transition-colors hover:text-white">
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h2 className="text-sm font-semibold text-white">Empresa</h2>
            <ul className="mt-4 space-y-3 text-sm text-white/60">
              {navLinks.map((link) => (
                <li key={link.href}>
                  <Link href={link.href} className="transition-colors hover:text-white">
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h2 className="text-sm font-semibold text-white">Contato</h2>
            <ul className="mt-4 space-y-3 text-sm text-white/60">
              <li className="flex items-center gap-2">
                <Icon name="Mail" className="h-4 w-4 shrink-0 text-white/40" />
                <a href={`mailto:${siteConfig.email}`} className="transition-colors hover:text-white">
                  {siteConfig.email}
                </a>
              </li>
              <li className="flex items-center gap-2">
                <Icon name="Phone" className="h-4 w-4 shrink-0 text-white/40" />
                <a href={`tel:${siteConfig.phoneE164}`} className="transition-colors hover:text-white">
                  {siteConfig.phone}
                </a>
              </li>
              <li className="flex items-start gap-2">
                <Icon name="Clock" className="h-4 w-4 shrink-0 translate-y-0.5 text-white/40" />
                <span>{siteConfig.supportHours}</span>
              </li>
            </ul>
          </div>
        </div>

        <div className="mt-14 flex flex-col items-start justify-between gap-4 border-t border-white/10 pt-8 text-xs text-white/40 sm:flex-row sm:items-center">
          <p>
            © {new Date().getFullYear()} {siteConfig.name} · {siteConfig.legalName}. Todos os
            direitos reservados.
          </p>
          <p>CNPJ da {siteConfig.legalName} · Feito para clínicas odontológicas em todo o Brasil</p>
        </div>
      </Container>
    </footer>
  );
}
