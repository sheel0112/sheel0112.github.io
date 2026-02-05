"use client"

import Link from "next/link"
import { useEffect, useState } from "react"

const navItems = [
  { label: "Home", href: "#home" },
  { label: "About", href: "#about" },
  { label: "Experience", href: "#experience" },
  { label: "Projects", href: "#projects" },
  { label: "Contact", href: "#contact" },
]

export function SiteHeader() {
  const [active, setActive] = useState("home")

  useEffect(() => {
    const sections = document.querySelectorAll("section[id]")

    function onScroll() {
      let current = ""
      sections.forEach((section) => {
        const top = (section as HTMLElement).offsetTop - 100
        if (window.scrollY >= top) {
          current = section.getAttribute("id") || ""
        }
      })
      if (current) setActive(current)
    }

    window.addEventListener("scroll", onScroll, { passive: true })
    return () => window.removeEventListener("scroll", onScroll)
  }, [])

  return (
    <header className="sticky top-0 z-50 backdrop-blur-lg bg-gradient-to-b from-background/95 to-background/80 border-b border-foreground/10">
      <div className="mx-auto flex max-w-[1080px] items-center justify-between px-5 py-3.5">
        <Link href="/" className="text-[13px] font-semibold uppercase tracking-wider text-foreground">
          Samuel Heel
        </Link>
        <nav className="hidden items-center gap-3.5 md:flex">
          {navItems.map((item) => (
            <a
              key={item.href}
              href={item.href}
              className={`rounded-full px-3 py-1.5 text-[13px] transition-colors ${
                active === item.href.slice(1)
                  ? "bg-primary/20 text-foreground"
                  : "text-muted-foreground hover:bg-foreground/10 hover:text-foreground"
              }`}
            >
              {item.label}
            </a>
          ))}
        </nav>
      </div>
    </header>
  )
}
