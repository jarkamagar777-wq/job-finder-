function CtaButton({ type, children }) {
  if (type === "primary") return (
    <button className="font-cinzel w-full py-3 rounded-lg text-[10px] tracking-[0.2em] text-[#f0e8e0] cursor-pointer transition-all hover:opacity-85 hover:scale-[0.98]"
      style={{ background: "linear-gradient(135deg,#8b1a2a,#c0273d)", border: "none" }}>
      {children}
    </button>
  );
  if (type === "gold") return (
    <button className="font-cinzel w-full py-3 rounded-lg text-[10px] tracking-[0.2em] text-[#0a0508] font-bold cursor-pointer transition-all hover:opacity-85 hover:scale-[0.98]"
      style={{ background: "linear-gradient(135deg,#9a7a38,#c9a84c)", border: "none" }}>
      {children}
    </button>
  );
  return (
    <button className="font-cinzel w-full py-3 rounded-lg text-[10px] tracking-[0.2em] text-[#8a7a74] cursor-pointer transition-all hover:border-[rgba(192,39,61,0.55)] hover:text-[#e8ddd6] bg-transparent"
      style={{ border: "1px solid rgba(160,30,50,0.35)" }}>
      {children}
    </button>
  );
}

function PlanCard({ plan, billing }) {
  const price = billing === "annual" ? plan.annual : plan.monthly;
  const isShogun = plan.id === "shogun";
  const isSamurai = plan.id === "samurai";

  return (
    <div
      className="animate-float relative rounded-2xl overflow-hidden transition-all duration-300 hover:-translate-y-1 cursor-pointer group"
      style={{
        background: isShogun
          ? "linear-gradient(145deg,#180d16 0%,#1e0d18 60%,#140810 100%)"
          : "#110810",
        border: isShogun || isSamurai
          ? "1px solid rgba(192,39,61,0.45)"
          : "1px solid rgba(160,30,50,0.18)",
        boxShadow: isShogun ? "0 0 40px rgba(139,26,42,0.18),inset 0 0 60px rgba(139,26,42,0.06)" : undefined,
        animationDelay: `${plan.id === "ronin" ? 0 : plan.id === "samurai" ? 0.6 : 1.2}s`,
        padding: "32px 26px",
      }}
    >
      {/* top shimmer line */}
      <div className="absolute top-0 left-0 right-0 h-px opacity-0 group-hover:opacity-100 transition-opacity duration-300"
        style={{ background: "linear-gradient(90deg,transparent,rgba(192,39,61,0.55),transparent)" }} />

      {plan.popular && (
        <div className="font-cinzel absolute top-0 left-1/2 -translate-x-1/2 text-[8px] tracking-[0.25em] text-[#f0e8e0] px-5 py-1 rounded-b-lg"
          style={{ background: "linear-gradient(90deg,#8b1a2a,#c0273d)" }}>
          精鋭 MOST CHOSEN
        </div>
      )}

      {/* Header */}
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

      {/* Price */}
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

      {/* Divider */}
      <div className="animate-sword h-px mb-4" style={{ background: "linear-gradient(90deg,transparent,rgba(192,39,61,0.35),transparent)" }} />

      {/* Desc */}
      <p className="font-garamond text-[13px] text-[#6a5e58] leading-relaxed italic mb-5">{plan.desc}</p>

      {/* Features */}
      <div className="flex flex-col gap-2.5 mb-7">
        {plan.features.map((f, i) => (
          <div key={i} className="flex items-start gap-2.5">
            <div className={`w-4 h-4 rounded-full flex items-center justify-center flex-shrink-0 mt-0.5 text-[9px] ${
              f.yes ? "text-[#c0273d]" : "text-[#3a3030]"
            }`}
              style={{
                background: f.yes ? "rgba(139,26,42,0.3)" : "rgba(255,255,255,0.04)",
                border: f.yes ? "1px solid rgba(192,39,61,0.4)" : "1px solid rgba(255,255,255,0.07)",
              }}>
              {f.yes ? "×" : "·"}
            </div>
            <span className="font-garamond text-[13px] leading-snug" style={{ color: f.yes ? "#a09088" : "#3a3030" }}>{f.text}</span>
          </div>
        ))}
      </div>

      <CtaButton type={plan.ctaType}>{plan.cta}</CtaButton>
    </div>
  );
}

export default PlanCard;