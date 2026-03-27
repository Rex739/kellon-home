// @ts-nocheck
"use client"

import React, { useState, useEffect } from "react"
import { Menu, X, Globe, Info, Mail, ArrowRight } from "lucide-react"
import { Link } from "react-router-dom"
import { motion, AnimatePresence } from "framer-motion"

export default function Header() {
  const [isMenuOpen, setIsMenuOpen] = useState(false)

  // SEO: Structured Data for Site Navigation
  const jsonLd = {
    "@context": "https://schema.org",
    "@type": "SiteNavigationElement",
    name: ["Features", "About", "Contact"],
    url: ["/#features", "/#about", "/#contact"],
  }

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen)
  }

  // --- LOGIC: Scroll Locking ---
  useEffect(() => {
    if (isMenuOpen) {
      document.body.style.overflow = "hidden"
    } else {
      document.body.style.overflow = ""
    }
    return () => {
      document.body.style.overflow = ""
    }
  }, [isMenuOpen])

  // --- LOGIC: Accessibility (Close on ESC) ---
  useEffect(() => {
    const handleEsc = (e) => {
      if (e.key === "Escape") setIsMenuOpen(false)
    }
    window.addEventListener("keydown", handleEsc)
    return () => window.removeEventListener("keydown", handleEsc)
  }, [])

  // --- YOUR EXACT LINK LOGIC PRESERVED ---
  const scrollToWaitlist = () => {
    const footer = document.querySelector("footer")
    if (footer) {
      footer.scrollIntoView({ behavior: "smooth" })
      setTimeout(() => {
        const emailInput = footer.querySelector('input[type="email"]')
        if (emailInput) emailInput.focus()
      }, 500)
    }
  }

  const handleMobileLink = (e, targetId) => {
    e.preventDefault()
    setIsMenuOpen(false)
    // Wait for menu to close before scrolling
    setTimeout(() => {
      const element = document.getElementById(targetId)
      if (element) {
        element.scrollIntoView({ behavior: "smooth" })
      }
    }, 50)
  }

  // --- ANIMATION VARIANTS (For Mobile Menu) ---
  const menuVariants = {
    closed: {
      opacity: 0,
      y: "-100%",
      transition: { duration: 0.4, ease: [0.33, 1, 0.68, 1] },
    },
    open: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.4, ease: [0.33, 1, 0.68, 1] },
    },
  }

  const containerVariants = {
    closed: { transition: { staggerChildren: 0.05, staggerDirection: -1 } },
    open: { transition: { staggerChildren: 0.1, delayChildren: 0.2 } },
  }

  const itemVariants = {
    closed: { opacity: 0, y: 20 },
    open: { opacity: 1, y: 0 },
  }

  return (
    <>
      {/* SEO Script */}
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
      />

      <header className="fixed top-4 left-0 right-0 z-50 flex justify-center px-4">
        <div
          className="
            w-full max-w-7xl 
            bg-primary-1000/50 backdrop-blur-xl 
            border border-accent-500/20
            rounded-2xl shadow-lg
            px-6 py-3
            flex items-center justify-between
            relative z-50
          "
        >
          {/* Logo */}
          <div>
            <Link
              to="/"
              onClick={(e) => {
                e.preventDefault()
                window.scrollTo({ top: 0, behavior: "smooth" })
                setIsMenuOpen(false)
              }}
              className="flex items-center space-x-3 cursor-pointer group"
              aria-label="Kellon Home"
            >
              <img
                src="/logo.png?v=20251108"
                alt="" // Decorative image, text is adjacent
                className="w-10 h-10 object-contain group-hover:scale-110 transition-transform duration-300"
              />
              <span className="text-xl font-bold text-white group-hover:text-purple-300 transition-colors duration-300">
                Kellon
              </span>
            </Link>
          </div>

          {/* Desktop Navigation */}
          <nav
            className="hidden md:flex items-center space-x-10"
            aria-label="Desktop Navigation"
          >
            <Link
              to="/"
              state={{ scrollTo: "features" }}
              className="text-gray-300 hover:text-white transition-colors duration-300 flex items-center"
            >
              <span>Features</span>
            </Link>
            <Link
              to="/"
              state={{ scrollTo: "about" }}
              className="text-gray-300 hover:text-white transition-colors duration-300 flex items-center"
            >
              <span>About</span>
            </Link>
            <Link
              to="/"
              state={{ scrollTo: "contact" }}
              className="text-gray-300 hover:text-white transition-colors duration-300 flex items-center"
            >
              <span>Contact</span>
            </Link>
          </nav>

          {/* Desktop CTA */}
          <button
            onClick={scrollToWaitlist}
            className="
              hidden md:flex
              px-5 py-2 
              bg-white text-primary-900 font-semibold
              rounded-lg shadow
              hover:bg-gray-200 transition
            "
          >
            Join Waitlist
          </button>

          {/* Mobile Menu Toggle */}
          <button
            className="md:hidden text-white p-2 rounded-lg hover:bg-white/10 transition-all duration-300 focus:outline-none focus-visible:ring-2 focus-visible:ring-accent-500"
            onClick={toggleMenu}
            aria-expanded={isMenuOpen}
            aria-controls="mobile-menu"
            aria-label={isMenuOpen ? "Close menu" : "Open menu"}
          >
            <AnimatePresence mode="wait">
              {isMenuOpen ? (
                <motion.div
                  key="close"
                  initial={{ rotate: -90, opacity: 0 }}
                  animate={{ rotate: 0, opacity: 1 }}
                  exit={{ rotate: 90, opacity: 0 }}
                >
                  <X className="w-6 h-6" />
                </motion.div>
              ) : (
                <motion.div
                  key="menu"
                  initial={{ rotate: 90, opacity: 0 }}
                  animate={{ rotate: 0, opacity: 1 }}
                  exit={{ rotate: -90, opacity: 0 }}
                >
                  <Menu className="w-6 h-6" />
                </motion.div>
              )}
            </AnimatePresence>
          </button>
        </div>
      </header>

      {/* --- REDESIGNED MOBILE MENU (Full Screen Overlay) --- */}
      <AnimatePresence>
        {isMenuOpen && (
          <motion.div
            id="mobile-menu"
            role="dialog"
            aria-modal="true"
            aria-label="Mobile Navigation"
            // @ts-ignore
            variants={menuVariants}
            initial="closed"
            animate="open"
            exit="closed"
            className="fixed inset-0 z-40 bg-primary-950/95 backdrop-blur-3xl flex flex-col pt-32 px-6 md:hidden"
          >
            {/* Background Decor */}
            <div
              className="absolute inset-0 pointer-events-none opacity-20"
              aria-hidden="true"
            >
              <div className="absolute top-0 right-0 w-[500px] h-[500px] bg-accent-600/20 rounded-full blur-[120px]" />
              <div className="absolute bottom-0 left-0 w-[500px] h-[500px] bg-blue-600/20 rounded-full blur-[120px]" />
            </div>

            <motion.div
              className="flex flex-col h-full relative z-10"
              variants={containerVariants}
              initial="closed"
              animate="open"
              exit="closed"
            >
              <nav className="flex flex-col gap-4">
                <MobileMenuItem
                  to="/"
                  targetId="features"
                  icon={Globe}
                  label="Features"
                  desc="Explore capabilities"
                  state={{ scrollTo: "features" }}
                  onClick={handleMobileLink}
                  variants={itemVariants}
                />
                <MobileMenuItem
                  to="/"
                  targetId="about"
                  icon={Info}
                  label="About Us"
                  desc="Our story & mission"
                  state={{ scrollTo: "about" }}
                  onClick={handleMobileLink}
                  variants={itemVariants}
                />
                <MobileMenuItem
                  to="/"
                  targetId="contact"
                  icon={Mail}
                  label="Contact"
                  desc="Get in touch"
                  state={{ scrollTo: "contact" }}
                  onClick={handleMobileLink}
                  variants={itemVariants}
                />
              </nav>

              <motion.div className="mt-auto mb-12" variants={itemVariants}>
                <div className="h-px w-full bg-white/10 mb-8" />
                <button
                  onClick={() => {
                    setIsMenuOpen(false)
                    setTimeout(() => scrollToWaitlist(), 50)
                  }}
                  className="group w-full py-4 bg-white text-primary-900 rounded-xl font-bold text-lg shadow-xl hover:bg-gray-100 active:scale-[0.98] transition-all flex items-center justify-center gap-3"
                >
                  Join Waitlist
                  <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
                </button>
                <p className="text-center text-white/30 text-xs mt-6">
                  © 2026 Kellon Inc. All rights reserved.
                </p>
              </motion.div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  )
}

// Sub-component for Mobile Items (Preserves your Link logic + New Styling)
function MobileMenuItem({
  to,
  state,
  targetId,
  icon: Icon,
  label,
  desc,
  onClick,
  variants,
}) {
  return (
    <motion.div variants={variants} className="w-full">
      <Link
        to={to}
        state={state}
        onClick={(e) => onClick(e, targetId)}
        className="group flex items-center gap-5 p-4 rounded-2xl border border-white/5 bg-white/[0.02] hover:bg-white/[0.08] active:bg-white/[0.12] transition-colors text-left w-full"
      >
        <div className="w-12 h-12 rounded-xl bg-white/5 border border-white/10 flex items-center justify-center group-hover:bg-accent-500 group-hover:text-white text-gray-400 transition-all duration-300">
          <Icon className="w-6 h-6" />
        </div>
        <div className="flex-1">
          <div className="text-2xl font-bold text-white mb-1 group-hover:text-accent-300 transition-colors">
            {label}
          </div>
          <div className="text-sm text-gray-400 group-hover:text-gray-200 transition-colors">
            {desc}
          </div>
        </div>
        <ArrowRight className="w-5 h-5 text-gray-500 group-hover:text-white group-hover:translate-x-1 transition-all" />
      </Link>
    </motion.div>
  )
}
