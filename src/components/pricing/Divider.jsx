import React from 'react'

const Divider = () => {
  return (
    <div className="flex items-center justify-center gap-4 mb-5">
              <div className="h-px max-w-[180px] flex-1" style={{ background: "linear-gradient(90deg,transparent,rgba(192,39,61,0.3),transparent)" }} />
              <span className="animate-torii text-[28px] opacity-25 select-none">⛩</span>
              <div className="h-px max-w-[180px] flex-1" style={{ background: "linear-gradient(90deg,transparent,rgba(192,39,61,0.3),transparent)" }} />
            </div>
  )
}

export default Divider;