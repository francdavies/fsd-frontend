import React from "react";
import { Link } from "react-router-dom";
import SettingsPublicProfile from "./SettingsPublicProfile";
import SettingsAccountSecurity from "./SettingsAccountSecurity";
import SettingsNotifications from "./SettingsNotifications";
import SettingsPrivacy from "./SettingsPrivacy";

/* ── Sidebar nav items — Settings is active ── */
const navItems = [
  {
    label: "Dashboard",
    to: "/Dashboard",
    active: false,
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
    to: "/UserProfile",
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
    to: "/AccountSettings",
    active: true,
    icon: (
      <svg className="w-4 h-4" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8">
        <circle cx="12" cy="12" r="3" />
        <path d="M19.4 15a1.65 1.65 0 0 0 .33 1.82l.06.06a2 2 0 0 1-2.83 2.83l-.06-.06a1.65 1.65 0 0 0-1.82-.33 1.65 1.65 0 0 0-1 1.51V21a2 2 0 0 1-4 0v-.09A1.65 1.65 0 0 0 9 19.4a1.65 1.65 0 0 0-1.82.33l-.06.06a2 2 0 0 1-2.83-2.83l.06-.06A1.65 1.65 0 0 0 4.68 15a1.65 1.65 0 0 0-1.51-1H3a2 2 0 0 1 0-4h.09A1.65 1.65 0 0 0 4.6 9a1.65 1.65 0 0 0-.33-1.82l-.06-.06a2 2 0 0 1 2.83-2.83l.06.06A1.65 1.65 0 0 0 9 4.68a1.65 1.65 0 0 0 1-1.51V3a2 2 0 0 1 4 0v.09a1.65 1.65 0 0 0 1 1.51 1.65 1.65 0 0 0 1.82-.33l.06-.06a2 2 0 0 1 2.83 2.83l-.06.06A1.65 1.65 0 0 0 19.4 9a1.65 1.65 0 0 0 1.51 1H21a2 2 0 0 1 0 4h-.09a1.65 1.65 0 0 0-1.51 1z" />
      </svg>
    ),
  },
  {
    label: "Help",
    to: "/HelpSupport",
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

const AccountSettings = () => {
  return (
    <div className="flex flex-col md:flex-row min-h-screen bg-[#eef3f1] text-[#111918] font-sans">

      {/* ── SIDEBAR ── */}
      <aside className="hidden md:flex flex-col w-[180px] flex-shrink-0 bg-[#eef3f1] border-r border-[#dde8e3] min-h-screen">

        {/* Logo */}
        <div className="px-5 pt-6 pb-5 border-b border-[#dde8e3]">
          <div className="font-jakarta font-semibold text-[15px] text-[#111918] leading-tight">The Commons</div>
          <div className="text-[11px] text-[#6b7f78] mt-0.5">Community Member</div>
        </div>

        {/* New Request */}
        <div className="px-4 py-4">
          <button className="w-full flex items-center justify-center gap-2 bg-[#1d4d3c] text-white text-[13px] font-medium rounded-full py-2.5 border-none cursor-pointer hover:bg-[#2a6b54] transition-colors">
            <span className="text-lg leading-none">+</span>
            New Request
          </button>
        </div>

        {/* Nav items */}
        <nav className="flex flex-col gap-0.5 px-3 flex-1">
          {navItems.map((item) => (
            <Link
              key={item.label}
              to={item.to}
              className={`flex items-center gap-2.5 px-3 py-2.5 rounded-xl text-[13.5px] font-medium no-underline transition-colors ${
                item.active
                  ? "bg-white text-[#1d4d3c] shadow-sm"
                  : "text-[#3d4f49] hover:bg-white/60"
              }`}
            >
              <span className={item.active ? "text-[#1d4d3c]" : "text-[#6b7f78]"}>
                {item.icon}
              </span>
              {item.label}
            </Link>
          ))}
        </nav>

        {/* User + Logout */}
        <div className="px-4 pb-5 border-t border-[#dde8e3] pt-4">
          <div className="flex items-center gap-2.5 mb-4">
            <img
              src="https://randomuser.me/api/portraits/men/32.jpg"
              alt="James Wilson"
              className="w-8 h-8 rounded-full object-cover flex-shrink-0"
            />
            <div>
              <div className="text-[13px] font-semibold text-[#111918]">James Wilson</div>
              <div className="text-[10px] text-[#6b7f78] uppercase tracking-wide">Premium Member</div>
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

      {/* ── MAIN CONTENT ── */}
      <main className="flex-1 min-w-0 px-5 sm:px-8 lg:px-12 pb-32">

        {/* Page heading */}
        <div className="py-8 border-b border-[#dde8e3] mb-2">
          <h1 className="font-jakarta text-[28px] sm:text-[32px] font-extrabold text-[#1c5c47] tracking-[-0.5px] mb-2">
            Account Settings
          </h1>
          <p className="text-[13.5px] text-[#6b7f78] max-w-[440px] leading-relaxed">
            Manage your personal information, security preferences, and how you interact with The Commons community.
          </p>
        </div>

        {/* Sections */}
        <SettingsPublicProfile />
        <SettingsAccountSecurity />
        <SettingsNotifications />
        <SettingsPrivacy />
      </main>

      {/* ── STICKY BOTTOM BAR ── */}
      <div className="fixed bottom-0 left-0 right-0 bg-white border-t border-[#dde8e3] px-5 sm:px-8 lg:px-12 py-4 flex items-center justify-end gap-4 z-40">
        <button className="text-[14px] font-medium text-[#6b7f78] bg-transparent border-none cursor-pointer hover:text-[#111918] transition-colors">
          Discard changes
        </button>
        <button className="bg-[#1c5c47] text-white font-jakarta font-semibold text-[14px] rounded-full px-7 py-3 border-none cursor-pointer hover:bg-[#2a6b54] transition-colors">
          Save All Changes
        </button>
      </div>

      {/* ── BOTTOM FOOTER ── */}
      <div className="fixed bottom-16 left-0 right-0 hidden md:flex items-center justify-center gap-2 pb-2 pointer-events-none">
        <p className="text-[10px] tracking-[0.14em] uppercase text-[#b0bfba]">
          The Digital Commons Ecosystem
        </p>
      </div>
    </div>
  );
};

export default AccountSettings;
