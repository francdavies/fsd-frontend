import React, { useState } from "react";
import { Link } from "react-router-dom";
 
const ServicesNav = () => {
  const [menuOpen, setMenuOpen] = useState(false);
 
  return (
    <nav className="sticky top-0 z-50 bg-white border-b border-[#dde8e3]">
      <div className="flex items-center justify-between px-5 sm:px-8 lg:px-12 h-[56px]">
 
        {/* Logo */}
        <Link to="/" className="font-jakarta font-semibold text-[15px] text-[#111918] tracking-tight no-underline">
          The Commons
        </Link>
 
        {/* Desktop Nav Links */}
        <ul className="hidden md:flex gap-6 list-none text-[13.5px] text-[#3d4f49]">
          <li>
            <Link
              to="/landingpage"
              className="cursor-pointer hover:text-[#111918] transition-colors no-underline text-[#3d4f49] text-[13.5px]"
            >
              Landing
            </Link>
          </li>
          <li className="cursor-pointer hover:text-[#111918] transition-colors">About</li>
          <li className="font-semibold text-[#111918] border-b-2 border-[#2d7a63] pb-0.5 cursor-pointer">
            Services
          </li>
          <li className="cursor-pointer hover:text-[#111918] transition-colors">Contact</li>
        </ul>
 
        {/* Desktop Sign In */}
        <div className="hidden md:flex">
          <button className="bg-[#1d4d3c] text-white text-[13px] font-medium rounded-full px-5 py-2 border-none cursor-pointer hover:bg-[#2a6b54] transition-colors">
            Sign In
          </button>
        </div>
 
        {/* Mobile Hamburger */}
        <button
          className="md:hidden flex flex-col gap-1.5 bg-transparent border-none cursor-pointer p-1"
          onClick={() => setMenuOpen(!menuOpen)}
          aria-label="Toggle menu"
        >
          <span className={`block w-6 h-0.5 bg-[#111918] transition-all duration-300 ${menuOpen ? 'rotate-45 translate-y-2' : ''}`} />
          <span className={`block w-6 h-0.5 bg-[#111918] transition-all duration-300 ${menuOpen ? 'opacity-0' : ''}`} />
          <span className={`block w-6 h-0.5 bg-[#111918] transition-all duration-300 ${menuOpen ? '-rotate-45 -translate-y-2' : ''}`} />
        </button>
      </div>
 
      {/* Mobile Dropdown */}
      {menuOpen && (
        <div className="md:hidden bg-white border-t border-[#dde8e3] px-5 py-4 flex flex-col gap-4">
          <ul className="flex flex-col gap-3 list-none text-sm text-[#3d4f49]">
            <li>
              <Link
                to="/landingpage"
                className="no-underline text-[#3d4f49] text-sm"
                onClick={() => setMenuOpen(false)}
              >
                Landing
              </Link>
            </li>
            <li className="cursor-pointer">About</li>
            <li className="font-semibold text-[#111918] cursor-pointer">Services</li>
            <li className="cursor-pointer">Contact</li>
          </ul>
          <div className="pt-2 border-t border-[#dde8e3]">
            <button className="bg-[#1d4d3c] text-white text-sm font-medium rounded-full px-5 py-2 border-none cursor-pointer w-full">
              Sign In
            </button>
          </div>
        </div>
      )}
    </nav>
  );
};
 
export default ServicesNav;