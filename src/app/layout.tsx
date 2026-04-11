import type { Metadata } from "next";
import { Playfair_Display, DM_Sans, Cormorant_Garamond } from "next/font/google";
import "./globals.css";

const playfair = Playfair_Display({
  variable: "--font-playfair",
  subsets: ["latin"],
  weight: ["400", "600", "700"],
  display: "swap",
});

const dmSans = DM_Sans({
  variable: "--font-dm-sans",
  subsets: ["latin"],
  weight: ["300", "400", "500", "600"],
  display: "swap",
});

const cormorant = Cormorant_Garamond({
  variable: "--font-cormorant",
  subsets: ["latin"],
  weight: ["400"],
  style: ["italic"],
  display: "swap",
});

export const metadata: Metadata = {
  title: {
    default: "French Food Tour Paris — Authentic Montmartre Food & Wine Experience",
    template: "%s | French Food Tour Paris",
  },
  description:
    "Discover the real Paris through its flavors. Join our signature food tour in Montmartre — wine, cheese, pastries & hidden gems with a local guide.",
  keywords: [
    "food tour Paris",
    "Montmartre food tour",
    "Paris food and wine experience",
    "best food tour Paris",
    "guided food tour Paris",
    "wine tasting Paris",
    "French food experience",
  ],
  authors: [{ name: "French Food Tour" }],
  creator: "French Food Tour",
  metadataBase: new URL("https://www.frenchfoodtour.com"),
  openGraph: {
    type: "website",
    locale: "en_US",
    url: "https://www.frenchfoodtour.com",
    siteName: "French Food Tour",
    title: "French Food Tour Paris — Authentic Montmartre Food & Wine Experience",
    description:
      "Discover the real Paris through its flavors. Join our signature food tour in Montmartre — wine, cheese, pastries & hidden gems with a local guide.",
  },
  twitter: {
    card: "summary_large_image",
    title: "French Food Tour Paris",
    description: "Authentic food & wine experience in Montmartre with a local guide.",
  },
  robots: {
    index: true,
    follow: true,
    googleBot: { index: true, follow: true },
  },
};

const localBusinessSchema = {
  "@context": "https://schema.org",
  "@type": ["TouristAttraction", "LocalBusiness"],
  name: "French Food Tour Paris",
  description:
    "Authentic 3-hour food tour in Paris led by a former top-10 restaurant professional. 12 tastings: cheese, wine, charcuterie, pastries, oysters & restaurant finale. Maximum 10 guests.",
  url: "https://www.frenchfoodtour.com",
  email: "contact@frenchfoodtour.com",
  address: {
    "@type": "PostalAddress",
    streetAddress: "Place des Abbesses",
    addressLocality: "Paris",
    postalCode: "75018",
    addressCountry: "FR",
  },
  geo: {
    "@type": "GeoCoordinates",
    latitude: 48.8843,
    longitude: 2.3384,
  },
  priceRange: "€€",
  image:
    "https://www.frenchfoodtour.com/images/_wp-content_uploads_2025_12_wine-and-cheese-tasting-montmartre-food-tour-scaled.webp",
  aggregateRating: {
    "@type": "AggregateRating",
    ratingValue: "5.0",
    reviewCount: "70",
    bestRating: "5",
  },
  availableLanguage: ["English", "French"],
  touristType: "Food lover, Wine enthusiast, Cultural traveler",
  openingHoursSpecification: [
    {
      "@type": "OpeningHoursSpecification",
      dayOfWeek: ["Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday", "Sunday"],
      opens: "09:00",
      closes: "18:00",
    },
  ],
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="en"
      className={`${playfair.variable} ${dmSans.variable} ${cormorant.variable} h-full antialiased`}
    >
      <head>
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(localBusinessSchema) }}
        />
        {/* Preconnect to Google Fonts CDN for faster font load */}
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="anonymous" />
      </head>
      <body className="min-h-full flex flex-col bg-[var(--color-cream)] text-[var(--color-charcoal)]">
        {children}
        {/* Bokun script is loaded only on /book — not here */}
      </body>
    </html>
  );
}
