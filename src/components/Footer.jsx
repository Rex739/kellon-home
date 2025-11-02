import React, { useState } from 'react'
import { 
  Wallet, 
  Twitter, 
  Github, 
  Linkedin, 
  Mail, 
  MapPin, 
  Phone,
  ArrowRight
} from 'lucide-react'
import WaitlistModal from './WaitlistModal'

const Footer = () => {
  const [isWaitlistOpen, setIsWaitlistOpen] = useState(false)

  const openWaitlist = () => {
    setIsWaitlistOpen(true)
  }

  const closeWaitlist = () => {
    setIsWaitlistOpen(false)
  }

  const footerLinks = {
    product: [
      { name: "Features", href: "#features" },
      { name: "Security", href: "#security" },
      { name: "Pricing", href: "#pricing" },
      { name: "API", href: "#api" }
    ],
    company: [
      { name: "About", href: "#about" },
      { name: "Careers", href: "#careers" },
      { name: "Press", href: "#press" },
      { name: "Blog", href: "#blog" }
    ],
    support: [
      { name: "Help Center", href: "#help" },
      { name: "Contact Us", href: "#contact" },
      { name: "Status", href: "#status" },
      { name: "Community", href: "#community" }
    ],
    legal: [
      { name: "Privacy Policy", href: "#privacy" },
      { name: "Terms of Service", href: "#terms" },
      { name: "Compliance", href: "#compliance" },
      { name: "Cookies", href: "#cookies" }
    ]
  }

  const socialLinks = [
    { icon: Twitter, href: "#", label: "Twitter" },
    { icon: Github, href: "#", label: "GitHub" },
    { icon: Linkedin, href: "#", label: "LinkedIn" }
  ]

  return (
    <footer id="contact" className="bg-primary-900 border-t border-accent-500/20">
      {/* Newsletter Section */}
      <div className="border-b border-accent-500/20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 items-center">
            <div>
              <h3 className="text-2xl font-bold text-white mb-2">
                Join Our Waitlist
              </h3>
              <p className="text-gray-400">
                Be the first to know when Kellon launches and get early access to borderless financial services.
              </p>
            </div>
            <div className="flex flex-col sm:flex-row gap-4">
              <input
                type="email"
                placeholder="Enter your email"
                className="flex-1 px-4 py-3 bg-white/5 border border-white/10 rounded-xl text-white placeholder-gray-400 focus:outline-none focus:border-primary-500 transition-colors"
                readOnly
                onClick={openWaitlist}
              />
              <button className="btn-primary flex items-center justify-center" onClick={openWaitlist}>
                Join Waitlist
                <ArrowRight className="ml-2 w-4 h-4" />
              </button>
            </div>
          </div>
        </div>
      </div>

      {/* Main Footer */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="flex justify-center">
          {/* Brand Column */}
          <div className="text-center">
            <div className="flex items-center justify-center space-x-3 mb-4">
              <img 
                src="/logo.png" 
                alt="Kellon Logo" 
                className="w-12 h-12 object-contain"
              />
              <span className="text-2xl font-bold text-white">Kellon</span>
            </div>
            <p className="text-gray-400 mb-6 max-w-sm mx-auto">
              Your gateway to borderless payments and financial freedom. 
              Breaking barriers to create a world without financial limits.
            </p>
            
            {/* Contact Info */}
            <div className="space-y-3">
              <div className="flex items-center justify-center text-gray-400">
                <Mail className="w-4 h-4 mr-3" />
                <span>support@kellon.xyz</span>
              </div>
              <div className="flex items-center justify-center text-gray-400">
                <Phone className="w-4 h-4 mr-3" />
                <span>+234 (812)</span>
              </div>
              <div className="flex items-center justify-center text-gray-400">
                <MapPin className="w-4 h-4 mr-3" />
                <span>Lagos, NG</span>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Bottom Bar */}
      <div className="border-t border-white/10">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-6">
          <div className="flex flex-col md:flex-row justify-between items-center">
            <div className="text-gray-400 text-sm mb-4 md:mb-0">
              © 2025 Kellon. All rights reserved.
            </div>
            
            {/* Social Links */}
            <div className="flex space-x-4">
              {socialLinks.map((social) => {
                const IconComponent = social.icon
                return (
                  <a
                    key={social.label}
                    href={social.href}
                    className="w-10 h-10 bg-white/5 hover:bg-white/10 border border-white/10 rounded-lg flex items-center justify-center text-gray-400 hover:text-white transition-all duration-300"
                    aria-label={social.label}
                  >
                    <IconComponent className="w-5 h-5" />
                  </a>
                )
              })}
            </div>
          </div>
        </div>
      </div>

      {/* Waitlist Modal */}
      <WaitlistModal isOpen={isWaitlistOpen} onClose={closeWaitlist} />
    </footer>
  )
}

export default Footer