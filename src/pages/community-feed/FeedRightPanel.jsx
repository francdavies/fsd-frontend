import React from "react";
import { Link } from "react-router-dom";

const topHelpers = [
  { name: "David L.", helps: 42, avatar: "https://randomuser.me/api/portraits/men/45.jpg" },
  { name: "Sarah M.", helps: 38, avatar: "https://randomuser.me/api/portraits/women/68.jpg" },
];

const FeedRightPanel = () => {
  return (
    <aside className="hidden lg:flex flex-col w-[240px] flex-shrink-0 pt-6 pl-4 gap-4">

      {/* Top Helpers */}
      <div className="bg-white rounded-2xl border border-[#dde8e3] p-5">
        <p className="text-[10.5px] font-semibold tracking-[0.12em] uppercase text-[#6b7f78] mb-4">
          Top Helpers
        </p>
        <div className="flex flex-col gap-3">
          {topHelpers.map((helper) => (
            <div key={helper.name} className="flex items-center justify-between">
              <div className="flex items-center gap-2.5">
                <img
                  src={helper.avatar}
                  alt={helper.name}
                  className="w-8 h-8 rounded-full object-cover flex-shrink-0"
                />
                <span className="text-[13.5px] font-medium text-[#111918]">{helper.name}</span>
              </div>
              <span className="text-[11.5px] font-semibold text-[#1c5c47] bg-[#eef3f1] px-2.5 py-1 rounded-full">
                {helper.helps} Helps
              </span>
            </div>
          ))}
        </div>
      </div>

      {/* Need something? */}
      <div className="bg-white rounded-2xl border border-[#dde8e3] p-5">
        <h3 className="font-jakarta text-[15px] font-bold text-[#111918] mb-1.5">
          Need something?
        </h3>
        <p className="text-[13px] text-[#6b7f78] leading-relaxed mb-4">
          Post a request and let your neighbors lend a hand.
        </p>
        <Link
          to="/CreatePost"
          className="block w-full bg-white border border-[#dde8e3] text-[#111918] text-[13.5px] font-semibold text-center py-2.5 rounded-xl no-underline hover:border-[#2d7a63] hover:text-[#1c5c47] transition-colors"
        >
          Create New Post
        </Link>
      </div>
    </aside>
  );
};

export default FeedRightPanel;