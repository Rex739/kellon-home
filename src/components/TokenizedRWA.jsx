import React from "react"
import { Banknote, Building, Globe, Box } from "lucide-react"

const assets = [
  { icon: <Building className="w-8 h-8 text-white" />, title: "Real Estate" },
  { icon: <Globe className="w-8 h-8 text-white" />, title: "Global Stocks" },
  { icon: <Banknote className="w-8 h-8 text-white" />, title: "Commodities" },
  { icon: <Box className="w-8 h-8 text-white" />, title: "And more..." },
]

// @ts-ignore
export default function TokenizedRWA({ isParallax }) {
  return (
    <div
      className={`relative w-full ${!isParallax ? "bg-[#0a0a0a] py-24" : ""}`}
    >
      <div className="">
        <h2 className="text-4xl md:text-6xl lg:text-7xl font-bungee font-bold leading-snug tracking-wide text-white mb-8">
          Invest in <br /> Tokenized <br /> Real-World Assets
        </h2>

        <div className="flex flex-col gap-6 max-w-2xl text-gray-400 text-lg md:text-xl mb-12">
          <p>
            Purchase fractional shares of real-world assets such as real estate,
            global stocks, and commodities.
          </p>
          <p className="hidden md:block">
            Accessible directly from your non-custodial Kellon wallet.
          </p>
        </div>

        <div className="flex flex-wrap gap-6">
          {assets.map((asset, i) => (
            <div
              key={i}
              className="flex items-center gap-3 px-6 py-3 rounded-full border border-white/10 bg-white/5 backdrop-blur-md transition-all hover:border-accent-400/50"
            >
              {asset.icon}
              <span className="text-white font-medium">{asset.title}</span>
            </div>
          ))}
        </div>
      </div>
    </div>
  )
}
