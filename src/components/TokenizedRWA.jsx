"use client"
import React from "react"
import { motion } from "framer-motion"
import { Banknote, Building, Globe, Box, TrendingUp } from "lucide-react"

// MOVED OUTSIDE: Prevents re-creation on every render
const listAssets = [
  {
    id: "01",
    icon: Building,
    title: "Real Estate",
    desc: "Fractional ownership in prime global properties.",
    color: "text-rose-400",
  },
  {
    id: "02",
    icon: Globe,
    title: "Global Stocks",
    desc: "Trade top-tier equities on the blockchain 24/7.",
    color: "text-blue-400",
  },
  {
    id: "03",
    icon: Banknote,
    title: "Commodities",
    desc: "Gold, Silver, and Oil with zero storage fees.",
    color: "text-accent-400",
  },
  {
    id: "04",
    icon: Box,
    title: "Exotic Assets",
    desc: "Fine Art, Wine, and Private Credit markets.",
    color: "text-emerald-400",
  },
]

export default function TokenizedRWA() {
  // SEO: Generate Schema.org JSON-LD
  const jsonLd = {
    "@context": "https://schema.org",
    "@type": "ItemList",
    name: "Tokenized Real World Assets",
    itemListElement: listAssets.map((item, index) => ({
      "@type": "ListItem",
      position: index + 1,
      item: {
        "@type": "Thing",
        name: item.title,
        description: item.desc,
      },
    })),
  }

  return (
    <section
      className="w-full max-w-7xl mx-auto px-6 grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-24 items-center"
      aria-labelledby="rwa-heading"
    >
      {/* SEO Script Injection */}
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
      />

      {/* LEFT: Heading Content */}
      <div className="flex flex-col justify-center">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="inline-flex items-center gap-2 px-3 py-1 rounded-full border border-white/10 bg-white/5 text-white/70 text-xs font-bold uppercase tracking-widest mb-6 w-fit"
          role="presentation"
        >
          <TrendingUp size={14} aria-hidden="true" />
          <span>New Asset Classes</span>
        </motion.div>

        <motion.h2
          id="rwa-heading"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.1 }}
          className="text-4xl md:text-5xl lg:text-7xl font-black text-white font-bungee mb-6 leading-tight"
        >
          Invest in <br /> the{" "}
          <span className="text-transparent bg-clip-text bg-gradient-to-r from-accent-400 to-white">
            Real World.
          </span>
        </motion.h2>

        <motion.p
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.2 }}
          className="text-lg text-primary-200/60 max-w-sm leading-relaxed"
        >
          Purchase fractional shares of real-world assets accessible directly
          from your non-custodial Kellon wallet.
        </motion.p>
      </div>

      {/* RIGHT: The List */}
      <ul className="flex flex-col w-full" role="list">
        {listAssets.map((item, i) => (
          <motion.li
            key={item.id}
            initial={{ opacity: 0, x: 20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ delay: i * 0.1 }}
            className="group relative flex items-center gap-6 py-8 border-b border-white/5 hover:border-white/20 transition-all duration-300 cursor-default overflow-hidden"
          >
            {/* Watermark Number (Decorative -> Hidden from SR) */}
            <div
              className="absolute -right-0 top-1/2 -translate-y-1/2 text-[8rem] font-black text-white/[0.02] group-hover:text-white/[0.05] font-bungee transition-colors pointer-events-none select-none z-0 leading-none"
              aria-hidden="true"
            >
              {item.id}
            </div>

            {/* Content */}
            <article className="relative z-10 flex items-center gap-6 w-full">
              <div
                className={`p-4 rounded-full bg-white/5 group-hover:bg-white/10 transition-colors ${item.color} shrink-0`}
                aria-hidden="true"
              >
                <item.icon size={32} />
              </div>

              <div className="flex-1">
                <h3 className="text-2xl font-bold text-white mb-2 group-hover:text-accent-200 transition-colors">
                  {item.title}
                </h3>
                <p className="text-base text-primary-200/50 group-hover:text-primary-200/80 transition-colors max-w-[90%]">
                  {item.desc}
                </p>
              </div>
            </article>
          </motion.li>
        ))}
      </ul>
    </section>
  )
}
