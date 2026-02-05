import type { Metadata } from "next"
import Link from "next/link"
import { ProjectHeader, ProjectFooter } from "@/components/project-layout"

export const metadata: Metadata = {
  title: "Case Study – Digital Risk Platform",
  description: "Case study for the unified digital risk platform led by Samuel Heel.",
}

const skills = [
  "Risk architecture",
  "Internal tooling",
  "Cross-functional leadership",
  "Data & analytics",
  "Fintech-transferable skills",
  "Automation strategy",
]

export default function RiskPlatformPage() {
  return (
    <>
      <ProjectHeader />
      <main className="py-16">
        <div className="mx-auto max-w-[760px] px-5">
          <Link
            href="/#projects"
            className="mb-5 inline-block text-sm text-primary transition-opacity hover:opacity-80"
          >
            {"← Back to projects"}
          </Link>

          <h1 className="text-balance text-[clamp(24px,3.5vw,36px)] font-bold leading-tight text-foreground">
            {"Digital Risk Platform – Multi-Sport Pricing & Exposure System"}
          </h1>
          <p className="mt-2 text-sm text-muted-foreground">
            {"Lead Product Owner · Angstrom Sports / Entain · 2024–Present"}
          </p>

          {/* Summary */}
          <div className="mt-6 rounded-2xl border border-primary/30 bg-primary/10 p-5">
            <h2 className="mb-2 text-lg font-semibold text-foreground">Summary</h2>
            <p className="leading-relaxed text-muted-foreground">
              {"A full modernisation of Angstrom's risk architecture — unifying pricing, exposure, liquidity, and trader controls into a £20m cross-sport platform used across NBA, NFL, and MLB."}
            </p>
          </div>

          <h2 className="mb-2 mt-8 text-xl font-bold text-foreground">Context</h2>
          <p className="leading-relaxed text-muted-foreground">
            Angstrom operated multiple fragmented tools across sports. Traders lacked consistent controls, visibility, and reliable workflows, creating operational bottlenecks during high-pressure events.
          </p>

          <h2 className="mb-2 mt-8 text-xl font-bold text-foreground">Problem</h2>
          <p className="leading-relaxed text-muted-foreground">
            Pricing systems were fast, but risk controls were siloed. Teams needed unified visibility, actionable guardrails, and automation to reduce manual workload and improve reaction speed.
          </p>

          <h2 className="mb-2 mt-8 text-xl font-bold text-foreground">{"Constraints & Stakes"}</h2>
          <ul className="list-disc space-y-2 pl-5 text-muted-foreground">
            <li>High-risk, real-money environment where seconds matter</li>
            <li>Cross-team dependencies: FE, BE, modelling, trading, data</li>
            <li>Hard seasonal deadlines (NBA/NFL kick-offs)</li>
            <li>Complex distributed architecture (Kafka streams, microservices)</li>
          </ul>

          <h2 className="mb-2 mt-8 text-xl font-bold text-foreground">My Role</h2>
          <p className="leading-relaxed text-muted-foreground">
            As Lead Product Owner for the entire digital risk platform, I owned roadmap definition, cross-sport alignment, prototyping, delivery leadership, and stakeholder communication across Entain, BetMGM, and internal teams.
          </p>

          <h2 className="mb-2 mt-8 text-xl font-bold text-foreground">Actions</h2>
          <ol className="list-decimal space-y-2 pl-5 text-muted-foreground">
            <li><strong className="text-foreground">Discovery:</strong> Interviewed 30+ traders to map workflows and pain points.</li>
            <li><strong className="text-foreground">Architecture:</strong> Designed a unified risk schema across exposure, limits, automation, and pricing impact.</li>
            <li><strong className="text-foreground">Design:</strong> {"Delivered rapid AI-assisted Figma → React prototypes (8 weeks → 2 weeks)."}</li>
            <li><strong className="text-foreground">Team formation:</strong> Built the first cross-functional Risk Product Team.</li>
            <li><strong className="text-foreground">KPI Framework:</strong> {"Defined adoption, latency, exposure accuracy & automation metrics."}</li>
            <li><strong className="text-foreground">Rollout:</strong> {"Coordinated multi-market onboarding across NBA, NFL & MLB trading teams."}</li>
          </ol>

          <h2 className="mb-2 mt-8 text-xl font-bold text-foreground">Impact</h2>
          <ul className="list-disc space-y-2 pl-5 text-muted-foreground">
            <li><strong className="text-foreground">~40% reduction</strong> in manual workload via workflow simplification.</li>
            <li>8-week UI delivery cycles cut to <strong className="text-foreground">2 weeks</strong>.</li>
            <li>Unified risk behaviour across all major US sports.</li>
            <li>Created the foundation for a proprietary feature and future automation pillars.</li>
          </ul>

          <h2 className="mb-2 mt-8 text-xl font-bold text-foreground">Fintech Relevance</h2>
          <p className="leading-relaxed text-muted-foreground">
            This project directly maps to financial-services risk management: real-time controls, regulatory alignment, tiered permissions, auditability, internal tooling excellence, and operational resilience.
          </p>

          <h2 className="mb-3 mt-8 text-xl font-bold text-foreground">Key Skills Demonstrated</h2>
          <div className="flex flex-wrap gap-2">
            {skills.map((skill) => (
              <span key={skill} className="rounded-full border border-foreground/40 px-3 py-1 text-[11px] text-foreground">
                {skill}
              </span>
            ))}
          </div>
        </div>
      </main>
      <ProjectFooter />
    </>
  )
}
