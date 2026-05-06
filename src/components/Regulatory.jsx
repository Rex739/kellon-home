"use client"
import React from "react"
import { motion } from "framer-motion"
import { ShieldCheck, FileText, Lock, Scale } from "lucide-react"

const regulatoryPoints = [
  {
    id: "01",
    icon: ShieldCheck,
    title: "Non-Custodial Architecture",
    description:
      "Kellon does not custody user funds. Users retain full control of their wallets and cryptographic keys.",
  },
  {
    id: "02",
    icon: FileText,
    title: "Regulated Execution",
    description:
      "All activities are executed through regulated and licensed third-party partners.",
  },
  {
    id: "03",
    icon: Lock,
    title: "Secure Wallet Design",
    description:
      "Wallet infrastructure is designed around user-controlled keys and secure recovery mechanisms.",
  },
]

export default function RegulatoryNote() {
  const jsonLd = {
    "@context": "https://schema.org",
    "@type": "ItemList",
    name: "Regulatory Compliance Features",
    itemListElement: regulatoryPoints.map((point, index) => ({
      "@type": "ListItem",
      position: index + 1,
      item: {
        "@type": "Thing",
        name: point.title,
        description: point.description,
      },
    })),
  }

  return (
    <section
      className="w-full max-w-7xl mx-auto px-6"
      aria-labelledby="regulatory-heading"
    >
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
      />

      {/* TOP SECTION: Header & Intro */}
      <div className="flex flex-col space-y-4 mb-12">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
        >
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full border border-white/10 bg-white/5 text-white/70 text-xs font-bold uppercase tracking-widest mb-6">
            <Scale size={14} />
            <span>Compliance First</span>
          </div>
          <h2
            id="regulatory-heading"
            className="text-4xl md:text-5xl lg:text-6xl font-black text-white font-bungee leading-[1.1]"
          >
            Regulatory <br />
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-accent-400 to-white">
              Transparency
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
            We adhere to clear, direct standards for professional asset
            management, ensuring your safety at every protocol layer.
          </p>
        </motion.div>
      </div>

      {/* BOTTOM SECTION: 3-Column Grid with Dividers */}
      <div className="grid grid-cols-1 md:grid-cols-3 border-t border-white/10">
        {regulatoryPoints.map((point, i) => (
          <motion.div
            key={point.id}
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: i * 0.1 }}
            className={`
              relative p-8 lg:p-12 
              border-b md:border-b-0 md:border-r border-white/10 
              last:border-r-0 last:border-b-0
              group hover:bg-white/[0.02] transition-colors duration-500
            `}
          >
            <div className="mb-8 flex items-center justify-start">
              <div className="w-12 h-12 rounded-xl bg-white/5 flex items-center justify-center group-hover:scale-110 group-hover:bg-accent-500/20 transition-all duration-300">
                <point.icon className="w-6 h-6 text-gray-400 group-hover:text-accent-400" />
              </div>
            </div>

            <h3 className="text-xl font-bold text-white mb-4 group-hover:text-accent-100 transition-colors">
              {point.title}
            </h3>

            <p className="text-primary-200/60 leading-relaxed group-hover:text-primary-100 transition-colors">
              {point.description}
            </p>
          </motion.div>
        ))}
      </div>
    </section>
  )
}
