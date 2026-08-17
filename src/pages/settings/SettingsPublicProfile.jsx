import React, { useState } from "react";

const SettingsPublicProfile = () => {
  const maxBio = 150;
  const [form, setForm] = useState({
    fullName: "James Wilson",
    username: "jwilson_commons",
    bio: "Architect and landscape enthusiast based in the city. Always looking for ways to improve our local parks and communal spaces.",
  });

  const handleChange = (e) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  const inputClass =
    "w-full px-4 py-3 rounded-xl border border-[#dde8e3] bg-[#f4f7f6] text-[14px] text-[#111918] outline-none focus:border-[#2d7a63] focus:bg-white transition-colors";

  return (
    <div className="flex flex-col lg:flex-row gap-8 py-10 border-b border-[#dde8e3]">

      {/* Left label */}
      <div className="lg:w-[220px] flex-shrink-0">
        <h2 className="font-jakarta text-[16px] font-bold text-[#111918] mb-2">Public Profile</h2>
        <p className="text-[13px] text-[#6b7f78] leading-relaxed">
          This information will be displayed on your community profile and visible to other members.
        </p>
      </div>

      {/* Right form */}
      <div className="flex-1 bg-white rounded-2xl border border-[#dde8e3] p-6 sm:p-8">

        {/* Avatar row */}
        <div className="flex items-center gap-5 mb-7 pb-7 border-b border-[#dde8e3]">
          <div className="relative w-[72px] h-[72px] flex-shrink-0">
            <div className="w-full h-full rounded-full overflow-hidden border-2 border-[#dde8e3]">
              <img
                src="https://randomuser.me/api/portraits/men/32.jpg"
                alt="Avatar"
                className="w-full h-full object-cover"
              />
            </div>
            {/* Camera icon overlay */}
            <div className="absolute bottom-0 right-0 w-6 h-6 bg-[#1c5c47] rounded-full flex items-center justify-center">
              <svg className="w-3 h-3 text-white" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                <path d="M23 19a2 2 0 0 1-2 2H3a2 2 0 0 1-2-2V8a2 2 0 0 1 2-2h4l2-3h6l2 3h4a2 2 0 0 1 2 2z" />
                <circle cx="12" cy="13" r="4" />
              </svg>
            </div>
          </div>
          <div>
            <p className="font-jakarta text-[14px] font-bold text-[#111918] mb-0.5">Your Avatar</p>
            <p className="text-[12px] text-[#6b7f78] mb-3">PNG or JPG. Max 2MB.</p>
            <div className="flex items-center gap-2">
              <button className="text-[12.5px] font-medium text-[#111918] bg-[#f4f7f6] border border-[#dde8e3] rounded-full px-3.5 py-1.5 cursor-pointer hover:border-[#2d7a63] transition-colors">
                Change photo
              </button>
              <button className="text-[12.5px] font-medium text-[#e05c5c] bg-transparent border-none cursor-pointer hover:underline">
                Remove
              </button>
            </div>
          </div>
        </div>

        {/* Name + Username */}
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 mb-4">
          <div className="flex flex-col gap-1.5">
            <label className="text-[10.5px] font-semibold tracking-[0.1em] uppercase text-[#6b7f78]">Full Name</label>
            <input type="text" name="fullName" value={form.fullName} onChange={handleChange} className={inputClass} />
          </div>
          <div className="flex flex-col gap-1.5">
            <label className="text-[10.5px] font-semibold tracking-[0.1em] uppercase text-[#6b7f78]">Username</label>
            <input type="text" name="username" value={form.username} onChange={handleChange} className={inputClass} />
          </div>
        </div>

        {/* Bio */}
        <div className="flex flex-col gap-1.5">
          <label className="text-[10.5px] font-semibold tracking-[0.1em] uppercase text-[#6b7f78]">Bio</label>
          <textarea
            name="bio"
            value={form.bio}
            onChange={handleChange}
            maxLength={maxBio}
            rows={4}
            className={`${inputClass} resize-none`}
          />
          <p className="text-[11.5px] text-[#b0bfba] text-right">
            Brief description for your profile. {maxBio - form.bio.length} characters left.
          </p>
        </div>
      </div>
    </div>
  );
};

export default SettingsPublicProfile;
