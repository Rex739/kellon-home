import React from 'react'

const Partners = () => {
  const partners = [
    {
      name: "MoonPay",
      logo: "https://www.moonpay.com/assets/logo-full-white.svg", // Official SVG
      website: "https://moonpay.com"
    },
    {
      name: "Ramp Network",
      logo: "/images/partners/ramp-logo.svg", // Local image
      website: "https://ramp.network"
    },
    {
      name: "Paycrest",
      logo: "/images/partners/paycrest-logo.svg", // Local image
      website: "https://paycrest.io"
    },
    {
      name: "Simplex",
      logo: "/images/partners/simplex-logo.png", // Local PNG - you have this
      website: "https://simplex.com"
    },
    {
      name: "PayChant",
      logo: "/images/partners/paychant-logo.png", // Local PNG
      website: "https://paychant.com"
    },
    {
      name: "Yellow Card",
      logo: "/images/partners/yellowcard-logo.svg", // Local image
      website: "https://yellowcard.io"
    },
    {
      name: "Alchemy Pay",
      logo: null, // Text only - no logo file
      website: "https://alchemypay.org"
    },
    {
      name: "Transak",
      logo: "/images/partners/transak-logo.svg?v=1", // Local image with cache bust
      website: "https://transak.com"
    },
    {
      name: "Mercuryo",
      logo: "/images/partners/mercuryo.png", // Local PNG
      website: "https://mercuryo.io"
    }
  ]

  return (
    <section className="py-20 px-4 sm:px-6 lg:px-8 relative overflow-hidden">
      {/* Background Elements */}
      <div className="absolute inset-0 bg-gradient-to-r from-primary-900/50 via-transparent to-accent-900/50"></div>
      <div className="absolute top-0 left-1/4 w-96 h-96 bg-primary-500/10 rounded-full blur-3xl"></div>
      <div className="absolute bottom-0 right-1/4 w-80 h-80 bg-accent-500/10 rounded-full blur-3xl"></div>
      
      <div className="max-w-7xl mx-auto relative z-10">
        {/* Section Header */}
        <div className="text-center mb-16">
          <div className="inline-flex items-center px-4 py-2 bg-white/5 rounded-full border border-white/10 mb-6">
            <span className="text-primary-400 text-sm font-medium">Trusted Ecosystem</span>
          </div>
          <h2 className="text-3xl sm:text-4xl font-bold text-white mb-4">
            Our <span className="gradient-text">Partners</span>
          </h2>
          <p className="text-gray-400 text-lg max-w-2xl mx-auto">
            Powering seamless transactions with industry-leading payment providers and financial infrastructure partners
          </p>
        </div>

        {/* Partners Carousel - Enhanced Styling */}
        <div className="relative overflow-x-auto overflow-y-hidden rounded-2xl bg-gradient-to-r from-white/5 via-white/10 to-white/5 border border-white/10 backdrop-blur-xl scrollbar-hide">
          <div className="flex animate-scroll py-6 px-4 sm:py-8 sm:pl-8" style={{ width: 'max-content' }}>
            {/* First set of partners */}
            {partners.map((partner, index) => (
              <div
                key={`first-${index}`}
                className="flex-shrink-0 mx-2 sm:mx-6 group cursor-pointer"
              >
                <div className="w-24 h-16 sm:w-32 sm:h-20 bg-gradient-to-br from-white/10 via-white/5 to-transparent rounded-lg sm:rounded-xl flex items-center justify-center p-2 sm:p-3 transition-all duration-500 group-hover:from-white/20 group-hover:via-white/15 group-hover:to-white/5 group-hover:scale-110 group-hover:-translate-y-2 border border-white/10 group-hover:border-white/30 shadow-lg group-hover:shadow-2xl group-hover:shadow-primary-500/20">
                  {partner.logo ? (
                    <div className="flex flex-col items-center">
                      <img 
                        src={partner.logo} 
                        alt={`${partner.name} logo`}
                        className="max-h-6 sm:max-h-8 w-auto object-contain opacity-80 group-hover:opacity-100 transition-all duration-500 group-hover:scale-110"
                        style={{ minWidth: '32px', minHeight: '12px' }}
                        onError={(e) => {
                          console.log(`Failed to load logo for ${partner.name}:`, e.target.src);
                          e.target.style.display = 'none';
                          e.target.parentElement.nextSibling.style.display = 'flex';
                        }}
                      />
                    </div>
                  ) : null}
                  <div className={`flex flex-col items-center justify-center transition-all duration-500 ${partner.logo ? 'hidden' : 'flex'}`}>
                    <span className="text-white text-xs sm:text-sm font-bold text-center leading-tight group-hover:text-primary-300 px-1 sm:px-2">
                      {partner.name}
                    </span>
                  </div>
                </div>
              </div>
            ))}
            
            {/* Duplicate set for seamless loop */}
            {partners.map((partner, index) => (
              <div
                key={`second-${index}`}
                className="flex-shrink-0 mx-2 sm:mx-6 group cursor-pointer"
              >
                <div className="w-24 h-16 sm:w-32 sm:h-20 bg-gradient-to-br from-white/10 via-white/5 to-transparent rounded-lg sm:rounded-xl flex items-center justify-center p-2 sm:p-3 transition-all duration-500 group-hover:from-white/20 group-hover:via-white/15 group-hover:to-white/5 group-hover:scale-110 group-hover:-translate-y-2 border border-white/10 group-hover:border-white/30 shadow-lg group-hover:shadow-2xl group-hover:shadow-primary-500/20">
                  {partner.logo ? (
                    <div className="flex flex-col items-center">
                      <img 
                        src={partner.logo} 
                        alt={`${partner.name} logo`}
                        className="max-h-6 sm:max-h-8 w-auto object-contain opacity-80 group-hover:opacity-100 transition-all duration-500 group-hover:scale-110"
                        style={{ minWidth: '32px', minHeight: '12px' }}
                        onError={(e) => {
                          console.log(`Failed to load logo for ${partner.name}:`, e.target.src);
                          e.target.style.display = 'none';
                          e.target.parentElement.nextSibling.style.display = 'flex';
                        }}
                      />
                    </div>
                  ) : null}
                  <div className={`flex flex-col items-center justify-center transition-all duration-500 ${partner.logo ? 'hidden' : 'flex'}`}>
                    <span className="text-white text-xs sm:text-sm font-bold text-center leading-tight group-hover:text-primary-300 px-1 sm:px-2">
                      {partner.name}
                    </span>
                  </div>
                </div>
              </div>
            ))}
          </div>

          {/* Enhanced gradient overlays with glow effect */}
          <div className="absolute left-0 top-0 bottom-0 w-12 sm:w-24 bg-gradient-to-r from-primary-900 via-primary-900/60 to-transparent pointer-events-none z-10"></div>
          <div className="absolute right-0 top-0 bottom-0 w-12 sm:w-24 bg-gradient-to-l from-primary-900 via-primary-900/60 to-transparent pointer-events-none z-10"></div>
          
          {/* Inner glow effect */}
          <div className="absolute inset-0 rounded-2xl shadow-inner pointer-events-none"></div>
        </div>
        
        {/* Bottom accent */}
        <div className="text-center mt-12">
          <div className="inline-flex items-center space-x-2 text-gray-400 text-sm">
            <div className="w-12 h-px bg-gradient-to-r from-transparent to-primary-500"></div>
            <span>Trusted by millions globally</span>
            <div className="w-12 h-px bg-gradient-to-l from-transparent to-accent-500"></div>
          </div>
        </div>
      </div>
    </section>
  )
}

export default Partners