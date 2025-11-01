import React from 'react'
import Header from './components/Header'
import Hero from './components/Hero'
import Features from './components/Features'
import MarketOpportunity from './components/MarketOpportunity'
import Traction from './components/Traction'
import About from './components/About'
import Footer from './components/Footer'

function App() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-primary-900 via-accent-900 to-primary-800">
      <Header />
      <main>
        <Hero />
        <Features />
        <MarketOpportunity />
        <Traction />
        <About />
      </main>
      <Footer />
    </div>
  )
}

export default App