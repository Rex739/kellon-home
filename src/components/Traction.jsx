"use client"
import React from "react"
import { motion } from "framer-motion"
import ChainSlider from "./ChainSlider"

export default function SupportedAssets() {
  // SEO: Define supported assets schema
  const jsonLd = {
    "@context": "https://schema.org",
    "@type": "ItemList",
    name: "Supported Assets",
    description: "Digital stablecoins supported for instant settlement.",
    itemListElement: [
      {
        "@type": "ListItem",
        position: 1,
        name: "USDT (Tether)",
      },
      {
        "@type": "ListItem",
        position: 2,
        name: "USDC (USD Coin)",
      },
    ],
  }

  return (
    <section
      className="relative w-full pt-16 bg-primary-800 overflow-hidden"
      aria-label="Supported Assets and Network Infrastructure"
    >
      {/* SEO Script */}
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
      />

      {/* --- 1. BACKGROUND LAYERS (Decorative -> Hidden from SR) --- */}
      <div className="absolute inset-0 pointer-events-none" aria-hidden="true">
        {/* Grain */}
        <div className="absolute inset-0 bg-[url('https://grainy-gradients.vercel.app/noise.svg')] opacity-20 mix-blend-overlay" />

        {/* Deep Lighting (GPU Accelerated) */}
        <div className="absolute top-[-20%] left-1/2 -translate-x-1/2 w-[150%] md:w-[1000px] h-[500px] md:h-[600px] bg-primary-800/30 rounded-full blur-[100px] md:blur-[120px] transform-gpu" />

        {/* Tech Grid */}
        <div className="absolute inset-0 bg-[linear-gradient(rgba(255,255,255,0.02)_1px,transparent_1px),linear-gradient(90deg,rgba(255,255,255,0.02)_1px,transparent_1px)] bg-[size:40px_40px] md:bg-[size:60px_60px] [mask-image:radial-gradient(ellipse_60%_60%_at_50%_50%,black,transparent)]" />
      </div>

      <div className="relative z-10 w-full">
        {/* --- 2. HEADER CONTENT --- */}
        <div className="max-w-4xl mx-auto px-6 text-center mb-6 md:mb-8">
          {/* Top Label */}
          <motion.div
            initial={{ opacity: 0, y: 10 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="flex items-center justify-center gap-3 mb-6 md:mb-8"
            role="presentation"
          >
            <div className="h-px w-8 md:w-12 bg-gradient-to-r from-transparent to-accent-500/50" />
            <span className="text-[10px] md:text-xs font-bold text-accent-400 uppercase tracking-[0.2em] whitespace-nowrap">
              Network Infrastructure
            </span>
            <div className="h-px w-8 md:w-12 bg-gradient-to-l from-transparent to-accent-500/50" />
          </motion.div>

          {/* Info Badge (USDT/USDC Focus) */}
          <motion.div
            initial={{ opacity: 0, scale: 0.95 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            transition={{ delay: 0.2 }}
            className="inline-flex flex-col sm:flex-row items-center gap-4 p-1.5 pr-6 rounded-[2rem] bg-white/5 border border-white/10 backdrop-blur-md mx-auto"
          >
            <div className="flex items-center gap-2 px-4 py-2 rounded-full bg-black/40 border border-white/5 w-full sm:w-auto justify-center">
              {/* Mock Asset Icons (Hidden from Screen Readers to avoid "T C" reading) */}
              <div className="flex -space-x-2 shrink-0" aria-hidden="true">
                <div className="w-6 h-6 rounded-full bg-green-500 flex items-center justify-center text-[8px] font-bold text-white border border-black shadow-sm">
                  T
                </div>
                <div className="w-6 h-6 rounded-full bg-blue-500 flex items-center justify-center text-[8px] font-bold text-white border border-black shadow-sm">
                  C
                </div>
              </div>

              {/* Accessible Text */}
              <h2 className="text-sm font-bold text-white whitespace-nowrap m-0">
                USDT & USDC
              </h2>
            </div>

            <p className="text-sm text-primary-200 font-medium text-center sm:text-left px-2 sm:px-0">
              Instant settlement on{" "}
              <span className="text-white font-semibold">5+ networks</span> with
              zero friction.
            </p>
          </motion.div>
        </div>

        {/* --- 3. SLIDER VISUAL --- */}
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="relative w-full border-y border-white/5 backdrop-blur-sm"
        >
          {/* Glowing Rails (Decorative) */}
          <div
            className="absolute top-0 inset-x-0 h-px bg-gradient-to-r from-transparent via-accent-500/50 to-transparent opacity-50"
            aria-hidden="true"
          />
          <div
            className="absolute bottom-0 inset-x-0 h-px bg-gradient-to-r from-transparent via-primary-500/50 to-transparent opacity-50"
            aria-hidden="true"
          />

          {/* The Slider Container */}
          <div className="relative">
            {/* Fade Masks */}
            <div
              className="absolute inset-y-0 left-0 w-16 md:w-48 bg-gradient-to-r from-primary-800 to-transparent z-10 pointer-events-none"
              aria-hidden="true"
            />
            <div
              className="absolute inset-y-0 right-0 w-16 md:w-48 bg-gradient-to-l from-primary-800 to-transparent z-10 pointer-events-none"
              aria-hidden="true"
            />

            {/* Imported Slider */}
            <ChainSlider />
          </div>
        </motion.div>
      </div>
    </section>
  )
}
