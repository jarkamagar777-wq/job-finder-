import { data } from "./data";
function MarketSentimentCard() {
  const segments = [
    { label: "Tech", jp: "技術", pct: 42, color: "#c0273d" },
    { label: "Design", jp: "設計", pct: 24, color: "#c9a84c" },
    { label: "Strategy", jp: "戦略", pct: 20, color: "#7090e0" },
    { label: "Ops", jp: "運用", pct: 14, color: "#4caf82" },
  ];
  let cumulative = 0;
  return (
    <div className="card-base relative p-6">
      <div className="mb-5">
        <p className="cinzel dim-text" style={{ fontSize: 9, letterSpacing: "0.22em" }}>MARKET BREAKDOWN</p>
        <p className="noto primary-text" style={{ fontSize: 15, fontWeight: 500, marginTop: 3 }}>市場分布</p>
      </div>
      <div style={{ position: "relative", width: 100, height: 100, margin: "0 auto 18px" }}>
        <svg viewBox="0 0 36 36" style={{ transform: "rotate(-90deg)", width: "100%", height: "100%" }}>
          {segments.map((seg, i) => {
            const circ = 2 * Math.PI * 15.9155;
            const offset = circ * (1 - cumulative / 100);
            const dash = circ * (seg.pct / 100);
            const gap = circ - dash;
            const el = (
              <circle key={i} cx="18" cy="18" r="15.9155"
                fill="none" stroke={seg.color} strokeWidth="3"
                strokeDasharray={`${dash} ${gap}`}
                strokeDashoffset={offset}
                opacity="0.85"
              />
            );
            cumulative += seg.pct;
            return el;
          })}
        </svg>
        <div style={{ position: "absolute", inset: 0, display: "flex", flexDirection: "column", alignItems: "center", justifyContent: "center" }}>
          <span className="cinzel gold-text" style={{ fontSize: 14, fontWeight: 600 }}>1.2k</span>
          <span className="cinzel dim-text" style={{ fontSize: 7 }}>ROLES</span>
        </div>
      </div>
      <div style={{ display: "flex", flexDirection: "column", gap: 7 }}>
        {segments.map((seg, i) => (
          <div key={i} className="flex items-center justify-between">
            <div className="flex items-center gap-2">
              <div style={{ width: 8, height: 8, borderRadius: 2, background: seg.color, flexShrink: 0 }} />
              <span className="garamond secondary-text" style={{ fontSize: 12 }}>{seg.label}</span>
              <span className="noto dim-text" style={{ fontSize: 9 }}>{seg.jp}</span>
            </div>
            <span className="cinzel" style={{ fontSize: 11, color: seg.color }}>{seg.pct}%</span>
          </div>
        ))}
      </div>
    </div>
  );
}
export default MarketSentimentCard;