import { data } from "./data";
function LocationCard() {
  return (
    <div className="card-base relative p-6">
      <div className="flex items-start justify-between mb-5">
        <div>
          <p className="cinzel dim-text" style={{ fontSize: 9, letterSpacing: "0.22em" }}>TOP LOCATIONS</p>
          <p className="noto primary-text" style={{ fontSize: 15, fontWeight: 500, marginTop: 3 }}>勤務地</p>
        </div>
        <span className="cinzel tag-remote" style={{ padding: "3px 10px", borderRadius: 20, fontSize: 8 }}>遠隔 REMOTE</span>
      </div>
      <div style={{ display: "flex", flexDirection: "column", gap: 12 }}>
        {data.locations.map((l, i) => (
          <div key={i}>
            <div className="flex justify-between items-baseline mb-1">
              <div className="flex items-center gap-2">
                <span className="garamond primary-text" style={{ fontSize: 14 }}>{l.city}</span>
                <span className="noto dim-text" style={{ fontSize: 9 }}>{l.jp}</span>
              </div>
              <span className="cinzel secondary-text" style={{ fontSize: 10 }}>{l.count} 件</span>
            </div>
            <div className="bar-track">
              <div className={`bar-fill ${l.city === "Remote" ? "bar-gold" : "bar-crimson"}`} style={{ width: `${l.pct}%` }} />
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
export default LocationCard;