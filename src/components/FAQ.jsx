// @ts-nocheck
import React, { useState, useRef, memo } from "react"
import {
  motion,
  AnimatePresence,
  useScroll,
  useTransform,
  useSpring,
} from "framer-motion"
import { Plus, Minus, MessageCircle, Star } from "lucide-react"

// --- STATIC DATA ---
const FAQS = [
  {
    q: "Do you hold custody of my crypto?",
    a: "No. Your wallet is fully non-custodial, meaning you control your own assets at all times. We never have access to your private keys.",
  },
  {
    q: "How do I convert fiat to crypto or withdraw to fiat?",
    a: "Integrated API partners handle all regulated conversions. This ensures full compliance with local financial regulations while giving you a seamless experience.",
  },
  {
    q: "What are tokenized real-world assets (RWA)?",
    a: "These are digital tokens on the blockchain that represent ownership of tangible assets like real estate, stocks, and commodities.",
  },
  {
    q: "Are you a licensed VASP/CASP?",
    a: "Not yet. We currently partner with licensed providers for all regulated services and are actively in the process of securing our own licenses.",
  },
  {
    q: "How do I recover my wallet if I lose my device?",
    a: "Wallet recovery is handled through Web3Auth’s secure key management using your email or social login.",
  },
  {
    q: "Can I send crypto directly to a bank account?",
    a: "Yes. Kellon allows crypto-to-fiat payouts through licensed partners. You send crypto, and the recipient receives local currency.",
  },
]

// --- VARIANTS ---
const LIST_VARIANTS = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: { staggerChildren: 0.1 },
  },
}

const ITEM_VARIANTS = {
  hidden: { opacity: 0, y: 20 },
  visible: { opacity: 1, y: 0 },
}

// --- SUB-COMPONENT: BACKGROUND (Memoized) ---
const BackgroundEffects = memo(({ smoothProgress }) => {
  const blob1Y = useTransform(smoothProgress, [0, 1], [0, 200])
  const blob2Y = useTransform(smoothProgress, [0, 1], [0, -150])

  return (
    <div
      className="absolute inset-0 z-0 pointer-events-none select-none overflow-hidden"
      aria-hidden="true" // Hide decorative background from screen readers
    >
      <div className="absolute inset-0 bg-[url('https://grainy-gradients.vercel.app/noise.svg')] opacity-10 mix-blend-overlay"></div>
      <motion.div
        style={{ y: blob1Y, z: 0 }}
        className="absolute top-20 left-10 w-[400px] h-[400px] bg-primary-900/20 rounded-full blur-[100px] will-change-transform transform-gpu"
      />
      <motion.div
        style={{ y: blob2Y, z: 0 }}
        className="absolute bottom-20 right-10 w-[400px] h-[400px] bg-accent-900/10 rounded-full blur-[100px] will-change-transform transform-gpu"
      />
    </div>
  )
})
BackgroundEffects.displayName = "BackgroundEffects"

// --- SUB-COMPONENT: HEADER (Memoized) ---
const SectionHeader = memo(({ smoothProgress }) => {
  const headerY = useTransform(smoothProgress, [0, 0.3], [50, -50])
  const headerOpacity = useTransform(smoothProgress, [0, 0.3], [0, 1])

  return (
    <motion.div
      style={{ y: headerY, opacity: headerOpacity }}
      className="text-center mb-20 will-change-[transform,opacity]"
    >
      <h2 className="text-[clamp(2.25rem,10vw,3.75rem)] md:text-6xl font-bold text-white font-bungee leading-tight">
        Most <span className="text-accent-400">frequently</span> <br />
        asked questions.
      </h2>
    </motion.div>
  )
})
SectionHeader.displayName = "SectionHeader"

// --- SUB-COMPONENT: FAQ ITEM (Optimized + A11y + SEO) ---
const FAQItem = memo(({ faq, isOpen, onClick, index }) => {
  const questionId = `faq-question-${index}`
  const answerId = `faq-answer-${index}`

  return (
    <motion.div
      variants={ITEM_VARIANTS}
      // SEO: Mark as a Question entity
      itemScope
      itemProp="mainEntity"
      itemType="https://schema.org/Question"
      className={`border rounded-2xl overflow-hidden transition-colors duration-300 ${
        isOpen
          ? "bg-primary-900/40 border-accent-500/30 shadow-[0_0_30px_rgba(var(--accent-500),0.1)]"
          : "bg-white/5 border-white/5 hover:border-white/10 hover:bg-white/10"
      }`}
    >
      {/* A11y: Using <button> for interactivity.
        aria-expanded: Tells screen reader if it's open.
        aria-controls: Links button to the answer content.
      */}
      <button
        onClick={onClick}
        aria-expanded={isOpen}
        aria-controls={answerId}
        id={questionId}
        className="relative flex items-center justify-between w-full p-6 text-left focus:outline-none focus-visible:ring-2 focus-visible:ring-accent-400 focus-visible:ring-inset rounded-t-2xl"
      >
        {/* SEO: The question text */}
        <span
          itemProp="name"
          className={`text-lg font-medium pr-8 transition-colors ${
            isOpen ? "text-white" : "text-gray-300"
          }`}
        >
          {faq.q}
        </span>
        <div className="flex-shrink-0" aria-hidden="true">
          <motion.div
            initial={false}
            animate={{ rotate: isOpen ? 180 : 0 }}
            transition={{ duration: 0.3 }}
          >
            {isOpen ? (
              <Minus className="w-5 h-5 text-accent-400" />
            ) : (
              <Plus className="w-5 h-5 text-gray-400" />
            )}
          </motion.div>
        </div>
      </button>

      {/* SEO: Wrapper for the Answer entity */}
      <div
        itemScope
        itemProp="acceptedAnswer"
        itemType="https://schema.org/Answer"
      >
        <AnimatePresence initial={false}>
          {isOpen && (
            <motion.div
              id={answerId}
              role="region" // A11y: Identifies this as a content region
              aria-labelledby={questionId} // A11y: Labels it by the question
              initial={{ height: 0, opacity: 0 }}
              animate={{ height: "auto", opacity: 1 }}
              exit={{ height: 0, opacity: 0 }}
              transition={{ duration: 0.3, ease: "easeInOut" }}
              style={{ overflow: "hidden" }}
            >
              <div className="px-6 pb-6 pt-0">
                {/* SEO: The actual answer text */}
                <p
                  itemProp="text"
                  className="text-gray-400 leading-relaxed border-t border-white/10 pt-4"
                >
                  {faq.a}
                </p>
              </div>
            </motion.div>
          )}
        </AnimatePresence>
      </div>
    </motion.div>
  )
})
FAQItem.displayName = "FAQItem"

// --- SUB-COMPONENT: VISUAL CARD (Memoized) ---
const StickyCard = memo(() => {
  return (
    <div className="lg:sticky lg:top-32">
      <motion.div
        initial={{ opacity: 0, scale: 0.9, rotate: -2 }}
        whileInView={{ opacity: 1, scale: 1, rotate: 0 }}
        viewport={{ once: true, margin: "-100px" }}
        transition={{ duration: 0.6, type: "spring" }}
        className="relative w-full aspect-square bg-gradient-to-br from-primary-900/50 to-primary-800/30 border border-white/10 rounded-3xl overflow-hidden backdrop-blur-sm p-8 flex flex-col items-center justify-center group"
        aria-hidden="true" // Entire card is decorative/supplemental
      >
        <div className="absolute top-0 left-0 w-full h-full bg-[radial-gradient(circle_at_50%_50%,rgba(255,255,255,0.03),transparent_70%)]" />
        <div className="relative z-10 text-center transform group-hover:scale-105 transition-transform duration-500 will-change-transform">
          <h3 className="text-9xl font-black text-white/10 font-bungee select-none tracking-tighter">
            FAQ
          </h3>
          <div className="absolute inset-0 flex items-center justify-center text-8xl font-black text-transparent bg-clip-text bg-gradient-to-br from-white to-white/20 font-bungee tracking-tighter blur-[1px]">
            FAQ
          </div>
          <div className="absolute inset-0 flex items-center justify-center text-8xl font-black text-transparent bg-clip-text bg-gradient-to-br from-white to-gray-400 font-bungee tracking-tighter">
            FAQ
          </div>
        </div>
        <motion.div
          animate={{ rotate: 360 }}
          transition={{ duration: 20, repeat: Infinity, ease: "linear" }}
          className="absolute top-12 right-12 text-accent-400 opacity-80 will-change-transform"
        >
          <Star className="w-12 h-12 fill-current" />
        </motion.div>

        {/* The "Chat Support" badge might be functional later, but for now purely visual context */}
        <motion.div
          initial={{ y: 20, opacity: 0 }}
          whileInView={{ y: 0, opacity: 1 }}
          viewport={{ once: true }}
          transition={{ delay: 0.4, type: "spring" }}
          className="absolute bottom-8 right-[-10px] md:right-[-20px] bg-accent-500 text-black px-6 py-4 rounded-2xl shadow-xl shadow-accent-500/20 transform rotate-[-6deg] hover:rotate-0 transition-transform duration-300"
        >
          <div className="flex items-center gap-3">
            <div className="bg-black/10 p-2 rounded-full">
              <MessageCircle className="w-5 h-5 text-black" />
            </div>
            <div>
              <p className="text-xs font-bold uppercase tracking-wider opacity-70">
                Need Help?
              </p>
              <p className="font-bold text-sm">Chat with Support</p>
            </div>
          </div>
        </motion.div>
      </motion.div>
    </div>
  )
})
StickyCard.displayName = "StickyCard"

// --- MAIN COMPONENT ---
export default function FAQ() {
  const [openIndex, setOpenIndex] = useState(0)
  const containerRef = useRef(null)

  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start end", "end start"],
  })

  const smoothProgress = useSpring(scrollYProgress, {
    stiffness: 100,
    damping: 30,
    restDelta: 0.001,
  })

  return (
    <section
      ref={containerRef}
      className="relative w-full py-20 sm:py-24 bg-black overflow-hidden"
      aria-labelledby="faq-heading"
    >
      <BackgroundEffects smoothProgress={smoothProgress} />

      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6">
        <div id="faq-heading">
          <SectionHeader smoothProgress={smoothProgress} />
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-[400px_1fr] xl:grid-cols-[450px_1fr] gap-10 items-start">
          <StickyCard />

          {/* SEO: Define this container as an FAQPage */}
          <motion.div
            variants={LIST_VARIANTS}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: "-100px" }}
            className="flex flex-col gap-4"
            itemScope
            itemType="https://schema.org/FAQPage"
          >
            {FAQS.map((faq, i) => (
              <FAQItem
                key={i}
                index={i} // Pass index for unique ARIA IDs
                faq={faq}
                isOpen={i === openIndex}
                onClick={() => setOpenIndex(i === openIndex ? null : i)}
              />
            ))}
          </motion.div>
        </div>
      </div>
    </section>
  )
}
