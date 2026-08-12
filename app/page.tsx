import { Header } from "@/components/sections/Header";
import { Hero } from "@/components/sections/Hero";
import { WhyMe } from "@/components/sections/WhyMe";
import { Pricing } from "@/components/sections/Pricing";
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
        <WhyMe />
        <Pricing />
        <ProcessTimeline />
        <Testimonials />
        <Faq />
        <FinalCta />
      </main>
      <Footer />
    </>
  );
}
