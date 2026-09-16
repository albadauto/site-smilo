import SeoLandingPage from "@/components/SeoLandingPage";
import { createPageMetadata } from "@/lib/seo";
import { agendaOdontologicaPage } from "@/lib/seoLandingPages";

export const metadata = createPageMetadata({
  ...agendaOdontologicaPage.metadata,
  path: agendaOdontologicaPage.path,
});

export default function AgendaOdontologicaPage() {
  return <SeoLandingPage page={agendaOdontologicaPage} />;
}
