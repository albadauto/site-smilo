import SeoLandingPage from "@/components/SeoLandingPage";
import { createPageMetadata } from "@/lib/seo";
import { lembreteConsultaWhatsappPage } from "@/lib/seoLandingPages";

export const metadata = createPageMetadata({
  ...lembreteConsultaWhatsappPage.metadata,
  path: lembreteConsultaWhatsappPage.path,
});

export default function LembreteConsultaWhatsappPage() {
  return <SeoLandingPage page={lembreteConsultaWhatsappPage} />;
}
