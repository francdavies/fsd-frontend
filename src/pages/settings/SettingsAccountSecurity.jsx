import React, { useState } from "react";

const SettingsAccountSecurity = () => {
  const [language, setLanguage] = useState("English (United States)");

  return (
    <div className="flex flex-col lg:flex-row gap-8 py-10 border-b border-[#dde8e3]">

      {/* Left label */}
      <div className="lg:w-[220px] flex-shrink-0">
        <h2 className="font-jakarta text-[16px] font-bold text-[#111918] mb-2">Account Security</h2>
        <p className="text-[13px] text-[#6b7f78] leading-relaxed">
          Manage your private credentials and account-wide preferences.
        </p>
      </div>

      {/* Right panel */}
      <div className="flex-1 bg-white rounded-2xl border border-[#dde8e3] p-6 sm:p-8 flex flex-col gap-5">

        {/* Email Address */}
        <div className="flex flex-col gap-1.5">
          <label className="text-[10.5px] font-semibold tracking-[0.1em] uppercase text-[#6b7f78]">Email Address</label>
          <div className="flex gap-3">
            <input
              type="email"
              defaultValue="james.wilson@studio-arc.com"
              className="flex-1 px-4 py-3 rounded-xl border border-[#dde8e3] bg-[#f4f7f6] text-[14px] text-[#111918] outline-none focus:border-[#2d7a63] focus:bg-white transition-colors"
            />
            <button className="bg-[#1c5c47] text-white text-[13px] font-semibold rounded-xl px-5 border-none cursor-pointer hover:bg-[#2a6b54] transition-colors flex-shrink-0">
              Verify
            </button>
          </div>
        </div>

        {/* Password */}
        <div className="flex flex-col gap-1.5">
          <label className="text-[10.5px] font-semibold tracking-[0.1em] uppercase text-[#6b7f78]">Password</label>
          <div className="flex items-center justify-between px-4 py-3 rounded-xl border border-[#dde8e3] bg-[#f4f7f6]">
            <div className="flex items-center gap-3">
              <svg className="w-4 h-4 text-[#6b7f78] flex-shrink-0" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8">
                <rect x="3" y="11" width="18" height="11" rx="2" ry="2" />
                <path d="M7 11V7a5 5 0 0 1 10 0v4" />
              </svg>
              <div>
                <p className="text-[14px] text-[#111918] tracking-widest">••••••••••••</p>
                <p className="text-[11.5px] text-[#6b7f78]">Last changed 3 months ago</p>
              </div>
            </div>
            <button className="text-[13px] font-semibold text-[#1c5c47] bg-transparent border-none cursor-pointer hover:underline flex-shrink-0">
              Update
            </button>
          </div>
        </div>

        {/* Language & Region */}
        <div className="flex flex-col gap-1.5">
          <label className="text-[10.5px] font-semibold tracking-[0.1em] uppercase text-[#6b7f78]">Language & Region</label>
          <div className="relative">
            <select
              value={language}
              onChange={(e) => setLanguage(e.target.value)}
              className="w-full px-4 py-3 rounded-xl border border-[#dde8e3] bg-[#f4f7f6] text-[14px] text-[#111918] outline-none focus:border-[#2d7a63] appearance-none cursor-pointer"
            >
              <option>English (United States)</option>
              <option>English (United Kingdom)</option>
              <option>French</option>
              <option>Spanish</option>
              <option>German</option>
            </select>
            <div className="absolute right-4 top-1/2 -translate-y-1/2 pointer-events-none text-[#6b7f78]">
              <svg className="w-4 h-4" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                <polyline points="6 9 12 15 18 9" />
              </svg>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default SettingsAccountSecurity;
