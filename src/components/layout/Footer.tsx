import Link from "next/link";

const footerLinks = {
  Tours: [
    { href: "/food-tour", label: "The Montmartre Tour" },
    { href: "/private-tours", label: "Private & Group Tours" },
    { href: "/book", label: "Book a Tour" },
    { href: "/faq", label: "FAQ" },
  ],
  Discover: [
    { href: "/about", label: "About Us" },
    { href: "/reviews", label: "Reviews" },
    { href: "/blog", label: "Blog" },
    { href: "/contact", label: "Contact" },
  ],
};

export function Footer() {
  return (
    <footer className="bg-[var(--color-charcoal)] text-[var(--color-cream)] mt-auto">
      <div className="container py-16">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-12">
          {/* Brand */}
          <div>
            <span className="font-display text-2xl font-bold text-white">
              French Food Tour
            </span>
            <p className="mt-4 text-sm text-[var(--color-cream-dark)] leading-relaxed max-w-xs">
              Authentic food & wine experiences in the heart of Montmartre, Paris.
              Discover the real French gastronomy with a passionate local guide.
            </p>
            <address className="mt-6 not-italic text-xs text-[var(--color-charcoal-light)] leading-relaxed space-y-1">
              <p>Sacré-Cœur, Montmartre</p>
              <p>Paris 75018, France</p>
              <a href="mailto:frenchfoodtour@gmail.com" className="hover:text-white transition-colors">
                frenchfoodtour@gmail.com
              </a>
            </address>

            <div className="mt-6 flex gap-3">
              <a
                href="https://www.instagram.com/frenchfoodtour"
                target="_blank"
                rel="noopener noreferrer"
                aria-label="French Food Tour on Instagram"
                className="w-8 h-8 rounded-full bg-white/10 hover:bg-[var(--color-gold)] flex items-center justify-center transition-colors group"
              >
                <svg xmlns="http://www.w3.org/2000/svg" width="15" height="15" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="text-[var(--color-cream-dark)] group-hover:text-[var(--color-charcoal)]">
                  <rect width="20" height="20" x="2" y="2" rx="5" ry="5"/><path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z"/><line x1="17.5" x2="17.51" y1="6.5" y2="6.5"/>
                </svg>
              </a>
              <a
                href="https://www.tripadvisor.com/Attraction_Review-frenchfoodtour"
                target="_blank"
                rel="noopener noreferrer"
                aria-label="French Food Tour on TripAdvisor"
                className="w-8 h-8 rounded-full bg-white/10 hover:bg-[var(--color-gold)] flex items-center justify-center transition-colors group"
              >
                <svg xmlns="http://www.w3.org/2000/svg" width="15" height="15" viewBox="0 0 24 24" fill="currentColor" className="text-[var(--color-cream-dark)] group-hover:text-[var(--color-charcoal)]">
                  <path d="M12 2C6.477 2 2 6.477 2 12s4.477 10 10 10 10-4.477 10-10S17.523 2 12 2zm0 4a6 6 0 1 1 0 12A6 6 0 0 1 12 6zm0 2a4 4 0 1 0 0 8 4 4 0 0 0 0-8zm0 1.5a2.5 2.5 0 1 1 0 5 2.5 2.5 0 0 1 0-5z"/>
                </svg>
              </a>
            </div>
          </div>

          {/* Links */}
          {Object.entries(footerLinks).map(([group, links]) => (
            <div key={group}>
              <h3 className="font-sans text-xs font-600 uppercase tracking-widest text-[var(--color-gold)] mb-5">
                {group}
              </h3>
              <ul className="space-y-3">
                {links.map((link) => (
                  <li key={link.href}>
                    <Link
                      href={link.href}
                      className="text-sm text-[var(--color-cream-dark)] hover:text-white transition-colors"
                    >
                      {link.label}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>

        <div className="divider-gold mt-12" />

        <div className="flex flex-col md:flex-row justify-between items-center gap-4 mt-8 text-xs text-[var(--color-charcoal-light)]">
          <p>© {new Date().getFullYear()} French Food Tour. All rights reserved.</p>
          <div className="flex gap-6">
            <Link href="/privacy" className="hover:text-white transition-colors">Privacy Policy</Link>
            <Link href="/terms" className="hover:text-white transition-colors">Terms</Link>
          </div>
        </div>
      </div>
    </footer>
  );
}
