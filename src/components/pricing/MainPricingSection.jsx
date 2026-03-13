import { useState } from "react";
import Faq from "./Faq";
import TrustStrip from "./TrustStrip";
import PricingHeader from "./PricingHeader";
import BillingToggle from "./BillingToggle";
import PricingCards from "./PricingCards";
import EnterpriseBanner from "./EnterpriseBanner";

const style = `
  @import url('https://fonts.googleapis.com/css2?family=Cinzel:wght@400;500;600;700&family=EB+Garamond:ital,wght@0,400;0,500;1,400&family=Noto+Serif+JP:wght@300;400;500&display=swap');

  @keyframes petal-fall {
    0%   { transform: translateY(-20px) rotate(0deg) translateX(0px); opacity: 0; }
    8%   { opacity: 0.9; }
    92%  { opacity: 0.2; }
    100% { transform: translateY(110vh) rotate(540deg) translateX(60px); opacity: 0; }
  }
  @keyframes fadeUp {
    from { opacity: 0; transform: translateY(20px); }
    to   { opacity: 1; transform: translateY(0); }
  }
  @keyframes shimmer {
    0%   { background-position: -200% center; }
    100% { background-position: 200% center; }
  }
  @keyframes torii-glow {
    0%, 100% { opacity: 0.18; }
    50%       { opacity: 0.38; }
  }
  @keyframes float {
    0%,100% { transform: translateY(0px); }
    50%      { transform: translateY(-6px); }
  }
  @keyframes sword-slide {
    from { transform: scaleX(0); opacity: 0; }
    to   { transform: scaleX(1); opacity: 1; }
  }

  .font-cinzel { font-family: 'Cinzel', serif; }
  .font-garamond { font-family: 'EB Garamond', serif; }
  .font-noto { font-family: 'Noto Serif JP', serif; }

  .petal {
    position: fixed;
    width: 5px; height: 5px;
    background: rgba(220,120,140,0.65);
    border-radius: 50% 0 50% 0;
    pointer-events: none;
    animation: petal-fall linear infinite;
    z-index: 0;
  }

  .star-dot {
    position: fixed;
    width: 3px; height: 3px;
    background: rgba(201,168,76,0.5);
    border-radius: 50%;
    pointer-events: none;
    animation: torii-glow ease-in-out infinite;
    z-index: 0;
  }

  .shimmer-text {
    background: linear-gradient(90deg, #c9a84c 0%, #f0d080 40%, #c9a84c 60%, #9a7a38 100%);
    background-size: 200% auto;
    -webkit-background-clip: text;
    -webkit-text-fill-color: transparent;
    background-clip: text;
    animation: shimmer 3s linear infinite;
  }

  .animate-fade-up { animation: fadeUp 0.7s ease both; }
  .animate-float { animation: float 4s ease-in-out infinite; }
  .animate-sword { animation: sword-slide 1s ease both; transform-origin: left; }
  .animate-torii { animation: torii-glow 4s ease-in-out infinite; }
`;

function MainPricingSection() {
  const [billing, setBilling] = useState("monthly");

  const petals = Array.from({ length: 14 }).map((_, i) => ({
    left: `${(i * 7.3) % 100}%`,
    duration: `${9 + (i * 1.3) % 10}s`,
    delay: `${(i * 0.9) % 8}s`,
    scale: 0.7 + (i % 3) * 0.25,
  }));

  const stars = Array.from({ length: 18 }).map((_, i) => ({
    left: `${(i * 13.7 + 5) % 98}%`,
    top: `${(i * 17.3 + 8) % 92}%`,
    duration: `${3 + (i * 0.7) % 4}s`,
    delay: `${(i * 0.5) % 3}s`,
  }));

  return (
    <>
      <style>{style}</style>

      {petals.map((p, i) => (
        <div key={i} className="petal" style={{ left: p.left, animationDuration: p.duration, animationDelay: p.delay, transform: `scale(${p.scale})` }} />
      ))}
      {stars.map((s, i) => (
        <div key={i} className="star-dot" style={{ left: s.left, top: s.top, animationDuration: s.duration, animationDelay: s.delay }} />
      ))}

      <div className="relative min-h-screen px-7 pt-16 pb-20" style={{ background: "#09050a" }}>

        {/* Ambient glow */}
        <div className="fixed top-1/3 left-1/2 -translate-x-1/2 pointer-events-none"
          style={{ width: 600, height: 300, background: "radial-gradient(ellipse,rgba(139,26,42,0.08) 0%,transparent 70%)", zIndex: 0 }} />

        <div className="relative max-w-5xl mx-auto" style={{ zIndex: 2 }}>

          {/* ── Hero Header ── */}
          <PricingHeader />

          {/* ── Billing Toggle ── */}
          <BillingToggle billing={billing} setBilling={setBilling} />

          {/* ── Pricing Cards ── */}
          <PricingCards billing={billing} />

          {/* ── Enterprise Banner ── */}
          <EnterpriseBanner />

          {/* ── Trust Strip ── */}
          <TrustStrip />

          {/* ── FAQ ── */}
          <Faq />

          {/* ── Footer whisper ── */}
          <div className="text-center mt-16">
            <div className="flex items-center justify-center gap-4 mb-5">
              <div className="h-px max-w-[120px] flex-1" style={{ background: "linear-gradient(90deg,transparent,rgba(192,39,61,0.3),transparent)" }} />
              <span className="animate-torii text-xl opacity-20 select-none">⛩</span>
              <div className="h-px max-w-[120px] flex-1" style={{ background: "linear-gradient(90deg,transparent,rgba(192,39,61,0.3),transparent)" }} />
            </div>
            <p className="font-cinzel text-[9px] tracking-[0.35em] text-[#2a2020]">
              武士道 · JARUKA CAREERS · 名誉ある道を歩め
            </p>
          </div>

        </div>
      </div>
    </>
  );
}

export default MainPricingSection;