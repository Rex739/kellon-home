import React, { useRef, useState, useEffect } from "react"
import { motion, AnimatePresence } from "framer-motion"
import { ArrowRight, Star, Globe, Shield, Zap } from "lucide-react"

// --- DATA ---
const headlines = [
  "Borderless Payments",
  "Crypto–Native Global Investments",
  "One Wallet",
]

const images = [
  "https://res.cloudinary.com/dcxghlgre/image/upload/v1767998142/kellon/Mockuuups_Free_Google_Pixel_10_Pro_Mockup_mlymet.png",
  "https://res.cloudinary.com/dcxghlgre/image/upload/v1767971954/kellon/Mockuuups_Free_Google_Pixel_10_Pro_Mockup_uwpoux.png",
  "https://res.cloudinary.com/dcxghlgre/image/upload/v1767971954/kellon/Mockuuups_Free_Google_Pixel_10_Pro_Mockup_anpi27.png",
  "https://res.cloudinary.com/dcxghlgre/image/upload/v1767971955/kellon/Mockuuups_Free_Google_Pixel_10_Pro_Mockup_mwypva.png",
].map((url) =>
  url.replace("/image/upload/", "/image/upload/f_auto,q_auto,w_720/")
)

export default function Hero() {
  const containerRef = useRef(null)
  const currentImageRef = useRef(0)
  const frameRef = useRef(null)
  const [currentImage, setCurrentImage] = useState(0)
  const [currentHeadline, setCurrentHeadline] = useState(0)
  const [isDesktop, setIsDesktop] = useState(() =>
    typeof window === "undefined" ? false : window.innerWidth >= 1024
  )

  // 1. Headline Loop
  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentHeadline((prev) => (prev + 1) % headlines.length)
    }, 5000)
    return () => clearInterval(interval)
  }, [])

  // 2. Scroll-driven Image Switch
  useEffect(() => {
    const onResize = () => setIsDesktop(window.innerWidth >= 1024)
    window.addEventListener("resize", onResize, { passive: true })
    return () => window.removeEventListener("resize", onResize)
  }, [])

  // 2. Scroll-driven Image Switch
  useEffect(() => {
    if (!isDesktop) return undefined

    const onScroll = () => {
      if (frameRef.current) return

      // @ts-ignore
      frameRef.current = window.requestAnimationFrame(() => {
        frameRef.current = null

      if (!containerRef.current) return

      // @ts-ignore
      const rect = containerRef.current.getBoundingClientRect()
      const scrollTop = Math.min(
        Math.max(0, -rect.top),
        rect.height - window.innerHeight
      )
      const scrollableDistance = Math.max(1, rect.height - window.innerHeight)
      const sectionHeight = scrollableDistance / (images.length - 1)
      const index = Math.min(
        Math.max(0, Math.round(scrollTop / sectionHeight)),
        images.length - 1,
      )

        if (index !== currentImageRef.current) {
          currentImageRef.current = index
          setCurrentImage(index)
        }
      })
    }

    window.addEventListener("scroll", onScroll, { passive: true })
    return () => {
      window.removeEventListener("scroll", onScroll)
      if (frameRef.current) {
        window.cancelAnimationFrame(frameRef.current)
      }
    }
  }, [isDesktop])

  const scrollToWaitlist = () => {
    const footer = document.querySelector("footer")
    if (footer) {
      footer.scrollIntoView({ behavior: "smooth" })
      setTimeout(() => {
        const emailInput = footer.querySelector('input[type="email"]')
        // @ts-ignore
        if (emailInput) emailInput.focus()
      }, 500)
    }
  }

  return (
    <section
      ref={containerRef}
      className="relative min-h-[100svh] lg:h-[400vh] bg-primary-900"
    >
      <div className="relative lg:sticky lg:top-0 w-full min-h-[100svh] lg:h-screen overflow-hidden flex items-center justify-center py-28 sm:py-24 lg:py-0">
        {/* --- BACKGROUND --- */}
        <div className="absolute inset-0 z-0 pointer-events-none">
          <div className="absolute top-[-20%] right-[-10%] w-[800px] h-[800px] bg-accent-500/10 rounded-full blur-[120px]" />
          <div className="absolute bottom-[-20%] left-[-10%] w-[600px] h-[600px] bg-blue-500/10 rounded-full blur-[120px]" />
          <div className="absolute inset-0 bg-[linear-gradient(rgba(255,255,255,0.03)_1px,transparent_1px),linear-gradient(90deg,rgba(255,255,255,0.03)_1px,transparent_1px)] bg-[size:60px_60px] opacity-20" />
          <div className="absolute top-1/4 left-1/2 opacity-20 text-accent-400 animate-pulse">
            <Star size={40} fill="currentColor" />
          </div>
        </div>

        <div className="relative w-full max-w-7xl mx-auto px-4 sm:px-6 grid grid-cols-1 lg:grid-cols-2 gap-12 items-center h-full z-10">
          {/* --- LEFT: TEXT --- */}
          <div className="flex flex-col justify-center h-full pt-10 lg:pt-0">
            <div className="mb-8">
              <span className="px-4 py-2 rounded-full border border-accent-500/30 bg-accent-500/10 text-accent-400 text-sm font-bold uppercase tracking-wider">
                Kellon Mobile
              </span>
            </div>

            {/* IMPROVED SPACING CONTAINER:
              1. min-h adjusted to fit max text height without huge gaps.
              2. justify-end ensures text grows UP, keeping the gap to the paragraph consistent.
            */}
            <div className="min-h-[140px] md:min-h-[180px] flex flex-col justify-end mb-6">
              <AnimatePresence mode="wait">
                <motion.h1
                  key={currentHeadline}
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0, y: -20 }}
                  transition={{ duration: 0.35, ease: "easeOut" }}
                  className="text-4xl xs:text-5xl md:text-7xl font-extrabold font-bungee leading-[1.05] tracking-tight text-white"
                >
                  {headlines[currentHeadline]}
                </motion.h1>
              </AnimatePresence>
            </div>

            <p className="text-base xs:text-xl  text-gray-300 leading-relaxed mb-10 max-w-lg">
              Kellon Mobile empowers you with a non-custodial wallet for
              borderless payments, tokenized asset management, and global
              investments - all in one secure, intuitive app.
            </p>

            <div className="relative z-20">
              <button
                onClick={scrollToWaitlist}
                className="group relative px-8 py-4 bg-accent-500 hover:bg-accent-400 text-primary-950 rounded-full font-bold text-lg transition-all shadow-[0_0_40px_rgba(234,179,8,0.3)] hover:shadow-[0_0_60px_rgba(234,179,8,0.5)] flex items-center gap-2 w-fit"
              >
                Join Waitlist
                <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
              </button>

              <div className="mt-16 pt-8 border-t border-white/10 hidden sm:block">
                <p className="text-sm font-semibold text-gray-400 mb-4 uppercase tracking-wider">
                  Trusted Infrastructure
                </p>
                <div className="flex flex-wrap gap-4 lg:gap-8 opacity-50 grayscale hover:grayscale-0 transition-all duration-500">
                  <div className="flex items-center gap-2 text-white font-bold">
                    <Globe size={24} /> GlobalNet
                  </div>
                  <div className="flex items-center gap-2 text-white font-bold">
                    <Shield size={24} /> SecureChain
                  </div>
                  <div className="flex items-center gap-2 text-white font-bold">
                    <Zap size={24} /> FlashPay
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* --- RIGHT: MOCKUP --- */}
          {isDesktop && (
          <div className="hidden lg:flex items-center justify-center relative h-full">
            <div className="absolute w-[80%] h-[60%] bg-gradient-to-tr from-accent-500/20 to-primary-500/20 rounded-full blur-[70px] animate-pulse" />

            <div className="relative w-[320px] h-[640px] flex items-center justify-center">
              {images.map((img, i) => (
                <motion.img
                  key={i}
                  src={img}
                  alt={`App Screenshot ${i}`}
                  width="720"
                  height="1440"
                  loading="eager"
                  decoding="async"
                  fetchPriority={i === 0 ? "high" : "auto"}
                  initial={false}
                  animate={{
                    opacity: i === currentImage ? 1 : 0,
                    scale: i === currentImage ? 1 : 0.95,
                    y: i === currentImage ? 0 : 32,
                  }}
                  transition={{ duration: 0.7, ease: "easeInOut" }}
                  className="absolute w-full h-auto object-contain drop-shadow-2xl"
                />
              ))}
            </div>

            <motion.div
              animate={{ y: [0, -15, 0] }}
              transition={{ duration: 6, repeat: Infinity, ease: "easeInOut" }}
              className="absolute right-8 top-1/3"
            >
              <div className="bg-white/10 backdrop-blur-md p-4 rounded-2xl border border-white/10 shadow-xl min-w-[180px]">
                <div className="text-xs text-gray-400 mb-1">Total Balance</div>
                <div className="text-xl font-bold text-white mb-3">
                  $6,255.00
                </div>
                <div className="space-y-2 border-t border-white/10 pt-2">
                  <div className="flex justify-between items-center text-xs">
                    <div className="flex items-center gap-1.5">
                      <div className="w-2 h-2 rounded-full bg-blue-400"></div>
                      <span className="text-gray-300">USDC</span>
                    </div>
                    <span className="text-white font-mono">$3,280.50</span>
                  </div>
                  <div className="flex justify-between items-center text-xs">
                    <div className="flex items-center gap-1.5">
                      <div className="w-2 h-2 rounded-full bg-green-400"></div>
                      <span className="text-gray-300">USDT</span>
                    </div>
                    <span className="text-white font-mono">$2,974.50</span>
                  </div>
                </div>
              </div>
            </motion.div>

            <motion.div
              animate={{ y: [0, -10, 0] }}
              transition={{
                duration: 7,
                repeat: Infinity,
                ease: "easeInOut",
                delay: 1,
              }}
              className="absolute left-8 bottom-1/4"
            >
              <div className="bg-accent-500 text-black p-4 rounded-2xl shadow-xl flex items-center gap-3">
                <div className="bg-black/10 p-2 rounded-full">
                  <Zap size={16} />
                </div>
                <div>
                  <div className="text-xs font-bold opacity-70">
                    Transfer Sent
                  </div>
                  <div className="text-sm font-bold">Instant & Free</div>
                </div>
              </div>
            </motion.div>
          </div>
          )}
        </div>
      </div>
    </section>
  )
}
