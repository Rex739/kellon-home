"use client"

import React from "react"
import { motion } from "framer-motion"
import { Icons } from "./Icons"

const chains = [
  { name: "Stellar", icon: "Stellar", color: "#7D00FF" },
  { name: "Base", icon: "Base", color: "#0052FF" },
  { name: "Celo", icon: "Celo", color: "#FCFF52" },
  { name: "Polygon", icon: "Polygon", color: "#8247E5" },
  { name: "Bnb ", icon: "BNB", color: "#F3BA2F" },
]

const ChainSlider = () => {
  const SCROLL_ITEMS = [...chains, ...chains, ...chains, ...chains]

  return (
    <section
      className="relative w-full overflow-hidden py-4 md:py-6 bg-transparent"
      aria-label="Supported Blockchains"
    >
      <div
        className="flex w-full select-none"
        style={{
          maskImage:
            "linear-gradient(to right, transparent, black 10%, black 90%, transparent)",
          WebkitMaskImage:
            "linear-gradient(to right, transparent, black 10%, black 90%, transparent)",
        }}
      >
        <motion.ul
          className="flex min-w-full shrink-0 items-center gap-4 md:gap-8 lg:gap-12 px-4"
          animate={{ x: ["0%", "-50%"] }}
          transition={{
            duration: 50,
            ease: "linear",
            repeat: Infinity,
          }}
        >
          {SCROLL_ITEMS.map((chain, index) => {
            const isDuplicate = index >= chains.length
            // @ts-ignore
            const IconComponent = Icons[chain.icon]

            return (
              <li
                key={`${chain.name}-${index}`}
                className="mx-7"
                aria-hidden={isDuplicate}
              >
                <IconComponent className="w-32 lg:w-36" />
              </li>
            )
          })}
        </motion.ul>
      </div>
    </section>
  )
}

export default ChainSlider
