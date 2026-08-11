import { Header } from "@/components/sections/Header";
import { Hero } from "@/components/sections/Hero";
import { TrustStats } from "@/components/sections/TrustStats";
import { UspGrid } from "@/components/sections/UspGrid";
import { Pricing } from "@/components/sections/Pricing";
import { PersonalIntro } from "@/components/sections/PersonalIntro";
import { ProcessTimeline } from "@/components/sections/ProcessTimeline";
import { Testimonials } from "@/components/sections/Testimonials";
import { Faq } from "@/components/sections/Faq";
import { FinalCta } from "@/components/sections/FinalCta";
import { Footer } from "@/components/sections/Footer";

export default function Home() {
  return (
    <>
      <Header />
      <main>
        <Hero />
        <TrustStats />
        <UspGrid />
        <Pricing />
        <PersonalIntro />
        <ProcessTimeline />
        <Testimonials />
        <Faq />
        <FinalCta />
      </main>
      <Footer />
    </>
  );
}
