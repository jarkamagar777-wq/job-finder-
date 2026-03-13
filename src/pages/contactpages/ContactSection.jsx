"use client";

import { useEffect } from "react";
import ContactHeader from "./ContactHeader";
import ContactInfo from "./ContactInfo";
import ContactForm from "./ContactForm";
import ContactFooterCards from "./ContactFooterCards";

export default function ContactSection() {

  /* Inject Google Fonts link + keyframes once into <head> */
  useEffect(() => {
    // Font link
    if (!document.getElementById("jk-fonts")) {
      const link = document.createElement("link");
      link.id   = "jk-fonts";
      link.rel  = "stylesheet";
      link.href = "https://fonts.googleapis.com/css2?family=Cinzel:wght@400;600;700;900&family=Cormorant+Garamond:ital,wght@0,300;0,400;0,600;1,300;1,400&family=Noto+Serif+JP:wght@300;400;700&display=swap";
      document.head.appendChild(link);
    }

    // Keyframes style
    if (!document.getElementById("jk-keyframes")) {
      const style = document.createElement("style");
      style.id = "jk-keyframes";
      style.textContent = `
        @keyframes jk-glow {
          0%, 100% { box-shadow: 0 0 18px rgba(139,26,26,0.15); }
          50%       { box-shadow: 0 0 36px rgba(139,26,26,0.35); }
        }
      `;
      document.head.appendChild(style);
    }
  }, []);

  return (
    <section
      className="relative min-h-screen overflow-hidden flex flex-col items-center pt-24 pb-20"
      style={{ background: "#0A0705", fontFamily: "'Cormorant Garamond', serif" }}
    >

      {/* Ambient radial glows */}
      <div
        className="absolute inset-0 pointer-events-none"
        style={{
          background: `
            radial-gradient(ellipse 65% 42% at 50% 20%, rgba(139,26,26,0.14) 0%, transparent 70%),
            radial-gradient(ellipse 35% 28% at 12% 82%, rgba(139,26,26,0.07) 0%, transparent 55%),
            radial-gradient(ellipse 30% 22% at 88% 78%, rgba(201,168,76,0.04) 0%, transparent 55%)
          `,
        }}
      />

      {/* Kanji watermark */}
      <div
        className="absolute right-[4%] top-1/2 -translate-y-1/2 pointer-events-none select-none"
        style={{
          fontFamily: "'Noto Serif JP', serif",
          fontSize: "clamp(100px, 13vw, 185px)",
          fontWeight: 700,
          color: "rgba(139,26,26,0.055)",
          writingMode: "vertical-rl",
          letterSpacing: 14,
          lineHeight: 1,
          zIndex: 0,
        }}
      >
        連絡
      </div>

      {/* Top decorative rule */}
      <div
        className="absolute top-[88px] left-[7%] right-[7%] h-px"
        style={{ background: "linear-gradient(90deg, transparent, rgba(139,26,26,0.45), transparent)", zIndex: 10 }}
      />

      {/* ── 1. Header ── */}
      <ContactHeader />

      {/* ── 2 & 3. Info + Form ── */}
      <div className="relative z-20 w-[min(1160px,93vw)] grid grid-cols-1 lg:grid-cols-[5fr_7fr] gap-5">
        <ContactInfo />
        <ContactForm />
      </div>

      {/* ── 4. Footer cards ── */}
      <ContactFooterCards />

      {/* Bottom decorative rule */}
      <div
        className="absolute bottom-12 left-[7%] right-[7%] h-px"
        style={{ background: "linear-gradient(90deg, transparent, rgba(139,26,26,0.4), transparent)", zIndex: 10 }}
      />

    </section>
  );
}