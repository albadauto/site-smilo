import SeoLandingPage from "@/components/SeoLandingPage";
import { createPageMetadata } from "@/lib/seo";
import { sistemaParaClinicaOdontologicaPage } from "@/lib/seoLandingPages";

export const metadata = createPageMetadata({
  ...sistemaParaClinicaOdontologicaPage.metadata,
  path: sistemaParaClinicaOdontologicaPage.path,
});

export default function SistemaParaClinicaOdontologicaPage() {
  return <SeoLandingPage page={sistemaParaClinicaOdontologicaPage} />;
}
