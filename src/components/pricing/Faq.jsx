import React, { useState } from 'react'
import { faqs } from './data'

const Faq = () => {
      const [openFaq, setOpenFaq] = useState(null);
  return (
    <div className="max-w-[700px] mx-auto">
            <div className="text-center mb-9">
              <p className="font-cinzel text-[9px] tracking-[0.35em] text-[#5a4e4a]">FAQ · よくある質問</p>
              <p className="font-noto text-[22px] text-[#e8ddd6] font-medium mt-1.5">疑問を解く</p>
            </div>
            {faqs.map((faq, i) => (
              <div key={i} className="transition-colors hover:bg-[rgba(139,26,42,0.05)]"
                style={{ borderBottom: "1px solid rgba(160,30,50,0.14)" }}>
                <button className="w-full flex justify-between items-center py-4 cursor-pointer text-left bg-transparent border-0"
                  onClick={() => setOpenFaq(openFaq === i ? null : i)}>
                  <div className="flex items-baseline gap-2.5">
                    <span className="font-garamond text-[15px] text-[#c0a898]">{faq.q}</span>
                    <span className="font-noto text-[10px] text-[#3a3030]">{faq.jp}</span>
                  </div>
                  <span className="font-cinzel text-sm flex-shrink-0 transition-colors duration-200"
                    style={{ color: openFaq === i ? "#c0273d" : "#3a3030" }}>
                    {openFaq === i ? "−" : "+"}
                  </span>
                </button>
                {openFaq === i && (
                  <p className="font-garamond animate-fade-up text-sm text-[#6a5e58] leading-relaxed italic pb-4">{faq.a}</p>
                )}
              </div>
            ))}
          </div>
  )
}

export default Faq