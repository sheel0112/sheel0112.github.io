import Link from "next/link"

export function ProjectHeader() {
  return (
    <header className="sticky top-0 z-50 backdrop-blur-lg bg-gradient-to-b from-background/95 to-background/80 border-b border-foreground/10">
      <div className="mx-auto flex max-w-[1080px] items-center justify-between px-5 py-3.5">
        <Link href="/" className="text-[13px] font-semibold uppercase tracking-wider text-foreground">
          Samuel Heel
        </Link>
        <nav className="flex items-center gap-3.5">
          <Link
            href="/#home"
            className="rounded-full px-3 py-1.5 text-[13px] text-muted-foreground transition-colors hover:bg-foreground/10 hover:text-foreground"
          >
            Home
          </Link>
          <Link
            href="/#projects"
            className="rounded-full bg-primary/20 px-3 py-1.5 text-[13px] text-foreground"
          >
            Projects
          </Link>
          <Link
            href="/#contact"
            className="rounded-full px-3 py-1.5 text-[13px] text-muted-foreground transition-colors hover:bg-foreground/10 hover:text-foreground"
          >
            Contact
          </Link>
        </nav>
      </div>
    </header>
  )
}

export function ProjectFooter() {
  return (
    <footer className="border-t border-foreground/10 py-8 text-center text-[13px] text-muted-foreground">
      <div className="mx-auto max-w-[1080px] px-5">
        <p>{"© "}{new Date().getFullYear()}{" Samuel Heel. All rights reserved."}</p>
      </div>
    </footer>
  )
}
