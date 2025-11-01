import React, { useState } from 'react'
import { CheckCircle, Users, Award, Rocket } from 'lucide-react'
import WaitlistModal from './WaitlistModal'

const About = () => {
  const [isWaitlistOpen, setIsWaitlistOpen] = useState(false)

  const openWaitlist = () => {
    setIsWaitlistOpen(true)
  }

  const closeWaitlist = () => {
    setIsWaitlistOpen(false)
  }

  const stats = [
    { number: "2024", label: "Founded" },
    { number: "25K+", label: "Beta Users" },
    { number: "150+", label: "Countries" },
    { number: "24/7", label: "Support" }
  ]

  const values = [
    {
      icon: CheckCircle,
      title: "Security First",
      description: "We prioritize the security of your digital assets above all else with industry-leading protection."
    },
    {
      icon: Users,
      title: "User-Centric",
      description: "Every feature is designed with our users in mind, ensuring an intuitive and seamless experience."
    },
    {
      icon: Award,
      title: "Innovation",
      description: "We continuously innovate to bring you the latest advancements in cryptocurrency technology."
    },
    {
      icon: Rocket,
      title: "Growth",
      description: "We're committed to growing the crypto ecosystem and helping users achieve financial freedom."
    }
  ]

  return (
    <section id="about" className="py-20 px-4 sm:px-6 lg:px-8">
      <div className="max-w-7xl mx-auto">
        {/* About Section */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center mb-20">
          <div>
            <h2 className="text-3xl sm:text-4xl font-bold text-white mb-6">
              About <span className="gradient-text">Kellon Mobile</span>
            </h2>
            <p className="text-gray-300 text-lg mb-6 leading-relaxed">
              Kellon Mobile is revolutionizing the global financial landscape by eliminating borders 
              in payments and investments. Our mission is to create a world where anyone, anywhere, 
              can access financial services without geographical limitations or traditional banking barriers.
            </p>
            <p className="text-gray-300 text-lg mb-8 leading-relaxed">
              We're building more than just a mobile wallet – we're creating a comprehensive financial 
              ecosystem that combines borderless payments, global investment opportunities, and seamless 
              crypto management in one unified platform that fits in your pocket.
            </p>
            
            {/* Stats */}
            <div className="grid grid-cols-2 gap-8">
              {stats.map((stat, index) => (
                <div key={index} className="text-center lg:text-left">
                  <div className="text-2xl font-bold text-white mb-1">{stat.number}</div>
                  <div className="text-gray-400">{stat.label}</div>
                </div>
              ))}
            </div>
          </div>

          <div className="relative">
            {/* Placeholder for app mockup or illustration */}
            <div className="bg-gradient-to-br from-primary-600/20 to-accent-600/20 rounded-3xl p-8 border border-white/10 backdrop-blur-sm">
              <div className="text-center">
                <div className="w-20 h-20 bg-gradient-to-r from-primary-500 to-accent-500 rounded-2xl flex items-center justify-center mx-auto mb-6">
                  <Rocket className="w-10 h-10 text-white" />
                </div>
                <h3 className="text-xl font-semibold text-white mb-4">
                  Join the Crypto Revolution
                </h3>
                <p className="text-gray-300 mb-6">
                  Be part of the financial future with Kellon's innovative crypto solutions.
                </p>
                <button className="btn-primary w-full" onClick={openWaitlist}>
                  Join Waitlist
                </button>
              </div>
            </div>
          </div>
        </div>

        {/* Values Section */}
        <div className="text-center mb-12">
          <h3 className="text-2xl sm:text-3xl font-bold text-white mb-4">
            Our Core Values
          </h3>
          <p className="text-gray-300 max-w-2xl mx-auto">
            These principles guide everything we do at Kellon, from product development to customer support.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {values.map((value, index) => {
            const IconComponent = value.icon
            return (
              <div key={index} className="card text-center">
                <div className="w-14 h-14 bg-gradient-to-r from-primary-500 to-accent-500 rounded-xl flex items-center justify-center mx-auto mb-4">
                  <IconComponent className="w-7 h-7 text-white" />
                </div>
                <h4 className="text-lg font-semibold text-white mb-3">
                  {value.title}
                </h4>
                <p className="text-gray-400 text-sm leading-relaxed">
                  {value.description}
                </p>
              </div>
            )
          })}
        </div>
      </div>

      {/* Waitlist Modal */}
      <WaitlistModal isOpen={isWaitlistOpen} onClose={closeWaitlist} />
    </section>
  )
}

export default About