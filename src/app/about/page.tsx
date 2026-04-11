import type { Metadata } from "next";
import Image from "next/image";
import { Header } from "@/components/layout/Header";
import { Footer } from "@/components/layout/Footer";
import { Button } from "@/components/ui/Button";
import { Badge } from "@/components/ui/Badge";
import { ArrowRight, Heart, MapPin, Utensils } from "lucide-react";

export const metadata: Metadata = {
  title: "About — Your Local Paris Food Guide",
  description:
    "Meet the passionate local guide behind French Food Tour. Born and raised in Paris, discover the story behind Montmartre's most authentic food experience.",
  alternates: { canonical: "https://www.frenchfoodtour.com/about" },
};

const values = [
  {
    icon: Heart,
    title: "Genuine Passion",
    description:
      "Every tasting, every stop, every story is chosen because we truly love it — not because it's on a tourist list.",
  },
  {
    icon: MapPin,
    title: "Hyper-Local",
    description:
      "We work exclusively with family-run shops and producers who've been in Montmartre for generations.",
  },
  {
    icon: Utensils,
    title: "Quality First",
    description:
      "We taste and curate every product ourselves. Nothing ends up on our tour unless it's exceptional.",
  },
];

export default function AboutPage() {
  return (
    <>
      <Header />
      <main className="pt-20">
        {/* Hero */}
        <section className="section">
          <div className="container">
            <div className="grid lg:grid-cols-2 gap-16 items-center">
              <div>
                <Badge className="mb-4">The Story</Badge>
                <h1 className="mb-6">
                  A Food &amp; Beverage{" "}
                  <br />
                  <span className="text-[var(--color-bordeaux)]">Professional from Paris</span>
                </h1>
                <p className="text-lg text-[var(--color-charcoal-light)] leading-relaxed mb-6">
                  I&apos;m Imrane. I spent years on the floor of Parisian restaurants —
                  neighbourhood tables, Michelin-starred kitchens, and two establishments
                  that sit in the world&apos;s top 10. Food service is the only world I&apos;ve ever known.
                </p>
                <p className="text-[var(--color-charcoal-light)] leading-relaxed mb-8">
                  Three years ago I left the restaurant floor to run food tours. Over 4,000 guests
                  later, I&apos;ve never had a negative review. A year ago I went solo — and built
                  a tour around one idea: French gastronomy deserves a fuller picture. You&apos;ll find
                  cheese and charcuterie, but this goes further — into the details and rituals
                  that make French food culture what it is.
                </p>
                <Button href="/book" icon={<ArrowRight size={18} />}>
                  Book a Tour
                </Button>
              </div>

              <div className="relative">
                <div className="relative aspect-[3/4] rounded-[var(--radius-xl)] overflow-hidden max-w-sm mx-auto">
                  <Image
                    src="/images/_wp-content_uploads_2025_12_authentic-paris-food-tour-local-guide-1-scaled.webp"
                    alt="French Food Tour local guide in Montmartre Paris"
                    fill
                    className="object-cover"
                    sizes="(max-width: 1024px) 100vw, 50vw"
                  />
                </div>
                <blockquote className="absolute -bottom-6 -left-6 bg-white rounded-[var(--radius-lg)] p-5 shadow-[var(--shadow-card-hover)] max-w-[260px] text-sm font-sans italic text-[var(--color-charcoal-light)] border-0 m-0">
                  "Food is the language Paris speaks best — and I'm here to translate."
                </blockquote>
              </div>
            </div>
          </div>
        </section>

        {/* Values */}
        <section className="section-alt">
          <div className="container">
            <div className="text-center mb-12">
              <Badge className="mb-4">Our Values</Badge>
              <h2>What Makes Us Different</h2>
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

        {/* Gallery row */}
        <section className="section">
          <div className="container">
            <div className="grid grid-cols-3 gap-4">
              {[
                { src: "/images/_wp-content_uploads_2025_12_Food-Tour-Group-Montmartre-Paris-1024x683.jpg", alt: "Group food tour Montmartre Paris" },
                { src: "/images/_wp-content_uploads_2025_12_Tasting-room-montmartre-foodtour-768x1024.webp", alt: "Tasting room Montmartre food tour" },
                { src: "/images/_wp-content_uploads_2025_12_moulin-de-montmartre-paris-food-tour.webp", alt: "Moulin de Montmartre Paris food tour" },
              ].map((img) => (
                <div key={img.src} className="relative aspect-video rounded-[var(--radius-lg)] overflow-hidden">
                  <Image src={img.src} alt={img.alt} fill className="object-cover" sizes="33vw" />
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* CTA */}
        <section className="section-alt text-center">
          <div className="container max-w-xl mx-auto">
            <h2 className="mb-4">Come Join the Table</h2>
            <p className="text-[var(--color-charcoal-light)] text-lg mb-8">
              Whether you're a first-time visitor or a longtime Paris lover, I promise you'll
              discover something new — and leave with a full stomach.
            </p>
            <Button href="/food-tour" variant="secondary" icon={<ArrowRight size={18} />}>
              See the Tour
            </Button>
          </div>
        </section>
      </main>
      <Footer />
    </>
  );
}
