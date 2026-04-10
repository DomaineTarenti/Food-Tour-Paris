import type { Metadata } from "next";
import Link from "next/link";
import Image from "next/image";
import { Header } from "@/components/layout/Header";
import { Footer } from "@/components/layout/Footer";
import { Badge } from "@/components/ui/Badge";
import { Button } from "@/components/ui/Button";
import { blogPosts } from "@/lib/blog-data";
import { ArrowRight, Clock } from "lucide-react";

export const metadata: Metadata = {
  title: "Blog — Paris Food & Wine Stories",
  description:
    "Insider guides to Parisian food culture: the best fromageries, natural wine bars, hidden boulangeries and local secrets from Montmartre.",
  alternates: { canonical: "https://www.frenchfoodtour.com/blog" },
};

function formatDate(dateStr: string) {
  return new Date(dateStr).toLocaleDateString("en-GB", {
    day: "numeric",
    month: "long",
    year: "numeric",
  });
}

export default function BlogPage() {
  const [featured, ...rest] = blogPosts;

  return (
    <>
      <Header />
      <main className="pt-20">
        {/* Hero */}
        <section className="section">
          <div className="container">
            <div className="text-center mb-14">
              <Badge className="mb-4">From the Table</Badge>
              <h1 className="mb-4">
                Stories from{" "}
                <span className="text-[var(--color-bordeaux)]">Montmartre</span>
              </h1>
              <p className="text-lg text-[var(--color-charcoal-light)] max-w-xl mx-auto">
                Insider guides, food culture deep-dives and local discoveries — written by
                someone who grew up eating here.
              </p>
            </div>

            {/* Featured post */}
            <Link
              href={`/blog/${featured.slug}`}
              className="group block card overflow-hidden mb-16"
            >
              <div className="grid lg:grid-cols-2">
                <div className="relative aspect-[4/3] lg:aspect-auto min-h-[300px]">
                  <Image
                    src={featured.coverImage}
                    alt={featured.coverAlt}
                    fill
                    className="object-cover transition-transform duration-500 group-hover:scale-105"
                    sizes="(max-width: 1024px) 100vw, 50vw"
                    priority
                  />
                </div>
                <div className="p-10 flex flex-col justify-center">
                  <div className="flex items-center gap-3 mb-4">
                    <Badge variant="gold">{featured.category}</Badge>
                    <span className="text-xs text-[var(--color-charcoal-light)]">
                      {formatDate(featured.date)}
                    </span>
                  </div>
                  <h2 className="text-2xl mb-4 group-hover:text-[var(--color-bordeaux)] transition-colors duration-200">
                    {featured.title}
                  </h2>
                  <p className="text-[var(--color-charcoal-light)] leading-relaxed mb-6">
                    {featured.excerpt}
                  </p>
                  <div className="flex items-center gap-2 text-sm text-[var(--color-charcoal-light)]">
                    <Clock size={14} />
                    <span>{featured.readTime} min read</span>
                  </div>
                </div>
              </div>
            </Link>

            {/* Grid */}
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
              {rest.map((post) => (
                <Link
                  key={post.slug}
                  href={`/blog/${post.slug}`}
                  className="group card flex flex-col overflow-hidden"
                >
                  <div className="relative aspect-video overflow-hidden">
                    <Image
                      src={post.coverImage}
                      alt={post.coverAlt}
                      fill
                      className="object-cover transition-transform duration-500 group-hover:scale-105"
                      sizes="(max-width: 768px) 100vw, (max-width: 1024px) 50vw, 33vw"
                    />
                  </div>
                  <div className="p-6 flex flex-col flex-1">
                    <div className="flex items-center gap-3 mb-3">
                      <Badge>{post.category}</Badge>
                      <span className="text-xs text-[var(--color-charcoal-light)]">
                        {formatDate(post.date)}
                      </span>
                    </div>
                    <h3 className="font-display text-lg font-700 text-[var(--color-bordeaux-dark)] mb-3 group-hover:text-[var(--color-bordeaux)] transition-colors duration-200 leading-snug">
                      {post.title}
                    </h3>
                    <p className="text-sm text-[var(--color-charcoal-light)] leading-relaxed flex-1 mb-4">
                      {post.excerpt}
                    </p>
                    <div className="flex items-center gap-2 text-xs text-[var(--color-charcoal-light)]">
                      <Clock size={12} />
                      <span>{post.readTime} min read</span>
                    </div>
                  </div>
                </Link>
              ))}
            </div>
          </div>
        </section>

        {/* CTA */}
        <section className="section-alt text-center">
          <div className="container max-w-xl mx-auto">
            <h2 className="mb-4">Ready to Taste It Yourself?</h2>
            <p className="text-[var(--color-charcoal-light)] text-lg mb-8">
              Reading about Montmartre's food is one thing. Walking through it with a local guide
              is something else entirely.
            </p>
            <Button href="/food-tour" icon={<ArrowRight size={18} />}>
              Discover the Tour
            </Button>
          </div>
        </section>
      </main>
      <Footer />
    </>
  );
}
