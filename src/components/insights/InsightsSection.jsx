 import SectionHeader from "./SectionHeader";
import StatCards from "./StatCards";
import SalaryCard from "./SalaryCard";
import SkillsCard from "./SkillsCard";
import HiringTrendCard from "./HiringTrendCard";
import LocationCard from "./LocationCard";
import MarketSentimentCard from "./MarketSentimentCard";
import ActiveCompaniesCard from "./ActiveCompaniesCard";
 function InsightsSection() {
  return (
    <>
      {/* Sakura petals */}
      {Array.from({ length: 12 }).map((_, i) => (
        <div key={i} className="petal" style={{
          left: `${Math.random() * 100}%`,
          top: `-${Math.random() * 20}px`,
          animationDuration: `${8 + Math.random() * 10}s`,
          animationDelay: `${Math.random() * 8}s`,
          transform: `scale(${0.6 + Math.random() * 0.8})`,
        }} />
      ))}

      <div style={{ background: "#09050a", minHeight: "100vh", padding: "40px 28px", fontFamily: "'EB Garamond', serif", position: "relative" }}>
        <SectionHeader />
        <StatCards />

        {/* Row 1 */}
        <div className="grid grid-cols-2 gap-4 mb-4">
          <SalaryCard />
          <SkillsCard />
        </div>

        {/* Row 2 */}
        <div className="grid grid-cols-3 gap-4 mb-4">
          <HiringTrendCard />
          <LocationCard />
          <MarketSentimentCard />
        </div>

        {/* Row 3 — wide */}
        <div className="grid grid-cols-2 gap-4">
          <ActiveCompaniesCard />
          {/* Feature callout */}
          <div className="card-base relative p-6 flex flex-col justify-between" style={{ background: "linear-gradient(135deg, #130810 0%, #1a0815 100%)" }}>
            <div>
              <p className="cinzel dim-text" style={{ fontSize: 9, letterSpacing: "0.25em" }}>INTELLIGENCE REPORT · 情報レポート</p>
              <h3 className="noto primary-text" style={{ fontSize: 20, fontWeight: 500, marginTop: 8, lineHeight: 1.4 }}>
                Q1 2026 Japan Tech<br />Market Analysis
              </h3>
              <p className="garamond secondary-text" style={{ fontSize: 14, marginTop: 10, lineHeight: 1.7, fontStyle: "italic" }}>
                Deep-dive into hiring patterns, salary compression, and the rise of remote-first elite companies across Japan's most competitive sectors.
              </p>
              <div className="flex items-center gap-3 mt-4" style={{ flexWrap: "wrap" }}>
                {["Hiring Trends", "Salary Data", "Remote Work", "Skills Gap"].map(t => (
                  <span key={t} className="cinzel dim-text" style={{ padding: "3px 10px", border: "1px solid rgba(160,30,50,0.2)", borderRadius: 20, fontSize: 8, letterSpacing: "0.1em" }}>{t}</span>
                ))}
              </div>
            </div>
            <div className="flex items-center justify-between mt-6" style={{ borderTop: "1px solid rgba(160,30,50,0.14)", paddingTop: 16 }}>
              <div>
                <p className="cinzel dim-text" style={{ fontSize: 8 }}>PUBLISHED · 発行日</p>
                <p className="garamond secondary-text" style={{ fontSize: 13 }}>March 11, 2026 · 令和八年</p>
              </div>
              <button className="cinzel" style={{
                background: "#8b1a2a", border: "none", borderRadius: 7,
                padding: "9px 20px", fontSize: 9, letterSpacing: "0.18em",
                color: "#e8ddd6", cursor: "pointer", display: "flex", alignItems: "center", gap: 7
              }}>
                × 読む · READ REPORT
              </button>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
export default InsightsSection;