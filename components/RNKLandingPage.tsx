"use client";

import Image from "next/image";
import { useState } from "react";

export default function RNKLandingPage() {
  const [formData, setFormData] = useState({
    name: "",
    phone: "",
    date: "",
    terminal: "",
    car: "",
  });

  const handleChange = (e: any) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e: any) => {
    e.preventDefault();
    console.log(formData);
    alert("Quote request submitted!");
  };

  return (
    <div className="bg-white text-gray-900">

      {/* HERO SECTION */}
      <section className="bg-black text-white py-20 px-6 text-center">
        <h1 className="text-4xl md:text-5xl font-bold mb-4">
          Luxury Airport Transfer in Mumbai – Chauffeur Driven Since 1969
        </h1>
        <p className="text-lg md:text-xl mb-8 text-gray-300">
          Premium Mercedes, BMW & Executive Fleet for Mumbai Airport (T1 & T2)
        </p>

        <div className="flex flex-col md:flex-row justify-center gap-4">
          <a href="tel:+919999999999" className="bg-yellow-500 text-black px-6 py-3 rounded-lg font-semibold hover:bg-yellow-400">
            📞 Call Now
          </a>
          <a href="https://wa.me/919999999999" target="_blank" className="bg-green-600 px-6 py-3 rounded-lg font-semibold hover:bg-green-500">
            💬 WhatsApp Now
          </a>
          <a href="#lead-form" className="bg-white text-black px-6 py-3 rounded-lg font-semibold hover:bg-gray-200">
            Get Instant Quote
          </a>
        </div>
      </section>

      {/* TRUST SIGNALS */}
      <section className="py-16 px-6 text-center bg-gray-50">
        <div className="grid md:grid-cols-5 gap-6 text-lg font-medium">
          <div>170+ Cities Across India</div>
          <div>1969 Legacy</div>
          <div>24/7 Availability</div>
          <div>Professional Uniformed Chauffeurs</div>
          <div>Corporate Billing Available</div>
        </div>
      </section>

      {/* FLEET PREVIEW */}
      <section className="py-20 px-6">
        <h2 className="text-3xl font-bold text-center mb-12">
          Our Premium Fleet
        </h2>

        <div className="grid md:grid-cols-4 gap-8">
          {[
            { name: "Mercedes E-Class", desc: "Perfect executive airport sedan." },
            { name: "Mercedes S-Class", desc: "Ultra luxury VIP experience." },
            { name: "BMW 5 Series", desc: "Sporty & premium comfort ride." },
            { name: "Toyota Camry", desc: "Executive comfort at value pricing." },
          ].map((car, i) => (
            <div key={i} className="bg-white shadow-lg rounded-xl p-6 text-center">
              <div className="h-40 bg-gray-200 mb-4 rounded-lg"></div>
              <h3 className="text-xl font-semibold mb-2">{car.name}</h3>
              <p className="text-gray-600">{car.desc}</p>
            </div>
          ))}
        </div>
      </section>

      {/* WHY RNK */}
      <section className="bg-black text-white py-20 px-6">
        <h2 className="text-3xl font-bold text-center mb-12">
          Why Choose RNK for Mumbai Airport Transfer?
        </h2>

        <div className="grid md:grid-cols-3 gap-8 text-center">
          <div>✈ Real-time flight tracking</div>
          <div>⏱ On-time pickup guarantee</div>
          <div>💰 Fixed pricing (No surge)</div>
          <div>🧼 Sanitized premium cars</div>
          <div>👔 VIP protocol available</div>
        </div>
      </section>

      {/* LEAD FORM */}
      <section id="lead-form" className="py-20 px-6 bg-gray-100">
        <div className="max-w-xl mx-auto bg-white p-8 rounded-xl shadow-lg">
          <h2 className="text-2xl font-bold text-center mb-6">
            Get Instant Quote in 5 Minutes
          </h2>

          <form onSubmit={handleSubmit} className="space-y-4">
            <input
              type="text"
              name="name"
              placeholder="Full Name"
              required
              onChange={handleChange}
              className="w-full border p-3 rounded-lg"
            />

            <input
              type="tel"
              name="phone"
              placeholder="Phone Number"
              required
              onChange={handleChange}
              className="w-full border p-3 rounded-lg"
            />

            <input
              type="date"
              name="date"
              required
              onChange={handleChange}
              className="w-full border p-3 rounded-lg"
            />

            <select
              name="terminal"
              required
              onChange={handleChange}
              className="w-full border p-3 rounded-lg"
            >
              <option value="">Select Airport Terminal</option>
              <option value="T1">T1</option>
              <option value="T2">T2</option>
            </select>

            <select
              name="car"
              required
              onChange={handleChange}
              className="w-full border p-3 rounded-lg"
            >
              <option value="">Car Preference</option>
              <option value="E-Class">Mercedes E-Class</option>
              <option value="S-Class">Mercedes S-Class</option>
              <option value="BMW">BMW 5 Series</option>
              <option value="Camry">Toyota Camry</option>
            </select>

            <button
              type="submit"
              className="w-full bg-yellow-500 text-black py-3 rounded-lg font-semibold hover:bg-yellow-400"
            >
              Get Instant Quote
            </button>
          </form>
        </div>
      </section>

      {/* STICKY MOBILE BAR */}
      <div className="fixed bottom-0 left-0 w-full md:hidden flex">
        <a
          href="tel:+919999999999"
          className="w-1/2 bg-yellow-500 text-center py-4 font-semibold"
        >
          📞 Call Now
        </a>
        <a
          href="https://wa.me/919999999999"
          target="_blank"
          className="w-1/2 bg-green-600 text-white text-center py-4 font-semibold"
        >
          💬 WhatsApp
        </a>
      </div>

    </div>
  );
}
