import React, { useEffect } from "react"
import {
  Shield,
  AlertTriangle,
  FileText,
  Lock,
  Globe,
  Zap,
  Eye,
  Database,
  Share2,
  Key,
  ShieldCheck,
  Clock,
  UserCheck,
  Link,
} from "lucide-react"
import LegalPageLayout from "./LegalPageLayout"

const PrivacyPolicy = () => {
  useEffect(() => {
    window.scrollTo(0, 0)
  }, [])

  const privacySections = [
    {
      icon: <Shield className="w-6 h-6" />,
      title: "Introduction & Acceptance",
      content: (
        <>
          <p className="mb-4">
            Welcome to Kellon ("we," "our," "us"). Kellon is a cross-border
            payment and digital asset platform designed to help users send,
            receive, and swap crypto, access fiat payouts, and purchase
            tokenized assets globally — while maintaining full ownership of
            their private keys.
          </p>
          <p className="mb-4">
            Your privacy is important to us. This Privacy Policy explains how we
            collect, use, and protect your information when you use our website,
            mobile app, and related services (collectively, the "Services").
          </p>
          <div className="relative overflow-hidden bg-gradient-to-r from-primary-500/10 to-blue-500/10 border-l-4 border-primary-500 rounded-r-lg p-4 my-4 group">
            <div className="absolute inset-0 bg-gradient-to-r from-primary-500/0 via-primary-500/5 to-primary-500/0 opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
            <p className="font-medium text-primary-300 relative z-10">
              By using Kellon, you agree to this Privacy Policy.
            </p>
          </div>
        </>
      ),
      gradient: "from-blue-500/10 to-cyan-500/10",
      border: "border-blue-500/20",
      iconBg: "bg-gradient-to-br from-blue-500 to-cyan-500",
    },
    {
      icon: <Database className="w-6 h-6" />,
      title: "Information We Collect",
      content: (
        <>
          <p className="mb-4">
            We collect limited data to deliver and improve our services.
            Depending on how you use Kellon, we may collect:
          </p>

          <div className="mb-4">
            <h4 className="font-semibold text-white mb-2">
              a. Information You Provide
            </h4>
            <ul className="space-y-2 mb-4">
              {[
                "Contact details (e.g., name, email, phone number) when you sign up or contact support",
                "KYC information (if required by fiat on/off-ramp partners for compliance)",
                "Transaction details (amount, time, blockchain addresses) related to your use of Kellon",
              ].map((item, index) => (
                <li key={index} className="flex items-start gap-2">
                  <div className="w-1.5 h-1.5 rounded-full bg-primary-400 mt-1.5 flex-shrink-0"></div>
                  <span className="text-gray-300">{item}</span>
                </li>
              ))}
            </ul>
          </div>

          <div className="mb-4">
            <h4 className="font-semibold text-white mb-2">
              b. Automatically Collected Information
            </h4>
            <ul className="space-y-2 mb-4">
              {[
                "Device and usage data, such as IP address, browser type, OS, and interaction logs for analytics and security",
                "Cookies and similar technologies to improve performance and user experience on our website",
              ].map((item, index) => (
                <li key={index} className="flex items-start gap-2">
                  <div className="w-1.5 h-1.5 rounded-full bg-accent-400 mt-1.5 flex-shrink-0"></div>
                  <span className="text-gray-300">{item}</span>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h4 className="font-semibold text-white mb-2">
              c. Third-Party Information
            </h4>
            <ul className="space-y-2">
              {[
                "When using integrated services (e.g., Ramp, Transak, MoonPay), those providers may share verification or transaction status with us as needed for functionality and compliance",
              ].map((item, index) => (
                <li key={index} className="flex items-start gap-2">
                  <div className="w-1.5 h-1.5 rounded-full bg-purple-400 mt-1.5 flex-shrink-0"></div>
                  <span className="text-gray-300">{item}</span>
                </li>
              ))}
            </ul>
          </div>
        </>
      ),
      gradient: "from-green-500/10 to-emerald-500/10",
      border: "border-green-500/20",
      iconBg: "bg-gradient-to-br from-green-500 to-emerald-500",
    },
    {
      icon: <Key className="w-6 h-6" />,
      title: "Non-Custodial Wallet & User Control",
      content: (
        <>
          <div className="relative overflow-hidden bg-gradient-to-r from-primary-500/10 to-blue-500/10 border-l-4 border-primary-500 rounded-r-lg p-4 mb-4 group">
            <div className="absolute inset-0 bg-gradient-to-r from-primary-500/0 via-primary-500/5 to-primary-500/0 opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
            <p className="font-medium text-primary-300 relative z-10">
              <strong>Kellon is a non-custodial wallet</strong> — meaning you,
              and only you, control your private keys and assets.
            </p>
          </div>
          <p className="mb-4">
            We never store or access your private keys, seed phrases, or wallet
            balances. All transactions occur directly on-chain.
          </p>
          <div className="relative overflow-hidden bg-gradient-to-r from-red-500/10 to-orange-500/10 border-l-4 border-red-500 rounded-r-lg p-4 my-4 group">
            <div className="absolute inset-0 bg-gradient-to-r from-red-500/0 via-red-500/5 to-red-500/0 opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
            <p className="font-medium text-red-300 relative z-10">
              <strong>Important:</strong> Kellon will never ask for your private
              keys or recovery phrase. Protect them securely at all times.
            </p>
          </div>
        </>
      ),
      gradient: "from-amber-500/10 to-orange-500/10",
      border: "border-amber-500/20",
      iconBg: "bg-gradient-to-br from-amber-500 to-orange-500",
    },
    {
      icon: <Eye className="w-6 h-6" />,
      title: "How We Use Your Information",
      content: (
        <>
          <p className="mb-4">We use the limited data we collect to:</p>
          <ul className="space-y-3 mb-4">
            {[
              "Operate and improve Kellon's services and user experience",
              "Facilitate crypto-to-fiat and fiat-to-crypto transactions",
              "Verify identity (via third-party KYC providers when required)",
              "Detect and prevent fraud, abuse, or unauthorized activity",
              "Comply with legal obligations (AML, CFT, data protection)",
              "Provide customer support and respond to inquiries",
            ].map((item, index) => (
              <li key={index} className="flex items-start gap-3 group/item">
                <div className="w-2 h-2 rounded-full bg-accent-400 mt-2 flex-shrink-0 group-hover/item:scale-150 transition-transform duration-300"></div>
                <span className="group-hover/item:text-white transition-colors duration-300">
                  {item}
                </span>
              </li>
            ))}
          </ul>
        </>
      ),
      gradient: "from-indigo-500/10 to-blue-500/10",
      border: "border-indigo-500/20",
      iconBg: "bg-gradient-to-br from-indigo-500 to-blue-500",
    },
    {
      icon: <Share2 className="w-6 h-6" />,
      title: "Sharing of Information",
      content: (
        <>
          <div className="relative overflow-hidden bg-gradient-to-r from-accent-500/10 to-primary-500/10 border-l-4 border-accent-500 rounded-r-lg p-4 mb-4 group">
            <div className="absolute inset-0 bg-gradient-to-r from-accent-500/0 via-accent-500/5 to-accent-500/0 opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
            <p className="font-medium text-accent-300 relative z-10">
              We do not sell or rent your personal data.
            </p>
          </div>
          <p className="mb-4">We may share limited information with:</p>
          <ul className="space-y-3 mb-4">
            {[
              "Regulated financial partners (e.g., on/off-ramp providers) for transaction processing",
              "Compliance providers for KYC/AML verification",
              "Analytics and infrastructure providers (e.g., hosting, security, error tracking) under strict confidentiality",
              "Regulators or law enforcement when legally required",
            ].map((item, index) => (
              <li key={index} className="flex items-start gap-3 group/item">
                <div className="w-2 h-2 rounded-full bg-primary-400 mt-2 flex-shrink-0 group-hover/item:scale-150 transition-transform duration-300"></div>
                <span className="group-hover/item:text-white transition-colors duration-300">
                  {item}
                </span>
              </li>
            ))}
          </ul>
          <p className="text-sm text-gray-400">
            All third parties are bound by confidentiality and data protection
            obligations.
          </p>
        </>
      ),
      gradient: "from-purple-500/10 to-pink-500/10",
      border: "border-purple-500/20",
      iconBg: "bg-gradient-to-br from-purple-500 to-pink-500",
    },
    {
      icon: <ShieldCheck className="w-6 h-6" />,
      title: "Data Security",
      content: (
        <>
          <p className="mb-4">
            We employ industry-standard security measures, including encryption,
            secure servers, and limited data access.
          </p>
          <p className="mb-4">
            However, since blockchain transactions are public, information tied
            to your wallet address may be visible on-chain.
          </p>
          <div className="relative overflow-hidden bg-gradient-to-r from-red-500/10 to-orange-500/10 border-l-4 border-red-500 rounded-r-lg p-4 my-4 group">
            <div className="absolute inset-0 bg-gradient-to-r from-red-500/0 via-red-500/5 to-red-500/0 opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
            <p className="font-medium text-red-300 relative z-10">
              <strong>Important:</strong> Kellon will never ask for your private
              keys or recovery phrase. Protect them securely at all times.
            </p>
          </div>
        </>
      ),
      gradient: "from-red-500/10 to-pink-500/10",
      border: "border-red-500/20",
      iconBg: "bg-gradient-to-br from-red-500 to-pink-500",
    },
    {
      icon: <Clock className="w-6 h-6" />,
      title: "Data Retention",
      content: (
        <>
          <p className="mb-4">
            We retain personal data only as long as necessary to fulfill the
            purposes stated in this Policy or as required by law.
          </p>
          <p className="mb-4">
            Blockchain transaction data is immutable and permanently stored on
            the blockchain.
          </p>
        </>
      ),
      gradient: "from-gray-500/10 to-slate-500/10",
      border: "border-gray-500/20",
      iconBg: "bg-gradient-to-br from-gray-500 to-slate-500",
    },
    {
      icon: <UserCheck className="w-6 h-6" />,
      title: "Your Rights",
      content: (
        <>
          <p className="mb-4">
            Depending on your jurisdiction, you may have the right to:
          </p>
          <ul className="space-y-3 mb-4">
            {[
              "Access, correct, or delete your personal information",
              "Withdraw consent where applicable",
              "Request data portability",
              "Lodge a complaint with a data protection authority",
            ].map((item, index) => (
              <li key={index} className="flex items-start gap-3 group/item">
                <div className="w-2 h-2 rounded-full bg-primary-400 mt-2 flex-shrink-0 group-hover/item:scale-150 transition-transform duration-300"></div>
                <span className="group-hover/item:text-white transition-colors duration-300">
                  {item}
                </span>
              </li>
            ))}
          </ul>
          <p className="text-accent-300">
            You can contact us to exercise these rights — see contact
            information in the footer below.
          </p>
        </>
      ),
      gradient: "from-cyan-500/10 to-blue-500/10",
      border: "border-cyan-500/20",
      iconBg: "bg-gradient-to-br from-cyan-500 to-blue-500",
    },
    {
      icon: <Globe className="w-6 h-6" />,
      title: "International Transfers",
      content: (
        <>
          <p className="mb-4">
            As a global platform, your data may be processed in multiple
            jurisdictions.
          </p>
          <p className="mb-4">
            We ensure all transfers comply with applicable data protection laws
            and use appropriate safeguards.
          </p>
        </>
      ),
      gradient: "from-violet-500/10 to-purple-500/10",
      border: "border-violet-500/20",
      iconBg: "bg-gradient-to-br from-violet-500 to-purple-500",
    },
    {
      icon: <Link className="w-6 h-6" />,
      title: "Third-Party Links",
      content: (
        <>
          <p className="mb-4">
            Our website and app may link to external services (e.g., payment
            partners, exchanges).
          </p>
          <p className="mb-4">
            We are not responsible for their privacy practices. Review their
            policies before sharing personal data.
          </p>
        </>
      ),
      gradient: "from-orange-500/10 to-amber-500/10",
      border: "border-orange-500/20",
      iconBg: "bg-gradient-to-br from-orange-500 to-amber-500",
    },
    {
      icon: <FileText className="w-6 h-6" />,
      title: "Updates to This Policy",
      content: (
        <>
          <p className="mb-4">
            We may update this Privacy Policy periodically to reflect legal,
            technical, or business changes.
          </p>
          <p className="mb-4">
            Updates will be posted here with a revised "Last updated" date.
          </p>
        </>
      ),
      gradient: "from-blue-500/10 to-indigo-500/10",
      border: "border-blue-500/20",
      iconBg: "bg-gradient-to-br from-blue-500 to-indigo-500",
    },
  ]

  return (
    <LegalPageLayout
      badge="Privacy Policy"
      badgeIcon={<Shield className="h-4 w-4" />}
      title="Your Privacy"
      accentTitle="& Data Protection"
      description="How we collect, use, and protect your information when using Kellon's services."
      updatedAt="03/10/2025"
      sections={privacySections}
      finalIcon={<Lock className="h-7 w-7" />}
      finalTitle="Protecting Your Privacy"
      finalBody="Your privacy is fundamental to Kellon's non-custodial approach. We are committed to transparency and protecting your personal information."
      contactLabel="Questions about privacy?"
    />
  )
}

export default PrivacyPolicy
