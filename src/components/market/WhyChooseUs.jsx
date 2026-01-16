"use client"
import React from "react"
import { Shield, Zap, Key, Globe, ArrowUpRight } from "lucide-react"
import { motion } from "framer-motion"

// Move static data outside component to prevent re-creation on render
const ADVANTAGES = [
  {
    icon: Shield,
    title: "Multi-Layer Security",
    desc: "Bank-grade encryption, user-controlled wallets, and secure key management built into every transaction",
  },
  {
    icon: Zap,
    title: "Lightning Speed",
    desc: "Sub-second settlements powered by an optimized crypto-to-fiat infrastructure",
  },
  {
    icon: Key,
    title: "Non-Custodial",
    desc: "You stay in control. Kellon never holds your crypto or private keys — your assets remain fully yours",
  },
  {
    icon: Globe,
    title: "Global Compliance",
    desc: "Our infrastructure is designed to integrate seamlessly with compliance partners as regulatory requirements evolve",
  },
]

export default function WhyChooseUsGrid() {
  // Generate Schema.org JSON-LD for SEO
  const jsonLd = {
    "@context": "https://schema.org",
    "@type": "ItemList",
    name: "Why Choose Kellon",
    itemListElement: ADVANTAGES.map((adv, index) => ({
      "@type": "ListItem",
      position: index + 1,
      item: {
        "@type": "Thing",
        name: adv.title,
        description: adv.desc,
      },
    })),
  }

  return (
    <section
      className="relative w-full py-32 border-t border-white/5"
      aria-labelledby="why-choose-heading"
    >
      {/* SEO: Inject Structured Data */}
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
      />

      <div className="max-w-7xl mx-auto px-6 relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-[1fr_1.5fr] gap-16 items-start">
          {/* Header Section */}
          <div className="lg:sticky lg:top-32 flex flex-col items-start gap-8">
            <div
              className="inline-flex items-center gap-2 px-3 py-1 rounded-full border border-accent-500/30 bg-accent-500/10 backdrop-blur-md"
              role="presentation"
            >
              <span
                className="flex h-2 w-2 rounded-full bg-accent-500"
                aria-hidden="true"
              ></span>
              <span className="text-xs font-bold text-accent-300 uppercase tracking-wider">
                Why Choose Kellon
              </span>
            </div>
            <h2
              id="why-choose-heading"
              className="text-5xl md:text-6xl font-bold font-bungee text-white leading-tight"
            >
              Built For <br />
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-accent-400 to-accent-600">
                Scale and Security
              </span>
            </h2>
          </div>

          {/* Advantages Grid */}
          <ul className="grid grid-cols-1 md:grid-cols-2 gap-[1px] bg-white/10 border border-white/10 rounded-[2.5rem] overflow-hidden shadow-2xl relative z-10">
            {ADVANTAGES.map((adv, i) => (
              <motion.li
                key={i}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.1 }}
                className="group relative bg-[#0a0a0a]/80 hover:bg-accent-500 p-10 transition-colors duration-500 min-h-[320px] flex flex-col justify-between overflow-hidden"
              >
                {/* Decorative Background Circle - Hidden from Screen Readers */}
                <div
                  className="absolute inset-0 opacity-0 group-hover:opacity-10 transition-opacity duration-500 pointer-events-none"
                  aria-hidden="true"
                >
                  <svg
                    className="w-full h-full"
                    viewBox="0 0 100 100"
                    preserveAspectRatio="none"
                  >
                    <circle
                      cx="100"
                      cy="100"
                      r="50"
                      fill="none"
                      stroke="black"
                      strokeWidth="0.5"
                      strokeDasharray="2 2"
                    />
                  </svg>
                </div>

                {/* Decorative Number - Hidden from Screen Readers */}
                <div
                  className="absolute bottom-[-20px] right-4 text-[8rem] font-black text-white/5 group-hover:text-black/10 transition-colors duration-500 font-bungee leading-none select-none z-0"
                  aria-hidden="true"
                >
                  0{i + 1}
                </div>

                {/* Content */}
                <article className="relative z-10">
                  <div
                    className="w-14 h-14 rounded-2xl bg-white/5 border border-white/10 flex items-center justify-center mb-6 text-white group-hover:bg-black/20 group-hover:text-black transition-all duration-500"
                    aria-hidden="true"
                  >
                    <adv.icon size={24} />
                  </div>
                  <h3 className="text-2xl font-bold text-white mb-4 group-hover:text-black transition-colors duration-500">
                    {adv.title}
                  </h3>
                  <p className="text-gray-400 text-lg leading-relaxed group-hover:text-black/70 transition-colors duration-500">
                    {adv.desc}
                  </p>
                </article>

                {/* Decorative Icon */}
                <div
                  className="relative z-10 self-start mt-6"
                  aria-hidden="true"
                >
                  <div className="w-10 h-10 rounded-full bg-white/5 border border-white/10 flex items-center justify-center group-hover:bg-black group-hover:text-white transition-all duration-500">
                    <ArrowUpRight size={18} />
                  </div>
                </div>
              </motion.li>
            ))}
          </ul>
        </div>
      </div>
    </section>
  )
}
