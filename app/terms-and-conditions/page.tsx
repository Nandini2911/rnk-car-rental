"use client";

import { NavBar } from "@/components/NavBar";
import { RnkFooter } from "@/components/footer";

export default function TermsAndConditionsPage() {
  return (
    <main className="bg-white text-black min-h-screen">
      <NavBar />

      {/* ======================= HERO ======================= */}
      <section
        className="
          relative overflow-hidden
          h-[55vh] sm:h-[65vh] md:h-[75vh] lg:h-[85vh] 2xl:h-[90vh]
          border-b border-black/10
          w-screen left-1/2 right-1/2 -ml-[50vw] -mr-[50vw]
        "
      >
        <div
          className="absolute inset-0 bg-cover bg-center"
          style={{ backgroundImage: "url('/Mercedes_E_Class_1.webp')" }}
        />
        <div className="absolute inset-0" />

        <div className="relative z-10 h-full flex items-center">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 text-center w-full">
            <p className="text-[10px] sm:text-[11px] uppercase tracking-[0.22em] text-white/80 mb-3">
              Home / Terms & Conditions
            </p>

            <h1
              className="
                text-white font-light
                text-[28px] sm:text-[34px] md:text-[42px]
                lg:text-[48px] 2xl:text-[56px] 4xl:text-[64px]
              "
            >
              Terms & Conditions
            </h1>

            <p
              className="
                mt-3 text-white/75
                text-[12px] sm:text-sm md:text-[15px]
                max-w-xl md:max-w-2xl mx-auto
              "
            >
              Please read these terms carefully before using our services.
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
          <p className="text-xs sm:text-sm font-light mb-2">
            Ramniranjan Kedia Rent A Car Pvt. Ltd
          </p>

          <h2
            className="
              text-3xl sm:text-4xl md:text-5xl
              2xl:text-6xl
              text-red-900
              mt-4 mb-10
            "
          >
            Terms & Conditions
          </h2>

          <div
            className="
              space-y-12
              text-[14px] sm:text-[15px] lg:text-[16px] 2xl:text-[17px]
              text-black/75
              leading-relaxed
            "
          >
            {/* ================= CHAUFFEUR DRIVEN ================= */}
            <section>
              <h3 className="text-base sm:text-lg font-semibold text-black mb-3">
                CHAUFFEUR DRIVEN CARS
              </h3>

              <h4 className="font-semibold text-black mb-2">Eligibility</h4>
              <p>
                Should be of minimum 18 years and above. Children below the age
                of 18 years can't travel alone using Company’s services/Car and
                must be accompanied by an adult at all times.
              </p>

              <h4 className="font-semibold text-black mt-6 mb-2">
                Booking Process
              </h4>
              <p>
                Booking will be made online at the Company’s website being
                www.rnk.com OR offline at Company’s office, details of which are
                provided by us in the said website.
              </p>
              <p className="mt-3">
                All Tolls, Taxes and Parking Fees are borne by the customer alone
                and shall be included in their final bills on actual.
              </p>
              <p className="mt-3">
                Any damages to the vehicle either temporary or permanent must be
                fully reimbursed by the customer.
              </p>
              <p className="mt-3">
                Airport transfers are not part of the outstation/local trips.
              </p>

              <h4 className="font-semibold text-black mt-6 mb-2">
                Customer Responsibilities
              </h4>
              <p>
                Our chauffeurs will drive cars as per the legal RTO regulations.
              </p>
              <p className="mt-3">
                Influencing the chauffeur to drive rashly or abusing chauffeurs
                is strictly prohibited.
              </p>
              <p className="mt-3">
                Adding more passengers than the legal limit is strictly not
                allowed.
              </p>
              <p className="mt-3">
                Carrying illegal firearms, ammunition or drugs is prohibited.
              </p>
              <p className="mt-3">
                Customer is prohibited from driving the vehicle.
              </p>
            </section>

            {/* ================= SELF DRIVE ================= */}
            <section>
              <h3 className="text-base sm:text-lg font-semibold text-black mb-3">
                SELF DRIVE
              </h3>

              <h4 className="font-semibold text-black mb-2">Eligibility</h4>
              <p>
                Minimum age is 30 years with at least 7 years of valid driving
                license.
              </p>

              <h4 className="font-semibold text-black mt-6 mb-2">
                Booking Process
              </h4>
              <p>
                Driving License and Aadhar copies are required. Foreign nationals
                must provide Passport and International Driving Permit.
              </p>
              <p className="mt-3">
                Security Deposit is mandatory and refundable after inspection.
              </p>
              <p className="mt-3">
                Maximum speed allowed is 100 km/hr.
              </p>
            </section>

            {/* ================= GENERAL ================= */}
            <section>
              <h3 className="text-base sm:text-lg font-semibold text-black mb-3">
                GENERAL TERMS & CONDITIONS
              </h3>
              <p>
                GST, tolls, permits and parking are charged as per actuals.
              </p>
              <p className="mt-3">
                Arbitration shall be as per Indian laws with jurisdiction in
                Mumbai.
              </p>
            </section>

            {/* ================= DISCLAIMER ================= */}
            <section>
              <h3 className="text-base sm:text-lg font-semibold text-black mb-3">
                Disclaimer
              </h3>
              <p>
                Use of services is at the user's sole risk. Terms are updated
                periodically and latest version applies.
              </p>
            </section>
          </div>
        </div>
      </section>

      <RnkFooter />
    </main>
  );
}
