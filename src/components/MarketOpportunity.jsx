"use client"

import React, { useState } from "react"
import {
  TrendingUp,
  Users,
  Globe,
  Shield,
  Zap,
  Award,
  Target,
  Rocket,
  Key,
} from "lucide-react"

// Framer Motion
import { motion } from "framer-motion"

// React Spring
import { useSpring, animated } from "@react-spring/web"

const MarketOpportunity = () => {
  const [hoveredStat, setHoveredStat] = useState(null)

  const marketStats = [
    {
      icon: TrendingUp,
      number: "$45T",
      label: "Cross-Border Payment Market",
      description: "Growing at 15% CAGR",
    },
    {
      icon: Users,
      number: "1.7B",
      label: "Unbanked Population",
      description: "Seeking financial inclusion",
    },
    {
      icon: Globe,
      number: "195",
      label: "Countries Worldwide",
      description: "Needing borderless solutions",
    },
  ]

  const advantages = [
    {
      icon: Shield,
      title: "Multi-Layer Security",
      description:
        "Bank-grade encryption, user-controlled wallets, and secure key management built into every transaction",
    },
    {
      icon: Zap,
      title: "Lightning Speed",
      description:
        "Sub-second settlements powered by an optimized crypto-to-fiat infrastructure",
    },
    {
      icon: Key,
      title: "Non-Custodial by Design",
      description:
        "You stay in control. Kellon never holds your crypto or private keys — your assets remain fully yours",
    },
    {
      icon: Globe,
      title: "Future-Ready Compliance",
      description:
        "Our infrastructure is designed to integrate seamlessly with compliance partners as regulatory requirements evolve, without compromising user sovereignty",
    },
  ]

  return (
    <section className="relative py-24 px-4 sm:px-6 lg:px-8 bg-primary-900 overflow-hidden">
      {/* Background */}
      <div className="absolute inset-0">
        <div className="absolute top-0 left-0 w-96 h-96 bg-accent-500/20 rounded-full blur-3xl" />
        <div className="absolute bottom-0 right-0 w-96 h-96 bg-accent-500/20 rounded-full blur-3xl" />
      </div>

      <div className="max-w-6xl mx-auto relative">
        {/* Glass Card Container */}
        <motion.div
          initial={{ opacity: 0, y: 50, scale: 0.95 }}
          whileInView={{ opacity: 1, y: 0, scale: 1 }}
          transition={{ duration: 0.8, ease: "easeOut" }}
          viewport={{ once: true }}
          className="relative mb-16 max-w-4xl mx-auto"
        >
          <GlassCard>
            {/* Badge */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.3 }}
              viewport={{ once: true }}
              className="text-center"
            >
              <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full border border-accent-500/30 bg-accent-500/10 mb-6 backdrop-blur-sm">
                <Target className="w-4 h-4 text-accent-400" />
                <span className="text-sm font-medium text-accent-300">
                  Market Opportunity
                </span>
              </div>
            </motion.div>

            {/* Title */}
            <motion.h2
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.4 }}
              viewport={{ once: true }}
              className="text-4xl sm:text-5xl lg:text-6xl font-bold text-white text-center mb-6 font-bungee"
            >
              The Future of
              <span className="block bg-gradient-to-r from-accent-400 to-accent-600 bg-clip-text text-transparent">
                Global Finance
              </span>
            </motion.h2>

            {/* Description */}
            <motion.p
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              transition={{ delay: 0.5 }}
              viewport={{ once: true }}
              className="text-xl text-gray-200 max-w-3xl mx-auto leading-relaxed text-center"
            >
              We're building the infrastructure for borderless finance, serving
              a $45T market with innovative technology and global reach.
            </motion.p>

            {/* Market Stats */}
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mt-16">
              {marketStats.map((stat, index) => {
                const IconComponent = stat.icon

                // React Spring hover animation
                const springStyles = useSpring({
                  transform:
                    hoveredStat === index
                      ? "translateY(-10px) scale(1.05)"
                      : "translateY(0px) scale(1)",
                  config: { tension: 200, friction: 18 },
                })

                return (
                  <animated.div
                    key={index}
                    style={springStyles}
                    onMouseEnter={() => setHoveredStat(index)}
                    onMouseLeave={() => setHoveredStat(null)}
                    className="text-center relative p-6 rounded-2xl backdrop-blur-sm bg-white/5 border border-white/10 hover:border-accent-500/30 transition-all duration-300 cursor-pointer"
                  >
                    {/* Highlight BG */}
                    <div
                      className={`absolute inset-0 bg-gradient-to-br from-accent-500/10 to-transparent rounded-2xl transition-opacity duration-300 ${
                        hoveredStat === index ? "opacity-100" : "opacity-0"
                      }`}
                    />

                    <div className="w-14 h-14 bg-gradient-to-br from-accent-400 to-accent-600 rounded-2xl flex items-center justify-center mx-auto mb-4 relative z-10 shadow-lg shadow-accent-500/25">
                      <IconComponent className="w-6 h-6 text-white" />
                    </div>

                    <div className="text-3xl font-bold bg-gradient-to-r from-accent-400 to-accent-600 bg-clip-text text-transparent relative z-10">
                      {stat.number}
                    </div>

                    <div className="text-lg font-semibold text-white mt-2 relative z-10">
                      {stat.label}
                    </div>

                    <div className="text-accent-300 text-sm font-medium mt-1 relative z-10">
                      {stat.description}
                    </div>
                  </animated.div>
                )
              })}
            </div>
          </GlassCard>
        </motion.div>

        {/* Advantages Section */}
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, ease: "easeOut" }}
          viewport={{ once: true }}
          className="relative"
        >
          {/* Header */}
          <div className="text-center mb-16">
            <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full border border-accent-500/30 bg-accent-500/10 mb-6 backdrop-blur-sm">
              <Rocket className="w-4 h-4 text-accent-400" />
              <span className="text-sm font-medium text-accent-300">
                Why Choose Kellon
              </span>
            </div>

            <h3 className="text-3xl sm:text-4xl font-bold text-white mb-4 font-bungee">
              Built for Scale & Security
            </h3>
          </div>

          {/* Advantage List */}
          <div className="max-w-4xl mx-auto">
            {advantages.map((advantage, index) => {
              const IconComponent = advantage.icon

              const listSpring = useSpring({
                from: { opacity: 0, transform: "translateX(-20px)" },
                to: { opacity: 1, transform: "translateX(0px)" },
                delay: index * 150,
              })

              return (
                <animated.div
                  key={index}
                  style={listSpring}
                  className="flex items-start gap-6 py-8 border-b border-gray-800 last:border-b-0 group hover:bg-white/5 transition-all duration-300 rounded-lg px-6 -mx-6 hover:border-accent-500/20 cursor-pointer backdrop-blur-sm"
                >
                  <div className="w-12 h-12 bg-gradient-to-br from-accent-400 to-accent-600 rounded-xl flex items-center justify-center flex-shrink-0 shadow-lg shadow-accent-500/25 group-hover:scale-110 transition-transform duration-300">
                    <IconComponent className="w-6 h-6 text-white" />
                  </div>

                  <div className="flex-1">
                    <h4 className="text-xl font-bold text-white mb-3 group-hover:text-accent-300 transition-colors duration-300">
                      {advantage.title}
                    </h4>
                    <p className="text-gray-300 leading-relaxed group-hover:text-gray-200 transition-colors duration-300">
                      {advantage.description}
                    </p>
                  </div>
                </animated.div>
              )
            })}
          </div>

        
        </motion.div>
      </div>
    </section>
  )
}

/* ----------------------------------------
   GlassCard Component (React Spring Hover)
----------------------------------------- */
const GlassCard = ({ children }) => {
  const [hovered, setHovered] = useState(false)

  const springProps = useSpring({
    transform: hovered ? "scale(1.02)" : "scale(1)",
    boxShadow: hovered
      ? "0px 0px 45px rgba(99, 102, 241, 0.35)"
      : "0px 0px 0px rgba(0,0,0,0)",
    config: { tension: 200, friction: 20 },
  })

  return (
    <animated.div
      style={springProps}
      onMouseEnter={() => setHovered(true)}
      onMouseLeave={() => setHovered(false)}
      className="relative backdrop-blur-2xl bg-gradient-to-br from-white/5 to-white/10 rounded-3xl border border-white/20 shadow-2xl p-8 sm:p-12"
    >
      {children}
    </animated.div>
  )
}

export default MarketOpportunity
