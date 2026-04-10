import Link from "next/link";

const footerLinks = {
  Tours: [
    { href: "/food-tour", label: "The Montmartre Tour" },
    { href: "/book", label: "Book a Tour" },
    { href: "/faq", label: "FAQ" },
  ],
  Discover: [
    { href: "/about", label: "About Us" },
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
            <p className="mt-6 text-xs text-[var(--color-charcoal-light)] uppercase tracking-widest">
              Paris, France
            </p>
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
