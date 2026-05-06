// @ts-nocheck
"use client"

import React, { useState, useEffect } from "react"
import { Menu, X, ArrowUpRight } from "lucide-react"
import { Link } from "react-router-dom"
import { motion, AnimatePresence } from "framer-motion"

export default function Header() {
  const [isMenuOpen, setIsMenuOpen] = useState(false)

  const toggleMenu = () => setIsMenuOpen(!isMenuOpen)

  useEffect(() => {
    document.body.style.overflow = isMenuOpen ? "hidden" : ""
    return () => {
      document.body.style.overflow = ""
    }
  }, [isMenuOpen])

  const scrollToWaitlist = () => {
    setIsMenuOpen(false)
    const footer = document.querySelector("footer")
    if (footer) {
      footer.scrollIntoView({ behavior: "smooth" })
      setTimeout(() => {
        footer.querySelector('input[type="email"]')?.focus()
      }, 500)
    }
  }

  const handleMobileLink = (e, targetId) => {
    e.preventDefault()
    setIsMenuOpen(false)
    setTimeout(() => {
      document.getElementById(targetId)?.scrollIntoView({ behavior: "smooth" })
    }, 300)
  }

  // --- ANIMATIONS ---
  const menuVariants = {
    closed: { opacity: 0, backdropFilter: "blur(0px)" },
    open: { opacity: 1, backdropFilter: "blur(24px)" },
  }

  const linkVariants = {
    closed: { y: 50, opacity: 0 },
    open: (i) => ({
      y: 0,
      opacity: 1,
      transition: {
        delay: 0.1 + i * 0.1,
        duration: 0.5,
        ease: [0.22, 1, 0.36, 1],
      },
    }),
  }

  return (
    <>
      <header className="fixed top-6 left-0 right-0 z-[100] flex justify-center px-6">
        <div className="w-full max-w-7xl bg-primary-1000/50 backdrop-blur-md border border-accent-500/20 rounded-2xl px-6 py-3 flex items-center justify-between shadow-2xl">
          {/* Logo */}
          <Link
            to="/"
            onClick={() => {
              window.scrollTo({ top: 0, behavior: "smooth" })
              setIsMenuOpen(false)
            }}
            className="flex items-center space-x-2"
          >
            <div>
              <img src="/logo.png" alt="Kellon Logo" className="w-8 h-8" />
            </div>
            <span className="text-xl font-bold text-white tracking-tight">
              Kellon
            </span>
          </Link>

          {/* Desktop Nav */}
          <nav className="hidden md:flex items-center space-x-8 text-sm font-medium text-gray-400">
            {["features", "about", "contact"].map((item) => (
              <Link
                key={item}
                to="/"
                state={{ scrollTo: item }}
                className="hover:text-white transition-colors capitalize"
              >
                {item}
              </Link>
            ))}
          </nav>

          {/* Actions */}
          <div className="flex items-center gap-4">
            <button
              onClick={scrollToWaitlist}
              className="hidden md:block bg-white text-black px-5 py-2 rounded-md font-bold text-sm hover:bg-accent-500 transition-all"
            >
              Join Waitlist
            </button>
            <button onClick={toggleMenu} className="md:hidden text-white p-2">
              {isMenuOpen ? <X size={28} /> : <Menu size={28} />}
            </button>
          </div>
        </div>
      </header>

      {/* --- REDESIGNED MOBILE MENU --- */}
      <AnimatePresence>
        {isMenuOpen && (
          <motion.div
            variants={menuVariants}
            initial="closed"
            animate="open"
            exit="closed"
            className="fixed inset-0 z-[90] bg-black/90 flex flex-col justify-center px-10 md:hidden"
          >
            {/* Subtle Gradient Glows */}
            <div className="absolute top-[-10%] left-[-10%] w-64 h-64 bg-accent-600/20 blur-[120px]" />
            <div className="absolute bottom-[-10%] right-[-10%] w-64 h-64 bg-purple-600/20 blur-[120px]" />

            <nav className="flex flex-col space-y-8">
              {[
                { label: "Features", id: "features" },
                { label: "About", id: "about" },
                { label: "Contact", id: "contact" },
              ].map((link, i) => (
                <motion.div
                  key={link.id}
                  custom={i}
                  variants={linkVariants}
                  initial="closed"
                  animate="open"
                  exit="closed"
                >
                  <a
                    href={`#${link.id}`}
                    onClick={(e) => handleMobileLink(e, link.id)}
                    className="text-5xl font-bold text-white tracking-tighter flex items-center gap-4 group"
                  >
                    {link.label}
                    <ArrowUpRight
                      className="text-accent-500 opacity-0 -translate-y-2 group-hover:opacity-100 group-hover:translate-y-0 transition-all duration-300"
                      size={32}
                    />
                  </a>
                </motion.div>
              ))}
            </nav>

            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.5 }}
              className="mt-20  border-white/10 pt-10"
            >
              <button
                onClick={scrollToWaitlist}
                className="w-full py-4 bg-white text-black  hover:bg-accent-500 rounded-md font-bold text-lg transition-all"
              >
                Get Early Access
              </button>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  )
}
