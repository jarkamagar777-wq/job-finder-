import { data } from "./data";
function StatCards() {
  const stats = [
    { en: "OPEN POSITIONS", jp: "求人数", val: "1,247", unit: "", change: "+12%", up: true, icon: "⚔" },
    { en: "AVG SALARY", jp: "平均給与", val: "¥18.4M", unit: "", change: "+6.3%", up: true, icon: "円" },
    { en: "ELITE COMPANIES", jp: "精鋭企業", val: "38", unit: "", change: "+4", up: true, icon: "侍" },
    { en: "REMOTE ROLES", jp: "遠隔勤務", val: "42%", unit: "", change: "-2%", up: false, icon: "⛩" },
  ];
  return (
    <div className="grid grid-cols-4 gap-3 mb-4">
      {stats.map((s, i) => (
        <div key={i} className="card-base relative p-5" style={{ animationDelay: `${i * 0.08}s` }}>
          <p className="cinzel dim-text" style={{ fontSize: 8, letterSpacing: "0.22em", marginBottom: 8 }}>
            {s.en} <span className="noto" style={{ fontSize: 8 }}>{s.jp}</span>
          </p>
          <p className="cinzel gold-text" style={{ fontSize: 26, fontWeight: 600, lineHeight: 1 }}>{s.val}</p>
          <p className="garamond" style={{ fontSize: 12, marginTop: 5, color: s.up ? "#4caf82" : "#c0273d" }}>
            {s.up ? "↑" : "↓"} {s.change} <span className="secondary-text">vs last quarter</span>
          </p>
          <span style={{ position: "absolute", bottom: 12, right: 14, fontSize: 20, opacity: 0.1 }}>{s.icon}</span>
        </div>
      ))}
    </div>
  );
}
export default StatCards;