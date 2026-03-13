

const BillingToggle = ({billing, setBilling}) => {
  return (
    <div className="flex justify-center items-center gap-4 mb-12">
            <div className="flex items-center gap-1 p-1 rounded-full" style={{ background: "rgba(255,255,255,0.04)", border: "1px solid rgba(160,30,50,0.18)" }}>
              {["monthly", "annual"].map((opt) => (
                <button key={opt} onClick={() => setBilling(opt)}
                  className={`font-cinzel px-5 py-1.5 rounded-full text-[9px] tracking-[0.2em] cursor-pointer transition-all border-0 ${
                    billing === opt
                      ? "text-[#e8ddd6]"
                      : "text-[#5a4e4a] bg-transparent"
                  }`}
                  style={billing === opt ? { background: "rgba(139,26,42,0.5)", border: "1px solid rgba(192,39,61,0.4)" } : {}}>
                  {opt === "monthly" ? "月払い MONTHLY" : "年払い ANNUAL"}
                </button>
              ))}
            </div>
            {billing === "annual" && (
              <span className="font-cinzel text-[8px] tracking-[0.15em] text-[#4caf82] px-3 py-1 rounded-full"
                style={{ background: "rgba(76,175,130,0.15)", border: "1px solid rgba(76,175,130,0.35)" }}>
                2ヶ月無料 · 2 MONTHS FREE
              </span>
            )}
          </div>
  )
}

export default BillingToggle