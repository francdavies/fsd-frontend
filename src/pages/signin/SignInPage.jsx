import React from "react";
import { Link } from "react-router-dom";
import SignInForm from "./SignInForm";

const SignInPage = () => {
  return (
    <div className="min-h-screen flex flex-col bg-[#eef3f1] font-sans">

      {/* Minimal nav */}
      <nav className="flex items-center justify-between px-6 sm:px-10 lg:px-14 h-[60px] bg-white/60 backdrop-blur-sm border-b border-[#dde8e3]">
        <Link to="/" className="font-jakarta font-semibold text-[16px] text-[#1c5c47] no-underline tracking-tight">
          The Commons
        </Link>
        <Link to="/" className="text-[13.5px] text-[#6b7f78] no-underline hover:text-[#111918] transition-colors">
          Back to Site
        </Link>
      </nav>

      {/* Centered form */}
      <main className="flex-1 flex flex-col items-center justify-center px-5 py-12">
        <SignInForm />

        {/* Secure badge */}
        <div className="flex items-center gap-2 mt-10">
          <svg className="w-3.5 h-3.5 text-[#b0bfba]" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8">
            <rect x="3" y="11" width="18" height="11" rx="2" ry="2" />
            <path d="M7 11V7a5 5 0 0 1 10 0v4" />
          </svg>
          <span className="text-[10.5px] font-semibold tracking-[0.14em] uppercase text-[#b0bfba]">
            Secure Commons Access
          </span>
        </div>
      </main>

      {/* Footer */}
      <footer className="py-6 text-center border-t border-[#dde8e3]">
        <p className="text-[12.5px] text-[#6b7f78]">
          © 2024 The Commons Community. All rights reserved.
        </p>
      </footer>
    </div>
  );
};

export default SignInPage;