import React from 'react'

const EnterpriseBanner = () => {
  return (
    <div className="relative rounded-2xl px-8 py-7 mb-16 flex items-center justify-between gap-6 transition-all duration-300 hover:-translate-y-1 group"
            style={{ background: "#110810", border: "1px solid rgba(160,30,50,0.18)" }}>
            <div className="absolute top-0 left-0 right-0 h-px opacity-0 group-hover:opacity-100 transition-opacity duration-300"
              style={{ background: "linear-gradient(90deg,transparent,rgba(192,39,61,0.55),transparent)" }} />
            <div className="flex items-center gap-5">
              <span className="font-noto text-[32px] opacity-30">⚔</span>
              <div>
                <p className="font-cinzel text-[10px] tracking-[0.25em] text-[#5a4e4a]">FOR DOJO COMMANDERS · 道場主向け</p>
                <p className="font-noto text-[18px] text-[#e8ddd6] font-medium mt-1">企業プラン</p>
                <p className="font-garamond text-[13px] text-[#6a5e58] italic mt-1">
                  Post unlimited roles, access elite talent, and build your dojo. Custom pricing for teams of 5+.
                </p>
              </div>
            </div>
            <div className="flex gap-2.5 flex-shrink-0">
              <button className="font-cinzel px-5 py-2.5 rounded-lg text-[9px] tracking-[0.2em] text-[#8a7a74] cursor-pointer transition-all hover:text-[#e8ddd6] bg-transparent"
                style={{ border: "1px solid rgba(160,30,50,0.35)" }}>
                求人掲載 · POST ROLES
              </button>
              <button className="font-cinzel px-5 py-2.5 rounded-lg text-[9px] tracking-[0.2em] text-[#f0e8e0] cursor-pointer hover:opacity-85"
                style={{ background: "linear-gradient(135deg,#8b1a2a,#c0273d)", border: "none" }}>
                道場主に話す · TALK TO US
              </button>
            </div>
          </div>
  )
}

export default EnterpriseBanner