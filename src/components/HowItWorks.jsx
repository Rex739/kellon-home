"use client"

import { motion } from "framer-motion"
import { CheckCircle, Wallet, Repeat, Building, LayoutGrid } from "lucide-react"
import React from "react"

// --- DATA ---
const steps = [
  {
    icon: CheckCircle,
    title: "Create Your Account",
    description: "Sign up instantly with email, Google, or Apple credentials.",
  },
  {
    icon: Wallet,
    title: "Auto-Generated Wallet",
    description:
      "Your non-custodial wallet is created automatically in the background.",
  },
  {
    icon: Repeat,
    title: "Seamless On/Off Ramp",
    description:
      "Convert fiat to crypto securely through our regulated partners.",
  },
  {
    icon: Building,
    title: "Invest in RWA",
    description:
      "Purchase fractional ownership of real-world assets with one tap.",
  },
  {
    icon: LayoutGrid,
    title: "Manage Everything in One App",
    description: "Track your portfolio, transfers, and earnings in one place.",
  },
]

const HowItWorks = () => {
  return (
    <section
      className="w-full py-24 relative overflow-hidden flex items-center"
      id="how-it-works"
    >
      {/* --- BACKGROUND FX --- */}
      <div className="absolute inset-0 z-0">
        {/* 1. Base: Primary-800 (Lighter than Hero to make it stand out) */}
        <div className="absolute inset-0 bg-primary-800" />

        {/* 2. Vignette: Fade to Primary-1000 at edges for depth */}
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,transparent_0%,_#0c122a_100%)]" />

        {/* 3. Tech Grid: Made sharper (Primary-400) for contrast */}
        <div className="absolute inset-0 bg-[linear-gradient(rgba(59,130,246,0.05)_1px,transparent_1px),linear-gradient(90deg,rgba(59,130,246,0.05)_1px,transparent_1px)] bg-[size:40px_40px] [mask-image:radial-gradient(ellipse_80%_60%_at_50%_50%,black,transparent)]" />

        {/* 4. Ambient Spotlights */}
        <div className="absolute top-[-20%] right-[-10%] w-[600px] h-[600px] bg-primary-500/20 rounded-full blur-[120px] mix-blend-screen" />
        <div className="absolute bottom-[-20%] left-[-10%] w-[600px] h-[600px] bg-accent-500/10 rounded-full blur-[120px] mix-blend-screen" />
      </div>

      <div className="max-w-7xl mx-auto px-6 grid grid-cols-1 lg:grid-cols-2 gap-16 lg:gap-24 items-center relative z-10">
        {/* --- LEFT: INTERACTIVE CARD --- */}
        <motion.div
          className="relative flex justify-center lg:justify-end"
          initial={{ opacity: 0, x: -40 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8, ease: "easeOut" }}
          viewport={{ once: true }}
        >
          {/* Decorative Back Layers (Pop Effect) */}
          <div className="absolute top-6 left-6 w-full h-full bg-primary-600/20 rounded-[2.5rem] blur-xl transform rotate-3" />

          {/* Main Glass Card: Lighter bg (Primary-700/30) for contrast */}
          <div className="relative w-full max-w-md bg-primary-700/30 backdrop-blur-2xl border border-primary-400/20 rounded-[2rem] shadow-[0_20px_50px_rgba(12,18,42,0.5)] overflow-hidden p-8 sm:p-10 ring-1 ring-white/10">
            {/* Header inside card */}
            <div className="mb-8 flex items-center justify-between">
              <h3 className="text-2xl font-bold text-white font-bungee tracking-tight">
                System Flow
              </h3>
              <div className="flex gap-2 opacity-100">
                <div className="w-2.5 h-2.5 rounded-full bg-red-500 shadow-[0_0_8px_rgba(239,68,68,0.6)]" />
                <div className="w-2.5 h-2.5 rounded-full bg-accent-400 shadow-[0_0_8px_rgba(250,204,21,0.6)]" />
                <div className="w-2.5 h-2.5 rounded-full bg-emerald-500 shadow-[0_0_8px_rgba(16,185,129,0.6)]" />
              </div>
            </div>

            {/* Timeline Container */}
            <div className="relative space-y-8">
              {/* Vertical Connecting Line */}
              <div className="absolute left-[22px] top-4 bottom-4 w-px bg-gradient-to-b from-primary-400/30 via-primary-500/20 to-transparent" />

              {steps.map((step, index) => (
                <StepItem key={index} {...step} index={index} />
              ))}
            </div>
          </div>
        </motion.div>

        {/* --- RIGHT: TEXT CONTENT --- */}
        <motion.div
          className="text-center lg:text-left"
          initial={{ opacity: 0, x: 40 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8, ease: "easeOut", delay: 0.2 }}
          viewport={{ once: true }}
        >
          <div className="inline-block px-4 py-2 rounded-full border border-accent-500/30 bg-accent-500/10 text-accent-300 text-xs font-bold uppercase tracking-widest mb-6 shadow-[0_0_15px_rgba(250,204,21,0.2)]">
            Simplified Experience
          </div>

          <h2 className="text-4xl md:text-5xl font-bold text-white mb-6 leading-tight font-bungee drop-shadow-lg">
            From Sign-Up to <br />
            {/* High contrast gradient */}
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-accent-300 via-accent-400 to-white">
              Asset Owner
            </span>
          </h2>

          <p className="text-lg text-primary-100 mb-8 leading-relaxed max-w-lg mx-auto lg:mx-0 font-medium">
            We removed the complexity of Web3. No seed phrases to memorize, no
            confusing bridges. Just a seamless path to owning real-world assets.
          </p>

          <div className="space-y-6">
            <FeaturePoint
              title="Frictionless Onboarding"
              desc="Create a wallet using your existing social accounts in seconds."
            />
            <FeaturePoint
              title="All-in-One Control"
              desc="Manage fiat, crypto, and asset portfolio in a single view."
            />
          </div>
        </motion.div>
      </div>
    </section>
  )
}

// --- SUB COMPONENTS ---

// @ts-ignore
const StepItem = ({ icon: Icon, title, description, index }) => (
  <motion.div
    className="relative flex gap-5 items-start group cursor-default"
    initial={{ opacity: 0, y: 10 }}
    whileInView={{ opacity: 1, y: 0 }}
    transition={{ delay: index * 0.1 }}
    viewport={{ once: true }}
  >
    {/* Icon Bubble - Lighter background for contrast */}
    <div className="relative z-10 shrink-0">
      <div className="w-12 h-12 rounded-xl bg-primary-600/40 border border-primary-500/30 flex items-center justify-center transition-all duration-300 group-hover:bg-accent-500/20 group-hover:border-accent-500/60 group-hover:shadow-[0_0_25px_rgba(250,204,21,0.2)]">
        <Icon
          className="w-5 h-5 text-primary-200 group-hover:text-accent-400 transition-colors duration-300"
          strokeWidth={2}
        />
      </div>
    </div>

    {/* Text Content */}
    <div className="pt-1">
      <h4 className="text-white font-bold text-lg mb-1 group-hover:text-accent-400 transition-colors duration-300">
        {title}
      </h4>
      <p className="text-sm text-primary-200/70 leading-relaxed group-hover:text-primary-100 transition-colors duration-300">
        {description}
      </p>
    </div>
  </motion.div>
)

// @ts-ignore
const FeaturePoint = ({ title, desc }) => (
  <div className="flex flex-col border-l-2 border-primary-600 pl-6 hover:border-accent-400 transition-all duration-300 group">
    <h4 className="text-white font-bold text-lg mb-1">{title}</h4>
    <p className="text-primary-200/70 text-sm group-hover:text-primary-100 transition-colors">
      {desc}
    </p>
  </div>
)

export default HowItWorks
