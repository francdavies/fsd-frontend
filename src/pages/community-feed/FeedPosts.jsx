import React, { useState, useEffect } from "react";
import { supabase } from "../../lib/supabaseClient";

const categories = ["All Posts", "Tech", "Food", "Education", "Errands"];

const categoryColorMap = {
  "Tech Support":      "bg-[#d1fae5] text-[#065f46]",
  "Food & Groceries":  "bg-[#fef9c3] text-[#854d0e]",
  "Education":         "bg-[#dbeafe] text-[#1e40af]",
  "Errands":           "bg-[#ede9fe] text-[#5b21b6]",
  "Household Help":    "bg-[#fce7f3] text-[#9d174d]",
  "Garden & Outdoors": "bg-[#d1fae5] text-[#065f46]",
  "Tool Library":      "bg-[#c6ece0] text-[#1a5c40]",
  "Other":             "bg-[#f3f4f6] text-[#374151]",
};

const filterMap = {
  "Tech":      "Tech Support",
  "Food":      "Food & Groceries",
  "Education": "Education",
  "Errands":   "Errands",
};

const timeAgo = (timestamp) => {
  const diff = Math.floor((Date.now() - new Date(timestamp)) / 1000);
  if (diff < 60) return "Just now";
  if (diff < 3600) return `${Math.floor(diff / 60)}m ago`;
  if (diff < 86400) return `${Math.floor(diff / 3600)}h ago`;
  if (diff < 604800) return `${Math.floor(diff / 86400)}d ago`;
  return new Date(timestamp).toLocaleDateString();
};

const PostCard = ({ post }) => {
  const [likes, setLikes] = useState(0);
  const [liked, setLiked] = useState(false);
  const [comments, setComments] = useState(post.comments?.[0]?.count || 0);

  const profile = post.profiles;
  const avatarUrl = profile?.avatar_url;
  const initials = profile?.full_name?.charAt(0).toUpperCase() || "U";
  const categoryColor = categoryColorMap[post.category] || "bg-[#f3f4f6] text-[#374151]";

  return (
    <div className="bg-white rounded-2xl border border-[#dde8e3] p-5 sm:p-6">

      {/* Post header */}
      <div className="flex items-start justify-between gap-3 mb-4">
        <div className="flex items-center gap-3">
          {avatarUrl ? (
            <img src={avatarUrl} alt={profile?.full_name} className="w-10 h-10 rounded-full object-cover flex-shrink-0" />
          ) : (
            <div className="w-10 h-10 rounded-full bg-[#1c5c47] flex items-center justify-center text-white text-[13px] font-semibold flex-shrink-0">
              {initials}
            </div>
          )}
          <div>
            <p className="font-jakarta text-[14px] font-bold text-[#111918] leading-tight">
              {profile?.full_name || "Community Member"}
            </p>
            <p className="text-[12px] text-[#6b7f78]">
              {timeAgo(post.created_at)}{post.location ? ` • ${post.location}` : ""}
            </p>
          </div>
        </div>
        <span className={`text-[10.5px] font-bold tracking-[0.08em] uppercase px-2.5 py-1 rounded-full flex-shrink-0 ${categoryColor}`}>
          {post.category}
        </span>
      </div>

      {/* Title */}
      <h3 className="font-jakarta text-[17px] font-bold text-[#111918] mb-2 leading-snug">
        {post.title}
      </h3>

      {/* Body */}
      <p className="text-[13.5px] text-[#6b7f78] leading-relaxed mb-4">
        {post.description}
      </p>

      {/* Optional image */}
      {post.image_url && (
        <div className="rounded-xl overflow-hidden mb-4 h-[200px] sm:h-[240px]">
          <img
            src={post.image_url}
            alt={post.title}
            className="w-full h-full object-cover"
          />
        </div>
      )}

      {/* Intent badge */}
      <div className="mb-4">
        <span className={`text-[10.5px] font-semibold uppercase tracking-wide px-2.5 py-1 rounded-full ${
          post.intent === "offer"
            ? "bg-[#c6ece0] text-[#1a5c40]"
            : "bg-[#fce7f3] text-[#9d174d]"
        }`}>
          {post.intent === "offer" ? "Offering Help" : "Needs Help"}
        </span>
      </div>

      {/* Footer actions */}
      <div className="flex items-center justify-between">
        <div className="flex items-center gap-4">
          {/* Comments */}
          <button className="flex items-center gap-1.5 text-[13px] text-[#6b7f78] bg-transparent border-none cursor-pointer hover:text-[#1c5c47] transition-colors p-0">
            <svg className="w-4 h-4" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8">
              <path d="M21 15a2 2 0 0 1-2 2H7l-4 4V5a2 2 0 0 1 2-2h14a2 2 0 0 1 2 2z" />
            </svg>
            {comments}
          </button>

          {/* Like */}
          <button
            onClick={() => { setLiked(!liked); setLikes(liked ? likes - 1 : likes + 1); }}
            className={`flex items-center gap-1.5 text-[13px] bg-transparent border-none cursor-pointer transition-colors p-0 ${liked ? "text-[#e05c5c]" : "text-[#6b7f78] hover:text-[#e05c5c]"}`}
          >
            <svg className="w-4 h-4" viewBox="0 0 24 24" fill={liked ? "currentColor" : "none"} stroke="currentColor" strokeWidth="1.8">
              <path d="M20.84 4.61a5.5 5.5 0 0 0-7.78 0L12 5.67l-1.06-1.06a5.5 5.5 0 0 0-7.78 7.78l1.06 1.06L12 21.23l7.78-7.78 1.06-1.06a5.5 5.5 0 0 0 0-7.78z" />
            </svg>
            {likes > 0 && likes}
          </button>

          {/* Share */}
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
        </div>

        <button className="text-[13px] font-semibold text-[#1c5c47] bg-transparent border-none cursor-pointer hover:underline p-0">
          View Details
        </button>
      </div>
    </div>
  );
};

const FeedPosts = () => {
  const [activeCategory, setActiveCategory] = useState("All Posts");
  const [posts, setPosts] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState("");

  const fetchPosts = async () => {
    setLoading(true);
    setError("");

    let query = supabase
      .from("posts")
      .select(`
        *,
        profiles (
          id,
          full_name,
          avatar_url,
          location
        ),
        comments (count)
      `)
      .eq("status", "live")
      .order("created_at", { ascending: false });

    // Filter by category if not "All Posts"
    if (activeCategory !== "All Posts") {
      const mappedCategory = filterMap[activeCategory];
      if (mappedCategory) {
        query = query.eq("category", mappedCategory);
      }
    }

    const { data, error } = await query;

    if (error) {
      setError("Failed to load posts. Please try again.");
    } else {
      setPosts(data || []);
    }
    setLoading(false);
  };

  // Fetch posts on mount and when category changes
  useEffect(() => {
    fetchPosts();
  }, [activeCategory]);

  // Real-time subscription — new posts appear instantly
  useEffect(() => {
    const channel = supabase
      .channel("posts-feed")
      .on(
        "postgres_changes",
        { event: "INSERT", schema: "public", table: "posts" },
        () => fetchPosts()
      )
      .subscribe();

    return () => supabase.removeChannel(channel);
  }, [activeCategory]);

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

      {/* Loading state */}
      {loading && (
        <div className="flex flex-col gap-4">
          {[1, 2, 3].map((i) => (
            <div key={i} className="bg-white rounded-2xl border border-[#dde8e3] p-6 animate-pulse">
              <div className="flex gap-3 mb-4">
                <div className="w-10 h-10 rounded-full bg-[#eef3f1]" />
                <div className="flex-1">
                  <div className="h-3 bg-[#eef3f1] rounded w-1/3 mb-2" />
                  <div className="h-3 bg-[#eef3f1] rounded w-1/4" />
                </div>
              </div>
              <div className="h-4 bg-[#eef3f1] rounded w-2/3 mb-3" />
              <div className="h-3 bg-[#eef3f1] rounded w-full mb-2" />
              <div className="h-3 bg-[#eef3f1] rounded w-4/5" />
            </div>
          ))}
        </div>
      )}

      {/* Error state */}
      {error && !loading && (
        <div className="bg-red-50 border border-red-200 text-red-700 text-[13px] rounded-xl px-4 py-3 mb-4">
          {error}
          <button onClick={fetchPosts} className="ml-3 underline font-semibold bg-transparent border-none cursor-pointer text-red-700">
            Retry
          </button>
        </div>
      )}

      {/* Empty state */}
      {!loading && !error && posts.length === 0 && (
        <div className="flex flex-col items-center justify-center py-20 text-center">
          <div className="w-14 h-14 bg-[#eef3f1] rounded-full flex items-center justify-center mb-4">
            <svg className="w-6 h-6 text-[#6b7f78]" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8">
              <path d="M21 15a2 2 0 0 1-2 2H7l-4 4V5a2 2 0 0 1 2-2h14a2 2 0 0 1 2 2z" />
            </svg>
          </div>
          <p className="font-jakarta text-[16px] font-bold text-[#111918] mb-1">No posts yet</p>
          <p className="text-[13.5px] text-[#6b7f78]">Be the first to share something with your community.</p>
        </div>
      )}

      {/* Posts */}
      {!loading && !error && posts.length > 0 && (
        <div className="flex flex-col gap-4">
          {posts.map((post) => (
            <PostCard key={post.id} post={post} />
          ))}
        </div>
      )}

      {/* Loading more indicator */}
      {!loading && posts.length > 0 && (
        <div className="flex items-center justify-center gap-2 py-8 text-[13px] text-[#6b7f78]">
          Loading more community requests
          <span className="w-2 h-2 rounded-full bg-[#2d7a63] animate-pulse" />
        </div>
      )}
    </div>
  );
};

export default FeedPosts;