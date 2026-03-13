import { useState } from "react";

function Label({ children }) {
  return (
    <span
      className="flex items-center gap-2 mb-2"
      style={{
        fontFamily: "'Noto Serif JP', serif",
        fontSize: "9px",
        letterSpacing: "4px",
        color: "#C0392B",
        textTransform: "uppercase",
      }}
    >
      <span style={{ color: "rgba(139,26,26,0.5)", fontSize: "11px" }}>—</span>
      {children}
    </span>
  );
}

function Field({ as: Tag = "input", className = "", ...props }) {
  return (
    <Tag
      {...props}
      className={`w-full bg-[rgba(10,7,5,0.55)] border border-[#2a1f18] text-[#f5ecd7] px-4 py-3.5 rounded-xl transition-all duration-300 focus:outline-none focus:border-[#C0392B] focus:bg-[rgba(139,26,26,0.07)] focus:shadow-[0_0_0_1px_rgba(192,57,43,0.3)] placeholder:text-[rgba(196,180,154,0.28)] placeholder:italic ${className}`}
      style={{ fontFamily: "'Cormorant Garamond', serif", fontSize: "15px" }}
    />
  );
}

function RankCard({ id, kanji, name, sub, checked, onChange }) {
  return (
    <label
      htmlFor={id}
      className={`flex flex-col items-center gap-1.5 py-4 px-2 rounded-2xl border cursor-pointer transition-all duration-300 select-none ${
        checked
          ? "border-[#C0392B] bg-[rgba(139,26,26,0.18)] shadow-[0_0_20px_rgba(192,57,43,0.25)]"
          : "border-[#2a1f18] bg-[rgba(22,16,13,0.5)] hover:border-[#8B1A1A] hover:bg-[rgba(139,26,26,0.08)]"
      }`}
    >
      <input
        id={id}
        type="radio"
        name="rank"
        value={id}
        checked={checked}
        onChange={onChange}
        className="sr-only"
      />
      <span style={{ fontFamily: "'Noto Serif JP', serif", fontSize: "20px", color: "#C0392B" }}>
        {kanji}
      </span>
      <span
        style={{ fontFamily: "'Cinzel', serif", fontSize: "9px", letterSpacing: "2px", color: "#F5ECD7" }}
      >
        {name}
      </span>
      <span style={{ fontFamily: "'Noto Serif JP', serif", fontSize: "9px", color: "#C4B49A" }}>
        {sub}
      </span>
    </label>
  );
}

function SuccessState({ onReset }) {
  return (
    <div className="relative z-10 flex flex-col items-center justify-center min-h-[580px] gap-6 text-center p-10">
      <div
        className="w-16 h-16 rounded-2xl border border-[#C0392B] flex items-center justify-center text-2xl"
        style={{ animation: "jk-glow 3s ease-in-out infinite" }}
      >
        ⚔
      </div>
      <div
        style={{
          fontFamily: "'Cinzel', serif",
          fontSize: "clamp(18px, 3vw, 26px)",
          color: "#F5ECD7",
          letterSpacing: "3px",
        }}
      >
        DISPATCH SENT
      </div>
      <div
        style={{
          fontFamily: "'Noto Serif JP', serif",
          fontSize: "11px",
          color: "#C0392B",
          letterSpacing: "5px",
        }}
      >
        使者が届きました
      </div>
      <p
        style={{
          fontSize: "15px",
          fontStyle: "italic",
          color: "#C4B49A",
          maxWidth: "280px",
          lineHeight: 1.8,
        }}
      >
        Your message travels the warrior's path. We shall respond with full honour.
      </p>
      <button
        onClick={onReset}
        className="mt-3 border border-[#2a1f18] rounded-xl px-8 py-3 text-[#C4B49A] hover:border-[#C0392B] hover:text-[#F5ECD7] transition-all duration-300"
        style={{
          fontFamily: "'Cinzel', serif",
          fontSize: "10px",
          letterSpacing: "3px",
          background: "none",
          cursor: "pointer",
        }}
      >
        SEND ANOTHER
      </button>
    </div>
  );
}

export default function ContactForm() {
  const [rank, setRank] = useState("samurai");
  const [done, setDone] = useState(false);
  const [form, setForm] = useState({
    name: "",
    clan: "",
    email: "",
    subject: "",
    message: "",
  });

  const set = (k) => (e) => setForm((f) => ({ ...f, [k]: e.target.value }));

  return (
    <div
      className="relative rounded-3xl border border-[#2a1f18] overflow-hidden"
      style={{
        background: "linear-gradient(150deg, #18100b 0%, #120d09 55%, #0d0907 100%)",
      }}
    >
      {/* Top accent line */}
      <div
        className="absolute top-0 left-6 right-6 h-px"
        style={{
          background: "linear-gradient(90deg, transparent, rgba(139,26,26,.5), transparent)",
        }}
      />

      {/* Background kanji watermark */}
      <div
        className="absolute bottom-[-16px] right-4 pointer-events-none select-none"
        style={{
          fontFamily: "'Noto Serif JP', serif",
          fontSize: "clamp(100px, 12vw, 155px)",
          fontWeight: 700,
          color: "rgba(139,26,26,0.04)",
          lineHeight: 1,
        }}
      >
        道
      </div>

      {done ? (
        <SuccessState onReset={() => setDone(false)} />
      ) : (
        <div className="relative z-10 p-9 lg:p-11">
          {/* Badge */}
          <div className="flex justify-center mb-7">
            <div
              className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full"
              style={{
                background: "#C0392B",
                fontFamily: "'Noto Serif JP', serif",
                fontSize: "9px",
                letterSpacing: "4px",
                color: "#F5ECD7",
              }}
            >
              <span>連絡</span>
              <span>REACH OUT</span>
            </div>
          </div>

          {/* Form heading */}
          <div
            style={{
              fontFamily: "'Cinzel', serif",
              fontSize: "19px",
              fontWeight: 600,
              color: "#F5ECD7",
              letterSpacing: "2px",
              marginBottom: "5px",
            }}
          >
            WARRIOR'S DISPATCH
          </div>
          <div
            style={{
              fontFamily: "'Noto Serif JP', serif",
              fontSize: "9px",
              letterSpacing: "4px",
              color: "#C4B49A",
              marginBottom: "28px",
            }}
          >
            使者のメッセージ · Send your message to the dojo
          </div>

          <form
            onSubmit={(e) => {
              e.preventDefault();
              setDone(true);
            }}
            className="flex flex-col gap-4"
          >
            {/* Row 1 — Name & Clan */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              <div>
                <Label>YOUR NAME · 名前</Label>
                <Field
                  name="name"
                  value={form.name}
                  onChange={set("name")}
                  placeholder="Warrior's name…"
                />
              </div>
              <div>
                <Label>CLAN · 所属</Label>
                <Field
                  name="clan"
                  value={form.clan}
                  onChange={set("clan")}
                  placeholder="Your clan or company…"
                />
              </div>
            </div>

            {/* Row 2 — Email & Subject */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              <div>
                <Label>EMAIL · 電子メール</Label>
                <Field
                  type="email"
                  name="email"
                  value={form.email}
                  onChange={set("email")}
                  placeholder="your@email.com"
                />
              </div>
              <div>
                <Label>SUBJECT · 件名</Label>
                <div className="relative">
                  <Field
                    as="select"
                    className="jk-sel cursor-pointer"
                    name="subject"
                    value={form.subject}
                    onChange={set("subject")}
                  >
                    <option value="" disabled>
                      Choose your path…
                    </option>
                    <option>Seeking employment counsel</option>
                    <option>Hiring warriors for my clan</option>
                    <option>Partnership inquiry</option>
                    <option>Pricing &amp; plans</option>
                    <option>General inquiry</option>
                  </Field>
                  <div className="absolute right-4 top-1/2 -translate-y-1/2 pointer-events-none text-[#C0392B] text-xs">
                    ▾
                  </div>
                </div>
              </div>
            </div>

            {/* Rank selector */}
            <div>
              <Label>CURRENT RANK · 現在の段位</Label>
              <div className="grid grid-cols-3 gap-3 mt-1">
                <RankCard
                  id="ronin"
                  kanji="浪"
                  name="RONIN"
                  sub="浪人"
                  checked={rank === "ronin"}
                  onChange={() => setRank("ronin")}
                />
                <RankCard
                  id="samurai"
                  kanji="侍"
                  name="SAMURAI"
                  sub="侍"
                  checked={rank === "samurai"}
                  onChange={() => setRank("samurai")}
                />
                <RankCard
                  id="shogun"
                  kanji="将"
                  name="SHOGUN"
                  sub="将軍"
                  checked={rank === "shogun"}
                  onChange={() => setRank("shogun")}
                />
              </div>
            </div>

            {/* Message */}
            <div>
              <Label>MESSAGE · メッセージ</Label>
              <Field
                as="textarea"
                className="resize-y"
                rows={4}
                name="message"
                value={form.message}
                onChange={set("message")}
                placeholder="Speak your truth. Every warrior's words are heard…"
              />
            </div>

            {/* Submit row */}
            <div className="flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4 pt-1">
              <p
                style={{
                  fontSize: "11px",
                  fontStyle: "italic",
                  color: "rgba(196,180,154,0.36)",
                  maxWidth: "175px",
                  lineHeight: 1.65,
                }}
              >
                Your message is honoured under the bushido code.
              </p>
              <button
                type="submit"
                className="flex items-center gap-3 px-9 py-4 rounded-2xl transition-all duration-300 hover:shadow-[0_0_30px_rgba(192,57,43,0.45)] hover:-translate-y-0.5 active:translate-y-0"
                style={{
                  background: "#8B1A1A",
                  border: "none",
                  cursor: "pointer",
                  fontFamily: "'Cinzel', serif",
                  fontSize: "11px",
                  letterSpacing: "3px",
                  color: "#F5ECD7",
                }}
              >
                <span style={{ fontFamily: "'Noto Serif JP', serif", fontSize: "14px" }}>
                  送信
                </span>
                SEND DISPATCH
              </button>
            </div>
          </form>
        </div>
      )}
    </div>
  );
}