"use client"

import { ShieldCheck, FileText, Lock, Globe } from "lucide-react"
import React from "react"

const regulatoryPoints = [
  {
    icon: <ShieldCheck className="w-6 h-6 text-primary" />,
    title: "Non-Custodial",
    description:
      "Kellon never holds user assets directly. You remain in full control of your crypto.",
  },
  {
    icon: <FileText className="w-6 h-6 text-primary" />,
    title: "Licensed Partners",
    description:
      "All fiat on-ramps, off-ramps, and custody operations are handled by licensed, compliant providers.",
  },
  {
    icon: <Lock className="w-6 h-6 text-primary" />,
    title: "Secure Wallet",
    description:
      "Recovery and key management are handled securely through Web3Auth, ensuring safety and reliability.",
  },
  {
    icon: <Globe className="w-6 h-6 text-primary" />,
    title: "Future Licensing",
    description:
      "We are actively working toward fully licensed infrastructure for seamless global compliance.",
  },
]

export default function RegulatoryNote() {
  return (
    <section className="relative w-full h-screen  text-white flex items-center">
      {/* Content wrapper */}
      <div className="max-w-7xl px-6 grid grid-cols-1 xl:grid-cols-[1fr_1.6fr] gap-20 py-12 xl:py-24 xl:mx-auto">
        {/* LEFT SIDE TITLE */}
        <div className="flex flex-col font-bungee">
          <h2 className="text-4xl md:text-6xl font-bold leading-snug tracking-wide">
            Regulatory <br /> Transparency
          </h2>
        </div>

        {/* RIGHT SIDE CONTENT */}
        <div className="space-y-8">
          <p className="text-lg md:text-xl font-semibold text-gray-200 mb-6">
            Clear, direct, and compliant. Trust is built through transparency
            and professional standards.
          </p>

          {regulatoryPoints.map((point, i) => (
            <div key={i} className="flex gap-4 items-start">
              {/* Icon */}
              <div className="flex-shrink-0 mt-1">{point.icon}</div>

              {/* Text */}
              <div>
                <h3 className="text-lg lg:text-xl  font-semibold">
                  {point.title}
                </h3>
                <p className="text-gray-200 text-base leading-relaxed">
                  {point.description}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
