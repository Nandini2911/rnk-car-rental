"use client";

import { useState } from "react";

export default function BlogContactPopup({
  isOpen,
  onClose,
  onSuccess,
}: {
  isOpen: boolean;
  onClose: () => void;
  onSuccess: () => void;
}) {
  const [loading, setLoading] = useState(false);

  const [formData, setFormData] = useState({
    fullName: "",
    email: "",
    mobileNumber: "",
    message: "",
  });

  if (!isOpen) return null;

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  const handleSubmit = async (
    e: React.FormEvent<HTMLFormElement>
  ) => {
    e.preventDefault();

    try {
      setLoading(true);

      const res = await fetch("/api/send-enquiry", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(formData),
      });

      const data = await res.json();

      if (data.ok) {
        alert("Enquiry submitted successfully");
        onSuccess();
      } else {
        alert("Failed to submit enquiry");
      }
    } catch (error) {
      console.log(error);
      alert("Something went wrong");
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="fixed inset-0 z-[9999] flex items-center justify-center overflow-y-auto bg-black/70 px-4 py-5 backdrop-blur-md">
      <div className="relative grid w-full max-w-3xl overflow-hidden rounded-[24px] border border-[#d9b66f]/40 bg-[#0d0a09] shadow-[0_25px_80px_rgba(0,0,0,0.7)] md:grid-cols-[0.9fr_1.1fr]">
        {/* Close */}
        <button
          type="button"
          onClick={onClose}
          aria-label="Close popup"
          className="absolute right-3 top-3 z-30 flex h-8 w-8 items-center justify-center rounded-full border border-white/15 bg-black/40 text-xl leading-none text-white/80 backdrop-blur-md transition hover:border-[#e4c277]/60 hover:bg-[#7b111e] hover:text-white"
        >
          ×
        </button>

        {/* Raksha Bandhan design */}
        <div className="relative min-h-[225px] overflow-hidden bg-[#65111e] px-6 py-7 text-white md:min-h-[520px] md:px-7 md:py-8">
          {/* CSS background — no external image and no 404 */}
          <div
            className="absolute inset-0"
            style={{
              backgroundImage: `
                radial-gradient(
                  circle at 25% 15%,
                  rgba(243, 207, 126, 0.26),
                  transparent 30%
                ),
                radial-gradient(
                  circle at 85% 80%,
                  rgba(176, 34, 51, 0.35),
                  transparent 35%
                ),
                linear-gradient(
                  145deg,
                  #921c2f 0%,
                  #64101e 42%,
                  #2a090f 75%,
                  #100708 100%
                )
              `,
            }}
          />

          {/* Gold decoration */}
          <div className="pointer-events-none absolute inset-3 rounded-[18px] border border-[#e2bf76]/25" />

          <div className="absolute left-3 top-3 h-10 w-10 border-l border-t border-[#e3c27d]/75" />

          <div className="absolute bottom-3 right-3 h-10 w-10 border-b border-r border-[#e3c27d]/75" />

          <div className="absolute -left-20 -top-20 h-52 w-52 rounded-full bg-[#f0c875]/15 blur-3xl" />

          <div className="absolute -bottom-20 -right-16 h-60 w-60 rounded-full bg-[#c3283c]/20 blur-3xl" />

          <div className="relative z-10 flex h-full flex-col">
            <div>
              <div className="inline-flex items-center gap-2 rounded-full border border-[#e6c47c]/40 bg-black/20 px-3 py-1 text-[9px] font-semibold uppercase tracking-[0.2em] text-[#f1d491] backdrop-blur-sm">
                <span className="h-1.5 w-1.5 rounded-full bg-[#f1d491]" />
                Raksha Bandhan Special
              </div>

              <p className="mt-4 text-[10px] font-medium uppercase tracking-[0.3em] text-[#e4c47f]">
                RNK Rentals
              </p>

              <h2 className="mt-2 max-w-sm font-serif text-3xl leading-[1.08] text-white md:text-4xl">
                A promise of care, comfort and a safe journey.
              </h2>

              <p className="mt-3 max-w-sm text-xs leading-5 text-white/70 md:text-sm">
                This Raksha Bandhan, make every family journey feel as
                special as the bond you celebrate.
              </p>
            </div>

            {/* Rakhi design */}
            <div className="my-5 flex items-center md:mt-auto">
              <div className="h-px flex-1 bg-gradient-to-r from-transparent via-[#dcb66a] to-[#dcb66a]" />

              <div className="relative mx-3 flex h-12 w-12 items-center justify-center">
                <div className="absolute inset-0 rotate-45 rounded-lg border border-[#f1d48f]/80 bg-gradient-to-br from-[#b32438] via-[#74101f] to-[#34070d] shadow-[0_0_24px_rgba(225,184,104,0.35)]" />

                <div className="absolute inset-[7px] rotate-45 rounded-md border border-[#e9c779]/60" />

                <div className="relative h-3.5 w-3.5 rounded-full border-2 border-[#f5db9a] bg-[#8e1728] shadow-[0_0_10px_rgba(245,219,154,0.8)]" />
              </div>

              <div className="h-px flex-1 bg-gradient-to-l from-transparent via-[#dcb66a] to-[#dcb66a]" />
            </div>

            <div className="grid grid-cols-3 gap-2">
              {["Safety", "Comfort", "Care"].map((item) => (
                <div
                  key={item}
                  className="rounded-lg border border-white/10 bg-black/20 px-2 py-2.5 text-center backdrop-blur-sm"
                >
                  <span className="text-[9px] font-semibold uppercase tracking-[0.14em] text-[#ebce8c]">
                    {item}
                  </span>
                </div>
              ))}
            </div>

            <p className="mt-3 text-center text-[9px] uppercase tracking-[0.16em] text-white/40">
              Premium chauffeur-driven mobility since 1969
            </p>
          </div>
        </div>

        {/* Original form */}
        <div className="relative bg-gradient-to-br from-[#171311] via-[#100d0c] to-[#090807] px-6 py-7 text-white sm:px-7 md:px-8 md:py-8">
          <div className="absolute right-0 top-0 h-44 w-44 bg-[#8b1928]/10 blur-3xl" />

          <div className="relative z-10">
            <p className="text-[9px] font-semibold uppercase tracking-[0.27em] text-[#d9b86f]">
              Plan your journey
            </p>

            <h3 className="mt-2 font-serif text-2xl leading-tight text-white md:text-[28px]">
              Contact Us
            </h3>

            <p className="mt-2 text-xs leading-5 text-white/55">
              Luxury chauffeur service for airport transfers, corporate
              travel and weddings.
            </p>

            <form onSubmit={handleSubmit} className="mt-5 space-y-3">
              <input
                type="text"
                name="fullName"
                placeholder="Full Name"
                required
                value={formData.fullName}
                onChange={handleChange}
                className="w-full rounded-xl border border-white/10 bg-white/[0.045] px-3.5 py-2.5 text-sm text-white outline-none transition placeholder:text-white/30 focus:border-[#cfa958]/70"
              />

              <input
                type="email"
                name="email"
                placeholder="Email Address"
                required
                value={formData.email}
                onChange={handleChange}
                className="w-full rounded-xl border border-white/10 bg-white/[0.045] px-3.5 py-2.5 text-sm text-white outline-none transition placeholder:text-white/30 focus:border-[#cfa958]/70"
              />

              <input
                type="tel"
                name="mobileNumber"
                placeholder="Phone Number"
                required
                value={formData.mobileNumber}
                onChange={handleChange}
                className="w-full rounded-xl border border-white/10 bg-white/[0.045] px-3.5 py-2.5 text-sm text-white outline-none transition placeholder:text-white/30 focus:border-[#cfa958]/70"
              />

              <textarea
                rows={2}
                name="message"
                placeholder="Your Requirement"
                value={formData.message}
                onChange={handleChange}
                className="w-full resize-none rounded-xl border border-white/10 bg-white/[0.045] px-3.5 py-2.5 text-sm text-white outline-none transition placeholder:text-white/30 focus:border-[#cfa958]/70"
              />

              <button
                type="submit"
                disabled={loading}
                className="group relative w-full overflow-hidden rounded-xl border border-[#e1bd70]/30 bg-gradient-to-r from-[#76121f] via-[#96192b] to-[#76121f] px-5 py-3 text-xs font-semibold tracking-wide text-white shadow-[0_10px_30px_rgba(125,18,33,0.28)] transition hover:border-[#e1bd70]/60 hover:brightness-110 disabled:cursor-not-allowed disabled:opacity-60"
              >
                <span className="absolute inset-0 -translate-x-full bg-gradient-to-r from-transparent via-white/10 to-transparent transition-transform duration-700 group-hover:translate-x-full" />

                <span className="relative">
                  {loading ? "Submitting..." : "Submit Enquiry"}
                </span>
              </button>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
}