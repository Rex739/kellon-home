"use client"
import React, { useRef, useState, useEffect, memo } from "react"
import {
  motion,
  useScroll,
  useTransform,
  useSpring,
  useMotionTemplate,
  useMotionValue,
} from "framer-motion"
import TokenizedRWA from "./TokenizedRWA"
import RegulatoryNote from "./Regulatory"

// --- VECTOR BACKGROUND (Memoized) ---
const VectorLayer = memo(() => {
  return (
    <div
      className="absolute inset-0 overflow-hidden pointer-events-none opacity-20"
      aria-hidden="true" // Hides from screen readers
    >
      <div className="absolute inset-0 bg-[url('https://grainy-gradients.vercel.app/noise.svg')] opacity-20 mix-blend-overlay" />
    </div>
  )
})
VectorLayer.displayName = "VectorLayer"

export default function ParallaxSection() {
  const containerRef = useRef(null)
  const [isMobile, setIsMobile] = useState(false)

  useEffect(() => {
    const checkMobile = () => setIsMobile(window.innerWidth < 1024)
    checkMobile()
    window.addEventListener("resize", checkMobile)
    return () => window.removeEventListener("resize", checkMobile)
  }, [])

  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start start", "end end"],
  })

  const smoothProgress = useSpring(scrollYProgress, {
    stiffness: 60,
    damping: 20,
    restDelta: 0.001,
  })

  // Desktop Parallax Transforms
  const layer1Opacity = useTransform(smoothProgress, [0, 0.42, 0.58], [1, 1, 0])
  const layer1Scale = useTransform(smoothProgress, [0, 0.58], [1, 0.9])
  const layer1Y = useTransform(smoothProgress, [0, 0.58], [0, -50])

  const layer2Opacity = useTransform(smoothProgress, [0.42, 0.58, 1], [0, 1, 1])
  const layer2Scale = useTransform(smoothProgress, [0.42, 1], [0.9, 1])
  const layer2Y = useTransform(smoothProgress, [0.42, 1], [50, 0])

  // Mouse Spotlight
  const mouseX = useMotionValue(0)
  const mouseY = useMotionValue(0)

  // @ts-ignore
  const handleMouseMove = (e) => {
    const { left, top } = e.currentTarget.getBoundingClientRect()
    mouseX.set(e.clientX - left)
    mouseY.set(e.clientY - top)
  }

  const spotlightBg = useMotionTemplate`radial-gradient(600px circle at ${mouseX}px ${mouseY}px, rgba(29, 78, 216, 0.08), transparent 80%)`

  return (
    <section
      ref={containerRef}
      onMouseMove={handleMouseMove}
      aria-label="Features and Regulation"
      className={`relative bg-primary-900 ${
        isMobile ? "py-24 overflow-hidden" : "h-[300vh]"
      }`}
    >
      {/* GLOBAL BACKGROUND */}
      <div
        className="absolute inset-0 pointer-events-none z-0"
        aria-hidden="true"
      >
        <VectorLayer />
        <motion.div
          className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-500"
          style={{ background: spotlightBg }}
        />
        <div className="sticky top-0 h-screen overflow-hidden">
          <div className="absolute top-1/4 left-1/4 w-[500px] h-[500px] bg-primary-800/30 rounded-full blur-[120px]" />
          <div className="absolute bottom-1/4 right-1/4 w-[500px] h-[500px] bg-accent-500/10 rounded-full blur-[120px]" />
        </div>
      </div>

      {isMobile ? (
        // --- MOBILE LAYOUT ---
        <div className="relative z-10 flex flex-col gap-24">
          <div className="w-full">
            <TokenizedRWA />
          </div>
          <div className="w-full  pt-24">
            <RegulatoryNote />
          </div>
        </div>
      ) : (
        // --- DESKTOP LAYOUT ---
        <div className="sticky top-0 h-screen w-full overflow-hidden flex items-center justify-center z-10">
          <motion.div
            style={{ opacity: layer1Opacity, scale: layer1Scale, y: layer1Y }}
            className="absolute inset-0 flex items-center justify-center"
            aria-hidden={layer1Opacity.get() === 0} // Hide from screen readers when invisible
          >
            <TokenizedRWA />
          </motion.div>

          <motion.div
            style={{ opacity: layer2Opacity, scale: layer2Scale, y: layer2Y }}
            className="absolute inset-0 flex items-center justify-center"
            aria-hidden={layer2Opacity.get() === 0}
          >
            <RegulatoryNote />
          </motion.div>
        </div>
      )}
    </section>
  )
}
