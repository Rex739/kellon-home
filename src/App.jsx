import React, { useState } from 'react'
import Header from './components/Header'
import Hero from './components/Hero'
import Partners from './components/Partners'
import Features from './components/Features'
import MarketOpportunity from './components/MarketOpportunity'
import Traction from './components/Traction'
import About from './components/About'
import Footer from './components/Footer'
import PrivacyPolicy from './components/PrivacyPolicy'
import TermsOfUse from './components/TermsOfUse'
import Disclaimer from './components/Disclaimer'

function App() {
  const [currentView, setCurrentView] = useState('home')

  const showPrivacyPolicy = () => setCurrentView('privacy')
  const showTermsOfUse = () => setCurrentView('terms')
  const showDisclaimer = () => setCurrentView('disclaimer')
  const showHome = () => setCurrentView('home')

  if (currentView === 'privacy') {
    return <PrivacyPolicy onBack={showHome} />
  }

  if (currentView === 'terms') {
    return <TermsOfUse onBack={showHome} />
  }

  if (currentView === 'disclaimer') {
    return <Disclaimer onBack={showHome} />
  }

  return (
    <div className="min-h-screen bg-gradient-to-br from-primary-900 via-accent-900 to-primary-800">
      <Header />
      <main>
        <Hero />
        {/* <Partners /> */}
        <Features />
        <MarketOpportunity />
        <Traction />
        <About />
      </main>
      <Footer onShowPrivacy={showPrivacyPolicy} onShowTerms={showTermsOfUse} onShowDisclaimer={showDisclaimer} />
    </div>
  )
}

export default App