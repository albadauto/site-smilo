import SeoLandingPage from "@/components/SeoLandingPage";
import { createPageMetadata } from "@/lib/seo";
import { prontuarioEletronicoOdontologicoPage } from "@/lib/seoLandingPages";

export const metadata = createPageMetadata({
  ...prontuarioEletronicoOdontologicoPage.metadata,
  path: prontuarioEletronicoOdontologicoPage.path,
});

export default function ProntuarioEletronicoOdontologicoPage() {
  return <SeoLandingPage page={prontuarioEletronicoOdontologicoPage} />;
}
