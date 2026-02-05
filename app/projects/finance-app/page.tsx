import type { Metadata } from "next"
import Link from "next/link"
import { ProjectHeader, ProjectFooter } from "@/components/project-layout"

export const metadata: Metadata = {
  title: "Stacked – Personal Finance App",
  description: "Case study for Stacked, a personal finance and budgeting app with ML-driven spend insights.",
}

export default function FinanceAppPage() {
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

          <p className="text-xs uppercase tracking-[0.14em] text-primary">{"Fintech · Personal finance"}</p>
          <h1 className="mt-2 text-balance text-[clamp(24px,3.5vw,36px)] font-bold leading-tight text-foreground">
            {"Stacked – Personal Finance & Budgeting App"}
          </h1>
          <p className="mt-2 text-sm text-muted-foreground">
            {"Role: Product Manager · ML-driven spend insights"}
          </p>

          <div className="mt-4 flex gap-2.5">
            <Link
              href="/projects/spending-demo"
              className="inline-flex items-center rounded-full bg-gradient-to-br from-primary to-sky-400 px-5 py-2.5 text-sm font-medium text-primary-foreground shadow-[0_12px_30px_rgba(15,118,255,0.35)] transition-transform hover:-translate-y-0.5"
            >
              Open live demo
            </Link>
            <a
              href="https://github.com/sheel0112/v0-spending-model-app"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center rounded-full border border-foreground/20 bg-background/70 px-5 py-2.5 text-sm text-foreground transition-colors hover:bg-foreground/10"
            >
              View code on GitHub
            </a>
          </div>

          {/* Summary */}
          <div className="mt-6 rounded-2xl border border-primary/30 bg-primary/10 p-5">
            <h2 className="mb-2 text-lg font-semibold text-foreground">Summary</h2>
            <ul className="list-disc space-y-2 pl-5 text-muted-foreground">
              <li>Personal finance tool designed around automation over manual budgeting.</li>
              <li>ML-assisted transaction categorisation for cleaner insights.</li>
              <li>System design built for open banking integrations.</li>
            </ul>
          </div>

          <h2 className="mb-2 mt-8 text-xl font-bold text-foreground">{"Context & problem"}</h2>
          <p className="leading-relaxed text-muted-foreground">
            Many budgeting tools assume users will manually maintain categories, envelopes and tags. Stacked flips this: it prioritises automation, low effort, and clear month-end insights.
          </p>

          <h2 className="mb-2 mt-8 text-xl font-bold text-foreground">Constraints</h2>
          <ul className="list-disc space-y-2 pl-5 text-muted-foreground">
            <li>Built to integrate cleanly with APIs like TrueLayer.</li>
            <li>Requires explainability for category/nudge decisions.</li>
            <li>Mobile-first design for daily use and weekly summaries.</li>
          </ul>

          <h2 className="mb-2 mt-8 text-xl font-bold text-foreground">Approach</h2>
          <h3 className="mb-1 mt-4 text-base font-semibold text-foreground">User behaviour insights</h3>
          <p className="leading-relaxed text-muted-foreground">
            Aimed at users who want clarity with minimal maintenance. No spreadsheets, no heavy UI.
          </p>

          <h3 className="mb-1 mt-4 text-base font-semibold text-foreground">System shaping</h3>
          <ul className="list-disc space-y-2 pl-5 text-muted-foreground">
            <li>{"API ingestion → cleansing → categorisation engine → insights layer → UI."}</li>
            <li>Custom category rules + ML suggestions with confidence scores.</li>
            <li>{'"One-screen" summary with drilldown for anomalies.'}</li>
          </ul>

          <h2 className="mb-2 mt-8 text-xl font-bold text-foreground">Outcomes</h2>
          <ul className="list-disc space-y-2 pl-5 text-muted-foreground">
            <li>Clear product story and user value proposition.</li>
            <li>Scalable data model for real bank feeds.</li>
            <li>Foundation for shared budgeting and couple-mode.</li>
          </ul>

          <h2 className="mb-2 mt-8 text-xl font-bold text-foreground">Next steps</h2>
          <p className="leading-relaxed text-muted-foreground">
            Next iterations: deeper ML clusters, shared spending flows, and explainable insights for end users.
          </p>
        </div>
      </main>
      <ProjectFooter />
    </>
  )
}
