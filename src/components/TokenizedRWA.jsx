"use client"
import React from "react"
import { motion } from "framer-motion"
import { Banknote, Building, Globe, Box, TrendingUp } from "lucide-react"

const listAssets = [
  {
    id: "01",
    icon: Building,
    title: "Real Estate",
    desc: "Fractional ownership in prime global properties.",
    hoverText: "group-hover:text-rose-400",
    hoverBg: "group-hover:bg-rose-400/10",
    hoverBorder: "group-hover:border-rose-400/30",
  },
  {
    id: "02",
    icon: Globe,
    title: "Global Stocks",
    desc: "Trade top-tier equities on the blockchain 24/7.",
    hoverText: "group-hover:text-blue-400",
    hoverBg: "group-hover:bg-blue-400/10",
    hoverBorder: "group-hover:border-blue-400/30",
  },
  {
    id: "03",
    icon: Banknote,
    title: "Commodities",
    desc: "Gold, Silver, and Oil with zero storage fees.",
    hoverText: "group-hover:text-accent-400",
    hoverBg: "group-hover:bg-accent-400/10",
    hoverBorder: "group-hover:border-accent-400/30",
  },
  {
    id: "04",
    icon: Box,
    title: "Exotic Assets",
    desc: "Fine Art, Wine, and Private Credit markets.",
    hoverText: "group-hover:text-emerald-400",
    hoverBg: "group-hover:bg-emerald-400/10",
    hoverBorder: "group-hover:border-emerald-400/30",
  },
]

export default function TokenizedRWA() {
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
      className="relative w-full max-w-7xl mx-auto px-6 z-10"
      aria-labelledby="rwa-heading"
    >
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
      />

      {/* HEADER */}
      <div className="flex flex-col space-y-4 mb-12">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
        >
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full border border-white/10 bg-white/5 text-white/70 text-xs font-bold uppercase tracking-widest mb-6">
            <TrendingUp size={14} />
            <span>New Asset Classes</span>
          </div>
          <h2
            id="rwa-heading"
            className="text-4xl md:text-5xl lg:text-6xl font-black text-white font-bungee leading-[1.1]"
          >
            Invest in <br />
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-accent-400 to-white">
              The Real World
            </span>
          </h2>
        </motion.div>

        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ delay: 0.2 }}
          className="md:max-w-lg"
        >
          <p className="text-lg text-primary-200/60 leading-relaxed">
            Purchase fractional shares of real-world assets accessible directly
            from your non-custodial Kellon wallet.
          </p>
        </motion.div>
      </div>

      {/* ASSET GRID */}
     
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 border-t border-white/10 isolate">
        {listAssets.map((item, i) => (
          <motion.div
            key={item.id}
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: i * 0.1 }}
            className={`
              relative p-8 lg:p-10
              border-b lg:border-b-0 border-white/10
              md:border-r last:border-r-0
              group cursor-pointer pointer-events-auto
              hover:bg-white/[0.04] transition-all duration-500
              overflow-hidden
            `}
          >
            {/* ICON CONTAINER */}
            <div className="mb-8 flex items-center justify-start pointer-events-none">
              <div
                className={`
                  w-12 h-12 rounded-xl bg-white/5 border border-white/5
                  flex items-center justify-center 
                  group-hover:scale-110 group-hover:shadow-[0_0_20px_rgba(255,255,255,0.05)]
                  transition-all duration-300
                  ${item.hoverBg} ${item.hoverBorder}
                `}
              >
                <item.icon
                  className={`w-6 h-6 text-gray-400 transition-colors duration-300 ${item.hoverText}`}
                />
              </div>
            </div>

            {/* TEXT content */}
            <h3 className="text-xl font-bold text-white mb-4 group-hover:text-white transition-colors pointer-events-none">
              {item.title}
            </h3>

            <p className="text-sm text-primary-200/50 leading-relaxed group-hover:text-primary-100 transition-colors pointer-events-none">
              {item.desc}
            </p>
          </motion.div>
        ))}
      </div>
    </section>
  )
}
