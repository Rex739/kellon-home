"use client"
import React, { useRef } from "react"
import { TrendingUp, Users, Globe, Target } from "lucide-react"
import { motion, useScroll, useTransform, useSpring } from "framer-motion"
import TiltCard from "../ui/TiltCard"
import Counter from "../ui/Counter"
import WhyChooseUsGrid from "./WhyChooseUs"

const MARKET_STATS = [
  {
    icon: TrendingUp,
    value: 45,
    suffix: "T",
    prefix: "$",
    label: "Cross-Border Payment Market",
    desc: "Growing at 15% CAGR",
  },
  {
    icon: Users,
    value: 1.7,
    suffix: "B",
    label: "Unbanked Population",
    desc: "Seeking financial access",
  },
  {
    icon: Globe,
    value: 195,
    suffix: "+",
    label: "Countries Worldwide",
    desc: "Needing borderless solutions",
  },
]

export default function MarketOpportunity() {
  const containerRef = useRef(null)

  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start end", "end start"],
  })

  // Optimizations:
  // 1. Use transform-only animations to avoid layout thrashing
  // 2. Spring physics for smoother SVG path drawing
  const y = useTransform(scrollYProgress, [0, 1], [100, -100])
  const opacity = useTransform(scrollYProgress, [0, 0.2, 0.9, 1], [0, 1, 1, 0])

  const pathLength = useSpring(
    useTransform(scrollYProgress, [0, 0.5], [0, 1]),
    { stiffness: 40, damping: 20 }
  )

  return (
    <section
      ref={containerRef}
      className="relative bg-primary-900 text-white overflow-hidden pt-20 sm:pt-32 pb-0"
      aria-label="Market Opportunity"
    >
      {/* BACKGROUND LAYERS */}
      <div
        className="absolute inset-0 pointer-events-none z-0"
        aria-hidden="true" // Hide entirely from screen readers
      >
        <div className="absolute inset-0 bg-[url('https://grainy-gradients.vercel.app/noise.svg')] opacity-15 mix-blend-overlay" />

        {/* Use translate-z-0 to force GPU layer creation */}
        <div className="absolute -top-[10%] -left-[5%] w-[40vw] h-[40vw] bg-accent-500/10 rounded-full blur-[120px] transform-gpu" />
        <div className="absolute -bottom-[10%] -right-[5%] w-[30vw] h-[30vw] bg-blue-500/5 rounded-full blur-[100px] transform-gpu" />

        {/* PERFORMANCE FIX: Animate 'y' (transform) instead of 'top' (layout) */}
        <motion.div
          initial={{ y: "-10%", opacity: 0 }}
          animate={{ y: "110vh", opacity: [0, 1, 1, 0] }}
          transition={{ duration: 10, repeat: Infinity, ease: "linear" }}
          className="absolute left-0 right-0 h-px bg-gradient-to-r from-transparent via-accent-500/30 to-transparent top-0"
        />

        <svg
          className="absolute w-full h-full opacity-20"
          viewBox="0 0 1200 800"
          fill="none"
        >
          <motion.path
            d="M-100,400 Q300,100 600,400 T1300,400"
            stroke="rgba(234,179,8,0.3)"
            strokeWidth="1"
            style={{ pathLength }}
          />
        </svg>
      </div>

      {/* CONTENT */}
      <div className="relative z-10 w-full">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 mb-20 sm:mb-32">
          <motion.div
            style={{ y, opacity }}
            className="text-center max-w-4xl mx-auto mb-16 sm:mb-24"
          >
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full border border-accent-500/30 bg-accent-500/10 mb-8 backdrop-blur-md">
              <Target className="w-4 h-4 text-accent-400" aria-hidden="true" />
              <span className="text-xs font-bold text-accent-300 uppercase tracking-wider">
                Market Opportunity
              </span>
            </div>
            <h2 className="text-[clamp(2.75rem,12vw,4.5rem)] md:text-7xl font-bold font-bungee leading-[0.95] mb-8">
              The Future of <br />{" "}
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-white via-gray-400 to-gray-600">
                Global Finance
              </span>
            </h2>
            <p className="text-base sm:text-xl text-gray-400 leading-relaxed max-w-2xl mx-auto">
              We&apos;re building the infrastructure for borderless finance,
              serving a $45T market with innovative technology and global reach.
            </p>
          </motion.div>

          {/* SEMANTIC CHANGE: Use <ul> for lists of stats */}
          <ul className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {MARKET_STATS.map((stat, i) => (
              <motion.li
                key={i}
                initial={{ opacity: 0, y: 50 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.1, duration: 0.6 }}
                className="h-full"
              >
                <TiltCard className="h-full">
                  <div className="flex flex-col h-full items-center text-center">
                    <div
                      className="w-14 h-14 rounded-2xl bg-white/5 border border-white/10 flex items-center justify-center mb-6 text-accent-400"
                      aria-hidden="true"
                    >
                      <stat.icon size={28} />
                    </div>

                    {/* A11Y: Wrap dynamic counter in a way that provides a static readout for SRs */}
                    <div className="text-5xl font-bold text-white mb-2 font-bungee">
                      {/* Screen reader only text for accurate reading */}
                      <span className="sr-only">
                        {stat.prefix}
                        {stat.value}
                        {stat.suffix}
                      </span>
                      {/* Visual counter hidden from SR to prevent "counting up" noise */}
                      <span aria-hidden="true">
                        <Counter
                          value={stat.value}
                          prefix={stat.prefix}
                          suffix={stat.suffix}
                        />
                      </span>
                    </div>

                    <h3 className="text-lg font-semibold text-gray-200 mb-2">
                      {stat.label}
                    </h3>
                    <p className="text-sm text-gray-500">{stat.desc}</p>
                  </div>
                </TiltCard>
              </motion.li>
            ))}
          </ul>
        </div>

        <WhyChooseUsGrid />
      </div>
    </section>
  )
}
