import React from "react";
import { Link } from "react-router-dom";

const HelpFooter = () => {
  return (
    <footer className="bg-white px-5 sm:px-10 lg:px-16 py-8 border-t border-[#dde8e3]">
      <div className="flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4">

        {/* Logo */}
        <Link to="/" className="font-jakarta font-semibold text-[15px] text-[#111918] no-underline tracking-tight">
          The Commons
        </Link>

        {/* Center links */}
        <div className="flex items-center gap-7">
          {["Privacy Policy", "Terms of Service", "Cookie Policy"].map((l) => (
            <a key={l} href="#" className="text-[13px] text-[#6b7f78] no-underline hover:text-[#1c5c47] transition-colors">
              {l}
            </a>
          ))}
        </div>

        {/* Copyright */}
        <p className="text-[12.5px] text-[#6b7f78]">
          © 2024 The Commons. All rights reserved.
        </p>
      </div>
    </footer>
  );
};

export default HelpFooter;