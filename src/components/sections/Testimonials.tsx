import Link from "next/link";
import { Star } from "lucide-react";

const featured = {
  name: "Danielle R.",
  country: "Viator · Apr 2026",
  rating: 5,
  text: "Probably our favorite experience while in Paris! Imran is a hospitality expert and a great guide. He brought us to local shops like the butcher, seafood shop, cheese shop, and the chocolatier — we experienced the area not as tourists but like we lived there. The tour culminated at a restaurant where we feasted on everything he had gathered, paired with really nice French wines. My husband and I ended up coming back to Montmartre a few days later and went back to the same restaurant. Don't hesitate to book this experience, it is worth every penny!",
  tour: "Montmartre Food Tour",
  avatar: "DR",
};

const others = [
  {
    name: "Catherine G.",
    country: "Viator · Apr 2026",
    rating: 5,
    text: "We had such a wonderful experience. Imrane was so knowledgeable about the local cuisine and offered so much insight into the history of the neighborhood. This tour included more than a full meal. Imrane was so much fun to talk to — he made us feel like we were old friends. We highly recommend this experience.",
    avatar: "CG",
  },
  {
    name: "Robert M.",
    country: "Viator · Apr 2026",
    rating: 5,
    text: "BEST food tour. We've been on multiple food tours and this was easily the best. Wonderful selection of a LOT of items and a LOT of variety. Includes wine. Guide is very knowledgeable about the food and restaurant industry in Paris and has contacts with some of the best food sources. Choose this one!",
    avatar: "RM",
  },
  {
    name: "William C.",
    country: "Viator · Apr 2026",
    rating: 5,
    text: "Of the five European food tours we've taken over the years this was by far the best. We had a large variety of delicious foods. Our guide was friendly and quite knowledgeable about the sourcing, preparation, and history of the foods and wines he served. I recommend this tour without reservation.",
    avatar: "WC",
  },
];

function Stars({ count = 5, size = 14 }: { count?: number; size?: number }) {
  return (
    <div className="flex gap-0.5">
      {[...Array(count)].map((_, i) => (
        <Star key={i} size={size} className="fill-[var(--color-gold)] text-[var(--color-gold)]" />
      ))}
    </div>
  );
}

export function Testimonials() {
  return (
    <section className="section-alt">
      <div className="container">
        {/* Header */}
        <div className="text-center mb-12">
          <p
            className="text-xs font-500 uppercase tracking-[0.12em] text-[var(--color-charcoal-light)] mb-3"
            style={{ fontFamily: "var(--font-dm-sans)" }}
          >
            Guest Reviews
          </p>
          <h2 className="mb-3">What Our Guests Say</h2>
          <div className="flex items-center justify-center gap-2">
            <Stars size={18} />
            <span
              className="text-[var(--color-charcoal-light)] text-sm"
              style={{ fontFamily: "var(--font-dm-sans)" }}
            >
              5 / 5 average &nbsp;·&nbsp; 70+ verified reviews
            </span>
          </div>
        </div>

        {/* Featured review */}
        <div className="card p-10 mb-6 relative overflow-hidden">
          {/* Big decorative quote */}
          <span
            className="absolute top-4 right-8 text-[120px] leading-none text-[var(--color-cream-dark)] select-none pointer-events-none"
            aria-hidden="true"
            style={{ fontFamily: "var(--font-cormorant)" }}
          >
            "
          </span>

          <Stars size={20} />
          <blockquote
            className="relative z-10 text-base text-[var(--color-charcoal)] leading-relaxed mt-5 mb-7 max-w-2xl border-0 p-0 m-0 not-italic"
            style={{ fontFamily: "var(--font-dm-sans)" }}
          >
            "{featured.text}"
          </blockquote>
          <div className="flex items-center gap-4">
            <div className="w-11 h-11 rounded-full bg-[var(--color-bordeaux)] text-white flex items-center justify-center text-sm font-600" style={{ fontFamily: "var(--font-dm-sans)" }}>
              {featured.avatar}
            </div>
            <div>
              <p className="font-600 text-[var(--color-charcoal)] text-sm" style={{ fontFamily: "var(--font-dm-sans)" }}>
                {featured.name}
              </p>
              <p className="text-xs text-[var(--color-charcoal-light)]" style={{ fontFamily: "var(--font-dm-sans)" }}>
                {featured.country} &nbsp;·&nbsp; {featured.tour}
              </p>
            </div>
          </div>
        </div>

        {/* Secondary reviews grid */}
        <div className="grid md:grid-cols-3 gap-5 mb-8">
          {others.map((r) => (
            <div key={r.name} className="card p-6 flex flex-col gap-4">
              <Stars />
              <blockquote
                className="text-sm text-[var(--color-charcoal)] leading-relaxed flex-1 border-0 p-0 m-0 not-italic"
                style={{ fontFamily: "var(--font-dm-sans)" }}
              >
                "{r.text}"
              </blockquote>
              <div className="flex items-center gap-3 pt-2 border-t border-[var(--color-cream-dark)]">
                <div className="w-8 h-8 rounded-full bg-[var(--color-cream-dark)] text-[var(--color-charcoal-light)] flex items-center justify-center text-xs font-600" style={{ fontFamily: "var(--font-dm-sans)" }}>
                  {r.avatar}
                </div>
                <div>
                  <p className="text-xs font-600 text-[var(--color-charcoal)]" style={{ fontFamily: "var(--font-dm-sans)" }}>{r.name}</p>
                  <p className="text-[10px] text-[var(--color-charcoal-light)]" style={{ fontFamily: "var(--font-dm-sans)" }}>{r.country}</p>
                </div>
              </div>
            </div>
          ))}
        </div>
        <div className="text-center">
          <Link
            href="/reviews"
            className="text-sm text-[var(--color-bordeaux)] font-600 hover:underline"
            style={{ fontFamily: "var(--font-dm-sans)" }}
          >
            Read all 70+ reviews →
          </Link>
        </div>
      </div>
    </section>
  );
}
