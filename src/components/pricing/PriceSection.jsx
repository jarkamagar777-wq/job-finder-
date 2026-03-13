import React from 'react'

const PriceSection = ({ plan, billing }) => {
  const price = billing === "annual" ? plan.annual : plan.monthly;
  const isShogun = plan.id === "shogun";

  return (
    <div className="mb-5">
      <div className="flex items-baseline gap-1">
        {price === 0 ? (
          <span className="font-cinzel text-[38px] font-bold text-[#e8ddd6]">無料</span>
        ) : (
          <>
            <span className="font-cinzel text-[13px] text-[#5a4e4a] self-start mt-2">¥</span>
            <span className={`font-cinzel text-[38px] font-bold ${isShogun ? "shimmer-text" : ""}`}
              style={!isShogun ? { color: plan.color } : {}}>
              {price.toLocaleString()}
            </span>
            <span className="font-cinzel text-[10px] text-[#5a4e4a]">/mo</span>
          </>
        )}
      </div>
      {billing === "annual" && price > 0 && (
        <p className="font-garamond text-xs text-[#4caf82] mt-0.5">
          ¥{(price * 12).toLocaleString()} / year · 20% saved
        </p>
      )}
    </div>
  )
}

export default PriceSection;