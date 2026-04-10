import Link from "next/link";
import { Check, ArrowRight, X } from "lucide-react";

const included = [
  "3-hour guided food tour in Montmartre",
  "6–8 tastings: wine, cheese, charcuterie, pastries",
  "Expert local guide born in Montmartre",
  "Small group — maximum 8 guests",
  "All food & drinks fully included",
  "Personalised map of hidden gems",
  "Free cancellation up to 48 hours before",
];

const notIncluded = [
  "Hotel pickup / drop-off",
  "Additional restaurant meals",
];

export function Pricing() {
  return (
    <section className="section">
      <div className="container">
        {/* Header */}
        <div className="text-center mb-12">
          <p
            className="text-xs font-500 uppercase tracking-[0.12em] text-[var(--color-charcoal-light)] mb-3"
            style={{ fontFamily: "var(--font-dm-sans)" }}
          >
            Pricing
          </p>
          <h2>
            Simple, Honest Pricing
          </h2>
          <p
            className="text-[var(--color-charcoal-light)] text-lg mt-4 max-w-md mx-auto"
            style={{ fontFamily: "var(--font-dm-sans)" }}
          >
            One tour, everything included. No hidden fees — ever.
          </p>
        </div>

        {/* Pricing card */}
        <div className="max-w-2xl mx-auto card overflow-hidden">
          {/* Top band */}
          <div className="bg-[var(--color-bordeaux)] px-10 py-8 flex flex-col sm:flex-row items-start sm:items-center justify-between gap-6">
            <div>
              <p
                className="text-white/60 text-xs font-500 uppercase tracking-widest mb-1"
                style={{ fontFamily: "var(--font-dm-sans)" }}
              >
                Montmartre Food & Wine Tour
              </p>
              <p
                className="text-white text-xl font-600"
                style={{ fontFamily: "var(--font-dm-sans)" }}
              >
                All-inclusive experience
              </p>
            </div>
            <div className="text-right">
              <div className="flex items-baseline gap-1">
                <span
                  className="text-5xl font-bold text-white leading-none"
                  style={{ fontFamily: "var(--font-playfair)" }}
                >
                  €85
                </span>
                <span
                  className="text-white/60 text-sm"
                  style={{ fontFamily: "var(--font-dm-sans)" }}
                >
                  / person
                </span>
              </div>
              <p
                className="text-[var(--color-gold)] text-xs mt-1"
                style={{ fontFamily: "var(--font-dm-sans)" }}
              >
                All food &amp; drinks included
              </p>
            </div>
          </div>

          {/* Body */}
          <div className="px-10 py-8">
            <div className="grid sm:grid-cols-2 gap-8 mb-8">
              {/* Included */}
              <div>
                <p
                  className="text-xs font-600 uppercase tracking-wider text-[var(--color-sage)] mb-4"
                  style={{ fontFamily: "var(--font-dm-sans)" }}
                >
                  Included
                </p>
                <ul className="space-y-3">
                  {included.map((item) => (
                    <li
                      key={item}
                      className="flex items-start gap-2.5 text-sm text-[var(--color-charcoal)]"
                      style={{ fontFamily: "var(--font-dm-sans)" }}
                    >
                      <Check size={15} className="text-[var(--color-sage)] flex-shrink-0 mt-0.5" />
                      {item}
                    </li>
                  ))}
                </ul>
              </div>

              {/* Not included */}
              <div>
                <p
                  className="text-xs font-600 uppercase tracking-wider text-[var(--color-charcoal-light)] mb-4"
                  style={{ fontFamily: "var(--font-dm-sans)" }}
                >
                  Not included
                </p>
                <ul className="space-y-3">
                  {notIncluded.map((item) => (
                    <li
                      key={item}
                      className="flex items-start gap-2.5 text-sm text-[var(--color-charcoal-light)]"
                      style={{ fontFamily: "var(--font-dm-sans)" }}
                    >
                      <X size={14} className="flex-shrink-0 mt-0.5 opacity-40" />
                      {item}
                    </li>
                  ))}
                </ul>
              </div>
            </div>

            {/* CTA */}
            <Link
              href="/book"
              className="btn-primary w-full justify-center text-base py-4 flex items-center gap-2"
            >
              Book Your Spot
              <ArrowRight size={18} />
            </Link>
            <p
              className="text-center text-xs text-[var(--color-charcoal-light)] mt-3"
              style={{ fontFamily: "var(--font-dm-sans)" }}
            >
              Free cancellation · Secure payment · Instant confirmation
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
