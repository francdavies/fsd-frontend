import React, { useState } from "react";

const tabs = ["Active Posts", "Completed Help", "Community References"];

const activePosts = [
  {
    id: 1,
    category: "TOOL LIBRARY",
    categoryColor: "bg-[#c6ece0] text-[#1a5c40]",
    title: "Loaning out my mitre saw for the weekend",
    body: "Just bought a new DeWalt mitre saw. Happy to lend it to anyone working on trim or deck projects...",
    responses: 8,
  },
  {
    id: 2,
    category: "GARDEN CONSULTATION",
    categoryColor: "bg-[#d1fae5] text-[#065f46]",
    title: "Advice on raised bed drainage",
    body: "Building some cedar beds for a neighbor and looking for advice on the best aggregate for...",
    responses: 3,
  },
  {
    id: 3,
    category: "PLANNING PERMISSION",
    categoryColor: "bg-[#fef9c3] text-[#854d0e]",
    title: "Q&A: Shed building & City Bylaws",
    body: "I have the local planning handbook for this year. Ask me anything about setback rules for outbuildings!",
    responses: 15,
  },
];

const ProfileTabs = () => {
  const [activeTab, setActiveTab] = useState("Active Posts");

  return (
    <section className="px-5 sm:px-8 lg:px-12 py-10 bg-[#eef3f1]">

      {/* Tab bar */}
      <div className="flex items-center gap-8 border-b border-[#dde8e3] mb-8">
        {tabs.map((tab) => (
          <button
            key={tab}
            onClick={() => setActiveTab(tab)}
            className={`pb-3 text-[14px] font-semibold bg-transparent border-none cursor-pointer transition-colors whitespace-nowrap ${
              activeTab === tab
                ? "text-[#1c5c47] border-b-2 border-[#1c5c47] -mb-px"
                : "text-[#6b7f78] hover:text-[#111918]"
            }`}
          >
            {tab}
          </button>
        ))}
      </div>

      {/* Active Posts grid */}
      {activeTab === "Active Posts" && (
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
          {activePosts.map((post) => (
            <div
              key={post.id}
              className="bg-white rounded-2xl border border-[#dde8e3] p-6 flex flex-col"
            >
              {/* Category + Live indicator */}
              <div className="flex items-center justify-between mb-4">
                <span className={`text-[10px] font-bold tracking-[0.1em] uppercase px-2.5 py-1 rounded-full ${post.categoryColor}`}>
                  {post.category}
                </span>
                <div className="flex items-center gap-1.5">
                  <span className="w-2 h-2 rounded-full bg-[#2d7a63] animate-pulse" />
                  <span className="text-[11.5px] font-medium text-[#3d4f49]">Live</span>
                </div>
              </div>

              {/* Title */}
              <h3 className="font-jakarta text-[17px] font-bold text-[#111918] leading-snug mb-3 flex-1">
                {post.title}
              </h3>

              {/* Body */}
              <p className="text-[13px] text-[#6b7f78] leading-relaxed mb-5">
                {post.body}
              </p>

              {/* Footer */}
              <div className="flex items-center justify-between pt-3 border-t border-[#dde8e3]">
                <span className="text-[11px] font-bold tracking-[0.1em] uppercase text-[#6b7f78]">
                  {post.responses} Responses
                </span>
                <button className="text-[#1c5c47] bg-transparent border-none cursor-pointer hover:translate-x-0.5 transition-transform p-0">
                  <svg className="w-5 h-5" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                    <line x1="5" y1="12" x2="19" y2="12" />
                    <polyline points="12 5 19 12 12 19" />
                  </svg>
                </button>
              </div>
            </div>
          ))}
        </div>
      )}

      {/* Completed Help tab placeholder */}
      {activeTab === "Completed Help" && (
        <div className="flex items-center justify-center py-20 text-[14px] text-[#6b7f78]">
          No completed help records yet.
        </div>
      )}

      {/* Community References tab placeholder */}
      {activeTab === "Community References" && (
        <div className="flex items-center justify-center py-20 text-[14px] text-[#6b7f78]">
          No community references yet.
        </div>
      )}
    </section>
  );
};

export default ProfileTabs;