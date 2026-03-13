/* eslint-disable react-refresh/only-export-components */

import React, { useState } from 'react'
import { useLoaderData } from 'react-router-dom';

const logoColor = {
red:   "bg-red-900/40 border-red-500/40 text-red-300",
gold:  "bg-yellow-900/30 border-yellow-500/40 text-yellow-300",
indigo:"bg-indigo-900/30 border-indigo-400/40 text-indigo-300",
};

const tagColor = {
red:   "border-red-500/20 text-red-300/60 hover:bg-red-500/10 hover:border-red-400/40 hover:text-red-300",
gold:  "border-yellow-500/20 text-yellow-300/60 hover:bg-yellow-500/10 hover:border-yellow-400/40 hover:text-yellow-300",
indigo:"border-indigo-400/20 text-indigo-300/60 hover:bg-indigo-400/10 hover:border-indigo-400/40 hover:text-indigo-300",
};

const Companies = () => {

const companydata = useLoaderData() ?? [];
const [activeJob, setActiveJob] = useState(null);
const [saved, setSaved] = useState({});

console.log(companydata);

return (

<div className="relative z-10 max-w-3xl mx-auto px-4 pb-20 flex flex-col gap-5">

  {/* Header */}

  <div className="flex items-center justify-between mb-2">

    <div className="flex items-center gap-3">
      <div className="w-1 h-8 bg-gradient-to-b from-red-500 to-red-900/0 rounded-full" />
      <span className="[font-family:'Cinzel',serif] text-xs text-stone-500 tracking-[3px] uppercase">
        Open Positions · 求人情報
      </span>
    </div>

    <span className="[font-family:'Cinzel',serif] text-[10px] text-red-700/50 border border-red-900/25 px-3 py-1 rounded-full">
      {companydata.length} 求人
    </span>

  </div>

  {companydata.map((comp, idx) => (

    <div
      key={comp.id}
      onClick={() => setActiveJob(comp.id)}

      className={`fade-up relative cursor-pointer rounded-2xl p-6 border transition-all duration-500 overflow-hidden group
      ${activeJob === comp.id
        ? "bg-red-950/30 border-red-700/50 shadow-[0_0_40px_rgba(180,30,30,0.15)]"
        : "bg-stone-950/60 border-stone-800/30 hover:border-red-900/50 hover:-translate-y-1 hover:shadow-[0_12px_40px_rgba(0,0,0,0.5)]"
      }`}

      style={{ animationDelay: `${idx * 0.1}s` }}
    >

      {/* Decorations */}

      <div className="absolute top-3 left-3 w-4 h-4 border-t border-l border-red-700/30 rounded-tl" />
      <div className="absolute top-3 right-3 w-4 h-4 border-t border-r border-red-700/30 rounded-tr" />
      <div className="absolute bottom-3 left-3 w-4 h-4 border-b border-l border-red-700/20 rounded-bl" />
      <div className="absolute bottom-3 right-3 w-4 h-4 border-b border-r border-red-700/20 rounded-br" />

      {activeJob === comp.id && (
        <div className="absolute top-0 left-8 right-8 h-px bg-gradient-to-r from-transparent via-red-500/60 to-transparent" />
      )}

      {/* Watermark */}

      <div className="absolute right-6 top-1/2 -translate-y-1/2 [font-family:'Zen_Antique',serif] text-8xl text-stone-800/10 pointer-events-none select-none group-hover:text-red-900/10 transition-colors duration-500">
        {comp.logo}
      </div>

      <div className="flex gap-4 items-start relative">

        {/* Logo */}

        <div className={`w-14 h-14 rounded-xl flex items-center justify-center text-2xl border shrink-0 [font-family:'Zen_Antique',serif] ${logoColor[comp.color || "red"]}`}>
          {comp.logo}
        </div>

        <div className="flex-1 min-w-0">

          <div className="flex items-center gap-2 flex-wrap mb-1">

            <span className="text-stone-500 text-xs [font-family:'Cinzel',serif] tracking-wider">
              {comp.companyEn}
            </span>

            <span className="text-stone-600 text-xs">·</span>

            <span className="[font-family:'Zen_Antique',serif] text-stone-500 text-xs">
              {comp.name}
            </span>

            {comp.featured && (
              <span className="bg-red-950/60 border border-red-700/40 text-red-400 text-[9px] [font-family:'Cinzel',serif] tracking-widest uppercase px-2 py-0.5 rounded-full">
                精鋭 Elite
              </span>
            )}

            {comp.remote && (
              <span className="bg-amber-950/40 border border-amber-700/25 text-amber-500/70 text-[9px] [font-family:'Cinzel',serif] tracking-widest px-2 py-0.5 rounded-full">
                遠隔 Remote
              </span>
            )}

          </div>

          <h2 className="[font-family:'Zen_Antique',serif] text-xl text-white/90 mb-0.5">
            {comp.name}
          </h2>

          <p className="[font-family:'Cinzel',serif] text-xs text-stone-500 tracking-wider mb-3">
            {comp.companyEn}
          </p>

          <div className="flex flex-wrap gap-2">

            {comp.tags?.map((tag) => (

              <span
                key={tag}
                className={`text-[11px] px-3 py-1 rounded-full border transition-all duration-200 cursor-default [font-family:'Cinzel',serif] tracking-wide ${tagColor[comp.color || "red"]}`}
              >
                {tag}
              </span>

            ))}

          </div>

        </div>

        {/* Save */}

        <button
          onClick={(e) => {
            e.stopPropagation();
            setSaved((s) => ({ ...s, [comp.id]: !s[comp.id] }));
          }}

          className={`w-9 h-9 rounded-xl flex items-center justify-center border transition-all duration-200 text-base shrink-0
          ${saved[comp.id]
            ? "bg-red-950/60 border-red-600/50 text-red-400"
            : "bg-stone-900/50 border-stone-700/30 text-stone-600 hover:border-red-800/50 hover:text-red-500"
          }`}
        >
          {saved[comp.id] ? "♥" : "♡"}
        </button>

      </div>

      {/* Divider */}

      <div className="my-4 h-px bg-gradient-to-r from-transparent via-stone-700/25 to-transparent" />

      {/* Footer */}

      <div className="flex items-center justify-between flex-wrap gap-4">

        <div className="flex flex-wrap gap-4">

          {[
            { icon: "⛩", label: comp.location },
            { icon: "⚔", label: comp.type },
            { icon: "🌸", label: `${comp.applicants}名` },
            { icon: "🕐", label: comp.posted },
          ].map(({ icon, label }) => (

            <span key={label} className="flex items-center gap-1.5 text-stone-500 text-xs [font-family:'Cinzel',serif] tracking-wide">
              <span>{icon}</span>{label}
            </span>

          ))}

        </div>

        <div className="flex items-center gap-4">

          <div>
            <div className="text-stone-600 text-[9px] [font-family:'Cinzel',serif] tracking-widest uppercase mb-0.5">
              報酬 Salary
            </div>

            <div className="text-yellow-500/80 font-semibold text-sm [font-family:'Cinzel',serif]">
              {comp.salary}
            </div>

          </div>

          <button
            onClick={(e) => e.stopPropagation()}

            className="bg-gradient-to-r from-red-900/60 to-red-800/40 hover:from-red-800/70 hover:to-red-700/50 border border-red-700/40 hover:border-red-500/60 text-red-300 [font-family:'Cinzel',serif] font-semibold text-[10px] tracking-widest uppercase px-5 py-2.5 rounded-xl transition-all duration-300 hover:shadow-[0_0_20px_rgba(200,50,50,0.25)] hover:-translate-y-0.5"
          >
            ⚔ 応募する
          </button>

        </div>

      </div>

    </div>

  ))}

</div>


)
}

export default Companies

import companiesData from "../assets/companies.json";

export const companyLoader = async () => {
  // Use bundled JSON rather than a localhost API so the app works on GitHub Pages.
  return companiesData.companies ?? [];
}
