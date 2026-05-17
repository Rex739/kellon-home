import React, { useEffect } from "react"
import { Shield, AlertTriangle, FileText, Lock, Globe, Zap } from "lucide-react"
import LegalPageLayout from "./LegalPageLayout"

const Disclaimer = () => {
  useEffect(() => {
    window.scrollTo(0, 0)
  }, [])

  const disclaimerSections = [
    {
      icon: <Shield className="w-6 h-6" />,
      title: "General Information",
      content: (
        <>
          <p className="mb-4">
            Kellon is a non-custodial, blockchain-based payment and digital
            asset platform developed by Kellon Digital Asset Management Limited.
            Our app enables users to send, receive, and swap cryptocurrencies,
            convert between crypto and fiat using regulated partners, and trade
            tokenized assets across supported markets.
          </p>
          <div className="relative overflow-hidden bg-gradient-to-r from-accent-500/10 to-primary-500/10 border-l-4 border-accent-500 rounded-r-lg p-4 my-4 group">
            <div className="absolute inset-0 bg-gradient-to-r from-accent-500/0 via-accent-500/5 to-accent-500/0 opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
            <p className="font-medium text-accent-300 relative z-10">
              Kellon is not a bank, exchange, or financial institution. We do
              not hold user funds, custody assets, or provide financial advice
              of any kind.
            </p>
          </div>
        </>
      ),
      gradient: "from-blue-500/10 to-cyan-500/10",
      border: "border-blue-500/20",
      iconBg: "bg-gradient-to-br from-blue-500 to-cyan-500",
    },
    {
      icon: <AlertTriangle className="w-6 h-6" />,
      title: "No Financial or Investment Advice",
      content: (
        <>
          <p className="mb-4">
            All content on the Kellon website, app, and communications is for
            informational purposes only.
          </p>
          <p className="mb-4">
            Nothing provided by Kellon should be interpreted as:
          </p>
          <ul className="space-y-3 mb-4">
            {[
              "Financial or investment advice",
              "Legal or tax guidance",
              "A guarantee of returns or asset stability",
            ].map((item, index) => (
              <li key={index} className="flex items-start gap-3 group/item">
                <div className="w-2 h-2 rounded-full bg-primary-400 mt-2 flex-shrink-0 group-hover/item:scale-150 transition-transform duration-300"></div>
                <span className="group-hover/item:text-white transition-colors duration-300">
                  {item}
                </span>
              </li>
            ))}
          </ul>
          <div className="relative overflow-hidden bg-gradient-to-r from-primary-500/10 to-purple-500/10 border-l-4 border-primary-500 rounded-r-lg p-4 my-4 group">
            <div className="absolute inset-0 bg-gradient-to-r from-primary-500/0 via-primary-500/5 to-primary-500/0 opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
            <p className="font-medium text-primary-300 relative z-10">
              You are solely responsible for evaluating and managing the risks
              associated with your use of cryptocurrencies and digital assets.
            </p>
          </div>
        </>
      ),
      gradient: "from-yellow-500/10 to-orange-500/10",
      border: "border-yellow-500/20",
      iconBg: "bg-gradient-to-br from-yellow-500 to-orange-500",
    },
    {
      icon: <Lock className="w-6 h-6" />,
      title: "Non-Custodial Responsibility",
      content: (
        <>
          <div className="relative overflow-hidden bg-gradient-to-r from-primary-500/10 to-blue-500/10 border-l-4 border-primary-500 rounded-r-lg p-4 mb-4 group">
            <div className="absolute inset-0 bg-gradient-to-r from-primary-500/0 via-primary-500/5 to-primary-500/0 opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
            <p className="font-medium text-primary-300 relative z-10">
              <strong>Kellon is non-custodial</strong> — meaning you fully
              control your wallet, private keys, and recovery phrases.
            </p>
          </div>
          <p className="mb-4">
            We never store, access, or recover your keys or funds.
          </p>
          <div className="relative overflow-hidden bg-gradient-to-r from-red-500/10 to-orange-500/10 border-l-4 border-red-500 rounded-r-lg p-4 my-4 group">
            <div className="absolute inset-0 bg-gradient-to-r from-red-500/0 via-red-500/5 to-red-500/0 opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
            <p className="font-medium text-red-300 relative z-10">
              If you lose your private key or seed phrase, we cannot help you
              recover access to your wallet or assets.
            </p>
          </div>
          <p className="font-medium text-accent-300 mb-4">
            You are responsible for keeping your credentials secure and backing
            up your recovery phrase safely.
          </p>
        </>
      ),
      gradient: "from-red-500/10 to-pink-500/10",
      border: "border-red-500/20",
      iconBg: "bg-gradient-to-br from-red-500 to-pink-500",
    },
    {
      icon: <Zap className="w-6 h-6" />,
      title: "Market and Transaction Risks",
      content: (
        <>
          <p className="mb-4">
            Cryptocurrency and tokenized assets involve high volatility and
            potential loss of value.
          </p>
          <p className="mb-4">
            Transactions on blockchain networks are irreversible and may be
            affected by:
          </p>
          <ul className="space-y-3 mb-4">
            {[
              "Network congestion or errors",
              "Smart contract vulnerabilities",
              "Third-party service downtime",
              "Exchange rate fluctuations",
              "Regulatory or compliance actions",
            ].map((item, index) => (
              <li key={index} className="flex items-start gap-3 group/item">
                <div className="w-2 h-2 rounded-full bg-accent-400 mt-2 flex-shrink-0 group-hover/item:scale-150 transition-transform duration-300"></div>
                <span className="group-hover/item:text-white transition-colors duration-300">
                  {item}
                </span>
              </li>
            ))}
          </ul>
          <div className="relative overflow-hidden bg-gradient-to-r from-red-500/10 to-pink-500/10 border-l-4 border-red-500 rounded-r-lg p-4 my-4 group">
            <div className="absolute inset-0 bg-gradient-to-r from-red-500/0 via-red-500/5 to-red-500/0 opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
            <p className="font-medium text-red-300 relative z-10">
              By using Kellon, you accept full responsibility for any risk or
              loss resulting from blockchain or market activity.
            </p>
          </div>
        </>
      ),
      gradient: "from-purple-500/10 to-pink-500/10",
      border: "border-purple-500/20",
      iconBg: "bg-gradient-to-br from-purple-500 to-pink-500",
    },
    {
      icon: <Globe className="w-6 h-6" />,
      title: "Regulatory Compliance",
      content: (
        <>
          <p className="mb-4">
            Kellon operates globally but is not available in all jurisdictions.
          </p>
          <p className="mb-4">
            Users are responsible for ensuring their activities comply with
            local laws and regulations, including tax reporting and cross-border
            transfer restrictions.
          </p>
          <div className="relative overflow-hidden bg-gradient-to-r from-accent-500/10 to-primary-500/10 border-l-4 border-accent-500 rounded-r-lg p-4 my-4 group">
            <div className="absolute inset-0 bg-gradient-to-r from-accent-500/0 via-accent-500/5 to-accent-500/0 opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
            <p className="font-medium text-accent-300 relative z-10">
              We may restrict access to certain regions where crypto
              transactions or fiat conversions are prohibited or limited by law.
            </p>
          </div>
        </>
      ),
      gradient: "from-green-500/10 to-emerald-500/10",
      border: "border-green-500/20",
      iconBg: "bg-gradient-to-br from-green-500 to-emerald-500",
    },
  ]

  return (
    <LegalPageLayout
      badge="Legal Disclaimer"
      badgeIcon={<FileText className="h-4 w-4" />}
      title="Important"
      accentTitle="Legal Information"
      description="Please read this disclaimer carefully before using Kellon's services. Your use of our platform constitutes acceptance of these terms."
      updatedAt="03/10/2025"
      sections={disclaimerSections}
      finalIcon={<AlertTriangle className="h-7 w-7" />}
      finalTitle="Important Notice"
      finalBody="By using Kellon's services, you acknowledge and accept all terms outlined in this disclaimer. Always conduct your own research and consult with financial professionals when needed."
      contactLabel="Questions about disclaimer?"
    />
  )
}

export default Disclaimer
