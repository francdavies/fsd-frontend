import React from "react";
import { Link } from "react-router-dom";

const ContactFooter = () => {
  return (
    <footer className="bg-[#eef3f1] px-5 sm:px-10 lg:px-16 pt-14 pb-6 border-t border-[#dde8e3]">

      {/* Top row */}
      <div className="flex flex-col sm:flex-row sm:items-start sm:justify-between gap-10 mb-12">

        {/* Brand */}
        <div className="max-w-[240px]">
          <Link to="/" className="font-jakarta font-semibold text-[16px] text-[#1c5c47] no-underline block mb-2 tracking-tight">
            The Commons
          </Link>
          <p className="text-[13px] text-[#6b7f78] leading-relaxed">
            Built for community, by community.
          </p>
        </div>

        {/* Links */}
        <div className="flex gap-16 sm:gap-20">
          {/* Explore */}
          <div>
            <h4 className="text-[11px] font-semibold tracking-[0.1em] uppercase text-[#111918] mb-4">
              Explore
            </h4>
            <ul className="list-none space-y-2.5">
              {["Journal", "Events"].map((l) => (
                <li key={l}>
                  <a href="#" className="text-[13.5px] text-[#6b7f78] no-underline hover:text-[#1c5c47] transition-colors">
                    {l}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Support */}
          <div>
            <h4 className="text-[11px] font-semibold tracking-[0.1em] uppercase text-[#111918] mb-4">
              Support
            </h4>
            <ul className="list-none space-y-2.5">
              {["FAQ", "Guidelines"].map((l) => (
                <li key={l}>
                  <a href="#" className="text-[13.5px] text-[#6b7f78] no-underline hover:text-[#1c5c47] transition-colors">
                    {l}
                  </a>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </div>

      {/* Bottom bar */}
      <div className="flex flex-col sm:flex-row items-start sm:items-center justify-between gap-3 border-t border-[#dde8e3] pt-5">
        <p className="text-[11.5px] text-[#6b7f78] uppercase tracking-wide">
          © 2024 The Commons Foundation
        </p>
        <p className="text-[11.5px] text-[#6b7f78] uppercase tracking-wide">
          Published in South District
        </p>
      </div>
    </footer>
  );
};

export default ContactFooter;