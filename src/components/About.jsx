// @ts-nocheck
import React, { useRef, useState, useCallback, useMemo } from "react"
import {
  motion,
  useScroll,
  useTransform,
  useSpring,
  useMotionTemplate,
  useMotionValue,
} from "framer-motion"
import {
  Users,
  Rocket,
  ArrowRight,
  Calendar,
  Globe,
  ShieldCheck,
  Zap,
  Target,
  Eye,
} from "lucide-react"

// --- STATIC DATA ---
const VALUES = [
  {
    icon: ShieldCheck,
    title: "Security First",
    desc: "Fortified with bank-grade encryption and multi-layer protection.",
  },
  {
    icon: Users,
    title: "People Focused",
    desc: "Built for global access and simplicity.",
  },
  {
    icon: Zap,
    title: "Instant Settlement",
    desc: "No more 3-day wait times. Move money at the speed of the internet.",
  },
]

// --- UTILITY: FLUID CARD ---
const FluidCard = React.memo(({ children, className = "" }) => {
  const mouseX = useMotionValue(-1000)
  const mouseY = useMotionValue(-1000)
  const bounds = useRef(null)

  const handleMouseEnter = useCallback((e) => {
    bounds.current = e.currentTarget.getBoundingClientRect()
  }, [])

  const handleMouseMove = useCallback(
    (e) => {
      if (!bounds.current) return
      mouseX.set(e.clientX - bounds.current.left)
      mouseY.set(e.clientY - bounds.current.top)
    },
    [mouseX, mouseY]
  )

  const handleMouseLeave = useCallback(() => {
    mouseX.set(-1000)
    mouseY.set(-1000)
  }, [mouseX, mouseY])

  const background = useMotionTemplate`
    radial-gradient(
      650px circle at ${mouseX}px ${mouseY}px,
      rgba(255, 255, 255, 0.08),
      transparent 80%
    )
  `

  return (
    <div
      className={`group relative border border-white/10 bg-white/5 overflow-hidden ${className}`}
      onMouseEnter={handleMouseEnter}
      onMouseMove={handleMouseMove}
      onMouseLeave={handleMouseLeave}
    >
      <motion.div
        className="pointer-events-none absolute -inset-px opacity-0 transition duration-300 group-hover:opacity-100 will-change-[opacity]"
        style={{ background }}
      />
      <div className="relative h-full z-10">{children}</div>
    </div>
  )
})
FluidCard.displayName = "FluidCard"

// --- SUB-COMPONENT: VALUE CARD ---
const ValueCard = React.memo(({ data, index }) => {
  return (
    <motion.div
      initial={{ opacity: 0, y: 50 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-50px" }}
      transition={{ delay: index * 0.1, duration: 0.5 }}
      className="h-full"
    >
      <FluidCard className="rounded-3xl p-8 h-full hover:bg-white/[0.07] transition-colors duration-300">
        <div className="w-14 h-14 rounded-2xl bg-white/5 border border-white/10 flex items-center justify-center mb-6 text-white group-hover:bg-accent-500 group-hover:text-black group-hover:border-accent-400 transition-all duration-300 shadow-lg group-hover:shadow-accent-500/20">
          <data.icon size={24} />
        </div>
        <h4 className="text-xl font-bold text-white mb-3">{data.title}</h4>
        <p className="text-gray-400 text-sm leading-relaxed border-t border-white/5 pt-4 group-hover:border-white/10 transition-colors">
          {data.desc}
        </p>
      </FluidCard>
    </motion.div>
  )
})
ValueCard.displayName = "ValueCard"

// --- MAIN COMPONENT ---
const About = () => {
  const containerRef = useRef(null)

  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start end", "end start"],
  })

  const smoothProgress = useSpring(scrollYProgress, {
    stiffness: 100,
    damping: 30,
    restDelta: 0.001,
  })

  const headerY = useTransform(smoothProgress, [0, 0.4], [50, -50])
  const headerOpacity = useTransform(smoothProgress, [0, 0.2], [0, 1])
  const bgTextX = useTransform(smoothProgress, [0, 1], ["0%", "-30%"])
  const leftColY = useTransform(smoothProgress, [0.1, 1], [100, 0])
  const rightColY = useTransform(smoothProgress, [0.1, 1], [200, -50])

  const scrollToWaitlist = useCallback(() => {
    const footer = document.querySelector("footer")
    if (footer) {
      footer.scrollIntoView({ behavior: "smooth" })
      setTimeout(() => {
        const input = footer.querySelector('input[type="email"]')
        // @ts-ignore
        input?.focus()
      }, 500)
    }
  }, [])

  return (
    <section
      ref={containerRef}
      id="about"
      className="relative bg-primary-900 pt-32 pb-0 overflow-hidden "
    >
      {/* --- BACKGROUND LAYERS --- */}
      <div className="absolute inset-0 z-0 pointer-events-none select-none">
        <div className="absolute inset-0 bg-[url('https://grainy-gradients.vercel.app/noise.svg')] opacity-20 mix-blend-overlay will-change-[opacity]"></div>
        <div className="absolute top-1/4 left-0 w-full opacity-[0.03] whitespace-nowrap overflow-hidden">
          <motion.div
            style={{ x: bgTextX }}
            className="text-[20vw] font-black font-bungee leading-none text-white will-change-transform"
          >
            BORDERLESS FINANCE • GLOBAL ACCESS • FUTURE READY •
          </motion.div>
        </div>
        <div className="absolute top-0 right-0 w-[800px] h-[800px] bg-primary-900/20 rounded-full blur-[120px] will-change-transform" />
        <div className="absolute bottom-0 left-0 w-[600px] h-[600px] bg-accent-900/10 rounded-full blur-[120px] will-change-transform" />
      </div>

      <div className="max-w-7xl  mx-auto relative z-10 px-6">
        {/* --- HEADER --- */}
        <motion.div
          style={{ y: headerY, opacity: headerOpacity }}
          className="text-center  will-change-[transform,opacity]"
        >
          <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full border border-white/10 bg-white/5 backdrop-blur-md mb-8 hover:bg-white/10 transition-colors cursor-default">
            <span className="relative flex h-2 w-2">
              <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-accent-400 opacity-75"></span>
              <span className="relative inline-flex rounded-full h-2 w-2 bg-accent-500"></span>
            </span>
            <span className="text-xs font-bold text-gray-200 tracking-widest uppercase">
              Who We Are
            </span>
          </div>

          <h2 className="text-5xl md:text-7xl lg:text-8xl font-bold text-white tracking-tight leading-[0.9]">
            The Future of <br />
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-white via-gray-400 to-gray-600">
              Borderless Finance
            </span>
          </h2>
        </motion.div>

        {/* --- FLUID GRID LAYOUT --- */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12 mb-32 items-stretch">
          {/* LEFT COL: MISSION & VISION */}
          <motion.div
            style={{ y: leftColY }}
            className="lg:col-span-7 flex flex-col gap-8 will-change-transform h-full"
          >
            <FluidCard className="rounded-[2.5rem] p-10 md:p-14 h-full flex flex-col justify-center">
              {/* Mission Block */}
              <div className="mb-10">
                <div className="flex items-center gap-3 mb-4">
                  <div className="p-2 bg-accent-500/10 rounded-lg text-accent-400">
                    <Target size={24} />
                  </div>
                  <h3 className="text-2xl font-bold text-white uppercase tracking-wide">
                    Our Mission
                  </h3>
                </div>
                <p className="text-xl text-gray-300 leading-relaxed font-light">
                  To make global financial tools accessible to anyone, anywhere,{" "}
                  <span className="text-white font-medium">
                    without barriers or complexity
                  </span>
                  .
                </p>
              </div>

              {/* Divider */}
              <div className="w-full h-px bg-gradient-to-r from-transparent via-white/10 to-transparent mb-10" />

              {/* Vision Block */}
              <div>
                <div className="flex items-center gap-3 mb-4">
                  <div className="p-2 bg-blue-500/10 rounded-lg text-blue-400">
                    <Eye size={24} />
                  </div>
                  <h3 className="text-2xl font-bold text-white uppercase tracking-wide">
                    Our Vision
                  </h3>
                </div>
                <p className="text-xl text-gray-300 leading-relaxed font-light">
                  A single{" "}
                  <span className="text-white font-medium">super-app</span> for
                  payments, investing, and wealth — all borderless and instant.
                </p>
              </div>
            </FluidCard>
          </motion.div>

          {/* RIGHT COL: CTA */}
          <motion.div
            style={{ y: rightColY }}
            className="lg:col-span-5 will-change-transform h-full"
          >
            <FluidCard className="rounded-[2.5rem] p-10 md:p-12 bg-gradient-to-b from-white/[0.07] to-transparent h-full border-t border-white/20 flex flex-col justify-center">
              <div className="w-16 h-16 rounded-2xl bg-white text-black flex items-center justify-center mb-8 shadow-[0_0_40px_rgba(255,255,255,0.3)]">
                <Rocket size={32} />
              </div>

              <h3 className="text-3xl font-bold text-white mb-4">
                Join the Revolution
              </h3>
              <p className="text-gray-400 mb-8 leading-relaxed">
                Be one of the first 5,000 users to shape the future of global
                wealth management.
              </p>

              <button
                onClick={scrollToWaitlist}
                className="group relative w-full py-5 bg-white text-black rounded-2xl font-bold text-base hover:scale-[1.02] active:scale-[0.98] transition-all overflow-hidden shadow-xl"
              >
                <div className="absolute inset-0 bg-gradient-to-r from-gray-200 via-white to-gray-200 opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                <span className="relative flex items-center justify-center gap-3">
                  Join Waitlist{" "}
                  <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
                </span>
              </button>
            </FluidCard>
          </motion.div>
        </div>

        {/* --- VALUES ROW --- */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-32">
          {VALUES.map((v, i) => (
            <ValueCard key={i} data={v} index={i} />
          ))}
        </div>
      </div>

      {/* === BOTTOM EDGE === */}
      <div className="absolute bottom-0 left-0 w-full h-[2px] z-20 pointer-events-none">
        <div className="absolute inset-0 bg-gradient-to-r from-transparent via-accent-500 to-transparent opacity-70 blur-[2px]"></div>
        <div className="absolute inset-0 bg-gradient-to-r from-transparent via-blue-500 to-transparent opacity-50 blur-[4px]"></div>
        <div className="absolute bottom-0 left-0 w-full h-[1px] bg-gradient-to-r from-blue-900 via-accent-300 to-blue-900"></div>
        <motion.div
          animate={{ x: ["-10vw", "110vw"], opacity: [0, 1, 0] }}
          transition={{
            duration: 3,
            repeat: Infinity,
            ease: "easeInOut",
            repeatDelay: 1,
          }}
          className="absolute bottom-0 left-0 h-[2px] w-[150px] bg-white blur-[3px] shadow-[0_0_20px_rgba(255,255,255,0.8)] will-change-transform"
        />
        <motion.div
          animate={{ x: ["-20vw", "120vw"] }}
          transition={{ duration: 7, repeat: Infinity, ease: "linear" }}
          className="absolute bottom-0 left-0 h-[1px] w-[40%] bg-gradient-to-r from-transparent via-accent-400 to-transparent opacity-50 will-change-transform"
        />
      </div>
    </section>
  )
}

export default About
