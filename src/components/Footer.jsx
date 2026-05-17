import React, { useState } from "react"
import { Link, useNavigate } from "react-router-dom"
import { Mail, Github, Linkedin, ArrowRight, MapPin } from "lucide-react"
import SuccessModal from "./SuccessModal"
import { XIcon } from "../lib/icons/LucideIcons"

const Footer = () => {
  const [email, setEmail] = useState("")
  const [isSubmitting, setIsSubmitting] = useState(false)
  const [showSuccessModal, setShowSuccessModal] = useState(false)
  const [error, setError] = useState("")
  const navigate = useNavigate()

  const handleSubmit = async () => {
    setError("")

    if (!email || !email.includes("@")) {
      setError("Please enter a valid email address")
      return
    }

    setIsSubmitting(true)

    try {
      const { waitlistService } = await import("../lib/services/firebase")
      const exists = await waitlistService.checkEmailExists(email)

      if (exists) {
        setError("This email is already on our waitlist!")
        return
      }

      await waitlistService.addSignup({ email })

      setShowSuccessModal(true)
      setEmail("")
    } catch (err) {
      // console.error(err)
      setError("Something went wrong. Please try again.")
    } finally {
      setIsSubmitting(false)
    }
  }

  const socialLinks = [
    { icon: XIcon, href: "https://x.com/Kellonapp", label: "X" },
    { icon: Github, href: "https://github.com/KELLON-RWA", label: "GitHub" },
    {
      icon: Linkedin,
      href: "https://www.linkedin.com/company/kellon/",
      label: "LinkedIn",
    },
  ]

  const DTPLinks = [
    { label: "Disclaimer", href: "/disclaimer" },
    { label: "Terms", href: "/terms-of-use" },
    { label: "Privacy", href: "/privacy-policy" },
  ]

  const navLinks = [
    { label: "About", sectionId: "about" },
    { label: "Features", sectionId: "features" },
    { label: "How it works", sectionId: "how-it-works" },
  ]

  return (
    <footer
      className="bg-primary-800 border-t border-white/5 relative overflow-hidden pt-16 sm:pt-20 pb-10 scroll-mt-28"
      id="contact"
    >
      {/* --- BACKGROUND LAYERS --- */}
      <div className="absolute inset-0 pointer-events-none select-none">
        {/* Noise Texture */}
        <div className="absolute inset-0 bg-[url('https://grainy-gradients.vercel.app/noise.svg')] opacity-5 mix-blend-overlay" />

        {/* Giant Watermark */}
        <div className="absolute bottom-0 left-1/2 -translate-x-1/2 text-[15vw] font-black font-bungee text-white/[0.02] leading-none whitespace-nowrap select-none pointer-events-none">
          KELLON FINANCE
        </div>

        {/* Ambient Glows */}
        <div className="absolute top-0 left-1/4 w-[500px] h-[500px] bg-primary-900/20 blur-[120px] rounded-full mix-blend-screen" />
        <div className="absolute bottom-0 right-1/4 w-[500px] h-[500px] bg-accent-900/10 blur-[120px] rounded-full mix-blend-screen" />
      </div>

      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6">
        {/* --- 1. MEGA WAITLIST CARD --- */}
        <div className="relative rounded-[1.75rem] sm:rounded-[2.5rem] overflow-hidden border border-white/10 bg-white/5 p-5 sm:p-8 md:p-16 text-center mb-16 sm:mb-24 group">
          {/* Internal Glow */}
          <div className="absolute inset-0 bg-gradient-to-b from-white/5 to-transparent pointer-events-none" />
          <div className="absolute -top-[50%] -left-[50%] w-[200%] h-[200%] bg-[radial-gradient(circle,rgba(255,255,255,0.05)_1px,transparent_1px)] bg-[size:20px_20px] opacity-20 pointer-events-none" />

          <div className="relative z-10 max-w-2xl mx-auto">
            <h3 className="text-[clamp(1.15rem,5.8vw,3rem)] sm:text-[clamp(2rem,8vw,3rem)] md:text-5xl font-bold text-white mb-5 sm:mb-6 font-bungee tracking-tight leading-tight">
              Ready to go <span className="text-accent-500">borderless?</span>
            </h3>
            <p className="text-base sm:text-lg md:text-xl text-gray-400 mb-8 sm:mb-10 leading-relaxed">
              Join the early adopters shaping the future of global finance. Get
              early access, exclusive updates, and priority onboarding.
            </p>

            {/* Input Field */}
            <div className="relative max-w-md w-full mx-auto group/input">
              <div className="absolute inset-0 bg-accent-500/20 blur-xl rounded-full opacity-0 group-hover/input:opacity-100 transition-opacity duration-500" />
              <div className="relative flex items-center gap-2 bg-black/50 border border-white/10 rounded-full p-2 pl-4 sm:pl-6 focus-within:border-accent-500/50 focus-within:bg-black/80 transition-all duration-300">
                <input
                  type="email"
                  value={email}
                  onChange={(e) => {
                    setEmail(e.target.value)
                    setError("")
                  }}
                  placeholder="Enter your email address"
                  className="min-w-0 w-full flex-1 bg-transparent text-sm sm:text-base text-white placeholder-gray-500 outline-none font-medium"
                />
                <button
                  onClick={handleSubmit}
                  disabled={isSubmitting}
                  className="shrink-0 p-3 bg-accent-500 hover:bg-accent-400 text-black rounded-full transition-transform hover:scale-105 active:scale-95 disabled:opacity-50 disabled:cursor-not-allowed"
                  aria-label="Join the waitlist"
                >
                  {isSubmitting ? (
                    <div className="animate-spin h-5 w-5 border-2 border-black border-t-transparent rounded-full" />
                  ) : (
                    <ArrowRight className="w-5 h-5" />
                  )}
                </button>
              </div>
            </div>
            {error && (
              <p className="text-red-400 text-sm mt-4 font-medium">{error}</p>
            )}
          </div>
        </div>

        {/* --- 2. LINKS GRID --- */}
        <div className="grid grid-cols-1 md:grid-cols-12 gap-10 md:gap-12 border-t border-white/10 pt-12 sm:pt-16 pb-12">
          {/* Brand Column (Span 4) */}
          <div className="md:col-span-4 flex flex-col items-start gap-6">
            <div
              className="flex items-center gap-3 cursor-pointer group"
              onClick={() => navigate("/")}
            >
              <div className="relative">
                <div className="absolute inset-0 bg-accent-500 blur opacity-0 group-hover:opacity-50 transition-opacity duration-500" />
                <img
                  src="/logo.png?v=20251108"
                  className="relative w-10 h-10 object-contain"
                  alt="Kellon Logo"
                />
              </div>
              <span className="text-2xl font-bold text-white">
                Kellon
              </span>
            </div>
            <p className="text-gray-400 leading-relaxed max-w-sm">
              Empowering the world with borderless payments, tokenized assets,
              and true financial sovereignty.
            </p>

            {/* Socials */}
            <div className="flex gap-3 mt-2">
              {socialLinks.map((social) => {
                const Icon = social.icon
                return (
                  <a
                    key={social.label}
                    href={social.href}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="w-10 h-10 bg-white/5 border border-white/10 rounded-full flex items-center justify-center text-gray-400 hover:text-white hover:bg-white/10 hover:border-white/20 transition-all duration-300"
                  >
                    <Icon className="w-4 h-4" />
                  </a>
                )
              })}
            </div>
          </div>

          {/* Navigation (Span 2) */}
          <div className="md:col-span-2">
            <h4 className="text-white font-bold mb-6 uppercase tracking-widest text-xs opacity-50">
              Explore
            </h4>
            <ul className="space-y-4">
              {navLinks.map(({ label, sectionId }, i) => (
                <li key={i}>
                  <Link
                    to="/"
                    state={{ scrollTo: sectionId }}
                    className="text-gray-400 hover:text-white transition-colors duration-300 cursor-pointer text-sm font-medium block"
                  >
                    {label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Legal (Span 2) */}
          <div className="md:col-span-2">
            <h4 className="text-white font-bold mb-6 uppercase tracking-widest text-xs opacity-50">
              Legal
            </h4>
            <ul className="space-y-4">
              {DTPLinks.map(({ label, href }, i) => (
                <li key={i}>
                  <Link
                    to={href}
                    className="text-gray-400 hover:text-white transition-colors duration-300 cursor-pointer text-sm font-medium block"
                  >
                    {label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact Info (Span 4) */}
          <div className="md:col-span-4">
            <h4 className="text-white font-bold mb-6 uppercase tracking-widest text-xs opacity-50">
              Contact
            </h4>
            <div className="flex flex-col gap-4">
              <a
                href="mailto:contact@kellon.xyz"
                className="flex items-center gap-3 text-gray-400 hover:text-white transition-colors duration-300 group"
              >
                <div className="w-8 h-8 rounded-full bg-white/10 flex items-center justify-center text-white group-hover:bg-accent-500 group-hover:text-black transition-colors duration-300">
                  <Mail className="w-4 h-4" />
                </div>
                <span className="font-medium">contact@kellon.xyz</span>
              </a>

              <div className="flex items-start gap-3 text-gray-400">
                <div className="w-8 h-8 rounded-full bg-white/10 flex items-center justify-center text-white shrink-0 mt-1">
                  <MapPin className="w-4 h-4" />
                </div>
                <span className="font-medium leading-relaxed">
                  10 Villa Avenue, Ibeju-Lekki
                  <br />
                  Lagos, Nigeria
                </span>
              </div>
            </div>
          </div>
        </div>

        {/* --- 3. BOTTOM BAR --- */}
        <div className="border-t border-white/10 pt-8 flex flex-col md:flex-row justify-between items-center gap-4 text-xs text-gray-500 font-medium tracking-wide">
          <span>&copy; 2026 Kellon. All rights reserved.</span>
        </div>
      </div>

      <SuccessModal
        isOpen={showSuccessModal}
        onClose={() => setShowSuccessModal(false)}
        message="Welcome aboard! You've successfully joined the waitlist."
      />
    </footer>
  )
}

export default Footer
