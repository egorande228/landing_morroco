import BackgroundGrid from "@/app/components/ui/BackgroundGrid";
import PartnerHero from "../components/sections/partner/hero/PartnerHero";
import WhyUsSection from "../components/sections/partner/whyus/WhyUsSection";
import FinalCTA from "../components/sections/partner/finalCTA/page";

export default function PartnerPage() {
  return (
<main className="relative overflow-x-clip">
  <BackgroundGrid/>
  <PartnerHero />
  <WhyUsSection />
  <FinalCTA/>
</main>
  );
}