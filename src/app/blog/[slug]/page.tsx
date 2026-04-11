import type { Metadata } from "next";
import { notFound } from "next/navigation";
import Link from "next/link";
import Image from "next/image";
import { Header } from "@/components/layout/Header";
import { Footer } from "@/components/layout/Footer";
import { Badge } from "@/components/ui/Badge";
import { Button } from "@/components/ui/Button";
import { getBlogPost, getRelatedPosts, blogPosts, type ContentSection } from "@/lib/blog-data";
import { ArrowLeft, ArrowRight, Clock } from "lucide-react";

interface Props {
  params: Promise<{ slug: string }>;
}

export async function generateStaticParams() {
  return blogPosts.map((post) => ({ slug: post.slug }));
}

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { slug } = await params;
  const post = getBlogPost(slug);
  if (!post) return {};
  return {
    title: post.meta.title,
    description: post.meta.description,
    alternates: { canonical: `https://www.frenchfoodtour.com/blog/${post.slug}` },
    openGraph: {
      title: post.meta.title,
      description: post.meta.description,
      images: [{ url: post.coverImage, alt: post.coverAlt }],
    },
  };
}

function formatDate(dateStr: string) {
  return new Date(dateStr).toLocaleDateString("en-GB", {
    day: "numeric",
    month: "long",
    year: "numeric",
  });
}

function renderSection(section: ContentSection, idx: number) {
  switch (section.type) {
    case "p":
      return (
        <p key={idx} className="text-[var(--color-charcoal-light)] leading-relaxed">
          {section.text}
        </p>
      );
    case "h2":
      return (
        <h2 key={idx} className="mt-10 mb-4">
          {section.text}
        </h2>
      );
    case "h3":
      return (
        <h3 key={idx} className="mt-6 mb-3">
          {section.text}
        </h3>
      );
    case "ul":
      return (
        <ul key={idx} className="space-y-2 my-4 pl-5">
          {section.items.map((item, i) => (
            <li
              key={i}
              className="text-[var(--color-charcoal-light)] leading-relaxed list-disc"
            >
              {item}
            </li>
          ))}
        </ul>
      );
    case "blockquote":
      return (
        <blockquote key={idx}>
          {section.text}
        </blockquote>
      );
    case "tip":
      return (
        <div
          key={idx}
          className="my-6 rounded-[var(--radius-lg)] bg-[var(--color-sage-light)] border-l-4 border-[var(--color-sage)] px-6 py-5"
        >
          <p className="text-xs font-600 font-sans uppercase tracking-widest text-[var(--color-sage)] mb-1">
            {section.label}
          </p>
          <p className="text-sm text-[var(--color-charcoal)] leading-relaxed mb-0">
            {section.text}
          </p>
        </div>
      );
    case "cta":
      return (
        <div
          key={idx}
          className="my-10 rounded-[var(--radius-xl)] bg-[var(--color-bordeaux)] p-10 text-center"
        >
          <h3 className="font-display text-2xl font-700 text-white mb-3">
            Ready to Taste Montmartre?
          </h3>
          <p className="text-white/80 mb-6 max-w-md mx-auto">
            Join our intimate Montmartre Food & Wine Tour — 3 hours, 6–8 tastings, one unforgettable afternoon.
          </p>
          <Button href="/food-tour" style={{ background: "var(--color-gold)", borderColor: "var(--color-gold)", color: "var(--color-charcoal)" }}>
            Discover the Tour
          </Button>
        </div>
      );
    default:
      return null;
  }
}

export default async function BlogPostPage({ params }: Props) {
  const { slug } = await params;
  const post = getBlogPost(slug);
  if (!post) notFound();

  const related = getRelatedPosts(slug, 3);

  const blogSchema = {
    "@context": "https://schema.org",
    "@type": "BlogPosting",
    headline: post.title,
    description: post.excerpt,
    image: `https://www.frenchfoodtour.com${post.coverImage}`,
    datePublished: post.date,
    dateModified: post.date,
    author: {
      "@type": "Person",
      name: "French Food Tour Guide",
      url: "https://www.frenchfoodtour.com/about",
    },
    publisher: {
      "@type": "Organization",
      name: "French Food Tour",
      url: "https://www.frenchfoodtour.com",
      logo: {
        "@type": "ImageObject",
        url: "https://www.frenchfoodtour.com/images/_wp-content_uploads_2025_12_LE-FOODTOUR-1-edited.png",
      },
    },
    mainEntityOfPage: `https://www.frenchfoodtour.com/blog/${post.slug}`,
  };

  const breadcrumbSchema = {
    "@context": "https://schema.org",
    "@type": "BreadcrumbList",
    itemListElement: [
      { "@type": "ListItem", position: 1, name: "Home", item: "https://www.frenchfoodtour.com" },
      { "@type": "ListItem", position: 2, name: "Blog", item: "https://www.frenchfoodtour.com/blog" },
      { "@type": "ListItem", position: 3, name: post.title, item: `https://www.frenchfoodtour.com/blog/${post.slug}` },
    ],
  };

  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(blogSchema) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbSchema) }} />
      <Header />
      <main className="pt-20">
        {/* Cover */}
        <div className="relative h-[60vh] min-h-[380px] max-h-[520px]">
          <Image
            src={post.coverImage}
            alt={post.coverAlt}
            fill
            className="object-cover"
            sizes="100vw"
            priority
          />
          <div className="absolute inset-0 bg-gradient-to-t from-[var(--color-charcoal)] via-[rgba(44,24,16,0.4)] to-transparent" />
          <div className="absolute bottom-0 left-0 right-0 container pb-10">
            <div className="flex items-center gap-3 mb-4">
              <Badge variant="gold">{post.category}</Badge>
              <span className="text-white/80 text-sm">{formatDate(post.date)}</span>
              <span className="text-white/60 text-sm flex items-center gap-1">
                <Clock size={13} />
                {post.readTime} min read
              </span>
            </div>
            <h1 className="text-white max-w-3xl" style={{ color: "white" }}>
              {post.title}
            </h1>
          </div>
        </div>

        {/* Article */}
        <div className="section">
          <div className="container max-w-2xl mx-auto">
            <Link
              href="/blog"
              className="inline-flex items-center gap-2 text-sm text-[var(--color-charcoal-light)] hover:text-[var(--color-bordeaux)] transition-colors mb-10"
            >
              <ArrowLeft size={16} />
              All articles
            </Link>

            {/* Author byline */}
            <div className="flex items-center gap-3 mb-8">
              <div className="relative w-10 h-10 rounded-full overflow-hidden flex-shrink-0">
                <Image
                  src="/images/_wp-content_uploads_2025_12_authentic-paris-food-tour-local-guide-1-scaled.webp"
                  alt="French Food Tour local guide"
                  fill
                  className="object-cover object-top"
                  sizes="40px"
                />
              </div>
              <div>
                <p className="text-sm font-600 font-sans text-[var(--color-charcoal)]">French Food Tour Guide</p>
                <p className="text-xs text-[var(--color-charcoal-light)]">
                  Local guide & founder · {formatDate(post.date)}
                </p>
              </div>
            </div>

            <p className="text-lg text-[var(--color-charcoal-light)] italic leading-relaxed mb-8 border-b border-[var(--color-cream-dark)] pb-8">
              {post.excerpt}
            </p>

            <div className="space-y-4">
              {post.content.map((section, idx) => renderSection(section, idx))}
            </div>
          </div>
        </div>

        {/* Related posts */}
        {related.length > 0 && (
          <section className="section-alt">
            <div className="container">
              <h2 className="text-center mb-10">More from the Blog</h2>
              <div className="grid md:grid-cols-3 gap-8">
                {related.map((rp) => (
                  <Link
                    key={rp.slug}
                    href={`/blog/${rp.slug}`}
                    className="group card flex flex-col overflow-hidden"
                  >
                    <div className="relative aspect-video overflow-hidden">
                      <Image
                        src={rp.coverImage}
                        alt={rp.coverAlt}
                        fill
                        className="object-cover transition-transform duration-500 group-hover:scale-105"
                        sizes="(max-width: 768px) 100vw, 33vw"
                      />
                    </div>
                    <div className="p-6 flex flex-col flex-1">
                      <Badge className="mb-3 self-start">{rp.category}</Badge>
                      <h3 className="font-display text-base font-700 text-[var(--color-bordeaux-dark)] mb-2 group-hover:text-[var(--color-bordeaux)] transition-colors leading-snug">
                        {rp.title}
                      </h3>
                      <p className="text-xs text-[var(--color-charcoal-light)] flex items-center gap-1 mt-auto pt-3">
                        <Clock size={12} />
                        {rp.readTime} min read
                      </p>
                    </div>
                  </Link>
                ))}
              </div>
              <div className="text-center mt-10">
                <Button href="/blog" variant="secondary" icon={<ArrowRight size={18} />}>
                  All Articles
                </Button>
              </div>
            </div>
          </section>
        )}
      </main>
      <Footer />
    </>
  );
}
