import React, { useState } from "react";
import { Link } from "react-router-dom";

const Navbar = ({ activePage = "landing" }) => {
  const [menuOpen, setMenuOpen] = useState(false);

  const linkClass = "no-underline text-[#3d4f49] hover:text-[#111918] transition-colors text-sm";
  const activeClass = "font-jakarta font-semibold text-[#111918] border-b-2 border-[#2d7a63] pb-0.5";

  const navLinks = [
    { label: "Landing", to: "/", key: "landing" },
    { label: "About", to: "/AboutUs", key: "about" },
    { label: "Services", to: "/Services", key: "services" },
    { label: "Contact", to: "/ContactPage", key: "contact" },
  ];

  return (
    <nav className="sticky top-0 z-50 bg-white border-b border-[#dde8e3]">
      <div className="flex items-center justify-between px-5 sm:px-8 lg:px-12 h-[58px]">

        {/* Logo */}
        <Link to="/" className="font-jakarta font-semibold text-base tracking-tight text-[#111918] no-underline">
          The Commons
        </Link>

        {/* Desktop Nav Links */}
        <ul className="hidden md:flex gap-7 list-none text-sm text-[#3d4f49]">
          {navLinks.map(({ label, to, key }) => (
            <li key={key}>
              <Link
                to={to}
                className={`${linkClass} ${activePage === key ? activeClass : ""}`}
              >
                {label}
              </Link>
            </li>
          ))}
        </ul>

        {/* Desktop Actions */}
        <div className="hidden md:flex items-center gap-5">
          <Link
            to="/SignInPage"
            className="text-sm text-[#3d4f49] no-underline hover:text-[#111918] transition-colors"
          >
            Sign In
          </Link>
          <a href="#CTA" className="bg-[#1d4d3c] text-white text-sm font-medium rounded-full px-5 py-2 border-none cursor-pointer hover:bg-[#2a6b54] transition-colors">
            Get Started
          </a>
        </div>

        {/* Mobile Hamburger */}
        <button
          className="md:hidden flex flex-col gap-1.5 bg-transparent border-none cursor-pointer p-1"
          onClick={() => setMenuOpen(!menuOpen)}
          aria-label="Toggle menu"
        >
          <span className={`block w-6 h-0.5 bg-[#111918] transition-all duration-300 ${menuOpen ? "rotate-45 translate-y-2" : ""}`} />
          <span className={`block w-6 h-0.5 bg-[#111918] transition-all duration-300 ${menuOpen ? "opacity-0" : ""}`} />
          <span className={`block w-6 h-0.5 bg-[#111918] transition-all duration-300 ${menuOpen ? "-rotate-45 -translate-y-2" : ""}`} />
        </button>
      </div>

      {/* Mobile Dropdown */}
      {menuOpen && (
        <div className="md:hidden bg-white border-t border-[#dde8e3] px-5 py-4 flex flex-col gap-4">
          <ul className="flex flex-col gap-3 list-none text-sm text-[#3d4f49]">
            {navLinks.map(({ label, to, key }) => (
              <li key={key}>
                <Link
                  to={to}
                  className={`no-underline text-[#3d4f49] text-sm ${activePage === key ? "font-semibold text-[#111918]" : ""}`}
                  onClick={() => setMenuOpen(false)}
                >
                  {label}
                </Link>
              </li>
            ))}
          </ul>
          <div className="flex flex-col gap-2 pt-2 border-t border-[#dde8e3]">
            <Link
              to="/SignInPage"
              className="text-sm text-[#3d4f49] no-underline text-left"
              onClick={() => setMenuOpen(false)}
            >
              Sign In
            </Link>
            <Link to="/#CTA" className="bg-[#1d4d3c] text-white text-sm font-medium rounded-full px-5 py-2 border-none cursor-pointer w-full hover:bg-[#2a6b54] transition-colors">
              Get Started
            </Link>
          </div>
        </div>
      )}
    </nav>
  );
};

export default Navbar;
