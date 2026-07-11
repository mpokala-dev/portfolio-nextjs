"use client"

import { useState, useEffect } from "react"
import Link from "next/link"
import { navLinks, personalInfo } from "@/lib/data"

// Navbar stays "use client" only for the scroll + mobile menu state
export const Navbar = () => {
  const [scrolled, setScrolled] = useState(false)
  const [menuOpen, setMenuOpen] = useState(false)

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 20)
    window.addEventListener("scroll", handleScroll)
    return () => window.removeEventListener("scroll", handleScroll)
  }, [])

  return (
    <nav
      className="fixed top-0 w-full z-50 transition-all duration-300"
      style={{
        background: scrolled ? "rgba(245,240,232,0.95)" : "transparent",
        backdropFilter: scrolled ? "blur(8px)" : "none",
        borderBottom: scrolled ? "1px solid var(--cream-border)" : "none",
      }}
    >
      <div className="max-w-6xl mx-auto px-6 py-4 flex items-center justify-between">
        <Link href="/" className="text-xl font-bold" style={{ color: "var(--rust)" }}>
          MP<span style={{ color: "var(--brown-deep)" }}>.</span>
        </Link>

        <div className="hidden md:flex items-center gap-8">
          {navLinks.map((link) => (
            <Link key={link.label} href={link.href} className="nav-link text-sm font-medium">
              {link.label}
            </Link>
          ))}
          <a
            href={personalInfo.github}
            target="_blank"
            rel="noopener noreferrer"
            className="hover-bg-rust text-sm font-medium px-4 py-2 rounded-lg transition-colors"
            style={{ background: "var(--rust)", color: "#fff" }}
          >
            GitHub
          </a>
        </div>

        <button
          className="md:hidden"
          style={{ color: "var(--brown-mid)" }}
          onClick={() => setMenuOpen(!menuOpen)}
        >
          <svg className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
            {menuOpen
              ? <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
              : <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
            }
          </svg>
        </button>
      </div>

      {menuOpen && (
        <div className="md:hidden px-6 py-4 flex flex-col gap-4"
          style={{ background: "var(--cream)", borderTop: "1px solid var(--cream-border)" }}>
          {navLinks.map((link) => (
            <Link key={link.label} href={link.href} className="nav-link text-sm font-medium"
              onClick={() => setMenuOpen(false)}>
              {link.label}
            </Link>
          ))}
        </div>
      )}
    </nav>
  )
}
