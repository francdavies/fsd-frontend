import React from "react";
 
const Footer = () => {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-[#eef3f1] px-5 sm:px-8 lg:px-12 pt-12 lg:pt-14 pb-7 border-t border-[#dde8e3]">
 
      {/* Grid: 1 col mobile → 2 col tablet → 4 col desktop */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8 lg:gap-11 mb-10 lg:mb-12">
 
        {/* Brand */}
        <div className="sm:col-span-2 lg:col-span-1">
          <span className="font-jakarta font-semibold text-[15px] text-[#111918] block mb-3">
            The Commons
          </span>
          <p className="text-[13px] text-[#6b7f78] leading-relaxed max-w-[260px] mb-4">
            A dignified platform for mutual aid, built on the values of the public library and the town square.
          </p>
          <div className="flex gap-2">
            {['🌐', '💬'].map((icon) => (
              <button key={icon} className="w-8 h-8 rounded-full border border-[#dde8e3] bg-white flex items-center justify-center text-sm cursor-pointer hover:border-[#2d7a63] transition-colors">
                {icon}
              </button>
            ))}
          </div>
        </div>
 
        {/* Platform */}
        <div>
          <h4 className="text-[10.5px] tracking-[0.12em] uppercase text-[#6b7f78] font-semibold mb-3.5">Platform</h4>
          <ul className="list-none space-y-2.5">
            {['Safety & Trust', 'How it works', 'Case Studies', 'Pricing for Orgs'].map((item) => (
              <li key={item}>
                <a href="#" className="text-[13.5px] text-[#3d4f49] no-underline hover:text-[#1c5c47] transition-colors">{item}</a>
              </li>
            ))}
          </ul>
        </div>
 
        {/* Community */}
        <div>
          <h4 className="text-[10.5px] tracking-[0.12em] uppercase text-[#6b7f78] font-semibold mb-3.5">Community</h4>
          <ul className="list-none space-y-2.5">
            {['Ambassadors', 'Events', 'Grants', 'Code of Conduct'].map((item) => (
              <li key={item}>
                <a href="#" className="text-[13.5px] text-[#3d4f49] no-underline hover:text-[#1c5c47] transition-colors">{item}</a>
              </li>
            ))}
          </ul>
        </div>
 
        {/* Newsletter */}
        <div className="sm:col-span-2 lg:col-span-1">
          <h4 className="text-[10.5px] tracking-[0.12em] uppercase text-[#6b7f78] font-semibold mb-3.5">Join the Fold</h4>
          <p className="text-[13px] text-[#6b7f78] mb-3.5 leading-relaxed">Our weekly dispatch on community care.</p>
          <div className="flex max-w-[320px]">
            <input
              type="email"
              placeholder="Email address"
              className="flex-1 px-3.5 py-2.5 border border-[#dde8e3] border-r-0 rounded-l-lg text-[13.5px] outline-none bg-white text-[#111918] focus:border-[#2d7a63]"
            />
            <button className="bg-[#1d4d3c] text-white px-3.5 rounded-r-lg text-base border-none cursor-pointer hover:bg-[#2a6b54] transition-colors">
              →
            </button>
          </div>
        </div>
      </div>
 
      {/* Bottom Bar */}
      <div className="flex flex-col sm:flex-row items-start sm:items-center justify-between gap-3 border-t border-[#dde8e3] pt-5">
        <p className="text-[12.5px] text-[#6b7f78]">&copy; {currentYear} The Commons Community Platform. All rights reserved.</p>
        <div className="flex gap-5">
          {['PRIVACY', 'TERMS', 'ACCESSIBILITY'].map((item) => (
            <a key={item} href="#" className="text-[12.5px] text-[#6b7f78] no-underline tracking-wide hover:text-[#1c5c47] transition-colors">{item}</a>
          ))}
        </div>
      </div>
    </footer>
  );
};
 
export default Footer;