"use client";

import { NavBar } from "@/components/NavBar";
import { RnkFooter } from "@/components/footer";

export default function TermsAndConditionsPage() {
  return (
    <main className=" bg-white text-black min-h-screen">
      <NavBar />
      {/* ======================= HEADER / HERO ======================= */}
<section
  className="
    relative overflow-hidden
    h-[38vh] sm:h-[42vh] md:h-[48vh]
    border-b border-black/10
    w-screen left-1/2 right-1/2 -ml-[50vw] -mr-[50vw]
  "
>
  {/* Background Image */}
  <div
    className="absolute inset-0 bg-cover bg-center"
    style={{ backgroundImage: "url('/about.webp')" }} // 👈 change if needed
  />

  {/* Dark overlay */}
  <div className="absolute inset-0 bg-linear-to-b from-black/70 via-black/55 to-black/70" />

  {/* Content */}
  <div className="relative z-10 h-full flex items-center">
    <div className="max-w-6xl mx-auto px-6 text-center w-full">

      {/* Breadcrumb */}
      <p className="text-[10px] sm:text-xs uppercase tracking-[0.22em] text-white/80 mb-3">
        Home <span className="mx-1">/</span> Terms &amp; Conditions
      </p>

      {/* Title */}
      <h1
        className="
          text-white font-light
          text-[28px] sm:text-[34px] md:text-[44px] lg:text-[54px]
          leading-tight
        "
      >
        Terms &amp; Conditions
      </h1>

      {/* Sub line */}
      <p className="mt-3 text-white/75 text-[12px] sm:text-[13px] md:text-[14px] max-w-2xl mx-auto">
        Please read these terms carefully before using our services.
      </p>

    </div>
  </div>
</section>


      <section className="border-b border-black/10">
        <div className="max-w-4xl mx-auto px-6 py-14 sm:py-16 lg:py-20">
            <p className="text-2xl sm:text-3xl md:text-2xl font-light mb-4">
        Ramniranjan Kedia Rent A Car Pvt.Ltd
      </p>

          {/* Heading */}
          <h1 className="text-2xl sm:text-3xl md:text-4xl font-light mb-4 text-red-900">
            Terms &amp; Conditions
          </h1>

          <p className="text-sm text-black/60 mb-10">
            Last updated: {new Date().toLocaleDateString()}
          </p>

          {/* Content */}
          <div className="space-y-8 text-sm sm:text-[15px] text-black/75 leading-relaxed">

            <section>
              <h2 className="font-semibold text-black mb-2">
                1. Introduction
              </h2>
              <p>
                These Terms &amp; Conditions govern your use of RNK Rent A Car
                (Ramniranjan Kedia Group) website and services. By accessing or
                using our website, booking our services, or communicating with
                us, you agree to comply with and be bound by these terms.
              </p>
            </section>

            <section>
              <h2 className="font-semibold text-black mb-2">
                2. Services
              </h2>
              <p>
                RNK provides chauffeur-driven car rental services including
                corporate travel, airport &amp; railway transfers, events,
                weddings, VIP movements and long-term contracts. Service
                availability may vary based on location, vehicle type and
                operational conditions.
              </p>
            </section>

            <section>
              <h2 className="font-semibold text-black mb-2">
                3. Bookings &amp; Payments
              </h2>
              <ul className="list-disc pl-5 space-y-2">
                <li>All bookings are subject to availability and confirmation.</li>
                <li>Pricing may vary based on duration, distance, city and vehicle type.</li>
                <li>Payments must be made as per agreed terms or invoice schedules.</li>
                <li>GST-compliant invoices will be issued wherever applicable.</li>
              </ul>
            </section>

            <section>
              <h2 className="font-semibold text-black mb-2">
                4. Cancellations &amp; Modifications
              </h2>
              <p>
                Cancellation or modification of bookings must be communicated in
                advance. Cancellation charges may apply depending on notice
                period, vehicle allocation and service type.
              </p>
            </section>

            <section>
              <h2 className="font-semibold text-black mb-2">
                5. Chauffeurs &amp; Vehicles
              </h2>
              <p>
                RNK ensures that vehicles are maintained, insured and operated
                by trained chauffeurs. However, delays caused by traffic,
                weather, force majeure or external conditions shall not be
                considered a breach of service.
              </p>
            </section>

            <section>
              <h2 className="font-semibold text-black mb-2">
                6. User Responsibilities
              </h2>
              <ul className="list-disc pl-5 space-y-2">
                <li>Provide accurate booking and contact details.</li>
                <li>Maintain appropriate conduct during the journey.</li>
                <li>Be responsible for personal belongings.</li>
              </ul>
            </section>

            <section>
              <h2 className="font-semibold text-black mb-2">
                7. Limitation of Liability
              </h2>
              <p>
                RNK shall not be liable for indirect, incidental or consequential
                damages arising from the use of our services. Our liability, if
                any, shall be limited to the value of the service booked.
              </p>
            </section>

            <section>
              <h2 className="font-semibold text-black mb-2">
                8. Intellectual Property
              </h2>
              <p>
                All website content including text, visuals, logos and design
                elements are the property of RNK and may not be copied,
                reproduced or used without written permission.
              </p>
            </section>

            <section>
              <h2 className="font-semibold text-black mb-2">
                9. Privacy
              </h2>
              <p>
                Your personal information is handled in accordance with our
                Privacy Policy. We do not sell or misuse customer data.
              </p>
            </section>

            <section>
              <h2 className="font-semibold text-black mb-2">
                10. Governing Law
              </h2>
              <p>
                These Terms &amp; Conditions are governed by the laws of India.
                Any disputes shall be subject to the jurisdiction of Indian
                courts.
              </p>
            </section>

            <section>
              <h2 className="font-semibold text-black mb-2">
                11. Changes to Terms
              </h2>
              <p>
                RNK reserves the right to update or modify these Terms &amp;
                Conditions at any time without prior notice. Continued use of
                our services implies acceptance of the updated terms.
              </p>
            </section>

            <section>
              <h2 className="font-semibold text-black mb-2">
                12. Contact Information
              </h2>
              <p>
                For any questions regarding these Terms &amp; Conditions, please
                contact us via the details provided on our Contact page.
              </p>
            </section>

          </div>
        </div>
      </section>

      <RnkFooter />
    </main>
  );
}
