import BackgroundGrid from "@/app/components/ui/BackgroundGrid";
import PartnerHero from "../components/sections/partner/hero/PartnerHero";
import BenefitsSection from "../components/sections/partner/benefits/BenefitSection";
import WhyUsSection from "../components/sections/partner/whyus/WhyUsSection";

export default function PartnerPage() {
  return (
<main className="relative overflow-x-clip">
  <BackgroundGrid/>
  <PartnerHero />
  <WhyUsSection />
  <BenefitsSection/>
</main>
  );
}