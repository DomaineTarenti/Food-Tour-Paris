import type { Metadata } from "next";
import { Header } from "@/components/layout/Header";
import { Footer } from "@/components/layout/Footer";
import { Badge } from "@/components/ui/Badge";
import { Mail, MapPin, Clock } from "lucide-react";

export const metadata: Metadata = {
  title: "Contact — Get in Touch",
  description:
    "Questions about the Paris food tour? Get in touch — we reply within 24 hours. We'd love to hear from you.",
  alternates: { canonical: "https://www.frenchfoodtour.com/contact" },
};

export default function ContactPage() {
  return (
    <>
      <Header />
      <main className="pt-20">
        <section className="section">
          <div className="container max-w-4xl mx-auto">
            <div className="text-center mb-14">
              <Badge className="mb-4">Get in Touch</Badge>
              <h1 className="mb-4">We'd Love to Hear From You</h1>
              <p className="text-lg text-[var(--color-charcoal-light)]">
                Questions, special requests, or just want to say hello — we reply within 24 hours.
              </p>
            </div>

            <div className="grid lg:grid-cols-5 gap-12">
              {/* Contact info */}
              <div className="lg:col-span-2 space-y-8">
                {[
                  {
                    icon: Mail,
                    title: "Email",
                    value: "hello@frenchfoodtour.com",
                    sub: "We reply within 24 hours",
                  },
                  {
                    icon: MapPin,
                    title: "Location",
                    value: "Montmartre, Paris",
                    sub: "18th arrondissement",
                  },
                  {
                    icon: Clock,
                    title: "Response time",
                    value: "Within 24 hours",
                    sub: "Mon–Sun, 9am–7pm",
                  },
                ].map(({ icon: Icon, title, value, sub }) => (
                  <div key={title} className="flex gap-4">
                    <div className="w-11 h-11 rounded-[var(--radius-md)] bg-[var(--color-cream-dark)] flex items-center justify-center flex-shrink-0">
                      <Icon size={18} className="text-[var(--color-bordeaux)]" />
                    </div>
                    <div>
                      <p className="font-sans text-xs font-500 uppercase tracking-wider text-[var(--color-charcoal-light)] mb-0.5">{title}</p>
                      <p className="font-sans font-600 text-[var(--color-charcoal)]">{value}</p>
                      <p className="font-sans text-xs text-[var(--color-charcoal-light)] mt-0.5">{sub}</p>
                    </div>
                  </div>
                ))}
              </div>

              {/* Contact form */}
              <div className="lg:col-span-3 card p-8">
                <form className="space-y-5" action="mailto:hello@frenchfoodtour.com" method="POST">
                  <div className="grid sm:grid-cols-2 gap-5">
                    <div>
                      <label htmlFor="first-name" className="block font-sans text-sm font-500 text-[var(--color-charcoal)] mb-2">
                        First name
                      </label>
                      <input
                        id="first-name"
                        name="first-name"
                        type="text"
                        autoComplete="given-name"
                        required
                        className="w-full px-4 py-3 rounded-[var(--radius-md)] border border-[var(--color-cream-dark)] bg-[var(--color-cream)] font-sans text-sm text-[var(--color-charcoal)] placeholder:text-[var(--color-charcoal-light)]/50 focus:outline-none focus:ring-2 focus:ring-[var(--color-bordeaux)] focus:border-transparent transition"
                        placeholder="Marie"
                      />
                    </div>
                    <div>
                      <label htmlFor="last-name" className="block font-sans text-sm font-500 text-[var(--color-charcoal)] mb-2">
                        Last name
                      </label>
                      <input
                        id="last-name"
                        name="last-name"
                        type="text"
                        autoComplete="family-name"
                        required
                        className="w-full px-4 py-3 rounded-[var(--radius-md)] border border-[var(--color-cream-dark)] bg-[var(--color-cream)] font-sans text-sm text-[var(--color-charcoal)] placeholder:text-[var(--color-charcoal-light)]/50 focus:outline-none focus:ring-2 focus:ring-[var(--color-bordeaux)] focus:border-transparent transition"
                        placeholder="Dupont"
                      />
                    </div>
                  </div>

                  <div>
                    <label htmlFor="email" className="block font-sans text-sm font-500 text-[var(--color-charcoal)] mb-2">
                      Email address
                    </label>
                    <input
                      id="email"
                      name="email"
                      type="email"
                      autoComplete="email"
                      required
                      className="w-full px-4 py-3 rounded-[var(--radius-md)] border border-[var(--color-cream-dark)] bg-[var(--color-cream)] font-sans text-sm text-[var(--color-charcoal)] placeholder:text-[var(--color-charcoal-light)]/50 focus:outline-none focus:ring-2 focus:ring-[var(--color-bordeaux)] focus:border-transparent transition"
                      placeholder="marie@example.com"
                    />
                  </div>

                  <div>
                    <label htmlFor="subject" className="block font-sans text-sm font-500 text-[var(--color-charcoal)] mb-2">
                      Subject
                    </label>
                    <select
                      id="subject"
                      name="subject"
                      className="w-full px-4 py-3 rounded-[var(--radius-md)] border border-[var(--color-cream-dark)] bg-[var(--color-cream)] font-sans text-sm text-[var(--color-charcoal)] focus:outline-none focus:ring-2 focus:ring-[var(--color-bordeaux)] focus:border-transparent transition"
                    >
                      <option value="">Select a subject</option>
                      <option value="booking">Booking question</option>
                      <option value="group">Private / group tour</option>
                      <option value="dietary">Dietary requirements</option>
                      <option value="other">Other</option>
                    </select>
                  </div>

                  <div>
                    <label htmlFor="message" className="block font-sans text-sm font-500 text-[var(--color-charcoal)] mb-2">
                      Message
                    </label>
                    <textarea
                      id="message"
                      name="message"
                      rows={5}
                      required
                      className="w-full px-4 py-3 rounded-[var(--radius-md)] border border-[var(--color-cream-dark)] bg-[var(--color-cream)] font-sans text-sm text-[var(--color-charcoal)] placeholder:text-[var(--color-charcoal-light)]/50 focus:outline-none focus:ring-2 focus:ring-[var(--color-bordeaux)] focus:border-transparent transition resize-none"
                      placeholder="Tell us how we can help…"
                    />
                  </div>

                  <button type="submit" className="btn-primary w-full justify-center">
                    Send Message
                  </button>
                </form>
              </div>
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </>
  );
}
