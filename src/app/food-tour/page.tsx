import type { Metadata } from "next";
import Image from "next/image";
import { Header } from "@/components/layout/Header";
import { Footer } from "@/components/layout/Footer";
import { Button } from "@/components/ui/Button";
import { Badge } from "@/components/ui/Badge";
import { Check, Clock, Users, MapPin, Calendar, Star, ArrowRight } from "lucide-react";

export const metadata: Metadata = {
  title: "Montmartre Food & Wine Tour — The Experience",
  description:
    "Discover our signature 3-hour food tour in Montmartre: wine, cheese, charcuterie, pastries & hidden gems. Small groups, expert local guide. Book your spot today!",
  alternates: { canonical: "https://www.frenchfoodtour.com/food-tour" },
};

const itinerary = [
  {
    step: "01",
    title: "Meeting Point — Place des Abbesses",
    description:
      "We gather at the prettiest square of Montmartre, right outside the metro stop. Look for the light blue umbrella. Your guide welcomes you with stories of the neighborhood.",
    icon: MapPin,
  },
  {
    step: "02",
    title: "The Fromagerie — Wine & Cheese",
    description:
      "One of the best cheese shops in the city. Discover the beauty and endless depth of French cheese — 4 carefully selected varieties with wine pairings.",
    icon: Star,
  },
  {
    step: "03",
    title: "The Boulangerie — Bread & Pastries",
    description:
      "Warm baguette straight from the oven, daily-made croissants and pastries waiting for you. Everything baked the old-fashioned way — you're welcome.",
    icon: Star,
  },
  {
    step: "04",
    title: "The Butcher — Charcuterie & Wine",
    description:
      "The iconic butcher shop of Montmartre — a heaven for meat from carefully selected animals, grass-fed and farm-raised. The way it should be everywhere.",
    icon: Star,
  },
  {
    step: "05",
    title: "The Restaurant — The Grand Finale",
    description:
      "The tour ends with a relaxed 3-course French meal at a cozy local restaurant — wine and cheeses included. Beef bourguignon, oysters, chocolates, macarons. A real taste of French gastronomy.",
    icon: MapPin,
  },
];

const included = [
  "3-hour guided food tour",
  "12 food & wine tastings (incl. oysters & restaurant finale)",
  "Expert local guide born in Montmartre",
  "Small group (max 10 guests)",
  "All food & drinks included",
  "Personalised recommendations map",
  "Free cancellation (24h notice)",
];

const notIncluded = [
  "Hotel pickup/drop-off",
  "Additional restaurant meals",
  "Gratuities (appreciated but not required)",
];

export default function FoodTourPage() {
  return (
    <>
      <Header />
      <main className="pt-20">
        {/* Hero */}
        <section className="relative h-[60vh] min-h-[400px] flex items-end overflow-hidden">
          <div className="absolute inset-0 z-0">
            <Image
              src="/images/_wp-content_uploads_2025_12_paris-montmartre-food-tour-1024x683.webp"
              alt="Montmartre food tour street scene"
              fill
              priority
              className="object-cover"
              sizes="100vw"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-[var(--color-charcoal)]/80 to-transparent" />
          </div>
          <div className="container relative z-10 pb-16">
            <Badge variant="gold" className="mb-4">Our Signature Experience</Badge>
            <h1 className="text-white max-w-2xl">
              The Montmartre Food & Wine Tour
            </h1>
          </div>
        </section>

        {/* Quick facts */}
        <section className="bg-[var(--color-bordeaux)] text-white py-6">
          <div className="container flex flex-wrap justify-center gap-8 text-sm font-sans">
            {[
              { icon: Clock, label: "Duration", value: "3 hours" },
              { icon: Users, label: "Group size", value: "Max 10 guests" },
              { icon: MapPin, label: "Meeting point", value: "Place des Abbesses, Montmartre" },
              { icon: Calendar, label: "Availability", value: "Daily, year-round" },
            ].map(({ icon: Icon, label, value }) => (
              <div key={label} className="flex items-center gap-2">
                <Icon size={16} className="text-[var(--color-gold)]" />
                <span className="text-white/70">{label}:</span>
                <span className="font-600">{value}</span>
              </div>
            ))}
          </div>
        </section>

        {/* Description */}
        <section className="section">
          <div className="container max-w-3xl mx-auto text-center">
            <Badge className="mb-4">The Story</Badge>
            <h2 className="mb-6">More Than a Tour — An Experience</h2>
            <p className="text-lg text-[var(--color-charcoal-light)] leading-relaxed mb-6">
              Montmartre is one of Paris's most iconic neighborhoods — but few visitors get to experience
              it the way locals do. Our food tour takes you off the beaten path, into family-run shops,
              hidden cellars, and sun-drenched terraces that most tourists never discover.
            </p>
            <p className="text-lg text-[var(--color-charcoal-light)] leading-relaxed">
              With a passionate local guide, you'll taste, sip, and savor your way through 3 hours of
              authentic Parisian gastronomy — building memories (and appetites) that last a lifetime.
            </p>
          </div>
        </section>

        {/* Itinerary */}
        <section className="section-alt">
          <div className="container max-w-4xl mx-auto">
            <div className="text-center mb-12">
              <Badge className="mb-4">Itinerary</Badge>
              <h2>Your Journey, Step by Step</h2>
            </div>
            <div className="space-y-8">
              {itinerary.map((item) => (
                <div key={item.step} className="flex gap-6 items-start">
                  <div className="flex-shrink-0 w-14 h-14 rounded-full bg-[var(--color-bordeaux)] text-white flex items-center justify-center font-display text-lg font-bold">
                    {item.step}
                  </div>
                  <div className="pt-3">
                    <h3 className="font-sans text-lg font-600 text-[var(--color-charcoal)] mb-2">{item.title}</h3>
                    <p className="text-[var(--color-charcoal-light)] leading-relaxed">{item.description}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Photo gallery */}
        <section className="section">
          <div className="container">
            <div className="text-center mb-10">
              <Badge className="mb-4">Gallery</Badge>
              <h2>Tastes of Montmartre</h2>
            </div>
            <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
              {[
                { src: "/images/_wp-content_uploads_2025_12_wine-cheese-tasting-montmartre-paris-food-tour-1024x1024.webp", alt: "Wine and cheese tasting in Montmartre" },
                { src: "/images/_wp-content_uploads_2025_12_french-food-tour-paris-bakery-experience-1024x683.webp", alt: "Parisian bakery experience" },
                { src: "/images/_wp-content_uploads_2025_12_paris-food-tour-french-pastries-montmartre-1-768x1024.webp", alt: "French pastries in Montmartre" },
                { src: "/images/_wp-content_uploads_2025_12_baguette-1024x683.jpg", alt: "Fresh baguette Paris" },
              ].map((img) => (
                <div key={img.src} className="relative aspect-square rounded-[var(--radius-lg)] overflow-hidden">
                  <Image src={img.src} alt={img.alt} fill className="object-cover hover:scale-105 transition-transform duration-500" sizes="(max-width: 768px) 50vw, 25vw" />
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Included / Not included */}
        <section className="section-alt">
          <div className="container max-w-3xl mx-auto">
            <div className="grid md:grid-cols-2 gap-10">
              <div>
                <h3 className="font-sans text-lg font-600 text-[var(--color-charcoal)] mb-5">What's Included</h3>
                <ul className="space-y-3">
                  {included.map((item) => (
                    <li key={item} className="flex items-start gap-3 font-sans text-sm text-[var(--color-charcoal)]">
                      <Check size={18} className="text-[var(--color-sage)] flex-shrink-0 mt-0.5" />
                      {item}
                    </li>
                  ))}
                </ul>
              </div>
              <div>
                <h3 className="font-sans text-lg font-600 text-[var(--color-charcoal)] mb-5">Not Included</h3>
                <ul className="space-y-3">
                  {notIncluded.map((item) => (
                    <li key={item} className="flex items-start gap-3 font-sans text-sm text-[var(--color-charcoal-light)]">
                      <span className="text-[var(--color-charcoal-light)] flex-shrink-0 mt-0.5">—</span>
                      {item}
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          </div>
        </section>

        {/* Blog links */}
        <section className="section">
          <div className="container max-w-3xl mx-auto">
            <div className="text-center mb-10">
              <Badge className="mb-4">Read More</Badge>
              <h2>Go Deeper Into Montmartre</h2>
            </div>
            <div className="grid sm:grid-cols-3 gap-6">
              {[
                { href: "/blog/wine-cheese-paris-guide", label: "Wine & Cheese Guide" },
                { href: "/blog/french-pastries-montmartre-guide", label: "French Pastries Guide" },
                { href: "/blog/montmartre-hidden-food-scene", label: "Montmartre's Hidden Food Scene" },
              ].map((link) => (
                <a
                  key={link.href}
                  href={link.href}
                  className="card p-5 flex items-center justify-between gap-3 group hover:no-underline"
                >
                  <span className="font-sans text-sm font-600 text-[var(--color-charcoal)] group-hover:text-[var(--color-bordeaux)] transition-colors">
                    {link.label}
                  </span>
                  <ArrowRight size={16} className="text-[var(--color-gold)] flex-shrink-0" />
                </a>
              ))}
            </div>
          </div>
        </section>

        {/* CTA */}
        <section className="section bg-[var(--color-bordeaux-dark)] text-white text-center">
          <div className="container max-w-2xl mx-auto">
            <h2 className="text-white mb-4">Ready to Taste the Real Paris?</h2>
            <p className="text-white/80 text-lg mb-8">
              Spots fill up fast. Reserve your place on the next available tour.
            </p>
            <Button href="/book" size="lg" icon={<ArrowRight size={20} />}
              className="bg-[var(--color-gold)] border-[var(--color-gold)] text-[var(--color-charcoal)] hover:bg-[var(--color-gold-light)] hover:border-[var(--color-gold-light)]">
              Book Your Spot — €85/person
            </Button>
            <p className="text-white/50 text-sm mt-4">Free cancellation up to 24 hours before</p>
          </div>
        </section>
      </main>
      <Footer />
    </>
  );
}
