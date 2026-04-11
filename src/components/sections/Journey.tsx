const steps = [
  {
    num: "01",
    title: "Meet at Abbesses",
    body: "We gather at the prettiest square of Montmartre, at the door of what we would call the Champs-Élysées of cafés. Look for the light blue umbrella.",
    tag: "The Welcome",
  },
  {
    num: "02",
    title: "The Fromagerie",
    body: "One of the best cheese shops in the city. Discover the beauty and the endless depth of French cheese — 4 carefully selected varieties with wine pairings.",
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
    body: "The iconic butcher shop of Montmartre — a heaven for meat from carefully selected animals, grass-fed and farm-raised. The way it should be everywhere.",
    tag: "Charcuterie & Wine",
  },
  {
    num: "05",
    title: "Our Restaurant",
    body: "The tour ends with a relaxed 3-course French meal at a cozy local restaurant — wine and cheeses included. A real taste of French gastronomy. The only time you'll say no to French food.",
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
