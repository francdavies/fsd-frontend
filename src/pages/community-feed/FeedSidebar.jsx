import React from "react";

const FeedSidebar = () => {
  return (
    <aside className="hidden lg:flex flex-col w-[220px] flex-shrink-0 pt-6 pr-4">

      {/* Community Hub */}
      <h2 className="font-jakarta text-[15px] font-bold text-[#111918] mb-2">
        Community Hub
      </h2>
      <p className="text-[13px] text-[#6b7f78] leading-relaxed mb-5">
        Connecting neighbors for a more collaborative digital commons.
      </p>

      {/* Community Impact card */}
      <div className="bg-[#eef3f1] rounded-2xl p-4 flex items-center gap-3">
        <div className="w-9 h-9 bg-[#c6ece0] rounded-xl flex items-center justify-center flex-shrink-0">
          <svg className="w-4.5 h-4.5 text-[#1c5c47]" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8">
            <path d="M17 21v-2a4 4 0 0 0-4-4H5a4 4 0 0 0-4 4v2" />
            <circle cx="9" cy="7" r="4" />
            <path d="M23 21v-2a4 4 0 0 0-3-3.87" />
            <path d="M16 3.13a4 4 0 0 1 0 7.75" />
          </svg>
        </div>
        <div>
          <p className="text-[12px] font-semibold text-[#111918] leading-tight">Community Impact</p>
          <p className="text-[11.5px] text-[#6b7f78]">1,240 acts of help today</p>
        </div>
      </div>
    </aside>
  );
};

export default FeedSidebar;