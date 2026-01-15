// @ts-nocheck
"use client"
import React, { useRef, useState, useEffect } from "react"
import { useInView, useSpring } from "framer-motion"

export default function Counter({ value, prefix = "", suffix = "" }) {
  const ref = useRef(null)
  const isInView = useInView(ref, { once: true, margin: "-100px" })
  const springValue = useSpring(0, { stiffness: 60, damping: 20 })
  const [displayValue, setDisplayValue] = useState(0)

  useEffect(() => {
    if (isInView) springValue.set(value)
  }, [isInView, value, springValue])

  useEffect(() => {
    const unsubscribe = springValue.on("change", (latest) => {
      setDisplayValue(
        // @ts-ignore
        Number.isInteger(value) ? Math.floor(latest) : latest.toFixed(1)
      )
    })
    return () => unsubscribe()
  }, [springValue, value])

  return (
    <span ref={ref} className="tabular-nums">
      {prefix}
      {displayValue}
      {suffix}
    </span>
  )
}
