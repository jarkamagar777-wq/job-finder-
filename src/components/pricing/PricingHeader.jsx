import React from 'react'
import Divider from './Divider'

const PricingHeader = () => {
  return (
    <div className="animate-fade-up text-center mb-14">
      <p className="font-cinzel text-[10px] tracking-[0.4em] mb-4" style={{ color: "rgba(192,39,61,0.6)" }}>
        武士道 · 名誉 · 誠意
      </p>
      <h1 className="font-cinzel text-[52px] font-bold leading-tight text-[#e8ddd6]">Choose Your</h1>
      <h1 className="font-cinzel text-[52px] font-bold leading-tight mb-5">
        <span className="font-noto text-[56px]" style={{ color: "#c0273d" }}>道</span>{" "}
        <span className="shimmer-text">Path</span>
      </h1>

      <Divider />

      <p className="font-garamond text-base text-[#6a5e58] italic tracking-wide">
        FIND YOUR PATH · 道を見つける · Every warrior needs the right weapons
      </p>
      <p className="font-cinzel text-[10px] text-[#3a3030] tracking-[0.3em] mt-2">
        武士道 · JARUKA CAREERS · 名誉ある道を歩め
      </p>
    </div>
  )
}

export default PricingHeader;