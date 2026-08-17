import React from "react";
import { Link, useNavigate } from "react-router-dom";

const CreatePostNav = () => {
  const navigate = useNavigate();

  return (
    <nav className="flex items-center justify-between px-6 sm:px-10 h-[56px] bg-white border-b border-[#dde8e3]">
      {/* X close + logo */}
      <div className="flex items-center gap-3">
        <button
          onClick={() => navigate(-1)}
          className="w-7 h-7 flex items-center justify-center text-[#6b7f78] hover:text-[#111918] transition-colors bg-transparent border-none cursor-pointer p-0"
          aria-label="Close"
        >
          <svg className="w-5 h-5" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
            <line x1="18" y1="6" x2="6" y2="18" />
            <line x1="6" y1="6" x2="18" y2="18" />
          </svg>
        </button>
        <Link
          to="/"
          className="font-jakarta font-semibold text-[15px] text-[#111918] no-underline tracking-tight"
        >
          The Commons
        </Link>
      </div>

      {/* Step indicator */}
      <div className="border border-[#dde8e3] rounded-full px-4 py-1.5">
        <span className="text-[12.5px] font-medium text-[#6b7f78]">Step 1 of 1</span>
      </div>
    </nav>
  );
};

export default CreatePostNav;