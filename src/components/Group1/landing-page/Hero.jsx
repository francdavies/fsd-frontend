import React from "react";
 
const people = [
  { color: '#2d6b58', height: '64px' },
  { color: '#1e3d32', height: '52px' },
  { color: '#c17a6a', height: '60px' },
  { color: '#d4aa88', height: '50px' },
  { color: '#4a7a68', height: '66px' },
  { color: '#d4874a', height: '48px' },
];
 
const Hero = () => {
  return (
    <section className="flex flex-col lg:flex-row items-start justify-between gap-10 px-5 sm:px-8 lg:px-12 pt-12 lg:pt-16 pb-16 lg:pb-20 bg-white">
 
      {/* Left Content */}
      <div className="fade-up w-full lg:max-w-[430px] pt-1">
        <p className="text-[10.5px] tracking-[0.14em] uppercase text-[#6b7f78] font-medium mb-6">
          A Digital Sanctuary for Care
        </p>
        <h1 className="font-jakarta text-[40px] sm:text-[52px] lg:text-[60px] leading-[1.03] font-extrabold text-[#111918] tracking-[-1.5px] mb-5">
          The strength of<br />
          <span className="text-[#2d7a63] italic">community</span><br />
          in your pocket.
        </h1>
        <p className="text-[14px] lg:text-[14.5px] leading-relaxed text-[#6b7f78] mb-8 max-w-[340px]">
          A high-end editorial space for local mutual aid. Connect with neighbors for tech support, shared meals, education, and essential errands.
        </p>
        <div className="flex flex-col sm:flex-row items-start sm:items-center gap-4 sm:gap-5">
          <button className="bg-[#1d4d3c] text-white rounded-full px-6 py-3 text-[14.5px] font-medium border-none cursor-pointer hover:bg-[#2a6b54] transition-colors w-full sm:w-auto text-center">
            Start your journey
          </button>
          <button className="flex items-center gap-2 text-[14.5px] text-[#3d4f49] bg-transparent border-none cursor-pointer hover:text-[#111918] transition-colors">
            <span className="w-7 h-7 rounded-full border border-[#3d4f49] flex items-center justify-center text-[9px] pl-[2px] flex-shrink-0">
              ▶
            </span>
            How it works
          </button>
        </div>
      </div>
 
      {/* Right Illustration */}
      <div className="fade-up relative w-full lg:flex-shrink-0 lg:w-[370px]" style={{ transitionDelay: '0.1s' }}>
        <div
          className="w-full lg:w-[370px] h-[260px] sm:h-[300px] lg:h-[320px] rounded-2xl overflow-hidden relative"
          style={{ background: 'linear-gradient(160deg, #7a5240 0%, #4a2e1e 50%, #3a2010 100%)' }}
        >
          <div className="absolute inset-0" style={{ backgroundImage: 'repeating-linear-gradient(90deg, transparent, transparent 26px, rgba(0,0,0,0.07) 26px, rgba(0,0,0,0.07) 28px)' }} />
          <div className="absolute top-8 left-1/2 -translate-x-1/2 bg-[#3d9b84] text-white font-jakarta font-bold text-[11.5px] tracking-wide text-center leading-6 px-5 py-2.5 rounded-sm whitespace-nowrap">
            COMMUNITY<br />· SAFE · WORK
          </div>
          <div className="absolute left-14 top-5 w-1 h-24 bg-[#c8a882] rounded-sm">
            <div className="absolute -bottom-1 -left-3.5 w-8 h-8 rounded-full" style={{ background: 'radial-gradient(circle, rgba(255,232,150,0.7) 0%, rgba(244,192,80,0.3) 50%, transparent 70%)' }} />
          </div>
          <div className="absolute bottom-11 left-1/2 -translate-x-1/2 w-[270px] h-[18px] bg-[#c49a62] rounded" />
          <div className="absolute bottom-14 left-1/2 -translate-x-1/2 flex gap-2 items-end">
            {people.map((person, index) => (
              <div key={index} className="w-[30px] rounded-t-full rounded-b-sm relative" style={{ backgroundColor: person.color, height: person.height }}>
                <div className="absolute -top-5 left-1/2 -translate-x-1/2 w-[22px] h-[22px] rounded-full" style={{ backgroundColor: person.color, filter: 'brightness(1.15)' }} />
              </div>
            ))}
          </div>
        </div>
 
        {/* Live Activity Chip */}
        <div className="absolute -bottom-3.5 left-4 bg-white rounded-xl px-4 py-3 w-[205px]" style={{ boxShadow: '0 8px 24px rgba(0,0,0,0.13)' }}>
          <div className="flex items-center gap-1.5 mb-1">
            <span className="w-[7px] h-[7px] bg-green-500 rounded-full flex-shrink-0" />
            <span className="text-[11px] text-[#6b7f78] font-medium">Live Activity</span>
          </div>
          <p className="text-[12.5px] text-[#111918] leading-snug">
            "Sarah just shared a fresh loaf of sourdough in Sector 4"
          </p>
        </div>
      </div>
    </section>
  );
};
 
export default Hero;