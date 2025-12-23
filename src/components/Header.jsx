"use client"

import React, { useState } from "react"
import { Menu, X } from "lucide-react"
import { Link } from "react-router-dom"

export default function Header() {
  const [isMenuOpen, setIsMenuOpen] = useState(false)

  const toggleMenu = () => setIsMenuOpen(!isMenuOpen)

  // ⬇️ EXACT SAME WAITLIST SCROLL LOGIC YOU USE IN HERO
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
    <header className="fixed top-4 left-0 right-0 z-50 flex justify-center px-4">
      <div
        className="
          w-full max-w-7xl 
          bg-primary-1000/50 backdrop-blur-xl 
          border border-accent-500/20
          rounded-2xl shadow-lg
          px-6 py-3
          flex items-center justify-between
        "
      >
        {/* Logo */}
        <div>
          <Link
            to="/"
            onClick={() => window.scrollTo({ top: 0, behavior: "smooth" })}
            className="flex items-center space-x-3 cursor-pointer"
          >
            <img
              src="/logo.png?v=20251108"
              alt="Kellon Logo"
              className="w-10 h-10 object-contain"
            />
            <span className="text-xl font-bold text-white">Kellon</span>
          </Link>
        </div>

        {/* Desktop Navigation */}
        <nav className="hidden md:flex items-center space-x-10">
          <Link
            to="/#features"
            state={{ scrollTo: "features" }}
            className="text-gray-200 hover:text-white"
          >
            Features
          </Link>
          <Link
            to="/"
            state={{ scrollTo: "about" }}
            className="text-gray-200 hover:text-white"
          >
            About
          </Link>

          <Link
            to="/"
            state={{ scrollTo: "contact" }}
            className="text-gray-200 hover:text-white"
          >
            Contact
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
        <button className="md:hidden text-white" onClick={toggleMenu}>
          {isMenuOpen ? (
            <X className="w-6 h-6" />
          ) : (
            <Menu className="w-6 h-6" />
          )}
        </button>
      </div>

      {/* Mobile Menu */}
      {isMenuOpen && (
        <div
          className="
            absolute top-full mt-3 
            w-full max-w-7xl 
            bg-primary-900/95 backdrop-blur-xl 
            border border-white/10 rounded-xl shadow-lg 
            px-6 py-4 md:hidden
          "
        >
          <nav className="flex flex-col space-y-4">
            <Link
              to="/"
              state={{ scrollTo: "features" }}
              onClick={toggleMenu}
              className="text-gray-200 hover:text-white"
            >
              Features
            </Link>
            <Link
              to="/"
              state={{ scrollTo: "about" }}
              onClick={toggleMenu}
              className="text-gray-200 hover:text-white"
            >
              About
            </Link>
            <Link
              to="/"
              state={{ scrollTo: "contact" }}
              onClick={toggleMenu}
              className="text-gray-200 hover:text-white"
            >
              Contact
            </Link>
          </nav>

          {/* Mobile CTA */}
          <button
            onClick={() => {
              toggleMenu()
              scrollToWaitlist()
            }}
            className="
              w-full mt-4 px-4 py-3 
              bg-white text-primary-900 font-semibold rounded-lg
              hover:bg-gray-200 transition
            "
          >
            Join Waitlist
          </button>
        </div>
      )}
    </header>
  )
}
