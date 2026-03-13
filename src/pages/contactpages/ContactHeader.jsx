export default function ContactHeader() {
  return (
    <div className="relative z-20 flex flex-col items-center w-full">

      {/* Breadcrumb */}
      <div
        className="flex items-center gap-2 mb-8"
        style={{ fontFamily: "'Noto Serif JP', serif", fontSize: 10, letterSpacing: 3, color: "#C4B49A" }}
      >
        <span style={{ color: "#C0392B" }}>武士道</span>
        <span>·</span>
        <span>名誉</span>
        <span>·</span>
        <span>誠意</span>
      </div>

      {/* Heading */}
      <div className="text-center mb-3">
        <h1 style={{ fontFamily: "'Cinzel', serif", fontSize: "clamp(40px, 6.5vw, 84px)", fontWeight: 900, letterSpacing: 3, lineHeight: 1 }}>
          <span style={{ fontFamily: "'Noto Serif JP', serif", fontWeight: 700, color: "#C0392B", marginRight: 14 }}>
            連絡
          </span>
          <span style={{ color: "#F5ECD7" }}>CONTACT</span>
        </h1>
      </div>

      {/* Tagline */}
      <p
        className="text-center mb-2"
        style={{ fontFamily: "'Cormorant Garamond', serif", fontStyle: "italic", fontSize: "clamp(13px, 1.7vw, 17px)", color: "#C4B49A", letterSpacing: 4 }}
      >
        SEND YOUR MESSENGER · 使者を送れ · Every path begins with a single step
      </p>

      <p
        className="text-center mb-12"
        style={{ fontFamily: "'Noto Serif JP', serif", fontSize: 9, color: "rgba(196,180,154,0.4)", letterSpacing: 6 }}
      >
        武士道 · JARUKA CAREERS · 誠意ある道を歩め
      </p>

      {/* Ornament */}
      <div className="flex items-center gap-4 mb-12" style={{ width: 260 }}>
        <div className="flex-1 h-px" style={{ background: "linear-gradient(90deg, transparent, #8B1A1A)" }} />
        <div className="w-2.5 h-2.5 rotate-45" style={{ background: "#C0392B", boxShadow: "0 0 10px #C0392B" }} />
        <div className="flex-1 h-px" style={{ background: "linear-gradient(90deg, #8B1A1A, transparent)" }} />
      </div>

    </div>
  );
}