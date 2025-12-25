import React from "react"
import {
  CheckCircle,
  Users,
  Rocket,
  ArrowRight,
  Calendar,
  Globe,
} from "lucide-react"

const About = () => {
  const scrollToWaitlist = () => {
    const footer = document.querySelector("footer")
    if (footer) {
      footer.scrollIntoView({ behavior: "smooth" })
      setTimeout(() => {
        const input = footer.querySelector('input[type="email"]')
        // @ts-ignore
        input?.focus()
      }, 500)
    }
  }

  const milestones = [
    { icon: Calendar, number: "2025", label: "Founded" },
    { icon: Globe, number: "10", label: "Countries" },
  ]

  const values = [
    {
      icon: CheckCircle,
      title: "Security First",
      desc: "Bank-grade encryption and protection.",
    },
    {
      icon: Users,
      title: "People Focused",
      desc: "Built for global access and simplicity.",
    },
  ]

  return (
    <section
      id="about"
      className="relative bg-primary-900 py-24 px-4 overflow-hidden"
    >
      {/* Background Glow (Rebalanced) */}
      <div className="absolute inset-0 opacity-25 pointer-events-none">
        <div className="absolute top-48 left-16 w-60 h-60 bg-accent-500/20 blur-3xl rounded-full" />
        <div className="absolute bottom-48 right-16 w-60 h-60 bg-primary-500/20 blur-3xl rounded-full" />
      </div>

      <div className="max-w-5xl mx-auto relative z-10">
        {/* Header */}
        <div className="text-center mb-20">
          <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full border border-accent-500/20 bg-accent-500/10 mb-4">
            <Rocket className="w-4 h-4 text-accent-300" />
            <span className="text-sm text-accent-300">About Us</span>
          </div>

          <h2 className="text-4xl sm:text-5xl font-bold text-white mb-4 leading-tight">
            The Future of{" "}
            <span className="bg-gradient-to-r from-accent-400 to-primary-800 bg-clip-text text-transparent">
              Borderless Finance
            </span>
          </h2>

          <p className="text-gray-300 max-w-xl mx-auto text-lg">
            We're building a global financial system that works for everyone.
          </p>
        </div>

        {/* Two Column Section */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-20 mb-28">
          {/* Left Column */}
          <div className="space-y-12">
            <div>
              <h3 className="text-2xl font-bold text-white mb-3">
                Our Mission
              </h3>
              <p className="text-gray-300 leading-relaxed">
                To make global financial tools accessible to anyone, anywhere,
                without barriers or complexity.
              </p>
            </div>

            <div>
              <h3 className="text-2xl font-bold text-white mb-3">Our Vision</h3>
              <p className="text-gray-300 leading-relaxed">
                A single super-app for payments, investing, and wealth — all
                borderless and instant.
              </p>
            </div>

            {/* Milestones */}
            <div className="grid grid-cols-2 gap-6 pt-4">
              {milestones.map((m, i) => (
                <div
                  key={i}
                  className="p-5 text-center bg-white/5 rounded-2xl border border-white/10"
                >
                  <div className="w-12 h-12 bg-gradient-to-br from-accent-500 to-primary-800 rounded-xl flex items-center justify-center mx-auto mb-3">
                    <m.icon className="w-6 h-6 text-white" />
                  </div>
                  <div className="text-xl font-bold text-white">{m.number}</div>
                  <div className="text-gray-400 text-sm">{m.label}</div>
                </div>
              ))}
            </div>
          </div>

          {/* Right CTA */}
          <div className="lg:sticky lg:top-28">
            <div className="p-8 bg-white/5 border border-white/10 rounded-3xl backdrop-blur-xl">
              <div className="text-center">
                <div className="w-20 h-20 bg-gradient-to-r from-accent-500 to-primary-800 rounded-2xl flex items-center justify-center mx-auto mb-6">
                  <Rocket className="w-10 h-10 text-white" />
                </div>

                <h3 className="text-2xl font-bold text-white mb-4">
                  Join the Movement
                </h3>

                <p className="text-gray-300 mb-6">
                  Be part of the first users shaping the future of global
                  finance.
                </p>

                <button
                  onClick={scrollToWaitlist}
                  className="w-full py-4 bg-gradient-to-r from-accent-500 to-primary-800 rounded-2xl text-white text-sm font-semibold flex items-center justify-center gap-3 hover:scale-105 transition-all"
                >
                  Join Waitlist <ArrowRight className="w-5 h-5" />
                </button>

                <p className="text-gray-400 text-sm mt-4">5,000+ already in</p>
              </div>
            </div>
          </div>
        </div>

        {/* Values */}
        <div className="text-center mb-12">
          <h3 className="text-3xl font-bold text-white mb-4">What Drives Us</h3>
          <p className="text-gray-300 max-w-xl mx-auto">
            Two core principles shape everything we build.
          </p>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 gap-8">
          {values.map((v, i) => (
            <div
              key={i}
              className="p-6 bg-white/5 rounded-2xl border border-white/10 hover:border-white/20 transition-all"
            >
              <div className="w-14 h-14 bg-gradient-to-r from-accent-500 to-primary-800 rounded-xl flex items-center justify-center mb-4">
                <v.icon className="w-7 h-7 text-white" />
              </div>

              <h4 className="text-lg font-semibold text-white mb-1">
                {v.title}
              </h4>
              <p className="text-gray-300 text-sm">{v.desc}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}

export default About
