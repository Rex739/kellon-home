import React, { useState, useEffect } from "react"
import {
  Shield,
  AlertTriangle,
  FileText,
  Lock,
  Globe,
  Zap,
  Scale,
  UserCheck,
  Wallet,
  CreditCard,
  Users,
  Target,
  ShieldAlert,
  BookOpen,
} from "lucide-react"
import {
  getVisitorLocation,
  getLegalJurisdiction,
} from "../utils/locationUtils"
import LegalPageLayout from "./LegalPageLayout"

const TermsOfUse = () => {
  const [jurisdiction, setJurisdiction] = useState("Malta")
  const [isLoading, setIsLoading] = useState(true)

  useEffect(() => {
    window.scrollTo(0, 0)

    const detectLocation = async () => {
      try {
        const location = await getVisitorLocation()
        const legalJurisdiction = getLegalJurisdiction(location.countryCode)
        setJurisdiction(legalJurisdiction)
      } catch (error) {
        console.warn(
          "Location detection failed, using default jurisdiction:",
          error
        )
        setJurisdiction("Malta")
      } finally {
        setIsLoading(false)
      }
    }

    detectLocation()
  }, [])

  const termsSections = [
    {
      icon: <Shield className="w-6 h-6" />,
      title: "Introduction & Acceptance",
      content: (
        <>
          <p className="mb-4">
            Welcome to Kellon ("we," "our," "us"). Kellon provides a
            non-custodial, blockchain-based platform that enables users to send
            and receive cryptocurrency, perform crypto swaps, access fiat
            payouts, and purchase tokenized assets through trusted third-party
            partners.
          </p>
          <p className="mb-4">
            By using our website, mobile application, or any part of the Kellon
            ecosystem (collectively, the "Services"), you agree to be bound by
            these Terms of Use ("Terms").
          </p>
          <div className="relative overflow-hidden bg-gradient-to-r from-red-500/10 to-orange-500/10 border-l-4 border-red-500 rounded-r-lg p-4 my-4 group">
            <div className="absolute inset-0 bg-gradient-to-r from-red-500/0 via-red-500/5 to-red-500/0 opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
            <p className="font-medium text-red-300 relative z-10">
              If you do not agree, please do not use our Services.
            </p>
          </div>
        </>
      ),
      gradient: "from-blue-500/10 to-cyan-500/10",
      border: "border-blue-500/20",
      iconBg: "bg-gradient-to-br from-blue-500 to-cyan-500",
    },
    {
      icon: <UserCheck className="w-6 h-6" />,
      title: "Eligibility Requirements",
      content: (
        <>
          <p className="mb-4">To use Kellon, you must:</p>
          <ul className="space-y-3 mb-4">
            {[
              "Be at least 18 years old (or the age of majority in your jurisdiction)",
              "Have the legal capacity to enter into binding contracts",
              "Comply with all applicable laws, regulations, and sanctions in your region",
            ].map((item, index) => (
              <li key={index} className="flex items-start gap-3 group/item">
                <div className="w-2 h-2 rounded-full bg-primary-400 mt-2 flex-shrink-0 group-hover/item:scale-150 transition-transform duration-300"></div>
                <span className="group-hover/item:text-white transition-colors duration-300">
                  {item}
                </span>
              </li>
            ))}
          </ul>
          <div className="relative overflow-hidden bg-gradient-to-r from-accent-500/10 to-primary-500/10 border-l-4 border-accent-500 rounded-r-lg p-4 my-4 group">
            <div className="absolute inset-0 bg-gradient-to-r from-accent-500/0 via-accent-500/5 to-accent-500/0 opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
            <p className="font-medium text-accent-300 relative z-10">
              We reserve the right to deny or restrict access to anyone
              violating these Terms or local laws.
            </p>
          </div>
        </>
      ),
      gradient: "from-green-500/10 to-emerald-500/10",
      border: "border-green-500/20",
      iconBg: "bg-gradient-to-br from-green-500 to-emerald-500",
    },
    {
      icon: <Wallet className="w-6 h-6" />,
      title: "Non-Custodial Wallet Responsibility",
      content: (
        <>
          <div className="relative overflow-hidden bg-gradient-to-r from-primary-500/10 to-blue-500/10 border-l-4 border-primary-500 rounded-r-lg p-4 mb-4 group">
            <div className="absolute inset-0 bg-gradient-to-r from-primary-500/0 via-primary-500/5 to-primary-500/0 opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
            <p className="font-medium text-primary-300 relative z-10">
              <strong>Kellon is a non-custodial wallet platform.</strong> You
              retain full control of your private keys and digital assets.
            </p>
          </div>
          <p className="mb-4">
            We do not have access to, store, or recover your private keys,
            passwords, or seed phrases.
          </p>
          <div className="relative overflow-hidden bg-gradient-to-r from-red-500/10 to-orange-500/10 border-l-4 border-red-500 rounded-r-lg p-4 my-4 group">
            <div className="absolute inset-0 bg-gradient-to-r from-red-500/0 via-red-500/5 to-red-500/0 opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
            <p className="font-medium text-red-300 relative z-10">
              <strong>Important:</strong> If you lose your keys, Kellon cannot
              restore access to your wallet or funds.
            </p>
          </div>
          <p className="font-medium text-accent-300 mb-4">
            You are solely responsible for safeguarding your credentials and
            backing up your recovery phrase safely.
          </p>
        </>
      ),
      gradient: "from-amber-500/10 to-orange-500/10",
      border: "border-amber-500/20",
      iconBg: "bg-gradient-to-br from-amber-500 to-orange-500",
    },
    {
      icon: <CreditCard className="w-6 h-6" />,
      title: "Services Overview & Third-Party Integrations",
      content: (
        <>
          <p className="mb-4">
            Kellon provides tools and integrations that may include:
          </p>
          <ul className="space-y-3 mb-4">
            {[
              "Crypto-to-crypto swaps",
              "Crypto-to-fiat and fiat-to-crypto conversions via third-party providers (e.g., Ramp, Transak, MoonPay)",
              "Cross-border payments and digital asset transfers",
              "Tokenized asset trading within supported jurisdictions",
            ].map((item, index) => (
              <li key={index} className="flex items-start gap-3 group/item">
                <div className="w-2 h-2 rounded-full bg-accent-400 mt-2 flex-shrink-0 group-hover/item:scale-150 transition-transform duration-300"></div>
                <span className="group-hover/item:text-white transition-colors duration-300">
                  {item}
                </span>
              </li>
            ))}
          </ul>
          <div className="relative overflow-hidden bg-gradient-to-r from-purple-500/10 to-pink-500/10 border-l-4 border-purple-500 rounded-r-lg p-4 my-4 group">
            <div className="absolute inset-0 bg-gradient-to-r from-purple-500/0 via-purple-500/5 to-purple-500/0 opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
            <p className="font-medium text-purple-300 relative z-10">
              All fiat services are facilitated by regulated third-party
              providers, not by Kellon itself. We do not issue, hold, or manage
              fiat currency.
            </p>
          </div>
        </>
      ),
      gradient: "from-purple-500/10 to-pink-500/10",
      border: "border-purple-500/20",
      iconBg: "bg-gradient-to-br from-purple-500 to-pink-500",
    },
    {
      icon: <Target className="w-6 h-6" />,
      title: "User Responsibilities",
      content: (
        <>
          <p className="mb-4">By using Kellon, you agree to:</p>
          <ul className="space-y-3 mb-4">
            {[
              "Use the Services only for lawful purposes",
              "Not engage in money laundering, terrorism financing, or fraudulent activity",
              "Not attempt to hack, reverse engineer, or misuse Kellon's platform",
              "Ensure compliance with your country's tax and reporting obligations",
            ].map((item, index) => (
              <li key={index} className="flex items-start gap-3 group/item">
                <div className="w-2 h-2 rounded-full bg-primary-400 mt-2 flex-shrink-0 group-hover/item:scale-150 transition-transform duration-300"></div>
                <span className="group-hover/item:text-white transition-colors duration-300">
                  {item}
                </span>
              </li>
            ))}
          </ul>
          <div className="relative overflow-hidden bg-gradient-to-r from-accent-500/10 to-primary-500/10 border-l-4 border-accent-500 rounded-r-lg p-4 my-4 group">
            <div className="absolute inset-0 bg-gradient-to-r from-accent-500/0 via-accent-500/5 to-accent-500/0 opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
            <p className="font-medium text-accent-300 relative z-10">
              You acknowledge that transactions on blockchain networks are
              irreversible, and Kellon cannot cancel or reverse them once
              executed.
            </p>
          </div>
        </>
      ),
      gradient: "from-indigo-500/10 to-blue-500/10",
      border: "border-indigo-500/20",
      iconBg: "bg-gradient-to-br from-indigo-500 to-blue-500",
    },
    {
      icon: <AlertTriangle className="w-6 h-6" />,
      title: "Risk Disclaimer",
      content: (
        <>
          <p className="mb-4">
            Using digital assets carries inherent risks, including but not
            limited to:
          </p>
          <ul className="space-y-3 mb-4">
            {[
              "Market volatility and potential loss of value",
              "Smart contract bugs or network errors",
              "Regulatory changes or service restrictions",
              "Third-party provider outages or compliance limitations",
            ].map((item, index) => (
              <li key={index} className="flex items-start gap-3 group/item">
                <div className="w-2 h-2 rounded-full bg-red-400 mt-2 flex-shrink-0 group-hover/item:scale-150 transition-transform duration-300"></div>
                <span className="group-hover/item:text-white transition-colors duration-300">
                  {item}
                </span>
              </li>
            ))}
          </ul>
          <div className="relative overflow-hidden bg-gradient-to-r from-red-500/10 to-orange-500/10 border-l-4 border-red-500 rounded-r-lg p-4 my-4 group">
            <div className="absolute inset-0 bg-gradient-to-r from-red-500/0 via-red-500/5 to-red-500/0 opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
            <div className="relative z-10">
              <p className="font-medium text-red-300 mb-2">
                By using Kellon, you acknowledge that:
              </p>
              <ul className="space-y-2 ml-4">
                <li className="flex items-start gap-2">
                  <div className="w-1.5 h-1.5 rounded-full bg-red-400 mt-1.5 flex-shrink-0"></div>
                  <span className="text-red-300">
                    You assume all risks related to your use of cryptocurrencies
                    and tokenized assets
                  </span>
                </li>
                <li className="flex items-start gap-2">
                  <div className="w-1.5 h-1.5 rounded-full bg-red-400 mt-1.5 flex-shrink-0"></div>
                  <span className="text-red-300">
                    Kellon does not guarantee profits, price stability, or asset
                    recovery
                  </span>
                </li>
                <li className="flex items-start gap-2">
                  <div className="w-1.5 h-1.5 rounded-full bg-red-400 mt-1.5 flex-shrink-0"></div>
                  <span className="text-red-300">
                    We are not liable for any loss arising from user error,
                    third-party failure, or market fluctuation
                  </span>
                </li>
              </ul>
            </div>
          </div>
        </>
      ),
      gradient: "from-red-500/10 to-pink-500/10",
      border: "border-red-500/20",
      iconBg: "bg-gradient-to-br from-red-500 to-pink-500",
    },
    {
      icon: <ShieldAlert className="w-6 h-6" />,
      title: "Limitation of Liability & Indemnification",
      content: (
        <>
          <p className="mb-4">To the maximum extent permitted by law:</p>
          <ul className="space-y-3 mb-4">
            {[
              "Kellon, its founders, affiliates, or employees are not liable for indirect, incidental, or consequential damages",
              "Kellon does not act as your broker, custodian, or financial advisor",
              "All services are provided 'as is' and 'as available', without warranties",
            ].map((item, index) => (
              <li key={index} className="flex items-start gap-3 group/item">
                <div className="w-2 h-2 rounded-full bg-primary-400 mt-2 flex-shrink-0 group-hover/item:scale-150 transition-transform duration-300"></div>
                <span className="group-hover/item:text-white transition-colors duration-300">
                  {item}
                </span>
              </li>
            ))}
          </ul>
          <p className="mb-4 font-medium text-accent-300">
            You agree to indemnify and hold harmless Kellon from any claims,
            damages, losses, or expenses arising from your violation of these
            Terms or misuse of Services.
          </p>
        </>
      ),
      gradient: "from-gray-500/10 to-slate-500/10",
      border: "border-gray-500/20",
      iconBg: "bg-gradient-to-br from-gray-500 to-slate-500",
    },
    {
      icon: <Scale className="w-6 h-6" />,
      title: "Governing Law & Jurisdiction",
      content: (
        <>
          <div className="relative overflow-hidden bg-gradient-to-r from-primary-500/10 to-blue-500/10 border-l-4 border-primary-500 rounded-r-lg p-4 mb-4 group">
            <div className="absolute inset-0 bg-gradient-to-r from-primary-500/0 via-primary-500/5 to-primary-500/0 opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
            <div className="relative z-10">
              {isLoading ? (
                <div className="flex items-center gap-3">
                  <span className="inline-block animate-spin rounded-full h-4 w-4 border-b-2 border-primary-400"></span>
                  <p className="text-primary-300">
                    Determining applicable jurisdiction...
                  </p>
                </div>
              ) : (
                <>
                  <p className="font-medium text-primary-300">
                    These Terms are governed by and constructed in accordance
                    with the laws of{" "}
                    <strong className="text-white">{jurisdiction}</strong>
                  </p>
                  <p className="text-primary-300 mt-2">
                    Any dispute arising shall be subject to the exclusive
                    jurisdiction of competent courts in {jurisdiction}.
                  </p>
                </>
              )}
            </div>
          </div>
          <p className="text-sm text-gray-400 mb-4">
            Jurisdiction automatically determined based on your location. Kellon
            operates in compliance with local regulations in crypto-friendly
            jurisdictions.
          </p>
        </>
      ),
      gradient: "from-violet-500/10 to-purple-500/10",
      border: "border-violet-500/20",
      iconBg: "bg-gradient-to-br from-violet-500 to-purple-500",
    },
    {
      icon: <FileText className="w-6 h-6" />,
      title: "Amendments & Updates",
      content: (
        <>
          <p className="mb-4">
            Kellon may modify or update these Terms periodically. The "Last
            updated" date reflects the latest version.
          </p>
          <p className="mb-4">
            Continued use of our Services after changes means you accept the
            revised Terms.
          </p>
          <div className="relative overflow-hidden bg-gradient-to-r from-accent-500/10 to-primary-500/10 border-l-4 border-accent-500 rounded-r-lg p-4 my-4 group">
            <div className="absolute inset-0 bg-gradient-to-r from-accent-500/0 via-accent-500/5 to-accent-500/0 opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
            <p className="font-medium text-accent-300 relative z-10">
              It is your responsibility to review these Terms regularly for any
              changes.
            </p>
          </div>
        </>
      ),
      gradient: "from-cyan-500/10 to-blue-500/10",
      border: "border-cyan-500/20",
      iconBg: "bg-gradient-to-br from-cyan-500 to-blue-500",
    },
  ]

  return (
    <LegalPageLayout
      badge="Terms of Use"
      badgeIcon={<BookOpen className="h-4 w-4" />}
      title="Legal Terms"
      accentTitle="& Conditions"
      description="These Terms govern your use of Kellon's services. Please read them carefully before proceeding."
      updatedAt="03/10/2025"
      sections={termsSections}
      finalIcon={<Shield className="h-7 w-7" />}
      finalTitle="Important Notice"
      finalBody="By using Kellon's services, you acknowledge and accept all terms outlined in these Terms of Use. Always conduct your own research and consult with financial or legal professionals when needed."
      contactLabel="Questions about our terms?"
    />
  )
}

export default TermsOfUse
