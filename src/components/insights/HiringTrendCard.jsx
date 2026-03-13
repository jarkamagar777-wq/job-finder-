import { data } from "./data";
function HiringTrendCard() {
  const max = Math.max(...data.hiring.map(h => h.val));
  return (
    <div className="card-base relative p-6">
      <div className="flex items-start justify-between mb-5">
        <div>
          <p className="cinzel dim-text" style={{ fontSize: 9, letterSpacing: "0.22em" }}>HIRING VELOCITY</p>
          <p className="noto primary-text" style={{ fontSize: 15, fontWeight: 500, marginTop: 3 }}>採用速度</p>
        </div>
        <div className="flex items-center gap-2">
          <div className="dot-pulse" />
          <span className="cinzel" style={{ fontSize: 8, color: "#4caf82", letterSpacing: "0.15em" }}>LIVE</span>
        </div>
      </div>
      <div className="flex items-end gap-2" style={{ height: 90 }}>
        {data.hiring.map((h, i) => (
          <div key={i} style={{ flex: 1, display: "flex", flexDirection: "column", alignItems: "center", gap: 4, height: "100%" }}>
            <div style={{ flex: 1, display: "flex", alignItems: "flex-end", width: "100%" }}>
              <div
                className={`sparkline-bar ${i === data.hiring.length - 1 ? "peak" : ""}`}
                style={{ width: "100%", height: `${(h.val / max) * 100}%` }}
                title={`${h.jp}: ${h.val} postings`}
              />
            </div>
            <span className="cinzel dim-text" style={{ fontSize: 7, letterSpacing: "0.05em" }}>{h.jp}</span>
          </div>
        ))}
      </div>
      <div style={{ borderTop: "1px solid rgba(160,30,50,0.14)", marginTop: 14, paddingTop: 12 }}>
        <p className="garamond secondary-text" style={{ fontSize: 12, fontStyle: "italic" }}>
          <span className="gold-text">+41%</span> surge in postings · March 2026 vs prior quarter
        </p>
      </div>
    </div>
  );
}
export default HiringTrendCard;