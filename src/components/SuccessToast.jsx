import React, { useEffect, useState } from 'react'
import { Check, X } from 'lucide-react'

const SuccessToast = ({ isOpen, onClose, message = "Successfully joined the waitlist!" }) => {
  const [isVisible, setIsVisible] = useState(false)
  const [isAnimating, setIsAnimating] = useState(false)

  useEffect(() => {
    if (isOpen) {
      setIsVisible(true)
      setTimeout(() => setIsAnimating(true), 10) // Small delay for smooth animation
      
      // Auto close after 4 seconds
      const timer = setTimeout(() => {
        handleClose()
      }, 4000)
      
      return () => clearTimeout(timer)
    }
  }, [isOpen])

  const handleClose = () => {
    setIsAnimating(false)
    setTimeout(() => {
      setIsVisible(false)
      onClose()
    }, 300) // Wait for exit animation
  }

  if (!isVisible) return null

  return (
    <>
      {/* Backdrop */}
      <div 
        className={`fixed inset-0 z-50 transition-opacity duration-300 ${
          isAnimating ? 'opacity-100' : 'opacity-0'
        }`}
      >
        {/* Toast Container */}
        <div className="fixed top-4 right-4 z-50">
          <div 
            className={`
              bg-gradient-to-r from-green-500 to-emerald-600 
              text-white px-6 py-4 rounded-xl shadow-2xl 
              transform transition-all duration-300 ease-out
              border border-green-400/20
              backdrop-blur-sm
              ${isAnimating 
                ? 'translate-x-0 scale-100 opacity-100' 
                : 'translate-x-full scale-95 opacity-0'
              }
            `}
          >
            <div className="flex items-center gap-3">
              {/* Success Icon with Animation */}
              <div className="flex-shrink-0">
                <div className="w-8 h-8 bg-white/20 rounded-full flex items-center justify-center">
                  <Check 
                    className={`w-5 h-5 text-white transition-transform duration-500 ${
                      isAnimating ? 'scale-100 rotate-0' : 'scale-0 rotate-45'
                    }`} 
                  />
                </div>
              </div>

              {/* Message */}
              <div className="flex-1">
                <p className="font-semibold text-sm">{message}</p>
                <p className="text-green-100 text-xs mt-1">We'll keep you updated!</p>
              </div>

              {/* Close Button */}
              <button
                onClick={handleClose}
                className="flex-shrink-0 w-6 h-6 flex items-center justify-center rounded-full hover:bg-white/20 transition-colors duration-200"
              >
                <X className="w-4 h-4 text-white/80 hover:text-white" />
              </button>
            </div>

            {/* Progress Bar */}
            <div className="mt-3 w-full bg-white/20 rounded-full h-1 overflow-hidden">
              <div 
                className={`h-full bg-white/60 rounded-full transition-all duration-4000 ease-linear ${
                  isAnimating ? 'w-0' : 'w-full'
                }`}
                style={{
                  animation: isAnimating ? 'progress 4s linear forwards' : 'none'
                }}
              />
            </div>
          </div>
        </div>
      </div>

      {/* CSS Animation */}
      <style jsx>{`
        @keyframes progress {
          from { width: 100%; }
          to { width: 0%; }
        }
      `}</style>
    </>
  )
}

export default SuccessToast