import React from "react";
 
const ServicesHero = () => {
  return (
    <section className="px-5 sm:px-10 lg:px-16 pt-14 pb-10 bg-[#eef3f1] relative">
      {/* Eyebrow */}
      <div className="inline-block bg-[#c6ece0] text-[#1a5c40] text-[10.5px] font-semibold tracking-[0.12em] uppercase px-3 py-1.5 rounded-full mb-6">
        Our Ecosystem
      </div>
 
      {/* Heading */}
      <h1 className="font-jakarta text-[40px] sm:text-[52px] lg:text-[62px] font-extrabold text-[#111918] leading-[1.05] tracking-[-1.5px] mb-4 max-w-[560px]">
        Human connection,<br />
        <span className="text-[#2d7a63] italic">digitally restored.</span>
      </h1>
 
      {/* Description */}
      <p className="text-[14.5px] text-[#6b7f78] leading-relaxed max-w-[400px] mb-2">
        The Commons is built on four pillars of mutual aid. We believe that everyone has something to teach, something to give, and moments where they need a helping hand.
      </p>
 
      {/* Decorative teal circle button top-right */}
      <div className="absolute top-16 right-10 lg:right-20 w-14 h-14 bg-[#1d4d3c] rounded-full hidden sm:flex items-center justify-center shadow-lg">
        <svg className="w-6 h-6 text-white" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
          <circle cx="12" cy="12" r="4" />
          <line x1="12" y1="2" x2="12" y2="4" />
          <line x1="12" y1="20" x2="12" y2="22" />
          <line x1="2" y1="12" x2="4" y2="12" />
          <line x1="20" y1="12" x2="22" y2="12" />
          <line x1="4.93" y1="4.93" x2="6.34" y2="6.34" />
          <line x1="17.66" y1="17.66" x2="19.07" y2="19.07" />
          <line x1="4.93" y1="19.07" x2="6.34" y2="17.66" />
          <line x1="17.66" y1="6.34" x2="19.07" y2="4.93" />
        </svg>
      </div>
    </section>
  );
};
 
export default ServicesHero;