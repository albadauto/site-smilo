"use client";

import { useEffect, useState } from "react";
import Link from "next/link";
import Image from "next/image";
import { usePathname } from "next/navigation";
import Icon from "./Icon";
import Button from "./Button";
import Container from "./Container";
import { navLinks, whatsappLink, defaultWhatsappMessage } from "@/lib/site";

export default function Navbar() {
  const [open, setOpen] = useState(false);
  const pathname = usePathname();
  const [lastPathname, setLastPathname] = useState(pathname);

  if (pathname !== lastPathname) {
    setLastPathname(pathname);
    setOpen(false);
  }

  useEffect(() => {
    document.body.style.overflow = open ? "hidden" : "";
    return () => {
      document.body.style.overflow = "";
    };
  }, [open]);

  return (
    <header className="sticky top-0 z-50 border-b border-ink-100 bg-white/85 backdrop-blur-md">
      <Container className="flex h-18 items-center justify-between py-3">
        <Link href="/" className="flex items-center gap-2" aria-label="Smilo — página inicial">
          <Image
            src="/images/brand/logo-full.png"
            alt="Smilo"
            width={140}
            height={51}
            priority
            className="h-8 w-auto"
          />
        </Link>

        <nav className="hidden items-center gap-1 lg:flex" aria-label="Navegação principal">
          {navLinks.map((link) => {
            const active = pathname === link.href;
            return (
              <Link
                key={link.href}
                href={link.href}
                className={`rounded-full px-4 py-2 text-sm font-medium transition-colors ${
                  active
                    ? "bg-ink-950 text-white"
                    : "text-ink-700 hover:bg-ink-100 hover:text-ink-950"
                }`}
              >
                {link.label}
              </Link>
            );
          })}
        </nav>

        <div className="hidden items-center gap-3 lg:flex">
          <Button href="https://app.smilocrm.com.br/" className="!px-4 !py-2.5 text-sm" target="_blank">
           Ver Planos
          </Button>
          <Button
            href="https://app.smilocrm.com.br/login"
          external
          variant="outline"
          className="!px-4 !py-2.5 text-sm"
           icon="LogIn" target="_blank">
            Acessar
          </Button>
          
        </div>

        <button
          type="button"
          onClick={() => setOpen((v) => !v)}
          className="inline-flex h-10 w-10 items-center justify-center rounded-full border border-ink-200 text-ink-900 lg:hidden"
          aria-expanded={open}
          aria-label={open ? "Fechar menu" : "Abrir menu"}
        >
          <Icon name={open ? "X" : "Menu"} className="h-5 w-5" />
        </button>
      </Container>

      {open ? (
        <div className="border-t border-ink-100 bg-white lg:hidden">
          <Container className="flex flex-col gap-1 py-4">
            {navLinks.map((link) => (
              <Link
                key={link.href}
                href={link.href}
                className="rounded-xl px-4 py-3 text-base font-medium text-ink-800 hover:bg-ink-50"
              >
                {link.label}
              </Link>
            ))}
           <div className="hidden items-center gap-3 lg:flex">
          <Button href="https://app.smilocrm.com.br/" className="!px-4 !py-2.5 text-sm" target="_blank">
           Ver Planos
          </Button>
          <Button
            href="https://app.smilocrm.com.br/login"
          external
          variant="outline"
          className="!px-4 !py-2.5 text-sm"
           icon="LogIn" target="_blank">
            Acessar
          </Button>
          
        </div>
          </Container>
        </div>
      ) : null}
    </header>
  );
}
