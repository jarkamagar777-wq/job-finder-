import React, { useState, useEffect } from 'react'


const petals = Array.from({ length: 18 }, (_, i) => ({
  id: i,
  left: `${Math.random() * 100}%`,
  delay: `${Math.random() * 8}s`,
  duration: `${6 + Math.random() * 6}s`,
  size: Math.random() > 0.5 ? "w-3 h-3" : "w-2 h-2",
}));

const Explore = () => {
  const [time, setTime] = useState(new Date());

  useEffect(() => {
    const t = setInterval(() => setTime(new Date()), 1000);
    return () => clearInterval(t);
  }, []);

  const pad = (n) => String(n).padStart(2, "0");
  const clock = `${pad(time.getHours())}:${pad(time.getMinutes())}:${pad(time.getSeconds())}`;

  return (
    <div className="relative z-10 max-w-4xl mx-auto px-6 pt-16 pb-10 text-center">
      <div className="[font-family:'Zen_Antique',serif] text-red-800/50 text-xs tracking-[8px] mb-4 uppercase">武士道 · 名誉 · 誠意</div>
      <h1 className="[font-family:'Cinzel',serif] text-4xl sm:text-6xl font-bold text-white/90 leading-tight mb-3">
        The Way of the
        <br />
        <span className="text-transparent bg-clip-text bg-gradient-to-r from-red-400 via-orange-300 to-yellow-400">
          職人 Artisan
        </span>
      </h1>
      <div className="flex items-center justify-center gap-4 my-6">
        <div className="flex-1 h-px bg-gradient-to-r from-transparent to-red-800/40" />
        <span className="[font-family:'Zen_Antique',serif] text-2xl text-red-700/60">⛩</span>
        <div className="flex-1 h-px bg-gradient-to-l from-transparent to-red-800/40" />
      </div>
      <p className="[font-family:'Cinzel',serif] text-stone-500 text-sm tracking-widest">
        FIND YOUR PATH · 道を見つける · {clock}
      </p>
    </div>
  );
};

export default Explore