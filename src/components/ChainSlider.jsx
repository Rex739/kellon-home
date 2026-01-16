"use client"

import React from "react"
import { motion } from "framer-motion"

const chains = [
  {
    name: "Stellar",
    logo: "https://cryptologos.cc/logos/stellar-xlm-logo.svg",
    color: "#7D00FF",
  },
  {
    name: "Base",
    logo: "https://raw.githubusercontent.com/trustwallet/assets/master/blockchains/base/info/logo.png",
    color: "#0052FF",
  },
  {
    name: "Celo",
    logo: "https://cryptologos.cc/logos/celo-celo-logo.svg",
    color: "#FCFF52",
  },
  {
    name: "Polygon",
    logo: "https://cryptologos.cc/logos/polygon-matic-logo.svg",
    color: "#8247E5",
  },
]

const ChainSlider = () => {
  // Duplicate the data 4 times to ensure the strip is long enough to fill
  // wide screens and allow for a seamless loop.
  const SCROLL_ITEMS = [...chains, ...chains, ...chains, ...chains]

  return (
    <section
      className="relative w-full overflow-hidden py-4 md:py-6 bg-transparent"
      aria-label="Supported Blockchains"
    >
      {/* Mask Image: Creates the fade effect on the left and right edges */}
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
          // ANIMATION: Move from 0% to -50% (halfway).
          // Because the second half is a clone of the first, it snaps back instantly
          // to 0% without the user noticing.
          animate={{ x: ["0%", "-50%"] }}
          transition={{
            duration: 20, // Adjust speed (higher = slower)
            ease: "linear",
            repeat: Infinity,
          }}
        >
          {SCROLL_ITEMS.map((chain, index) => {
            // We only want the first set of items to be visible to screen readers.
            // All duplicates are hidden to prevent repetitive reading.
            const isDuplicate = index >= chains.length

            return (
              <li
                key={`${chain.name}-${index}`}
                className="flex items-center gap-3 md:gap-4 lg:gap-5 flex-shrink-0"
                aria-hidden={isDuplicate}
              >
                <div className="w-8 h-8 md:w-10 md:h-10 lg:w-12 lg:h-12 flex items-center justify-center relative">
                  <img
                    src={chain.logo}
                    alt="" // Empty alt because the text name provides context
                    width={48}
                    height={48}
                    className="w-full h-full object-contain"
                    loading="lazy"
                  />
                </div>

                <span className="font-bold text-white text-base md:text-lg lg:text-xl">
                  {chain.name}
                </span>

                <span
                  className="w-1.5 h-1.5 md:w-2 md:h-2 rounded-full ring-2 ring-white/10"
                  style={{ backgroundColor: chain.color }}
                  aria-hidden="true" // Decorative dot
                />
              </li>
            )
          })}
        </motion.ul>
      </div>
    </section>
  )
}

export default ChainSlider
