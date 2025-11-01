import React, { useState } from 'react'
import { ArrowRight, Play, Shield, Zap, Globe } from 'lucide-react'
import WaitlistModal from './WaitlistModal'

const Hero = () => {
  const [isWaitlistOpen, setIsWaitlistOpen] = useState(false)

  const openWaitlist = () => {
    setIsWaitlistOpen(true)
  }

  const closeWaitlist = () => {
    setIsWaitlistOpen(false)
  }

  return (
    <section className="pt-24 pb-12 px-4 sm:px-6 lg:px-8">
      <div className="max-w-7xl mx-auto">
        <div className="text-center">
          {/* Badge */}
          <div className="inline-flex items-center px-4 py-2 bg-primary-500/10 border border-primary-500/20 rounded-full mb-8">
            <Shield className="w-4 h-4 text-primary-400 mr-2" />
            <span className="text-primary-400 text-sm font-medium">Borderless Financial Platform</span>
          </div>

          {/* Main Heading */}
          <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold text-white mb-6 leading-tight">
            Borderless Payments.
            <span className="gradient-text block">Global Investments.</span>
            <span className="text-white block">One Wallet.</span>
          </h1>

          {/* Subheading */}
          <p className="text-xl text-gray-300 mb-8 max-w-3xl mx-auto leading-relaxed">
            Kellon Mobile breaks down financial barriers with seamless cross-border payments, 
            global investment opportunities, and comprehensive financial management - all in one powerful platform.
          </p>

          {/* CTA Buttons */}
          <div className="flex flex-col sm:flex-row gap-4 justify-center items-center mb-12">
            <button className="btn-primary text-lg px-8 py-4 flex items-center" onClick={openWaitlist}>
              Join Waitlist
              <ArrowRight className="ml-2 w-5 h-5" />
            </button>
            <button className="btn-secondary text-lg px-8 py-4 flex items-center">
              <Play className="mr-2 w-5 h-5" />
              Watch Demo
            </button>
          </div>

          {/* Stats */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-16">
            <div className="text-center">
              <div className="text-3xl font-bold text-white mb-2">24/7</div>
              <div className="text-gray-400">Platform Uptime</div>
            </div>
            <div className="text-center">
              <div className="text-3xl font-bold text-white mb-2">5K+</div>
              <div className="text-gray-400">Waitlist Signups</div>
            </div>
            <div className="text-center">
              <div className="text-3xl font-bold text-white mb-2">50+</div>
              <div className="text-gray-400">Target Countries</div>
            </div>
          </div>

          {/* Feature Pills */}
          <div className="flex flex-wrap justify-center gap-4">
            <div className="flex items-center px-4 py-2 bg-white/5 rounded-full border border-white/10">
              <Zap className="w-4 h-4 text-accent-400 mr-2" />
              <span className="text-gray-300 text-sm">Lightning Fast</span>
            </div>
            <div className="flex items-center px-4 py-2 bg-white/5 rounded-full border border-white/10">
              <Shield className="w-4 h-4 text-primary-400 mr-2" />
              <span className="text-gray-300 text-sm">Bank-Grade Security</span>
            </div>
            <div className="flex items-center px-4 py-2 bg-white/5 rounded-full border border-white/10">
              <Globe className="w-4 h-4 text-accent-500 mr-2" />
              <span className="text-gray-300 text-sm">Global Access</span>
            </div>
          </div>
        </div>

        {/* Floating Elements */}
        <div className="absolute top-1/4 left-10 w-20 h-20 bg-primary-500/20 rounded-full blur-xl animate-float"></div>
        <div className="absolute top-1/3 right-10 w-16 h-16 bg-accent-500/20 rounded-full blur-xl animate-float" style={{animationDelay: '2s'}}></div>
        <div className="absolute bottom-1/4 left-1/4 w-12 h-12 bg-primary-400/20 rounded-full blur-xl animate-float" style={{animationDelay: '4s'}}></div>
      </div>

      {/* Waitlist Modal */}
      <WaitlistModal isOpen={isWaitlistOpen} onClose={closeWaitlist} />
    </section>
  )
}

export default Hero