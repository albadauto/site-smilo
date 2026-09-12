"use client";

import { useEffect, useRef, useState } from "react";
import Image from "next/image";
import Icon from "./Icon";

export default function InteractivePhone() {
  const phoneRef = useRef(null);
  const [started, setStarted] = useState(false);

  useEffect(() => {
    const observer = new IntersectionObserver(([entry]) => {
      if (entry.isIntersecting) {
        setStarted(true);
        observer.disconnect();
      }
    }, { threshold: 0.35 });
    if (phoneRef.current) observer.observe(phoneRef.current);
    return () => observer.disconnect();
  }, []);

  return (
    <div ref={phoneRef} data-started={started} className="phone-demo relative isolate rounded-3xl bg-ink-50 px-4 py-5 sm:px-8">
      <div aria-hidden="true" className="absolute inset-x-4 top-1/2 -z-10 aspect-square -translate-y-1/2 rounded-full bg-ink-100" />
      <div className="mx-auto max-w-[260px] rounded-[2.5rem] border-[6px] border-ink-900 bg-ink-900 p-1 shadow-[12px_20px_45px_-16px_rgba(0,0,0,0.3)]">
        <div className="overflow-hidden rounded-[1.9rem] bg-[#f4f2ee]">
          <div className="bg-white px-4 pb-3 pt-3">
            <div aria-hidden="true" className="flex items-center justify-between text-[10px] font-semibold text-ink-900">
              <span>9:41</span><span className="h-4 w-20 rounded-full bg-ink-950" /><span>100%</span>
            </div>
            <div className="mt-3 flex items-center gap-2">
              <span className="flex h-8 w-8 items-center justify-center rounded-full bg-ink-100"><Image src="/images/brand/icon-48.png" alt="" width={24} height={24} /></span>
              <div><p className="text-sm font-semibold text-ink-950">Smilo</p><p className="text-[11px] text-ink-500">Lembretes de consultas</p></div>
            </div>
          </div>

          <div className="space-y-3 p-3">
            <p className="mx-auto w-fit rounded-md bg-white/80 px-2 py-1 text-[9px] font-medium text-ink-500">CONVERSA DE DEMONSTRAÇÃO</p>
            <div className="phone-demo-message rounded-2xl rounded-tl-sm bg-white p-3 text-xs leading-relaxed text-ink-700 shadow-sm">
              <p className="font-semibold text-ink-950">Lembrete de consulta</p>
              <p className="mt-2">Olá, Ana! Sua consulta na Clínica Sorriso está marcada para amanhã.</p>
              <div className="my-2 flex items-center gap-2 rounded-xl bg-ink-50 p-2 font-semibold text-ink-900"><Icon name="CalendarDays" className="h-4 w-4 shrink-0" />Amanhã, às 14h30</div>
              <p>Podemos confirmar sua presença?</p>
              <p className="mt-2 text-right text-[10px] text-ink-400">09:41</p>
            </div>

            <p className="phone-demo-message phone-demo-confirm ml-5 rounded-2xl rounded-tr-sm bg-green-100 px-3 py-2 text-xs leading-relaxed text-green-950">Confirmo minha presença!<Icon name="Check" className="ml-auto mt-1 h-3 w-3 text-green-700" /></p>
            <p className="phone-demo-message phone-demo-response mr-3 rounded-2xl rounded-tl-sm bg-white px-3 py-2 text-xs leading-relaxed text-ink-700 shadow-sm">Obrigada, Ana! Esperamos você amanhã às 14h30. Até lá!</p>
          </div>
          <div aria-hidden="true" className="mx-auto mb-2 mt-1 h-1 w-24 rounded-full bg-ink-950" />
        </div>
      </div>
      <div className="mt-3 text-center">
        <p className="text-[11px] text-ink-500">Demonstração automática. Nenhuma mensagem é enviada.</p>
      </div>
    </div>
  );
}
