import React from "react";
 
const DashboardHeader = () => {
  return (
    <div className="flex flex-col sm:flex-row sm:items-start sm:justify-between gap-4 mb-8">
      <div>
        <p className="font-jakarta text-[11px] font-semibold tracking-[0.12em] text-[#2d7a63] uppercase mb-1">
          Morning, Marcus
        </p>
        <h1 className="font-jakarta text-[36px] sm:text-[42px] font-extrabold text-[#111918] leading-tight tracking-[-1px] mb-2">
          Welcome back!
        </h1>
        <p className="text-[14px] text-[#6b7f78]">
          Your neighborhood is looking for 12 helping hands today.
        </p>
      </div>
 
      {/* Location Badge */}
      <div className="flex items-center gap-2 bg-white border border-[#dde8e3] rounded-full px-4 py-2 self-start sm:mt-2 flex-shrink-0">
        <svg className="w-3.5 h-3.5 text-[#2d7a63] flex-shrink-0" viewBox="0 0 24 24" fill="currentColor">
          <path d="M12 2C8.13 2 5 5.13 5 9c0 5.25 7 13 7 13s7-7.75 7-13c0-3.87-3.13-7-7-7zm0 9.5c-1.38 0-2.5-1.12-2.5-2.5s1.12-2.5 2.5-2.5 2.5 1.12 2.5 2.5-1.12 2.5-2.5 2.5z" />
        </svg>
        <span className="text-[13px] font-medium text-[#111918]">Oak Creek Commons</span>
      </div>
    </div>
  );
};
 
export default DashboardHeader;