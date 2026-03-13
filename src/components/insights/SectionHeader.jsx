import { data } from "./data";
function SectionHeader() {
  return (
    <div className="flex items-start justify-between mb-8 pb-5" style={{ borderBottom: "1px solid rgba(160,30,50,0.18)" }}>
      <div className="flex items-start gap-4">
        <div style={{ width: 3, height: 56, background: "linear-gradient(to bottom, #c0273d, transparent)", borderRadius: 2, marginTop: 2, flexShrink: 0 }} />
        <div>
          <p className="cinzel dim-text" style={{ fontSize: 10, letterSpacing: "0.35em" }}>MARKET · 市場分析</p>
          <h2 className="noto primary-text" style={{ fontSize: 26, fontWeight: 500, marginTop: 4 }}>洞察</h2>
          <p className="garamond secondary-text" style={{ fontSize: 14, fontStyle: "italic", marginTop: 2 }}>Intelligence for the modern samurai</p>
        </div>
      </div>
      <div className="flex items-center gap-2 mt-1">
        {["All", "Tech", "Design", "Strategy"].map((f, i) => (
          <button key={f} className="cinzel dim-text" style={{
            padding: "4px 14px", borderRadius: 20, fontSize: 9, letterSpacing: "0.15em",
            border: i === 0 ? "1px solid rgba(192,39,61,0.45)" : "1px solid rgba(160,30,50,0.18)",
            background: i === 0 ? "rgba(192,39,61,0.1)" : "transparent",
            color: i === 0 ? "#e8ddd6" : undefined, cursor: "pointer"
          }}>{f}</button>
        ))}
      </div>
    </div>
  );
}
export default SectionHeader;