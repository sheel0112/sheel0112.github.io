import Link from "next/link"

const projects = [
  {
    eyebrow: "Risk · Internal Tooling",
    title: "Digital Risk Platform – £20m Multi-Sport Risk System",
    description: "A unified pricing, exposure, and control system powering NBA, NFL, and MLB operations.",
    href: "/projects/risk-platform",
  },
  {
    eyebrow: "Fintech",
    title: "Stacked – Personal Finance App",
    description: "Smart budgeting + auto-categorisation with personalised insights.",
    href: "/projects/finance-app",
  },
  {
    eyebrow: "Automation · Risk · Tooling",
    title: "MLB UAT Automation Platform",
    description: "A complete validation engine for pricing, settlement, and operator behaviour.",
    href: "/projects/uat-automation",
  },
]

export function ProjectsSection() {
  return (
    <section
      id="projects"
      className="py-16"
      style={{
        background: "linear-gradient(to bottom, rgba(15,23,42,0.9), hsl(230 50% 3%))",
      }}
    >
      <div className="mx-auto max-w-[1080px] px-5">
        <div className="mb-6">
          <h2 className="text-[22px] font-bold text-foreground">Projects</h2>
          <p className="text-sm text-muted-foreground">
            Selected work across risk, fintech, and internal tooling.
          </p>
        </div>

        <div className="grid gap-5 md:grid-cols-2">
          {projects.map((project) => (
            <article
              key={project.href}
              className="group flex flex-col justify-between rounded-2xl border border-border bg-card p-5 shadow-[0_18px_45px_rgba(0,0,0,0.55)] transition-all duration-200 hover:-translate-y-1 hover:shadow-[0_24px_50px_rgba(0,0,0,0.65)]"
            >
              <div>
                <p className="text-[11px] uppercase tracking-[0.14em] text-muted-foreground">{project.eyebrow}</p>
                <h3 className="mt-2 text-lg font-semibold text-foreground">{project.title}</h3>
                <p className="mt-1 text-sm text-muted-foreground">{project.description}</p>
              </div>
              <div className="mt-4 border-t border-border pt-3">
                <Link
                  href={project.href}
                  className="text-sm font-medium text-primary transition-opacity hover:opacity-80"
                >
                  {"View case study →"}
                </Link>
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  )
}
