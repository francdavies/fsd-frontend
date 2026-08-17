import React, { useState } from "react";

const SettingsPrivacy = () => {
  const [visibility, setVisibility] = useState("public");

  return (
    <div className="flex flex-col lg:flex-row gap-8 py-10">

      {/* Left label */}
      <div className="lg:w-[220px] flex-shrink-0">
        <h2 className="font-jakarta text-[16px] font-bold text-[#111918] mb-2">Privacy & Visibility</h2>
        <p className="text-[13px] text-[#6b7f78] leading-relaxed">
          Control who can see your activity and profile details.
        </p>
      </div>

      {/* Right panel */}
      <div className="flex-1 flex flex-col gap-5">

        {/* Profile Visibility */}
        <div className="bg-white rounded-2xl border border-[#dde8e3] p-6 sm:p-8">
          <label className="text-[10.5px] font-semibold tracking-[0.1em] uppercase text-[#6b7f78] block mb-4">
            Profile Visibility
          </label>

          {/* Public option */}
          <button
            onClick={() => setVisibility("public")}
            className={`w-full flex items-center justify-between px-5 py-4 rounded-xl border-2 cursor-pointer transition-all mb-3 text-left ${
              visibility === "public"
                ? "border-[#1c5c47] bg-white"
                : "border-[#dde8e3] bg-[#f4f7f6]"
            }`}
          >
            <div className="flex items-center gap-3">
              <div className={`w-8 h-8 rounded-full flex items-center justify-center flex-shrink-0 ${
                visibility === "public" ? "bg-[#c6ece0]" : "bg-[#dde8e3]"
              }`}>
                <svg className="w-4 h-4 text-[#1c5c47]" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8">
                  <circle cx="12" cy="12" r="10" />
                  <line x1="2" y1="12" x2="22" y2="12" />
                  <path d="M12 2a15.3 15.3 0 0 1 4 10 15.3 15.3 0 0 1-4 10 15.3 15.3 0 0 1-4-10 15.3 15.3 0 0 1 4-10z" />
                </svg>
              </div>
              <div>
                <p className="font-jakarta text-[14px] font-bold text-[#111918]">Public</p>
                <p className="text-[12.5px] text-[#6b7f78]">Everyone on The Commons can view your profile.</p>
              </div>
            </div>
            {visibility === "public" && (
              <div className="w-6 h-6 rounded-full bg-[#1c5c47] flex items-center justify-center flex-shrink-0">
                <svg className="w-3.5 h-3.5 text-white" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5">
                  <polyline points="20 6 9 17 4 12" />
                </svg>
              </div>
            )}
          </button>

          {/* Community Only option */}
          <button
            onClick={() => setVisibility("community")}
            className={`w-full flex items-center gap-3 px-5 py-4 rounded-xl border-2 cursor-pointer transition-all text-left ${
              visibility === "community"
                ? "border-[#1c5c47] bg-white"
                : "border-[#dde8e3] bg-[#f4f7f6]"
            }`}
          >
            <div className={`w-8 h-8 rounded-full flex items-center justify-center flex-shrink-0 ${
              visibility === "community" ? "bg-[#c6ece0]" : "bg-[#dde8e3]"
            }`}>
              <svg className="w-4 h-4 text-[#1c5c47]" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8">
                <path d="M17 21v-2a4 4 0 0 0-4-4H5a4 4 0 0 0-4 4v2" />
                <circle cx="9" cy="7" r="4" />
                <path d="M23 21v-2a4 4 0 0 0-3-3.87" />
                <path d="M16 3.13a4 4 0 0 1 0 7.75" />
              </svg>
            </div>
            <div>
              <p className="font-jakarta text-[14px] font-bold text-[#111918]">Community Only</p>
              <p className="text-[12.5px] text-[#6b7f78]">Only verified members can view your profile details.</p>
            </div>
          </button>
        </div>

        {/* Delete Account */}
        <div className="bg-white rounded-2xl border border-[#f8d7d7] p-6 sm:p-8">
          <h3 className="font-jakarta text-[15px] font-bold text-[#e05c5c] mb-2">Delete Account</h3>
          <p className="text-[13px] text-[#6b7f78] leading-relaxed mb-5">
            Permanently remove your account and all associated data. This action is irreversible.
          </p>
          <button className="bg-[#e05c5c] text-white text-[13.5px] font-semibold rounded-full px-6 py-2.5 border-none cursor-pointer hover:bg-[#c94444] transition-colors">
            Delete my account
          </button>
        </div>
      </div>
    </div>
  );
};

export default SettingsPrivacy;
