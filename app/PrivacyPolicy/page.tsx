"use client";

import { NavBar } from "@/components/NavBar";
import { RnkFooter } from "@/components/footer";

export default function PrivacyPolicyPage() {
  return (
    <main className="bg-white text-black min-h-screen">
      <NavBar />

      {/* ======================= HERO ======================= */}
      <section
        className="
          relative overflow-hidden
          h-[48vh] sm:h-[60vh] md:h-[75vh] lg:h-[85vh] 2xl:h-[90vh]
          border-b border-black/10
          w-screen left-1/2 right-1/2 -ml-[50vw] -mr-[50vw]
        "
      >
        {/* Background Image */}
        <div
          className="
            absolute inset-0
            bg-no-repeat bg-cover
            bg-[center_35%]
            sm:bg-center
          "
          style={{ backgroundImage: "url('/Mercedes_V_Class_1.webp')" }}
        />

        {/* Overlay */}
        <div className="absolute inset-0 sm:bg-black/40" />

        {/* Content */}
        <div className="relative z-10 h-full flex items-center">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 text-center w-full">
            <p className="text-[10px] sm:text-[11px] uppercase tracking-[0.22em] text-white/80 mb-2">
              Home / Privacy Policy
            </p>

            <h1
              className="
                text-white font-light
                text-[28px] sm:text-[34px] md:text-[42px]
                lg:text-[48px] 2xl:text-[56px]
              "
            >
              Privacy Policy
            </h1>

            <p
              className="
                mt-2
                text-red-900
                text-[12px] sm:text-sm md:text-[15px]
                max-w-xl md:max-w-2xl mx-auto
              "
            >
              Please read this Privacy Policy carefully before using our services.
            </p>
          </div>
        </div>
      </section>

      {/* ======================= CONTENT ======================= */}
      <section className="border-b border-black/10">
        <div
          className="
            max-w-4xl lg:max-w-5xl 2xl:max-w-6xl
            mx-auto
            px-4 sm:px-6
            py-12 sm:py-16 lg:py-20
          "
        >
          <p className="text-sm sm:text-base font-light mb-2">
            Ramniranjan Kedia Rent A Car Pvt. Ltd
          </p>

          <p className="text-xs sm:text-sm text-black/60 mb-10">
            Privacy Policy
          </p>

          <div
            className="
              space-y-10 sm:space-y-12
              text-[14px] sm:text-[15px] lg:text-[16px] 2xl:text-[17px]
              text-black/75
              leading-relaxed
            "
          >
            <section>
              <p>
                This Privacy Policy (hereinafter, referred to as Policy) outlines
                the Company's practices, policies and procedures concerning the
                collection, use, and protection of information collected from
                the users of this App (here onwards may be called as Website or
                App either together or separately).
              </p>
              <p className="mt-3">
                We are committed to protecting your online privacy while you use
                this Website either as a visitor or as a registered user.
              </p>
            </section>

            <section>
              <p>
                Company collects information about you and your device data when
                you use our mobile applications, websites, and other online
                products and services.
              </p>
            </section>

            <section>
              <h2 className="text-base sm:text-lg font-semibold text-black mb-3">
                Scope and Implementation
              </h2>
              <p>
                This Policy is consistent with the Information Technology
                (Reasonable Security Practices and Procedures and Sensitive
                Personal Data or Information) Rules, 2011.
              </p>
              <p className="mt-3">
                By using this Website/App, you agree to the clauses contained
                herein. If you do not agree, your sole remedy is to stop using
                this Website/App.
              </p>
            </section>

            <section>
              <h2 className="text-base sm:text-lg font-semibold text-black mb-3">
                Personally Identifiable Information
              </h2>
              <p>
                We do not collect any Sensitive Personal Data or Information as
                defined under the Rules.
              </p>
              <p className="mt-3">
                All personally identifiable information collected is kept
                confidential and never sold or commercially traded.
              </p>
            </section>

            <section>
              <h2 className="text-base sm:text-lg font-semibold text-black mb-3">
                Data Collected Through Services
              </h2>
              <p>
                We may collect information including name, email, phone number,
                address, profile picture, payment method, feedback and other
                information provided by you.
              </p>
            </section>

            <section>
              <h3 className="font-semibold text-black mb-2">
                Location Based Information
              </h3>
              <p>
                We collect precise location data during trips and may derive
                approximate location from IP addresses.
              </p>
            </section>

            <section>
              <h3 className="font-semibold text-black mb-2">
                Device & Transaction Information
              </h3>
              <p>
                We collect transactional data, device information, preferences,
                cookies, identifiers and analytics data.
              </p>
            </section>

            <section>
              <h3 className="font-semibold text-black mb-2">
                Telephone Calls & SMS
              </h3>
              <p>
                We may collect call logs, timestamps, phone numbers and SMS data
                to facilitate services.
              </p>
            </section>

            <section>
              <h3 className="font-semibold text-black mb-2">
                Contacts & Permissions
              </h3>
              <p>
                Access to contacts and device permissions is collected only
                after your consent.
              </p>
            </section>

            <section>
              <h2 className="text-base sm:text-lg font-semibold text-black mb-3">
                Use of Information
              </h2>
              <p>
                Information is used to provide services, process payments,
                improve features, prevent fraud, personalize content and send
                updates.
              </p>
            </section>

            <section>
              <h2 className="text-base sm:text-lg font-semibold text-black mb-3">
                Sharing of Information
              </h2>
              <p>
                Information may be shared with Drivers, Agents, affiliates,
                vendors, authorities or third parties where legally required.
              </p>
            </section>

            <section>
              <h2 className="text-base sm:text-lg font-semibold text-black mb-3">
                Cookies & Analytics
              </h2>
              <p>
                Cookies are used to analyze usage, improve experience and avoid
                repeated login. Users may manage cookies through browser
                settings.
              </p>
            </section>

            <section>
              <h2 className="text-base sm:text-lg font-semibold text-black mb-3">
                Third Party Links
              </h2>
              <p>
                We do not control or endorse third party websites linked from
                our platform. Their privacy practices apply independently.
              </p>
            </section>

            <section>
              <h2 className="text-base sm:text-lg font-semibold text-black mb-3">
                Data Protection
              </h2>
              <p>
                We use reasonable security safeguards but cannot guarantee
                absolute protection due to internet risks.
              </p>
            </section>

            <section>
              <h2 className="text-base sm:text-lg font-semibold text-black mb-3">
                Disclosure of Information
              </h2>
              <p>
                Information may be disclosed to government authorities, auditors
                or in case of mergers, fraud investigations or legal compliance.
              </p>
            </section>

            <section>
              <h2 className="text-base sm:text-lg font-semibold text-black mb-3">
                Contact Us
              </h2>
              <p>
                For any questions, contact us at 022-43227799 or email
                info@rnk.com.
              </p>
            </section>

            <section>
              <p className="text-xs sm:text-sm text-black/60">
                © Copyright 2025. All Rights Reserved.
              </p>
            </section>
          </div>
        </div>
      </section>

      <RnkFooter />
    </main>
  );
}
