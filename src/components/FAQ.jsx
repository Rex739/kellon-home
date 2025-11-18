"use client"

import React, { useState } from "react"

export default function FAQ() {
  return (
    <section className="w-full py-24 xl:h-[70dvh] bg-primary-900 text-white flex items-center">
      <div
        className="max-w-7xl mx-auto px-6 
        grid grid-cols-1 xl:grid-cols-[1fr_1.6fr] gap-20"
      >
        {/* LEFT SIDE TITLE */}
        <div className="flex items-start font-bungee">
          <h2 className="text-4xl md:text-6xl font-bold leading-snug tracking-wide">
            Frequently <br /> Asked <br /> Questions
          </h2>
        </div>

        {/* RIGHT SIDE FAQ LIST */}
        <div className="space-y-8">
          {faqs.map((faq, i) => (
            <FAQItem key={i} faq={faq} />
          ))}
        </div>
      </div>
    </section>
  )
}

const faqs = [
  {
    q: "Do you hold custody of my crypto?",
    a: "No. Your wallet is non-custodial via Web3Auth.",
  },
  {
    q: "How do I convert fiat to crypto or withdraw to fiat?",
    a: "Integrated API partners handle all regulated conversions.",
  },
  {
    q: "What are tokenized real-world assets (RWA)?",
    a: "Digital representations of tangible assets like real estate, stocks, and commodities.",
  },
  {
    q: "Are you a licensed VASP/CASP?",
    a: "Not yet. We partner with licensed providers for regulated services and are actively working toward our own licensing.",
  },
  {
    q: "How do I recover my wallet if I lose my device?",
    a: "Wallet recovery is handled through Web3Auth’s secure key management. As long as you still have access to your authentication method (email, phone, or social login), you can restore your wallet.",
  },
  {
    q: "Can I send crypto directly to someone’s bank account?",
    a: "Yes. Kellon allows crypto-to-fiat payouts through licensed payout partners. You send crypto, and the recipient receives local currency.",
  },
  {
    q: "What countries do you support?",
    a: "Crypto deposits are global. Fiat payouts depend on supported corridors offered by our liquidity and payout partners. We’re expanding coverage continuously.",
  },
]


function FAQItem({ faq }) {
  const [open, setOpen] = useState(false)

  return (
    <div
      className="border-b border-white/10 pb-4 cursor-pointer"
      onClick={() => setOpen(!open)}
    >
      {/* Question Row */}
      <div className="flex items-center justify-between">
        <p className="text-lg lg:text-xl font-medium">{faq.q}</p>

        {/* PLUS / MINUS */}
        <span
          className={`text-3xl leading-none transition-transform duration-300 ${
            open ? "rotate-180" : ""
          }`}
        >
          {open ? "−" : "+"}
        </span>
      </div>

      {/* Animated Answer */}
      <div
        className={`overflow-hidden transition-all duration-500 ease-in-out ${
          open ? "max-h-40 opacity-100 mt-3" : "max-h-0 opacity-0 mt-0"
        }`}
      >
        <p className="text-base opacity-80 leading-relaxed transform transition-all duration-500">
          {faq.a}
        </p>
      </div>
    </div>
  )
}
