import React, { useState } from "react";
import { useNavigate } from "react-router-dom";

const categories = [
  "Household Help",
  "Tech Support",
  "Food & Groceries",
  "Education",
  "Errands",
  "Garden & Outdoors",
  "Other",
];

const CreatePostForm = () => {
  const navigate = useNavigate();
  const [intent, setIntent] = useState("request");
  const [form, setForm] = useState({
    title: "",
    category: "Household Help",
    location: "",
    description: "",
  });

  const handleChange = (e) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // Submit logic will be wired here
    navigate("/CommunityFeed");
  };

  const inputClass =
    "w-full px-4 py-3 rounded-xl border border-[#dde8e3] bg-[#f4f7f6] text-[14px] text-[#111918] placeholder-[#b0bfba] outline-none focus:border-[#2d7a63] focus:bg-white transition-colors";

  return (
    <div className="flex-1 min-w-0">

      {/* Page heading */}
      <div className="mb-10">
        <h1 className="font-jakarta text-[40px] sm:text-[50px] font-extrabold text-[#111918] leading-[1.05] tracking-[-1px] mb-4">
          Share with your<br />
          <span className="text-[#2d7a63]">community.</span>
        </h1>
        <p className="text-[14.5px] text-[#6b7f78] leading-relaxed max-w-[480px]">
          Whether you're offering a hand or seeking support, your contribution strengthens the digital commons. Keep it clear, keep it kind.
        </p>
      </div>

      <form onSubmit={handleSubmit} className="flex flex-col gap-7">

        {/* POST INTENT */}
        <div>
          <label className="text-[10.5px] font-bold tracking-[0.14em] uppercase text-[#6b7f78] block mb-3">
            Post Intent
          </label>
          <div className="grid grid-cols-2 gap-3 max-w-[500px]">

            {/* Request */}
            <button
              type="button"
              onClick={() => setIntent("request")}
              className={`rounded-2xl p-5 text-left border-2 cursor-pointer transition-all ${
                intent === "request"
                  ? "bg-[#c6ece0] border-[#1c5c47]"
                  : "bg-white border-[#dde8e3] hover:border-[#2d7a63]"
              }`}
            >
              <svg className="w-6 h-6 text-[#1c5c47] mb-3" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8">
                <path d="M18 8h1a4 4 0 0 1 0 8h-1" />
                <path d="M2 8h16v9a4 4 0 0 1-4 4H6a4 4 0 0 1-4-4V8z" />
                <line x1="6" y1="1" x2="6" y2="4" />
                <line x1="10" y1="1" x2="10" y2="4" />
                <line x1="14" y1="1" x2="14" y2="4" />
              </svg>
              <p className="font-jakarta text-[15px] font-bold text-[#111918]">Request</p>
              <p className="text-[12.5px] text-[#6b7f78] mt-0.5">I need some help</p>
            </button>

            {/* Offer */}
            <button
              type="button"
              onClick={() => setIntent("offer")}
              className={`rounded-2xl p-5 text-left border-2 cursor-pointer transition-all ${
                intent === "offer"
                  ? "bg-[#c6ece0] border-[#1c5c47]"
                  : "bg-white border-[#dde8e3] hover:border-[#2d7a63]"
              }`}
            >
              <svg className="w-6 h-6 text-[#1c5c47] mb-3" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8">
                <rect x="2" y="7" width="20" height="14" rx="2" ry="2" />
                <path d="M16 7V5a2 2 0 0 0-4 0v2" />
                <path d="M12 7v7" />
                <path d="M8 14h8" />
              </svg>
              <p className="font-jakarta text-[15px] font-bold text-[#111918]">Offer</p>
              <p className="text-[12.5px] text-[#6b7f78] mt-0.5">I'm lending a hand</p>
            </button>
          </div>
        </div>

        {/* TITLE */}
        <div className="max-w-[500px]">
          <label className="text-[10.5px] font-bold tracking-[0.14em] uppercase text-[#6b7f78] block mb-2">
            Title
          </label>
          <input
            type="text"
            name="title"
            value={form.title}
            onChange={handleChange}
            placeholder="What's happening?"
            required
            className={inputClass}
          />
        </div>

        {/* CATEGORY + LOCATION side by side */}
        <div className="flex flex-col sm:flex-row gap-3 max-w-[500px]">
          <div className="flex-1">
            <label className="text-[10.5px] font-bold tracking-[0.14em] uppercase text-[#6b7f78] block mb-2">
              Category
            </label>
            <div className="relative">
              <select
                name="category"
                value={form.category}
                onChange={handleChange}
                className={`${inputClass} appearance-none cursor-pointer pr-9`}
              >
                {categories.map((c) => (
                  <option key={c}>{c}</option>
                ))}
              </select>
              <div className="absolute right-3 top-1/2 -translate-y-1/2 pointer-events-none text-[#6b7f78]">
                <svg className="w-4 h-4" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                  <polyline points="6 9 12 15 18 9" />
                </svg>
              </div>
            </div>
          </div>

          <div className="flex-1">
            <label className="text-[10.5px] font-bold tracking-[0.14em] uppercase text-[#6b7f78] block mb-2">
              Location
            </label>
            <div className="relative">
              <svg className="absolute left-3 top-1/2 -translate-y-1/2 w-4 h-4 text-[#b0bfba] pointer-events-none" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8">
                <path d="M21 10c0 7-9 13-9 13s-9-6-9-13a9 9 0 0 1 18 0z" />
                <circle cx="12" cy="10" r="3" />
              </svg>
              <input
                type="text"
                name="location"
                value={form.location}
                onChange={handleChange}
                placeholder="e.g. North Brooklyn"
                className={`${inputClass} pl-9`}
              />
            </div>
          </div>
        </div>

        {/* DESCRIPTION */}
        <div className="max-w-[500px]">
          <label className="text-[10.5px] font-bold tracking-[0.14em] uppercase text-[#6b7f78] block mb-2">
            Description
          </label>
          <textarea
            name="description"
            value={form.description}
            onChange={handleChange}
            placeholder="Provide more details for your neighbors..."
            rows={7}
            className={`${inputClass} resize-none`}
          />
        </div>

        {/* SUBMIT */}
        <div>
          <button
            type="submit"
            className="bg-[#1c5c47] text-white font-jakarta font-semibold text-[15px] px-10 py-4 rounded-full border-none cursor-pointer hover:bg-[#2a6b54] transition-colors"
          >
            Submit Post
          </button>
        </div>
      </form>
    </div>
  );
};

export default CreatePostForm;