import React, { useState } from "react";
import { Link } from "react-router-dom";
 
const Navbar = () => {
  const [menuOpen, setMenuOpen] = useState(false);
 
  return (
    <nav className="sticky top-0 z-50 bg-white border-b border-[#dde8e3]">
      <div className="flex items-center justify-between px-5 sm:px-8 lg:px-12 h-[58px]">
 
        {/* Logo */}
        <Link to="/" className="font-jakarta font-semibold text-base tracking-tight text-[#111918] no-underline">
          The Commons
        </Link>
 
        {/* Desktop Nav Links */}
        <ul className="hidden md:flex gap-7 list-none text-sm text-[#3d4f49]">
          <li className="font-jakarta font-semibold text-[#111918] border-b-2 border-[#2d7a63] pb-0.5 cursor-pointer">
            Landing
          </li>
          <li className="cursor-pointer hover:text-[#111918] transition-colors">About</li>
          <li>
            <Link
              to="/services"
              className="cursor-pointer hover:text-[#111918] transition-colors no-underline text-[#3d4f49] text-sm"
            >
              Services
            </Link>
          </li>
          <li className="cursor-pointer hover:text-[#111918] transition-colors">Contact</li>
        </ul>
 
        {/* Desktop Actions */}
        <div className="hidden md:flex items-center gap-5">
          <button className="text-sm text-[#3d4f49] bg-transparent border-none cursor-pointer hover:text-[#111918] transition-colors">
            Sign In
          </button>
          <button className="bg-[#1d4d3c] text-white text-sm font-medium rounded-full px-5 py-2 border-none cursor-pointer hover:bg-[#2a6b54] transition-colors">
            Get Started
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
            <li className="font-jakarta font-semibold text-[#111918] cursor-pointer">Landing</li>
            <li className="cursor-pointer">About</li>
            <li>
              <Link
                to="/services"
                className="no-underline text-[#3d4f49] text-sm"
                onClick={() => setMenuOpen(false)}
              >
                Services
              </Link>
            </li>
            <li className="cursor-pointer">Contact</li>
          </ul>
          <div className="flex flex-col gap-2 pt-2 border-t border-[#dde8e3]">
            <button className="text-sm text-[#3d4f49] bg-transparent border-none cursor-pointer text-left">
              Sign In
            </button>
            <button className="bg-[#1d4d3c] text-white text-sm font-medium rounded-full px-5 py-2 border-none cursor-pointer w-full">
              Get Started
            </button>
          </div>
        </div>
      )}
    </nav>
  );
};
 
export default Navbar;