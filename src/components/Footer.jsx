import React from 'react'

const Footer = () => {
  return (
    <div className="relative z-10 text-center pb-12">
        <div className="flex items-center justify-center gap-4 mb-3">
          <div className="w-16 h-px bg-gradient-to-r from-transparent to-red-800/40" />
          <span className="[font-family:'Zen_Antique',serif] text-red-700/40 text-lg">⛩</span>
          <div className="w-16 h-px bg-gradient-to-l from-transparent to-red-800/40" />
        </div>
        <p className="[font-family:'Cinzel',serif] text-stone-700 text-[15px] tracking-[4px]">武士道 · JARUKA CAREERS · 名誉ある道を歩め</p>
      </div>
  )
}

export default Footer