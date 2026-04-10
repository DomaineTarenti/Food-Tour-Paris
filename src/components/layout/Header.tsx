"use client";

import { useState, useEffect } from "react";
import Link from "next/link";
import Image from "next/image";
import { Menu, X } from "lucide-react";
import { Button } from "@/components/ui/Button";

const navLinks = [
  { href: "/", label: "Home" },
  { href: "/food-tour", label: "The Tour" },
  { href: "/about", label: "About" },
  { href: "/faq", label: "FAQ" },
  { href: "/blog", label: "Blog" },
];

export function Header() {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 20);
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <header
      className={[
        "fixed top-0 left-0 right-0 z-50 transition-all duration-300",
        scrolled
          ? "bg-[var(--color-cream)] shadow-[0_2px_20px_rgba(44,24,16,0.1)]"
          : "bg-transparent",
      ].join(" ")}
    >
      <div className="container flex items-center justify-between h-20">
        {/* Logo */}
        <Link href="/" className="flex items-center gap-3 focus-visible:outline-none">
          <span
            className={[
              "font-display text-xl font-bold leading-tight transition-colors duration-300",
              scrolled ? "text-[var(--color-bordeaux-dark)]" : "text-[var(--color-cream)]",
            ].join(" ")}
          >
            French<br />
            <span className={scrolled ? "text-[var(--color-bordeaux)]" : "text-[var(--color-gold)]"}>
              Food Tour
            </span>
          </span>
        </Link>

        {/* Desktop nav */}
        <nav className="hidden md:flex items-center gap-8" aria-label="Main navigation">
          {navLinks.map((link) => (
            <Link
              key={link.href}
              href={link.href}
              className={[
                "font-sans text-sm font-500 transition-colors duration-300 relative group",
                scrolled
                  ? "text-[var(--color-charcoal)] hover:text-[var(--color-bordeaux)]"
                  : "text-[var(--color-cream)] hover:text-[var(--color-gold)]",
              ].join(" ")}
            >
              {link.label}
              <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-[var(--color-gold)] transition-all duration-300 group-hover:w-full" />
            </Link>
          ))}
        </nav>

        {/* CTA */}
        <div className="hidden md:block">
          <Button
            href="/book"
            size="sm"
            style={
              !scrolled
                ? { borderColor: "var(--color-cream)", color: "var(--color-cream)", background: "transparent" }
                : undefined
            }
          >
            Book Now
          </Button>
        </div>

        {/* Mobile menu toggle */}
        <button
          className={[
            "md:hidden p-2 transition-colors duration-300",
            scrolled ? "text-[var(--color-charcoal)]" : "text-[var(--color-cream)]",
          ].join(" ")}
          onClick={() => setIsOpen(!isOpen)}
          aria-label={isOpen ? "Close menu" : "Open menu"}
          aria-expanded={isOpen}
        >
          {isOpen ? <X size={24} /> : <Menu size={24} />}
        </button>
      </div>

      {/* Mobile menu */}
      {isOpen && (
        <div className="md:hidden bg-[var(--color-cream)] border-t border-[var(--color-cream-dark)] px-6 py-6 flex flex-col gap-5">
          {navLinks.map((link) => (
            <Link
              key={link.href}
              href={link.href}
              className="font-sans font-500 text-[var(--color-charcoal)] hover:text-[var(--color-bordeaux)] transition-colors text-lg"
              onClick={() => setIsOpen(false)}
            >
              {link.label}
            </Link>
          ))}
          <Button href="/book" className="mt-2 self-start">
            Book Now
          </Button>
        </div>
      )}
    </header>
  );
}
