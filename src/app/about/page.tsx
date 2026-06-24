import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import { Header } from "@/components/layout/Header";
import { Footer } from "@/components/layout/Footer";
import { Button } from "@/components/ui/Button";
import { Badge } from "@/components/ui/Badge";
import { ArrowRight, Heart, MapPin, Utensils, Star } from "lucide-react";

export const metadata: Metadata = {
  title: "About Imrane — Your Local Paris Food Guide & Professional",
  description:
    "Meet Imrane, the food & beverage professional behind French Food Tour Paris. Former Michelin-starred restaurant floor manager, now running Montmartre's most authentic food tour. 4,000+ guests, zero negative reviews.",
  alternates: { canonical: "https://www.frenchfoodtour.com/about" },
  openGraph: {
    images: ["/images/_wp-content_uploads_2025_12_authentic-paris-food-tour-local-guide-1-scaled.webp"],
  },
};

const personSchema = {
  "@context": "https://schema.org",
  "@type": "Person",
  name: "Imrane",
  jobTitle: "Food Tour Guide & Food and Beverage Professional",
  description:
    "Former food & beverage professional with experience in Michelin-starred kitchens and two world top-10 restaurants. Founder of French Food Tour Paris, running intimate food tours in Montmartre since 2023.",
  url: "https://www.frenchfoodtour.com/about",
  worksFor: {
    "@type": "LocalBusiness",
    name: "French Food Tour",
    url: "https://www.frenchfoodtour.com",
  },
  knowsAbout: [
    "French gastronomy",
    "Wine and cheese pairing",
    "Parisian food culture",
    "Montmartre neighbourhood",
    "Charcuterie",
    "Artisan chocolate",
    "French pastries",
  ],
};

const values = [
  {
    icon: Heart,
    title: "Genuine Passion",
    description:
      "Every tasting, every stop, every story is chosen because I truly love it — not because it's on a tourist list.",
  },
  {
    icon: MapPin,
    title: "Hyper-Local",
    description:
      "I work exclusively with family-run shops and producers who've been in Montmartre for generations. No tourist traps.",
  },
  {
    icon: Utensils,
    title: "Quality First",
    description:
      "I taste and curate every product myself. Nothing ends up on the tour unless it's genuinely exceptional.",
  },
];

const credentials = [
  { value: "4,000+", label: "Guests hosted" },
  { value: "0", label: "Negative reviews" },
  { value: "15", label: "Tastings per tour" },
  { value: "4.9", label: "Average rating" },
];

export default function AboutPage() {
  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(personSchema) }} />
      <Header />
      <main className="pt-20">

        {/* Hero */}
        <section className="section">
          <div className="container">
            <div className="grid lg:grid-cols-2 gap-16 items-start">
              <div>
                <Badge className="mb-4">The Story</Badge>
                <h1 className="mb-6">
                  I&apos;m Imrane.<br />
                  <span className="text-[var(--color-bordeaux)]">Food is the only world I&apos;ve ever known.</span>
                </h1>

                <p className="text-lg text-[var(--color-charcoal-light)] leading-relaxed mb-5">
                  I spent years on the floor of Parisian restaurants — neighbourhood tables, Michelin-starred kitchens,
                  and two establishments that sit in the world&apos;s top 10. Not in the kitchen. In the dining room,
                  between the guest and the plate, where the real experience happens.
                </p>

                <p className="text-[var(--color-charcoal-light)] leading-relaxed mb-5">
                  That position taught me something most guides don&apos;t have: I understand food from both sides.
                  I know how a cheese is selected, how a wine is paired, why a producer matters. I also know how to read a
                  table, how to pace a conversation, how to make a group of strangers feel like old friends by the second stop.
                </p>

                <p className="text-[var(--color-charcoal-light)] leading-relaxed mb-5">
                  Three years ago I left the restaurant floor to run food tours. Over 4,000 guests later,
                  I&apos;ve never had a negative review. Not one. A year ago I went solo, and built
                  the tour I always wanted to run: one that gives French gastronomy the fuller picture it deserves,
                  far from the basic cheese-and-charcuterie formula the big tour companies repeat everywhere.
                </p>

                <p className="text-[var(--color-charcoal-light)] leading-relaxed mb-8">
                  The result is 15 tastings across 7 stops in Montmartre — the fromagerie, the boulangerie, the butcher,
                  a seafood bite, an artisan chocolatier, and a full restaurant finale with wine. Every stop is a real shop
                  I have a real relationship with. Every product I&apos;ve chosen myself. That&apos;s the difference between
                  a tour and an experience.
                </p>

                <div className="flex flex-wrap gap-4">
                  <Button href="/book" icon={<ArrowRight size={18} />}>
                    Book a Tour
                  </Button>
                  <Button href="/private-tours" variant="secondary" icon={<ArrowRight size={18} />}>
                    Private Tours
                  </Button>
                </div>
              </div>

              <div className="relative lg:sticky lg:top-28">
                <div className="relative aspect-[3/4] rounded-[var(--radius-xl)] overflow-hidden max-w-sm mx-auto">
                  <Image
                    src="/images/_wp-content_uploads_2025_12_authentic-paris-food-tour-local-guide-1-scaled.webp"
                    alt="Imrane, French Food Tour guide in Montmartre Paris"
                    fill
                    className="object-cover"
                    sizes="(max-width: 1024px) 100vw, 50vw"
                  />
                </div>
                <blockquote className="absolute -bottom-6 -left-6 bg-white rounded-[var(--radius-lg)] p-5 shadow-[var(--shadow-card-hover)] max-w-[260px] text-sm font-sans italic text-[var(--color-charcoal-light)] border-0 m-0">
                  &ldquo;Food is the language Paris speaks best. I&apos;m here to translate.&rdquo;
                </blockquote>
              </div>
            </div>
          </div>
        </section>

        {/* Credentials */}
        <section className="section-alt">
          <div className="container">
            <div className="grid grid-cols-2 md:grid-cols-4 gap-6 max-w-3xl mx-auto">
              {credentials.map(({ value, label }) => (
                <div key={label} className="card p-6 text-center">
                  <p className="text-4xl font-bold text-[var(--color-bordeaux)] leading-none mb-2" style={{ fontFamily: "var(--font-playfair)" }}>
                    {value}
                  </p>
                  <p className="text-xs text-[var(--color-charcoal-light)] font-sans">{label}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Why Montmartre */}
        <section className="section">
          <div className="container max-w-3xl mx-auto">
            <div className="text-center mb-10">
              <Badge className="mb-4">The Neighbourhood</Badge>
              <h2>Why Montmartre?</h2>
            </div>
            <div className="space-y-5 text-[var(--color-charcoal-light)] leading-relaxed">
              <p>
                Montmartre isn&apos;t a neighbourhood I chose for tourism. It&apos;s where I grew up. I know which boulangerie
                has been baking the same way since 1978. I know the fromagerie owner by name, and he knows exactly what
                I&apos;ll bring a group to taste. I know the butcher&apos;s sourcing standards, the chocolatier&apos;s training,
                the seafood supplier&apos;s morning delivery schedule.
              </p>
              <p>
                That level of access doesn&apos;t come from a guidebook. It comes from years of relationships built in the
                neighbourhood — the kind of relationships that let me bring a group of visitors somewhere and have them
                treated not as tourists, but as regulars.
              </p>
              <p>
                When guests come back to Montmartre a few days later and walk into the same cheese shop on their own,
                and the owner remembers them — that&apos;s the experience I&apos;m building. Not a tour. A connection to the city.
              </p>
            </div>
          </div>
        </section>

        {/* Values */}
        <section className="section-alt">
          <div className="container">
            <div className="text-center mb-12">
              <Badge className="mb-4">The Philosophy</Badge>
              <h2>What Makes This Different</h2>
            </div>
            <div className="grid md:grid-cols-3 gap-8">
              {values.map((v) => {
                const Icon = v.icon;
                return (
                  <div key={v.title} className="card p-8 text-center">
                    <div className="w-14 h-14 rounded-full bg-[var(--color-cream-dark)] flex items-center justify-center mx-auto mb-5">
                      <Icon size={24} className="text-[var(--color-bordeaux)]" />
                    </div>
                    <h3 className="font-sans text-lg font-600 text-[var(--color-charcoal)] mb-3">{v.title}</h3>
                    <p className="font-sans text-sm text-[var(--color-charcoal-light)] leading-relaxed">{v.description}</p>
                  </div>
                );
              })}
            </div>
          </div>
        </section>

        {/* Gallery */}
        <section className="section">
          <div className="container">
            <div className="grid grid-cols-3 gap-4">
              {[
                { src: "/images/_wp-content_uploads_2025_12_Food-Tour-Group-Montmartre-Paris-1024x683.jpg", alt: "Group food tour Montmartre Paris with Imrane" },
                { src: "/images/_wp-content_uploads_2025_12_Tasting-room-montmartre-foodtour-768x1024.webp", alt: "Tasting room Montmartre food tour" },
                { src: "/images/_wp-content_uploads_2025_12_moulin-de-montmartre-paris-food-tour.webp", alt: "Moulin de Montmartre Paris food tour" },
              ].map((img) => (
                <div key={img.src} className="relative aspect-video rounded-[var(--radius-lg)] overflow-hidden">
                  <Image src={img.src} alt={img.alt} fill className="object-cover hover:scale-105 transition-transform duration-500" sizes="33vw" />
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Guest review */}
        <section className="section-alt">
          <div className="container max-w-2xl mx-auto text-center">
            <div className="flex justify-center gap-1 mb-5">
              {[...Array(5)].map((_, i) => (
                <Star key={i} size={18} className="fill-[var(--color-gold)] text-[var(--color-gold)]" />
              ))}
            </div>
            <blockquote
              className="text-lg text-[var(--color-charcoal)] leading-relaxed mb-5 border-0 not-italic"
              style={{ fontFamily: "var(--font-dm-sans)" }}
            >
              &ldquo;Imrane was so knowledgeable about the local cuisine and offered so much insight into the history of
              the neighbourhood. Imrane was so much fun to talk to — he made us feel like we were old friends.
              We highly recommend this experience.&rdquo;
            </blockquote>
            <p className="text-sm font-600 text-[var(--color-bordeaux)]" style={{ fontFamily: "var(--font-dm-sans)" }}>
              Catherine G. · Viator, Apr 2026
            </p>
          </div>
        </section>

        {/* CTA */}
        <section className="section bg-[var(--color-charcoal)] text-white text-center">
          <div className="container max-w-xl mx-auto">
            <h2 className="text-white mb-4">Come Join the Table</h2>
            <p className="text-white/70 text-lg mb-8 leading-relaxed">
              Whether you&apos;re a first-time visitor or a longtime Paris lover, I promise you&apos;ll
              discover something new — and leave with a full stomach.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button href="/food-tour" icon={<ArrowRight size={18} />}
                style={{ background: "var(--color-gold)", borderColor: "var(--color-gold)", color: "var(--color-charcoal)" }}>
                See the Tour
              </Button>
              <Link
                href="/private-tours"
                className="inline-flex items-center justify-center gap-2 px-8 py-3 rounded-full border-2 border-white/40 text-white font-600 text-sm hover:bg-white/10 transition-colors"
                style={{ fontFamily: "var(--font-dm-sans)" }}
              >
                Private Tours
              </Link>
            </div>
          </div>
        </section>

      </main>
      <Footer />
    </>
  );
}
