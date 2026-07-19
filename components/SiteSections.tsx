import { SiteContent } from "@/lib/content";
import Reveal from "@/components/Reveal";

function Section({
  id,
  label,
  heading,
  children,
  tinted = false,
}: {
  id: string;
  label: string;
  heading: string;
  children: React.ReactNode;
  tinted?: boolean;
}) {
  return (
    <section id={id} className={tinted ? "bg-surface" : "bg-background"}>
      <div className="container-page py-28 md:py-40">
        <Reveal>
          <div className="mb-14 max-w-2xl">
            <span className="eyebrow text-xs font-semibold text-gold">{label}</span>
            <h2 className="mt-4 font-serif text-3xl font-medium leading-tight tracking-tight text-navy md:text-[2.75rem]">
              {heading}
            </h2>
          </div>
        </Reveal>
        {children}
      </div>
    </section>
  );
}

export function Hero({ c }: { c: SiteContent }) {
  return (
    <section
      id="top"
      className="relative flex min-h-screen flex-col items-center justify-center bg-background px-6 py-32 text-center text-navy"
    >
      <Reveal>
        <p className="eyebrow text-xs font-semibold text-gold">{c.hero.badge}</p>
        <h1 className="mt-10 font-serif font-medium leading-[0.92] tracking-tight">
          <span className="block text-xl font-normal text-muted md:text-2xl">
            {c.hero.titleLines[0]}
          </span>
          <span className="text-mask-aso mt-3 block text-[3.5rem] leading-[0.9] md:text-[11rem]">
            {c.hero.titleLines[1]}
          </span>
        </h1>
        <p className="mx-auto mt-10 max-w-xl text-base leading-relaxed text-muted md:text-lg">
          {c.hero.subtitle}
        </p>
        <div className="mt-12 flex flex-wrap items-center justify-center gap-4">
          <a
            href="#services"
            className="group inline-flex items-center gap-2 rounded-md bg-navy px-8 py-4 text-sm font-semibold text-white transition-all hover:bg-navy-deep"
          >
            {c.hero.primaryCta}
            <span className="transition-transform group-hover:translate-x-1">{"→"}</span>
          </a>
          <a
            href="#contact"
            className="inline-flex items-center rounded-md border border-border px-8 py-4 text-sm font-semibold text-navy transition-colors hover:bg-surface"
          >
            {c.hero.secondaryCta}
          </a>
        </div>
      </Reveal>

      <div className="absolute bottom-10 left-1/2 flex -translate-x-1/2 flex-col items-center gap-2 text-muted/60">
        <span className="eyebrow text-[10px]">Scroll</span>
        <span className="h-12 w-px bg-muted/30" />
      </div>
    </section>
  );
}

export function About({ c }: { c: SiteContent }) {
  return (
    <Section id="about" label={c.about.sectionLabel} heading={c.about.heading}>
      <Reveal>
        <div className="grid gap-12 md:grid-cols-12">
          <p className="font-serif text-2xl font-medium leading-[1.7] text-navy md:col-span-7 md:text-[1.75rem]">
            {c.about.lead}
          </p>
          <div className="space-y-5 leading-[1.9] text-muted md:col-span-5">
            {c.about.body.map((p, i) => (
              <p key={i}>{p}</p>
            ))}
          </div>
        </div>
      </Reveal>
    </Section>
  );
}

export function Message({ c }: { c: SiteContent }) {
  return (
    <section className="relative flex min-h-[85vh] items-center justify-center overflow-hidden bg-navy-deep text-white">
      <div className="absolute inset-0 hero-kenburns">
        <div
          className="absolute inset-0 bg-cover bg-center"
          style={{ backgroundImage: "url(/hero-aso.jpg)" }}
          aria-hidden
        />
      </div>
      <div className="absolute inset-0 bg-navy-deep/55" aria-hidden />
      <div className="container-page relative">
        <Reveal>
          <div className="mx-auto max-w-4xl text-center">
            <p className="eyebrow text-xs font-semibold text-gold">
              {c.company.mission.label}
            </p>
            <p className="mt-8 font-serif text-2xl font-medium leading-[1.6] md:text-[2.75rem] md:leading-[1.5]">
              {c.company.mission.value}
            </p>
            <p className="eyebrow mt-10 text-xs text-white/70">— Journeymate</p>
          </div>
        </Reveal>
      </div>
    </section>
  );
}

export function Strengths({ c }: { c: SiteContent }) {
  return (
    <Section
      id="strengths"
      label={c.strengths.sectionLabel}
      heading={c.strengths.heading}
    >
      <div className="grid gap-px overflow-hidden rounded-2xl border border-border bg-border md:grid-cols-3">
        {c.strengths.items.map((item, i) => (
          <Reveal key={item.no} delay={i * 120}>
            <div className="group h-full bg-background p-10 transition-colors hover:bg-surface">
              <div className="font-serif text-5xl font-medium text-gold/90">
                {item.no}
              </div>
              <h3 className="mt-8 font-serif text-xl font-medium text-navy">
                {item.title}
              </h3>
              <p className="mt-4 text-sm leading-[1.9] text-muted">{item.desc}</p>
            </div>
          </Reveal>
        ))}
      </div>
    </Section>
  );
}

export function Services({ c }: { c: SiteContent }) {
  return (
    <Section
      id="services"
      label={c.services.sectionLabel}
      heading={c.services.heading}
      tinted
    >
      <Reveal>
        <p className="-mt-8 mb-14 max-w-2xl text-lg leading-relaxed text-muted">
          {c.services.lead}
        </p>
      </Reveal>
      <div className="grid gap-px overflow-hidden rounded-2xl border border-border bg-border sm:grid-cols-2">
        {c.services.items.map((item, i) => (
          <Reveal key={i} delay={(i % 2) * 120}>
            <div className="h-full bg-background p-10 transition-colors hover:bg-surface-deep">
              <div className="font-serif text-2xl font-medium text-gold/80">
                {String(i + 1).padStart(2, "0")}
              </div>
              <h3 className="mt-6 font-serif text-lg font-medium text-navy">
                {item.title}
              </h3>
              <p className="mt-3 text-sm leading-[1.9] text-muted">{item.desc}</p>
            </div>
          </Reveal>
        ))}
      </div>
    </Section>
  );
}

export function Testimonials({ c }: { c: SiteContent }) {
  return (
    <Section
      id="voices"
      label={c.testimonials.sectionLabel}
      heading={c.testimonials.heading}
    >
      <div className="space-y-16 md:space-y-24">
        {c.testimonials.items.map((t, i) => (
          <Reveal key={i} delay={i * 100}>
            <figure className="mx-auto max-w-3xl text-center">
              <div className="font-serif text-5xl leading-none text-gold" aria-hidden>
                {"“"}
              </div>
              <blockquote className="mt-4 font-serif text-2xl font-medium leading-[1.6] text-navy md:text-[2rem] md:leading-[1.5]">
                {t.quote}
              </blockquote>
              <figcaption className="eyebrow mt-8 text-xs text-gold">
                {t.author}
                <span className="ml-2 text-muted">{t.role}</span>
              </figcaption>
            </figure>
          </Reveal>
        ))}
      </div>
    </Section>
  );
}

export function Company({ c }: { c: SiteContent }) {
  return (
    <Section
      id="company"
      label={c.company.sectionLabel}
      heading={c.company.heading}
      tinted
    >
      <Reveal>
        <div className="mx-auto max-w-3xl">
          <dl className="divide-y divide-border">
            {c.company.rows.map((row, i) => (
              <div key={i} className="flex gap-6 py-5">
                <dt className="w-32 shrink-0 text-sm font-medium text-muted">
                  {row.label}
                </dt>
                <dd className="text-sm text-foreground">{row.value}</dd>
              </div>
            ))}
          </dl>
        </div>
      </Reveal>
    </Section>
  );
}

export function Contact({ c }: { c: SiteContent }) {
  return (
    <section id="contact" className="relative overflow-hidden bg-navy-deep text-white">
      <div
        className="absolute inset-0 bg-cover bg-center opacity-25"
        style={{ backgroundImage: "url(/hero-aso.jpg)" }}
        aria-hidden
      />
      <div className="absolute inset-0 bg-navy-deep/80" aria-hidden />
      <div className="container-page relative py-28 md:py-40">
        <Reveal>
          <div className="mx-auto max-w-2xl text-center">
            <span className="eyebrow text-xs font-semibold text-gold">
              {c.contact.sectionLabel}
            </span>
            <h2 className="mt-4 font-serif text-3xl font-medium tracking-tight md:text-[2.75rem]">
              {c.contact.heading}
            </h2>
            <p className="mt-6 leading-relaxed text-white/80">{c.contact.lead}</p>
            <a
              href={`mailto:${c.contact.email}`}
              className="mt-10 inline-flex items-center rounded-md bg-white px-8 py-4 text-sm font-semibold text-navy transition-colors hover:bg-white/90"
            >
              {c.contact.emailCta}
            </a>
            <p className="mt-4 text-sm text-white/60">{c.contact.email}</p>
          </div>
        </Reveal>
      </div>
    </section>
  );
}
