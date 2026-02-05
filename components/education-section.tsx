export function EducationSection() {
  return (
    <section
      id="education"
      className="py-16"
      style={{
        background: "linear-gradient(to bottom, rgba(15,23,42,0.9), hsl(230 50% 3%))",
      }}
    >
      <div className="mx-auto max-w-[760px] px-5">
        <div className="mb-6">
          <h2 className="text-[22px] font-bold text-foreground">{"Education & Certifications"}</h2>
          <p className="text-sm text-muted-foreground">Academic background and professional development.</p>
        </div>

        <div className="grid gap-5 md:grid-cols-2">
          {/* Education */}
          <div className="rounded-2xl border border-border bg-gradient-to-br from-foreground/10 to-background/95 p-5 shadow-[0_18px_45px_rgba(0,0,0,0.55)]">
            <h3 className="mb-4 text-base font-semibold text-foreground">Education</h3>

            <div className="mb-4">
              <div className="text-[15px] font-semibold text-foreground">
                MSc Applied Sports Performance Analysis
              </div>
              <div className="mt-0.5 text-[13px] text-muted-foreground">
                {"University of Worcester · 2018 – 2019"}
              </div>
            </div>

            <div>
              <div className="text-[15px] font-semibold text-foreground">
                BSc Sports and Exercise Science (2:1)
              </div>
              <div className="mt-0.5 text-[13px] text-muted-foreground">
                {"University of Gloucestershire · 2015 – 2018"}
              </div>
            </div>
          </div>

          {/* Certifications */}
          <div className="rounded-2xl border border-border bg-gradient-to-br from-foreground/10 to-background/95 p-5 shadow-[0_18px_45px_rgba(0,0,0,0.55)]">
            <h3 className="mb-4 text-base font-semibold text-foreground">Certifications</h3>

            <div className="mb-3">
              <div className="text-sm font-semibold text-foreground">Certified Scrum Product Owner</div>
              <div className="text-xs text-muted-foreground">{"Scrum Alliance · 2024"}</div>
            </div>

            <div className="mb-4">
              <div className="text-sm font-semibold text-foreground">Introduction to Risk Management</div>
              <div className="text-xs text-muted-foreground">{"CFI via Coursera · 2025"}</div>
            </div>

            <div className="border-t border-border pt-3">
              <h4 className="mb-2 text-[13px] uppercase tracking-wide text-muted-foreground">Technical Skills</h4>
              <p className="text-[13px] leading-relaxed text-muted-foreground">
                {"Excel (VBA) · SQL/MySQL · Python · Data Visualisation · Jira · Confluence · Figma"}
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
