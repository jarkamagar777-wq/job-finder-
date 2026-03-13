import { useState, useEffect } from "react";
import Navbar from "./components/Navbar.jsx";
import Explore from "./pages/Explore.jsx";
import Jobcard from "./components/Jobcard.jsx";
import Footer from "./components/Footer.jsx";
import {
  createBrowserRouter,
  createRoutesFromElements,
  Route,
  RouterProvider,
} from "react-router-dom";
import Rootlayout from "./rootlayout/Rootlayout.jsx";
import Companies, { companyLoader } from "./pages/Companies.jsx";
import CompanyLayout from "./rootlayout/companyLayout.jsx";
import InsightLayout from "./rootlayout/InsightLayout.jsx";
import MainPricing from "./components/pricing/MainPricing.jsx";
import ContactSection from "./pages/contactpages/ContactSection.jsx";



const jobs = [
  {
    id: 1,
    title: "上級デザイナー",
    titleEn: "Senior Product Designer",
    company: "刀剣スタジオ",
    companyEn: "Katana Studio",
    logo: "刀",
    location: "東京, 日本",
    type: "正社員",
    salary: "¥15M – ¥20M",
    tags: ["Figma", "UX研究", "デザイン"],
    posted: "2日前",
    applicants: 47,
    featured: true,
    remote: true,
    color: "red",
  },
  {
    id: 2,
    title: "主任エンジニア",
    titleEn: "Lead Frontend Engineer",
    company: "侍ラボ",
    companyEn: "Samurai Labs",
    logo: "侍",
    location: "大阪, 日本",
    type: "正社員",
    salary: "¥18M – ¥25M",
    tags: ["React", "TypeScript", "武道"],
    posted: "5日前",
    applicants: 83,
    featured: false,
    remote: false,
    color: "gold",
  },
  {
    id: 3,
    title: "ブランド戦略家",
    titleEn: "Brand Strategist",
    company: "鷹の目社",
    companyEn: "Hawk Eye Co.",
    logo: "鷹",
    location: "京都, 日本",
    type: "契約",
    salary: "¥10M – ¥14M",
    tags: ["ブランド", "コピー", "戦略"],
    posted: "1日前",
    applicants: 21,
    featured: true,
    remote: true,
    color: "indigo",
  },
];

const logoColor = {
  red: "bg-red-900/40 border-red-500/40 text-red-300",
  gold: "bg-yellow-900/30 border-yellow-500/40 text-yellow-300",
  indigo: "bg-indigo-900/30 border-indigo-400/40 text-indigo-300",
};
const tagColor = {
  red: "border-red-500/20 text-red-300/60 hover:bg-red-500/10 hover:border-red-400/40 hover:text-red-300",
  gold: "border-yellow-500/20 text-yellow-300/60 hover:bg-yellow-500/10 hover:border-yellow-400/40 hover:text-yellow-300",
  indigo:
    "border-indigo-400/20 text-indigo-300/60 hover:bg-indigo-400/10 hover:border-indigo-400/40 hover:text-indigo-300",
};

const petals = Array.from({ length: 18 }, (_, i) => ({
  id: i,
  left: `${Math.random() * 100}%`,
  delay: `${Math.random() * 8}s`,
  duration: `${6 + Math.random() * 6}s`,
  size: Math.random() > 0.5 ? "w-3 h-3" : "w-2 h-2",
}));

export default function SamuraiJobBoard() {
  const router = createBrowserRouter(
    createRoutesFromElements(
      <Route path="/" element={<Rootlayout />}>
        <Route index element={<Explore />} />
        <Route path="jobs" element={<Jobcard />} />
        <Route
          path="companies"
          element={<CompanyLayout />}
          loader={companyLoader}
        >
          <Route index element={<Companies />} />
        </Route>
        <Route path="insights" element={<InsightLayout/>}/>
        <Route path="pricing" element={<MainPricing/>}/>
        <Route path="contact" element={<ContactSection/>}/>
        
      </Route>,
    ),
    {
      // Match the GitHub Pages repo path. This keeps routing working when deployed.
      basename: '/job-finder-/',
    },
  );

  return (
    <div className="min-h-screen bg-[#0c0a09] [font-family:'Noto_Serif_JP',serif] overflow-x-hidden">
      <link
        rel="stylesheet"
        href="https://fonts.googleapis.com/css2?family=Noto+Serif+JP:wght@300;400;500;600;700&family=Cinzel:wght@400;600;700&family=Zen+Antique&display=swap"
      />

      {/* Falling cherry blossoms */}
      <div className="fixed inset-0 pointer-events-none z-0 overflow-hidden">
        {petals.map((p) => (
          <div
            key={p.id}
            className={`petal absolute ${p.size} opacity-0`}
            style={{
              left: p.left,
              animationDelay: p.delay,
              animationDuration: p.duration,
            }}
          >
            <svg viewBox="0 0 20 20" className="w-full h-full fill-pink-300/50">
              <ellipse
                cx="10"
                cy="6"
                rx="4"
                ry="6"
                transform="rotate(0,10,10)"
              />
              <ellipse
                cx="10"
                cy="6"
                rx="4"
                ry="6"
                transform="rotate(72,10,10)"
              />
              <ellipse
                cx="10"
                cy="6"
                rx="4"
                ry="6"
                transform="rotate(144,10,10)"
              />
              <ellipse
                cx="10"
                cy="6"
                rx="4"
                ry="6"
                transform="rotate(216,10,10)"
              />
              <ellipse
                cx="10"
                cy="6"
                rx="4"
                ry="6"
                transform="rotate(288,10,10)"
              />
            </svg>
          </div>
        ))}
      </div>

      {/* Ambient glow */}
      <div className="fixed top-0 left-1/2 -translate-x-1/2 w-[800px] h-[400px] bg-red-900/10 rounded-full blur-[120px] pointer-events-none z-0" />
      <div className="fixed bottom-0 right-0 w-[400px] h-[400px] bg-amber-900/8 rounded-full blur-[100px] pointer-events-none z-0" />

      {/* Vertical Japanese text decorations */}
      <div className="fixed left-3 top-1/2 -translate-y-1/2 flex flex-col gap-2 pointer-events-none z-10 hidden xl:flex">
        {["武", "道", "名", "誉", "忠", "義"].map((k, i) => (
          <span
            key={i}
            className="text-red-900/20 text-xs [font-family:'Zen_Antique',serif] shimmer"
            style={{ animationDelay: `${i * 0.3}s` }}
          >
            {k}
          </span>
        ))}
      </div>
      <div className="fixed right-3 top-1/2 -translate-y-1/2 flex flex-col gap-2 pointer-events-none z-10 hidden xl:flex">
        {["剣", "術", "道", "場", "気", "合"].map((k, i) => (
          <span
            key={i}
            className="text-amber-900/20 text-xs [font-family:'Zen_Antique',serif] shimmer"
            style={{ animationDelay: `${i * 0.4}s` }}
          >
            {k}
          </span>
        ))}
      </div>
      <RouterProvider router={router} />

      {/* <Navbar /> */}

      {/* ── HERO ── */}
      {/* <Explore/> */}

      {/* ── JOB CARDS ── */}
      {/* <Jobcard/> */}

      {/* Footer */}
      <Footer />
    </div>
  );
}
