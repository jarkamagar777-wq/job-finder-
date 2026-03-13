import { data } from "./data";
function SalaryCard() {
  return (
    <div className="card-base relative p-6" style={{ gridColumn: "span 1" }}>
      <div className="flex items-start justify-between mb-5">
        <div>
          <p className="cinzel dim-text" style={{ fontSize: 9, letterSpacing: "0.22em" }}>SALARY BENCHMARKS</p>
          <p className="noto primary-text" style={{ fontSize: 15, fontWeight: 500, marginTop: 3 }}>給与水準</p>
        </div>
        <span className="cinzel tag-elite" style={{ padding: "3px 10px", borderRadius: 20, fontSize: 8 }}>精鋭 ELITE</span>
      </div>
      <div style={{ display: "flex", flexDirection: "column", gap: 14 }}>
        {data.salaries.map((s, i) => (
          <div key={i}>
            <div className="flex justify-between items-baseline mb-1">
              <span className="garamond secondary-text" style={{ fontSize: 13 }}>{s.role}</span>
              <span className="cinzel gold-text" style={{ fontSize: 11 }}>¥{s.min}M – ¥{s.max}M</span>
            </div>
            <div className="bar-track">
              <div className={`bar-fill ${i % 2 === 0 ? "bar-crimson" : "bar-gold"}`} style={{ width: `${s.pct}%` }} />
            </div>
          </div>
        ))}
      </div>
      <p className="garamond secondary-text" style={{ fontSize: 11, marginTop: 16, fontStyle: "italic" }}>Annual · Tokyo market · ¥M = million yen</p>
    </div>
  );
}
export default SalaryCard;