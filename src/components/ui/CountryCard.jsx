// @ts-nocheck
import React from "react"
import { Globe } from "lucide-react"

export default function CountryCard({ country, activeFeature }) {
  return (
    <div
      className={`
      relative p-4 rounded-2xl bg-[#0A0A0A] border transition-colors duration-500
      ${activeFeature.border} ${activeFeature.shadow}
    `}
    >
      <div className="flex items-center justify-between mb-2">
        <span className="text-3xl">{country.flag}</span>
        <Globe size={16} className={`opacity-50 ${activeFeature.color}`} />
      </div>
      <div className="h-px w-full bg-white/10 mb-2" />
      <div className="flex justify-between items-end">
        <span className="text-xs font-bold text-white uppercase tracking-wider">
          {country.name}
        </span>
        <span className={`text-[10px] ${activeFeature.color}`}>Active</span>
      </div>
    </div>
  )
}
