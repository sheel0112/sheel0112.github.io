export function ContactSection() {
  return (
    <section id="contact" className="py-16">
      <div className="mx-auto max-w-[760px] px-5">
        <div className="mb-6">
          <h2 className="text-[22px] font-bold text-foreground">Contact</h2>
          <p className="text-sm text-muted-foreground">{"Let's connect and discuss opportunities."}</p>
        </div>

        <div className="rounded-2xl border border-border bg-gradient-to-br from-foreground/10 to-background/95 p-5 shadow-[0_18px_45px_rgba(0,0,0,0.55)]">
          <div className="grid gap-6 sm:grid-cols-2">
            <div>
              <h3 className="mb-2 text-sm uppercase tracking-wider text-muted-foreground">LinkedIn</h3>
              <a
                href="https://www.linkedin.com/in/sam-heel-931513158/?trk=opento_sprofile_topcard"
                target="_blank"
                rel="noopener noreferrer"
                className="text-[15px] text-primary transition-opacity hover:opacity-80"
              >
                linkedin.com/in/samuelheel
              </a>
            </div>
            <div>
              <h3 className="mb-2 text-sm uppercase tracking-wider text-muted-foreground">Location</h3>
              <p className="text-[15px] text-foreground">London, UK</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
