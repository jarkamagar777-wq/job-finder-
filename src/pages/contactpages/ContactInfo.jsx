function InfoRow({ icon, label, value, note }) {
  return (
    <div className="flex items-start gap-4 group">
      <div
        className="w-11 h-11 shrink-0 rounded-xl border border-[#2a1f18] flex items-center justify-center text-[#C0392B] transition-all duration-300 group-hover:border-[#C0392B] group-hover:shadow-[0_0_16px_rgba(192,57,43,0.22)]"
        style={{ fontFamily: "'Noto Serif JP', serif", fontSize: 14, background: "rgba(139,26,26,0.09)" }}
      >
        {icon}
      </div>
      <div>
        <p style={{ fontFamily: "'Noto Serif JP', serif", fontSize: 9, letterSpacing: 4, color: "#C0392B", marginBottom: 3 }}>
          {label}
        </p>
        <p style={{ fontFamily: "'Cinzel', serif", fontSize: 13, color: "#F5ECD7", letterSpacing: 1 }}>
          {value}
        </p>
        {note && (
          <p style={{ fontSize: 11, fontStyle: "italic", color: "rgba(196,180,154,0.5)", marginTop: 2 }}>
            {note}
          </p>
        )}
      </div>
    </div>
  );
}

const SOCIALS = ["X", "in", "▶", "⊕"];

export default function ContactInfo() {
  return (
    <div
      className="relative rounded-3xl border border-[#2a1f18] overflow-hidden"
      style={{ background: "linear-gradient(145deg, #1a1008 0%, #130c08 60%, #0f0906 100%)" }}
    >
      {/* Top accent */}
      <div className="absolute top-0 left-6 right-6 h-px" style={{ background: "linear-gradient(90deg, transparent, rgba(139,26,26,0.5), transparent)" }} />
      {/* Left edge bar */}
      <div className="absolute top-6 bottom-6 left-0 w-[3px] rounded-full" style={{ background: "linear-gradient(180deg, transparent, #8B1A1A 40%, #8B1A1A 60%, transparent)" }} />

      <div className="p-9 flex flex-col flex-1">

        {/* Badge */}
        <div
          className="inline-flex items-center gap-2 mb-6 px-3 py-1.5 rounded-lg border border-[#2a1f18] w-fit"
          style={{ background: "rgba(139,26,26,0.1)" }}
        >
          <span style={{ fontFamily: "'Noto Serif JP', serif", fontSize: 13, color: "#C0392B" }}>侍</span>
          <span style={{ fontFamily: "'Noto Serif JP', serif", fontSize: 9, letterSpacing: 4, color: "#C4B49A" }}>DOJO · 道場</span>
        </div>

        {/* Title */}
        <h2 style={{ fontFamily: "'Cinzel', serif", fontSize: 22, fontWeight: 600, color: "#F5ECD7", letterSpacing: 2, lineHeight: 1.25, marginBottom: 6 }}>
          SEND WORD<br />TO THE DOJO
        </h2>
        <p style={{ fontFamily: "'Noto Serif JP', serif", fontSize: 10, letterSpacing: 3, color: "#C4B49A", marginBottom: 22 }}>
          道場へのメッセージ
        </p>

        {/* Description */}
        <p
          style={{ fontSize: 14, lineHeight: 1.85, color: "#C4B49A", fontStyle: "italic", marginBottom: 28, paddingBottom: 28, borderBottom: "1px solid #2a1f18" }}
        >
          Whether you seek counsel on your path, wish to forge an alliance, or carry
          questions from the field — our ronin are listening. Every message receives
          the honour it deserves.
        </p>

        {/* Contact methods */}
        <div className="flex flex-col gap-6 mb-8 pb-8" style={{ borderBottom: "1px solid #2a1f18" }}>
          <InfoRow icon="✉" label="電子メール · EMAIL"   value="contact@jaruka.jp"   note="Response within one moon cycle" />
          <InfoRow icon="☎" label="電話 · TELEPHONE"    value="+81 03-XXXX-XXXX"    note="Mon – Fri, Dawn to Dusk JST" />
          <InfoRow icon="⛩" label="道場 · HEADQUARTERS" value="Shibuya Dojo, Tokyo" note="渋谷区神南 1-1-1, 東京都" />
        </div>

        {/* Socials */}
        <div>
          <p style={{ fontFamily: "'Noto Serif JP', serif", fontSize: 9, letterSpacing: 4, color: "#C0392B", marginBottom: 12 }}>
            志 · FOLLOW THE PATH
          </p>
          <div className="flex gap-2.5">
            {SOCIALS.map((s) => (
              <a
                key={s}
                href="#"
                className="w-10 h-10 rounded-xl border border-[#2a1f18] flex items-center justify-center transition-all duration-300 hover:border-[#C9A84C] hover:text-[#C9A84C] hover:shadow-[0_0_14px_rgba(201,168,76,0.2)] no-underline"
                style={{ fontFamily: "'Noto Serif JP', serif", fontSize: 11, color: "#C4B49A", background: "none" }}
              >
                {s}
              </a>
            ))}
          </div>
        </div>

      </div>
    </div>
  );
}