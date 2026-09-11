"use client";

import { useState } from "react";
import Image from "next/image";
import Icon from "./Icon";

export default function InteractivePhone() {
  const [reply, setReply] = useState(null);
  const actionClass = "min-h-11 rounded-xl border border-ink-200 bg-white px-3 py-2 text-sm font-medium text-ink-900 transition-colors hover:bg-ink-100 focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-green-600";

  return (
    <div className="relative isolate rounded-3xl bg-ink-50 px-4 py-8 sm:px-8">
      <div aria-hidden="true" className="absolute inset-x-4 top-1/2 -z-10 aspect-square -translate-y-1/2 rounded-full bg-ink-100" />
      <div className="mx-auto max-w-[340px] rounded-[3rem] border-[8px] border-ink-900 bg-ink-900 p-1 shadow-[12px_20px_45px_-16px_rgba(0,0,0,0.3)]">
        <div className="overflow-hidden rounded-[2.25rem] bg-[#f4f2ee]">
          <div className="bg-white px-5 pb-4 pt-3">
            <div aria-hidden="true" className="flex items-center justify-between text-[10px] font-semibold text-ink-900">
              <span>9:41</span><span className="h-5 w-24 rounded-full bg-ink-950" /><span>100%</span>
            </div>
            <div className="mt-5 flex items-center gap-3">
              <span className="flex h-10 w-10 items-center justify-center rounded-full bg-ink-100"><Image src="/images/brand/icon-48.png" alt="" width={28} height={28} /></span>
              <div><p className="text-sm font-semibold text-ink-950">Smilo</p><p className="text-[11px] text-ink-500">Lembretes de consultas</p></div>
            </div>
          </div>

          <div className="space-y-4 p-4">
            <p className="mx-auto w-fit rounded-md bg-white/80 px-3 py-1 text-[10px] font-medium text-ink-500">CONVERSA DE DEMONSTRAÇÃO</p>
            <div className="rounded-2xl rounded-tl-sm bg-white p-4 text-sm leading-relaxed text-ink-700 shadow-sm">
              <p className="font-semibold text-ink-950">Lembrete de consulta</p>
              <p className="mt-2">Olá, Ana! Sua consulta na Clínica Sorriso está marcada para amanhã.</p>
              <div className="my-3 flex items-center gap-2 rounded-xl bg-ink-50 p-3 font-semibold text-ink-900"><Icon name="CalendarDays" className="h-4 w-4 shrink-0" />Amanhã, às 14h30</div>
              <p>Podemos confirmar sua presença?</p>
              <p className="mt-2 text-right text-[10px] text-ink-400">09:41</p>
            </div>

            <div aria-live="polite" aria-atomic="true" className="min-h-[140px]">
              {reply ? (
                <div className="space-y-3">
                  <p className="ml-6 rounded-2xl rounded-tr-sm bg-green-100 px-4 py-3 text-sm text-green-950">{reply === "confirm" ? "Confirmo minha presença!" : "Preciso de outro horário."}<Icon name="Check" className="ml-auto mt-1 h-3.5 w-3.5 text-green-700" /></p>
                  <p className="mr-4 rounded-2xl rounded-tl-sm bg-white px-4 py-3 text-sm leading-relaxed text-ink-700 shadow-sm">{reply === "confirm" ? "Obrigada, Ana! Esperamos você amanhã às 14h30. Até lá!" : "Tudo bem, Ana! A equipe da clínica entrará em contato para combinar um novo horário."}</p>
                </div>
              ) : <p className="px-2 pt-6 text-center text-xs leading-relaxed text-ink-500">Toque em uma das opções abaixo para experimentar a conversa.</p>}
            </div>

            <div className="grid gap-2" aria-label="Respostas da demonstração">
              <button type="button" aria-pressed={reply === "confirm"} onClick={() => setReply("confirm")} className={`${actionClass} ${reply === "confirm" ? "border-green-600 bg-green-50" : ""}`}>Confirmar consulta</button>
              <button type="button" aria-pressed={reply === "reschedule"} onClick={() => setReply("reschedule")} className={`${actionClass} ${reply === "reschedule" ? "border-green-600 bg-green-50" : ""}`}>Pedir outro horário</button>
            </div>
          </div>
          <div aria-hidden="true" className="mx-auto mb-2 mt-1 h-1 w-24 rounded-full bg-ink-950" />
        </div>
      </div>
      <div className="mt-5 text-center">
        <button type="button" onClick={() => setReply(null)} disabled={!reply} className="min-h-11 rounded-full px-4 py-2 text-xs font-medium text-ink-600 underline underline-offset-4 hover:text-ink-950 focus-visible:outline-2 focus-visible:outline-offset-2 disabled:opacity-40">Reiniciar demonstração</button>
        <p className="text-[11px] text-ink-500">Simulação interativa. Nenhuma mensagem é enviada.</p>
      </div>
    </div>
  );
}
