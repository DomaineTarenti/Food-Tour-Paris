import Image from "next/image";

const foods = [
  {
    src: "/images/_wp-content_uploads_2025_12_wine-cheese-tasting-montmartre-paris-food-tour-1024x1024.webp",
    alt: "Wine and cheese tasting Montmartre",
    label: "Wine & Cheese",
    span: "col-span-1 row-span-2",
  },
  {
    src: "/images/_wp-content_uploads_2025_12_baguette-1024x683.jpg",
    alt: "Fresh baguette from a Paris boulangerie",
    label: "Fresh Baguette",
    span: "col-span-1 row-span-1",
  },
  {
    src: "/images/_wp-content_uploads_2025_12_paris-food-tour-traditional-french-dishes-1024x683.webp",
    alt: "Traditional French dishes Paris food tour",
    label: "French Charcuterie",
    span: "col-span-1 row-span-1",
  },
  {
    src: "/images/_wp-content_uploads_2025_12_french-food-tour-paris-bakery-experience-1024x683.webp",
    alt: "Paris bakery experience food tour",
    label: "Boulangerie Stop",
    span: "col-span-1 row-span-1",
  },
  {
    src: "/images/_wp-content_uploads_2025_12_Tasting-room-montmartre-foodtour-768x1024.webp",
    alt: "Tasting room Montmartre food tour",
    label: "Artisan Cheese",
    span: "col-span-1 row-span-1",
  },
  {
    src: "/images/_wp-content_uploads_2025_12_wine-tasting-paris-food-tour-montmartre-1-1024x683.webp",
    alt: "Wine tasting Paris food tour Montmartre",
    label: "Natural Wine",
    span: "col-span-1 row-span-1",
  },
];

export function FoodGallery() {
  return (
    <section className="section-alt overflow-hidden">
      <div className="container">
        {/* Header */}
        <div className="text-center mb-12">
          <p
            className="text-xs font-500 uppercase tracking-[0.12em] text-[var(--color-charcoal-light)] mb-3"
            style={{ fontFamily: "var(--font-dm-sans)" }}
          >
            What You&apos;ll Taste
          </p>
          <h2>
            A Feast for the Eyes<br />
            <span className="text-[var(--color-bordeaux)]">&amp; the Palate</span>
          </h2>
        </div>

        {/* Mosaic grid */}
        <div className="grid grid-cols-3 grid-rows-3 gap-3 h-[560px] md:h-[680px]">
          {/* Large left cell */}
          <div className="col-span-1 row-span-2 relative rounded-[var(--radius-lg)] overflow-hidden group">
            <Image
              src={foods[0].src}
              alt={foods[0].alt}
              fill
              className="object-cover transition-transform duration-700 group-hover:scale-105"
              sizes="33vw"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-[var(--color-charcoal)]/60 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
            <span
              className="absolute bottom-4 left-4 text-white text-sm font-500 opacity-0 group-hover:opacity-100 transition-opacity duration-300"
              style={{ fontFamily: "var(--font-dm-sans)" }}
            >
              {foods[0].label}
            </span>
          </div>

          {/* Top-right 2 cells */}
          {foods.slice(1, 3).map((f) => (
            <div key={f.src} className="col-span-1 row-span-1 relative rounded-[var(--radius-lg)] overflow-hidden group">
              <Image
                src={f.src}
                alt={f.alt}
                fill
                className="object-cover transition-transform duration-700 group-hover:scale-105"
                sizes="33vw"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-[var(--color-charcoal)]/60 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
              <span
                className="absolute bottom-3 left-3 text-white text-xs font-500 opacity-0 group-hover:opacity-100 transition-opacity duration-300"
                style={{ fontFamily: "var(--font-dm-sans)" }}
              >
                {f.label}
              </span>
            </div>
          ))}

          {/* Bottom row: 3 cells */}
          {foods.slice(3, 6).map((f) => (
            <div key={f.src} className="col-span-1 row-span-1 relative rounded-[var(--radius-lg)] overflow-hidden group">
              <Image
                src={f.src}
                alt={f.alt}
                fill
                className="object-cover transition-transform duration-700 group-hover:scale-105"
                sizes="33vw"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-[var(--color-charcoal)]/60 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
              <span
                className="absolute bottom-3 left-3 text-white text-xs font-500 opacity-0 group-hover:opacity-100 transition-opacity duration-300"
                style={{ fontFamily: "var(--font-dm-sans)" }}
              >
                {f.label}
              </span>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
