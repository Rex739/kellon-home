import React from 'react'
import { TrendingUp, Users, Globe, Shield, Zap, Award } from 'lucide-react'

const MarketOpportunity = () => {
  const marketStats = [
    {
      icon: TrendingUp,
      number: "$2.3T",
      label: "Global Crypto Market Cap",
      description: "Growing at 85% CAGR"
    },
    {
      icon: Users,
      number: "425M",
      label: "Global Crypto Users",
      description: "Expected to reach 1B by 2025"
    },
    {
      icon: Globe,
      number: "18K+",
      label: "Cryptocurrencies",
      description: "Across 400+ exchanges"
    }
  ]

  const advantages = [
    {
      icon: Shield,
      title: "Multi-Layer Security",
      description: "Bank-grade encryption, multi-signature wallets, and cold storage protection"
    },
    {
      icon: Zap,
      title: "Lightning Speed",
      description: "Sub-second transactions with our optimized blockchain infrastructure"
    },
    {
      icon: Award,
      title: "Regulatory Compliant",
      description: "Licensed in 150+ jurisdictions with full KYC/AML compliance"
    }
  ]

  return (
    <section className="py-20 px-4 sm:px-6 lg:px-8 bg-gradient-to-b from-transparent to-primary-800/50">
      <div className="max-w-7xl mx-auto">
        {/* Market Opportunity */}
        <div className="text-center mb-16">
          <h2 className="text-3xl sm:text-4xl font-bold text-white mb-4">
            Massive Market
            <span className="gradient-text"> Opportunity</span>
          </h2>
          <p className="text-xl text-gray-300 max-w-3xl mx-auto mb-12">
            The cryptocurrency market is experiencing unprecedented growth, creating enormous opportunities 
            for innovative solutions like Kellon.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-20">
          {marketStats.map((stat, index) => {
            const IconComponent = stat.icon
            return (
              <div key={index} className="card text-center">
                <div className="w-16 h-16 bg-gradient-to-r from-primary-500 to-accent-500 rounded-2xl flex items-center justify-center mx-auto mb-4">
                  <IconComponent className="w-8 h-8 text-white" />
                </div>
                <div className="text-3xl font-bold text-white mb-2">{stat.number}</div>
                <div className="text-lg font-semibold text-gray-200 mb-2">{stat.label}</div>
                <div className="text-gray-400 text-sm">{stat.description}</div>
              </div>
            )
          })}
        </div>

        {/* Competitive Advantages */}
        <div className="text-center mb-12">
          <h3 className="text-2xl sm:text-3xl font-bold text-white mb-4">
            Our Competitive Edge
          </h3>
          <p className="text-gray-300 max-w-2xl mx-auto">
            Kellon's unique combination of security, speed, and user experience sets us apart 
            in the crowded crypto wallet space.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {advantages.map((advantage, index) => {
            const IconComponent = advantage.icon
            return (
              <div key={index} className="bg-gradient-to-br from-primary-900/20 to-accent-900/20 rounded-2xl p-6 border border-white/10">
                <div className="w-12 h-12 bg-gradient-to-r from-primary-500 to-accent-500 rounded-xl flex items-center justify-center mb-4">
                  <IconComponent className="w-6 h-6 text-white" />
                </div>
                <h4 className="text-xl font-semibold text-white mb-3">
                  {advantage.title}
                </h4>
                <p className="text-gray-400 leading-relaxed">
                  {advantage.description}
                </p>
              </div>
            )
          })}
        </div>
      </div>
    </section>
  )
}

export default MarketOpportunity