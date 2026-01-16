"use client"
import React from "react"
import { motion } from "framer-motion"
import { ShieldCheck, FileText, Lock, ChevronRight, Scale } from "lucide-react"

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
  return (
    <div className="w-full max-w-7xl mx-auto px-6 grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-24 items-center">
      {/* LEFT: The List (Semantic List) */}
      <ul className="flex flex-col w-full order-2 lg:order-1" role="list">
        {regulatoryPoints.map((point, i) => (
          <motion.li
            key={point.id}
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ delay: i * 0.1 }}
            className="group relative flex items-center gap-6 py-8 border-b border-white/5 hover:border-white/20 transition-all duration-300 cursor-default overflow-hidden"
          >
            {/* Watermark Number (Decorative) */}
            <div
              className="absolute -left-2 top-1/2 -translate-y-1/2 text-[8rem] font-black text-white/[0.02] group-hover:text-white/[0.05] font-bungee transition-colors pointer-events-none select-none z-0 leading-none"
              aria-hidden="true"
            >
              {point.id}
            </div>

            {/* Content */}
            <div className="relative z-10 flex items-center gap-6 w-full pl-6">
              <div className="w-14 h-14 shrink-0 rounded-full bg-white/5 border border-white/5 flex items-center justify-center group-hover:bg-accent-500/10 group-hover:border-accent-500/30 transition-all duration-300">
                <point.icon
                  className="w-6 h-6 text-gray-400 group-hover:text-accent-400 transition-colors"
                  aria-hidden="true"
                />
              </div>

              <div className="flex-1">
                <h3 className="text-2xl font-bold text-white mb-2 group-hover:text-accent-100 transition-colors">
                  {point.title}
                </h3>
                <p className="text-base text-primary-200/60 leading-relaxed group-hover:text-primary-100 transition-colors max-w-[95%]">
                  {point.description}
                </p>
              </div>
            </div>
          </motion.li>
        ))}
      </ul>

      {/* RIGHT: Heading Content */}
      <div className="order-1 lg:order-2 lg:text-right flex flex-col lg:items-end">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
        >
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full border border-white/10 bg-white/5 text-white/70 text-xs font-bold uppercase tracking-widest mb-6 w-fit">
            <Scale size={14} aria-hidden="true" />
            <span>Compliance First</span>
          </div>

          <h2 className="text-4xl md:text-5xl lg:text-7xl font-black text-white font-bungee mb-6 leading-tight">
            Regulatory <br />
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-accent-400 to-white">
              Transparency
            </span>
          </h2>

          <p className="text-lg text-primary-200/60 max-w-sm leading-relaxed lg:ml-auto">
            We adhere to clear, direct standards for professional asset
            management, ensuring your safety at every protocol layer.
          </p>
        </motion.div>
      </div>
    </div>
  )
}
