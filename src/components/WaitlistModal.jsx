import React, { useState } from 'react'
import { X, Mail, User, ArrowRight } from 'lucide-react'
import { waitlistService } from '../services/supabase'

const WaitlistModal = ({ isOpen, onClose }) => {
  const [formData, setFormData] = useState({
    name: '',
    email: ''
  })
  const [isSubmitting, setIsSubmitting] = useState(false)
  const [isSubmitted, setIsSubmitted] = useState(false)
  const [error, setError] = useState('')

  const handleInputChange = (e) => {
    const { name, value } = e.target
    setFormData(prev => ({
      ...prev,
      [name]: value
    }))
  }

  const handleSubmit = async (e) => {
    e.preventDefault()
    setIsSubmitting(true)
    setError('')

    try {
      // Check if email already exists
      const emailExists = await waitlistService.checkEmailExists(formData.email)
      if (emailExists) {
        setError('This email is already on our waitlist!')
        return
      }

      // Add to waitlist via Supabase
      await waitlistService.addSignup({
        name: formData.name,
        email: formData.email
      })
      
      setIsSubmitted(true)
      
      // Reset form after 3 seconds
      setTimeout(() => {
        setFormData({ name: '', email: '' })
        setIsSubmitted(false)
        setError('')
        onClose()
      }, 3000)
      
    } catch (error) {
      console.error('Error submitting waitlist form:', error)
      setError('Unable to join waitlist. Please try again or contact support.')
    } finally {
      setIsSubmitting(false)
    }
  }

  if (!isOpen) return null

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4">
      {/* Backdrop */}
      <div 
        className="absolute inset-0 bg-black/60 backdrop-blur-sm"
        onClick={onClose}
      ></div>
      
      {/* Modal */}
      <div className="relative bg-primary-900/95 backdrop-blur-md border border-accent-500/20 rounded-2xl p-8 w-full max-w-md mx-4 shadow-2xl">
        {/* Close Button */}
        <button
          onClick={onClose}
          className="absolute top-4 right-4 text-gray-400 hover:text-white transition-colors"
        >
          <X className="w-6 h-6" />
        </button>

        {!isSubmitted ? (
          <>
            {/* Header */}
            <div className="text-center mb-6">
              <h2 className="text-2xl font-bold text-white mb-2">
                Join the <span className="gradient-text">Waitlist</span>
              </h2>
              <p className="text-gray-300">
                Be the first to know when Kellon launches and get early access to revolutionary crypto payments.
              </p>
            </div>

            {/* Form */}
            <form onSubmit={handleSubmit} className="space-y-4">
              <div>
                <label htmlFor="name" className="block text-sm font-medium text-gray-300 mb-2">
                  Full Name
                </label>
                <div className="relative">
                  <User className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400 w-5 h-5" />
                  <input
                    type="text"
                    id="name"
                    name="name"
                    value={formData.name}
                    onChange={handleInputChange}
                    required
                    className="w-full pl-12 pr-4 py-3 bg-white/5 border border-white/10 rounded-xl text-white placeholder-gray-400 focus:outline-none focus:border-accent-500 focus:ring-2 focus:ring-accent-500/20 transition-all"
                    placeholder="Enter your full name"
                  />
                </div>
              </div>

              <div>
                <label htmlFor="email" className="block text-sm font-medium text-gray-300 mb-2">
                  Email Address
                </label>
                <div className="relative">
                  <Mail className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400 w-5 h-5" />
                  <input
                    type="email"
                    id="email"
                    name="email"
                    value={formData.email}
                    onChange={handleInputChange}
                    required
                    className="w-full pl-12 pr-4 py-3 bg-white/5 border border-white/10 rounded-xl text-white placeholder-gray-400 focus:outline-none focus:border-accent-500 focus:ring-2 focus:ring-accent-500/20 transition-all"
                    placeholder="Enter your email address"
                  />
                </div>
              </div>

              {error && (
                <div className="text-red-400 text-sm text-center py-2">
                  {error}
                </div>
              )}

              <button
                type="submit"
                disabled={isSubmitting || !formData.name || !formData.email}
                className="w-full btn-primary py-3 flex items-center justify-center disabled:opacity-50 disabled:cursor-not-allowed"
              >
                {isSubmitting ? (
                  <div className="flex items-center">
                    <div className="animate-spin rounded-full h-5 w-5 border-b-2 border-white mr-2"></div>
                    Joining...
                  </div>
                ) : (
                  <>
                    Join Waitlist
                    <ArrowRight className="ml-2 w-5 h-5" />
                  </>
                )}
              </button>
            </form>

            <p className="text-xs text-gray-400 text-center mt-4">
              We'll never spam you. Unsubscribe at any time.
            </p>
          </>
        ) : (
          <div className="text-center">
            <div className="w-16 h-16 bg-accent-500/20 rounded-full flex items-center justify-center mx-auto mb-4">
              <Mail className="w-8 h-8 text-accent-400" />
            </div>
            <h2 className="text-2xl font-bold text-white mb-2">
              You're on the list!
            </h2>
            <p className="text-gray-300">
              Thank you for joining our waitlist! We'll notify you as soon as Kellon launches.
            </p>
          </div>
        )}
      </div>
    </div>
  )
}

export default WaitlistModal