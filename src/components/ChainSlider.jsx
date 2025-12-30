"use client"

import React, { useState, useEffect, useRef } from "react"

const ChainSlider = () => {
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

  const [position, setPosition] = useState(0)
  const [itemWidth, setItemWidth] = useState(200) // Default fallback
  const [numSets, setNumSets] = useState(5) // Default
  const itemRef = useRef(null)

  // Measure actual item width on mount and resize
  useEffect(() => {
    const updateDimensions = () => {
      if (itemRef.current) {
        // @ts-ignore
        const width = itemRef.current.offsetWidth
        setItemWidth(width)

        // Calculate how many sets needed: enough to cover 2x screen + buffer
        const screenWidth = window.innerWidth
        const itemsPerSet = chains.length
        const setWidth = itemsPerSet * width
        const neededSets = Math.ceil((screenWidth * 2) / setWidth) + 2 // Buffer for seamless
        setNumSets(neededSets)
      }
    }

    updateDimensions()
    window.addEventListener("resize", updateDimensions)
    return () => window.removeEventListener("resize", updateDimensions)
  }, [])

  // Build extended chains based on numSets
  const extendedChains = Array.from({ length: numSets }, () => chains).flat()

  // Smooth animation loop
  useEffect(() => {
    let rafId
    const speed = 0.5 // Pixels per frame – adjust for speed

    const animate = () => {
      setPosition((prev) => prev - speed)
      rafId = requestAnimationFrame(animate)
    }

    rafId = requestAnimationFrame(animate)
    return () => cancelAnimationFrame(rafId)
  }, [])

  const totalWidth = chains.length * itemWidth // One set's width
  // Normalize translateX to be between -totalWidth and 0
  let translateX = position % totalWidth
  if (translateX > 0) translateX -= totalWidth // Ensure negative for left scroll

  return (
    <div className="relative w-full overflow-hidden py-4 md:py-6 bg-primary-800">
      {/* Fades */}
      <div className="absolute left-0 top-0 bottom-0 w-16 md:w-32 bg-gradient-to-r from-primary-800 to-transparent z-10 pointer-events-none" />
      <div className="absolute right-0 top-0 bottom-0 w-16 md:w-32 bg-gradient-to-l from-primary-800 to-transparent z-10 pointer-events-none" />

      {/* Hidden ref item for measurement */}
      <div
        ref={itemRef}
        className="absolute top-[-9999px] flex items-center gap-3 md:gap-4 lg:gap-5 flex-shrink-0 mx-4 md:mx-6 lg:mx-8"
        style={{ visibility: "hidden" }}
      >
        <div className="w-8 h-8 md:w-10 md:h-10 lg:w-12 lg:h-12 flex items-center justify-center">
          <img
            src={chains[0].logo}
            alt={chains[0].name}
            className="w-full h-full object-contain"
          />
        </div>
        <div className="font-bold text-white text-base md:text-lg lg:text-xl">
          {chains[0].name}
        </div>
        <span
          className="w-1.5 h-1.5 md:w-2 md:h-2 rounded-full"
          style={{ backgroundColor: chains[0].color }}
        />
      </div>

      <div
        className="flex items-center whitespace-nowrap"
        style={{
          transform: `translateX(${translateX}px)`,
          willChange: "transform",
        }}
      >
        {extendedChains.map((chain, index) => (
          <div
            key={`${chain.name}-${index}`}
            className="flex items-center gap-3 md:gap-4 lg:gap-5 flex-shrink-0 mx-4 md:mx-6 lg:mx-8"
          >
            <div className="w-8 h-8 md:w-10 md:h-10 lg:w-12 lg:h-12 flex items-center justify-center">
              <img
                src={chain.logo}
                alt={`${chain.name} logo`}
                className="w-6 h-6 md:w-7 md:h-7 lg:w-8 lg:h-8 object-contain"
              />
            </div>
            <div className="font-bold text-white text-base md:text-lg lg:text-xl">
              {chain.name}
            </div>
            <span
              className="w-1.5 h-1.5 md:w-2 md:h-2 rounded-full"
              style={{ backgroundColor: chain.color }}
            />
          </div>
        ))}
      </div>
    </div>
  )
}

export default ChainSlider
