import React from "react";
 
const topNeeds = ["Grocery Runs", "Pet Walking", "Garden Care"];
 
const CommunitySnapshot = () => {
  return (
    <div className="bg-white rounded-2xl border border-[#dde8e3] p-6">
      {/* Header */}
      <div className="flex items-start gap-3 mb-5">
        <div className="w-9 h-9 bg-[#e4eee9] rounded-lg flex items-center justify-center flex-shrink-0 text-[#1c5c47]">
          <svg className="w-4.5 h-4.5" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8">
            <rect x="3" y="3" width="7" height="7" rx="1" />
            <rect x="14" y="3" width="7" height="7" rx="1" />
            <rect x="3" y="14" width="7" height="7" rx="1" />
            <rect x="14" y="14" width="7" height="7" rx="1" />
          </svg>
        </div>
        <h2 className="font-jakarta text-[17px] font-bold text-[#111918] leading-tight pt-0.5">
          Community<br />Snapshot
        </h2>
      </div>
 
      {/* Fulfillment Rate */}
      <div className="mb-5">
        <div className="font-jakarta text-[44px] font-extrabold text-[#111918] leading-none tracking-tight mb-1">
          98%
        </div>
        <div className="text-[12px] text-[#6b7f78] mb-2">Request Fulfillment Rate</div>
        {/* Progress bar */}
        <div className="h-1.5 bg-[#e4eee9] rounded-full overflow-hidden">
          <div className="h-full bg-[#2d7a63] rounded-full" style={{ width: "98%" }} />
        </div>
      </div>
 
      {/* Stats row */}
      <div className="grid grid-cols-2 gap-3 mb-5">
        <div className="bg-[#eef3f1] rounded-xl px-4 py-3">
          <div className="text-[10px] tracking-[0.1em] uppercase text-[#6b7f78] font-semibold mb-1">
            Active Members
          </div>
          <div className="font-jakarta text-[26px] font-extrabold text-[#111918] leading-none tracking-tight">
            242
          </div>
        </div>
        <div className="bg-[#eef3f1] rounded-xl px-4 py-3">
          <div className="text-[10px] tracking-[0.1em] uppercase text-[#6b7f78] font-semibold mb-1">
            Total Impact
          </div>
          <div className="font-jakarta text-[26px] font-extrabold text-[#111918] leading-none tracking-tight">
            1.2k
          </div>
        </div>
      </div>
 
      {/* Top Needs */}
      <div>
        <div className="text-[10.5px] tracking-[0.1em] uppercase text-[#6b7f78] font-semibold mb-2">
          Top Needs This Week
        </div>
        <div className="flex flex-wrap gap-2">
          {topNeeds.map((need) => (
            <span
              key={need}
              className="bg-[#c6ece0] text-[#1a5c40] text-[11.5px] font-medium px-3 py-1 rounded-full"
            >
              {need}
            </span>
          ))}
        </div>
      </div>
    </div>
  );
};
 
export default CommunitySnapshot;