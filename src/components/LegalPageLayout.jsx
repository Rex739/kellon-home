import React from "react"
import { ArrowDown, ArrowLeft, FileText } from "lucide-react"
import { useNavigate } from "react-router-dom"
import Header from "./Header"
import Footer from "./Footer"

export default function LegalPageLayout({
  badge,
  badgeIcon,
  title,
  accentTitle,
  description,
  updatedAt,
  sections,
  finalIcon,
  finalTitle,
  finalBody,
  contactLabel,
}) {
  const navigate = useNavigate()

  return (
    <div className="relative min-h-screen overflow-hidden bg-primary-900 text-white font-manrope">
      <div className="pointer-events-none absolute inset-0 z-0">
        <div className="absolute inset-0 bg-[linear-gradient(rgba(255,255,255,0.028)_1px,transparent_1px),linear-gradient(90deg,rgba(255,255,255,0.028)_1px,transparent_1px)] bg-[size:56px_56px] opacity-60" />
        <div className="absolute right-[-10%] top-[-12%] h-[520px] w-[520px] rounded-full bg-accent-500/10 blur-[120px]" />
        <div className="absolute bottom-[10%] left-[-14%] h-[520px] w-[520px] rounded-full bg-blue-500/10 blur-[120px]" />
        <div className="absolute inset-x-0 top-0 h-80 bg-gradient-to-b from-primary-950/80 to-transparent" />
      </div>

      <Header />

      <main className="relative z-10 px-4 pb-20 pt-28 sm:px-6 sm:pt-32 lg:px-8">
        <div className="mx-auto max-w-7xl">
          <button
            onClick={() => navigate("/")}
            className="group mb-12 inline-flex items-center gap-2 rounded-full border border-white/10 bg-white/[0.04] px-4 py-2 text-sm font-bold text-gray-300 backdrop-blur-md transition hover:border-accent-500/40 hover:text-white"
          >
            <ArrowLeft className="h-4 w-4 transition-transform group-hover:-translate-x-1" />
            Back to Home
          </button>

          <section className="grid gap-10 border-b border-white/10 pb-12 lg:grid-cols-[0.92fr_1.08fr] lg:items-end lg:pb-16">
            <div>
              <div className="mb-6 inline-flex items-center gap-2 rounded-full border border-accent-500/30 bg-accent-500/10 px-4 py-2 text-xs font-bold uppercase tracking-wider text-accent-300">
                {badgeIcon}
                {badge}
              </div>
              <h1 className="font-bungee text-4xl leading-[1.04] text-white sm:text-5xl lg:text-7xl">
                {title}
                <span className="block text-accent-400">{accentTitle}</span>
              </h1>
            </div>

            <div className="max-w-2xl lg:justify-self-end">
              <p className="text-base leading-relaxed text-gray-300 sm:text-xl">
                {description}
              </p>
              <div className="mt-6 inline-flex items-center gap-2 rounded-full border border-white/10 bg-white/[0.04] px-4 py-2 text-sm font-semibold text-gray-300 backdrop-blur-md">
                <FileText className="h-4 w-4 text-accent-300" />
                Last updated: {updatedAt}
              </div>
            </div>
          </section>

          <section className="mt-12 grid gap-5 lg:grid-cols-2">
            {sections.map((section, index) => (
              <article
                key={section.title}
                className={`group relative overflow-hidden rounded-2xl border ${section.border} bg-white/[0.035] p-5 shadow-2xl shadow-black/20 backdrop-blur-md transition duration-300 hover:border-white/20 hover:bg-white/[0.055] sm:p-7 ${
                  index === 0 ? "lg:col-span-2" : ""
                }`}
              >
                <div
                  className={`pointer-events-none absolute inset-0 bg-gradient-to-br ${section.gradient} opacity-70`}
                />
                <div className="relative z-10">
                  <div className="mb-5 flex items-start gap-4">
                    <div
                      className={`grid h-11 w-11 shrink-0 place-items-center rounded-xl ${section.iconBg} text-white shadow-lg shadow-black/20`}
                    >
                      {section.icon}
                    </div>
                    <h2 className="pt-1 text-xl font-extrabold text-white sm:text-2xl">
                      {section.title}
                    </h2>
                  </div>
                  <div className="legal-copy text-sm leading-relaxed text-gray-300 sm:text-base">
                    {section.content}
                  </div>
                </div>
              </article>
            ))}
          </section>

          <section className="mt-8 rounded-2xl border border-white/10 bg-white/[0.04] p-6 text-center shadow-2xl shadow-black/20 backdrop-blur-md sm:p-8">
            <div className="mx-auto mb-5 grid h-14 w-14 place-items-center rounded-2xl bg-accent-500 text-primary-950 shadow-[0_0_40px_rgba(217,70,239,0.24)]">
              {finalIcon}
            </div>
            <h3 className="mb-3 text-2xl font-extrabold text-white">
              {finalTitle}
            </h3>
            <p className="mx-auto max-w-xl text-sm leading-relaxed text-gray-300 sm:text-base">
              {finalBody}
            </p>
            <button
              onClick={() => {
                document
                  .querySelector("footer")
                  ?.scrollIntoView({ behavior: "smooth" })
              }}
              className="mt-5 inline-flex items-center gap-2 text-sm font-bold text-accent-300 transition hover:text-accent-200"
            >
              {contactLabel}
              <ArrowDown className="h-4 w-4" />
            </button>
          </section>
        </div>
      </main>

      <Footer />
    </div>
  )
}
