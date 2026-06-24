const steps = [
  {
    num: "01",
    title: "Meet at Anvers",
    body: "We gather at the Anvers metro stop in Montmartre. Look for the light blue umbrella.",
    tag: "The Welcome",
  },
  {
    num: "02",
    title: "The Fromagerie",
    body: "One of the best cheese shops in the city. Discover the beauty and the endless depth of French cheese, 4 carefully selected varieties with wine pairings.",
    tag: "Wine & Cheese",
  },
  {
    num: "03",
    title: "The Boulangerie",
    body: "Warm baguette straight from the oven, daily-made pastries waiting for you. You're welcome.",
    tag: "Bread & Pastries",
  },
  {
    num: "04",
    title: "The Butcher",
    body: "The iconic butcher shop of Montmartre, a heaven for meat from carefully selected animals, grass-fed and farm-raised. The way it should be everywhere.",
    tag: "Charcuterie & Wine",
  },
  {
    num: "05",
    title: "The Seafood Stop",
    body: "A little bite out of the sea. No worries if you're not a big seafood lover, it is just one tasting throughout the entire experience, but it's one you won't forget.",
    tag: "From the Sea",
  },
  {
    num: "06",
    title: "The Chocolate Maker",
    body: "An artisan chocolatier nestled in the heart of Montmartre. Watch the craft up close and taste the difference between mass-produced chocolate and the real thing, made with care and a genuine passion for the craft.",
    tag: "Artisan Chocolate",
  },
  {
    num: "07",
    title: "Our Restaurant",
    body: "The tour ends with a relaxed full tasting menu at a cozy local restaurant, wine and cheeses included. A real taste of French gastronomy. You'll be so full, the end of the tour will be the only time you'll say no to French food.",
    tag: "The Grand Finale",
  },
];

export function Journey() {
  return (
    <section className="section">
      <div className="container">
        <div className="max-w-3xl mx-auto">
          {/* Header */}
          <div className="text-center mb-14">
            <p
              className="text-xs font-500 uppercase tracking-[0.12em] text-[var(--color-charcoal-light)] mb-3"
              style={{ fontFamily: "var(--font-dm-sans)" }}
            >
              The Itinerary
            </p>
            <h2>
              Your 3-Hour<br />
              <span className="text-[var(--color-bordeaux)]">Montmartre Adventure</span>
            </h2>
          </div>

          {/* Steps */}
          <ol className="relative">
            {/* Vertical line */}
            <div
              className="absolute left-7 top-4 bottom-4 w-px bg-gradient-to-b from-[var(--color-bordeaux)] via-[var(--color-gold)] to-[var(--color-sage)]"
              aria-hidden="true"
            />

            {steps.map((step, i) => (
              <li key={step.num} className="relative flex gap-8 pb-12 last:pb-0">
                {/* Number bubble */}
                <div
                  className="relative z-10 flex-shrink-0 w-14 h-14 rounded-full bg-[var(--color-bordeaux)] text-white flex items-center justify-center shadow-[var(--shadow-cta)]"
                  aria-hidden="true"
                >
                  <span className="text-lg font-bold" style={{ fontFamily: "var(--font-playfair)" }}>
                    {step.num}
                  </span>
                </div>

                {/* Content */}
                <div className="pt-3">
                  <span
                    className="inline-block text-[10px] font-600 uppercase tracking-[0.14em] text-[var(--color-gold)] mb-1"
                    style={{ fontFamily: "var(--font-dm-sans)" }}
                  >
                    {step.tag}
                  </span>
                  <h3
                    className="text-lg font-600 text-[var(--color-charcoal)] mb-2"
                    style={{ fontFamily: "var(--font-dm-sans)" }}
                  >
                    {step.title}
                  </h3>
                  <p
                    className="text-[var(--color-charcoal-light)] leading-relaxed text-sm"
                    style={{ fontFamily: "var(--font-dm-sans)" }}
                  >
                    {step.body}
                  </p>
                </div>
              </li>
            ))}
          </ol>
        </div>
      </div>
    </section>
  );
}
