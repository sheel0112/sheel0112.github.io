import type { Metadata } from "next"
import Link from "next/link"
import { Info } from "lucide-react"

export const metadata: Metadata = {
  title: "Spending Tracker – Demo Dashboard",
  description: "Interactive demo dashboard for the Stacked personal finance app.",
}

function StatCard({
  title,
  value,
  sub,
  gradient,
  titleColor,
  valueColor,
  subColor,
}: {
  title: string
  value: string
  sub?: string
  gradient: string
  titleColor: string
  valueColor: string
  subColor?: string
}) {
  return (
    <div className="rounded-2xl border border-foreground/20 p-3.5 shadow-[0_16px_40px_rgba(0,0,0,0.6)]" style={{ background: gradient }}>
      <div className="text-[13px] font-medium" style={{ color: titleColor }}>{title}</div>
      <div className="mt-1 text-[26px] font-bold" style={{ color: valueColor }}>{value}</div>
      {sub && <div className="mt-0.5 text-xs" style={{ color: subColor }}>{sub}</div>}
    </div>
  )
}

function QuickAction({ icon, label }: { icon: string; label: string }) {
  return (
    <div className="flex cursor-not-allowed items-center gap-2.5 rounded-2xl border border-foreground/20 bg-gradient-to-br from-foreground/10 to-background/95 p-3.5 opacity-60 shadow-[0_16px_40px_rgba(0,0,0,0.6)] transition-opacity hover:opacity-70">
      <div className="flex h-10 w-10 items-center justify-center rounded-full bg-muted text-lg">{icon}</div>
      <div>
        <div className="text-sm font-semibold text-foreground">{label}</div>
        <div className="text-[11px] text-muted-foreground">Demo mode</div>
      </div>
    </div>
  )
}

function ListCard({ title, items }: { title: string; items: { label: string; value?: string }[] }) {
  return (
    <div className="rounded-2xl border border-foreground/20 bg-gradient-to-br from-foreground/10 to-background/95 p-3.5 shadow-[0_16px_40px_rgba(0,0,0,0.6)]">
      <div className="mb-2 text-[13px] font-medium text-foreground">{title}</div>
      <ul className="space-y-0">
        {items.map((item, i) => (
          <li key={i} className="flex justify-between border-b border-dashed border-muted py-1 text-[13px] text-muted-foreground last:border-b-0">
            <span>{item.label}</span>
            {item.value && <span>{item.value}</span>}
          </li>
        ))}
      </ul>
    </div>
  )
}

export default function SpendingDemoPage() {
  return (
    <>
      {/* App header */}
      <header className="sticky top-0 z-40 border-b border-foreground/15 bg-gradient-to-b from-background/95 to-background/75 backdrop-blur-lg">
        <div className="mx-auto flex max-w-[1120px] items-center justify-between px-5 py-2.5">
          <Link href="/" className="text-lg font-semibold text-foreground/90">Spending Tracker</Link>
          <nav className="flex items-center gap-3">
            <Link href="/" className="text-[13px] text-muted-foreground transition-colors hover:text-foreground">Home</Link>
            <Link href="/#projects" className="text-[13px] text-muted-foreground transition-colors hover:text-foreground">Projects</Link>
            <Link href="/projects/finance-app" className="text-[13px] text-muted-foreground transition-colors hover:text-foreground">Case Study</Link>
          </nav>
        </div>
      </header>

      <main className="mx-auto max-w-[1120px] px-5 py-6 pb-10">
        {/* Demo alert */}
        <div className="mb-6 flex items-start gap-2.5 rounded-xl border border-blue-400/50 bg-blue-600/10 p-3 text-[13px] text-blue-100">
          <Info className="mt-0.5 h-5 w-5 shrink-0 text-blue-400" />
          <div>
            {"You're viewing a demo with sample data. In the live version you'd connect your accounts, upload CSVs, and track real spending."}
          </div>
        </div>

        {/* Hero */}
        <div className="mb-6">
          <h1 className="text-[26px] font-bold text-foreground">Dashboard</h1>
          <p className="text-sm text-muted-foreground">Welcome back, demo user. All figures below are sample values.</p>
        </div>

        {/* Stats */}
        <div className="mb-7 grid gap-4 sm:grid-cols-3">
          <StatCard
            title="Total Transactions"
            value="132"
            gradient="linear-gradient(135deg, rgba(239,246,255,0.08), rgba(219,234,254,0.04))"
            titleColor="#1d4ed8"
            valueColor="#93c5fd"
          />
          <StatCard
            title="Spending This Month"
            value="£2,345.67"
            sub="After refunds"
            gradient="linear-gradient(135deg, rgba(254,242,242,0.08), rgba(254,226,226,0.04))"
            titleColor="#b91c1c"
            valueColor="#fca5a5"
            subColor="#fca5a5"
          />
          <StatCard
            title="Income This Month"
            value="£3,950.00"
            sub="Net: £1,604.33"
            gradient="linear-gradient(135deg, rgba(236,253,243,0.08), rgba(187,247,208,0.04))"
            titleColor="#166534"
            valueColor="#86efac"
            subColor="#16a34a"
          />
        </div>

        {/* Quick actions */}
        <div className="mb-7">
          <h2 className="mb-3 text-lg font-semibold text-foreground">Quick actions</h2>
          <div className="grid grid-cols-2 gap-4 md:grid-cols-4">
            <QuickAction icon="B" label="Banks" />
            <QuickAction icon="U" label="Upload" />
            <QuickAction icon="A" label="Analytics" />
            <QuickAction icon="ML" label="Smart ML" />
          </div>
        </div>

        {/* Spending trends placeholder */}
        <div className="mb-6 rounded-2xl border border-dashed border-foreground/30 bg-background/90 p-4 text-center text-[13px] text-muted-foreground">
          <div className="mb-1 text-sm font-semibold text-foreground">Spending trends (sample)</div>
          <div className="flex h-36 items-center justify-center rounded-xl bg-muted/30">
            {"Line chart placeholder – in the real app this is fully interactive."}
          </div>
        </div>

        {/* Budget allocation */}
        <div className="mb-6 rounded-2xl border border-dashed border-foreground/30 bg-background/90 p-4 text-center text-[13px] text-muted-foreground">
          <div className="mb-1 text-sm font-semibold text-foreground">Budget allocation (sample)</div>
          <p className="mb-3">{"Allocated: £3,000 · Spent: £2,345.67"}</p>
          <div className="flex flex-wrap justify-center gap-2">
            {["Housing · £1,200", "Food · £550", "Transport · £220", "Leisure · £300"].map((t) => (
              <span key={t} className="rounded-full border border-foreground/30 px-2.5 py-0.5 text-[11px] text-foreground">{t}</span>
            ))}
          </div>
        </div>

        {/* Breakdown */}
        <div className="mb-6 grid gap-4 md:grid-cols-2">
          <ListCard
            title="Spending by category (sample)"
            items={[
              { label: "Housing", value: "£1,200 · 51%" },
              { label: "Food & Groceries", value: "£520 · 22%" },
              { label: "Transport", value: "£210 · 9%" },
              { label: "Leisure & Subscriptions", value: "£290 · 12%" },
              { label: "Other", value: "£125 · 6%" },
            ]}
          />
          <ListCard
            title="Income sources (sample)"
            items={[
              { label: "Salary", value: "£3,200 · 81%" },
              { label: "Freelance", value: "£500 · 13%" },
              { label: "Other", value: "£250 · 6%" },
            ]}
          />
        </div>

        {/* Insights row */}
        <div className="mb-6 grid gap-4 md:grid-cols-3">
          <ListCard
            title="Spending insights (sample)"
            items={[
              { label: "Subscriptions are +18% vs last month" },
              { label: "Groceries trending down week-on-week" },
              { label: "Transport is higher than your usual range" },
            ]}
          />
          <ListCard
            title="Top merchants (sample)"
            items={[
              { label: "Supermart", value: "£320" },
              { label: "City Transport", value: "£150" },
              { label: "Streamflix", value: "£39" },
            ]}
          />
          <ListCard
            title="Recent transactions (sample)"
            items={[
              { label: "Supermart – Groceries", value: "£64.20" },
              { label: "City Transport – Travel", value: "£18.40" },
              { label: "Streamflix – Subscriptions", value: "£12.99" },
            ]}
          />
        </div>

        {/* CTA */}
        <div className="rounded-2xl border border-primary/40 bg-gradient-to-br from-primary/15 to-secondary/20 p-7 text-center">
          <h2 className="text-[22px] font-bold text-foreground">Ready to plug in real data?</h2>
          <p className="mt-1 text-sm text-foreground/70">
            In production, this dashboard would be driven by open banking APIs and your own transaction history.
          </p>
          <button className="mt-5 rounded-xl bg-gradient-to-r from-primary to-sky-400 px-5 py-2 text-sm font-semibold text-primary-foreground shadow-[0_10px_25px_rgba(59,130,246,0.5)]">
            Get started in the live app
          </button>
        </div>
      </main>
    </>
  )
}
