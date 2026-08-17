import React from "react";
import { Link } from "react-router-dom";

const ProfileFooter = () => {
  return (
    <footer className="px-5 sm:px-8 lg:px-12 py-8 bg-[#eef3f1] border-t border-[#dde8e3]">
      <div className="flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4">

        {/* Logo */}
        <Link to="/" className="font-jakarta font-semibold text-[15px] text-[#111918] no-underline tracking-tight">
          The Commons
        </Link>

        {/* Center links */}
        <div className="flex items-center gap-7">
          {["Privacy", "Guidelines", "Support"].map((l) => (
            <a key={l} href="#" className="text-[13px] text-[#6b7f78] no-underline hover:text-[#1c5c47] transition-colors">
              {l}
            </a>
          ))}
        </div>

        {/* Copyright */}
        <p className="text-[12.5px] text-[#6b7f78]">
          © 2024 The Commons Platform. Built for neighbors.
        </p>
      </div>
    </footer>
  );
};

export default ProfileFooter;