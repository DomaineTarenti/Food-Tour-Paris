import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import { Header } from "@/components/layout/Header";
import { Footer } from "@/components/layout/Footer";
import { Button } from "@/components/ui/Button";
import { Badge } from "@/components/ui/Badge";
import { Check, Users, Star, ArrowRight, Heart, Briefcase, Wine } from "lucide-react";

export const metadata: Metadata = {
  title: "Private & Group Food Tours Paris — Exclusive Montmartre Experience",
  description:
    "Book a private food tour in Paris for your group, couple, family or team. Fully customised, led by a local food professional. Exclusive access to the best of Montmartre.",
  alternates: { canonical: "https://www.frenchfoodtour.com/private-tours" },
  openGraph: {
    images: ["/images/_wp-content_uploads_2025_12_Food-Tour-Group-Montmartre-Paris-1024x683.jpg"],
  },
};

const privateTourSchema = {
  "@context": "https://schema.org",
  "@type": "TouristTrip",
  name: "Private Food Tour Paris — Exclusive Montmartre Experience",
  description:
    "Private and group food tours in Montmartre, Paris. Fully customised for couples, families, corporate groups and special occasions. Led by a former top-10 restaurant professional.",
  url: "https://www.frenchfoodtour.com/private-tours",
  touristType: ["Couples", "Families", "Corporate groups", "Special occasions"],
  offers: {
    "@type": "Offer",
    availability: "https://schema.org/InStock",
    url: "https://www.frenchfoodtour.com/contact",
  },
  provider: {
    "@type": "LocalBusiness",
    name: "French Food Tour",
    url: "https://www.frenchfoodtour.com",
  },
};

const occasions = [
  {
    icon: Heart,
    title: "Couples & Anniversaries",
    description:
      "A romantic afternoon exploring Montmartre's finest producers. Wine, cheese, chocolate — the perfect Paris date.",
  },
  {
    icon: Users,
    title: "Families & Friends",
    description:
      "Kids love the chocolate maker and the bakery. Adults love the wine. Everyone leaves happy and full.",
  },
  {
    icon: Briefcase,
    title: "Corporate & Team Events",
    description:
      "A memorable team outing that people will talk about. Shared tastings break the ice better than any meeting room.",
  },
  {
    icon: Wine,
    title: "Special Occasions",
    description:
      "Birthdays, bachelorettes, retirement parties. We make it yours — pace, stops, and menu adapted to your group.",
  },
];

const included = [
  "Fully private — just your group, nobody else",
  "Flexible date and time",
  "Itinerary customised to your preferences",
  "15+ tastings: cheese, wine, charcuterie, oysters, chocolate & restaurant finale",
  "Expert guide — Imrane, former top-10 restaurant professional",
  "All food & drinks fully included",
  "Personalised recommendations map of Montmartre",
];

export default function PrivateToursPage() {
  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(privateTourSchema) }} />
      <Header />
      <main className="pt-20">

        {/* Hero */}
        <section className="relative h-[60vh] min-h-[420px] flex items-end overflow-hidden">
          <div className="absolute inset-0 z-0">
            <Image
              src="/images/_wp-content_uploads_2025_12_Food-Tour-Group-Montmartre-Paris-1024x683.jpg"
              alt="Private group food tour Montmartre Paris"
              fill
              priority
              className="object-cover"
              sizes="100vw"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-[var(--color-charcoal)]/85 to-transparent" />
          </div>
          <div className="container relative z-10 pb-16">
            <Badge variant="gold" className="mb-4">Private & Group Tours</Badge>
            <h1 className="text-white max-w-2xl mb-4">
              Your Own Private Tour<br />of Montmartre
            </h1>
            <p className="text-white/80 text-lg max-w-xl" style={{ fontFamily: "var(--font-dm-sans)" }}>
              The full French Food Tour experience, exclusively for your group. No strangers, no shared tables — just you and the best of Paris.
            </p>
          </div>
        </section>

        {/* Social proof bar */}
        <div className="bg-[var(--color-bordeaux)] text-white py-5">
          <div className="container flex flex-wrap justify-center gap-8 text-sm font-sans">
            {[
              { value: "4,000+", label: "guests hosted" },
              { value: "4.9 / 5", label: "average rating" },
              { value: "100%", label: "private — just your group" },
              { value: "Flexible", label: "date & time" },
            ].map(({ value, label }) => (
              <div key={label} className="flex items-center gap-2">
                <Star size={14} className="text-[var(--color-gold)]" />
                <span className="font-600">{value}</span>
                <span className="text-white/60">{label}</span>
              </div>
            ))}
          </div>
        </div>

        {/* Who it's for */}
        <section className="section">
          <div className="container">
            <div className="text-center mb-12">
              <Badge className="mb-4">Made for Every Group</Badge>
              <h2>Perfect for Any Occasion</h2>
            </div>
            <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
              {occasions.map((o) => {
                const Icon = o.icon;
                return (
                  <div key={o.title} className="card p-7 text-center">
                    <div className="w-12 h-12 rounded-full bg-[var(--color-cream-dark)] flex items-center justify-center mx-auto mb-4">
                      <Icon size={22} className="text-[var(--color-bordeaux)]" />
                    </div>
                    <h3 className="font-sans text-base font-600 text-[var(--color-charcoal)] mb-2">{o.title}</h3>
                    <p className="font-sans text-sm text-[var(--color-charcoal-light)] leading-relaxed">{o.description}</p>
                  </div>
                );
              })}
            </div>
          </div>
        </section>

        {/* What's included */}
        <section className="section-alt">
          <div className="container max-w-4xl mx-auto">
            <div className="grid lg:grid-cols-2 gap-16 items-center">
              <div>
                <Badge className="mb-4">The Experience</Badge>
                <h2 className="mb-6">Everything Included,<br />Nothing Compromised</h2>
                <ul className="space-y-4">
                  {included.map((item) => (
                    <li key={item} className="flex items-start gap-3 font-sans text-sm text-[var(--color-charcoal)]">
                      <Check size={18} className="text-[var(--color-sage)] flex-shrink-0 mt-0.5" />
                      {item}
                    </li>
                  ))}
                </ul>
              </div>
              <div className="relative aspect-[4/5] rounded-[var(--radius-xl)] overflow-hidden">
                <Image
                  src="/images/_wp-content_uploads_2025_12_wine-cheese-tasting-montmartre-paris-food-tour-1024x1024.webp"
                  alt="Private wine and cheese tasting Montmartre Paris"
                  fill
                  className="object-cover"
                  sizes="(max-width: 1024px) 100vw, 50vw"
                />
              </div>
            </div>
          </div>
        </section>

        {/* How it works */}
        <section className="section">
          <div className="container max-w-3xl mx-auto">
            <div className="text-center mb-12">
              <Badge className="mb-4">How It Works</Badge>
              <h2>Simple to Book, Unforgettable to Live</h2>
            </div>
            <ol className="space-y-8">
              {[
                {
                  num: "01",
                  title: "Send us a message",
                  body: "Tell us your group size, preferred date, and any special requests. We reply within 24 hours.",
                },
                {
                  num: "02",
                  title: "We build your itinerary",
                  body: "Imrane customises the stops, pace and tastings to your group. Dietary needs, preferences, occasion — all taken into account.",
                },
                {
                  num: "03",
                  title: "Show up and enjoy",
                  body: "We take care of everything. You just arrive at Anvers metro stop, look for the blue umbrella, and let the afternoon unfold.",
                },
              ].map((step) => (
                <li key={step.num} className="flex gap-6 items-start">
                  <div className="flex-shrink-0 w-12 h-12 rounded-full bg-[var(--color-bordeaux)] text-white flex items-center justify-center font-bold text-sm" style={{ fontFamily: "var(--font-playfair)" }}>
                    {step.num}
                  </div>
                  <div className="pt-2">
                    <h3 className="font-sans text-base font-600 text-[var(--color-charcoal)] mb-1">{step.title}</h3>
                    <p className="font-sans text-sm text-[var(--color-charcoal-light)] leading-relaxed">{step.body}</p>
                  </div>
                </li>
              ))}
            </ol>
          </div>
        </section>

        {/* Pricing note */}
        <section className="section-alt">
          <div className="container max-w-2xl mx-auto text-center">
            <Badge className="mb-4">Pricing</Badge>
            <h2 className="mb-4">Custom Quote for Your Group</h2>
            <p className="text-[var(--color-charcoal-light)] text-lg leading-relaxed mb-2">
              Private tours are priced based on group size and customisation. Contact us for a quote — we always aim to be competitive with OTA platforms, with the advantage of booking directly.
            </p>
            <p className="text-sm text-[var(--color-charcoal-light)] mb-8">
              Public tour rate: €115/adult · €95/child — private tours from similar rates per person.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button href="/contact" icon={<ArrowRight size={18} />}>
                Request a Quote
              </Button>
              <Link
                href="/food-tour"
                className="inline-flex items-center justify-center gap-2 px-8 py-3 rounded-full border-2 border-[var(--color-bordeaux)] text-[var(--color-bordeaux)] font-600 text-sm hover:bg-[var(--color-bordeaux)] hover:text-white transition-all"
                style={{ fontFamily: "var(--font-dm-sans)" }}
              >
                See the Public Tour
              </Link>
            </div>
          </div>
        </section>

        {/* Testimonial */}
        <section className="section bg-[var(--color-charcoal)] text-white">
          <div className="container max-w-2xl mx-auto text-center">
            <div className="flex justify-center gap-1 mb-6">
              {[...Array(5)].map((_, i) => (
                <Star key={i} size={18} className="fill-[var(--color-gold)] text-[var(--color-gold)]" />
              ))}
            </div>
            <blockquote
              className="text-xl text-white/90 leading-relaxed mb-6 border-0 not-italic"
              style={{ fontFamily: "var(--font-dm-sans)" }}
            >
              "Of the five European food tours we've taken over the years this was by far the best. Our guide was friendly and quite knowledgeable about the sourcing, preparation, and history of the foods and wines he served. I recommend this tour without reservation."
            </blockquote>
            <p className="text-[var(--color-gold)] text-sm font-600" style={{ fontFamily: "var(--font-dm-sans)" }}>
              William C. · Viator, Apr 2026
            </p>
          </div>
        </section>

      </main>
      <Footer />
    </>
  );
}
