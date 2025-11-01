import React, { useState } from 'react'
import { Menu, X, Wallet } from 'lucide-react'

const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false)

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen)
  }

  return (
    <header className="fixed top-0 left-0 right-0 z-50 bg-primary-900/80 backdrop-blur-md border-b border-accent-500/20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center py-3 md:py-4">
          {/* Logo */}
          <div className="flex items-center space-x-4">
            <img 
              src="/logo.png" 
              alt="Kellon Logo" 
              className="w-16 h-16 md:w-20 md:h-20 object-contain"
            />
            <span className="text-2xl md:text-3xl font-bold text-white">Kellon Mobile</span>
          </div>

          {/* Desktop Navigation */}
          <nav className="hidden md:flex items-center space-x-8">
            <a href="#features" className="text-gray-300 hover:text-white transition-colors">
              Features
            </a>
            <a href="#about" className="text-gray-300 hover:text-white transition-colors">
              About
            </a>
            <a href="#security" className="text-gray-300 hover:text-white transition-colors">
              Security
            </a>
            <a href="#contact" className="text-gray-300 hover:text-white transition-colors">
              Contact
            </a>
          </nav>

          {/* CTA Buttons */}
          <div className="hidden md:flex items-center space-x-4">
            <button className="btn-secondary">
              Download App
            </button>
            <button className="btn-primary">
              Get Started
            </button>
          </div>

          {/* Mobile Menu Button */}
          <button
            className="md:hidden text-white"
            onClick={toggleMenu}
          >
            {isMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
          </button>
        </div>

        {/* Mobile Menu */}
        {isMenuOpen && (
          <div className="md:hidden py-4 border-t border-white/10">
            <nav className="flex flex-col space-y-4">
              <a 
                href="#features" 
                className="text-gray-300 hover:text-white transition-colors"
                onClick={toggleMenu}
              >
                Features
              </a>
              <a 
                href="#about" 
                className="text-gray-300 hover:text-white transition-colors"
                onClick={toggleMenu}
              >
                About
              </a>
              <a 
                href="#security" 
                className="text-gray-300 hover:text-white transition-colors"
                onClick={toggleMenu}
              >
                Security
              </a>
              <a 
                href="#contact" 
                className="text-gray-300 hover:text-white transition-colors"
                onClick={toggleMenu}
              >
                Contact
              </a>
              <div className="flex flex-col space-y-2 pt-4">
                <button className="btn-secondary">
                  Download App
                </button>
                <button className="btn-primary">
                  Get Started
                </button>
              </div>
            </nav>
          </div>
        )}
      </div>
    </header>
  )
}

export default Header