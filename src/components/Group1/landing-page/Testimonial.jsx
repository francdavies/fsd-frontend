import React from "react";
 
const stats = [
  { num: '12k+', label: 'Acts of Care' },
  { num: '98%', label: 'Safety Rating' },
  { num: '45', label: 'Active Cities' },
  { num: 'Instant', label: 'Help Matching', small: true },
];
 
const Testimonial = () => {
  return (
    <section className="px-5 sm:px-8 lg:px-12 py-14 lg:py-20 bg-white grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-20 items-center">
 
      {/* Testimonial */}
      <div className="fade-up">
        <p className="font-jakarta text-[22px] sm:text-[25px] lg:text-[27px] font-bold text-[#111918] leading-[1.45] tracking-[-0.5px] mb-8">
          The Commons isn't just an app. It's the digital infrastructure for the kindness that already exists in our streets. It made asking for help feel safe and honorable.
        </p>
        <div className="flex items-center gap-3">
          <div
            className="w-11 h-11 rounded-full flex-shrink-0 flex items-center justify-center text-lg overflow-hidden"
            style={{ background: 'linear-gradient(135deg, #c8906a, #a06040)' }}
          >
            👩
          </div>
          <div>
            <div className="flex items-center flex-wrap gap-2 text-[13.5px] font-semibold text-[#111918] mb-0.5">
              Julianna Rivers
              <span className="bg-[#e4f0ea] text-[#1c5c47] text-[9.5px] font-semibold tracking-wide uppercase px-2 py-0.5 rounded-full">
                Trusted Member
              </span>
            </div>
            <div className="text-[13px] text-[#6b7f78]">Community Lead, Portland</div>
          </div>
        </div>
      </div>
 
      {/* Stats */}
      <div className="fade-up grid grid-cols-2 gap-2.5" style={{ transitionDelay: '0.1s' }}>
        {stats.map((stat) => (
          <div key={stat.label} className="bg-[#dde8e3] rounded-2xl px-5 sm:px-6 py-6 sm:py-7">
            <div className={`font-jakarta font-extrabold text-[#1c5c47] leading-none mb-1.5 tracking-tight ${stat.small ? 'text-[22px] sm:text-[28px]' : 'text-[32px] sm:text-[40px]'}`}>
              {stat.num}
            </div>
            <div className="text-[10px] sm:text-[10.5px] tracking-widest uppercase text-[#6b7f78] font-medium">
              {stat.label}
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};
 
export default Testimonial;