"use client"

import React from "react"
import { Parallax, ParallaxLayer } from "@react-spring/parallax"
import TokenizedRWA from "./TokenizedRWA"
import RegulatoryNote from "./Regulatory"
import Traction from "./Traction"

export default function ParallaxSection() {
  return (
    <section className="relative w-full h-[100dvh] bg-primary-900 overflow-hidden">
      {/* Grid Background Vector for Parallax Container */}
      <div className="absolute inset-0">
        {/* Grid Net Pattern */}
        <div className="absolute inset-0 bg-[linear-gradient(rgba(255,255,255,0.03)_1px,transparent_1px),linear-gradient(90deg,rgba(255,255,255,0.03)_1px,transparent_1px)] bg-[size:40px_40px] [mask-image:radial-gradient(ellipse_80%_50%_at_50%_50%,black,transparent)]"></div>

        {/* Connection Lines */}
        <div className="absolute inset-0">
          {/* Horizontal Lines */}
          <div className="absolute top-1/4 left-0 w-full h-px bg-gradient-to-r from-transparent via-accent-500/10 to-transparent"></div>
          <div className="absolute top-1/2 left-0 w-full h-px bg-gradient-to-r from-transparent via-primary-500/10 to-transparent"></div>
          <div className="absolute top-3/4 left-0 w-full h-px bg-gradient-to-r from-transparent via-accent-500/10 to-transparent"></div>

          {/* Vertical Lines */}
          <div className="absolute left-1/4 top-0 h-full w-px bg-gradient-to-b from-transparent via-primary-500/10 to-transparent"></div>
          <div className="absolute left-1/2 top-0 h-full w-px bg-gradient-to-b from-transparent via-accent-500/10 to-transparent"></div>
          <div className="absolute left-3/4 top-0 h-full w-px bg-gradient-to-b from-transparent via-primary-500/10 to-transparent"></div>
        </div>

        {/* Floating Nodes/Connection Points */}
        <div className="absolute top-1/4 left-1/4 w-2 h-2 bg-accent-400/30 rounded-full"></div>
        <div className="absolute top-1/4 left-1/2 w-1.5 h-1.5 bg-primary-400/40 rounded-full"></div>
        <div className="absolute top-1/4 left-3/4 w-2 h-2 bg-accent-400/30 rounded-full"></div>

        <div className="absolute top-1/2 left-1/4 w-1.5 h-1.5 bg-primary-400/40 rounded-full"></div>
        <div className="absolute top-1/2 left-1/2 w-2 h-2 bg-accent-400/50 rounded-full"></div>
        <div className="absolute top-1/2 left-3/4 w-1.5 h-1.5 bg-primary-400/40 rounded-full"></div>

        <div className="absolute top-3/4 left-1/4 w-2 h-2 bg-accent-400/30 rounded-full"></div>
        <div className="absolute top-3/4 left-1/2 w-1.5 h-1.5 bg-primary-400/40 rounded-full"></div>
        <div className="absolute top-3/4 left-3/4 w-2 h-2 bg-accent-400/30 rounded-full"></div>

        {/* Gradient Orbs for Depth */}
        <div className="absolute top-1/4 right-1/4 w-80 h-80 bg-accent-500/5 rounded-full blur-3xl"></div>
        <div className="absolute bottom-1/4 left-1/4 w-80 h-80 bg-primary-500/5 rounded-full blur-3xl"></div>
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[500px] h-[500px] bg-gradient-to-r from-accent-500/3 to-primary-500/3 rounded-full blur-3xl"></div>
      </div>

      {/* Transparent overlay */}
      <div className="absolute inset-0 bg-black/40 z-0"></div>

      <Parallax
        pages={2}
        className="relative z-20 [&>div]:[pointer-events:auto]"
      >
        {/* TokenizedRWA - First Page */}
        <ParallaxLayer
          offset={0}
          speed={0.5}
          factor={1}
          style={{ pointerEvents: "auto" }}
        >
          <div className="relative w-full h-full pointer-events-auto">
            <TokenizedRWA />
          </div>
        </ParallaxLayer>

        {/* RegulatoryNote - Second Page */}
        <ParallaxLayer
          offset={1}
          speed={0.8}
          factor={1}
          style={{ pointerEvents: "auto" }}
        >
          <div className="relative w-full h-full pointer-events-auto">
            <RegulatoryNote />
          </div>
        </ParallaxLayer>

        {/* Optional: Additional background layers for parallax effect */}
        <ParallaxLayer
          offset={0}
          speed={-0.3}
          factor={2}
          style={{ pointerEvents: "none" }}
        >
          <div className="absolute inset-0">
            <div className="absolute top-20 left-20 w-32 h-32 bg-accent-400/5 rounded-full blur-2xl"></div>
            <div className="absolute bottom-20 right-20 w-32 h-32 bg-primary-400/5 rounded-full blur-2xl"></div>
          </div>
        </ParallaxLayer>

        <ParallaxLayer
          offset={0.5}
          speed={0.2}
          factor={2}
          style={{ pointerEvents: "none" }}
        >
          <div className="absolute inset-0">
            <div className="absolute top-40 right-40 w-24 h-24 bg-accent-400/10 rounded-full blur-xl"></div>
            <div className="absolute bottom-40 left-40 w-24 h-24 bg-primary-400/10 rounded-full blur-xl"></div>
          </div>
        </ParallaxLayer>
      </Parallax>
    </section>
  )
}
