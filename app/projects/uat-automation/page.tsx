import type { Metadata } from "next"
import Link from "next/link"
import { ProjectHeader, ProjectFooter } from "@/components/project-layout"

export const metadata: Metadata = {
  title: "MLB UAT Automation Platform – Case Study",
  description:
    "Case study: Building a scalable UAT automation and pricing validation platform for MLB markets.",
}

function Panel({ title, children }: { title: string; children: React.ReactNode }) {
  return (
    <div className="mt-8 rounded-2xl border border-border bg-gradient-to-br from-foreground/10 to-background/95 p-5 shadow-[0_18px_45px_rgba(0,0,0,0.55)]">
      <h2 className="mb-3 text-xl font-bold text-foreground">{title}</h2>
      {children}
    </div>
  )
}

export default function UATAutomationPage() {
  return (
    <>
      <ProjectHeader />
      <main className="py-16">
        <div className="mx-auto max-w-[760px] px-5">
          <Link
            href="/#projects"
            className="mb-5 inline-block text-sm text-primary transition-opacity hover:opacity-80"
          >
            {"← Back to Projects"}
          </Link>

          <h1 className="text-balance text-[clamp(24px,3.5vw,36px)] font-bold leading-tight text-foreground">
            MLB UAT Automation Platform
          </h1>
          <p className="mt-2 text-sm text-muted-foreground">
            {"Automation · Pricing Validation · Risk Controls · Internal Tooling"}
          </p>

          <Panel title="Executive summary">
            <p className="leading-relaxed text-muted-foreground">
              I designed and delivered a full UAT automation suite for MLB pricing, replacing manual workflows with a scalable validation engine. The platform performs complete market checks within minutes, reducing regression errors by <strong className="text-foreground">80%</strong> and cutting test cycles by <strong className="text-foreground">50%</strong>. It now serves as the blueprint for automation across NBA, NFL, and future risk systems.
            </p>
          </Panel>

          <Panel title="Strategic context">
            <p className="leading-relaxed text-muted-foreground">
              MLB pricing generates thousands of markets and selections per game. Historically, each release relied on:
            </p>
            <ul className="mt-2 list-disc space-y-2 pl-5 text-muted-foreground">
              <li>Large Excel comparisons</li>
              <li>Manual SQL validation</li>
              <li>Inconsistent test coverage</li>
              <li>No automated regression suite</li>
            </ul>
            <p className="mt-3 leading-relaxed text-muted-foreground">
              The business needed a scalable, reliable, and repeatable validation framework to support rapid model updates.
            </p>
          </Panel>

          <Panel title="The problem">
            <p className="leading-relaxed text-muted-foreground">
              Manual testing failed at scale. It was slow, inconsistent, and prone to human error. The lack of automation meant:
            </p>
            <ul className="mt-2 list-disc space-y-2 pl-5 text-muted-foreground">
              <li>Missed behaviour differences between operators</li>
              <li>Edge-case pricing issues surfaced late</li>
              <li>{"Complexity of ladders and envelopes couldn't be validated end-to-end"}</li>
              <li>Regression relied on memory rather than structured checks</li>
            </ul>
          </Panel>

          <Panel title="Constraints">
            <ul className="list-disc space-y-2 pl-5 text-muted-foreground">
              <li>{"No guaranteed engineering resources — had to be self-built"}</li>
              <li>Had to run from static Athena snapshots</li>
              <li>Validation logic needed to mirror real model behaviour</li>
              <li>Tool needed to support operator-specific differences (BETMGM, Entain)</li>
            </ul>
          </Panel>

          <Panel title="My role">
            <p className="leading-relaxed text-muted-foreground">
              I owned the initiative end-to-end:
            </p>
            <ul className="mt-2 list-disc space-y-2 pl-5 text-muted-foreground">
              <li>Mapped the MLB pricing lifecycle and its edge cases</li>
              <li>Designed the automated rules engine</li>
              <li>Built the initial Python validation tool</li>
              <li>{"Product-managed transition to a multi-user React + SignalR web app"}</li>
              <li>Defined coverage, KPIs, metrics, and regression standards</li>
              <li>Worked daily with traders, modelling, and engineering teams</li>
            </ul>
          </Panel>

          <Panel title="What I delivered">
            <ul className="list-disc space-y-2 pl-5 text-muted-foreground">
              <li>Automated rules engine covering alignment, ladders, envelopes, correlation, and settlement</li>
              <li>Support for multiple operator behaviours</li>
              <li>Exception reporting via CSV + Excel with automated highlighting</li>
              <li>Regression test library for model release validation</li>
              <li>Web-based multi-user platform for internal teams</li>
              <li>Framework now adopted across sports</li>
            </ul>
          </Panel>

          <Panel title="Impact">
            <ul className="list-disc space-y-2 pl-5 text-muted-foreground">
              <li><strong className="text-foreground">50% faster</strong> model release cycles</li>
              <li><strong className="text-foreground">80% fewer missed regression errors</strong></li>
              <li>Full-market coverage, not sample-based</li>
              <li>Standardised validation across MLB, NBA, and NFL</li>
              <li>Lower operational risk with consistent test evidence</li>
            </ul>
          </Panel>

          <Panel title="Relevance to fintech & banking">
            <p className="leading-relaxed text-muted-foreground">
              The automation design aligns with financial risk controls:
            </p>
            <ul className="mt-2 list-disc space-y-2 pl-5 text-muted-foreground">
              <li>{"Pricing envelopes ≈ risk limits"}</li>
              <li>{"Settlement logic ≈ trade lifecycle verification"}</li>
              <li>{"Operator differences ≈ multi-region compliance rules"}</li>
              <li>{"Validation engine ≈ pre- and post-trade controls"}</li>
            </ul>
          </Panel>

          <Panel title="System overview">
            <p className="mb-4 leading-relaxed text-muted-foreground">
              This diagram shows how pricing data flows through the automated validation engine, rules layer, and reporting pipeline.
            </p>
            <div className="overflow-x-auto">
              <svg viewBox="0 0 900 420" className="w-full" style={{ maxWidth: 900 }}>
                {/* INPUT BLOCK */}
                <rect x="40" y="150" width="200" height="90" rx="14" fill="rgba(59,130,246,0.12)" stroke="rgba(59,130,246,0.5)" strokeWidth="2" />
                <text x="140" y="195" textAnchor="middle" fill="#cbd5e1" style={{ fontSize: 16 }}>Pricing Data (Athena</text>
                <text x="140" y="215" textAnchor="middle" fill="#cbd5e1" style={{ fontSize: 16 }}>Snapshots)</text>

                {/* Arrow to Validation Engine */}
                <line x1="240" y1="195" x2="310" y2="195" stroke="#4f8dfd" strokeWidth="3" />
                <polygon points="310,195 300,188 300,202" fill="#4f8dfd" />

                {/* VALIDATION ENGINE */}
                <rect x="310" y="110" width="280" height="170" rx="16" fill="rgba(148,163,184,0.10)" stroke="rgba(148,163,184,0.4)" strokeWidth="2" />
                <text x="450" y="145" textAnchor="middle" fill="#e2e8f0" style={{ fontSize: 18, fontWeight: "bold" }}>Validation Engine</text>
                <text x="450" y="175" textAnchor="middle" fill="#94a3b8" style={{ fontSize: 14 }}>Market alignment checks</text>
                <text x="450" y="195" textAnchor="middle" fill="#94a3b8" style={{ fontSize: 14 }}>{"Ladder & envelope validation"}</text>
                <text x="450" y="215" textAnchor="middle" fill="#94a3b8" style={{ fontSize: 14 }}>Correlated movement detection</text>
                <text x="450" y="235" textAnchor="middle" fill="#94a3b8" style={{ fontSize: 14 }}>Operator-specific rules</text>

                {/* Arrow to Rules Layer */}
                <line x1="590" y1="195" x2="660" y2="195" stroke="#4f8dfd" strokeWidth="3" />
                <polygon points="660,195 650,188 650,202" fill="#4f8dfd" />

                {/* RULES LAYER */}
                <rect x="660" y="130" width="200" height="130" rx="14" fill="rgba(79,141,253,0.15)" stroke="rgba(79,141,253,0.5)" strokeWidth="2" />
                <text x="760" y="165" textAnchor="middle" fill="#e2e8f0" style={{ fontSize: 16, fontWeight: "bold" }}>Rules Layer</text>
                <text x="760" y="195" textAnchor="middle" fill="#94a3b8" style={{ fontSize: 14 }}>Consistency, envelopes,</text>
                <text x="760" y="215" textAnchor="middle" fill="#94a3b8" style={{ fontSize: 14 }}>settlement edge cases</text>

                {/* Downward arrow */}
                <line x1="760" y1="260" x2="760" y2="310" stroke="#4f8dfd" strokeWidth="3" />
                <polygon points="760,310 753,300 767,300" fill="#4f8dfd" />

                {/* OUTPUT */}
                <rect x="600" y="310" width="320" height="90" rx="14" fill="rgba(148,163,184,0.10)" stroke="rgba(148,163,184,0.4)" strokeWidth="2" />
                <text x="760" y="350" textAnchor="middle" fill="#e2e8f0" style={{ fontSize: 16, fontWeight: "bold" }}>Reporting Pipeline</text>
                <text x="760" y="375" textAnchor="middle" fill="#94a3b8" style={{ fontSize: 14 }}>{"CSV/Excel reports · exception logs · regression library"}</text>
              </svg>
            </div>
          </Panel>
        </div>
      </main>
      <ProjectFooter />
    </>
  )
}
