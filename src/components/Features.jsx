import React from 'react'
import { 
  CreditCard, 
  RefreshCcw, 
  Send, 
  Download,
  Smartphone,
  Shield,
  Zap,
  Globe,
  TrendingUp
} from 'lucide-react'

const Features = () => {
  const features = [
    {
      icon: CreditCard,
      title: "Borderless Fiat to Crypto",
      description: "Purchase cryptocurrencies instantly from anywhere in the world using local payment methods with competitive global rates.",
      color: "text-accent-400"
    },
    {
      icon: RefreshCcw,
      title: "Crypto to Crypto Swap",
      description: "Seamlessly swap between different cryptocurrencies with our integrated DEX aggregator for best rates.",
      color: "text-primary-400"
    },
    {
      icon: Send,
      title: "Convert Crypto to Fiat",
      description: "Convert and send cryptocurrencies to fiat currency across any border instantly - enabling seamless crypto-to-cash transfers with minimal fees.",
      color: "text-accent-500"
    },
    {
      icon: CreditCard,
      title: "Global Investment",
      description: "Access real-world asset investments including stocks (NGX and global exchanges), real estate, commodities, and tokenized assets, all from your mobile app.",
      color: "text-primary-500"
    },
    {
      icon: Download,
      title: "Wallet Export",
      description: "Maintain full control with secure wallet export and backup options for ultimate peace of mind.",
      color: "text-accent-600"
    },
    {
      icon: Smartphone,
      title: "Mobile Optimized",
      description: "Access your crypto portfolio anytime, anywhere with our responsive mobile-first design.",
      color: "text-primary-600"
    }
  ]

  const benefits = [
    {
      icon: Shield,
      title: "Enterprise Security",
      description: "Multi-signature wallets, cold storage, and advanced encryption protect your assets."
    },
    {
      icon: Zap,
      title: "Lightning Fast",
      description: "Experience instant transactions with our optimized blockchain infrastructure."
    },
    {
      icon: Globe,
      title: "Global Access",
      description: "Available worldwide with support for 150+ countries and multiple languages."
    },
    {
      icon: TrendingUp,
      title: "Best Rates",
      description: "Get the most competitive exchange rates through our smart routing system."
    }
  ]

  return (
    <section id="features" className="py-20 px-4 sm:px-6 lg:px-8">
      <div className="max-w-7xl mx-auto">
        {/* Section Header */}
        <div className="text-center mb-16">
          <h2 className="text-3xl sm:text-4xl font-bold text-white mb-4">
            Break Financial Borders with
            <span className="gradient-text"> One Mobile Wallet</span>
          </h2>
          <p className="text-xl text-gray-300 max-w-3xl mx-auto">
            Kellon Mobile eliminates geographical barriers in finance, offering borderless payments and global investment opportunities.
          </p>
        </div>

        {/* Main Features Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mb-20">
          {features.map((feature, index) => {
            const IconComponent = feature.icon
            return (
              <div key={index} className="card group">
                <div className={`w-14 h-14 ${feature.color} bg-current/10 rounded-xl flex items-center justify-center mb-4 group-hover:scale-110 transition-transform duration-300`}>
                  <IconComponent className={`w-7 h-7 ${feature.color}`} />
                </div>
                <h3 className="text-xl font-semibold text-white mb-3">
                  {feature.title}
                </h3>
                <p className="text-gray-400 leading-relaxed">
                  {feature.description}
                </p>
              </div>
            )
          })}
        </div>

        {/* Benefits Section */}
        <div className="bg-gradient-to-r from-primary-900/20 to-accent-900/20 rounded-3xl p-8 lg:p-12 border border-white/10">
          <div className="text-center mb-12">
            <h3 className="text-2xl sm:text-3xl font-bold text-white mb-4">
              Why Choose Kellon?
            </h3>
            <p className="text-gray-300 max-w-2xl mx-auto">
              Built by crypto experts for crypto enthusiasts. Experience the next generation of digital asset management.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {benefits.map((benefit, index) => {
              const IconComponent = benefit.icon
              return (
                <div key={index} className="text-center">
                  <div className="w-16 h-16 bg-gradient-to-r from-primary-500 to-accent-500 rounded-2xl flex items-center justify-center mx-auto mb-4">
                    <IconComponent className="w-8 h-8 text-white" />
                  </div>
                  <h4 className="text-lg font-semibold text-white mb-2">
                    {benefit.title}
                  </h4>
                  <p className="text-gray-400 text-sm">
                    {benefit.description}
                  </p>
                </div>
              )
            })}
          </div>
        </div>
      </div>
    </section>
  )
}

export default Features