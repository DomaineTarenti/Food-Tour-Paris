import type { Metadata } from "next";
import { Header } from "@/components/layout/Header";
import { Footer } from "@/components/layout/Footer";

export const metadata: Metadata = {
  title: "Terms & Conditions — French Food Tour",
  description: "Terms and conditions for booking and participating in French Food Tour experiences in Montmartre, Paris.",
  alternates: { canonical: "https://www.frenchfoodtour.com/terms" },
};

export default function TermsPage() {
  return (
    <>
      <Header />
      <main className="pt-20">
        <section className="section">
          <div className="container max-w-2xl mx-auto">
            <h1 className="mb-2">Terms & Conditions</h1>
            <p className="text-sm text-[var(--color-charcoal-light)] mb-10">
              Last updated: 10 April 2026
            </p>

            <div className="space-y-8 text-[var(--color-charcoal-light)] leading-relaxed">
              <div>
                <h2 className="text-xl mb-3">1. The Service</h2>
                <p>
                  French Food Tour provides guided food and wine experiences in the Montmartre
                  neighborhood of Paris, France. By booking a tour, you agree to these terms.
                </p>
              </div>

              <div>
                <h2 className="text-xl mb-3">2. Booking and Payment</h2>
                <p>
                  All bookings are made through our booking partner Bókun. A booking is confirmed
                  only upon receipt of full payment. Prices are listed in euros and include all
                  tastings described in the tour overview.
                </p>
              </div>

              <div>
                <h2 className="text-xl mb-3">3. Cancellation Policy</h2>
                <ul className="list-disc pl-6 space-y-2">
                  <li>
                    <strong>More than 48 hours before the tour:</strong> Full refund
                  </li>
                  <li>
                    <strong>24–48 hours before the tour:</strong> 50% refund
                  </li>
                  <li>
                    <strong>Less than 24 hours before the tour:</strong> No refund
                  </li>
                </ul>
                <p className="mt-4">
                  In exceptional circumstances (illness with medical certificate, serious family
                  emergency), we will review refund requests on a case-by-case basis.
                </p>
              </div>

              <div>
                <h2 className="text-xl mb-3">4. Cancellation by French Food Tour</h2>
                <p>
                  We reserve the right to cancel a tour due to insufficient bookings, extreme
                  weather or circumstances beyond our control. In such cases, a full refund will
                  be issued or an alternative date offered.
                </p>
              </div>

              <div>
                <h2 className="text-xl mb-3">5. Participation Requirements</h2>
                <ul className="list-disc pl-6 space-y-2">
                  <li>Minimum age: 18 years (or accompanied by a parent/guardian)</li>
                  <li>Wine is served — guests who cannot consume alcohol must notify us at booking</li>
                  <li>
                    Dietary requirements (vegetarian, lactose intolerance, allergies) must be
                    declared at the time of booking. We will do our best to accommodate but cannot
                    guarantee full substitution for all items
                  </li>
                  <li>Comfortable walking shoes are strongly recommended</li>
                  <li>The tour involves moderate walking on cobblestone streets and hills</li>
                </ul>
              </div>

              <div>
                <h2 className="text-xl mb-3">6. Health and Safety</h2>
                <p>
                  Participants are responsible for their own health and safety. French Food Tour
                  is not liable for personal injury or illness arising from participation,
                  including reactions to food or drink consumed on the tour. Please inform your
                  guide immediately of any allergies or medical conditions.
                </p>
              </div>

              <div>
                <h2 className="text-xl mb-3">7. Conduct</h2>
                <p>
                  We reserve the right to remove any participant from the tour without refund if
                  their behaviour is disruptive, threatening or otherwise unacceptable to the
                  guide or other participants.
                </p>
              </div>

              <div>
                <h2 className="text-xl mb-3">8. Photography</h2>
                <p>
                  We may photograph or film tours for promotional purposes. If you do not wish to
                  appear in any promotional material, please inform your guide at the start of the
                  tour. Photos taken by participants may be shared freely.
                </p>
              </div>

              <div>
                <h2 className="text-xl mb-3">9. Intellectual Property</h2>
                <p>
                  All content on this website — text, images, itineraries — is the property of
                  French Food Tour and may not be reproduced without written permission.
                </p>
              </div>

              <div>
                <h2 className="text-xl mb-3">10. Governing Law</h2>
                <p>
                  These terms are governed by French law. Any disputes shall be subject to the
                  exclusive jurisdiction of the courts of Paris, France.
                </p>
              </div>

              <div>
                <h2 className="text-xl mb-3">11. Contact</h2>
                <p>
                  Questions about these terms:{" "}
                  <a
                    href="mailto:contact@frenchfoodtour.com"
                    className="text-[var(--color-bordeaux)] underline"
                  >
                    contact@frenchfoodtour.com
                  </a>
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
