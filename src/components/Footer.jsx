import React, { useState } from 'react'
import { 
  Wallet, 
  Twitter, 
  Github, 
  Linkedin, 
  Mail, 
  MapPin, 
  Phone,
  ArrowRight,
  Check
} from 'lucide-react'
import SuccessModal from './SuccessModal'
import { waitlistService } from '../services/supabase'

const Footer = () => {
  const [email, setEmail] = useState('')
  const [isSubmitting, setIsSubmitting] = useState(false)
  const [showSuccessModal, setShowSuccessModal] = useState(false)
  const [error, setError] = useState('')



  const handleDirectSubmit = async () => {
    if (!email || !email.includes('@')) {
      setError('Please enter a valid email address')
      return
    }

    setIsSubmitting(true)
    setError('')

    try {
      // Check if email already exists
      const emailExists = await waitlistService.checkEmailExists(email)
      if (emailExists) {
        setError('This email is already on our waitlist!')
        setIsSubmitting(false)
        return
      }

      // Add to waitlist with email only (no name required)
      await waitlistService.addSignup({
        name: 'Waitlist User', // Default name since we're not collecting it
        email: email
      })
      
      setShowSuccessModal(true)
      setEmail('')
      
    } catch (error) {
      console.error('Error submitting waitlist form:', error)
      
      if (error.message.includes('duplicate key') || error.message.includes('unique constraint')) {
        setError('This email is already on our waitlist!')
      } else if (error.message.includes('Database error')) {
        setError('Database temporarily unavailable. Please email contact@kellon.xyz')
      } else {
        setError('Unable to join waitlist. Please try again or email contact@kellon.xyz')
      }
    } finally {
      setIsSubmitting(false)
    }
  }

  const handleEmailChange = (e) => {
    setEmail(e.target.value)
    setError('') // Clear error when user types
  }

  const handleKeyPress = (e) => {
    if (e.key === 'Enter') {
      handleDirectSubmit()
    }
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
                value={email}
                onChange={handleEmailChange}
                onKeyPress={handleKeyPress}
                className="flex-1 px-4 py-3 bg-white/5 border border-white/10 rounded-xl text-white placeholder-gray-400 focus:outline-none focus:border-primary-500 transition-colors"
                disabled={isSubmitting}
              />
              <button 
                className="btn-primary flex items-center justify-center disabled:opacity-50 disabled:cursor-not-allowed" 
                onClick={handleDirectSubmit}
                disabled={isSubmitting || !email}
              >
                {isSubmitting ? (
                  <>
                    <div className="animate-spin rounded-full h-4 w-4 border-b-2 border-white mr-2"></div>
                    Joining...
                  </>
                ) : (
                  <>
                    Join Waitlist
                    <ArrowRight className="ml-2 w-4 h-4" />
                  </>
                )}
              </button>
            </div>
            {error && (
              <div className="text-red-400 text-sm mt-2">
                {error}
              </div>
            )}
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
                <span>contact@kellon.xyz</span>
              </div>
              <div className="flex items-center justify-center text-gray-400">
                <Phone className="w-4 h-4 mr-3" />
                <span>+1 (333) 456 7890</span>
              </div>
              <div className="flex items-center justify-center text-gray-400">
                <MapPin className="w-4 h-4 mr-3" />
                <span></span>
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

      {/* Success Modal */}
      <SuccessModal 
        isOpen={showSuccessModal} 
        onClose={() => setShowSuccessModal(false)}
        message="Thanks for joining our waitlist!"
      />
    </footer>
  )
}

export default Footer
