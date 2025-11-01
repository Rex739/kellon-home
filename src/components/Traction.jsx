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

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
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
      </div>
    </section>
  )
}

export default Traction