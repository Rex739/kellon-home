import React from 'react'
import { DollarSign, Users, TrendingUp, Target } from 'lucide-react'

const Traction = () => {
  const metrics = [
    {
      icon: Users,
      metric: "5,000+",
      label: "Waitlist Signups",
      growth: "Growing Daily",
      color: "text-primary-400"
    },
    {
      icon: DollarSign,
      metric: "99.9%",
      label: "Security Score",
      growth: "Bank-Grade",
      color: "text-accent-400"
    },
    {
      icon: TrendingUp,
      metric: "150+",
      label: "Cryptocurrencies",
      growth: "Supported",
      color: "text-primary-500"
    },
    {
      icon: Target,
      metric: "50+",
      label: "Target Countries",
      growth: "Launch Ready",
      color: "text-accent-500"
    }
  ]

  const roadmap = [
    {
      quarter: "Q4 2024",
      milestone: "MVP Development",
      status: "completed",
      description: "Core platform development and security audits"
    },
    {
      quarter: "Q1 2025",
      milestone: "Beta Testing",
      status: "current",
      description: "Closed beta with select users and partners"
    },
    {
      quarter: "Q2 2025",
      milestone: "Public Launch",
      status: "upcoming",
      description: "Full platform launch with core features"
    },
    {
      quarter: "Q3 2025",
      milestone: "Global Expansion",
      status: "upcoming",
      description: "DeFi integration and market expansion"
    }
  ]

  return (
    <section className="py-20 px-4 sm:px-6 lg:px-8">
      <div className="max-w-7xl mx-auto">
        {/* Traction Metrics */}
        <div className="text-center mb-16">
          <h2 className="text-3xl sm:text-4xl font-bold text-white mb-4">
            Building
            <span className="gradient-text"> Momentum</span>
          </h2>
          <p className="text-xl text-gray-300 max-w-3xl mx-auto">
            Strong pre-launch indicators show growing market demand and investor confidence in our vision.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 mb-20">
          {metrics.map((item, index) => {
            const IconComponent = item.icon
            return (
              <div key={index} className="card text-center">
                <div className={`w-14 h-14 ${item.color} bg-current/10 rounded-xl flex items-center justify-center mx-auto mb-4`}>
                  <IconComponent className={`w-7 h-7 ${item.color}`} />
                </div>
                <div className="text-2xl font-bold text-white mb-1">{item.metric}</div>
                <div className="text-gray-300 mb-2">{item.label}</div>
                <div className={`text-sm font-medium ${item.color}`}>{item.growth}</div>
              </div>
            )
          })}
        </div>

        {/* Roadmap */}
        <div className="text-center mb-12">
          <h3 className="text-2xl sm:text-3xl font-bold text-white mb-4">
            Product Roadmap
          </h3>
          <p className="text-gray-300 max-w-2xl mx-auto">
            Our strategic roadmap focuses on continuous innovation and market expansion.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {roadmap.map((item, index) => (
            <div key={index} className="relative">
              <div className={`card ${item.status === 'completed' ? 'border-green-500/50 bg-green-900/10' : 
                item.status === 'current' ? 'border-primary-500/50 bg-primary-900/10' : 
                'border-gray-500/30 bg-gray-900/10'}`}>
                
                <div className="flex items-center justify-between mb-3">
                  <span className="text-sm font-medium text-gray-400">{item.quarter}</span>
                  <div className={`w-3 h-3 rounded-full ${
                    item.status === 'completed' ? 'bg-green-500' : 
                    item.status === 'current' ? 'bg-primary-500' : 
                    'bg-gray-500'
                  }`}></div>
                </div>
                
                <h4 className="text-lg font-semibold text-white mb-2">
                  {item.milestone}
                </h4>
                <p className="text-gray-400 text-sm">
                  {item.description}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}

export default Traction