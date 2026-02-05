export function AboutSection() {
  return (
    <section
      id="about"
      className="py-16"
      style={{
        background: "linear-gradient(to bottom, rgba(15,23,42,0.9), hsl(230 50% 3%))",
      }}
    >
      <div className="mx-auto max-w-[760px] px-5">
        <div className="mb-6">
          <h2 className="text-[22px] font-bold text-foreground">About</h2>
          <p className="text-sm text-muted-foreground">Why I build the way I build.</p>
        </div>

        <div className="rounded-2xl border border-border bg-gradient-to-br from-foreground/10 to-background/95 p-5 shadow-[0_18px_45px_rgba(0,0,0,0.55)]">
          <p className="leading-relaxed text-muted-foreground">
            I bridge the gap between technical complexity and commercial outcomes. Leading risk systems for a FTSE 100
            organisation taught me to evaluate exposure daily, embed compliance checkpoints, and translate data into
            clear stakeholder recommendations.
          </p>
          <p className="mt-4 leading-relaxed text-muted-foreground">
            Insurance underwriting excites me because it demands the same analytical rigour I&apos;ve developed,
            balancing risk appetite against business objectives, navigating regulation, and making sound decisions under
            uncertainty. I&apos;m eager to apply my experience in risk frameworks, data validation, and process
            automation to technical underwriting roles.
          </p>
        </div>
      </div>
    </section>
  )
}
