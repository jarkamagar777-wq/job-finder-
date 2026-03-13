import { data } from "./data";
function SkillsCard() {
  return (
    <div className="card-base relative p-6">
      <div className="flex items-start justify-between mb-5">
        <div>
          <p className="cinzel dim-text" style={{ fontSize: 9, letterSpacing: "0.22em" }}>IN-DEMAND SKILLS</p>
          <p className="noto primary-text" style={{ fontSize: 15, fontWeight: 500, marginTop: 3 }}>需要スキル</p>
        </div>
        <span className="cinzel tag-new" style={{ padding: "3px 10px", borderRadius: 20, fontSize: 8 }}>LIVE DATA</span>
      </div>
      <div style={{ display: "flex", flexDirection: "column", gap: 10 }}>
        {data.skills.map((s, i) => (
          <div key={i} className="flex items-center gap-3">
            <span className="cinzel dim-text" style={{ fontSize: 9, width: 14, textAlign: "right" }}>{String(i + 1).padStart(2, "0")}</span>
            <div style={{ flex: 1 }}>
              <div className="flex justify-between items-center">
                <div className="flex items-center gap-2">
                  <span className="garamond primary-text" style={{ fontSize: 14 }}>{s.name}</span>
                  <span className="noto dim-text" style={{ fontSize: 9 }}>{s.jp}</span>
                  {s.hot && <span style={{ width: 5, height: 5, borderRadius: "50%", background: "#c0273d", display: "inline-block" }} />}
                </div>
                <div className="flex items-center gap-2">
                  <span className="garamond" style={{ fontSize: 12, color: "#4caf82" }}>{s.growth}</span>
                  <span className="cinzel secondary-text" style={{ fontSize: 10 }}>{s.count}</span>
                </div>
              </div>
              <div className="bar-track" style={{ marginTop: 4 }}>
                <div className="bar-fill bar-crimson" style={{ width: `${(s.count / 284) * 100}%` }} />
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
export default SkillsCard;