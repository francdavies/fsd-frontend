import React, { useState } from "react";

const categories = ["All Posts", "Tech", "Food", "Education", "Errands"];

const posts = [
  {
    id: 1,
    name: "Elena Richardson",
    time: "2 hours ago",
    location: "Greenpoint",
    category: "EDUCATION",
    categoryColor: "bg-[#dbeafe] text-[#1e40af]",
    title: "Math Tutoring for Middle Schooler?",
    body: "Looking for someone who can help my daughter with algebraic foundations for an hour on Tuesdays. Happy to trade for homemade sourdough or fresh garden herbs!",
    image: null,
    comments: 12,
    likes: null,
    avatar: "https://randomuser.me/api/portraits/women/44.jpg",
  },
  {
    id: 2,
    name: "Marcus Thorne",
    time: "5 hours ago",
    location: "West End",
    category: "TECH",
    categoryColor: "bg-[#d1fae5] text-[#065f46]",
    title: "PC Repair & Data Recovery Help",
    body: "My old laptop just gave up on me. It has years of family photos. Is there a tech whiz nearby who could help me recover the drive? I have a spare monitor to gift in exchange!",
    image: "https://images.unsplash.com/photo-1517694712202-14dd9538aa97?w=700&q=80",
    comments: 8,
    likes: 24,
    avatar: "https://randomuser.me/api/portraits/men/32.jpg",
  },
  {
    id: 3,
    name: "Julian Kim",
    time: "Yesterday",
    location: "Downtown",
    category: "FOOD",
    categoryColor: "bg-[#fef9c3] text-[#854d0e]",
    title: "Excess Garden Produce: Free Tomatoes!",
    body: "The harvest was too good this year. I have about 10lbs of heirloom tomatoes on my porch. Please come take some! No exchange needed, just don't let them waste.",
    image: null,
    comments: 4,
    likes: null,
    initials: "JK",
    avatar: null,
  },
];

const PostCard = ({ post }) => (
  <div className="bg-white rounded-2xl border border-[#dde8e3] p-5 sm:p-6">

    {/* Post header */}
    <div className="flex items-start justify-between gap-3 mb-4">
      <div className="flex items-center gap-3">
        {post.avatar ? (
          <img
            src={post.avatar}
            alt={post.name}
            className="w-10 h-10 rounded-full object-cover flex-shrink-0"
          />
        ) : (
          <div className="w-10 h-10 rounded-full bg-[#1c5c47] flex items-center justify-center text-white text-[13px] font-semibold flex-shrink-0">
            {post.initials}
          </div>
        )}
        <div>
          <p className="font-jakarta text-[14px] font-bold text-[#111918] leading-tight">{post.name}</p>
          <p className="text-[12px] text-[#6b7f78]">
            {post.time} • {post.location}
          </p>
        </div>
      </div>
      <span className={`text-[10.5px] font-bold tracking-[0.08em] uppercase px-2.5 py-1 rounded-full flex-shrink-0 ${post.categoryColor}`}>
        {post.category}
      </span>
    </div>

    {/* Title */}
    <h3 className="font-jakarta text-[17px] font-bold text-[#111918] mb-2 leading-snug">
      {post.title}
    </h3>

    {/* Body */}
    <p className="text-[13.5px] text-[#6b7f78] leading-relaxed mb-4">{post.body}</p>

    {/* Optional image */}
    {post.image && (
      <div className="rounded-xl overflow-hidden mb-4 h-[200px] sm:h-[240px]">
        <img
          src={post.image}
          alt={post.title}
          className="w-full h-full object-cover"
        />
      </div>
    )}

    {/* Footer actions */}
    <div className="flex items-center justify-between">
      <div className="flex items-center gap-4">
        {/* Comments */}
        <button className="flex items-center gap-1.5 text-[13px] text-[#6b7f78] bg-transparent border-none cursor-pointer hover:text-[#1c5c47] transition-colors p-0">
          <svg className="w-4 h-4" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8">
            <path d="M21 15a2 2 0 0 1-2 2H7l-4 4V5a2 2 0 0 1 2-2h14a2 2 0 0 1 2 2z" />
          </svg>
          {post.comments}
        </button>

        {/* Likes (only some posts) */}
        {post.likes && (
          <button className="flex items-center gap-1.5 text-[13px] text-[#6b7f78] bg-transparent border-none cursor-pointer hover:text-[#e05c5c] transition-colors p-0">
            <svg className="w-4 h-4" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8">
              <path d="M20.84 4.61a5.5 5.5 0 0 0-7.78 0L12 5.67l-1.06-1.06a5.5 5.5 0 0 0-7.78 7.78l1.06 1.06L12 21.23l7.78-7.78 1.06-1.06a5.5 5.5 0 0 0 0-7.78z" />
            </svg>
            {post.likes}
          </button>
        )}

        {/* Share (no likes posts) */}
        {!post.likes && (
          <button className="flex items-center gap-1.5 text-[13px] text-[#6b7f78] bg-transparent border-none cursor-pointer hover:text-[#1c5c47] transition-colors p-0">
            <svg className="w-4 h-4" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8">
              <circle cx="18" cy="5" r="3" />
              <circle cx="6" cy="12" r="3" />
              <circle cx="18" cy="19" r="3" />
              <line x1="8.59" y1="13.51" x2="15.42" y2="17.49" />
              <line x1="15.41" y1="6.51" x2="8.59" y2="10.49" />
            </svg>
            Share
          </button>
        )}
      </div>

      <button className="text-[13px] font-semibold text-[#1c5c47] bg-transparent border-none cursor-pointer hover:underline p-0">
        View Details
      </button>
    </div>
  </div>
);

const FeedPosts = () => {
  const [activeCategory, setActiveCategory] = useState("All Posts");

  return (
    <div className="flex-1 min-w-0 py-6">

      {/* Category filter pills */}
      <div className="flex items-center gap-2 flex-wrap mb-5">
        {categories.map((cat) => (
          <button
            key={cat}
            onClick={() => setActiveCategory(cat)}
            className={`px-4 py-2 rounded-full text-[13px] font-medium border-none cursor-pointer transition-colors ${
              activeCategory === cat
                ? "bg-[#1c5c47] text-white"
                : "bg-white border border-[#dde8e3] text-[#3d4f49] hover:border-[#2d7a63]"
            }`}
          >
            {cat}
          </button>
        ))}
      </div>

      {/* Posts */}
      <div className="flex flex-col gap-4">
        {posts.map((post) => (
          <PostCard key={post.id} post={post} />
        ))}
      </div>

      {/* Loading more */}
      <div className="flex items-center justify-center gap-2 py-8 text-[13px] text-[#6b7f78]">
        Loading more community requests
        <span className="w-2 h-2 rounded-full bg-[#2d7a63] animate-pulse" />
      </div>
    </div>
  );
};

export default FeedPosts;