import React from "react";
 
const stats = [
  { num: "2.4k", label: "Active Neighbors" },
  { num: "12m",  label: "Avg. Response Time" },
  { num: "100%", label: "Non-Profit Model" },
];
 
const StrengthInNumbers = () => {
  return (
    <section className="px-5 sm:px-10 lg:px-16 py-10 bg-[#eef3f1]">
      <div className="bg-[#1c5c47] rounded-[24px] px-8 sm:px-14 py-14 text-center">
 
        <h2 className="font-jakarta text-[28px] sm:text-[36px] font-extrabold text-white mb-4 leading-tight tracking-[-0.8px]">
          Strength in Numbers
        </h2>
        <p className="text-[14px] text-white/70 mb-12 max-w-[420px] mx-auto leading-relaxed">
          The Commons is powered by residents just like you. We measure our success not in profit, but in the resilience of our neighborhood.
        </p>
 
        {/* Stats row */}
        <div className="grid grid-cols-1 sm:grid-cols-3 gap-8 mb-12">
          {stats.map((s) => (
            <div key={s.label}>
              <div className="font-jakarta text-[44px] sm:text-[52px] font-extrabold text-white leading-none tracking-tight mb-2">
                {s.num}
              </div>
              <div className="text-[13px] text-white/60 font-medium">{s.label}</div>
            </div>
          ))}
        </div>
 
        {/* CTA button */}
        <button className="bg-white text-[#1c5c47] rounded-full px-8 py-3.5 text-[14.5px] font-semibold border-none cursor-pointer hover:bg-gray-100 transition-colors">
          Become a Member
        </button>
      </div>
    </section>
  );
};
 
export default StrengthInNumbers;