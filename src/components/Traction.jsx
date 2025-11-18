import React from "react"
import { useSpring, animated, config } from "@react-spring/web"
import { useInView } from "react-intersection-observer"
import { DollarSign, Users, TrendingUp, Target } from "lucide-react"

const AnimatedCard = ({ item, index }) => {
  const IconComponent = item.icon

  const [ref, inView] = useInView({
    threshold: 0.2,
    triggerOnce: true,
  })

  const cardSpring = useSpring({
    opacity: inView ? 1 : 0,
    transform: inView
      ? "translateY(0px) scale(1)"
      : "translateY(30px) scale(0.9)",
    config: config.gentle,
    delay: index * 150,
  })

  const iconSpring = useSpring({
    transform: inView ? "scale(1) rotate(0deg)" : "scale(0) rotate(-180deg)",
    config: config.wobbly,
    delay: index * 150 + 200,
  })

  const textSpring = useSpring({
    opacity: inView ? 1 : 0,
    transform: inView ? "translateY(0px)" : "translateY(10px)",
    config: config.slow,
    delay: index * 150 + 300,
  })

  const [hoverProps, hoverApi] = useSpring(() => ({
    scale: 1,
    y: 0,
    borderOpacity: 0.1,
    config: config.stiff,
  }))

  const handleHover = (hovering) => {
    hoverApi.start({
      scale: hovering ? 1.05 : 1,
      y: hovering ? -5 : 0,
      borderOpacity: hovering ? 0.3 : 0.1,
    })
  }

  return (
    <animated.div
      ref={ref}
      style={{
        opacity: cardSpring.opacity,
        transform: cardSpring.transform,
        ...hoverProps,
      }}
      className="text-center bg-white/5 backdrop-blur-sm border border-white/10 rounded-xl p-4 flex flex-col items-center justify-center shadow-sm min-w-[140px]"
      onMouseEnter={() => handleHover(true)}
      onMouseLeave={() => handleHover(false)}
    >
      {/* Animated Icon */}
      <animated.div
        style={iconSpring}
        className={`w-10 h-10 ${item.color} bg-current/10 rounded-lg flex items-center justify-center mx-auto mb-2`}
      >
        <IconComponent className={`w-5 h-5 ${item.color}`} />
      </animated.div>

      {/* Animated Metric Number */}
      <animated.div
        style={textSpring}
        className="text-lg font-bold text-white mb-1"
      >
        {item.metric}
      </animated.div>

      {/* Animated Label */}
      <animated.div
        style={textSpring}
        className="text-sm text-gray-300 mb-1 leading-tight"
      >
        {item.label}
      </animated.div>

      {/* Animated Growth Text */}
      <animated.div
        style={textSpring}
        className={`text-xs font-medium ${item.color}`}
      >
        {item.growth}
      </animated.div>

      {/* Animated Border Glow */}
      <animated.div
        className="absolute inset-0 rounded-xl border-2 pointer-events-none"
        style={{
          borderColor: `rgb(236 72 153 / ${hoverProps.borderOpacity})`,
          opacity: hoverProps.borderOpacity,
        }}
      />
    </animated.div>
  )
}

const Traction = () => {
  const metrics = [
    {
      icon: Users,
      metric: "5,000+",
      label: "Waitlist Signups",
      growth: "Growing Daily",
      color: "text-primary-400",
    },
    {
      icon: DollarSign,
      metric: "99.9%",
      label: "Security Score",
      growth: "Bank-Grade",
      color: "text-accent-400",
    },
    {
      icon: TrendingUp,
      metric: "150+",
      label: "Cryptocurrencies",
      growth: "Supported",
      color: "text-primary-500",
    },
    {
      icon: Target,
      metric: "50+",
      label: "Target Countries",
      growth: "Launch Ready",
      color: "text-accent-500",
    },
  ]

  const [headerRef, headerInView] = useInView({
    threshold: 0.3,
    triggerOnce: true,
  })

  const headerSpring = useSpring({
    opacity: headerInView ? 1 : 0,
    transform: headerInView ? "translateY(0px)" : "translateY(30px)",
    config: config.molasses,
  })

  const gridSpring = useSpring({
    opacity: headerInView ? 1 : 0,
    transform: headerInView ? "translateY(0px)" : "translateY(20px)",
    config: config.slow,
    delay: 200,
  })

  return (
    <section className="relative py-16 px-4 sm:px-6 lg:px-8 bg-primary-800 overflow-hidden">
      {/* Net/Network Background Vector */}
      <div className="absolute inset-0">
        {/* Grid Net Pattern */}
        <div className="absolute inset-0 bg-[linear-gradient(rgba(255,255,255,0.03)_1px,transparent_1px),linear-gradient(90deg,rgba(255,255,255,0.03)_1px,transparent_1px)] bg-[size:40px_40px] [mask-image:radial-gradient(ellipse_80%_50%_at_50%_50%,black,transparent)]"></div>

        {/* Connection Lines */}
        <div className="absolute inset-0">
          {/* Horizontal Lines */}
          <div className="absolute top-1/4 left-0 w-full h-px bg-gradient-to-r from-transparent via-accent-500/10 to-transparent"></div>
          <div className="absolute top-1/2 left-0 w-full h-px bg-gradient-to-r from-transparent via-primary-500/10 to-transparent"></div>
          <div className="absolute top-3/4 left-0 w-full h-px bg-gradient-to-r from-transparent via-accent-500/10 to-transparent"></div>

          {/* Vertical Lines */}
          <div className="absolute left-1/4 top-0 h-full w-px bg-gradient-to-b from-transparent via-primary-500/10 to-transparent"></div>
          <div className="absolute left-1/2 top-0 h-full w-px bg-gradient-to-b from-transparent via-accent-500/10 to-transparent"></div>
          <div className="absolute left-3/4 top-0 h-full w-px bg-gradient-to-b from-transparent via-primary-500/10 to-transparent"></div>
        </div>

        {/* Floating Nodes/Connection Points */}
        <div className="absolute top-1/4 left-1/4 w-2 h-2 bg-accent-400/30 rounded-full"></div>
        <div className="absolute top-1/4 left-1/2 w-1.5 h-1.5 bg-primary-400/40 rounded-full"></div>
        <div className="absolute top-1/4 left-3/4 w-2 h-2 bg-accent-400/30 rounded-full"></div>

        <div className="absolute top-1/2 left-1/4 w-1.5 h-1.5 bg-primary-400/40 rounded-full"></div>
        <div className="absolute top-1/2 left-1/2 w-2 h-2 bg-accent-400/50 rounded-full"></div>
        <div className="absolute top-1/2 left-3/4 w-1.5 h-1.5 bg-primary-400/40 rounded-full"></div>

        <div className="absolute top-3/4 left-1/4 w-2 h-2 bg-accent-400/30 rounded-full"></div>
        <div className="absolute top-3/4 left-1/2 w-1.5 h-1.5 bg-primary-400/40 rounded-full"></div>
        <div className="absolute top-3/4 left-3/4 w-2 h-2 bg-accent-400/30 rounded-full"></div>

        {/* Gradient Orbs for Depth */}
        <div className="absolute top-1/3 left-1/3 w-48 h-48 bg-accent-500/5 rounded-full blur-3xl"></div>
        <div className="absolute bottom-1/3 right-1/3 w-48 h-48 bg-primary-500/5 rounded-full blur-3xl"></div>
      </div>

      <div className="max-w-6xl mx-auto relative z-10">
        {/* Animated Header */}
        <animated.div
          ref={headerRef}
          style={headerSpring}
          className="text-center mb-12"
        >
          <h2 className="text-2xl sm:text-3xl font-bold text-white mb-3 font-bungee">
            Building <span className="gradient-text">Momentum</span>
          </h2>
          <p className="text-lg text-gray-300 max-w-2xl mx-auto">
            Strong pre-launch indicators show growing market demand and investor
            confidence in our vision.
          </p>
        </animated.div>

        {/* Animated Grid */}
        <animated.div
          style={gridSpring}
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4"
        >
          {metrics.map((item, index) => (
            <AnimatedCard key={index} item={item} index={index} />
          ))}
        </animated.div>
      </div>
    </section>
  )
}

export default Traction
