import React, { useState } from "react";
import { NavLink, useLocation } from "react-router-dom";

const navLinks = [
  { id: "explore", label: "探索", roman: "Explore", to: "/" },
  { id: "jobs", label: "役割", roman: "Jobs", to: "/jobs", hot: true },
  { id: "companies", label: "会社", roman: "Companies", to: "/companies" },
  { id: "contact", label: "洞察", roman: "Insights", to: "/insights" },
  { id: "pricing", label: "価格", roman: "Pricing", to: "/pricing" },
  {id: "contact", label:"連絡", roman:"Contact", to:"/contact"}
];

const Navbar = () => {
  const { pathname } = useLocation();
  const [menuOpen, setMenuOpen] = useState(false);

  const activeLink = navLinks.find((link) => link.to === pathname) || navLinks[0];
  const activeId = activeLink.id;

  return (
    <>
      <nav className="sticky top-0 z-50 bg-[#0c0a09]/95 backdrop-blur-xl border-b border-red-900/30 relative overflow-hidden">
        {/* scanline */}
        <div className="scanline absolute inset-x-0 h-20 bg-gradient-to-b from-transparent via-red-400/3 to-transparent pointer-events-none" />
        {/* top gold line */}
        <div className="h-px bg-gradient-to-r from-transparent via-yellow-600/60 to-transparent" />

        <div className="max-w-7xl mx-auto px-4 sm:px-6">
          <div className="flex items-center justify-between h-16 gap-4">

            {/* LOGO */}
            <NavLink to="/" className="flex items-center gap-3 cursor-pointer group mon-hover shrink-0">
              <div className="relative w-10 h-10 flex items-center justify-center">
                <div className="absolute inset-0 rounded-full border border-red-700/50 group-hover:border-red-500/80 transition-colors duration-500" />
                <div className="absolute inset-1 rounded-full border border-yellow-700/30 mon-inner" />
                <span className="[font-family:'Zen_Antique',serif] text-lg text-red-400 group-hover:text-red-300 transition-colors z-10">侍</span>
              </div>
              <div className="hidden sm:block">
                <div className="[font-family:'Cinzel',serif] text-sm font-bold text-red-300/90 tracking-[3px] uppercase">Jaruka</div>
                <div className="text-[8px] text-yellow-700/60 tracking-[4px] -mt-0.5 [font-family:'Cinzel',serif]">CAREERS · 武士道</div>
              </div>
            </NavLink>

            {/* NAV LINKS */}
            <div className="hidden lg:flex items-center gap-1 relative">
              {/* brush stroke underline container */}
              <div className="absolute -bottom-px left-0 right-0 h-px bg-gradient-to-r from-transparent via-red-800/40 to-transparent" />
              {navLinks.map((link) => (
                <NavLink
                  key={link.id}
                  to={link.to}
                  end={link.to === "/"}
                  className={({ isActive }) =>
                    `relative flex flex-col items-center px-4 py-2.5 rounded-lg transition-all duration-300 group
                    ${
                      isActive
                        ? "text-red-300 bg-red-950/60 border border-red-800/40"
                        : "text-stone-400 hover:text-stone-200 hover:bg-white/[0.03] border border-transparent"
                    }`
                  }
                >
                  <span className="[font-family:'Zen_Antique',serif] text-base leading-none mb-0.5">{link.label}</span>
                  <span
                    className={`[font-family:'Cinzel',serif] text-[8px] tracking-widest uppercase transition-colors ${
                      activeId === link.id ? "text-yellow-600/70" : "text-stone-600 group-hover:text-stone-400"
                    }`}
                  >
                    {link.roman}
                  </span>
                  {activeId === link.id && (
                    <span className="absolute bottom-0 left-2 right-2 h-px bg-gradient-to-r from-transparent via-red-500 to-transparent" />
                  )}
                  {link.hot && (
                    <span className="absolute -top-1 -right-1 w-2 h-2 rounded-full bg-red-500 animate-pulse border border-red-900" />
                  )}
                </NavLink>
              ))}
            </div>

            {/* RIGHT */}
            <div className="flex items-center gap-2">
              {/* Search */}
              <div className="hidden md:flex items-center gap-2 bg-red-950/20 border border-red-900/25 hover:border-red-700/50 rounded-lg px-3 py-2 transition-all duration-300 cursor-text group">
                <span className="[font-family:'Zen_Antique',serif] text-red-700/50 text-sm">探</span>
                <span className="[font-family:'Cinzel',serif] text-[10px] text-stone-500 tracking-widest group-hover:text-stone-400 transition-colors">SEARCH_DOJO</span>
                <span className="text-red-700/40 text-xs animate-pulse">|</span>
              </div>

              {/* Bell */}
              <div className="relative cursor-pointer group">
                <div className="w-9 h-9 rounded-lg border border-red-900/25 hover:border-red-700/50 bg-red-950/20 flex items-center justify-center transition-all duration-300">
                  <svg className="w-4 h-4 text-stone-500 group-hover:text-red-300 transition-colors" fill="none" stroke="currentColor" strokeWidth={1.5} viewBox="0 0 24 24">
                    <path
                      strokeLinecap="round"
                      d="M14.857 17.082a23.848 23.848 0 0 0 5.454-1.31A8.967 8.967 0 0 1 18 9.75V9A6 6 0 0 0 6 9v.75a8.967 8.967 0 0 1-2.312 6.022c1.733.64 3.56 1.085 5.455 1.31m5.714 0a24.255 24.255 0 0 1-5.714 0m5.714 0a3 3 0 1 1-5.714 0"
                    />
                  </svg>
                </div>
                <span className="absolute -top-0.5 -right-0.5 w-2 h-2 rounded-full bg-red-500 animate-ping" />
                <span className="absolute -top-0.5 -right-0.5 w-2 h-2 rounded-full bg-red-500" />
              </div>

              {/* CTA */}
              <NavLink
                to="/post"
                className="hidden sm:flex items-center gap-2 bg-red-950/40 hover:bg-red-900/50 border border-red-700/40 hover:border-red-500/70 text-red-300 [font-family:'Cinzel',serif] font-semibold text-[10px] tracking-widest uppercase px-4 py-2.5 rounded-lg transition-all duration-300 hover:shadow-[0_0_20px_rgba(200,50,50,0.25)] group"
              >
                <span className="flame text-red-400 text-sm">⛩</span>
                求人掲載
              </NavLink>

              {/* Hamburger */}
              <button
                onClick={() => setMenuOpen((open) => !open)}
                className="lg:hidden w-9 h-9 flex flex-col items-center justify-center gap-1.5 border border-red-900/25 hover:border-red-700/50 rounded-lg transition-all duration-300"
                aria-label="Open mobile navigation"
                type="button"
              >
                <span className={`w-4 h-px bg-red-500/60 transition-all duration-300 ${menuOpen ? "rotate-45 translate-y-[3px]" : ""}`} />
                <span className={`w-4 h-px bg-red-500/60 transition-all duration-300 ${menuOpen ? "opacity-0" : ""}`} />
                <span className={`w-4 h-px bg-red-500/60 transition-all duration-300 ${menuOpen ? "-rotate-45 -translate-y-[3px]" : ""}`} />
              </button>
            </div>
          </div>
        </div>

        {/* bottom red line */}
        <div className="h-px bg-gradient-to-r from-transparent via-red-700/40 to-transparent" />
      </nav>

      {/* MOBILE MENU */}
      {menuOpen && (
        <div className="slide-in lg:hidden border-b border-red-900/25 bg-[#0c0a09]/98 backdrop-blur-xl px-6 py-4 z-40 relative">
          <div className="flex flex-col gap-1">
            {navLinks.map((link) => (
              <NavLink
                key={link.id}
                to={link.to}
                end={link.to === "/"}
                onClick={() => setMenuOpen(false)}
                className={({ isActive }) =>
                  `flex items-center justify-between px-4 py-3 rounded-lg transition-all duration-200
                    ${
                      isActive
                        ? "text-red-300 bg-red-950/60 border border-red-800/40"
                        : "text-stone-400 hover:text-stone-200 border border-transparent hover:bg-white/[0.02]"
                    }`
                }
              >
                <span className="flex items-center gap-3">
                  <span className="[font-family:'Zen_Antique',serif] text-lg">{link.label}</span>
                  <span className="[font-family:'Cinzel',serif] text-[9px] tracking-widest text-stone-600 uppercase">{link.roman}</span>
                </span>
                {link.hot && <span className="w-1.5 h-1.5 rounded-full bg-red-500 animate-pulse" />}
              </NavLink>
            ))}
          </div>
          <div className="mt-4 pt-4 border-t border-red-900/20">
            <NavLink
              to="/post"
              className="w-full bg-red-950/40 border border-red-700/40 text-red-300 [font-family:'Cinzel',serif] text-[10px] tracking-widest uppercase px-5 py-3 rounded-lg"
              onClick={() => setMenuOpen(false)}
            >
              ⛩ 求人掲載 · POST ROLE
            </NavLink>
          </div>
        </div>
      )}
    </>
  );
};

export default Navbar;
