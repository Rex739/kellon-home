import React from "react"
import { ShieldCheck, FileText, Lock } from "lucide-react"

const regulatoryPoints = [
  {
    icon: <ShieldCheck className="w-6 h-6 text-accent-400" />,
    title: "Non-Custodial Architecture",
    description:
      "Kellon does not custody user funds. Users retain full control of their wallets and cryptographic keys.",
  },
  {
    icon: <FileText className="w-6 h-6 text-accent-400" />,
    title: "Regulated Execution",
    description:
      "All activities are executed through regulated and licensed third-party partners.",
  },
  {
    icon: <Lock className="w-6 h-6 text-accent-400" />,
    title: "Secure Wallet Design",
    description:
      "Wallet infrastructure is designed around user-controlled keys and secure recovery mechanisms.",
  },
]

// @ts-ignore
export default function RegulatoryNote({ isParallax }) {
  return (
    <div
      className={`relative w-full ${!isParallax ? "bg-[#0a0a0a] py-24" : ""}`}
    >
      <div className="grid grid-cols-1 lg:grid-cols-[1fr_1.5fr] gap-12 lg:gap-20 mx-auto items-center">
        <div className="font-bungee">
          <h2 className="text-4xl md:text-6xl font-bold leading-tight text-white">
            Regulatory <br /> Transparency
          </h2>
        </div>

        <div className="space-y-10">
          <p className="text-lg md:text-xl font-medium text-gray-300">
            Clear, direct, and compliant standards for professional asset
            management.
          </p>

          <div className="grid gap-8">
            {regulatoryPoints.map((point, i) => (
              <div key={i} className="flex gap-5 items-start group">
                <div className="flex-shrink-0 p-3 bg-white/5 rounded-xl border border-white/10 group-hover:border-accent-500/50 transition-colors">
                  {point.icon}
                </div>
                <div>
                  <h3 className="text-xl font-bold text-white mb-2">
                    {point.title}
                  </h3>
                  <p className="text-gray-400 leading-relaxed max-w-lg">
                    {point.description}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  )
}
