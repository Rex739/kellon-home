import React, { useEffect, useState } from 'react'
import { Check, X, Sparkles } from 'lucide-react'

const SuccessModal = ({ isOpen, onClose, message = "Successfully joined the waitlist!" }) => {
  const [isAnimating, setIsAnimating] = useState(false)

  useEffect(() => {
    if (isOpen) {
      // Trigger animation after component mounts
      setTimeout(() => setIsAnimating(true), 10)
      
      // Auto close after 5 seconds
      const timer = setTimeout(() => {
        handleClose()
      }, 5000)
      
      return () => clearTimeout(timer)
    } else {
      setIsAnimating(false)
    }
  }, [isOpen])

  const handleClose = () => {
    setIsAnimating(false)
    setTimeout(() => {
      onClose()
    }, 300) // Wait for exit animation
  }

  if (!isOpen) return null

  return (
    <>
      {/* Backdrop */}
      <div 
        className={`fixed inset-0 z-50 flex items-center justify-center p-4 transition-all duration-300 ${
          isAnimating ? 'bg-black/60 backdrop-blur-sm' : 'bg-black/0'
        }`}
        onClick={handleClose}
      >
        {/* Modal */}
        <div 
          className={`
            relative bg-gradient-to-br from-blue-900/20 to-indigo-900/20 
            backdrop-blur-xl border border-blue-500/30 rounded-2xl p-8 
            max-w-md w-full mx-4 shadow-2xl
            transform transition-all duration-300 ease-out
            ${isAnimating 
              ? 'scale-100 opacity-100 translate-y-0' 
              : 'scale-95 opacity-0 translate-y-4'
            }
          `}
          onClick={(e) => e.stopPropagation()}
        >
          {/* Close Button */}
          <button
            onClick={handleClose}
            className="absolute top-4 right-4 w-8 h-8 flex items-center justify-center rounded-full bg-white/10 hover:bg-white/20 transition-colors duration-200"
          >
            <X className="w-4 h-4 text-white/80" />
          </button>

          {/* Success Icon */}
          <div className="text-center mb-6">
            <div className="relative mx-auto w-20 h-20 mb-4">
              {/* Animated background circle */}
              <div className="absolute inset-0 bg-gradient-to-r from-blue-600 to-indigo-600 rounded-full animate-pulse"></div>
              
              {/* Success checkmark */}
              <div className="relative w-full h-full bg-gradient-to-r from-blue-600 to-indigo-600 rounded-full flex items-center justify-center">
                <Check 
                  className={`w-10 h-10 text-white transition-transform duration-500 ${
                    isAnimating ? 'scale-100 rotate-0' : 'scale-0 rotate-45'
                  }`} 
                />
              </div>

              {/* Sparkle effects */}
              <Sparkles className="absolute -top-2 -right-2 w-6 h-6 text-yellow-400 animate-spin" style={{animationDuration: '3s'}} />
              <Sparkles className="absolute -bottom-1 -left-2 w-4 h-4 text-blue-400 animate-pulse" />
            </div>
          </div>

          {/* Success Message */}
          <div className="text-center mb-6">
            <h3 className="text-2xl font-bold text-white mb-2">
              Welcome to Kellon! 🎉
            </h3>
            <p className="text-blue-200 text-lg mb-2">
              {message}
            </p>
            <p className="text-gray-300 text-sm">
              We'll keep you updated on our launch progress and be the first to know when we go live!
            </p>
          </div>

          {/* Action Button */}
          <div className="text-center">
            <button
              onClick={handleClose}
              className="bg-gradient-to-r from-blue-600 to-indigo-700 hover:from-blue-700 hover:to-indigo-800 text-white px-8 py-3 rounded-xl font-semibold transition-all duration-200 shadow-lg hover:shadow-xl transform hover:scale-105"
            >
              Awesome! 🚀
            </button>
          </div>

          {/* Animated border */}
          <div className="absolute inset-0 rounded-2xl bg-gradient-to-r from-blue-600/20 to-indigo-700/20 blur-xl -z-10"></div>
        </div>
      </div>
    </>
  )
}

export default SuccessModal