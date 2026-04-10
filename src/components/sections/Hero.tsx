"use client";

import Image from "next/image";
import Link from "next/link";
import { ArrowRight, Star } from "lucide-react";

export function Hero() {
  return (
    <section className="relative min-h-screen flex items-center overflow-hidden bg-[var(--color-charcoal)]">
      {/* Background image */}
      <div className="absolute inset-0 z-0">
        <Image
          src="/images/_wp-content_uploads_2025_12_wine-and-cheese-tasting-montmartre-food-tour-scaled.webp"
          alt="Wine and cheese tasting in Montmartre Paris food tour"
          fill
          priority
          className="object-cover opacity-55"
          style={{ objectPosition: "center 85%" }}
          sizes="100vw"
        />
        {/* Centred gradient for legibility */}
        <div className="absolute inset-0 bg-[#1a0a06]/60" />
        <div className="absolute inset-0 bg-gradient-to-t from-[#1a0a06]/70 via-transparent to-transparent" />
      </div>

      {/* Content */}
      <div className="container relative z-10 pt-28 pb-24 flex flex-col items-center text-center">
        <div className="max-w-2xl">

          {/* Platform badge */}
          <div className="inline-flex items-center gap-2 bg-white/10 backdrop-blur-sm border border-white/20 rounded-full px-4 py-2 mb-8 mx-auto">
            <div className="flex gap-0.5">
              {[...Array(5)].map((_, i) => (
                <Star key={i} size={12} className="fill-[var(--color-gold)] text-[var(--color-gold)]" />
              ))}
            </div>
            <span className="text-white/90 text-xs font-sans font-500 tracking-wide">
              Rated #1 Food Tour in Montmartre
            </span>
          </div>

          {/* Headline */}
          <h1 className="text-white mb-6 leading-[1.05]" style={{ fontFamily: "var(--font-playfair)" }}>
            Taste the Real Paris,
            <br />
            <em className="not-italic" style={{ color: "var(--color-gold)" }}>
              One Bite at a Time
            </em>
          </h1>

          {/* Sub */}
          <p className="text-white/80 text-lg leading-relaxed mb-10 max-w-lg mx-auto" style={{ fontFamily: "var(--font-dm-sans)" }}>
            A 3-hour food & wine journey through the cobblestone streets of
            Montmartre — guided by a local, filled with hidden gems.
          </p>

          {/* Social proof */}
          <div className="flex items-center gap-3 mb-10 justify-center">
            <div className="flex gap-0.5">
              {[...Array(5)].map((_, i) => (
                <Star key={i} size={16} className="fill-[var(--color-gold)] text-[var(--color-gold)]" />
              ))}
            </div>
            <span className="text-white/70 text-sm" style={{ fontFamily: "var(--font-dm-sans)" }}>
              <strong className="text-white font-600">4.9 / 5</strong>
              &nbsp;·&nbsp;200+ happy guests
            </span>
          </div>

          {/* CTAs */}
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link
              href="/book"
              className="btn-primary text-base px-8 py-4 inline-flex items-center gap-2"
            >
              Book Your Spot
              <ArrowRight size={18} />
            </Link>
            <Link
              href="/food-tour"
              className="inline-flex items-center justify-center gap-2 px-8 py-4 rounded-full border-2 border-white/50 text-white font-sans font-600 text-base hover:bg-white/10 transition-colors"
            >
              Discover the Experience
            </Link>
          </div>

          {/* Trust line */}
          <div className="flex flex-wrap gap-5 mt-10 text-white/50 text-sm justify-center" style={{ fontFamily: "var(--font-dm-sans)" }}>
            <span className="flex items-center gap-1.5">
              <span className="w-1 h-1 rounded-full bg-[var(--color-gold)] inline-block" />
              Small groups · max 8
            </span>
            <span className="flex items-center gap-1.5">
              <span className="w-1 h-1 rounded-full bg-[var(--color-gold)] inline-block" />
              Local expert guide
            </span>
            <span className="flex items-center gap-1.5">
              <span className="w-1 h-1 rounded-full bg-[var(--color-gold)] inline-block" />
              Free cancellation
            </span>
          </div>
        </div>
      </div>

    </section>
  );
}
