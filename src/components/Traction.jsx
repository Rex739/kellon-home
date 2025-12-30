import React from "react"
import { useSpring, animated, config } from "@react-spring/web"
import { useInView } from "react-intersection-observer"
import { Users, DollarSign, Shield, Target } from "lucide-react"
import ChainSlider from "./ChainSlider"

/* =======================
   Metric Card
======================= */
const MetricCard = ({ icon: Icon, metric, label, sub, index }) => {
  const [ref, inView] = useInView({
    threshold: 0.2,
    triggerOnce: true,
  })

  const spring = useSpring({
    opacity: inView ? 1 : 0,
    transform: inView ? "translateY(0px)" : "translateY(16px)",
    config: config.gentle,
    delay: index * 120,
  })

  return (
    <animated.div
      ref={ref}
      style={spring}
      className="
        relative rounded-2xl p-6
        bg-white/5 backdrop-blur-xl
        border border-white/10
        shadow-lg
        hover:border-white/20 hover:scale-[1.02]
        transition
      "
    >
      <div className="flex items-center gap-4 mb-4">
        <div className="w-12 h-12 rounded-xl bg-white/10 flex items-center justify-center">
          <Icon className="w-6 h-6 text-accent-400" />
        </div>

        <div>
          <div className="text-2xl font-bold text-white">{metric}</div>
          <div className="text-sm text-gray-400">{label}</div>
        </div>
      </div>

      <div className="text-sm text-gray-500">{sub}</div>
    </animated.div>
  )
}

/* =======================
   Traction Section
======================= */
export default function Traction() {
  const metrics = [
    {
      icon: Users,
      metric: "5,000+",
      label: "Waitlist Users",
      sub: "Organic pre-launch growth",
    },
    {
      icon: DollarSign,
      metric: "USDT / USDC",
      label: "Stable Assets",
      sub: "Multi-chain liquidity",
    },
    {
      icon: Shield,
      metric: "99.9%",
      label: "Security Score",
      sub: "Bank-grade protection",
    },
    {
      icon: Target,
      metric: "50+",
      label: "Target Countries",
      sub: "Launch-ready markets",
    },
  ]

  const [headerRef, headerInView] = useInView({
    threshold: 0.3,
    triggerOnce: true,
  })

  const headerSpring = useSpring({
    opacity: headerInView ? 1 : 0,
    transform: headerInView ? "translateY(0px)" : "translateY(20px)",
    config: config.molasses,
  })

  return (
    <section className="relative pt-12 px-4 sm:px-6 lg:px-8 bg-primary-800 overflow-hidden">
      {/* =======================
          NETWORK BACKGROUND
      ======================= */}
      <div className="absolute inset-0">
        <div className="absolute inset-0 bg-[linear-gradient(rgba(255,255,255,0.03)_1px,transparent_1px),linear-gradient(90deg,rgba(255,255,255,0.03)_1px,transparent_1px)] bg-[size:40px_40px] [mask-image:radial-gradient(ellipse_80%_50%_at_50%_50%,black,transparent)]" />

        {/* Lines */}
        {[25, 50, 75].map((y) => (
          <div
            key={y}
            className="absolute left-0 w-full h-px bg-gradient-to-r from-transparent via-accent-500/10 to-transparent"
            style={{ top: `${y}%` }}
          />
        ))}

        {[25, 50, 75].map((x) => (
          <div
            key={x}
            className="absolute top-0 h-full w-px bg-gradient-to-b from-transparent via-primary-500/10 to-transparent"
            style={{ left: `${x}%` }}
          />
        ))}

        {/* Orbs */}
        <div className="absolute top-1/4 left-1/4 w-56 h-56 bg-accent-500/10 rounded-full blur-3xl" />
        <div className="absolute bottom-1/3 right-1/4 w-56 h-56 bg-primary-500/10 rounded-full blur-3xl" />
      </div>

      {/* =======================
          CONTENT
      ======================= */}
      <div className="relative z-10 max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-12 gap-14 items-center">
        {/* LEFT — COPY */}
        <div className="lg:col-span-5 relative">
          {/* Glass slab */}
         

          {/* Accent orb */}
          <div className="absolute -top-12 -left-12 w-40 h-40 bg-accent-500/20 rounded-full blur-3xl" />

          <animated.div ref={headerRef} style={headerSpring}>
            <h2 className="text-4xl sm:text-5xl font-bold text-white mb-6 font-bungee leading-tight">
              Building <br />
              <span className="gradient-text">Momentum</span>
            </h2>

            {/* Divider */}
            <div className="flex items-center gap-4 mb-6">
              <span className="h-px w-12 bg-gradient-to-r from-accent-400 to-transparent" />
              <span className="text-xs tracking-widest text-gray-400 uppercase">
                Early Traction
              </span>
            </div>

            <p className="text-lg text-gray-300 leading-relaxed max-w-md">
              Strong pre-launch indicators show growing market demand and
              investor confidence in a{" "}
              <span className="text-white font-medium">
                scalable, compliant financial network
              </span>
              .
            </p>
          </animated.div>
        </div>

        {/* RIGHT — METRICS */}
        <div className="lg:col-span-7 relative">
          {/* Floating shape */}
          <div className="absolute top-1/2 right-12 w-48 h-48 bg-primary-500/20 rounded-full blur-3xl" />

          <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
            {metrics.map((item, index) => (
              <div
                key={index}
                className={index % 2 === 1 ? "sm:translate-y-10" : ""}
              >
                <MetricCard {...item} index={index} />
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* =======================
          SUPPORTED ASSETS COPY
      ======================= */}
      <div className="relative z-10 text-center mt-24 mb-10">
        <div className="flex items-center justify-center gap-4 mb-6">
          <span className="h-px w-12 bg-gradient-to-r from-transparent via-accent-400/40 to-transparent" />
          <span className="text-xs tracking-widest text-gray-400 uppercase">
            Supported Assets
          </span>
          <span className="h-px w-12 bg-gradient-to-r from-transparent via-accent-400/40 to-transparent" />
        </div>

        <p className="text-lg sm:text-xl text-gray-200 max-w-3xl mx-auto leading-relaxed">
          USDT and USDC available across leading blockchain networks,
          <span className="text-white font-medium">
            {" "}
            optimized for scale, compliance, and deep liquidity
          </span>
          .
        </p>
      </div>

      {/* =======================
          CHAIN SLIDER
      ======================= */}
      <ChainSlider />
    </section>
  )
}
