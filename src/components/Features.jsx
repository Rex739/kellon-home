"use client"
import React, { useRef, useState, useEffect } from "react"
import { motion, useScroll, AnimatePresence } from "framer-motion"
import { Wallet, ShieldCheck, Zap, Home, ArrowRight, Lock } from "lucide-react"
import InfiniteColumn from "./ui/InfiniteColumn"
import CountryCard from "./ui/CountryCard"

// Enhanced data with accessibility labels
const countries = [
  { name: "Nigeria", flag: "🇳🇬", label: "Flag of Nigeria" },
  { name: "Kenya", flag: "🇰🇪", label: "Flag of Kenya" },
  { name: "Ghana", flag: "🇬🇭", label: "Flag of Ghana" },
  { name: "USA", flag: "🇺🇸", label: "Flag of USA" },
  { name: "UK", flag: "🇬🇧", label: "Flag of UK" },
  { name: "India", flag: "🇮🇳", label: "Flag of India" },
  { name: "Brazil", flag: "🇧🇷", label: "Flag of Brazil" },
  { name: "Australia", flag: "🇦🇺", label: "Flag of Australia" },
]

const features = [
  {
    id: "wallet",
    title: "Non-Custodial",
    subtitle: "Your Keys, Your Crypto",
    description:
      "Full control with enterprise-grade security. We never touch your assets.",
    icon: Wallet,
    color: "text-purple-400",
    border: "border-purple-500/50",
    bg: "bg-purple-500/10",
    shadow: "shadow-purple-500/20",
  },
  {
    id: "fiat",
    title: "Fiat & Crypto",
    subtitle: "Seamless Flow",
    description:
      "On/off ramps through licensed global partners. Move money freely.",
    icon: ShieldCheck,
    color: "text-blue-400",
    border: "border-blue-500/50",
    bg: "bg-blue-500/10",
    shadow: "shadow-blue-500/20",
  },
  {
    id: "rwa",
    title: "Real World Assets",
    subtitle: "Tokenized Access",
    description:
      "Invest in global real estate, stocks, and commodities in one tap.",
    icon: Home,
    color: "text-orange-400",
    border: "border-orange-500/50",
    bg: "bg-orange-500/10",
    shadow: "shadow-orange-500/20",
  },
  {
    id: "payments",
    title: "Instant Pay",
    subtitle: "Lightning Fast",
    description: "Settlements with minimal fees across networks. No waiting.",
    icon: Zap,
    color: "text-green-400",
    border: "border-green-500/50",
    bg: "bg-green-500/10",
    shadow: "shadow-green-500/20",
  },
]

export default function SimpleFeatures() {
  const containerRef = useRef(null)
  const [activeFeature, setActiveFeature] = useState(0)

  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start start", "end end"],
  })

  useEffect(() => {
    const unsubscribe = scrollYProgress.on("change", (latest) => {
      const index = Math.min(
        Math.floor(latest * features.length),
        features.length - 1
      )
      setActiveFeature(index)
    })
    return () => unsubscribe()
  }, [scrollYProgress])

  const current = features[activeFeature]

  return (
    <section
      ref={containerRef}
      id="features"
      aria-label="Key Features of Kellon Protocol"
      className="relative bg-primary-900"
      style={{ height: `${features.length * 80}vh` }}
    >
      <div className="sticky top-0 h-screen w-full overflow-hidden flex flex-col lg:flex-row max-w-7xl mx-auto">
        {/* TEXT CONTENT */}
        <div className="relative z-20 w-full lg:w-1/2 h-full flex flex-col justify-center px-6">
          <div aria-live="polite" aria-atomic="true">
            <AnimatePresence mode="wait">
              <motion.article
                key={activeFeature}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -20 }}
                transition={{ duration: 0.4 }}
                className="max-w-lg"
              >
                {/* Badge */}
                <div
                  className={`inline-flex items-center gap-2 px-3 py-1.5 rounded-full border mb-6 backdrop-blur-md ${current.bg} ${current.border}`}
                  role="status"
                >
                  <Lock
                    size={14}
                    className={current.color}
                    aria-hidden="true"
                  />
                  <span
                    className={`text-xs font-bold uppercase tracking-widest ${current.color}`}
                  >
                    Kellon Protocol
                  </span>
                </div>

                {/* Headings */}
                <h2 className="text-5xl md:text-7xl font-black text-white mb-2 font-bungee tracking-tight">
                  {current.title}
                </h2>
                <h3
                  className={`text-2xl md:text-3xl font-medium mb-6 ${current.color}`}
                >
                  {current.subtitle}
                </h3>

                {/* Description */}
                <p className="text-lg text-gray-400 leading-relaxed mb-8">
                  {current.description}
                </p>

                {/* UPDATED: Link to #how-it-works */}
                <a
                  href="#how-it-works"
                  className="group inline-flex items-center gap-3 px-6 py-3 rounded-xl bg-[#111] border border-white/10 hover:border-white/30 transition-all focus:outline-none focus:ring-2 focus:ring-white/50"
                  aria-label={`Learn more about ${current.title} and see how it works`}
                >
                  <span className="text-sm font-bold text-white uppercase tracking-wider">
                    Learn More
                  </span>
                  <div
                    className={`p-1 rounded-full ${current.bg}`}
                    aria-hidden="true"
                  >
                    <ArrowRight size={14} className={current.color} />
                  </div>
                </a>
              </motion.article>
            </AnimatePresence>
          </div>
        </div>

        {/* COUNTRY VISUALS */}
        <div
          className="absolute inset-0 lg:static lg:w-1/2 h-full z-10 lg:z-auto overflow-hidden"
          aria-hidden="true"
        >
          <div className="absolute inset-0 bg-gradient-to-r from-primary-900 via-primary-900/90 to-primary-900/40 lg:via-transparent lg:to-transparent z-10" />
          <div className="absolute inset-0 z-20 pointer-events-none bg-gradient-to-b from-primary-900 via-transparent to-primary-900 lg:from-primary-900 lg:via-transparent lg:to-primary-900 h-full" />

          <div className="flex justify-end gap-6 h-full opacity-40 lg:opacity-100 pr-4 lg:pr-20 rotate-[-5deg] scale-110 origin-center">
            <InfiniteColumn speed={30} direction={-1}>
              {countries.map((c, i) => (
                <CountryCard key={i} country={c} activeFeature={current} />
              ))}
            </InfiniteColumn>

            <InfiniteColumn speed={40} direction={1}>
              {countries.reverse().map((c, i) => (
                <CountryCard key={i} country={c} activeFeature={current} />
              ))}
            </InfiniteColumn>
          </div>
        </div>
      </div>
    </section>
  )
}
