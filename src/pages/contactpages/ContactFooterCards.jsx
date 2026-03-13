const CARDS = [
  { icon: "⚡", title: "SWIFT RESPONSE", sub: "Within 24 hours · 迅速な返答" },
  { icon: "⛩",  title: "OPEN DOJO",      sub: "Mon–Fri · 月曜日から金曜日"  },
  { icon: "⚔", title: "BUSHIDO CODE",   sub: "Privacy guaranteed · 武士道" },
];

export default function ContactFooterCards() {
  return (
    <div className="relative z-20 w-[min(1160px,93vw)] grid grid-cols-1 sm:grid-cols-3 gap-4 mt-5">
      {CARDS.map(({ icon, title, sub }) => (
        <div
          key={title}
          className="flex items-center gap-4 rounded-2xl border border-[#2a1f18] px-7 py-5 transition-all duration-300 hover:border-[#8B1A1A] hover:shadow-[0_0_18px_rgba(139,26,26,0.12)]"
          style={{ background: "linear-gradient(135deg, #18100b, #110c08)" }}
        >
          <div
            className="w-11 h-11 shrink-0 rounded-xl border border-[#2a1f18] flex items-center justify-center text-lg text-[#C0392B]"
            style={{ fontFamily: "'Noto Serif JP', serif", background: "rgba(139,26,26,0.09)" }}
          >
            {icon}
          </div>
          <div>
            <p style={{ fontFamily: "'Cinzel', serif", fontSize: 11, letterSpacing: 2, color: "#F5ECD7", marginBottom: 2 }}>
              {title}
            </p>
            <p style={{ fontSize: 11, fontStyle: "italic", color: "#C4B49A" }}>
              {sub}
            </p>
          </div>
        </div>
      ))}
    </div>
  );
}