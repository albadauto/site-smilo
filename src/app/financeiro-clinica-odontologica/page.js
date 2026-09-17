import SeoLandingPage from "@/components/SeoLandingPage";
import { createPageMetadata } from "@/lib/seo";
import { financeiroClinicaOdontologicaPage } from "@/lib/seoLandingPages";

export const metadata = createPageMetadata({
  ...financeiroClinicaOdontologicaPage.metadata,
  path: financeiroClinicaOdontologicaPage.path,
});

export default function FinanceiroClinicaOdontologicaPage() {
  return <SeoLandingPage page={financeiroClinicaOdontologicaPage} />;
}
