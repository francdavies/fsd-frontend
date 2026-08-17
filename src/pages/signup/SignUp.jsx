import React, { useState } from "react";
import { Link } from "react-router-dom";

const SignUp = () => {
  const [form, setForm] = useState({
    fullName: "",
    email: "",
    password: "",
    confirm: "",
    agreed: false,
  });

  const handleChange = (e) => {
    const { name, value, type, checked } = e.target;
    setForm({ ...form, [name]: type === "checkbox" ? checked : value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // Authentication logic will be wired here
  };

  const inputClass =
    "w-full px-4 py-3 rounded-xl border border-[#dde8e3] bg-[#f4f7f6] text-[14px] text-[#111918] placeholder-[#b0bfba] outline-none focus:border-[#2d7a63] focus:bg-white transition-colors";

  return (
    <div className="min-h-screen flex flex-col bg-[#eef3f1] font-sans">

      {/* Top logo + tagline */}
      <div className="flex flex-col items-center pt-12 pb-8">
        <Link to="/" className="font-jakarta font-bold text-[28px] text-[#1c5c47] no-underline tracking-tight mb-2">
          The Commons
        </Link>
        <p className="text-[14px] text-[#6b7f78]">Enter the editorial sanctuary of community.</p>
      </div>

      {/* Card */}
      <main className="flex-1 flex flex-col items-center px-5 pb-12">
        <div className="bg-white rounded-2xl shadow-sm w-full max-w-[420px] px-8 py-10">

          {/* Card heading */}
          <h1 className="font-jakarta text-[24px] font-bold text-[#111918] tracking-[-0.4px] mb-1">
            Join the community
          </h1>
          <p className="text-[13.5px] text-[#6b7f78] mb-7">
            Create an account to start contributing.
          </p>

          <form onSubmit={handleSubmit} className="flex flex-col gap-5">

            {/* Full Name */}
            <div className="flex flex-col gap-1.5">
              <label className="text-[10.5px] font-semibold tracking-[0.12em] uppercase text-[#6b7f78]">
                Full Name
              </label>
              <input
                type="text"
                name="fullName"
                value={form.fullName}
                onChange={handleChange}
                placeholder="Evelyn Harper"
                required
                className={inputClass}
              />
            </div>

            {/* Email Address */}
            <div className="flex flex-col gap-1.5">
              <label className="text-[10.5px] font-semibold tracking-[0.12em] uppercase text-[#6b7f78]">
                Email Address
              </label>
              <input
                type="email"
                name="email"
                value={form.email}
                onChange={handleChange}
                placeholder="evelyn@commons.com"
                required
                className={inputClass}
              />
            </div>

            {/* Password + Confirm side by side */}
            <div className="grid grid-cols-2 gap-3">
              <div className="flex flex-col gap-1.5">
                <label className="text-[10.5px] font-semibold tracking-[0.12em] uppercase text-[#6b7f78]">
                  Password
                </label>
                <input
                  type="password"
                  name="password"
                  value={form.password}
                  onChange={handleChange}
                  placeholder="••••••••"
                  required
                  className={inputClass}
                />
              </div>
              <div className="flex flex-col gap-1.5">
                <label className="text-[10.5px] font-semibold tracking-[0.12em] uppercase text-[#6b7f78]">
                  Confirm
                </label>
                <input
                  type="password"
                  name="confirm"
                  value={form.confirm}
                  onChange={handleChange}
                  placeholder="••••••••"
                  required
                  className={inputClass}
                />
              </div>
            </div>

            {/* T&C Checkbox */}
            <div className="flex items-start gap-3">
              <input
                type="checkbox"
                name="agreed"
                id="agreed"
                checked={form.agreed}
                onChange={handleChange}
                required
                className="w-4 h-4 mt-0.5 rounded border border-[#dde8e3] accent-[#1c5c47] cursor-pointer flex-shrink-0"
              />
              <label htmlFor="agreed" className="text-[13px] text-[#6b7f78] leading-snug cursor-pointer">
                I agree to the{" "}
                <a href="#" className="text-[#1c5c47] font-semibold no-underline hover:underline">
                  Terms & Conditions
                </a>{" "}
                and Privacy Policy.
              </label>
            </div>

            {/* Submit */}
            <button
              type="submit"
              className="w-full bg-[#1c5c47] text-white font-jakarta font-semibold text-[15px] py-4 rounded-full border-none cursor-pointer hover:bg-[#2a6b54] transition-colors flex items-center justify-center gap-2 mt-1"
            >
              Create Account
              <span className="text-[16px]">→</span>
            </button>

            {/* Sign In link */}
            <p className="text-[13.5px] text-[#6b7f78] text-center">
              Already have an account?{" "}
              <Link to="/SignInPage" className="font-semibold text-[#1c5c47] no-underline hover:underline">
                Sign In
              </Link>
            </p>
          </form>
        </div>

        {/* 3 feature icons below card */}
        <div className="flex items-center justify-center gap-16 mt-10 opacity-50">
          {/* Community icon */}
          <div className="flex flex-col items-center gap-1.5">
            <div className="w-8 h-8 bg-[#c6ece0] rounded-lg flex items-center justify-center">
              <svg className="w-4 h-4 text-[#1c5c47]" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8">
                <path d="M17 21v-2a4 4 0 0 0-4-4H5a4 4 0 0 0-4 4v2" />
                <circle cx="9" cy="7" r="4" />
                <path d="M23 21v-2a4 4 0 0 0-3-3.87" />
                <path d="M16 3.13a4 4 0 0 1 0 7.75" />
              </svg>
            </div>
          </div>
          {/* Profile icon */}
          <div className="flex flex-col items-center gap-1.5">
            <div className="w-8 h-8 bg-[#c6ece0] rounded-lg flex items-center justify-center">
              <svg className="w-4 h-4 text-[#1c5c47]" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8">
                <circle cx="12" cy="8" r="4" />
                <path d="M4 20c0-4 3.6-7 8-7s8 3 8 7" />
              </svg>
            </div>
          </div>
          {/* Upload icon */}
          <div className="flex flex-col items-center gap-1.5">
            <div className="w-8 h-8 bg-[#c6ece0] rounded-lg flex items-center justify-center">
              <svg className="w-4 h-4 text-[#1c5c47]" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8">
                <path d="M21 15v4a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2v-4" />
                <polyline points="17 8 12 3 7 8" />
                <line x1="12" y1="3" x2="12" y2="15" />
              </svg>
            </div>
          </div>
        </div>
      </main>

      {/* Footer */}
      <footer className="py-6 text-center">
        <p className="text-[11px] text-[#6b7f78] uppercase tracking-[0.1em]">
          © 2024 The Commons • Designed for Calm
        </p>
      </footer>
    </div>
  );
};

export default SignUp;