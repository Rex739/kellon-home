"use client"
import React from "react"
import { motion } from "framer-motion"

// @ts-ignore
export default function InfiniteColumn({ children, speed, direction }) {
  return (
    <div className="flex flex-col gap-6 relative overflow-hidden h-full w-40 lg:w-56">
      <motion.div
        animate={{ y: direction === 1 ? ["-50%", "0%"] : ["0%", "-50%"] }}
        transition={{ duration: speed, repeat: Infinity, ease: "linear" }}
        className="flex flex-col gap-6 pb-6"
      >
        {children}
        {children} {/* Duplicate for infinite loop */}
        {children} {/* Triplicate for safety */}
      </motion.div>
    </div>
  )
}
