import React, { Suspense, lazy, useEffect, useState } from "react"
import { Routes, Route, useLocation } from "react-router-dom"
import Header from "./components/Header"
import Hero from "./components/Hero"
import LoadingScreen from "./components/LoadingScreen"

const Features = lazy(() => import("./components/Features"))
const HowItWorks = lazy(() => import("./components/HowItWorks"))
const MarketOpportunity = lazy(() =>
  import("./components/market/MarketOpportunity")
)
const Traction = lazy(() => import("./components/Traction"))
const ParallaxSection = lazy(() => import("./components/ParralaxSection"))
const About = lazy(() => import("./components/About"))
const FAQ = lazy(() => import("./components/FAQ"))
const Footer = lazy(() => import("./components/Footer"))
const PrivacyPolicy = lazy(() => import("./components/PrivacyPolicy"))
const TermsOfUse = lazy(() => import("./components/TermsOfUse"))
const Disclaimer = lazy(() => import("./components/Disclaimer"))


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
        <Suspense fallback={<LoadingScreen inline />}>
          <Features />
          <HowItWorks />
          <MarketOpportunity />
          <Traction />
          <ParallaxSection />
          <About />
          <FAQ />
        </Suspense>
      </main>
      <Suspense fallback={<LoadingScreen inline />}>
        <Footer />
      </Suspense>
    </div>
  )
}

function App() {
  const [isBooting, setIsBooting] = useState(true)
  const [showLoader, setShowLoader] = useState(true)

  useEffect(() => {
    const startedAt = Date.now()
    const minDuration = 650
    const maxDuration = 1800

    const finish = () => {
      const remaining = Math.max(0, minDuration - (Date.now() - startedAt))
      window.setTimeout(() => setIsBooting(false), remaining)
    }

    const maxTimer = window.setTimeout(() => setIsBooting(false), maxDuration)

    Promise.allSettled([
      document.fonts?.ready ?? Promise.resolve(),
      new Promise((resolve) => {
        if (document.readyState === "complete") {
          resolve()
          return
        }
        window.addEventListener("load", resolve, { once: true })
      }),
    ]).then(() => {
      window.clearTimeout(maxTimer)
      finish()
    })

    return () => window.clearTimeout(maxTimer)
  }, [])

  useEffect(() => {
    if (isBooting) return undefined

    const removeTimer = window.setTimeout(() => setShowLoader(false), 450)
    return () => window.clearTimeout(removeTimer)
  }, [isBooting])

  return (
    <>
      {showLoader && <LoadingScreen hidden={!isBooting} />}
      <Suspense fallback={<LoadingScreen inline />}>
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="/privacy-policy" element={<PrivacyPolicy />} />
          <Route path="/terms-of-use" element={<TermsOfUse />} />
          <Route path="/disclaimer" element={<Disclaimer />} />
        </Routes>
      </Suspense>
    </>
  )
}

export default App
