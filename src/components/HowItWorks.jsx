"use client"

import { motion } from "framer-motion"
import { CheckCircle, Wallet, Repeat, Building, LayoutGrid } from "lucide-react"
import React from "react"

const HowItWorks = () => {
  return (
      <section className="w-full py-24 bg-primary-500 relative overflow-hidden" id="how it works">
      {/* Grid Background Vector */}
      <div className="absolute inset-0">
        {/* Grid Net Pattern */}
        <div className="absolute inset-0 bg-[linear-gradient(rgba(255,255,255,0.03)_1px,transparent_1px),linear-gradient(90deg,rgba(255,255,255,0.03)_1px,transparent_1px)] bg-[size:40px_40px] [mask-image:radial-gradient(ellipse_80%_50%_at_50%_50%,black,transparent)]"></div>

        {/* Connection Lines */}
        <div className="absolute inset-0">
          {/* Horizontal Lines */}
          <div className="absolute top-1/3 left-0 w-full h-px bg-gradient-to-r from-transparent via-accent-500/10 to-transparent"></div>
          <div className="absolute top-2/3 left-0 w-full h-px bg-gradient-to-r from-transparent via-primary-500/10 to-transparent"></div>

          {/* Vertical Lines */}
          <div className="absolute left-1/3 top-0 h-full w-px bg-gradient-to-b from-transparent via-primary-500/10 to-transparent"></div>
          <div className="absolute left-2/3 top-0 h-full w-px bg-gradient-to-b from-transparent via-accent-500/10 to-transparent"></div>
        </div>

        {/* Floating Nodes/Connection Points */}
        <div className="absolute top-1/3 left-1/3 w-2 h-2 bg-accent-400/30 rounded-full"></div>
        <div className="absolute top-1/3 left-2/3 w-1.5 h-1.5 bg-primary-400/40 rounded-full"></div>

        <div className="absolute top-2/3 left-1/3 w-1.5 h-1.5 bg-primary-400/40 rounded-full"></div>
        <div className="absolute top-2/3 left-2/3 w-2 h-2 bg-accent-400/50 rounded-full"></div>

        {/* Gradient Orbs for Depth */}
        <div className="absolute top-1/4 left-1/4 w-64 h-64 bg-accent-500/5 rounded-full blur-3xl"></div>
        <div className="absolute bottom-1/4 right-1/4 w-64 h-64 bg-primary-500/5 rounded-full blur-3xl"></div>
      </div>

      <motion.div
        className="max-w-7xl mx-auto px-6 grid grid-cols-1 md:grid-cols-1 lg:grid-cols-2 gap-16 items-center justify-center relative z-10"
        initial={{ opacity: 0, y: 40 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.7, ease: "easeOut" }}
        viewport={{ once: true, amount: 0.3 }}
      >
        {/* LEFT — CARD MOCKUP */}
        <motion.div
          className="relative flex justify-center md:justify-center"
          initial={{ opacity: 0, scale: 0.9 }}
          whileInView={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.7, delay: 0.2, ease: "easeOut" }}
          viewport={{ once: true }}
          whileHover={{ scale: 1.03 }}
        >
          {/* Background angled shape */}
          <div className="absolute -left-10 md:-left-0 top-10 w-72 sm:w-80 md:w-96 h-72 sm:h-80 md:h-96 bg-primary/20 rotate-6 rounded-3xl blur-2xl transition-all duration-500 hover:rotate-12 hover:blur-3xl"></div>

          {/* Steps Card */}
          <motion.div
            className="relative bg-white/5 backdrop-blur-xl border border-white/10 shadow-2xl rounded-3xl p-8 w-[350px] sm:w-[380px] z-10 cursor-pointer"
            whileHover={{
              scale: 1.02,
              boxShadow: "0 20px 40px rgba(88, 28, 135, 0.25)",
              transition: { duration: 0.3, ease: "easeOut" },
            }}
          >
            <h3 className="text-xl font-semibold text-white mb-6">
              How It Works
            </h3>

            <div className="space-y-6">
              {steps.map((step, index) => (
                <StepItem
                  key={index}
                  icon={step.icon}
                  title={step.title}
                  description={step.description}
                  index={index}
                />
              ))}
            </div>
          </motion.div>
        </motion.div>

        {/* RIGHT — TEXT CONTENT */}
        <motion.div
          className="flex flex-col items-center md:items-center lg:items-start text-center lg:text-left"
          initial={{ opacity: 0, x: 40 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.7, delay: 0.2, ease: "easeOut" }}
          viewport={{ once: true }}
        >
          <h2 className="text-4xl font-bold text-white mb-6">
            A Simple, Powerful Experience
          </h2>
          <p className="text-gray-300 mb-10 max-w-md">
            We designed the onboarding process to be seamless from the moment
            you create your account to when you start investing in tokenized
            real-world assets.
          </p>

          <hr className="border-white/10 mb-10 w-3/4" />

          <h3 className="text-3xl font-bold text-white mb-4">
            Everything Just Works
          </h3>
          <p className="text-gray-300 max-w-md">
            From wallet creation to payments, top-ups, and investments,
            everything lives in one clean interface — giving you full control at
            every step.
          </p>
        </motion.div>
      </motion.div>
    </section>
  )
}

export default HowItWorks

const StepItem = ({ icon: Icon, title, description, index }) => (
  <motion.div
    className="flex gap-4 items-start cursor-pointer group"
    initial={{ opacity: 0, x: -20 }}
    whileInView={{ opacity: 1, x: 0 }}
    whileHover={{
      scale: 1.05,
      x: 5,
      transition: { duration: 0.3, ease: "easeOut" },
    }}
    transition={{ duration: 0.5, delay: index * 0.15 }}
    viewport={{ once: true }}
  >
    {/* Icon */}
    <div
      className="w-12 h-12 bg-white/10 rounded-xl flex items-center justify-center shrink-0
                 transition-all duration-300
                 group-hover:bg-white/20
                 group-hover:drop-shadow-[0_0_8px_rgba(88,28,135,0.8)_0_0_16px_rgba(88,28,135,0.6)_0_0_24px_rgba(88,28,135,0.4)]"
    >
      <Icon
        className="w-6 h-6 text-primary transition-colors duration-300 group-hover:text-[rgba(88,28,135,1)]"
        strokeWidth={2}
      />
    </div>

    {/* Text */}
    <div className="space-y-1">
      <h4
        className="text-white font-semibold text-base transition-all duration-300
                   group-hover:[text-shadow:0_0_8px_rgba(88,28,135,0.8),0_0_16px_rgba(88,28,135,0.6),0_0_24px_rgba(88,28,135,0.4)]"
      >
        {title}
      </h4>
      <p
        className="text-gray-400 text-sm leading-relaxed transition-all duration-300
                   group-hover:[text-shadow:0_0_8px_rgba(88,28,135,0.8),0_0_16px_rgba(88,28,135,0.6),0_0_24px_rgba(88,28,135,0.4)]"
      >
        {description}
      </p>
    </div>
  </motion.div>
)

const steps = [
  {
    icon: CheckCircle,
    title: "Create Your Account",
    description: "Sign up easily with email, Google, or Apple",
  },
  {
    icon: Wallet,
    title: "Wallet Generation",
    description: "A secure non-custodial wallet is created automatically",
  },
  {
    icon: Repeat,
    title: "Seamless On-Ramp & Off-Ramp",
    description: "Regulated partners handle safe fiat ↔ crypto conversions",
  },
  {
    icon: Building,
    title: "Invest in Tokenized RWA",
    description:
      "Buy fractional ownership in real-world assets directly from your wallet",
  },
  {
    icon: LayoutGrid,
    title: "Manage Everything in One App",
    description: "Payments, transfers, and investments — all in one place",
  },
]
