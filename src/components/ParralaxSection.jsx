// @ts-ignore
import React, {
  useRef,
  useState,
  useEffect,
  useMemo,
  useCallback,
  memo,
} from "react"
import {
  motion,
  useScroll,
  useTransform,
  useSpring,
  useMotionTemplate,
  useMotionValue,
  // @ts-ignore
  useVelocity,
  // @ts-ignore
  useAnimationFrame,
} from "framer-motion"
// @ts-ignore
import { Plus, Minus, Circle, Diamond, X, Hash } from "lucide-react"
import TokenizedRWA from "./TokenizedRWA"
import RegulatoryNote from "./Regulatory"

// --- STATIC CONFIG ---
const VECTOR_COUNT_DESKTOP = 35
const VECTOR_COUNT_MOBILE = 15

// --- SUB-COMPONENT: BACKGROUND VECTORS (Memoized) ---
// @ts-ignore
const VectorLayer = memo(({ isMobile, smoothProgress }) => {
  // Parallax vectors
  const vectorYUp = useTransform(smoothProgress, [0, 1], [0, -200])
  const vectorYDown = useTransform(smoothProgress, [0, 1], [0, 200])

  const vectors = useMemo(() => {
    const count = isMobile ? VECTOR_COUNT_MOBILE : VECTOR_COUNT_DESKTOP
    return [...Array(count)].map((_, i) => ({
      id: i,
      left: Math.random() * 94 + 3 + "%",
      top: Math.random() * 94 + 3 + "%",
      size: Math.random() * 12 + 8,
      duration: Math.random() * 15 + 10,
      delay: Math.random() * 5,
      type: i % 7,
      dir: i % 2 === 0 ? 1 : -1,
    }))
  }, [isMobile])

  return (
    <div className="absolute inset-0 overflow-hidden pointer-events-none">
      {vectors.map((v) => (
        <motion.div
          key={v.id}
          className="absolute text-white/10"
          style={{
            left: v.left,
            top: v.top,
            y: v.dir === 1 ? vectorYUp : vectorYDown,
          }}
          animate={{
            rotate: v.type > 3 ? 0 : 360,
            scale: [1, 1.2, 1],
            opacity: [0.1, 0.3, 0.1],
          }}
          transition={{
            rotate: { duration: v.duration, repeat: Infinity, ease: "linear" },
            scale: { duration: v.duration * 0.5, repeat: Infinity },
            opacity: { duration: v.duration * 0.8, repeat: Infinity },
          }}
        >
          {v.type === 0 && <Plus size={v.size} strokeWidth={1} />}
          {v.type === 1 && <Circle size={v.size * 0.6} strokeWidth={1} />}
          {v.type === 2 && (
            <div
              className="border border-white/10"
              style={{ width: v.size * 0.5, height: v.size * 0.5 }}
            />
          )}
          {v.type === 3 && <Diamond size={v.size * 0.8} strokeWidth={1} />}
          {v.type === 4 && <X size={v.size * 0.7} className="opacity-70" />}
          {v.type === 5 && <Hash size={v.size * 0.6} className="opacity-50" />}
        </motion.div>
      ))}
    </div>
  )
})
VectorLayer.displayName = "VectorLayer"

// --- MAIN COMPONENT ---
const ParallaxSection = () => {
  const containerRef = useRef(null)

  // 1. SCROLL LOGIC
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start start", "end end"],
  })

  const smoothProgress = useSpring(scrollYProgress, {
    stiffness: 100,
    damping: 30,
    restDelta: 0.001,
  })

  // 2. MOUSE LOGIC (Optimized)
  const mouseX = useMotionValue(-1000)
  const mouseY = useMotionValue(-1000)
  const rectRef = useRef(null)

  // @ts-ignore
  const handleMouseEnter = useCallback((e) => {
    rectRef.current = e.currentTarget.getBoundingClientRect()
  }, [])

  const handleMouseMove = useCallback(
    // @ts-ignore
    (e) => {
      if (!rectRef.current) return
      // @ts-ignore
      mouseX.set(e.clientX - rectRef.current.left)
      // @ts-ignore
      mouseY.set(e.clientY - rectRef.current.top)
    },
    [mouseX, mouseY]
  )

  // 3. RESPONSIVE CHECK
  const [isMobile, setIsMobile] = useState(false)
  useEffect(() => {
    const checkMobile = () => setIsMobile(window.innerWidth < 768)
    checkMobile()
    window.addEventListener("resize", checkMobile)
    return () => window.removeEventListener("resize", checkMobile)
  }, [])

  // --- TRANSFORMS ---
  // Background Blobs (New)
  const blob1Y = useTransform(smoothProgress, [0, 1], [0, 200])
  const blob2Y = useTransform(smoothProgress, [0, 1], [0, -150])

  // RWA (Layer 1)
  const rwaOpacity = useTransform(smoothProgress, [0, 0.35, 0.45], [1, 1, 0])
  const rwaScale = useTransform(smoothProgress, [0, 0.45], [1, 0.85])
  const rwaY = useTransform(smoothProgress, [0, 0.45], [0, -80])
  const rwaPointerEvents = useTransform(smoothProgress, (v) =>
    v > 0.45 ? "none" : "auto"
  )

  // Regulatory (Layer 2)
  const regOpacity = useTransform(smoothProgress, [0.35, 0.55, 1], [0, 1, 1])
  const regScale = useTransform(smoothProgress, [0.35, 1], [0.8, 1])
  const regY = useTransform(smoothProgress, [0.35, 1], [100, 0])
  const regPointerEvents = useTransform(smoothProgress, (v) =>
    v < 0.35 ? "none" : "auto"
  )

  // Grid & Lines
  const gridY = useTransform(smoothProgress, [0, 1], ["0%", "-30%"])
  const scanLineY = useTransform(smoothProgress, [0, 1], ["-10%", "110%"])
  const sideLinesHeight = useTransform(
    smoothProgress,
    [0, 0.5, 1],
    ["0%", "100%", "0%"]
  )

  const spotlightBg = useMotionTemplate`
    radial-gradient(
      600px circle at ${mouseX}px ${mouseY}px,
      rgba(29, 78, 216, 0.1),
      transparent 80%
    )
  `

  return (
    <section
      ref={containerRef}
      className="relative h-[250vh] bg-black cursor-default overflow-clip"
      onMouseEnter={handleMouseEnter}
      onMouseMove={handleMouseMove}
    >
      <div className="sticky top-0 h-[100vh] w-full overflow-hidden will-change-transform">
        {/* === BACKGROUND LAYER === */}
        <div className="absolute inset-0 z-0">
          {/* 1. NOISE TEXTURE (Added) */}
          <div className="absolute inset-0 bg-[url('https://grainy-gradients.vercel.app/noise.svg')] opacity-10 mix-blend-overlay will-change-[opacity]"></div>

          {/* 2. FLOATING BLOBS (Added) */}
          <motion.div
            style={{ y: blob1Y }}
            className="absolute top-20 left-10 w-[500px] h-[500px] bg-primary-600/20 rounded-full blur-[120px] will-change-transform"
          />
          <motion.div
            style={{ y: blob2Y }}
            className="absolute bottom-20 right-10 w-[600px] h-[600px] bg-accent-900/10 rounded-full blur-[140px] will-change-transform"
          />

          {/* 3. MOUSE SPOTLIGHT */}
          <motion.div
            className="pointer-events-none absolute -inset-px opacity-0 transition-opacity duration-300 group-hover:opacity-100 will-change-[background]"
            style={{ background: spotlightBg }}
          />

          {/* 4. MOVING GRID */}
          <motion.div
            style={{ y: gridY }}
            className="absolute inset-0 opacity-20 will-change-transform"
          >
            <div className="absolute inset-0 bg-[linear-gradient(to_right,#ffffff10_1px,transparent_1px),linear-gradient(to_bottom,#ffffff10_1px,transparent_1px)] bg-[size:60px_60px] [mask-image:radial-gradient(ellipse_80%_60%_at_50%_50%,black,transparent)]" />
          </motion.div>

          {/* 5. CENTER GLOW (Pulse) */}
          <motion.div
            animate={{ scale: [1, 1.1, 1], opacity: [0.3, 0.5, 0.3] }}
            transition={{ duration: 8, repeat: Infinity, ease: "easeInOut" }}
            className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-primary-600/10 rounded-full blur-[120px] will-change-transform"
          />

          {/* 6. SCAN LINE */}
          <motion.div
            style={{ top: scanLineY }}
            className="absolute left-0 w-full h-[1px] bg-gradient-to-r from-transparent via-blue-500/50 to-transparent z-10 will-change-transform"
          />

          {/* 7. SIDE LINES */}
          <div className="absolute left-10 top-1/2 -translate-y-1/2 w-[1px] h-3/4 bg-gray-800/30 hidden lg:block">
            <motion.div
              style={{ height: sideLinesHeight }}
              className="w-full bg-gradient-to-b from-transparent via-blue-500/50 to-transparent"
            />
          </div>
          <div className="absolute right-10 top-1/2 -translate-y-1/2 w-[1px] h-3/4 bg-gray-800/30 hidden lg:block">
            <motion.div
              style={{ height: sideLinesHeight }}
              className="w-full bg-gradient-to-b from-transparent via-blue-500/50 to-transparent"
            />
          </div>

          <VectorLayer
            // @ts-ignore
            isMobile={isMobile}
            smoothProgress={smoothProgress}
          />
        </div>

        {/* === LAYER 1: TOKENIZED RWA === */}
        <motion.div
          style={{
            opacity: rwaOpacity,
            scale: rwaScale,
            y: rwaY,
            pointerEvents: rwaPointerEvents,
          }}
          className="absolute inset-0 w-full h-full flex items-center justify-center px-6 z-20 will-change-[transform,opacity]"
        >
          <div className="w-full max-w-7xl mx-auto flex justify-center">
            <TokenizedRWA isParallax={true} />
          </div>
        </motion.div>

        {/* === LAYER 2: REGULATORY NOTE === */}
        <motion.div
          style={{
            opacity: regOpacity,
            scale: regScale,
            y: regY,
            pointerEvents: regPointerEvents,
          }}
          className="absolute inset-0 w-full h-full flex items-center justify-center px-6 z-30 will-change-[transform,opacity]"
        >
          <div className="w-full max-w-7xl mx-auto">
            <RegulatoryNote isParallax={true} />
          </div>
        </motion.div>

        {/* === BOTTOM SHARP EDGE === */}
        <div className="absolute bottom-0 left-0 w-full h-[2px] z-50 pointer-events-none">
          <div className="absolute inset-0 bg-gradient-to-r from-transparent via-accent-500 to-transparent opacity-70 blur-[2px]"></div>
          <div className="absolute inset-0 bg-gradient-to-r from-transparent via-blue-500 to-transparent opacity-50 blur-[4px]"></div>
          <div className="absolute bottom-0 left-0 w-full h-[1px] bg-gradient-to-r from-blue-900 via-accent-300 to-blue-900"></div>

          <motion.div
            animate={{ left: ["-10%", "110%"], opacity: [0, 1, 0] }}
            transition={{
              duration: 3,
              repeat: Infinity,
              ease: "easeInOut",
              repeatDelay: 1,
            }}
            className="absolute bottom-0 h-[2px] w-[150px] bg-white blur-[3px] shadow-[0_0_20px_rgba(255,255,255,0.8)]"
          />

          <motion.div
            animate={{ left: ["-20%", "120%"] }}
            transition={{ duration: 7, repeat: Infinity, ease: "linear" }}
            className="absolute bottom-0 h-[1px] w-[40%] bg-gradient-to-r from-transparent via-accent-400 to-transparent opacity-50"
          />
        </div>
      </div>
    </section>
  )
}

export default ParallaxSection
