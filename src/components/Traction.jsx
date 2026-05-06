"use client"
// @ts-ignore
import React from "react"
import { motion } from "framer-motion"
import ChainSlider from "./ChainSlider"

export default function SupportedAssets() {
  const jsonLd = {
    "@context": "https://schema.org",
    "@type": "ItemList",
    name: "Supported Assets",
    description: "Digital stablecoins supported for instant settlement.",
    itemListElement: [
      { "@type": "ListItem", position: 1, name: "USDT (Tether)" },
      { "@type": "ListItem", position: 2, name: "USDC (USD Coin)" },
    ],
  }

  // Smooth easing curve
  const smooth = [0.25, 0.1, 0.25, 1]

  return (
    <section
      className="relative w-full py-20 pb-2 bg-primary-900 overflow-hidden"
      aria-label="Supported Assets and Network Infrastructure"
    >
      {/* SEO: Inject JSON-LD structured data */}
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
      />

      <div className="relative z-10 w-full">
        {/* Header */}
        <div className="max-w-4xl mx-auto px-6 text-center ">
          {/* Asset Badge with Real Logos */}
          <motion.div
            initial={{ opacity: 0, scale: 0.9, y: 10 }}
            whileInView={{ opacity: 1, scale: 1, y: 0 }}
            viewport={{ once: true }}
            // @ts-ignore
            transition={{ duration: 1.2, ease: smooth, delay: 0.3 }}
            className="inline-flex flex-col sm:flex-row items-center gap-4 p-2 pr-6 sm:pr-8 rounded-lg bg-white/[0.04] border border-white/[0.08] backdrop-blur-md hover:border-white/[0.15] hover:bg-white/[0.06] transition-all duration-700"
          >
            {/* Logos */}
            <div className="flex items-center gap-3 px-4 py-2 rounded-full bg-black/30 border border-white/[0.06]">
              <div className="flex -space-x-2" aria-hidden="true">
                <img
                  src="https://cryptologos.cc/logos/tether-usdt-logo.png"
                  alt=""
                  className="w-7 h-7 rounded-full border-2 border-black/80 object-contain bg-black"
                  loading="lazy"
                />
                <img
                  src="https://cryptologos.cc/logos/usd-coin-usdc-logo.png"
                  alt=""
                  className="w-7 h-7 rounded-full border-2 border-black/80 object-contain bg-black"
                  loading="lazy"
                />
              </div>
              <span className="text-sm font-bold text-white tracking-tight">
                USDT & USDC
              </span>
            </div>

            <p className="text-sm text-gray-400 font-medium text-center sm:text-left leading-snug">
              Instant settlement on{"  "}
              <span className="text-white font-semibold">5+ networks</span>
            </p>
          </motion.div>
        </div>

        {/* Slider */}
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          // @ts-ignore
          transition={{ duration: 1.5, ease: smooth, delay: 0.5 }}
          viewport={{ once: true }}
          className="relative w-full "
        >
          <div className="relative ">
            <ChainSlider />
          </div>
        </motion.div>
      </div>
    </section>
  )
}
