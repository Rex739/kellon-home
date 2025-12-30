import React, { useState, useEffect } from "react"

const ChainSlider = () => {
  const chains = [
    {
      name: "Stellar",
      logo: "https://cryptologos.cc/logos/stellar-xlm-logo.svg",
      features: "USDT/USDC",
      color: "#7D00FF",
    },
    {
      name: "Base",
      logo: "https://raw.githubusercontent.com/trustwallet/assets/master/blockchains/base/info/logo.png",
      features: "USDT/USDC",
      color: "#0052FF",
    },
    {
      name: "Celo",
      logo: "https://cryptologos.cc/logos/celo-celo-logo.svg",
      features: "USDT/USDC",
      color: "#FCFF52",
    },
    {
      name: "Polygon",
      logo: "https://cryptologos.cc/logos/polygon-matic-logo.svg",
      features: "USDT/USDC",
      color: "#8247E5",
    },
  ]

  // Create extended array for seamless infinite loop
  const extendedChains = [...chains, ...chains, ...chains]

  const [currentPosition, setCurrentPosition] = useState(0)

  // Smooth infinite auto-slide
  useEffect(() => {
    let animationFrameId

    const animate = () => {
      setCurrentPosition((prev) => {
        // Get screen width
        const screenWidth = window.innerWidth
        const isMobile = screenWidth < 768
        const itemWidth = isMobile ? 160 : 200

        // Calculate total width
        const totalWidth = extendedChains.length * itemWidth

        // Reset when scrolled enough
        if (prev <= -totalWidth / 2) {
          return 0
        }
        return prev - (isMobile ? 0.3 : 0.3) // Adjust speed
      })
      animationFrameId = requestAnimationFrame(animate)
    }

    animationFrameId = requestAnimationFrame(animate)

    return () => {
      if (animationFrameId) {
        cancelAnimationFrame(animationFrameId)
      }
    }
  }, [])

  return (
    <div className="relative w-full overflow-hidden py-4 md:py-6">
      {/* Edge gradients - subtle */}
      <div className="absolute left-0 top-0 bottom-0 w-12 md:w-24 bg-gradient-to-r from-primary-800 to-transparent z-10 pointer-events-none"></div>
      <div className="absolute right-0 top-0 bottom-0 w-12 md:w-24 bg-gradient-to-l from-primary-800 to-transparent z-10 pointer-events-none"></div>

      {/* Infinite Sliding Row - NO CARDS */}
      <div
        className="flex items-center"
        style={{
          transform: `translateX(${currentPosition}px)`,
          willChange: "transform",
        }}
      >
        {extendedChains.map((chain, index) => (
          <div
            key={index}
            className="flex items-center gap-3 md:gap-4 lg:gap-5 flex-shrink-0 mx-4 md:mx-6 lg:mx-8"
          >
            {/* Chain Logo - simple */}
            <div className="w-8 h-8 md:w-10 md:h-10 lg:w-12 lg:h-12 flex items-center justify-center">
              <img
                src={chain.logo}
                alt={`${chain.name} logo`}
                className="w-6 h-6 md:w-7 md:h-7 lg:w-8 lg:h-8 object-contain"
              />
            </div>

            {/* Chain Info - clean */}
            <div className="">
              <div className="font-bold text-white text-base md:text-lg lg:text-xl">
                {chain.name}
              </div>
            </div>

            {/* Color Indicator - minimal */}
            <div
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
