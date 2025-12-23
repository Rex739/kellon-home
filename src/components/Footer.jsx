import React, { useState } from "react"
import { Link, useNavigate } from "react-router-dom"
import { Mail, Twitter, Github, Linkedin, ArrowRight } from "lucide-react"
import SuccessModal from "./SuccessModal"
import { waitlistService } from "../services/supabase"
import { XIcon } from "../lib/icons/LucideIcons"


const Footer = () => {
  const [email, setEmail] = useState("")
  const [isSubmitting, setIsSubmitting] = useState(false)
  const [showSuccessModal, setShowSuccessModal] = useState(false)
  const [error, setError] = useState("")
  const navigate = useNavigate()

  const handleSubmit = async () => {
    if (!email || !email.includes("@")) {
      setError("Please enter a valid email address")
      return
    }

    setIsSubmitting(true)
    setError("")

    try {
      const exists = await waitlistService.checkEmailExists(email)
      if (exists) {
        setError("This email is already on our waitlist!")
        setIsSubmitting(false)
        return
      }

      await waitlistService.addSignup({
        name: "Waitlist User",
        email,
      })

      setShowSuccessModal(true)
      setEmail("")
    } catch (err) {
      if (err.message.includes("duplicate")) {
        setError("This email is already on our waitlist!")
      } else {
        setError("Something went wrong. Please try again.")
      }
    } finally {
      setIsSubmitting(false)
    }
  }

  const socialLinks = [
    { icon: XIcon, href: "https://x.com/Kellonapp", label: "X" },
    { icon: Github, href: "#", label: "GitHub" },
    { icon: Linkedin, href: "#", label: "LinkedIn" },
  ]

  // DTP: disclaimer -- terms -- privacy
  const DTPLinks = [
    {
      label: "Disclaimer",
      href: "/disclaimer",
    },
    {
      label: "Terms",
      href: "/terms-of-use",
    },
    {
      label: "Privacy",
      href: "/privacy-policy",
    },
  ]

const navLinks = [
  {
    label: "About",
    sectionId: "about",
  },
  {
    label: "Features",
    sectionId: "features",
  },
  {
    label: "How it works",
    sectionId: "how-it-works", // Note: use kebab-case to match HTML id
  },
]

  return (
    <footer
      className="bg-primary-800 border-t border-white/10 relative overflow-hidden"
      id="contact"
    >
      {/* Background Accent */}
      <div className="absolute left-1/2 top-0 w-[900px] h-[900px] -translate-x-1/2 bg-primary/20 blur-[180px] rounded-full opacity-40 pointer-events-none"></div>

      {/* Newsletter Section */}
      <div className=" border-white/10 py-12 px-4 sm:px-6 lg:px-8">
        <div className="max-w-6xl mx-auto lg:text-center">
          <h3 className="text-3xl font-bold text-white mb-3 font-bungee">
            Join Our Waitlist
          </h3>
          <p className="text-gray-400 max-w-xl mx-auto mb-6">
            Get early access and updates before launch. No spam. No noise.
          </p>

          <div className="flex flex-col sm:flex-row gap-3 max-w-xl mx-auto">
            <input
              type="email"
              value={email}
              onChange={(e) => {
                setEmail(e.target.value)
                setError("")
              }}
              placeholder="Enter your email"
              className="flex-1 px-4 py-3 bg-white/5 border border-white/10 rounded-xl text-white 
              placeholder-gray-400 focus:border-primary-500 outline-none"
            />

            <button
              onClick={handleSubmit}
              disabled={isSubmitting}
              className="px-6 py-3 bg-primary-600 hover:bg-primary-500 rounded-xl 
              text-white font-medium flex items-center justify-center gap-2 transition"
            >
              {isSubmitting ? (
                <div className="animate-spin h-4 w-4 border-2 border-white border-t-transparent rounded-full"></div>
              ) : (
                <>
                  Join
                  <ArrowRight className="w-4 h-4" />
                </>
              )}
            </button>
          </div>

          {error && <p className="text-red-400 text-sm mt-3">{error}</p>}
        </div>
      </div>

      {/* Main Footer */}
      <div className="max-w-6xl mx-auto py-14 px-4 sm:px-6 lg:px-8 grid grid-cols-1 md:grid-cols-3 gap-12">
        {/* Brand */}
        <div className="text-center md:text-left">
          <div
            className="flex items-center justify-center md:justify-start gap-3 cursor-pointer mb-4"
            onClick={() => navigate("/")}
          >
            <img src="/logo.png?v=20251108" className="w-12 h-12" />
            <span className="text-2xl font-bold text-white">Kellon</span>
          </div>

          <div className="flex items-center mt-5 text-gray-400 gap-1 justify-center md:justify-start group">
            <Mail className="w-4 h-4 group-hover:text-white" />

            <span>
              <a
                target="_blank"
                href="mailto:contact@kellon.xyz"
                className="group-hover:text-white"
              >
                contact@kellon.xyz
              </a>{" "}
            </span>
          </div>
          <div>
            <p className=" text-gray-400">
              10 Villa Avenue, Ibeju-lekki. Lagos, Nigeria
            </p>
          </div>
        </div>

        {/* Footer Links */}
        <div className="grid grid-cols-2 gap-10 text-center md:text-left">
          <div>
            <h4 className="text-white font-semibold mb-4 tracking-wide">
              Company
            </h4>
            <ul className="space-y-2">
              {navLinks.map(({ label, sectionId}, i) => (
                <li key={i}>
                  <Link
                    to="/"
                    state={{ scrollTo: sectionId }}
                    className="text-gray-400 hover:text-white transition cursor-pointer capitalize"
                  >
                    {label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h4 className="text-white font-semibold mb-4 tracking-wide">
              Terms & Policies
            </h4>
            <ul className="space-y-2">
              {DTPLinks.map(({ label, href,}, i) => (
                <li key={i}>
                  <Link
                    to={href}
                    className="text-gray-400 hover:text-white transition cursor-pointer"
                  >
                    {label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>
        </div>

        {/* Social */}
        <div className="flex flex-col items-center md:items-end gap-4">
          <h4 className="text-white font-semibold tracking-wide">Follow Us</h4>
          <div className="flex gap-3">
            {socialLinks.map((social) => {
              const Icon = social.icon
              return (
                <a
                  key={social.label}
                  href={social.href}
                  target="_blank"
                  className="w-10 h-10 bg-white/5 border border-white/10 rounded-lg 
                  flex items-center justify-center text-gray-400 hover:text-white hover:bg-white/10 transition"
                >
                  <Icon className="w-5 h-5" />
                </a>
              )
            })}
          </div>
        </div>
      </div>

      {/* Bottom Bar */}
      <div className="border-t border-white/10 py-6 px-4 sm:px-6 lg:px-8">
        <div className=" text-gray-400 text-sm gap-3 text-center">
          <span>&copy; 2025 Kellon. All rights reserved.</span>
        </div>
      </div>

      <SuccessModal
        isOpen={showSuccessModal}
        onClose={() => setShowSuccessModal(false)}
        message="Thanks for joining our waitlist!"
      />
    </footer>
  )
}

export default Footer
