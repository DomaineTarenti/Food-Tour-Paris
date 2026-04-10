import { Star } from "lucide-react";

const platforms = [
  { name: "TripAdvisor", rating: "4.9", reviews: "120+" },
  { name: "Google", rating: "5.0", reviews: "80+" },
  { name: "Viator", rating: "4.9", reviews: "50+" },
  { name: "GetYourGuide", rating: "5.0", reviews: "30+" },
];

export function TrustBar() {
  return (
    <div className="bg-white border-y border-[var(--color-cream-dark)] py-5">
      <div className="container">
        <div className="flex flex-col sm:flex-row items-center gap-6 sm:gap-0">
          {/* Label */}
          <span
            className="text-xs font-500 uppercase tracking-[0.12em] text-[var(--color-charcoal-light)] whitespace-nowrap sm:pr-8 sm:border-r border-[var(--color-cream-dark)]"
            style={{ fontFamily: "var(--font-dm-sans)" }}
          >
            As seen on
          </span>

          {/* Platforms */}
          <div className="flex flex-wrap justify-center sm:justify-start gap-6 sm:pl-8">
            {platforms.map((p) => (
              <div key={p.name} className="flex items-center gap-2">
                <div className="flex gap-0.5">
                  {[...Array(5)].map((_, i) => (
                    <Star key={i} size={11} className="fill-[var(--color-gold)] text-[var(--color-gold)]" />
                  ))}
                </div>
                <span
                  className="text-sm text-[var(--color-charcoal)]"
                  style={{ fontFamily: "var(--font-dm-sans)" }}
                >
                  <strong className="font-600">{p.rating}</strong>
                  <span className="text-[var(--color-charcoal-light)]"> on {p.name}</span>
                </span>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}
