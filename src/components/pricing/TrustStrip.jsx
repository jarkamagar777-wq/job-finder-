import React from 'react'
import { trust } from './data'
const TrustStrip = () => {
  return (
    <div className="flex justify-center gap-12 mb-16">
            {trust.map((t, i) => (
              <div key={i} className="flex flex-col items-center gap-2">
                <span className="text-[22px] opacity-25">{t.icon}</span>
                <span className="font-cinzel text-[9px] tracking-[0.18em] text-[#5a4e4a]">{t.en}</span>
                <span className="font-noto text-[9px] text-[#3a3030]">{t.jp}</span>
              </div>
            ))}
          </div>
  )
}

export default TrustStrip