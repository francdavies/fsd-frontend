import React from "react";
import { Link } from "react-router-dom";

const ProfileHero = () => {
  return (
    <section className="px-5 sm:px-8 lg:px-12 py-12 bg-[#eef3f1]">
      <div className="flex flex-col lg:flex-row gap-8 lg:gap-10 items-start">

        {/* Left — avatar + info + buttons */}
        <div className="flex flex-col sm:flex-row gap-7 items-start flex-1">

          {/* Avatar */}
          <div className="relative flex-shrink-0">
            <div className="w-[160px] h-[160px] rounded-full overflow-hidden border-4 border-white shadow-md">
              <img
                src="https://randomuser.me/api/portraits/men/75.jpg"
                alt="Marcus Chen"
                className="w-full h-full object-cover"
              />
            </div>
            {/* Verified badge */}
            <div className="absolute bottom-3 left-1/2 -translate-x-1/2 bg-white rounded-full px-3 py-1 flex items-center gap-1.5 shadow-sm whitespace-nowrap">
              <svg className="w-3.5 h-3.5 text-[#1c5c47]" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                <path d="M22 11.08V12a10 10 0 1 1-5.93-9.14" />
                <polyline points="22 4 12 14.01 9 11.01" />
              </svg>
              <span className="text-[11px] font-semibold text-[#1c5c47]">Verified Neighbor</span>
            </div>
          </div>

          {/* Name, role, bio, buttons */}
          <div className="flex-1">
            <h1 className="font-jakarta text-[38px] sm:text-[46px] font-extrabold text-[#111918] tracking-[-1px] leading-tight mb-1">
              Marcus Chen
            </h1>
            <p className="text-[11px] font-bold tracking-[0.14em] uppercase text-[#6b7f78] mb-4">
              Architect & Carpenter
            </p>
            <p className="text-[14px] text-[#3d4f49] leading-relaxed mb-7 max-w-[440px]">
              Architect by day, amateur carpenter by weekend. I love helping neighbors fix up their spaces or navigate local planning permissions.
            </p>
            <div className="flex items-center gap-3 flex-wrap">
              <button className="flex items-center gap-2 bg-[#1c5c47] text-white text-[13.5px] font-semibold rounded-full px-5 py-2.5 border-none cursor-pointer hover:bg-[#2a6b54] transition-colors">
                <svg className="w-4 h-4" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                  <path d="M11 4H4a2 2 0 0 0-2 2v14a2 2 0 0 0 2 2h14a2 2 0 0 0 2-2v-7" />
                  <path d="M18.5 2.5a2.121 2.121 0 0 1 3 3L12 15l-4 1 1-4 9.5-9.5z" />
                </svg>
                Edit Profile
              </button>
              <Link
                to="/AccountSettings"
                className="flex items-center gap-2 bg-white text-[#111918] text-[13.5px] font-semibold rounded-full px-5 py-2.5 border border-[#dde8e3] no-underline hover:border-[#2d7a63] transition-colors"
              >
                <svg className="w-4 h-4 text-[#6b7f78]" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8">
                  <circle cx="12" cy="12" r="3" />
                  <path d="M19.4 15a1.65 1.65 0 0 0 .33 1.82l.06.06a2 2 0 0 1-2.83 2.83l-.06-.06a1.65 1.65 0 0 0-1.82-.33 1.65 1.65 0 0 0-1 1.51V21a2 2 0 0 1-4 0v-.09A1.65 1.65 0 0 0 9 19.4a1.65 1.65 0 0 0-1.82.33l-.06.06a2 2 0 0 1-2.83-2.83l.06-.06A1.65 1.65 0 0 0 4.68 15a1.65 1.65 0 0 0-1.51-1H3a2 2 0 0 1 0-4h.09A1.65 1.65 0 0 0 4.6 9a1.65 1.65 0 0 0-.33-1.82l-.06-.06a2 2 0 0 1 2.83-2.83l.06.06A1.65 1.65 0 0 0 9 4.68a1.65 1.65 0 0 0 1-1.51V3a2 2 0 0 1 4 0v.09a1.65 1.65 0 0 0 1 1.51 1.65 1.65 0 0 0 1.82-.33l.06-.06a2 2 0 0 1 2.83 2.83l-.06.06A1.65 1.65 0 0 0 19.4 9a1.65 1.65 0 0 0 1.51 1H21a2 2 0 0 1 0 4h-.09a1.65 1.65 0 0 0-1.51 1z" />
                </svg>
                Settings
              </Link>
            </div>
          </div>
        </div>

        {/* Right — Community Impact card */}
        <div className="w-full lg:w-[320px] flex-shrink-0 bg-[#f4f7f6] rounded-2xl border border-[#dde8e3] p-6">
          <p className="text-[10.5px] font-bold tracking-[0.14em] uppercase text-[#6b7f78] mb-4">
            Community Impact
          </p>

          {/* Stats grid */}
          <div className="grid grid-cols-2 gap-3 mb-5">
            <div className="bg-white rounded-xl p-4 border border-[#dde8e3]">
              <div className="font-jakarta text-[32px] font-extrabold text-[#111918] leading-none mb-1">
                12
              </div>
              <div className="text-[12px] text-[#6b7f78] leading-tight">Neighbors Helped</div>
            </div>
            <div className="bg-white rounded-xl p-4 border border-[#dde8e3]">
              <div className="font-jakarta text-[32px] font-extrabold text-[#111918] leading-none mb-1">
                4
              </div>
              <div className="text-[12px] text-[#6b7f78] leading-tight">Active Posts</div>
            </div>
          </div>

          {/* Location + Joined */}
          <div className="flex flex-col gap-2.5">
            <div className="flex items-center gap-2.5 text-[13px] text-[#3d4f49]">
              <svg className="w-4 h-4 text-[#6b7f78] flex-shrink-0" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8">
                <path d="M21 10c0 7-9 13-9 13s-9-6-9-13a9 9 0 0 1 18 0z" />
                <circle cx="12" cy="10" r="3" />
              </svg>
              Riverside Community
            </div>
            <div className="flex items-center gap-2.5 text-[13px] text-[#3d4f49]">
              <svg className="w-4 h-4 text-[#6b7f78] flex-shrink-0" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8">
                <rect x="3" y="4" width="18" height="18" rx="2" ry="2" />
                <line x1="16" y1="2" x2="16" y2="6" />
                <line x1="8" y1="2" x2="8" y2="6" />
                <line x1="3" y1="10" x2="21" y2="10" />
              </svg>
              Joined May 2023
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ProfileHero;