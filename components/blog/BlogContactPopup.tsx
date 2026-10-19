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
    <div className="fixed inset-0 z-[9999] flex items-center justify-center bg-black/40 backdrop-blur-md px-4">

      <div className="relative w-full max-w-sm overflow-hidden rounded-3xl border border-white/10 bg-white/5 backdrop-blur-2xl p-6 shadow-[0_8px_40px_rgba(255,0,0,0.15)]">

        <button
          onClick={onClose}
          className="absolute right-4 top-3 text-3xl text-white hover:text-red-900"
        >
          ×
        </button>

        <h2 className="text-3xl font-bold text-white">
          Contact Us
        </h2>

        <p className="mt-2 text-sm text-neutral-300">
          Luxury chauffeur service for airport transfers,
          corporate travel & weddings.
        </p>

        <form onSubmit={handleSubmit} className="mt-6 space-y-4">

          <input
            type="text"
            name="fullName"
            placeholder="Full Name"
            required
            value={formData.fullName}
            onChange={handleChange}
            className="w-full rounded-2xl border border-white/10 bg-black/20 px-4 py-3 text-white placeholder:text-neutral-400 outline-none focus:border-red-900"
          />

          <input
            type="email"
            name="email"
            placeholder="Email Address"
            required
            value={formData.email}
            onChange={handleChange}
            className="w-full rounded-2xl border border-white/10 bg-black/20 px-4 py-3 text-white placeholder:text-neutral-400 outline-none focus:border-red-900"
          />

          <input
            type="tel"
            name="mobileNumber"
            placeholder="Phone Number"
            required
            value={formData.mobileNumber}
            onChange={handleChange}
            className="w-full rounded-2xl border border-white/10 bg-black/20 px-4 py-3 text-white placeholder:text-neutral-400 outline-none focus:border-red-500"
          />

          <textarea
            rows={3}
            name="message"
            placeholder="Your Requirement"
            value={formData.message}
            onChange={handleChange}
            className="w-full resize-none rounded-2xl border border-white/10 bg-black/20 px-4 py-3 text-white placeholder:text-neutral-400 outline-none focus:border-red-900"
          />

          <button
            type="submit"
            disabled={loading}
            className="w-full rounded-2xl bg-red-900 py-3 font-semibold text-white transition hover:bg-red-900"
          >
            {loading ? "Submitting..." : "Submit Enquiry"}
          </button>

        </form>
      </div>
    </div>
  );
}