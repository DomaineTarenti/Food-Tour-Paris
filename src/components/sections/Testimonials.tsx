import { Star } from "lucide-react";

const featured = {
  name: "Sarah M.",
  country: "🇺🇸 New York, USA",
  rating: 5,
  text: "Absolutely the best thing we did in Paris. Our guide knew every hidden gem in Montmartre — the wine, the cheese, the stories. I've already recommended it to everyone I know. Don't miss this.",
  tour: "Montmartre Food & Wine Tour",
  avatar: "SM",
};

const others = [
  {
    name: "Thomas K.",
    country: "🇩🇪 Berlin, Germany",
    rating: 5,
    text: "Perfect balance of food, history, and storytelling. Small group meant we got personal attention. Worth every euro — book it without hesitation.",
    avatar: "TK",
  },
  {
    name: "Camille D.",
    country: "🇨🇦 Montreal, Canada",
    rating: 5,
    text: "I've done food tours in five cities. This one tops them all. The pastries, the natural wine, the guide — it felt genuine, not touristy at all.",
    avatar: "CD",
  },
  {
    name: "James & Lucy",
    country: "🇬🇧 London, UK",
    rating: 5,
    text: "We did this for our anniversary. Three hours of pure happiness. The secret terrace at the end was jaw-dropping. Already planning to come back.",
    avatar: "JL",
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
              4.9 / 5 average &nbsp;·&nbsp; 200+ verified reviews
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
            className="relative z-10 text-xl text-[var(--color-charcoal)] leading-relaxed mt-5 mb-7 max-w-2xl border-0 p-0 m-0 not-italic"
            style={{ fontFamily: "var(--font-cormorant)", fontStyle: "italic", fontSize: "1.25rem" }}
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
        <div className="grid md:grid-cols-3 gap-5">
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
      </div>
    </section>
  );
}
