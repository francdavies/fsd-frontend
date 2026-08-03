import React from "react";
import { Link } from "react-router-dom";

const platformLinks = ["How it Works", "Trust & Safety", "Guidelines"];
const connectLinks  = ["Instagram", "Newsletter", "Contact Support"];

const AboutFooter = () => {
  return (
    <footer className="bg-white px-5 sm:px-10 lg:px-16 pt-14 pb-6 border-t border-[#dde8e3]">

      {/* Top grid */}
      <div className="grid grid-cols-1 sm:grid-cols-3 gap-10 mb-12">

        {/* Brand */}
        <div>
          <Link to="/" className="font-jakarta font-semibold text-[15px] text-[#1c5c47] no-underline block mb-3 tracking-tight">
            The Commons
          </Link>
          <p className="text-[13px] text-[#6b7f78] leading-relaxed max-w-[220px]">
            A digital infrastructure for the physical world. Restoring the beauty of neighborhood interdependence.
          </p>
        </div>

        {/* Platform */}
        <div>
          <h4 className="text-[11px] font-semibold tracking-[0.1em] uppercase text-[#111918] mb-4">
            Platform
          </h4>
          <ul className="list-none space-y-2.5">
            {platformLinks.map((l) => (
              <li key={l}>
                <a href="#" className="text-[13.5px] text-[#6b7f78] no-underline hover:text-[#1c5c47] transition-colors">
                  {l}
                </a>
              </li>
            ))}
          </ul>
        </div>

        {/* Connect */}
        <div>
          <h4 className="text-[11px] font-semibold tracking-[0.1em] uppercase text-[#111918] mb-4">
            Connect
          </h4>
          <ul className="list-none space-y-2.5">
            {connectLinks.map((l) => (
              <li key={l}>
                <a href="#" className="text-[13.5px] text-[#6b7f78] no-underline hover:text-[#1c5c47] transition-colors">
                  {l}
                </a>
              </li>
            ))}
          </ul>
        </div>
      </div>

      {/* Bottom bar */}
      <div className="flex flex-col sm:flex-row items-start sm:items-center justify-between gap-3 border-t border-[#dde8e3] pt-5">
        <p className="text-[12px] text-[#6b7f78]">
          © 2024 The Commons Community Interest Corp. All rights reserved.
        </p>
        <div className="flex gap-5">
          <a href="#" className="text-[12px] text-[#6b7f78] no-underline hover:text-[#1c5c47] transition-colors">
            Privacy Policy
          </a>
          <a href="#" className="text-[12px] text-[#6b7f78] no-underline hover:text-[#1c5c47] transition-colors">
            Terms of Service
          </a>
        </div>
      </div>
    </footer>
  );
};

export default AboutFooter;