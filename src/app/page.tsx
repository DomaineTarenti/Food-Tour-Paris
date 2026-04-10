import type { Metadata } from "next";
import { Header } from "@/components/layout/Header";
import { Footer } from "@/components/layout/Footer";
import { Hero } from "@/components/sections/Hero";
import { TrustBar } from "@/components/sections/TrustBar";
import { TourHighlights } from "@/components/sections/TourHighlights";
import { FoodGallery } from "@/components/sections/FoodGallery";
import { Journey } from "@/components/sections/Journey";
import { Testimonials } from "@/components/sections/Testimonials";
import { MeetGuide } from "@/components/sections/MeetGuide";
import { Pricing } from "@/components/sections/Pricing";
import { HomeFAQ } from "@/components/sections/HomeFAQ";
import { FinalCTA } from "@/components/sections/FinalCTA";

export const metadata: Metadata = {
  title: "French Food Tour Paris — Authentic Montmartre Food & Wine Experience",
  description:
    "Discover the real Paris through its flavors. Join our signature 3-hour food & wine tour in Montmartre — cheese, pastries, wine & hidden gems with a local guide. Max 8 guests. Book now!",
  alternates: {
    canonical: "https://www.frenchfoodtour.com",
  },
  openGraph: {
    images: ["/images/_wp-content_uploads_2025_12_wine-and-cheese-tasting-montmartre-food-tour-scaled.webp"],
  },
};

export default function HomePage() {
  return (
    <>
      <Header />
      <main>
        {/* 1 — Hero cinématique */}
        <Hero />

        {/* 2 — Barre de confiance (plateformes + notes) */}
        <TrustBar />

        {/* 3 — Présentation du tour */}
        <TourHighlights />

        {/* 4 — Galerie gastronomique */}
        <FoodGallery />

        {/* 5 — Parcours étape par étape */}
        <Journey />

        {/* 6 — Témoignages clients */}
        <Testimonials />

        {/* 7 — Le guide */}
        <MeetGuide />

        {/* 8 — Tarifs */}
        <Pricing />

        {/* 9 — FAQ */}
        <HomeFAQ />

        {/* 10 — CTA final */}
        <FinalCTA />
      </main>
      <Footer />
    </>
  );
}
