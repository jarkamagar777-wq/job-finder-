import { useState } from "react";
import BillingToggle from "./components/pricing/BillingToggle";
import EnterpriseBanner from "./components/pricing/EnterpriseBanner";
import PricingCards from "./components/pricing/PricingCards";
import Divider from "./components/pricing/Divider";
import PricingHeader from "./components/pricing/PricingHeader";
import TrustStrip from "./components/pricing/TrustStrip";

const style = `
  @import url('https://fonts.googleapis.com/css2?family=Cinzel:wght@400;500;600;700&family=EB+Garamond:ital,wght@0,400;0,500;1,400&family=Noto+Serif+JP:wght@300;400;500&display=swap');

  @keyframes petal-fall {
    0%   { transform: translateY(-20px) rotate(0deg) translateX(0px); opacity: 0; }
    8%   { opacity: 0.55; }
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

const plans = [
  {
    id: "ronin",
    jp: "浪人", en: "RONIN",
    subtitle: "The wandering seeker",
    desc: "Begin your path. Explore the dojo and discover your calling without commitment.",
    monthly: 0, annual: 0,
    cta: "BEGIN YOUR PATH", ctaType: "ghost",
    color: "#8a7a74", kanji: "浪",
    features: [
      { text: "Browse 50 open positions", yes: true },
      { text: "Basic company profiles", yes: true },
      { text: "1 active application", yes: true },
      { text: "Salary benchmarks (basic)", yes: true },
      { text: "Priority listing", yes: false },
      { text: "Elite company access", yes: false },
      { text: "Insights dashboard", yes: false },
      { text: "Dedicated samurai advisor", yes: false },
    ],
  },
  {
    id: "samurai",
    jp: "侍", en: "SAMURAI",
    subtitle: "The disciplined warrior",
    desc: "Sharpen your edge. Full access to the dojo with tools to conquer any battlefield.",
    monthly: 2800, annual: 2240,
    cta: "DRAW YOUR SWORD", ctaType: "primary",
    color: "#c0273d", kanji: "侍",
    popular: true,
    features: [
      { text: "Unlimited open positions", yes: true },
      { text: "Full company profiles", yes: true },
      { text: "10 active applications", yes: true },
      { text: "Full salary benchmarks", yes: true },
      { text: "Priority listing", yes: true },
      { text: "Elite company access", yes: true },
      { text: "Insights dashboard", yes: false },
      { text: "Dedicated samurai advisor", yes: false },
    ],
  },
  {
    id: "shogun",
    jp: "将軍", en: "SHOGUN",
    subtitle: "The supreme commander",
    desc: "Command the field. Every weapon, every advantage. For those who accept nothing less.",
    monthly: 6800, annual: 5440,
    cta: "CLAIM YOUR THRONE", ctaType: "gold",
    color: "#c9a84c", kanji: "将",
    features: [
      { text: "Unlimited open positions", yes: true },
      { text: "Full company profiles", yes: true },
      { text: "Unlimited applications", yes: true },
      { text: "Full salary benchmarks", yes: true },
      { text: "Priority listing", yes: true },
      { text: "Elite company access", yes: true },
      { text: "Insights dashboard", yes: true },
      { text: "Dedicated samurai advisor", yes: true },
    ],
  },
];

const faqs = [
  { q: "Can I switch plans mid-cycle?", jp: "途中変更", a: "Yes — upgrade or downgrade at any time. We prorate the difference to the day, so you only pay for what you use." },
  { q: "What counts as an 'Elite' company?", jp: "精鋭企業", a: "Elite companies are hand-vetted dojo partners who meet our standards for culture, compensation, and growth. They are marked with the 精鋭 badge throughout the platform." },
  { q: "Is there a free trial for Samurai or Shogun?", jp: "無料体験", a: "Every paid plan comes with a 7-day full-access trial. No card required until the trial ends." },
  { q: "How does the annual discount work?", jp: "年間割引", a: "Choosing annual billing gives you 2 months free — that is a 20% saving applied immediately at checkout." },
];

const trust = [
  { icon: "⛩", en: "7-Day Free Trial", jp: "7日間無料" },
  { icon: "⚔", en: "Cancel Anytime", jp: "いつでも解約" },
  { icon: "侍", en: "Secure Payment", jp: "安全な支払い" },
  { icon: "円", en: "Yen Pricing", jp: "円建て価格" },
];

function CtaButton({ type, children }) {
  if (type === "primary") return (
    <button className="font-cinzel w-full py-3 rounded-lg text-[10px] tracking-[0.2em] text-[#f0e8e0] cursor-pointer transition-all hover:opacity-85 hover:scale-[0.98]"
      style={{ background: "linear-gradient(135deg,#8b1a2a,#c0273d)", border: "none" }}>
      {children}
    </button>
  );
  if (type === "gold") return (
    <button className="font-cinzel w-full py-3 rounded-lg text-[10px] tracking-[0.2em] text-[#0a0508] font-bold cursor-pointer transition-all hover:opacity-85 hover:scale-[0.98]"
      style={{ background: "linear-gradient(135deg,#9a7a38,#c9a84c)", border: "none" }}>
      {children}
    </button>
  );
  return (
    <button className="font-cinzel w-full py-3 rounded-lg text-[10px] tracking-[0.2em] text-[#8a7a74] cursor-pointer transition-all hover:border-[rgba(192,39,61,0.55)] hover:text-[#e8ddd6] bg-transparent"
      style={{ border: "1px solid rgba(160,30,50,0.35)" }}>
      {children}
    </button>
  );
}

// function PlanCard({ plan, billing }) {
//   const price = billing === "annual" ? plan.annual : plan.monthly;
//   const isShogun = plan.id === "shogun";
//   const isSamurai = plan.id === "samurai";

//   return (
//     <div
//       className={`animate-float relative rounded-2xl overflow-hidden transition-all duration-300 hover:-translate-y-1 cursor-pointer group`}
//       style={{
//         background: isShogun
//           ? "linear-gradient(145deg,#180d16 0%,#1e0d18 60%,#140810 100%)"
//           : "#110810",
//         border: isShogun || isSamurai
//           ? "1px solid rgba(192,39,61,0.45)"
//           : "1px solid rgba(160,30,50,0.18)",
//         boxShadow: isShogun ? "0 0 40px rgba(139,26,42,0.18),inset 0 0 60px rgba(139,26,42,0.06)" : undefined,
//         animationDelay: `${plan.id === "ronin" ? 0 : plan.id === "samurai" ? 0.6 : 1.2}s`,
//         padding: "32px 26px",
//       }}
//     >
//       {/* top shimmer line */}
//       <div className="absolute top-0 left-0 right-0 h-px opacity-0 group-hover:opacity-100 transition-opacity duration-300"
//         style={{ background: "linear-gradient(90deg,transparent,rgba(192,39,61,0.55),transparent)" }} />

//       {plan.popular && (
//         <div className="font-cinzel absolute top-0 left-1/2 -translate-x-1/2 text-[8px] tracking-[0.25em] text-[#f0e8e0] px-5 py-1 rounded-b-lg"
//           style={{ background: "linear-gradient(90deg,#8b1a2a,#c0273d)" }}>
//           精鋭 MOST CHOSEN
//         </div>
//       )}

//       {/* Header */}
//       <div className={`flex items-start justify-between mb-5 ${plan.popular ? "mt-3" : ""}`}>
//         <div>
//           <p className="font-cinzel text-[9px] tracking-[0.3em] text-[#5a4e4a]">RANK · 段位</p>
//           <div className="flex items-baseline gap-2 mt-1">
//             <span className="font-cinzel text-[22px] font-bold" style={{ color: plan.color }}>{plan.en}</span>
//             <span className="font-noto text-sm" style={{ color: plan.color, opacity: 0.7 }}>{plan.jp}</span>
//           </div>
//           <p className="font-garamond text-xs text-[#5a4e4a] italic mt-0.5">{plan.subtitle}</p>
//         </div>
//         <div className="w-11 h-11 rounded-xl flex items-center justify-center flex-shrink-0"
//           style={{
//             background: `rgba(${plan.id === "ronin" ? "138,122,116" : plan.id === "samurai" ? "192,39,61" : "201,168,76"},0.12)`,
//             border: `1px solid rgba(${plan.id === "ronin" ? "138,122,116" : plan.id === "samurai" ? "192,39,61" : "201,168,76"},0.25)`,
//           }}>
//           <span className="font-noto text-xl" style={{ color: plan.color }}>{plan.kanji}</span>
//         </div>
//       </div>

//       {/* Price */}
//       {/* <div className="mb-5">
//         <div className="flex items-baseline gap-1">
//           {price === 0 ? (
//             <span className="font-cinzel text-[38px] font-bold text-[#e8ddd6]">無料</span>
//           ) : (
//             <>
//               <span className="font-cinzel text-[13px] text-[#5a4e4a] self-start mt-2">¥</span>
//               <span className={`font-cinzel text-[38px] font-bold ${isShogun ? "shimmer-text" : ""}`}
//                 style={!isShogun ? { color: plan.color } : {}}>
//                 {price.toLocaleString()}
//               </span>
//               <span className="font-cinzel text-[10px] text-[#5a4e4a]">/mo</span>
//             </>
//           )}
//         </div>
//         {billing === "annual" && price > 0 && (
//           <p className="font-garamond text-xs text-[#4caf82] mt-0.5">
//             ¥{(price * 12).toLocaleString()} / year · 20% saved
//           </p>
//         )}
//       </div> */}

//       {/* Divider */}
//       <div className="animate-sword h-px mb-4" style={{ background: "linear-gradient(90deg,transparent,rgba(192,39,61,0.35),transparent)" }} />

//       {/* Desc */}
//       <p className="font-garamond text-[13px] text-[#6a5e58] leading-relaxed italic mb-5">{plan.desc}</p>

//       {/* Features */}
//       <div className="flex flex-col gap-2.5 mb-7">
//         {plan.features.map((f, i) => (
//           <div key={i} className="flex items-start gap-2.5">
//             <div className={`w-4 h-4 rounded-full flex items-center justify-center flex-shrink-0 mt-0.5 text-[9px] ${
//               f.yes
//                 ? "text-[#c0273d]"
//                 : "text-[#3a3030]"
//             }`}
//               style={{
//                 background: f.yes ? "rgba(139,26,42,0.3)" : "rgba(255,255,255,0.04)",
//                 border: f.yes ? "1px solid rgba(192,39,61,0.4)" : "1px solid rgba(255,255,255,0.07)",
//               }}>
//               {f.yes ? "×" : "·"}
//             </div>
//             <span className="font-garamond text-[13px] leading-snug" style={{ color: f.yes ? "#a09088" : "#3a3030" }}>{f.text}</span>
//           </div>
//         ))}
//       </div>

//       <CtaButton type={plan.ctaType}>{plan.cta}</CtaButton>
//     </div>
//   );
// }

export default function PricingSection() {
  const [billing, setBilling] = useState("monthly");
  const [openFaq, setOpenFaq] = useState(null);

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
          <PricingHeader/>
          <div className="animate-fade-up text-center mb-14">
            <p className="font-cinzel text-[10px] tracking-[0.4em] mb-4" style={{ color: "rgba(192,39,61,0.6)" }}>
              武士道 · 名誉 · 誠意
            </p>
            <h1 className="font-cinzel text-[52px] font-bold leading-tight text-[#e8ddd6]">Choose Your</h1>
            <h1 className="font-cinzel text-[52px] font-bold leading-tight mb-5">
              <span className="font-noto text-[56px]" style={{ color: "#c0273d" }}>道</span>{" "}
              <span className="shimmer-text">Path</span>
            </h1>

            {/* Torii divider */}
            <Divider />
            {/* <div className="flex items-center justify-center gap-4 mb-5">
              <div className="h-px max-w-[180px] flex-1" style={{ background: "linear-gradient(90deg,transparent,rgba(192,39,61,0.3),transparent)" }} />
              <span className="animate-torii text-[28px] opacity-25 select-none">⛩</span>
              <div className="h-px max-w-[180px] flex-1" style={{ background: "linear-gradient(90deg,transparent,rgba(192,39,61,0.3),transparent)" }} />
            </div> */}

            <p className="font-garamond text-base text-[#6a5e58] italic tracking-wide">
              FIND YOUR PATH · 道を見つける · Every warrior needs the right weapons
            </p>
            <p className="font-cinzel text-[10px] text-[#3a3030] tracking-[0.3em] mt-2">
              武士道 · JARUKA CAREERS · 名誉ある道を歩め
            </p>
          </div>

          {/* ── Billing Toggle ── */}
          <BillingToggle />
          {/* <div className="flex justify-center items-center gap-4 mb-12">
            <div className="flex items-center gap-1 p-1 rounded-full" style={{ background: "rgba(255,255,255,0.04)", border: "1px solid rgba(160,30,50,0.18)" }}>
              {["monthly", "annual"].map((opt) => (
                <button key={opt} onClick={() => setBilling(opt)}
                  className={`font-cinzel px-5 py-1.5 rounded-full text-[9px] tracking-[0.2em] cursor-pointer transition-all border-0 ${
                    billing === opt
                      ? "text-[#e8ddd6]"
                      : "text-[#5a4e4a] bg-transparent"
                  }`}
                  style={billing === opt ? { background: "rgba(139,26,42,0.5)", border: "1px solid rgba(192,39,61,0.4)" } : {}}>
                  {opt === "monthly" ? "月払い MONTHLY" : "年払い ANNUAL"}
                </button>
              ))}
            </div>
            {billing === "annual" && (
              <span className="font-cinzel text-[8px] tracking-[0.15em] text-[#4caf82] px-3 py-1 rounded-full"
                style={{ background: "rgba(76,175,130,0.15)", border: "1px solid rgba(76,175,130,0.35)" }}>
                2ヶ月無料 · 2 MONTHS FREE
              </span>
            )}
          </div> */}

          {/* ── Pricing Cards ── */}
          <PricingCards/>
          {/* <div className="grid grid-cols-3 gap-4 mb-16">
            {plans.map((plan) => (
              <PlanCard key={plan.id} plan={plan} billing={billing} />
            ))}
          </div> */}

          {/* ── Enterprise Banner ── */}
          <EnterpriseBanner/>
          {/* <div className="relative rounded-2xl px-8 py-7 mb-16 flex items-center justify-between gap-6 transition-all duration-300 hover:-translate-y-1 group"
            style={{ background: "#110810", border: "1px solid rgba(160,30,50,0.18)" }}>
            <div className="absolute top-0 left-0 right-0 h-px opacity-0 group-hover:opacity-100 transition-opacity duration-300"
              style={{ background: "linear-gradient(90deg,transparent,rgba(192,39,61,0.55),transparent)" }} />
            <div className="flex items-center gap-5">
              <span className="font-noto text-[32px] opacity-30">⚔</span>
              <div>
                <p className="font-cinzel text-[10px] tracking-[0.25em] text-[#5a4e4a]">FOR DOJO COMMANDERS · 道場主向け</p>
                <p className="font-noto text-[18px] text-[#e8ddd6] font-medium mt-1">企業プラン</p>
                <p className="font-garamond text-[13px] text-[#6a5e58] italic mt-1">
                  Post unlimited roles, access elite talent, and build your dojo. Custom pricing for teams of 5+.
                </p>
              </div>
            </div>
            <div className="flex gap-2.5 flex-shrink-0">
              <button className="font-cinzel px-5 py-2.5 rounded-lg text-[9px] tracking-[0.2em] text-[#8a7a74] cursor-pointer transition-all hover:text-[#e8ddd6] bg-transparent"
                style={{ border: "1px solid rgba(160,30,50,0.35)" }}>
                求人掲載 · POST ROLES
              </button>
              <button className="font-cinzel px-5 py-2.5 rounded-lg text-[9px] tracking-[0.2em] text-[#f0e8e0] cursor-pointer hover:opacity-85"
                style={{ background: "linear-gradient(135deg,#8b1a2a,#c0273d)", border: "none" }}>
                道場主に話す · TALK TO US
              </button>
            </div>
          </div> */}

          {/* ── Trust Strip ── */}
          {/* <div className="flex justify-center gap-12 mb-16">
            {trust.map((t, i) => (
              <div key={i} className="flex flex-col items-center gap-2">
                <span className="text-[22px] opacity-25">{t.icon}</span>
                <span className="font-cinzel text-[9px] tracking-[0.18em] text-[#5a4e4a]">{t.en}</span>
                <span className="font-noto text-[9px] text-[#3a3030]">{t.jp}</span>
              </div>
            ))}
          </div> */}

          {/* ── FAQ ── */}
          {/* <div className="max-w-[700px] mx-auto">
            <div className="text-center mb-9">
              <p className="font-cinzel text-[9px] tracking-[0.35em] text-[#5a4e4a]">FAQ · よくある質問</p>
              <p className="font-noto text-[22px] text-[#e8ddd6] font-medium mt-1.5">疑問を解く</p>
            </div>
            {faqs.map((faq, i) => (
              <div key={i} className="transition-colors hover:bg-[rgba(139,26,42,0.05)]"
                style={{ borderBottom: "1px solid rgba(160,30,50,0.14)" }}>
                <button className="w-full flex justify-between items-center py-4 cursor-pointer text-left bg-transparent border-0"
                  onClick={() => setOpenFaq(openFaq === i ? null : i)}>
                  <div className="flex items-baseline gap-2.5">
                    <span className="font-garamond text-[15px] text-[#c0a898]">{faq.q}</span>
                    <span className="font-noto text-[10px] text-[#3a3030]">{faq.jp}</span>
                  </div>
                  <span className="font-cinzel text-sm flex-shrink-0 transition-colors duration-200"
                    style={{ color: openFaq === i ? "#c0273d" : "#3a3030" }}>
                    {openFaq === i ? "−" : "+"}
                  </span>
                </button>
                {openFaq === i && (
                  <p className="font-garamond animate-fade-up text-sm text-[#6a5e58] leading-relaxed italic pb-4">{faq.a}</p>
                )}
              </div>
            ))}
          </div> */}

         <TrustStrip/>
         
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