import React from "react";

const guidelines = [
  "Keep descriptions clear and honest.",
  "Protect your privacy: don't share street addresses publicly.",
  "Be responsive to those who reply to your post.",
];

const CreatePostSidebar = () => {
  return (
    <aside className="hidden lg:flex flex-col w-[240px] flex-shrink-0 gap-4 pt-2">

      {/* Community Guidelines card */}
      <div className="bg-white rounded-2xl border border-[#dde8e3] p-6">
        <h3 className="font-jakarta text-[16px] font-bold text-[#111918] mb-4 leading-snug">
          Community Guidelines
        </h3>
        <ul className="flex flex-col gap-3">
          {guidelines.map((g, i) => (
            <li key={i} className="flex items-start gap-2.5">
              <div className="w-5 h-5 rounded-full bg-[#1c5c47] flex items-center justify-center flex-shrink-0 mt-0.5">
                <svg className="w-3 h-3 text-white" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="3">
                  <polyline points="20 6 9 17 4 12" />
                </svg>
              </div>
              <span className="text-[13px] text-[#3d4f49] leading-snug">{g}</span>
            </li>
          ))}
        </ul>
      </div>

      {/* Your Neighbors Are Here card */}
      <div className="rounded-2xl overflow-hidden relative h-[160px]" style={{ background: "linear-gradient(160deg, #1c3a2e 0%, #0d2218 100%)" }}>
        {/* Decorative leaf */}
        <div className="absolute inset-0 flex items-center justify-center opacity-30">
          <svg className="w-20 h-20 text-[#2d7a63]" viewBox="0 0 100 100" fill="currentColor">
            <path d="M50 10 C30 10 10 30 10 55 C10 75 30 90 50 90 C70 90 90 70 90 50 C90 25 70 10 50 10 Z M50 10 C50 10 45 40 30 55 C45 50 65 55 50 10 Z" />
          </svg>
        </div>
        <div className="absolute bottom-0 left-0 right-0 px-4 py-3">
          <p className="text-[10.5px] font-bold tracking-[0.14em] uppercase text-white">
            Your Neighbors Are Here
          </p>
        </div>
      </div>

      {/* Secure Community card */}
      <div className="bg-[#f0f7ff] rounded-2xl border border-[#dde8e3] p-5">
        <div className="flex items-center gap-2 mb-2">
          <svg className="w-4 h-4 text-[#1c5c47]" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8">
            <path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z" />
          </svg>
          <span className="text-[10.5px] font-bold tracking-[0.12em] uppercase text-[#3d4f49]">
            Secure Community
          </span>
        </div>
        <p className="text-[13px] text-[#6b7f78] leading-relaxed">
          Your post will be visible to verified members of The Commons in your local area only.
        </p>
      </div>
    </aside>
  );
};

export default CreatePostSidebar;