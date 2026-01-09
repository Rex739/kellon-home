import React, { useRef, useState, useEffect } from "react"
import { useSpring, animated } from "@react-spring/web"
import { ArrowRight, Star, Globe, Shield, Zap } from "lucide-react"

// --- DATA ---
const headlines = [
  "Borderless Payments",
  "Crypto–Native Global Investments",
  "One Non–Custodial Wallet",
]

const images = [
  "https://res.cloudinary.com/dcxghlgre/image/upload/v1767998142/kellon/Mockuuups_Free_Google_Pixel_10_Pro_Mockup_mlymet.png",
  "https://res.cloudinary.com/dcxghlgre/image/upload/v1767971954/kellon/Mockuuups_Free_Google_Pixel_10_Pro_Mockup_uwpoux.png",
  "https://res.cloudinary.com/dcxghlgre/image/upload/v1767971954/kellon/Mockuuups_Free_Google_Pixel_10_Pro_Mockup_anpi27.png",
  "https://res.cloudinary.com/dcxghlgre/image/upload/v1767971955/kellon/Mockuuups_Free_Google_Pixel_10_Pro_Mockup_mwypva.png",
]

export default function Hero() {
  const containerRef = useRef(null)
  const [currentImage, setCurrentImage] = useState(0)
  const [currentHeadline, setCurrentHeadline] = useState(0)
  const [fade, setFade] = useState(true)

  // 1. Headline Loop (Auto-plays on all devices)
  useEffect(() => {
    const interval = setInterval(() => {
      setFade(false)
      setTimeout(() => {
        setCurrentHeadline((prev) => (prev + 1) % headlines.length)
        setFade(true)
      }, 200)
    }, 5000)
    return () => clearInterval(interval)
  }, [])

  // 2. Scroll-driven Image Switch (Only affects Desktop due to layout changes)
  useEffect(() => {
    const onScroll = () => {
      if (!containerRef.current) return
      // Only run scroll logic if screen is large enough (desktop)
      if (window.innerWidth < 1024) return

      // @ts-ignore
      const rect = containerRef.current.getBoundingClientRect()
      const scrollTop = -rect.top
      const sectionHeight = rect.height / images.length
      const index = Math.min(
        Math.max(0, Math.floor(scrollTop / sectionHeight)),
        images.length - 1
      )
      setCurrentImage(index)
    }
    window.addEventListener("scroll", onScroll)
    return () => window.removeEventListener("scroll", onScroll)
  }, [])

  // Text Animation
  const headlineSpring = useSpring({
    opacity: fade ? 1 : 0,
    transform: fade ? "translateY(0px)" : "translateY(10px)",
    config: { tension: 120, friction: 14 },
  })

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
    // FIX 1: Use min-h-screen for mobile, specific 400vh only for desktop
    <section
      ref={containerRef}
      className="relative min-h-screen lg:h-[400vh] bg-primary-900"
    >
      {/* FIX 2: Sticky is only applied on lg screens. On mobile, it's a normal block. */}
      <div className="relative lg:sticky lg:top-0 w-full min-h-screen lg:h-screen overflow-hidden flex items-center justify-center py-20 lg:py-0">
        {/* --- BACKGROUND --- */}
        <div className="absolute inset-0 z-0 pointer-events-none">
          <div className="absolute top-[-20%] right-[-10%] w-[800px] h-[800px] bg-accent-500/10 rounded-full blur-[120px]" />
          <div className="absolute bottom-[-20%] left-[-10%] w-[600px] h-[600px] bg-blue-500/10 rounded-full blur-[120px]" />
          <div className="absolute inset-0 bg-[linear-gradient(rgba(255,255,255,0.03)_1px,transparent_1px),linear-gradient(90deg,rgba(255,255,255,0.03)_1px,transparent_1px)] bg-[size:60px_60px] opacity-20" />
          <div className="absolute top-1/4 left-1/2 opacity-20 text-accent-400 animate-pulse">
            <Star size={40} fill="currentColor" />
          </div>
        </div>

        <div className="relative w-full max-w-7xl mx-auto px-6 grid grid-cols-1 lg:grid-cols-2 gap-12 items-center h-full z-10">
          {/* --- LEFT: TEXT --- */}
          <div className="flex flex-col justify-center h-full pt-10 lg:pt-0">
            <div className="mb-6">
              <span className="px-4 py-2 rounded-full border border-accent-500/30 bg-accent-500/10 text-accent-400 text-sm font-bold uppercase tracking-wider">
                Kellon Mobile
              </span>
            </div>

            <animated.h1
              style={headlineSpring}
              className="text-5xl md:text-7xl font-extrabold font-bungee leading-[1.1] tracking-tight text-white mb-6"
            >
              {headlines[currentHeadline]}
            </animated.h1>

            <p className="text-xl text-gray-300 leading-relaxed mb-10 max-w-lg">
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
                <div className="flex gap-8 opacity-50 grayscale hover:grayscale-0 transition-all duration-500">
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

          {/* --- RIGHT: MOCKUP (HIDDEN ON MOBILE) --- */}
          <div className="hidden lg:flex items-center justify-center relative h-full">
            {/* Background Glow */}
            <div className="absolute w-[80%] h-[60%] bg-gradient-to-tr from-accent-500/20 to-primary-500/20 rounded-full blur-[70px] animate-pulse" />

            {/* Image Container */}
            <div className="relative w-[320px] h-[640px] flex items-center justify-center">
              {images.map((img, i) => (
                <img
                  key={i}
                  src={img}
                  alt={`App Screenshot ${i}`}
                  className={`absolute w-full h-auto object-contain transition-all duration-700 ease-in-out drop-shadow-2xl ${
                    i === currentImage
                      ? "opacity-100 scale-100 translate-y-0"
                      : "opacity-0 scale-95 translate-y-8"
                  }`}
                />
              ))}
            </div>

            {/* Floating Elements */}
            <div
              className="absolute right-8 top-1/3 animate-float"
              style={{ animationDuration: "6s" }}
            >
              <div className="bg-white/10 backdrop-blur-md p-4 rounded-2xl border border-white/10 shadow-xl min-w-[180px]">
                <div className="text-xs text-gray-400 mb-1">Total Balance</div>
                <div className="text-xl font-bold text-white mb-3">
                  $6,255.00
                </div>

                {/* Breakdown List */}
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
            </div>

            <div
              className="absolute left-8 bottom-1/4 animate-float"
              style={{ animationDelay: "1s", animationDuration: "7s" }}
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
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
