"use client";

import { useState } from "react";
import Icon from "./Icon";

export default function FaqAccordion({ items, tone = "light" }) {
  const [openIndex, setOpenIndex] = useState(0);

  const borderTone = tone === "dark" ? "border-white/10" : "border-ink-200";
  const titleTone = tone === "dark" ? "text-white" : "text-ink-950";
  const bodyTone = tone === "dark" ? "text-white/60" : "text-ink-600";
  const iconTone = tone === "dark" ? "text-white/50" : "text-ink-400";

  return (
    <div className={`divide-y ${borderTone} border-t ${borderTone}`}>
      {items.map((item, index) => {
        const isOpen = openIndex === index;
        return (
          <div key={item.question}>
            <button
              type="button"
              onClick={() => setOpenIndex(isOpen ? -1 : index)}
              className="flex w-full items-center justify-between gap-6 py-5 text-left"
              aria-expanded={isOpen}
            >
              <span className={`text-base font-medium sm:text-lg ${titleTone}`}>
                {item.question}
              </span>
              <Icon
                name="ChevronDown"
                className={`h-5 w-5 shrink-0 transition-transform duration-200 ${iconTone} ${
                  isOpen ? "rotate-180" : ""
                }`}
              />
            </button>
            <div
              className={`grid overflow-hidden transition-all duration-300 ease-out ${
                isOpen ? "grid-rows-[1fr] opacity-100" : "grid-rows-[0fr] opacity-0"
              }`}
            >
              <div className="overflow-hidden">
                <p className={`pb-6 text-sm leading-relaxed sm:text-base ${bodyTone}`}>
                  {item.answer}
                </p>
              </div>
            </div>
          </div>
        );
      })}
    </div>
  );
}
