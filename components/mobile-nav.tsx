"use client"

import { Home, User, Layers, Box, Mail } from "lucide-react"
import { useEffect, useState, useRef } from "react"

const navItems = [
  { label: "Home", href: "#home", icon: Home },
  { label: "About", href: "#about", icon: User },
  { label: "Experience", href: "#experience", icon: Layers },
  { label: "Projects", href: "#projects", icon: Box },
  { label: "Contact", href: "#contact", icon: Mail },
]

export function MobileNav() {
  const [active, setActive] = useState("home")
  const [visible, setVisible] = useState(true)
  const lastScroll = useRef(0)

  useEffect(() => {
    const sections = document.querySelectorAll("section[id]")

    function onScroll() {
      const currentScroll = window.scrollY

      // scroll spy
      let current = ""
      sections.forEach((section) => {
        const top = (section as HTMLElement).offsetTop - 100
        if (currentScroll >= top) {
          current = section.getAttribute("id") || ""
        }
      })
      if (current) setActive(current)

      // auto hide/show
      if (currentScroll > lastScroll.current && currentScroll > 120) {
        setVisible(false)
      } else {
        setVisible(true)
      }
      lastScroll.current = currentScroll
    }

    window.addEventListener("scroll", onScroll, { passive: true })
    return () => window.removeEventListener("scroll", onScroll)
  }, [])

  return (
    <nav
      className={`fixed bottom-4 left-1/2 z-[100] flex -translate-x-1/2 gap-6 rounded-[40px] border border-foreground/15 bg-background/70 px-5 py-2.5 shadow-2xl backdrop-blur-xl transition-all duration-300 md:hidden ${
        visible ? "translate-y-0 opacity-100" : "translate-y-5 opacity-0"
      }`}
      style={{ paddingBottom: "calc(0.625rem + env(safe-area-inset-bottom, 0px))" }}
    >
      {navItems.map((item) => {
        const Icon = item.icon
        return (
          <a
            key={item.href}
            href={item.href}
            className={`flex flex-col items-center text-[10px] transition-colors ${
              active === item.href.slice(1) ? "text-foreground" : "text-muted-foreground"
            }`}
          >
            <Icon className="h-5 w-5 stroke-foreground" />
            <span>{item.label}</span>
          </a>
        )
      })}
    </nav>
  )
}
