import { Reveal } from "@/components/ui/Reveal";
import { STEPS } from "@/lib/content";

/**
 * The positioning statement plus the four-step process, on a dark panel.
 */
export function Positioning() {
  return (
    <section className="bg-cream px-4 py-20 sm:py-24 lg:py-28">
      <div className="relative mx-auto max-w-[72rem] overflow-hidden rounded-[2.5rem] bg-forest px-6 py-16 sm:px-12 sm:py-20">
        <div aria-hidden="true" className="pointer-events-none absolute -right-24 -top-24 h-80 w-80 rounded-full bg-brand/25 blur-[100px]" />
        <Reveal className="relative mx-auto max-w-3xl text-center">
          <p className="text-[0.95rem] font-bold uppercase tracking-[0.14em] text-brand-light sm:text-[1.05rem]">The process</p>
          <h2 className="text-h2 mt-4 !text-white">Positioning first. Content second. Pipeline after.</h2>
          <p className="lead mx-auto mt-5 max-w-2xl !text-white/70">
            Most LinkedIn services sell content. We build the system behind it, so every post and every message points
            at the same outcome.
          </p>
        </Reveal>
        <div className="relative mt-12 grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
          {STEPS.map((s, i) => (
            <Reveal key={s.no} delay={i * 0.08} className="rounded-3xl bg-white/[0.06] p-6 ring-1 ring-white/10">
              <p
                className="text-[2rem] font-semibold leading-none text-brand"
                style={{ fontFamily: "var(--font-display)" }}
              >
                {s.no}
              </p>
              <h3 className="mt-4 text-[1.15rem] font-semibold !text-white">{s.title}</h3>
              <p className="mt-2 text-[0.92rem] leading-relaxed text-white/70">{s.description}</p>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}
