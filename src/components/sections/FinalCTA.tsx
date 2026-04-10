import Image from "next/image";
import Link from "next/link";
import { ArrowRight, Star } from "lucide-react";

export function FinalCTA() {
  return (
    <section className="relative py-28 overflow-hidden">
      {/* Background */}
      <div className="absolute inset-0 z-0">
        <Image
          src="/images/_wp-content_uploads_2025_12_ouple-enjoying-wine-paris-food-tour-1024x512.webp"
          alt="Couple enjoying wine on the Paris food tour"
          fill
          className="object-cover"
          sizes="100vw"
        />
        <div className="absolute inset-0 bg-[var(--color-bordeaux-dark)]/85" />
      </div>

      {/* Content */}
      <div className="container relative z-10 text-center">
        <div className="max-w-2xl mx-auto">
          {/* Stars */}
          <div className="flex justify-center gap-1 mb-6">
            {[...Array(5)].map((_, i) => (
              <Star key={i} size={22} className="fill-[var(--color-gold)] text-[var(--color-gold)]" />
            ))}
          </div>

          <h2
            className="text-white mb-5 text-4xl md:text-5xl"
            style={{ fontFamily: "var(--font-playfair)" }}
          >
            Ready to Taste<br />the Real Paris?
          </h2>

          <p
            className="text-white/75 text-lg mb-10 max-w-md mx-auto leading-relaxed"
            style={{ fontFamily: "var(--font-dm-sans)" }}
          >
            Spots fill up fast. Join 200+ guests who&apos;ve already discovered
            Montmartre&apos;s best-kept edible secrets.
          </p>

          {/* CTAs */}
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link
              href="/book"
              className="inline-flex items-center justify-center gap-2 px-10 py-4 rounded-full bg-[var(--color-gold)] text-[var(--color-charcoal)] font-600 text-base hover:bg-[var(--color-gold-light)] transition-all hover:shadow-[0_4px_24px_rgba(201,168,76,0.5)] hover:-translate-y-0.5"
              style={{ fontFamily: "var(--font-dm-sans)" }}
            >
              Book Now — €85/person
              <ArrowRight size={18} />
            </Link>
            <Link
              href="/food-tour"
              className="inline-flex items-center justify-center gap-2 px-10 py-4 rounded-full border-2 border-white/40 text-white font-600 text-base hover:bg-white/10 transition-colors"
              style={{ fontFamily: "var(--font-dm-sans)" }}
            >
              Learn More
            </Link>
          </div>

          {/* Trust line */}
          <p
            className="text-white/40 text-xs mt-8 tracking-wide"
            style={{ fontFamily: "var(--font-dm-sans)" }}
          >
            Free cancellation · Secure payment · Instant confirmation
          </p>
        </div>
      </div>
    </section>
  );
}
