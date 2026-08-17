import React from "react";

const HelpTopics = () => {
  return (
    <section className="px-5 sm:px-10 lg:px-16 py-10 bg-[#eef3f1]">

      {/* Top row — Getting Started (wide) + Safety & Privacy (narrower, light blue) */}
      <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 mb-4">

        {/* Getting Started — spans 2 cols, white bg */}
        <div className="sm:col-span-2 bg-white rounded-2xl border border-[#dde8e3] p-7 flex flex-col">
          <div className="w-11 h-11 bg-[#e4eee9] rounded-xl flex items-center justify-center mb-5 text-[#1c5c47]">
            <svg className="w-5 h-5" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8">
              <path d="M15 3h4a2 2 0 0 1 2 2v14a2 2 0 0 1-2 2h-4" />
              <polyline points="10 17 15 12 10 7" />
              <line x1="15" y1="12" x2="3" y2="12" />
            </svg>
          </div>
          <h3 className="font-jakarta text-[20px] font-bold text-[#111918] mb-2">Getting Started</h3>
          <p className="text-[13.5px] text-[#6b7f78] leading-relaxed mb-6 flex-1">
            New to The Commons? Learn how to navigate your local community hub, join groups, and post your first request.
          </p>
          <button className="text-[13.5px] font-semibold text-[#1c5c47] bg-transparent border-none cursor-pointer p-0 text-left hover:underline flex items-center gap-1">
            Explore Basics →
          </button>
        </div>

        {/* Safety & Privacy — 1 col, light blue bg */}
        <div className="bg-[#dbeafe] rounded-2xl border border-[#bfdbfe] p-7 flex flex-col">
          <div className="w-9 h-9 flex items-center justify-center mb-auto">
            <svg className="w-5 h-5 text-[#1e40af]" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8">
              <path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z" />
            </svg>
          </div>
          <div className="mt-8">
            <h3 className="font-jakarta text-[18px] font-bold text-[#111918] mb-2">Safety & Privacy</h3>
            <p className="text-[13px] text-[#3d4f49] leading-relaxed mb-4">
              Your trust is our priority. Discover how we protect your data and maintain a safe environment.
            </p>
            <div className="flex justify-end">
              <svg className="w-5 h-5 text-[#1e40af] opacity-50" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8">
                <path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z" />
              </svg>
            </div>
          </div>
        </div>
      </div>

      {/* Bottom row — Account Management (narrow, mint) + Community Guidelines (wide, dark photo) */}
      <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">

        {/* Account Management — 1 col, mint bg */}
        <div className="bg-[#eef3f1] rounded-2xl border border-[#dde8e3] p-7 flex flex-col">
          <div className="w-9 h-9 bg-white rounded-xl flex items-center justify-center mb-5 text-[#1c5c47]">
            <svg className="w-4.5 h-4.5" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8">
              <path d="M17 21v-2a4 4 0 0 0-4-4H5a4 4 0 0 0-4 4v2" />
              <circle cx="9" cy="7" r="4" />
              <path d="M23 21v-2a4 4 0 0 0-3-3.87" />
              <path d="M16 3.13a4 4 0 0 1 0 7.75" />
            </svg>
          </div>
          <h3 className="font-jakarta text-[18px] font-bold text-[#111918] mb-3">Account Management</h3>
          <ul className="list-none space-y-2 flex-1">
            {["Reset Password", "Notification Settings", "Profile Verification"].map((item) => (
              <li key={item} className="flex items-center gap-2 text-[13px] text-[#3d4f49]">
                <span className="w-1.5 h-1.5 rounded-full bg-[#6b7f78] flex-shrink-0" />
                {item}
              </li>
            ))}
          </ul>
        </div>

        {/* Community Guidelines — 2 cols, dark photo overlay */}
        <div className="sm:col-span-2 rounded-2xl overflow-hidden relative min-h-[220px]">
          <img
            src="https://images.unsplash.com/photo-1529156069898-49953e39b3ac?w=900&q=80"
            alt="Community gathering"
            className="w-full h-full object-cover absolute inset-0"
          />
          {/* Dark overlay */}
          <div className="absolute inset-0 bg-black/50" />
          {/* Content */}
          <div className="relative z-10 p-7 flex flex-col h-full justify-between">
            <span className="inline-block bg-[#2d7a63] text-white text-[10px] font-bold tracking-[0.12em] uppercase px-2.5 py-1 rounded-full w-fit">
              The Standard
            </span>
            <div className="mt-auto">
              <h3 className="font-jakarta text-[22px] font-bold text-white mb-2 leading-snug">
                Community Guidelines
              </h3>
              <p className="text-[13px] text-white/75 leading-relaxed mb-5 max-w-[380px]">
                Help us maintain a respectful and vibrant community by following our shared values and conduct rules.
              </p>
              <button className="bg-white text-[#111918] text-[13px] font-semibold rounded-full px-5 py-2 border-none cursor-pointer hover:bg-gray-100 transition-colors">
                Read Guidelines
              </button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default HelpTopics;