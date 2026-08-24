import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import { supabase } from "../../lib/supabaseClient";
import { useAuth } from "../../context/AuthContext";

const categories = [
  "Household Help",
  "Tech Support",
  "Food & Groceries",
  "Education",
  "Errands",
  "Garden & Outdoors",
  "Tool Library",
  "Other",
];

const CreatePostForm = () => {
  const navigate = useNavigate();
  const { user } = useAuth();

  const [intent, setIntent] = useState("request");
  const [form, setForm] = useState({
    title: "",
    category: "Household Help",
    location: "",
    description: "",
  });
  const [image, setImage] = useState(null);
  const [imagePreview, setImagePreview] = useState(null);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState("");

  const handleChange = (e) => {
    setForm({ ...form, [e.target.name]: e.target.value });
    setError("");
  };

  const handleImageChange = (e) => {
    const file = e.target.files[0];
    if (!file) return;
    if (file.size > 5 * 1024 * 1024) {
      setError("Image must be less than 5MB.");
      return;
    }
    setImage(file);
    setImagePreview(URL.createObjectURL(file));
  };

  const uploadImage = async () => {
    if (!image) return null;
    const fileExt = image.name.split(".").pop();
    const fileName = `${user.id}-${Date.now()}.${fileExt}`;

    const { error } = await supabase.storage
      .from("post-images")
      .upload(fileName, image);

    if (error) throw error;

    const { data } = supabase.storage
      .from("post-images")
      .getPublicUrl(fileName);

    return data.publicUrl;
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setError("");

    if (!form.title.trim()) {
      setError("Please enter a title for your post.");
      return;
    }
    if (!form.description.trim()) {
      setError("Please add a description so neighbors can understand your request.");
      return;
    }

    setLoading(true);

    try {
      // Upload image if provided
      let imageUrl = null;
      if (image) {
        imageUrl = await uploadImage();
      }

      // Insert post into Supabase
      const { error: insertError } = await supabase
        .from("posts")
        .insert({
          user_id: user.id,
          intent,
          title: form.title.trim(),
          category: form.category,
          location: form.location.trim(),
          description: form.description.trim(),
          image_url: imageUrl,
          status: "live",
        });

      if (insertError) throw insertError;

      navigate("/CommunityFeed");
    } catch (err) {
      setError(err.message || "Something went wrong. Please try again.");
    } finally {
      setLoading(false);
    }
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

      {/* Error */}
      {error && (
        <div className="bg-red-50 border border-red-200 text-red-700 text-[13px] rounded-xl px-4 py-3 mb-6 max-w-[500px]">
          {error}
        </div>
      )}

      <form onSubmit={handleSubmit} className="flex flex-col gap-7">

        {/* POST INTENT */}
        <div>
          <label className="text-[10.5px] font-bold tracking-[0.14em] uppercase text-[#6b7f78] block mb-3">
            Post Intent
          </label>
          <div className="grid grid-cols-2 gap-3 max-w-[500px]">
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

        {/* CATEGORY + LOCATION */}
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

        {/* IMAGE UPLOAD (optional) */}
        <div className="max-w-[500px]">
          <label className="text-[10.5px] font-bold tracking-[0.14em] uppercase text-[#6b7f78] block mb-2">
            Image <span className="normal-case tracking-normal font-normal text-[#b0bfba]">— optional</span>
          </label>

          {imagePreview ? (
            <div className="relative rounded-2xl overflow-hidden h-[180px]">
              <img src={imagePreview} alt="preview" className="w-full h-full object-cover" />
              <button
                type="button"
                onClick={() => { setImage(null); setImagePreview(null); }}
                className="absolute top-3 right-3 w-7 h-7 bg-black/50 rounded-full flex items-center justify-center text-white border-none cursor-pointer hover:bg-black/70 transition-colors"
              >
                <svg className="w-3.5 h-3.5" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5">
                  <line x1="18" y1="6" x2="6" y2="18" />
                  <line x1="6" y1="6" x2="18" y2="18" />
                </svg>
              </button>
            </div>
          ) : (
            <label className="flex flex-col items-center justify-center h-[120px] rounded-2xl border-2 border-dashed border-[#dde8e3] bg-[#f4f7f6] cursor-pointer hover:border-[#2d7a63] transition-colors">
              <svg className="w-6 h-6 text-[#b0bfba] mb-2" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8">
                <rect x="3" y="3" width="18" height="18" rx="2" />
                <circle cx="8.5" cy="8.5" r="1.5" />
                <polyline points="21 15 16 10 5 21" />
              </svg>
              <span className="text-[13px] text-[#6b7f78]">Click to upload an image</span>
              <span className="text-[11.5px] text-[#b0bfba] mt-0.5">Max 5MB</span>
              <input
                type="file"
                accept="image/*"
                onChange={handleImageChange}
                className="hidden"
              />
            </label>
          )}
        </div>

        {/* SUBMIT */}
        <div>
          <button
            type="submit"
            disabled={loading}
            className="bg-[#1c5c47] text-white font-jakarta font-semibold text-[15px] px-10 py-4 rounded-full border-none cursor-pointer hover:bg-[#2a6b54] transition-colors flex items-center gap-2 disabled:opacity-60 disabled:cursor-not-allowed"
          >
            {loading ? (
              <>
                <div className="w-4 h-4 border-2 border-white border-t-transparent rounded-full animate-spin" />
                Submitting...
              </>
            ) : (
              "Submit Post"
            )}
          </button>
        </div>
      </form>
    </div>
  );
};

export default CreatePostForm;