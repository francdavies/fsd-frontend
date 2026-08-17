import React from "react";
import { Link } from "react-router-dom";

const HelpCTA = () => {
  return (
    <section className="px-5 sm:px-10 lg:px-16 py-10 bg-[#eef3f1]">
      <div className="bg-[#dde8e3] rounded-2xl px-8 sm:px-14 py-14 flex flex-col items-center text-center">

        {/* Support icon */}
        <div className="w-14 h-14 bg-white rounded-full flex items-center justify-center mb-6 shadow-sm">
          <svg className="w-6 h-6 text-[#1c5c47]" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8">
            <path d="M21 15a2 2 0 0 1-2 2H7l-4 4V5a2 2 0 0 1 2-2h14a2 2 0 0 1 2 2z" />
            <circle cx="12" cy="10" r="1" fill="currentColor" />
            <circle cx="8" cy="10" r="1" fill="currentColor" />
            <circle cx="16" cy="10" r="1" fill="currentColor" />
          </svg>
        </div>

        <h2 className="font-jakarta text-[28px] sm:text-[34px] font-extrabold text-[#111918] tracking-[-0.5px] mb-3">
          Still need a hand?
        </h2>
        <p className="text-[14px] text-[#6b7f78] leading-relaxed mb-8 max-w-[420px]">
          If you couldn't find what you're looking for, our community advocates are here to help you personally. We typically respond within 24 hours.
        </p>

        <Link
          to="/ContactPage"
          className="bg-[#1c5c47] text-white font-jakarta font-semibold text-[15px] px-10 py-3.5 rounded-full no-underline hover:bg-[#2a6b54] transition-colors mb-6"
        >
          Contact Support
        </Link>

        {/* Contact options */}
        <div className="flex flex-col sm:flex-row items-center gap-4 sm:gap-8">
          <div className="flex items-center gap-2 text-[13px] text-[#6b7f78]">
            <svg className="w-4 h-4" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8">
              <path d="M4 4h16c1.1 0 2 .9 2 2v12c0 1.1-.9 2-2 2H4c-1.1 0-2-.9-2-2V6c0-1.1.9-2 2-2z" />
              <polyline points="22,6 12,13 2,6" />
            </svg>
            support@thecommons.org
          </div>
          <div className="flex items-center gap-2 text-[13px] text-[#6b7f78]">
            <svg className="w-4 h-4" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8">
              <path d="M21 15a2 2 0 0 1-2 2H7l-4 4V5a2 2 0 0 1 2-2h14a2 2 0 0 1 2 2z" />
            </svg>
            Live Chat (Mon-Fri)
          </div>
        </div>
      </div>
    </section>
  );
};

export default HelpCTA;