import React from "react";
 
const navItems = [
  {
    label: "Dashboard",
    active: true,
    icon: (
      <svg className="w-4 h-4" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8">
        <rect x="3" y="3" width="7" height="7" rx="1" />
        <rect x="14" y="3" width="7" height="7" rx="1" />
        <rect x="3" y="14" width="7" height="7" rx="1" />
        <rect x="14" y="14" width="7" height="7" rx="1" />
      </svg>
    ),
  },
  {
    label: "Profile",
    active: false,
    icon: (
      <svg className="w-4 h-4" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8">
        <circle cx="12" cy="8" r="4" />
        <path d="M4 20c0-4 3.6-7 8-7s8 3 8 7" />
      </svg>
    ),
  },
  {
    label: "Settings",
    active: false,
    icon: (
      <svg className="w-4 h-4" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8">
        <circle cx="12" cy="12" r="3" />
        <path d="M19.4 15a1.65 1.65 0 0 0 .33 1.82l.06.06a2 2 0 0 1-2.83 2.83l-.06-.06a1.65 1.65 0 0 0-1.82-.33 1.65 1.65 0 0 0-1 1.51V21a2 2 0 0 1-4 0v-.09A1.65 1.65 0 0 0 9 19.4a1.65 1.65 0 0 0-1.82.33l-.06.06a2 2 0 0 1-2.83-2.83l.06-.06A1.65 1.65 0 0 0 4.68 15a1.65 1.65 0 0 0-1.51-1H3a2 2 0 0 1 0-4h.09A1.65 1.65 0 0 0 4.6 9a1.65 1.65 0 0 0-.33-1.82l-.06-.06a2 2 0 0 1 2.83-2.83l.06.06A1.65 1.65 0 0 0 9 4.68a1.65 1.65 0 0 0 1-1.51V3a2 2 0 0 1 4 0v.09a1.65 1.65 0 0 0 1 1.51 1.65 1.65 0 0 0 1.82-.33l.06-.06a2 2 0 0 1 2.83 2.83l-.06.06A1.65 1.65 0 0 0 19.4 9a1.65 1.65 0 0 0 1.51 1H21a2 2 0 0 1 0 4h-.09a1.65 1.65 0 0 0-1.51 1z" />
      </svg>
    ),
  },
  {
    label: "Help",
    active: false,
    icon: (
      <svg className="w-4 h-4" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8">
        <circle cx="12" cy="12" r="10" />
        <path d="M9.09 9a3 3 0 0 1 5.83 1c0 2-3 3-3 3" />
        <circle cx="12" cy="17" r="0.5" fill="currentColor" />
      </svg>
    ),
  },
];
 
const Sidebar = () => {
  return (
    <aside className="hidden md:flex flex-col w-[180px] flex-shrink-0 bg-[#eef3f1] border-r border-[#dde8e3] min-h-screen">
      {/* Logo */}
      <div className="px-5 pt-6 pb-5 border-b border-[#dde8e3]">
        <div className="font-jakarta font-semibold text-[15px] text-[#111918] leading-tight">
          The Commons
        </div>
        <div className="text-[11px] text-[#6b7f78] mt-0.5">Community Member</div>
      </div>
 
      {/* New Request Button */}
      <div className="px-4 py-4">
        <button className="w-full flex items-center justify-center gap-2 bg-[#1d4d3c] text-white text-[13px] font-medium rounded-full py-2.5 border-none cursor-pointer hover:bg-[#2a6b54] transition-colors">
          <span className="text-lg leading-none">+</span>
          New Request
        </button>
      </div>
 
      {/* Nav Items */}
      <nav className="flex flex-col gap-0.5 px-3 flex-1">
        {navItems.map((item) => (
          <button
            key={item.label}
            className={`flex items-center gap-2.5 px-3 py-2.5 rounded-xl text-[13.5px] font-medium border-none cursor-pointer transition-colors text-left w-full ${
              item.active
                ? "bg-white text-[#1d4d3c] shadow-sm"
                : "bg-transparent text-[#3d4f49] hover:bg-white/60"
            }`}
          >
            <span className={item.active ? "text-[#1d4d3c]" : "text-[#6b7f78]"}>
              {item.icon}
            </span>
            {item.label}
          </button>
        ))}
      </nav>
 
      {/* User + Logout at bottom */}
      <div className="px-4 pb-5 border-t border-[#dde8e3] pt-4">
        <div className="flex items-center gap-2.5 mb-4">
          <div className="w-8 h-8 rounded-full overflow-hidden flex-shrink-0 bg-gradient-to-br from-[#c8906a] to-[#a06040] flex items-center justify-center text-white text-sm font-semibold">
            M
          </div>
          <div>
            <div className="text-[13px] font-semibold text-[#111918]">Marcus</div>
            <div className="text-[10px] text-[#6b7f78] uppercase tracking-wide">Verified Helper</div>
          </div>
        </div>
        <button className="flex items-center gap-2 text-[13px] text-[#6b7f78] bg-transparent border-none cursor-pointer hover:text-[#111918] transition-colors w-full">
          <svg className="w-4 h-4" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8">
            <path d="M9 21H5a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h4" />
            <polyline points="16 17 21 12 16 7" />
            <line x1="21" y1="12" x2="9" y2="12" />
          </svg>
          Logout
        </button>
      </div>
    </aside>
  );
};
 
export default Sidebar;