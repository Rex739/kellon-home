"use client"
// @ts-ignore
import React from "react"
import {
  motion,
  useMotionValue,
  useTransform,
  useMotionTemplate,
} from "framer-motion"

// @ts-ignore
export default function TiltCard({ children, className = "" }) {
  const mouseX = useMotionValue(0)
  const mouseY = useMotionValue(0)

  // @ts-ignore
  const handleMouseMove = ({ currentTarget, clientX, clientY }) => {
    const { left, top, width, height } = currentTarget.getBoundingClientRect()
    mouseX.set(clientX - left - width / 2)
    mouseY.set(clientY - top - height / 2)
  }

  return (
    <motion.div
      style={{
        rotateX: useTransform(mouseY, [-300, 300], [5, -5]),
        rotateY: useTransform(mouseX, [-300, 300], [-5, 5]),
        perspective: 1000,
      }}
      onMouseMove={handleMouseMove}
      onMouseLeave={() => {
        mouseX.set(0)
        mouseY.set(0)
      }}
      className={`relative group ${className}`}
    >
      <div className="relative h-full bg-white/[0.03] backdrop-blur-sm border border-white/10 rounded-3xl overflow-hidden p-8 transition-colors hover:border-accent-500/30">
        <motion.div
          className="pointer-events-none absolute -inset-px opacity-0 group-hover:opacity-100 transition-opacity duration-500"
          style={{
            background: useMotionTemplate`radial-gradient(600px circle at ${mouseX}px ${mouseY}px, rgba(255, 255, 255, 0.05), transparent 80%)`,
          }}
        />
        {children}
      </div>
    </motion.div>
  )
}
