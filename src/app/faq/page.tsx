import type { Metadata } from "next";
import { Header } from "@/components/layout/Header";
import { Footer } from "@/components/layout/Footer";
import { Button } from "@/components/ui/Button";
import { Badge } from "@/components/ui/Badge";
import { ArrowRight } from "lucide-react";

export const metadata: Metadata = {
  title: "FAQ — Frequently Asked Questions",
  description:
    "Everything you need to know about the French Food Tour in Paris: meeting point, dietary restrictions, group size, booking & cancellation policy.",
  alternates: { canonical: "https://www.frenchfoodtour.com/faq" },
};

const faqs = [
  {
    q: "Where does the tour start?",
    a: "We meet at the steps of Sacré-Cœur Basilica in Montmartre. Exact meeting instructions are sent by email upon booking. The area is easily accessible by metro (line 2, Anvers station) or by funicular.",
  },
  {
    q: "How long is the tour?",
    a: "The tour runs for approximately 3 hours, covering about 2km on foot through the streets of Montmartre. The pace is relaxed — we stop often to eat, drink, and chat.",
  },
  {
    q: "How many people are in each group?",
    a: "We keep groups small — a maximum of 8 guests per tour. This allows for a genuine, intimate experience where everyone gets personal attention from the guide.",
  },
  {
    q: "What food and drink is included?",
    a: "You'll enjoy 6–8 tastings throughout the tour, including wine, artisan cheese, charcuterie, fresh bread, pastries, and seasonal specialties. All food and drinks are fully included in the price.",
  },
  {
    q: "Can you accommodate dietary restrictions?",
    a: "Please mention any dietary requirements at the time of booking. We can accommodate vegetarians and most food allergies. Unfortunately, we cannot accommodate vegans on this tour as cheese and charcuterie are central to the experience.",
  },
  {
    q: "Is the tour suitable for children?",
    a: "The tour is best suited for adults and older teenagers (14+). Children under 14 are welcome if accompanied by a parent, but please note the tour involves wine tastings.",
  },
  {
    q: "What is the cancellation policy?",
    a: "We offer free cancellation up to 48 hours before the start of your tour. Cancellations made within 48 hours are non-refundable. In case of extreme weather, we may reschedule your tour at no extra cost.",
  },
  {
    q: "Is the tour conducted in English?",
    a: "Yes, all our tours are conducted in English. French-language tours can be arranged for groups — please contact us for more information.",
  },
  {
    q: "Do I need to tip the guide?",
    a: "Tips are not required but are warmly appreciated if you enjoyed your experience. There's no set amount — simply whatever feels right.",
  },
  {
    q: "How do I book?",
    a: "Click the 'Book Now' button, select your preferred date and number of guests, and complete the secure payment. You'll receive a confirmation email with all the details immediately.",
  },
];

export default function FaqPage() {
  return (
    <>
      <Header />
      <main className="pt-20">
        <section className="section">
          <div className="container max-w-3xl mx-auto">
            <div className="text-center mb-14">
              <Badge className="mb-4">FAQ</Badge>
              <h1 className="mb-4">Frequently Asked Questions</h1>
              <p className="text-lg text-[var(--color-charcoal-light)]">
                Everything you need to know before joining us in Montmartre.
              </p>
            </div>

            <div className="space-y-6">
              {faqs.map((faq, i) => (
                <div key={i} className="card p-7">
                  <h2 className="font-sans text-base font-600 text-[var(--color-bordeaux-dark)] mb-3 text-left">
                    {faq.q}
                  </h2>
                  <p className="font-sans text-sm text-[var(--color-charcoal-light)] leading-relaxed">
                    {faq.a}
                  </p>
                </div>
              ))}
            </div>

            <div className="mt-14 text-center card p-10 bg-[var(--color-cream-dark)]">
              <h2 className="text-xl mb-3">Still have questions?</h2>
              <p className="text-[var(--color-charcoal-light)] mb-6">
                We're happy to help. Send us a message and we'll get back to you within 24 hours.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <Button href="/contact" variant="secondary" icon={<ArrowRight size={18} />}>
                  Contact Us
                </Button>
                <Button href="/book" icon={<ArrowRight size={18} />}>
                  Book Now
                </Button>
              </div>
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </>
  );
}
