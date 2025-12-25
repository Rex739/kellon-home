"use client"

import React, { useState, useEffect } from "react"
import { Menu, X, ChevronRight, Globe, Info, Mail } from "lucide-react"
import { Link } from "react-router-dom"

export default function Header() {
  const [isMenuOpen, setIsMenuOpen] = useState(false)

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen)
  }

  // Disable scrolling when mobile menu is open - SIMPLIFIED
  useEffect(() => {
    if (isMenuOpen) {
      // Just prevent scrolling without saving/restoring position
      document.body.style.overflow = "hidden"
    } else {
      // Simply re-enable scrolling
      document.body.style.overflow = ""
    }

    return () => {
      // Cleanup
      document.body.style.overflow = ""
    }
  }, [isMenuOpen])

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

  // Close menu when clicking outside
  useEffect(() => {
    const handleClickOutside = (event) => {
      const menu = document.querySelector("[data-menu]")
      const toggle = document.querySelector("[data-toggle]")

      if (!menu || !toggle) return

      const isMenuClicked = menu.contains(event.target)
      const isToggleClicked = toggle.contains(event.target)

      // Close menu if clicking outside of both menu and toggle button
      if (isMenuOpen && !isMenuClicked && !isToggleClicked) {
        setIsMenuOpen(false)
      }
    }

    document.addEventListener("click", handleClickOutside, true)

    return () => {
      document.removeEventListener("click", handleClickOutside, true)
    }
  }, [isMenuOpen])

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
            onClick={(e) => {
              e.preventDefault()
              window.scrollTo({ top: 0, behavior: "smooth" })
            }}
            className="flex items-center space-x-3 cursor-pointer group"
          >
            <img
              src="/logo.png?v=20251108"
              alt="Kellon Logo"
              className="w-10 h-10 object-contain group-hover:scale-110 transition-transform duration-300"
            />
            <span className="text-xl font-bold text-white group-hover:text-purple-300 transition-colors duration-300">
              Kellon
            </span>
          </Link>
        </div>

        {/* Desktop Navigation */}
        <nav className="hidden md:flex items-center space-x-10">
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
          className="md:hidden text-white p-2 rounded-lg hover:bg-white/10 transition-all duration-300"
          onClick={toggleMenu}
          data-toggle="true"
          aria-label={isMenuOpen ? "Close menu" : "Open menu"}
          aria-expanded={isMenuOpen}
        >
          {isMenuOpen ? (
            <X className="w-6 h-6" />
          ) : (
            <Menu className="w-6 h-6" />
          )}
        </button>
      </div>

      {/* Mobile Menu - Dropdown style */}
      {isMenuOpen && (
        <>
          {/* Backdrop overlay */}
          <div
            className="fixed inset-0 bg-black/20 z-40"
            onClick={toggleMenu}
          />

          {/* Menu dropdown - ANIMATED TO SLIDE UP FROM BOTTOM */}
          <div
            data-menu="true"
            className="
              fixed top-20 left-4 right-4 z-50
              bg-gradient-to-b from-primary-900/95 to-primary-950/95 backdrop-blur-xl 
              border border-accent-500/20 rounded-xl shadow-2xl shadow-purple-900/30
              px-6 py-6 md:hidden
              animate-slideUp mt-2
            "
          >
            {/* Menu Items - ALL WITH SLIDE UP ANIMATIONS */}
            <nav className="flex flex-col space-y-3">
              <div
                className="animate-slideUpItem"
                style={{ animationDelay: "0.1s" }}
              >
                <Link
                  to="/"
                  state={{ scrollTo: "features" }}
                  onClick={(e) => {
                    e.preventDefault()
                    setIsMenuOpen(false)
                    // Wait for menu to close before scrolling
                    setTimeout(() => {
                      const element = document.getElementById("features")
                      if (element) {
                        element.scrollIntoView({ behavior: "smooth" })
                      }
                    }, 50)
                  }}
                  className="
                    flex items-center justify-between
                    p-4 rounded-xl
                    bg-white/5 hover:bg-white/10
                    border border-white/10
                    group transition-all duration-300
                  "
                >
                  <div className="flex items-center gap-4">
                    <div className="w-10 h-10 rounded-lg bg-gradient-to-br from-purple-500/20 to-pink-500/20 flex items-center justify-center group-hover:scale-110 transition-transform">
                      <Globe className="w-5 h-5 text-purple-400" />
                    </div>
                    <div>
                      <div className="text-white font-semibold text-lg">
                        Features
                      </div>
                      <div className="text-gray-400 text-sm">
                        Explore capabilities
                      </div>
                    </div>
                  </div>
                  <ChevronRight className="w-5 h-5 text-gray-400 group-hover:text-white group-hover:translate-x-1 transition-all" />
                </Link>
              </div>

              <div
                className="animate-slideUpItem"
                style={{ animationDelay: "0.2s" }}
              >
                <Link
                  to="/"
                  state={{ scrollTo: "about" }}
                  onClick={(e) => {
                    e.preventDefault()
                    setIsMenuOpen(false)
                    setTimeout(() => {
                      const element = document.getElementById("about")
                      if (element) {
                        element.scrollIntoView({ behavior: "smooth" })
                      }
                    }, 50)
                  }}
                  className="
                    flex items-center justify-between
                    p-4 rounded-xl
                    bg-white/5 hover:bg-white/10
                    border border-white/10
                    group transition-all duration-300
                  "
                >
                  <div className="flex items-center gap-4">
                    <div className="w-10 h-10 rounded-lg bg-gradient-to-br from-blue-500/20 to-cyan-500/20 flex items-center justify-center group-hover:scale-110 transition-transform">
                      <Info className="w-5 h-5 text-blue-400" />
                    </div>
                    <div>
                      <div className="text-white font-semibold text-lg">
                        About
                      </div>
                      <div className="text-gray-400 text-sm">
                        Our story & mission
                      </div>
                    </div>
                  </div>
                  <ChevronRight className="w-5 h-5 text-gray-400 group-hover:text-white group-hover:translate-x-1 transition-all" />
                </Link>
              </div>

              <div
                className="animate-slideUpItem"
                style={{ animationDelay: "0.3s" }}
              >
                <Link
                  to="/"
                  state={{ scrollTo: "contact" }}
                  onClick={(e) => {
                    e.preventDefault()
                    setIsMenuOpen(false)
                    setTimeout(() => {
                      const element = document.getElementById("contact")
                      if (element) {
                        element.scrollIntoView({ behavior: "smooth" })
                      }
                    }, 50)
                  }}
                  className="
                    flex items-center justify-between
                    p-4 rounded-xl
                    bg-white/5 hover:bg-white/10
                    border border-white/10
                    group transition-all duration-300
                  "
                >
                  <div className="flex items-center gap-4">
                    <div className="w-10 h-10 rounded-lg bg-gradient-to-br from-green-500/20 to-emerald-500/20 flex items-center justify-center group-hover:scale-110 transition-transform">
                      <Mail className="w-5 h-5 text-green-400" />
                    </div>
                    <div>
                      <div className="text-white font-semibold text-lg">
                        Contact
                      </div>
                      <div className="text-gray-400 text-sm">Get in touch</div>
                    </div>
                  </div>
                  <ChevronRight className="w-5 h-5 text-gray-400 group-hover:text-white group-hover:translate-x-1 transition-all" />
                </Link>
              </div>
            </nav>

            {/* Mobile CTA - also slides up */}
            <div
              className="animate-slideUpItem"
              style={{ animationDelay: "0.4s" }}
            >
              <button
                onClick={() => {
                  setIsMenuOpen(false)
                  setTimeout(() => {
                    scrollToWaitlist()
                  }, 50)
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
          </div>
        </>
      )}

      {/* Add animation styles for SLIDE UP */}
      <style 
// @ts-ignore
      jsx>{`
        @keyframes slideUp {
          from {
            opacity: 0;
            transform: translateY(20px);
          }
          to {
            opacity: 1;
            transform: translateY(0);
          }
        }

        @keyframes slideUpItem {
          from {
            opacity: 0;
            transform: translateY(30px);
          }
          to {
            opacity: 1;
            transform: translateY(0);
          }
        }

        .animate-slideUp {
          animation: slideUp 0.3s ease-out forwards;
        }

        .animate-slideUpItem {
          animation: slideUpItem 0.5s ease-out forwards;
          opacity: 0;
          animation-fill-mode: forwards;
        }
      `}</style>
    </header>
  )
}
