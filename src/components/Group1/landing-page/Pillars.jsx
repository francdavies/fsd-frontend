import React from "react";
 
const pillars = [
  {
    title: 'Technical Support',
    desc: 'Bridge the digital divide. Seniors getting tech-help from digital natives, fostering intergenerational bonds.',
    icon: (
      <svg className="w-5 h-5" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8">
        <circle cx="12" cy="12" r="10" />
        <line x1="2" y1="12" x2="22" y2="12" />
        <path d="M12 2a15.3 15.3 0 0 1 4 10 15.3 15.3 0 0 1-4 10 15.3 15.3 0 0 1-4-10 15.3 15.3 0 0 1 4-10z" />
      </svg>
    ),
  },
  {
    title: 'Food Security',
    desc: 'Meal sharing, community gardens, and emergency pantry networks.',
    icon: (
      <svg className="w-5 h-5" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8">
        <path d="M12 2v4M12 18v4M8 6h8M6 10h12M8 14h8" />
      </svg>
    ),
  },
  {
    title: 'Education',
    desc: 'Skill-swaps, homework help, and local language exchange programs.',
    icon: (
      <svg className="w-5 h-5" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8">
        <path d="M22 10v6M2 10l10-5 10 5-10 5z" />
        <path d="M6 12v5c3 3 9 3 12 0v-5" />
      </svg>
    ),
  },
];
 
const Pillars = () => {
  return (
    <section className="px-5 sm:px-8 lg:px-12 py-14 lg:py-20 bg-[#eef3f1]">
 
      {/* Section Header */}
      <div className="fade-up flex flex-col sm:flex-row sm:items-start sm:justify-between gap-3 mb-8 lg:mb-9">
        <div>
          <h2 className="font-jakarta text-[32px] sm:text-[38px] lg:text-[42px] font-extrabold text-[#111918] leading-tight tracking-[-1px] mb-2.5">
            Pillars of the Commons.
          </h2>
          <p className="text-sm text-[#6b7f78] leading-relaxed max-w-[360px]">
            We've organized community care into focus areas that matter most to your daily life.
          </p>
        </div>
        <button className="text-sm text-[#1c5c47] font-semibold bg-transparent border-none cursor-pointer whitespace-nowrap hover:underline self-start sm:mt-1">
          Explore all categories →
        </button>
      </div>
 
      {/* Pillar Cards — 1 col mobile, 3 col sm+ */}
      <div className="fade-up grid grid-cols-1 sm:grid-cols-3 gap-3.5 mb-3.5" style={{ transitionDelay: '0.08s' }}>
        {pillars.map((pillar) => (
          <div key={pillar.title} className="bg-white rounded-2xl p-7 border border-[#dde8e3]">
            <div className="w-[42px] h-[42px] bg-[#e4eee9] rounded-xl flex items-center justify-center mb-5 text-[#1c5c47]">
              {pillar.icon}
            </div>
            <h3 className="font-jakarta text-base font-bold text-[#111918] mb-2">{pillar.title}</h3>
            <p className="text-[13.5px] text-[#6b7f78] leading-relaxed">{pillar.desc}</p>
          </div>
        ))}
      </div>
 
      {/* Daily Errands Wide Card — stacks on mobile */}
      <div className="fade-up flex flex-col sm:flex-row bg-white rounded-2xl border border-[#dde8e3] overflow-hidden" style={{ transitionDelay: '0.16s' }}>
        {/* Illustration */}
        <div
          className="w-full sm:w-[240px] flex-shrink-0 flex items-center justify-center py-8 sm:py-0"
          style={{ background: 'linear-gradient(140deg, #4e7040 0%, #2e4a26 100%)' }}
        >
          <svg width="150" height="110" viewBox="0 0 150 110" fill="none">
            <circle cx="32" cy="76" r="24" stroke="rgba(255,255,255,0.85)" strokeWidth="3.5" fill="none" />
            <circle cx="118" cy="76" r="24" stroke="rgba(255,255,255,0.85)" strokeWidth="3.5" fill="none" />
            <line x1="32" y1="76" x2="75" y2="34" stroke="rgba(255,255,255,0.85)" strokeWidth="3.5" />
            <line x1="75" y1="34" x2="118" y2="76" stroke="rgba(255,255,255,0.85)" strokeWidth="3.5" />
            <line x1="75" y1="34" x2="75" y2="76" stroke="rgba(255,255,255,0.85)" strokeWidth="3" />
            <line x1="32" y1="76" x2="75" y2="76" stroke="rgba(255,255,255,0.85)" strokeWidth="3" />
            <line x1="64" y1="25" x2="86" y2="25" stroke="rgba(255,255,255,0.85)" strokeWidth="3.5" strokeLinecap="round" />
            <ellipse cx="96" cy="42" rx="7" ry="9" fill="rgba(255,255,255,0.72)" />
            <line x1="96" y1="51" x2="103" y2="76" stroke="rgba(255,255,255,0.72)" strokeWidth="3" />
            <line x1="96" y1="51" x2="75" y2="34" stroke="rgba(255,255,255,0.72)" strokeWidth="3" />
            <line x1="92" y1="62" x2="108" y2="57" stroke="rgba(255,255,255,0.5)" strokeWidth="2" />
          </svg>
        </div>
 
        {/* Content */}
        <div className="flex-1 px-6 sm:px-8 py-6 sm:py-7 relative flex flex-col justify-center">
          <span className="inline-block bg-[#c6ece0] text-[#1a5c40] text-[10.5px] font-semibold tracking-widest uppercase px-3 py-1 rounded-full mb-2.5 w-fit">
            Vital Care
          </span>
          <h3 className="font-jakarta text-lg sm:text-xl font-bold text-[#111918] mb-2">Daily Errands & Support</h3>
          <p className="text-[13.5px] text-[#6b7f78] leading-relaxed max-w-[440px] pr-12 sm:pr-14">
            From pharmacy runs for the homebound to furniture assembly or walking a neighbor's dog. We make the small things easier for everyone.
          </p>
          <button className="absolute right-6 top-1/2 -translate-y-1/2 w-10 h-10 rounded-full bg-[#1d4d3c] text-white border-none text-2xl flex items-center justify-center cursor-pointer leading-none hover:bg-[#2a6b54] transition-colors">
            +
          </button>
        </div>
      </div>
    </section>
  );
};
 
export default Pillars;