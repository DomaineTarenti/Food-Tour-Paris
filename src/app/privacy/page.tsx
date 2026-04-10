import type { Metadata } from "next";
import { Header } from "@/components/layout/Header";
import { Footer } from "@/components/layout/Footer";

export const metadata: Metadata = {
  title: "Privacy Policy — French Food Tour",
  description: "How French Food Tour collects, uses and protects your personal data.",
  alternates: { canonical: "https://www.frenchfoodtour.com/privacy" },
};

export default function PrivacyPage() {
  return (
    <>
      <Header />
      <main className="pt-20">
        <section className="section">
          <div className="container max-w-2xl mx-auto">
            <h1 className="mb-2">Privacy Policy</h1>
            <p className="text-sm text-[var(--color-charcoal-light)] mb-10">
              Last updated: 10 April 2026
            </p>

            <div className="space-y-8 text-[var(--color-charcoal-light)] leading-relaxed">
              <div>
                <h2 className="text-xl mb-3">1. Who We Are</h2>
                <p>
                  French Food Tour operates this website at frenchfoodtour.com. We provide food
                  and wine tours in Montmartre, Paris. For any privacy-related questions, contact
                  us at{" "}
                  <a
                    href="mailto:contact@frenchfoodtour.com"
                    className="text-[var(--color-bordeaux)] underline"
                  >
                    contact@frenchfoodtour.com
                  </a>
                  .
                </p>
              </div>

              <div>
                <h2 className="text-xl mb-3">2. Data We Collect</h2>
                <p>We collect information you provide directly, including:</p>
                <ul className="list-disc pl-6 mt-3 space-y-2">
                  <li>Name and email address when you contact us or book a tour</li>
                  <li>Booking details (date, number of guests, dietary requirements)</li>
                  <li>Payment information — processed securely by our booking provider Bókun</li>
                  <li>Messages you send via the contact form</li>
                </ul>
                <p className="mt-4">
                  We also collect limited technical data automatically: IP address, browser type,
                  pages visited and referring URL, via standard server logs and analytics.
                </p>
              </div>

              <div>
                <h2 className="text-xl mb-3">3. How We Use Your Data</h2>
                <ul className="list-disc pl-6 space-y-2">
                  <li>To process and manage your tour booking</li>
                  <li>To communicate with you about your reservation</li>
                  <li>To send you information you have requested</li>
                  <li>To improve our website and services</li>
                  <li>To comply with legal obligations</li>
                </ul>
                <p className="mt-4">
                  We do not sell, rent or share your personal data with third parties for
                  marketing purposes.
                </p>
              </div>

              <div>
                <h2 className="text-xl mb-3">4. Legal Basis (GDPR)</h2>
                <p>
                  We process your data on the following legal grounds: performance of a contract
                  (booking fulfilment), legitimate interests (website analytics, service
                  improvement), and your consent where applicable.
                </p>
              </div>

              <div>
                <h2 className="text-xl mb-3">5. Data Retention</h2>
                <p>
                  We retain booking and contact data for up to 3 years for legal and accounting
                  purposes. You may request deletion at any time subject to legal retention
                  requirements.
                </p>
              </div>

              <div>
                <h2 className="text-xl mb-3">6. Third-Party Services</h2>
                <p>We use the following services which may process your data:</p>
                <ul className="list-disc pl-6 mt-3 space-y-2">
                  <li>
                    <strong>Bókun</strong> — booking and payment processing
                  </li>
                  <li>
                    <strong>Vercel</strong> — website hosting
                  </li>
                  <li>
                    <strong>Google Analytics</strong> — anonymous website analytics (if
                    applicable)
                  </li>
                </ul>
                <p className="mt-4">
                  Each of these providers has their own privacy policy and data practices.
                </p>
              </div>

              <div>
                <h2 className="text-xl mb-3">7. Your Rights</h2>
                <p>Under GDPR, you have the right to:</p>
                <ul className="list-disc pl-6 mt-3 space-y-2">
                  <li>Access the personal data we hold about you</li>
                  <li>Request correction of inaccurate data</li>
                  <li>Request erasure of your data</li>
                  <li>Object to processing or request restriction</li>
                  <li>Data portability</li>
                  <li>Lodge a complaint with your national data protection authority</li>
                </ul>
                <p className="mt-4">
                  To exercise any of these rights, email us at{" "}
                  <a
                    href="mailto:contact@frenchfoodtour.com"
                    className="text-[var(--color-bordeaux)] underline"
                  >
                    contact@frenchfoodtour.com
                  </a>
                  .
                </p>
              </div>

              <div>
                <h2 className="text-xl mb-3">8. Cookies</h2>
                <p>
                  This website uses essential cookies necessary for its operation and, where
                  consented, analytics cookies to understand how visitors use the site. You can
                  control cookie preferences via your browser settings.
                </p>
              </div>

              <div>
                <h2 className="text-xl mb-3">9. Changes to This Policy</h2>
                <p>
                  We may update this policy from time to time. We will notify you of significant
                  changes by posting a notice on this page with the updated date.
                </p>
              </div>
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </>
  );
}
