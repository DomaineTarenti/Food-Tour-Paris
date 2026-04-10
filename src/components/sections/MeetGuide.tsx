import Image from "next/image";
import Link from "next/link";
import { ArrowRight } from "lucide-react";

export function MeetGuide() {
  return (
    <section className="section bg-[var(--color-charcoal)] text-white overflow-hidden">
      <div className="container">
        <div className="grid lg:grid-cols-2 gap-16 items-center">
          {/* ── Image side ── */}
          <div className="relative order-2 lg:order-1">
            <div className="relative aspect-[3/4] rounded-[var(--radius-xl)] overflow-hidden max-w-sm mx-auto lg:mx-0">
              <Image
                src="/images/_wp-content_uploads_2025_12_authentic-paris-food-tour-local-guide-1-scaled.webp"
                alt="French Food Tour local guide Montmartre Paris"
                fill
                className="object-cover object-top"
                sizes="(max-width: 1024px) 80vw, 40vw"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-[var(--color-charcoal)]/40 to-transparent" />
            </div>
            {/* Floating quote */}
            <div className="absolute -bottom-4 -right-4 lg:right-4 bg-[var(--color-bordeaux)] rounded-[var(--radius-lg)] p-5 max-w-[220px] shadow-[var(--shadow-cta)]">
              <p
                className="text-sm text-white/90 leading-relaxed"
                style={{ fontFamily: "var(--font-cormorant)", fontStyle: "italic", fontSize: "1rem" }}
              >
                "Food is the language Paris speaks best."
              </p>
            </div>
          </div>

          {/* ── Text side ── */}
          <div className="order-1 lg:order-2">
            <p
              className="text-xs font-500 uppercase tracking-[0.12em] text-[var(--color-gold)] mb-4"
              style={{ fontFamily: "var(--font-dm-sans)" }}
            >
              Your Guide
            </p>

            <h2 className="text-white mb-6">
              Born &amp; Raised<br />
              in Montmartre
            </h2>

            <p
              className="text-white/70 text-lg leading-relaxed mb-5"
              style={{ fontFamily: "var(--font-dm-sans)" }}
            >
              I grew up in these streets — the smell of fresh bread in the morning,
              the sound of a cork being pulled in the evening. Montmartre shaped how
              I think about food, community, and life.
            </p>

            <p
              className="text-white/60 leading-relaxed mb-10"
              style={{ fontFamily: "var(--font-dm-sans)" }}
            >
              After years of watching tourists rush past the most extraordinary little
              shops in my neighborhood, I created the tour I always wished existed:
              small, intimate, deeply genuine — and absolutely delicious. Every stop
              on this tour is somewhere I&apos;d bring my own family.
            </p>

            {/* Credentials */}
            <div className="grid grid-cols-3 gap-4 mb-10">
              {[
                { value: "8+", label: "Years guiding" },
                { value: "200+", label: "Guests hosted" },
                { value: "4.9★", label: "Average rating" },
              ].map(({ value, label }) => (
                <div key={label} className="text-center p-4 rounded-[var(--radius-lg)] bg-white/5 border border-white/10">
                  <p
                    className="text-2xl font-bold text-[var(--color-gold)] leading-none mb-1"
                    style={{ fontFamily: "var(--font-playfair)" }}
                  >
                    {value}
                  </p>
                  <p
                    className="text-xs text-white/50"
                    style={{ fontFamily: "var(--font-dm-sans)" }}
                  >
                    {label}
                  </p>
                </div>
              ))}
            </div>

            <Link
              href="/about"
              className="inline-flex items-center gap-2 text-[var(--color-gold)] font-600 text-sm hover:text-[var(--color-gold-light)] transition-colors"
              style={{ fontFamily: "var(--font-dm-sans)" }}
            >
              Read the full story
              <ArrowRight size={16} />
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
}
