import type { Metadata } from "next";
import Link from "next/link";
import { Header } from "@/components/layout/Header";
import { Footer } from "@/components/layout/Footer";
import { Button } from "@/components/ui/Button";
import { Badge } from "@/components/ui/Badge";
import { Star, ArrowRight, ExternalLink } from "lucide-react";

export const metadata: Metadata = {
  title: "Reviews — French Food Tour Paris | Verified Guest Reviews",
  description:
    "Read verified guest reviews for French Food Tour Paris. 4.9/5 average across Viator, TripAdvisor and Google. 70+ five-star reviews for our Montmartre food tour.",
  alternates: { canonical: "https://www.frenchfoodtour.com/reviews" },
  openGraph: {
    images: ["/images/_wp-content_uploads_2025_12_Food-Tour-Group-Montmartre-Paris-1024x683.jpg"],
  },
};

const aggregateRatingSchema = {
  "@context": "https://schema.org",
  "@type": "LocalBusiness",
  name: "French Food Tour",
  url: "https://www.frenchfoodtour.com",
  aggregateRating: {
    "@type": "AggregateRating",
    ratingValue: "4.9",
    bestRating: "5",
    worstRating: "1",
    ratingCount: "70",
    reviewCount: "70",
  },
  review: [
    {
      "@type": "Review",
      reviewRating: { "@type": "Rating", ratingValue: "5", bestRating: "5" },
      author: { "@type": "Person", name: "Danielle R." },
      reviewBody:
        "Probably our favorite experience while in Paris! Imran is a hospitality expert and a great guide. He brought us to local shops like the butcher, seafood shop, cheese shop, and the chocolatier — we experienced the area not as tourists but like we lived there. The tour culminated at a restaurant where we feasted on everything he had gathered, paired with really nice French wines.",
      datePublished: "2026-04-01",
      publisher: { "@type": "Organization", name: "Viator" },
    },
    {
      "@type": "Review",
      reviewRating: { "@type": "Rating", ratingValue: "5", bestRating: "5" },
      author: { "@type": "Person", name: "Catherine G." },
      reviewBody:
        "We had such a wonderful experience. Imrane was so knowledgeable about the local cuisine and offered so much insight into the history of the neighborhood. This tour included more than a full meal. Imrane was so much fun to talk to — he made us feel like we were old friends. We highly recommend this experience.",
      datePublished: "2026-04-01",
      publisher: { "@type": "Organization", name: "Viator" },
    },
    {
      "@type": "Review",
      reviewRating: { "@type": "Rating", ratingValue: "5", bestRating: "5" },
      author: { "@type": "Person", name: "Robert M." },
      reviewBody:
        "BEST food tour. We've been on multiple food tours and this was easily the best. Wonderful selection of a LOT of items and a LOT of variety. Includes wine. Guide is very knowledgeable about the food and restaurant industry in Paris.",
      datePublished: "2026-04-01",
      publisher: { "@type": "Organization", name: "Viator" },
    },
    {
      "@type": "Review",
      reviewRating: { "@type": "Rating", ratingValue: "5", bestRating: "5" },
      author: { "@type": "Person", name: "William C." },
      reviewBody:
        "Of the five European food tours we've taken over the years this was by far the best. Our guide was friendly and quite knowledgeable about the sourcing, preparation, and history of the foods and wines he served. I recommend this tour without reservation.",
      datePublished: "2026-04-01",
      publisher: { "@type": "Organization", name: "Viator" },
    },
  ],
};

const platforms = [
  { name: "Viator", rating: "4.9", reviews: "40+", color: "var(--color-bordeaux)" },
  { name: "TripAdvisor", rating: "4.9", reviews: "15+", color: "#00aa6c" },
  { name: "GetYourGuide", rating: "5.0", reviews: "10+", color: "#ff5533" },
  { name: "Google", rating: "4.9", reviews: "5+", color: "#4285f4" },
];

const reviews = [
  {
    name: "Danielle R.",
    platform: "Viator · Apr 2026",
    avatar: "DR",
    featured: true,
    text: "Probably our favorite experience while in Paris! Imran is a hospitality expert and a great guide. He brought us to local shops like the butcher, seafood shop, cheese shop, and the chocolatier — we experienced the area not as tourists but like we lived there. The tour culminated at a restaurant where we feasted on everything he had gathered, paired with really nice French wines. My husband and I ended up coming back to Montmartre a few days later and went back to the same restaurant. Don't hesitate to book this experience, it is worth every penny!",
  },
  {
    name: "Catherine G.",
    platform: "Viator · Apr 2026",
    avatar: "CG",
    featured: false,
    text: "We had such a wonderful experience. Imrane was so knowledgeable about the local cuisine and offered so much insight into the history of the neighborhood. This tour included more than a full meal. Imrane was so much fun to talk to — he made us feel like we were old friends. We highly recommend this experience.",
  },
  {
    name: "Robert M.",
    platform: "Viator · Apr 2026",
    avatar: "RM",
    featured: false,
    text: "BEST food tour. We've been on multiple food tours and this was easily the best. Wonderful selection of a LOT of items and a LOT of variety. Includes wine. Guide is very knowledgeable about the food and restaurant industry in Paris and has contacts with some of the best food sources. Choose this one!",
  },
  {
    name: "William C.",
    platform: "Viator · Apr 2026",
    avatar: "WC",
    featured: false,
    text: "Of the five European food tours we've taken over the years this was by far the best. We had a large variety of delicious foods. Our guide was friendly and quite knowledgeable about the sourcing, preparation, and history of the foods and wines he served. I recommend this tour without reservation.",
  },
];

function Stars({ size = 16 }: { size?: number }) {
  return (
    <div className="flex gap-0.5">
      {[...Array(5)].map((_, i) => (
        <Star key={i} size={size} className="fill-[var(--color-gold)] text-[var(--color-gold)]" />
      ))}
    </div>
  );
}

export default function ReviewsPage() {
  const [featured, ...rest] = reviews;

  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(aggregateRatingSchema) }} />
      <Header />
      <main className="pt-20">

        {/* Hero */}
        <section className="section">
          <div className="container max-w-3xl mx-auto text-center">
            <Badge className="mb-4">Guest Reviews</Badge>
            <h1 className="mb-4">
              What Our Guests Say
            </h1>
            <p className="text-lg text-[var(--color-charcoal-light)] leading-relaxed mb-8">
              Over 70 verified five-star reviews across Viator, TripAdvisor, GetYourGuide and Google.
              Zero negative reviews since the tour launched.
            </p>
            <div className="flex items-center justify-center gap-3">
              <Stars size={22} />
              <span className="text-2xl font-bold text-[var(--color-bordeaux)]" style={{ fontFamily: "var(--font-playfair)" }}>
                4.9 / 5
              </span>
              <span className="text-[var(--color-charcoal-light)] text-sm">average rating</span>
            </div>
          </div>
        </section>

        {/* Platform ratings */}
        <section className="section-alt">
          <div className="container">
            <div className="grid grid-cols-2 md:grid-cols-4 gap-4 max-w-3xl mx-auto">
              {platforms.map(({ name, rating, reviews: count }) => (
                <div key={name} className="card p-6 text-center">
                  <p
                    className="text-3xl font-bold mb-1"
                    style={{ fontFamily: "var(--font-playfair)", color: "var(--color-bordeaux)" }}
                  >
                    {rating}
                  </p>
                  <Stars size={12} />
                  <p className="text-xs font-600 text-[var(--color-charcoal)] mt-2" style={{ fontFamily: "var(--font-dm-sans)" }}>
                    {name}
                  </p>
                  <p className="text-[10px] text-[var(--color-charcoal-light)]" style={{ fontFamily: "var(--font-dm-sans)" }}>
                    {count} reviews
                  </p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Reviews */}
        <section className="section">
          <div className="container max-w-4xl mx-auto">

            {/* Featured review */}
            <div className="card p-10 mb-8 relative overflow-hidden">
              <span
                className="absolute top-4 right-8 text-[120px] leading-none text-[var(--color-cream-dark)] select-none pointer-events-none"
                aria-hidden="true"
                style={{ fontFamily: "var(--font-cormorant)" }}
              >
                &ldquo;
              </span>
              <Stars size={20} />
              <blockquote
                className="relative z-10 text-base text-[var(--color-charcoal)] leading-relaxed mt-5 mb-7 border-0 p-0 m-0 not-italic max-w-2xl"
                style={{ fontFamily: "var(--font-dm-sans)" }}
              >
                &ldquo;{featured.text}&rdquo;
              </blockquote>
              <div className="flex items-center gap-4">
                <div
                  className="w-11 h-11 rounded-full bg-[var(--color-bordeaux)] text-white flex items-center justify-center text-sm font-600"
                  style={{ fontFamily: "var(--font-dm-sans)" }}
                >
                  {featured.avatar}
                </div>
                <div>
                  <p className="font-600 text-[var(--color-charcoal)] text-sm" style={{ fontFamily: "var(--font-dm-sans)" }}>
                    {featured.name}
                  </p>
                  <p className="text-xs text-[var(--color-charcoal-light)]" style={{ fontFamily: "var(--font-dm-sans)" }}>
                    {featured.platform}
                  </p>
                </div>
              </div>
            </div>

            {/* Other reviews grid */}
            <div className="grid md:grid-cols-3 gap-5 mb-12">
              {rest.map((r) => (
                <div key={r.name} className="card p-6 flex flex-col gap-4">
                  <Stars />
                  <blockquote
                    className="text-sm text-[var(--color-charcoal)] leading-relaxed flex-1 border-0 p-0 m-0 not-italic"
                    style={{ fontFamily: "var(--font-dm-sans)" }}
                  >
                    &ldquo;{r.text}&rdquo;
                  </blockquote>
                  <div className="flex items-center gap-3 pt-2 border-t border-[var(--color-cream-dark)]">
                    <div
                      className="w-8 h-8 rounded-full bg-[var(--color-cream-dark)] text-[var(--color-charcoal-light)] flex items-center justify-center text-xs font-600"
                      style={{ fontFamily: "var(--font-dm-sans)" }}
                    >
                      {r.avatar}
                    </div>
                    <div>
                      <p className="text-xs font-600 text-[var(--color-charcoal)]" style={{ fontFamily: "var(--font-dm-sans)" }}>{r.name}</p>
                      <p className="text-[10px] text-[var(--color-charcoal-light)]" style={{ fontFamily: "var(--font-dm-sans)" }}>{r.platform}</p>
                    </div>
                  </div>
                </div>
              ))}
            </div>

            {/* Read more on Viator */}
            <div className="text-center">
              <p className="text-sm text-[var(--color-charcoal-light)] mb-4" style={{ fontFamily: "var(--font-dm-sans)" }}>
                All reviews are independently verified by booking platforms.
              </p>
              <Link
                href="https://www.viator.com"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 text-sm text-[var(--color-bordeaux)] font-600 hover:underline"
                style={{ fontFamily: "var(--font-dm-sans)" }}
              >
                Read all reviews on Viator <ExternalLink size={14} />
              </Link>
            </div>
          </div>
        </section>

        {/* Zero negative reviews callout */}
        <section className="section-alt">
          <div className="container max-w-2xl mx-auto text-center">
            <Badge className="mb-4">Our Track Record</Badge>
            <h2 className="mb-4">4,000+ Guests. Zero Negative Reviews.</h2>
            <p className="text-[var(--color-charcoal-light)] text-lg leading-relaxed mb-8">
              Since launching in 2023, the French Food Tour has hosted over 4,000 guests from
              more than 30 countries. Not one has left a negative review. That&apos;s not luck —
              it&apos;s the result of a guide who genuinely cares about every group he takes out.
            </p>
            <Button href="/book" icon={<ArrowRight size={18} />}>
              Book Your Spot
            </Button>
          </div>
        </section>

        {/* CTA */}
        <section className="section bg-[var(--color-charcoal)] text-white text-center">
          <div className="container max-w-xl mx-auto">
            <h2 className="text-white mb-4">Join the Next Tour</h2>
            <p className="text-white/70 text-lg mb-8 leading-relaxed">
              Check available dates and book your spot directly — best price, no platform fees.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button
                href="/book"
                icon={<ArrowRight size={18} />}
                style={{ background: "var(--color-gold)", borderColor: "var(--color-gold)", color: "var(--color-charcoal)" }}
              >
                Book a Tour
              </Button>
              <Link
                href="/food-tour"
                className="inline-flex items-center justify-center gap-2 px-8 py-3 rounded-full border-2 border-white/40 text-white font-600 text-sm hover:bg-white/10 transition-colors"
                style={{ fontFamily: "var(--font-dm-sans)" }}
              >
                See the Tour
              </Link>
            </div>
          </div>
        </section>

      </main>
      <Footer />
    </>
  );
}
