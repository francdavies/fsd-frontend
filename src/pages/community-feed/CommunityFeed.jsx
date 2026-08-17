import React from "react";
import FeedNav from "./FeedNav";
import FeedSidebar from "./FeedSidebar";
import FeedPosts from "./FeedPosts";
import FeedRightPanel from "./FeedRightPanel";

const CommunityFeed = () => {
  return (
    <div className="min-h-screen bg-[#eef3f1] text-[#111918] font-sans">

      <FeedNav />

      {/* 3-column layout */}
      <div className="max-w-[1200px] mx-auto px-5 sm:px-8 flex gap-6">
        <FeedSidebar />
        <FeedPosts />
        <FeedRightPanel />
      </div>
    </div>
  );
};

export default CommunityFeed;