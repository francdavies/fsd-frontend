import React, { useState } from "react";

const HelpHero = () => {
  const [search, setSearch] = useState("");

  return (
    <section className="px-5 sm:px-10 lg:px-16 pt-14 pb-10 bg-[#eef3f1]">
      {/* Heading */}
      <h1 className="font-jakarta text-[48px] sm:text-[58px] lg:text-[68px] font-extrabold text-[#111918] leading-[1.05] tracking-[-2px] mb-3">
        How can we
      </h1>
      <h1 className="font-jakarta text-[48px] sm:text-[58px] lg:text-[68px] font-extrabold leading-[1.05] tracking-[-2px] mb-8">
        <span className="text-[#2d7a63]">support you</span>{" "}
        <span className="text-[#111918]">today?</span>
      </h1>

      {/* Search bar */}
      <div className="relative max-w-[460px]">
        <svg
          className="absolute left-4 top-1/2 -translate-y-1/2 w-4 h-4 text-[#b0bfba] pointer-events-none"
          viewBox="0 0 24 24"
          fill="none"
          stroke="currentColor"
          strokeWidth="2"
        >
          <circle cx="11" cy="11" r="8" />
          <line x1="21" y1="21" x2="16.65" y2="16.65" />
        </svg>
        <input
          type="text"
          value={search}
          onChange={(e) => setSearch(e.target.value)}
          placeholder="Search for FAQs, guides, and safety tips..."
          className="w-full pl-11 pr-5 py-3.5 rounded-xl border border-[#dde8e3] bg-white text-[14px] text-[#111918] placeholder-[#b0bfba] outline-none focus:border-[#2d7a63] transition-colors"
        />
      </div>
    </section>
  );
};

export default HelpHero;