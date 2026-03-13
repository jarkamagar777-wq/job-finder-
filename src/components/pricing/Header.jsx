import React from 'react'

const Header = ({ plan }) => {
  return (
    <div className={`flex items-start justify-between mb-5 ${plan.popular ? "mt-3" : ""}`}>
      <div>
        <p className="font-cinzel text-[9px] tracking-[0.3em] text-[#5a4e4a]">RANK · 段位</p>
        <div className="flex items-baseline gap-2 mt-1">
          <span className="font-cinzel text-[22px] font-bold" style={{ color: plan.color }}>{plan.en}</span>
          <span className="font-noto text-sm" style={{ color: plan.color, opacity: 0.7 }}>{plan.jp}</span>
        </div>
        <p className="font-garamond text-xs text-[#5a4e4a] italic mt-0.5">{plan.subtitle}</p>
      </div>
      <div className="w-11 h-11 rounded-xl flex items-center justify-center flex-shrink-0"
        style={{
          background: `rgba(${plan.id === "ronin" ? "138,122,116" : plan.id === "samurai" ? "192,39,61" : "201,168,76"},0.12)`,
          border: `1px solid rgba(${plan.id === "ronin" ? "138,122,116" : plan.id === "samurai" ? "192,39,61" : "201,168,76"},0.25)`,
        }}>
        <span className="font-noto text-xl" style={{ color: plan.color }}>{plan.kanji}</span>
      </div>
    </div>
  )
}

export default Header;