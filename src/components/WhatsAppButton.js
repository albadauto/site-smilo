import Icon from "./Icon";
import { whatsappLink, defaultWhatsappMessage } from "@/lib/site";

export default function WhatsAppButton() {
  return (
    <a
      href={whatsappLink(defaultWhatsappMessage)}
      data-button-location="floating_whatsapp"
      target="_blank"
      rel="noopener noreferrer"
      className="group fixed bottom-6 right-6 z-40 flex h-14 w-14 items-center justify-center rounded-full bg-[#25D366] text-white shadow-[0_12px_30px_-8px_rgba(0,0,0,0.5)] transition-transform hover:scale-105 hover:bg-[#20bd5a] active:scale-95 sm:bottom-8 sm:right-8"
      aria-label="Falar com o Smilo no WhatsApp"
    >
      <Icon name="WhatsApp" className="h-7 w-7" />
    </a>
  );
}
