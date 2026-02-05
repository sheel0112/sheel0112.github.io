"use client"

import { useState } from "react"

interface TimelineEntry {
  role: string
  company: string
  dates: string
  summary: string
  details: string[]
}

const timeline: TimelineEntry[] = [
  {
    role: "Lead Risk Product Owner – Digital Risk Platform",
    company: "Angstrom Sports (Entain) · Risk Department",
    dates: "Nov 2024 – Present",
    summary: "Leading a £20m digital risk platform covering pricing, exposure, automation, and trader tooling.",
    details: [
      "Lead a cross-functional team of 10+ across FE/BE, data engineering, and UI/UX.",
      "Built a priority matrix (now adopted company-wide) weighing risk against commercial value.",
      "Delivered $4m annual savings by automating manual processes.",
      "Reduced testing time by 60% and regression errors by 80% through validation frameworks.",
      "Present weekly to C-Suite on risk exposure, progress, and milestones.",
    ],
  },
  {
    role: "Product Analyst & Shadow Product Owner",
    company: "Angstrom Sports · Sports & Baseball Division",
    dates: "Jan 2024 – Nov 2024",
    summary: "Bridged analysis, testing automation, and product ownership across MLB pricing and risk workflows.",
    details: [
      "Designed and built Python-based validation tools, cutting testing time by 50%.",
      "Reduced missed errors by 80% through automated integrity checks.",
      "Presented business case to Architecture Board, securing investment and a dedicated team.",
      "Translated complex requirements into clear specifications across teams.",
    ],
  },
  {
    role: "Sports Trader & Product Testing Specialist",
    company: "Amelco Limited",
    dates: "Mar 2022 – Dec 2023",
    summary: "Worked in a regulated financial environment, coordinating between clients, vendors, and engineering.",
    details: [
      "Ensured platforms met compliance and user requirements across US operators.",
      "Standardised testing processes for high-volume products.",
      "Introduced automation and prepared business analysis reviews.",
    ],
  },
  {
    role: "Senior & Lead Performance Analyst (Rugby & Football)",
    company: "PASS · WSL · Skylab · Hartpury · Cheltenham",
    dates: "2016 – 2022",
    summary: "Delivered real-time and post-match analytics for elite rugby and football teams.",
    details: [
      "Live tactical feedback during high-pressure matches.",
      "Opposition analysis and player modelling.",
      "Created full analysis pipelines still used today.",
    ],
  },
]

function TimelineItem({ entry }: { entry: TimelineEntry }) {
  const [expanded, setExpanded] = useState(false)

  return (
    <article className="group relative mb-7">
      {/* Dot */}
      <div className="absolute -left-[34px] top-1.5 h-3 w-3 rounded-full bg-gradient-to-br from-foreground to-primary shadow-[0_0_0_3px_rgba(79,141,253,0.25)]" />

      <button
        onClick={() => setExpanded((v) => !v)}
        className="w-full cursor-pointer text-left md:cursor-default"
        aria-expanded={expanded}
      >
        <div className="flex flex-col justify-between gap-1 sm:flex-row">
          <div>
            <div className="text-[15px] font-semibold text-foreground">{entry.role}</div>
            <div className="text-[13px] text-muted-foreground">{entry.company}</div>
          </div>
          <div className="shrink-0 text-xs text-muted-foreground">{entry.dates}</div>
        </div>
        <div className="mt-1 text-[13px] text-muted-foreground">{entry.summary}</div>
      </button>

      {/* Details: hover on desktop, tap on mobile */}
      <div
        className={`mt-2 overflow-hidden pl-1 transition-all duration-300 ${
          expanded ? "max-h-[300px] opacity-100" : "max-h-0 opacity-0 md:group-hover:max-h-[300px] md:group-hover:opacity-100"
        }`}
      >
        <ul className="list-disc space-y-1 pl-5 text-sm text-muted-foreground">
          {entry.details.map((d, i) => (
            <li key={i}>{d}</li>
          ))}
        </ul>
      </div>
    </article>
  )
}

export function ExperienceSection() {
  return (
    <section id="experience" className="py-16">
      <div className="mx-auto max-w-[760px] px-5">
        <div className="mb-6">
          <h2 className="text-[22px] font-bold text-foreground">Experience</h2>
        </div>

        <div className="relative ml-3.5 border-l-2 border-foreground/20 pl-6">
          {timeline.map((entry, i) => (
            <TimelineItem key={i} entry={entry} />
          ))}
        </div>
      </div>
    </section>
  )
}
