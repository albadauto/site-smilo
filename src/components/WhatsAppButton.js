import Icon from "./Icon";
import { whatsappLink, defaultWhatsappMessage } from "@/lib/site";

export default function WhatsAppButton() {
  return (
    <a
      href={whatsappLink(defaultWhatsappMessage)}
      target="_blank"
      rel="noopener noreferrer"
      className="group fixed bottom-6 right-6 z-40 flex h-14 w-14 items-center justify-center rounded-full bg-ink-950 text-white shadow-[0_12px_30px_-8px_rgba(0,0,0,0.5)] transition-transform hover:scale-105 active:scale-95 sm:bottom-8 sm:right-8"
      aria-label="Falar com o Smilo no WhatsApp"
    >
      <Icon name="MessageCircle" className="h-6 w-6" strokeWidth={1.8} />
    </a>
  );
}
