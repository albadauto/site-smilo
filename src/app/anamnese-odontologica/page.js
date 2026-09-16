import SeoLandingPage from "@/components/SeoLandingPage";
import { createPageMetadata } from "@/lib/seo";
import { anamneseOdontologicaPage } from "@/lib/seoLandingPages";

export const metadata = createPageMetadata({
  ...anamneseOdontologicaPage.metadata,
  path: anamneseOdontologicaPage.path,
});

export default function AnamneseOdontologicaPage() {
  return <SeoLandingPage page={anamneseOdontologicaPage} />;
}
