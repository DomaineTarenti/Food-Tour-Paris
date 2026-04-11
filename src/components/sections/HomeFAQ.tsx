"use client";

import { useState } from "react";
import Link from "next/link";
import { Plus, Minus, ArrowRight } from "lucide-react";

const faqs = [
  {
    q: "Where does the tour start?",
    a: "We meet at Place des Abbesses — right outside the metro stop, where a light blue umbrella will be waiting for you. Full details are sent by email after booking. Abbesses is on metro line 12.",
  },
  {
    q: "Can you accommodate dietary restrictions?",
    a: "Yes — please mention your requirements at booking. We accommodate vegetarians and most food allergies with advance notice. The tour centers around cheese, charcuterie, and wine, so it's not suitable for vegans.",
  },
  {
    q: "How do I cancel or reschedule?",
    a: "Free cancellation up to 24 hours before your tour, with a full refund. Within 24 hours, the booking is non-refundable. To reschedule, just contact us — we'll always do our best to accommodate you.",
  },
  {
    q: "Is it suitable for children?",
    a: "The tour is designed for adults and older teenagers (14+). Younger children are welcome with a parent, but note that tastings include wine.",
  },
];

export function HomeFAQ() {
  const [open, setOpen] = useState<number | null>(null);

  return (
    <section className="section-alt">
      <div className="container max-w-3xl mx-auto">
        {/* Header */}
        <div className="text-center mb-12">
          <p
            className="text-xs font-500 uppercase tracking-[0.12em] text-[var(--color-charcoal-light)] mb-3"
            style={{ fontFamily: "var(--font-dm-sans)" }}
          >
            FAQ
          </p>
          <h2>Common Questions</h2>
        </div>

        {/* Accordion */}
        <div className="space-y-3">
          {faqs.map((faq, i) => {
            const isOpen = open === i;
            return (
              <div
                key={i}
                className="card overflow-hidden"
              >
                <button
                  className="w-full flex items-center justify-between gap-4 px-7 py-5 text-left"
                  onClick={() => setOpen(isOpen ? null : i)}
                  aria-expanded={isOpen}
                >
                  <span
                    className="font-600 text-[var(--color-charcoal)] text-sm"
                    style={{ fontFamily: "var(--font-dm-sans)" }}
                  >
                    {faq.q}
                  </span>
                  <span className="flex-shrink-0 w-7 h-7 rounded-full bg-[var(--color-cream-dark)] flex items-center justify-center">
                    {isOpen
                      ? <Minus size={14} className="text-[var(--color-bordeaux)]" />
                      : <Plus size={14} className="text-[var(--color-bordeaux)]" />
                    }
                  </span>
                </button>
                {isOpen && (
                  <div
                    className="px-7 pb-6 text-sm text-[var(--color-charcoal-light)] leading-relaxed border-t border-[var(--color-cream-dark)]"
                    style={{ fontFamily: "var(--font-dm-sans)" }}
                  >
                    <p className="pt-4">{faq.a}</p>
                  </div>
                )}
              </div>
            );
          })}
        </div>

        {/* Link to full FAQ */}
        <div className="text-center mt-8">
          <Link
            href="/faq"
            className="inline-flex items-center gap-2 text-[var(--color-bordeaux)] font-600 text-sm hover:text-[var(--color-bordeaux-dark)] transition-colors"
            style={{ fontFamily: "var(--font-dm-sans)" }}
          >
            See all questions
            <ArrowRight size={15} />
          </Link>
        </div>
      </div>
    </section>
  );
}
