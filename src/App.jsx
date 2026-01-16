import React, { useEffect } from "react"
import { Routes, Route, useLocation } from "react-router-dom"
import Header from "./components/Header"
import Hero from "./components/Hero"
import Partners from "./components/Partners"
import Features from "./components/Features"

import Traction from "./components/Traction"
import About from "./components/About"
import Footer from "./components/Footer"
import PrivacyPolicy from "./components/PrivacyPolicy"
import TermsOfUse from "./components/TermsOfUse"
import Disclaimer from "./components/Disclaimer"
import HowItWorks from "./components/HowItWorks"
import FAQ from "./components/FAQ"
import RegulatoryNote from "./components/Regulatory"
import TokenizedRWA from "./components/TokenizedRWA"
import ParallaxSection from "./components/ParralaxSection"
import MarketOpportunity from "./components/market/MarketOpportunity"

// Home page component
const HomePage = () => {
  const location = useLocation()

  useEffect(() => {
    if (location.state?.scrollTo) {
      const sectionId = location.state.scrollTo

      // Update URL to show the hash (like /#features)
      window.history.replaceState({}, document.title, `/#${sectionId}`)

      // Scroll to section
      setTimeout(() => {
        const element = document.getElementById(sectionId)
        if (element) {
          const yOffset = -80 // Adjust for header
          const y =
            element.getBoundingClientRect().top + window.pageYOffset + yOffset
          window.scrollTo({ top: y, behavior: "smooth" })
        }
      }, 300)

      // Clear the state
      window.history.replaceState({}, document.title, `/#${sectionId}`)
    }

    // Also handle direct hash in URL (if someone shares the link)
    if (location.hash) {
      const sectionId = location.hash.replace("#", "")
      setTimeout(() => {
        const element = document.getElementById(sectionId)
        if (element) {
          const yOffset = -80
          const y =
            element.getBoundingClientRect().top + window.pageYOffset + yOffset
          window.scrollTo({ top: y, behavior: "smooth" })
        }
      }, 300)
    }
  }, [location])

  return (
    <div className="min-h-screen  font-manrope ">
      <Header />
      <main>
        <Hero />
        {/* <Partners /> */}
        <Features />
        <HowItWorks />
        <MarketOpportunity />
        <Traction />
        <ParallaxSection />
        <About />
        <FAQ />
      </main>
      <Footer />
    </div>
  )
}

function App() {
  return (
    <Routes>
      <Route path="/" element={<HomePage />} />
      <Route path="/privacy-policy" element={<PrivacyPolicy />} />
      <Route path="/terms-of-use" element={<TermsOfUse />} />
      <Route path="/disclaimer" element={<Disclaimer />} />
    </Routes>
  )
}

export default App
