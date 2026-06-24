import Link from "next/link";
import { ArrowRight, Users } from "lucide-react";

export function PrivateToursBanner() {
  return (
    <section className="bg-[var(--color-bordeaux)] py-14">
      <div className="container">
        <div className="flex flex-col md:flex-row items-center justify-between gap-8 max-w-4xl mx-auto">
          <div className="flex items-start gap-5">
            <div className="w-12 h-12 rounded-full bg-white/10 flex items-center justify-center flex-shrink-0 mt-0.5">
              <Users size={22} className="text-white" />
            </div>
            <div>
              <h2
                className="text-white text-xl font-700 mb-2 leading-snug"
                style={{ fontFamily: "var(--font-playfair)" }}
              >
                Coming as a group?
              </h2>
              <p
                className="text-white/70 text-sm leading-relaxed max-w-md"
                style={{ fontFamily: "var(--font-dm-sans)" }}
              >
                Private tours for couples, families, corporate teams and special occasions.
                Fully customised — no strangers, your pace, your preferences.
              </p>
            </div>
          </div>
          <Link
            href="/private-tours"
            className="flex-shrink-0 inline-flex items-center gap-2 px-8 py-3.5 rounded-full bg-[var(--color-gold)] text-[var(--color-charcoal)] font-600 text-sm hover:bg-[var(--color-gold-light)] transition-all whitespace-nowrap"
            style={{ fontFamily: "var(--font-dm-sans)" }}
          >
            Explore Private Tours
            <ArrowRight size={16} />
          </Link>
        </div>
      </div>
    </section>
  );
}
