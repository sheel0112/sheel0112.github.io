export function HeroSection() {
  const pills = [
    "Risk evaluation",
    "Regulatory compliance",
    "SQL / Python / Excel",
    "Stakeholder management",
    "Certified Scrum PO",
  ]

  return (
    <section id="home" className="relative overflow-hidden py-24 pb-10">
      {/* Gradient overlay */}
      <div
        className="pointer-events-none absolute inset-0 opacity-55"
        style={{
          background:
            "radial-gradient(circle at top left, rgba(79,141,253,0.35), transparent 60%), radial-gradient(circle at top right, rgba(56,189,248,0.18), transparent 55%)",
        }}
      />

      <div className="relative z-10 mx-auto max-w-[1080px] px-5">
        <div className="max-w-[680px]">
          <p className="text-xs uppercase tracking-[0.16em] text-muted-foreground">
            Product / Risk / Underwriting
          </p>

          <h1 className="mt-3 text-balance text-[clamp(28px,4vw,42px)] font-bold leading-tight text-foreground">
            Product Owner leading a £20m risk platform, now transitioning into insurance underwriting.
          </h1>

          <p className="mt-4 max-w-[560px] leading-relaxed text-muted-foreground">
            5+ years translating complex risk data into actionable decisions. I build compliant, data-driven tools in
            regulated environments and I&apos;m eager to apply that rigour to underwriting and insurance risk.
          </p>

          <div className="mt-4 flex gap-2.5">
            <a
              href="#projects"
              className="inline-flex items-center rounded-full bg-gradient-to-br from-primary to-sky-400 px-5 py-2.5 text-sm font-medium text-primary-foreground shadow-[0_12px_30px_rgba(15,118,255,0.35)] transition-transform hover:-translate-y-0.5"
            >
              View projects
            </a>
            <a
              href="#contact"
              className="inline-flex items-center rounded-full border border-foreground/20 bg-background/70 px-5 py-2.5 text-sm text-foreground transition-colors hover:bg-foreground/10"
            >
              {"Let's connect"}
            </a>
          </div>

          <div className="mt-3.5 flex flex-wrap gap-2">
            {pills.map((pill) => (
              <span
                key={pill}
                className="rounded-full border border-foreground/40 px-3 py-1 text-[11px] text-foreground"
              >
                {pill}
              </span>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}
