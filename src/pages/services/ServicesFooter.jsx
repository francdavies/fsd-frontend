import React from "react";
 
const categories = ["Tech Support", "Food Sharing", "Education", "Physical Help"];
const resources  = ["Help Center", "Safety Guidelines", "Community Charter", "Privacy"];
 
const ServicesFooter = () => {
    const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-[#eef3f1] px-5 sm:px-10 lg:px-16 pt-14 pb-6 border-t border-[#dde8e3]">
 
      {/* Top grid */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-10 mb-12">
 
        {/* Brand */}
        <div className="sm:col-span-2 lg:col-span-1">
          <div className="font-jakarta font-semibold text-[16px] text-[#1c5c47] mb-3 tracking-tight">
            The Commons
          </div>
          <p className="text-[13px] text-[#6b7f78] leading-relaxed max-w-[220px]">
            A sanctuary for community cooperation, fostering trust through shared skills and local support systems.
          </p>
        </div>
 
        {/* Categories */}
        <div>
          <h4 className="text-[11px] font-semibold tracking-[0.1em] uppercase text-[#111918] mb-4">
            Categories
          </h4>
          <ul className="list-none space-y-2.5">
            {categories.map((c) => (
              <li key={c}>
                <a href="#" className="text-[13.5px] text-[#6b7f78] no-underline hover:text-[#1c5c47] transition-colors">
                  {c}
                </a>
              </li>
            ))}
          </ul>
        </div>
 
        {/* Resources */}
        <div>
          <h4 className="text-[11px] font-semibold tracking-[0.1em] uppercase text-[#111918] mb-4">
            Resources
          </h4>
          <ul className="list-none space-y-2.5">
            {resources.map((r) => (
              <li key={r}>
                <a href="#" className="text-[13.5px] text-[#6b7f78] no-underline hover:text-[#1c5c47] transition-colors">
                  {r}
                </a>
              </li>
            ))}
          </ul>
        </div>
 
        {/* Newsletter */}
        <div>
          <h4 className="text-[11px] font-semibold tracking-[0.1em] uppercase text-[#111918] mb-4">
            Newsletter
          </h4>
          <div className="flex max-w-[240px]">
            <input
              type="email"
              placeholder="neighbor@email.com"
              className="flex-1 px-3.5 py-2.5 border border-[#dde8e3] border-r-0 rounded-l-lg text-[13px] outline-none bg-white text-[#111918] focus:border-[#2d7a63]"
            />
            <button className="bg-[#1d4d3c] text-white px-3.5 rounded-r-lg border-none cursor-pointer hover:bg-[#2a6b54] transition-colors text-base">
              →
            </button>
          </div>
        </div>
      </div>
 
      {/* Bottom bar */}
      <div className="flex flex-col sm:flex-row items-start sm:items-center justify-between gap-3 border-t border-[#dde8e3] pt-5">
        <p className="text-[12px] text-[#6b7f78]">&copy; {currentYear} The Commons Community. All rights reserved.</p>
        <div className="flex gap-3">
          {/* Globe icon */}
          <button className="w-7 h-7 rounded-full border border-[#dde8e3] bg-white flex items-center justify-center text-[#6b7f78] hover:border-[#2d7a63] transition-colors cursor-pointer">
            <svg className="w-3.5 h-3.5" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8">
              <circle cx="12" cy="12" r="10" />
              <line x1="2" y1="12" x2="22" y2="12" />
              <path d="M12 2a15.3 15.3 0 0 1 4 10 15.3 15.3 0 0 1-4 10 15.3 15.3 0 0 1-4-10 15.3 15.3 0 0 1 4-10z" />
            </svg>
          </button>
          {/* Email icon */}
          <button className="w-7 h-7 rounded-full border border-[#dde8e3] bg-white flex items-center justify-center text-[#6b7f78] hover:border-[#2d7a63] transition-colors cursor-pointer">
            <svg className="w-3.5 h-3.5" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8">
              <path d="M4 4h16c1.1 0 2 .9 2 2v12c0 1.1-.9 2-2 2H4c-1.1 0-2-.9-2-2V6c0-1.1.9-2 2-2z" />
              <polyline points="22,6 12,13 2,6" />
            </svg>
          </button>
        </div>
      </div>
    </footer>
  );
};
 
export default ServicesFooter;