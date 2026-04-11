import Image from "next/image";
import Link from "next/link";
import { Clock, Users, MapPin, Wine, ArrowRight } from "lucide-react";

const stats = [
  { icon: Clock, value: "3 hours", label: "perfectly paced" },
  { icon: Users, value: "Max 10", label: "guests per tour" },
  { icon: Wine, value: "12", label: "food & wine tastings" },
  { icon: MapPin, value: "Montmartre", label: "Paris 18e" },
];

export function TourHighlights() {
  return (
    <section className="section">
      <div className="container">
        <div className="grid lg:grid-cols-2 gap-16 items-center">

          {/* ── Left: stacked images ── */}
          <div className="relative">
            {/* Main image */}
            <div className="relative aspect-[4/5] rounded-[var(--radius-xl)] overflow-hidden">
              <Image
                src="/images/_wp-content_uploads_2025_12_paris-food-tour-guide-wine-tasting-1024x683.webp"
                alt="Local guide wine tasting Paris Montmartre food tour"
                fill
                className="object-cover"
                sizes="(max-width: 1024px) 100vw, 50vw"
              />
            </div>
            {/* Floating second image */}
            <div
              className="absolute -bottom-8 -right-6 w-40 h-52 rounded-[var(--radius-lg)] overflow-hidden border-4 border-white shadow-[var(--shadow-card-hover)]"
              aria-hidden="true"
            >
              <Image
                src="/images/_wp-content_uploads_2025_12_paris-food-tour-french-pastries-montmartre-1-768x1024.webp"
                alt="French pastries Montmartre"
                fill
                className="object-cover"
                sizes="160px"
              />
            </div>
            {/* Floating stat card */}
            <div className="absolute top-6 -left-6 bg-[var(--color-bordeaux)] text-white rounded-[var(--radius-lg)] px-5 py-4 shadow-[var(--shadow-cta)]">
              <p className="text-3xl font-bold leading-none" style={{ fontFamily: "var(--font-playfair)" }}>200+</p>
              <p className="text-xs text-white/70 mt-1" style={{ fontFamily: "var(--font-dm-sans)" }}>happy guests</p>
            </div>
          </div>

          {/* ── Right: content ── */}
          <div>
            <p
              className="text-xs font-500 uppercase tracking-[0.12em] text-[var(--color-charcoal-light)] mb-4"
              style={{ fontFamily: "var(--font-dm-sans)" }}
            >
              The Experience
            </p>

            <h2 className="mb-6">
              One Signature Tour,<br />
              Endless Flavors
            </h2>

            <p
              className="text-lg text-[var(--color-charcoal-light)] leading-relaxed mb-8"
              style={{ fontFamily: "var(--font-dm-sans)" }}
            >
              Walk the streets of Montmartre with a local food professional.
              Every stop is hand-picked, every tasting tells a story — this is the Paris
              you&apos;ve always dreamed of.
            </p>

            {/* Stats grid */}
            <div className="grid grid-cols-2 gap-5 mb-10">
              {stats.map(({ icon: Icon, value, label }) => (
                <div
                  key={value}
                  className="flex items-start gap-3 p-4 rounded-[var(--radius-lg)] bg-[var(--color-cream-dark)]"
                >
                  <div className="w-9 h-9 rounded-[var(--radius-md)] bg-white flex items-center justify-center flex-shrink-0">
                    <Icon size={16} className="text-[var(--color-bordeaux)]" />
                  </div>
                  <div>
                    <p
                      className="text-sm font-600 text-[var(--color-charcoal)] leading-tight"
                      style={{ fontFamily: "var(--font-dm-sans)" }}
                    >
                      {value}
                    </p>
                    <p
                      className="text-xs text-[var(--color-charcoal-light)] mt-0.5"
                      style={{ fontFamily: "var(--font-dm-sans)" }}
                    >
                      {label}
                    </p>
                  </div>
                </div>
              ))}
            </div>

            <Link
              href="/food-tour"
              className="btn-primary inline-flex items-center gap-2"
            >
              See All Tour Details
              <ArrowRight size={18} />
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
}
