import React from 'react'

const CompareBanner = () => {
  return (
     <div className="card" style={{ padding: "28px 32px", marginBottom: 64, display: "flex", alignItems: "center", justifyContent: "space-between", gap: 24 }}>
            <div style={{ display: "flex", alignItems: "center", gap: 20 }}>
              <span className="noto" style={{ fontSize: 32, color: "rgba(192,39,61,0.3)" }}>⚔</span>
              <div>
                <p className="cinzel" style={{ fontSize: 10, letterSpacing: "0.25em", color: "#5a4e4a" }}>FOR DOJO COMMANDERS · 道場主向け</p>
                <p className="noto" style={{ fontSize: 18, color: "#e8ddd6", fontWeight: 500, marginTop: 3 }}>企業プラン</p>
                <p className="garamond" style={{ fontSize: 13, color: "#6a5e58", fontStyle: "italic", marginTop: 2 }}>Post unlimited roles, access elite talent, and build your dojo. Custom pricing for teams of 5+.</p>
              </div>
            </div>
            <div style={{ display: "flex", gap: 10, flexShrink: 0 }}>
              <button className="btn-ghost" style={{ width: "auto", padding: "11px 22px" }}>求人掲載 · POST ROLES</button>
              <button className="btn-primary" style={{ width: "auto", padding: "11px 22px" }}>道場主に話す · TALK TO US</button>
            </div>
          </div>
  )
}

export default CompareBanner