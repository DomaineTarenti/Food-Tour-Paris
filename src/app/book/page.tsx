import type { Metadata } from "next";
import { Header } from "@/components/layout/Header";
import { Footer } from "@/components/layout/Footer";
import { BokunButton } from "@/components/ui/BokunButton";
import { Check, Star } from "lucide-react";

export const metadata: Metadata = {
  title: "Book Your Paris Food Tour — Reserve Your Spot",
  description:
    "Reserve your spot on the Montmartre Food & Wine Tour. Small groups, all-inclusive, free cancellation up to 48h. Select your date and book in seconds.",
  alternates: { canonical: "https://www.frenchfoodtour.com/book" },
};

const included = [
  "3-hour guided food tour in Montmartre",
  "6–8 tastings: wine, cheese, pastries & more",
  "Expert local guide — born in Montmartre",
  "Small group (max 8 guests)",
  "All food & drinks fully included",
  "Free cancellation up to 48 hours",
];

export default function BookPage() {
  return (
    <>
      <Header />
      <main className="pt-20">
        <section className="section">
          <div className="container max-w-4xl mx-auto">

            {/* Header */}
            <div className="text-center mb-12">
              <p
                className="text-xs font-500 uppercase tracking-[0.12em] text-[var(--color-charcoal-light)] mb-3"
                style={{ fontFamily: "var(--font-dm-sans)" }}
              >
                Book Your Tour
              </p>
              <h1 className="mb-4">Reserve Your Spot<br />in Montmartre</h1>
              <div className="flex items-center justify-center gap-2">
                <div className="flex gap-0.5">
                  {[...Array(5)].map((_, i) => (
                    <Star key={i} size={16} className="fill-[var(--color-gold)] text-[var(--color-gold)]" />
                  ))}
                </div>
                <span
                  className="text-sm text-[var(--color-charcoal-light)]"
                  style={{ fontFamily: "var(--font-dm-sans)" }}
                >
                  4.9 / 5 · 200+ verified reviews
                </span>
              </div>
            </div>

            {/* Main grid */}
            <div className="grid lg:grid-cols-3 gap-10">

              {/* ── Bokun widget ── */}
              <div className="lg:col-span-2 card p-10">
                <div className="flex items-start justify-between gap-4 mb-8 pb-8 border-b border-[var(--color-cream-dark)]">
                  <div>
                    <h2
                      className="text-xl font-600 text-[var(--color-charcoal)] mb-1"
                      style={{ fontFamily: "var(--font-dm-sans)" }}
                    >
                      Montmartre Food & Wine Tour
                    </h2>
                    <p
                      className="text-sm text-[var(--color-charcoal-light)]"
                      style={{ fontFamily: "var(--font-dm-sans)" }}
                    >
                      3 hours · All-inclusive · Max 8 guests
                    </p>
                  </div>
                  <div className="text-right flex-shrink-0">
                    <p
                      className="text-4xl font-bold text-[var(--color-bordeaux)] leading-none"
                      style={{ fontFamily: "var(--font-playfair)" }}
                    >
                      €85
                    </p>
                    <p
                      className="text-xs text-[var(--color-charcoal-light)] mt-1"
                      style={{ fontFamily: "var(--font-dm-sans)" }}
                    >
                      per person
                    </p>
                  </div>
                </div>

                {/* Bokun button — the real booking CTA */}
                <div className="flex flex-col items-center gap-4">
                  <BokunButton
                    label="Check Availability & Book"
                    size="lg"
                    className="w-full justify-center"
                  />
                  <p
                    className="text-xs text-[var(--color-charcoal-light)] text-center"
                    style={{ fontFamily: "var(--font-dm-sans)" }}
                  >
                    Secure payment · Instant confirmation · Free cancellation up to 48h
                  </p>
                </div>

                {/* What happens next */}
                <div className="mt-10 pt-8 border-t border-[var(--color-cream-dark)]">
                  <p
                    className="text-xs font-600 uppercase tracking-wider text-[var(--color-charcoal-light)] mb-4"
                    style={{ fontFamily: "var(--font-dm-sans)" }}
                  >
                    What happens next
                  </p>
                  <ol className="space-y-3">
                    {[
                      "Select your date and number of guests",
                      "Complete secure payment via Bokun",
                      "Receive instant confirmation by email",
                      "Get meeting point details 24h before your tour",
                    ].map((step, i) => (
                      <li
                        key={i}
                        className="flex items-start gap-3 text-sm text-[var(--color-charcoal-light)]"
                        style={{ fontFamily: "var(--font-dm-sans)" }}
                      >
                        <span className="flex-shrink-0 w-5 h-5 rounded-full bg-[var(--color-bordeaux)] text-white text-[10px] font-600 flex items-center justify-center mt-0.5">
                          {i + 1}
                        </span>
                        {step}
                      </li>
                    ))}
                  </ol>
                </div>
              </div>

              {/* ── Sidebar ── */}
              <div className="space-y-5">
                {/* What's included */}
                <div className="card p-6">
                  <p
                    className="text-xs font-600 uppercase tracking-wider text-[var(--color-gold)] mb-4"
                    style={{ fontFamily: "var(--font-dm-sans)" }}
                  >
                    What&apos;s included
                  </p>
                  <ul className="space-y-2.5">
                    {included.map((item) => (
                      <li
                        key={item}
                        className="flex items-start gap-2.5 text-sm text-[var(--color-charcoal)]"
                        style={{ fontFamily: "var(--font-dm-sans)" }}
                      >
                        <Check size={14} className="text-[var(--color-sage)] flex-shrink-0 mt-0.5" />
                        {item}
                      </li>
                    ))}
                  </ul>
                </div>

                {/* Meeting point */}
                <div className="card p-6 bg-[var(--color-bordeaux-dark)] text-white">
                  <p
                    className="text-xs font-500 uppercase tracking-wider text-[var(--color-gold)] mb-3"
                    style={{ fontFamily: "var(--font-dm-sans)" }}
                  >
                    Meeting Point
                  </p>
                  <p
                    className="text-sm leading-relaxed text-white/80"
                    style={{ fontFamily: "var(--font-dm-sans)" }}
                  >
                    Sacré-Cœur Basilica steps<br />
                    Montmartre, Paris 18e<br />
                    <span className="text-white/50 text-xs mt-1 block">
                      Exact details sent by email after booking
                    </span>
                  </p>
                </div>

                {/* Cancellation */}
                <div className="card p-6 border-2 border-[var(--color-sage-light)]">
                  <p
                    className="text-xs font-600 uppercase tracking-wider text-[var(--color-sage)] mb-2"
                    style={{ fontFamily: "var(--font-dm-sans)" }}
                  >
                    Free Cancellation
                  </p>
                  <p
                    className="text-sm text-[var(--color-charcoal-light)] leading-relaxed"
                    style={{ fontFamily: "var(--font-dm-sans)" }}
                  >
                    Cancel up to 48 hours before your tour for a full refund — no questions asked.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </>
  );
}
