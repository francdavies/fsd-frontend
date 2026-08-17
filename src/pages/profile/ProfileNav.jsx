import React from "react";
import { Link } from "react-router-dom";

const ProfileNav = () => {
  return (
    <nav className="sticky top-0 z-50 bg-white border-b border-[#dde8e3] h-[58px] flex items-center justify-between px-5 sm:px-8 lg:px-12">

      {/* Logo */}
      <Link to="/" className="font-jakarta font-semibold text-[15px] text-[#111918] no-underline tracking-tight flex-shrink-0">
        The Commons
      </Link>

      {/* Center nav */}
      <ul className="hidden md:flex items-center gap-8 list-none text-[13.5px] text-[#6b7f78]">
        <li>
          <Link to="/CommunityFeed" className="no-underline text-[#6b7f78] hover:text-[#111918] transition-colors">
            Feed
          </Link>
        </li>
        <li className="cursor-pointer hover:text-[#111918] transition-colors">Search</li>
        <li className="font-semibold text-[#111918] border-b-2 border-[#2d7a63] pb-0.5 cursor-pointer">
          Profile
        </li>
      </ul>

      {/* Right actions */}
      <div className="flex items-center gap-3">
        <Link
          to="/CreatePost"
          className="bg-[#1c5c47] text-white text-[13px] font-semibold rounded-full px-4 py-2 no-underline hover:bg-[#2a6b54] transition-colors"
        >
          Create Post
        </Link>

        {/* Bell */}
        <button className="w-8 h-8 rounded-full border border-[#dde8e3] bg-white flex items-center justify-center text-[#6b7f78] hover:border-[#2d7a63] transition-colors cursor-pointer">
          <svg className="w-4 h-4" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8">
            <path d="M18 8A6 6 0 0 0 6 8c0 7-3 9-3 9h18s-3-2-3-9" />
            <path d="M13.73 21a2 2 0 0 1-3.46 0" />
          </svg>
        </button>

        {/* Avatar */}
        <button className="w-8 h-8 rounded-full bg-gradient-to-br from-[#c8906a] to-[#a06040] flex items-center justify-center text-white text-[12px] font-semibold cursor-pointer">
          M
        </button>
      </div>
    </nav>
  );
};

export default ProfileNav;