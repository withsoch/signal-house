import type { Metadata } from "next";
import { ServicesShowcase } from "@/components/ServicesShowcase";
import ServicesVenn from "@/components/ServicesVenn";
import AnimateIn from "@/components/AnimateIn";

export const metadata: Metadata = {
  title: "Services. LinkedIn Growth, End to End",
  description:
    "Profile optimisation, content, company page marketing, lead generation, personal branding, coaching and audits. The full Signal House LinkedIn system for founders and senior executives.",
};

export default function ServicesPage() {
  return (
    <>
      <section className="border-b border-line bg-mist">
        <div className="container-x py-16 sm:py-20 lg:py-24">
          <div className="flex flex-col gap-12 md:flex-row md:items-center md:gap-[48px]">
            <div className="min-w-0 md:[flex:0_0_45%] md:pr-10">
              <AnimateIn delay={0}>
                <h1 className="text-display text-[clamp(2.5rem,1.5rem+3.2vw,3.9rem)]">
                  Every service Signal House offers. Take the full system or start with the piece you need most.
                </h1>
              </AnimateIn>
              <AnimateIn delay={100}>
                <p className="lead mt-6 max-w-2xl">
                  Each service is built around one goal: making you the most credible voice in your space, in front of the people who matter most.
                </p>
              </AnimateIn>
            </div>
            <div className="flex flex-1 items-center justify-center">
              <div className="w-full max-w-[400px] md:max-w-none mx-auto md:mx-0">
                <AnimateIn delay={200} direction="up">
                  <ServicesVenn />
                </AnimateIn>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* No AnimateIn wrapper here: this section is taller than 6.67x the
          viewport on phones, so useScrollAnimation's 0.15 threshold could
          never be met and the whole list stayed at opacity 0. Each service
          row reveals individually via Reveal inside the component. */}
      <ServicesShowcase />
    </>
  );
}
