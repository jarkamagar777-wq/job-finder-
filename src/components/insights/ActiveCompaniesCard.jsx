import { data } from "./data";
function ActiveCompaniesCard() {
  return (
    <div className="card-base relative p-6" style={{ gridColumn: "span 2" }}>
      <div className="flex items-start justify-between mb-5">
        <div>
          <p className="cinzel dim-text" style={{ fontSize: 9, letterSpacing: "0.22em" }}>MOST ACTIVE DOJO</p>
          <p className="noto primary-text" style={{ fontSize: 15, fontWeight: 500, marginTop: 3 }}>活躍企業</p>
        </div>
        <a className="cinzel secondary-text" style={{ fontSize: 9, letterSpacing: "0.2em", cursor: "pointer", borderBottom: "1px solid rgba(160,30,50,0.3)" }}>
          全て見る · VIEW ALL
        </a>
      </div>
      <div className="grid grid-cols-4 gap-3">
        {data.companies.map((c, i) => (
          <div key={i} className="card-base relative p-4" style={{ cursor: "pointer" }}>
            <div className="flex items-center gap-3 mb-3">
              <div style={{
                width: 36, height: 36, borderRadius: 8, flexShrink: 0,
                background: ["#3d0f1a", "#0f1a3d", "#1a3d0f", "#3d2f0f"][i],
                border: "1px solid rgba(160,30,50,0.25)",
                display: "flex", alignItems: "center", justifyContent: "center"
              }}>
                <span className="noto primary-text" style={{ fontSize: 14 }}>{c.jp}</span>
              </div>
              <div>
                <p className="garamond primary-text" style={{ fontSize: 13, fontWeight: 500 }}>{c.name}</p>
                <span className={`cinzel ${c.type === "Elite" ? "tag-elite" : "tag-remote"}`} style={{ padding: "2px 7px", borderRadius: 10, fontSize: 7 }}>
                  {c.type === "Elite" ? "精鋭 ELITE" : "遠隔 REMOTE"}
                </span>
              </div>
            </div>
            <div style={{ borderTop: "1px solid rgba(160,30,50,0.12)", paddingTop: 10 }}>
              <div className="flex justify-between">
                <div>
                  <p className="cinzel dim-text" style={{ fontSize: 7, letterSpacing: "0.15em" }}>OPEN</p>
                  <p className="cinzel gold-text" style={{ fontSize: 16, fontWeight: 600 }}>{c.open}</p>
                </div>
                <div style={{ textAlign: "right" }}>
                  <p className="cinzel dim-text" style={{ fontSize: 7, letterSpacing: "0.15em" }}>TREND</p>
                  <p className="cinzel" style={{ fontSize: 13, color: "#4caf82" }}>{c.growth} 件</p>
                </div>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
export default ActiveCompaniesCard;