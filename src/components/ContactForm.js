"use client";

import { useState } from "react";
import Icon from "./Icon";
import { siteConfig } from "@/lib/site";

const initialState = { nome: "", clinica: "", telefone: "", mensagem: "" };

export default function ContactForm() {
  const [values, setValues] = useState(initialState);
  const [sent, setSent] = useState(false);

  function handleChange(event) {
    const { name, value } = event.target;
    setValues((prev) => ({ ...prev, [name]: value }));
  }

  function handleSubmit(event) {
    event.preventDefault();

    const subject = `Contato via site — ${values.nome || "Clínica interessada no Smilo"}`;
    const body = [
      `Nome: ${values.nome}`,
      `Clínica: ${values.clinica}`,
      `Telefone: ${values.telefone}`,
      "",
      "Mensagem:",
      values.mensagem,
    ].join("\n");

    window.location.href = `mailto:${siteConfig.email}?subject=${encodeURIComponent(
      subject
    )}&body=${encodeURIComponent(body)}`;

    setSent(true);
  }

  return (
    <form onSubmit={handleSubmit} className="space-y-5">
      <div className="grid grid-cols-1 gap-5 sm:grid-cols-2">
        <div>
          <label htmlFor="nome" className="block text-sm font-medium text-ink-800">
            Nome
          </label>
          <input
            id="nome"
            name="nome"
            type="text"
            required
            value={values.nome}
            onChange={handleChange}
            className="mt-2 w-full rounded-xl border border-ink-200 bg-white px-4 py-3 text-sm text-ink-950 outline-none transition-colors placeholder:text-ink-400 focus:border-ink-900"
            placeholder="Seu nome"
          />
        </div>
        <div>
          <label htmlFor="clinica" className="block text-sm font-medium text-ink-800">
            Nome da clínica
          </label>
          <input
            id="clinica"
            name="clinica"
            type="text"
            value={values.clinica}
            onChange={handleChange}
            className="mt-2 w-full rounded-xl border border-ink-200 bg-white px-4 py-3 text-sm text-ink-950 outline-none transition-colors placeholder:text-ink-400 focus:border-ink-900"
            placeholder="Clínica Sorriso"
          />
        </div>
      </div>

      <div>
        <label htmlFor="telefone" className="block text-sm font-medium text-ink-800">
          Telefone / WhatsApp
        </label>
        <input
          id="telefone"
          name="telefone"
          type="tel"
          value={values.telefone}
          onChange={handleChange}
          className="mt-2 w-full rounded-xl border border-ink-200 bg-white px-4 py-3 text-sm text-ink-950 outline-none transition-colors placeholder:text-ink-400 focus:border-ink-900"
          placeholder="(11) 99999-9999"
        />
      </div>

      <div>
        <label htmlFor="mensagem" className="block text-sm font-medium text-ink-800">
          Como podemos ajudar?
        </label>
        <textarea
          id="mensagem"
          name="mensagem"
          rows={5}
          required
          value={values.mensagem}
          onChange={handleChange}
          className="mt-2 w-full rounded-xl border border-ink-200 bg-white px-4 py-3 text-sm text-ink-950 outline-none transition-colors placeholder:text-ink-400 focus:border-ink-900"
          placeholder="Conte um pouco sobre sua clínica e o que você procura no Smilo."
        />
      </div>

      <button
        type="submit"
        className="inline-flex w-full items-center justify-center gap-2 rounded-full bg-ink-950 px-6 py-3.5 text-sm font-semibold text-white transition-all hover:bg-ink-800 active:scale-[0.99] sm:w-auto"
      >
        Enviar mensagem
        <Icon name="ArrowRight" className="h-4 w-4" />
      </button>

      <p className="text-xs text-ink-500" role="status">
        {sent
          ? "Abrimos seu aplicativo de e-mail com a mensagem pronta — é só confirmar o envio."
          : `Ao enviar, abriremos seu aplicativo de e-mail padrão com a mensagem pronta para ${siteConfig.email}.`}
      </p>
    </form>
  );
}
