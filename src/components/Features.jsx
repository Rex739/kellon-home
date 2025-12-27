import { useEffect, useState, useRef } from "react"
import { useSpring, animated, config } from "@react-spring/web"
import { useInView } from "react-intersection-observer"
import {
  Wallet,
  ShieldCheck,
  Zap,
  Globe,
  Home,
  ArrowRight,
  Lock,
} from "lucide-react"
import React from "react"

const countries = [
  { name: "Nigeria", flag: "🇳🇬", region: "Africa" },
  { name: "Kenya", flag: "🇰🇪", region: "Africa" },
  { name: "Ghana", flag: "🇬🇭", region: "Africa" },
  { name: "Uganda", flag: "🇺🇬", region: "Africa" },
  { name: "Tanzania", flag: "🇹🇿", region: "Africa" },
  { name: "Malawi", flag: "🇲🇼", region: "Africa" },
  { name: "Benin", flag: "🇧🇯", region: "Africa" },
  { name: "Côte d'Ivoire", flag: "🇨🇮", region: "Africa" },
  { name: "United States", flag: "🇺🇸", region: "North America" },
  { name: "Canada", flag: "🇨🇦", region: "North America" },
  { name: "Mexico", flag: "🇲🇽", region: "North America" },
  { name: "United Kingdom", flag: "🇬🇧", region: "Europe" },
  { name: "India", flag: "🇮🇳", region: "Asia" },
  { name: "Brazil", flag: "🇧🇷", region: "South America" },
  { name: "Australia", flag: "🇦🇺", region: "Oceania" },
  { name: "Zambia", flag: "🇿🇲", region: "Africa" },
]

const features = [
  {
    title: "Non-Custodial Wallet",
    description:
      "Your keys, your crypto. Full control with enterprise-grade security.",
    icon: Wallet,
    gradient: "bg-gradient-to-br from-purple-500/10 to-pink-500/10",
    border: "border-purple-500/30",
    color: "from-purple-500 to-pink-500",
  },
  {
    title: "Fiat & Crypto Flow",
    description: "Seamless on/off ramps through licensed global partners.",
    icon: ShieldCheck,
    gradient: "bg-gradient-to-br from-blue-500/10 to-purple-500/10",
    border: "border-blue-500/30",
    color: "from-blue-500 to-purple-500",
  },
  {
    title: "Tokenized RWA Access",
    description:
      "Invest in global real estate, stocks, and commodities in one tap.",
    icon: Home,
    gradient: "bg-gradient-to-br from-orange-500/10 to-yellow-500/10",
    border: "border-orange-500/30",
    color: "from-orange-500 to-yellow-500",
  },
  {
    title: "Instant & Borderless Payments",
    description:
      "Lightning-fast settlements with minimal fees across networks.",
    icon: Zap,
    gradient: "bg-gradient-to-br from-green-500/10 to-emerald-500/10",
    border: "border-green-500/30",
    color: "from-green-500 to-emerald-500",
  },
]

export default function FeaturesSection() {
  const [angle, setAngle] = useState(0)

  // Animation refs
  const headerRef = useRef(null)
  const [headerInView, setHeaderInView] = useState(false)

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setHeaderInView(true)
        }
      },
      { threshold: 0.3 }
    )

    if (headerRef.current) {
      observer.observe(headerRef.current)
    }

    return () => {
      if (headerRef.current) {
        observer.unobserve(headerRef.current)
      }
    }
  }, [])

  // Circular rotation animation
  useEffect(() => {
    let animationId
    let startTime
    const radius = 140 // Distance from center
    const speed = 0.0003 // Rotation speed (radians per ms)

    const animate = (timestamp) => {
      if (!startTime) startTime = timestamp
      const elapsed = timestamp - startTime

      // Calculate new angle
      setAngle(elapsed * speed)

      animationId = requestAnimationFrame(animate)
    }

    animationId = requestAnimationFrame(animate)

    return () => {
      if (animationId) cancelAnimationFrame(animationId)
    }
  }, [])

  // Spring animations
  const headerSpring = useSpring({
    opacity: headerInView ? 1 : 0,
    transform: headerInView ? "translateY(0px)" : "translateY(30px)",
    config: config.molasses,
  })

  // Feature animations
  const featuresAnimation = useSpring({
    opacity: headerInView ? 1 : 0,
    transform: headerInView ? "translateY(0px)" : "translateY(40px)",
    config: config.gentle,
    delay: 300,
  })

  const scrollToWaitlist = () => {
    const footer = document.querySelector("footer")
    if (footer) {
      footer.scrollIntoView({ behavior: "smooth" })
      setTimeout(() => {
        const input = footer.querySelector('input[type="email"]')
        // @ts-ignore
        input?.focus()
      }, 500)
    }
  }

  return (
    <section
      className="relative pb-24 px-6 bg-black overflow-hidden"
      id="features"
    >
      <div className="max-w-7xl mx-auto">
        {/* Animated Header */}
        <animated.div
          ref={headerRef}
          style={headerSpring}
          className="text-center mb-20"
        >
          <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full border border-white/10 bg-white/5 mb-6 backdrop-blur-sm">
            <Lock className="w-4 h-4 text-purple-400" />
            <span className="text-sm font-medium text-gray-300">
              Secure & Compliant
            </span>
          </div>
          <h2 className="text-4xl sm:text-5xl lg:text-6xl font-bold text-white mb-6 font-bungee">
            Financial Freedom,
            <span className="block bg-gradient-to-r from-purple-400 to-pink-400 bg-clip-text text-transparent">
              Globally Unified
            </span>
          </h2>
          <p className="text-xl text-gray-400 max-w-3xl mx-auto leading-relaxed">
            One mobile wallet that bridges traditional finance with the crypto
            economy. Access global markets, make borderless payments, and
            control your wealth.
          </p>
        </animated.div>

        {/* SPLIT LAYOUT with Animation */}
        <animated.div
          style={featuresAnimation}
          className="grid grid-cols-1 lg:grid-cols-12 gap-12 mb-24"
        >
          {/* LEFT */}
          <div className="lg:col-span-5 flex flex-col justify-center">
            <h3 className="text-3xl sm:text-4xl font-bold text-white mb-6">
              Everything You Need.
              <span className="block text-purple-400">Nothing You Don't.</span>
            </h3>

            <div className="mt-8">
              <p className="text-gray-400 text-sm mb-3">Want to learn more?</p>
              <a
                href="#how-it-works"
                className="text-purple-400 hover:text-purple-300 font-medium flex items-center gap-2"
              >
                See how it works
                <ArrowRight className="w-4 h-4" />
              </a>
            </div>
          </div>

          {/* RIGHT - Features Grid */}
          <div className="lg:col-span-7 grid grid-cols-1 sm:grid-cols-2 gap-6">
            {features.map((feature, i) => {
              const Icon = feature.icon
              return (
                <div
                  key={i}
                  className={`p-7 rounded-2xl border ${feature.border} ${feature.gradient} backdrop-blur-sm hover:scale-[1.03] transition-all duration-500 hover:shadow-xl cursor-pointer`}
                >
                  <div
                    className={`w-14 h-14 bg-gradient-to-br ${feature.color} rounded-xl flex items-center justify-center mb-5 group-hover:scale-110 transition-transform duration-300`}
                  >
                    <Icon className="w-7 h-7 text-white" />
                  </div>
                  <h4 className="text-xl font-semibold text-white mb-2">
                    {feature.title}
                  </h4>
                  <p className="text-gray-300 text-sm leading-relaxed">
                    {feature.description}
                  </p>
                </div>
              )
            })}
          </div>
        </animated.div>

        {/* 🌍 CIRCULAR COUNTRY DISPLAY */}
        <div className="text-center mb-32">
          <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full border border-white/10 bg-white/5 backdrop-blur-sm mb-32">
            <span className="text-sm font-medium text-gray-300">
              Trusted worldwide
            </span>
          </div>

          <div className="relative h-80 flex items-center justify-center">
            {/* Circular orbit path (visual guide) */}
            <div className="absolute w-80 h-80">
              {/* Outer glow */}
              <div className="absolute -inset-4 bg-gradient-to-br from-purple-500/10 to-cyan-500/10 rounded-full blur-2xl" />

              {/* Main holographic sphere */}
              <div className="absolute inset-0 rounded-full bg-gradient-to-br from-purple-900/20 via-blue-900/20 to-cyan-900/20 backdrop-blur-sm border border-white/10">
                {/* Holographic grid */}
                <div className="absolute inset-0">
                  {/* Longitude lines */}
                  <div className="absolute left-1/2 top-0 bottom-0 w-px bg-gradient-to-b from-transparent via-cyan-400/20 to-transparent" />
                  <div className="absolute left-1/4 top-0 bottom-0 w-px bg-gradient-to-b from-transparent via-purple-400/10 to-transparent" />
                  <div className="absolute right-1/4 top-0 bottom-0 w-px bg-gradient-to-b from-transparent via-purple-400/10 to-transparent" />

                  {/* Latitude lines */}
                  <div className="absolute top-1/2 left-0 right-0 h-px bg-gradient-to-r from-transparent via-cyan-400/20 to-transparent" />
                  <div className="absolute top-1/4 left-0 right-0 h-px bg-gradient-to-r from-transparent via-purple-400/10 to-transparent" />
                  <div className="absolute bottom-1/4 left-0 right-0 h-px bg-gradient-to-r from-transparent via-purple-400/10 to-transparent" />
                </div>

                {/* Pulsing core */}
                <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-12 h-12 bg-gradient-to-br from-cyan-400 to-purple-500 rounded-full blur-md animate-pulse" />
              </div>
            </div>

            {/* Rotating countries */}
            {countries.map((country, idx) => {
              // Calculate position on circle
              const countryAngle =
                angle + idx * ((2 * Math.PI) / countries.length)
              const x = Math.cos(countryAngle) * 200
              const y = Math.sin(countryAngle) * 200

              return (
                <animated.div
                  key={idx}
                  className="absolute flex flex-col items-center transform -translate-x-1/2 -translate-y-1/2"
                  style={{
                    left: `calc(50% + ${x}px)`,
                    top: `calc(50% + ${y}px)`,
                  }}
                >
                  <div className="text-3xl mb-2 animate-pulse">
                    {country.flag}
                  </div>
                  <div className="text-sm text-white font-medium whitespace-nowrap">
                    {country.name}
                  </div>
                  <div className="text-xs text-gray-400">{country.region}</div>
                </animated.div>
              )
            })}

            {/* Center badge */}
            <div className="absolute inset-0 flex items-center justify-center">
              <div className="">
                <div className="text-5xl font-bold text-white mb-2">50+</div>
                <div className="text-purple-300 font-medium text-lg mb-1">
                  countries supported
                </div>
                <div className="text-gray-400 text-sm">more coming soon</div>
              </div>
            </div>
          </div>
        </div>

        {/* FINAL CTA */}
        <div className="text-center">
          <button
            onClick={scrollToWaitlist}
            className="px-8 py-4 bg-gradient-to-r from-accent-400 to-primary-800 rounded-xl  text-white font-semibold hover:scale-105 hover:shadow-xl hover:shadow-primary-500/25 transition-all duration-300 flex items-center justify-center gap-2 mx-auto text-sm"
          >
            Join Waitlist - Get Early Access
            <ArrowRight className="w-5 h-5" />
          </button>
        </div>
      </div>
    </section>
  )
}
