import React, { useState } from "react";
import { Link } from "react-router-dom";

const SignInForm = () => {
  const [form, setForm] = useState({
    email: "",
    password: "",
    keepSignedIn: false,
  });

  const handleChange = (e) => {
    const { name, value, type, checked } = e.target;
    setForm({ ...form, [name]: type === "checkbox" ? checked : value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // Authentication logic will be wired here
  };

  return (
    <div className="bg-white rounded-2xl shadow-sm px-10 py-12 w-full max-w-[420px] mx-auto">

      <h1 className="font-jakarta text-[28px] font-bold text-[#1c5c47] tracking-[-0.5px] mb-2">
        Welcome Back
      </h1>
      <p className="text-[14px] text-[#6b7f78] leading-relaxed mb-8">
        Access your community library and dashboard.
      </p>

      <form onSubmit={handleSubmit} className="flex flex-col gap-5">

        {/* Email */}
        <div className="flex flex-col gap-1.5">
          <label className="text-[13.5px] font-semibold text-[#111918]">
            Email Address
          </label>
          <input
            type="email"
            name="email"
            value={form.email}
            onChange={handleChange}
            placeholder="name@example.com"
            required
            className="w-full px-4 py-3.5 rounded-xl border border-[#dde8e3] bg-[#f4f7f6] text-[14px] text-[#111918] placeholder-[#b0bfba] outline-none focus:border-[#2d7a63] focus:bg-white transition-colors"
          />
        </div>

        {/* Password */}
        <div className="flex flex-col gap-1.5">
          <div className="flex items-center justify-between">
            <label className="text-[13.5px] font-semibold text-[#111918]">
              Password
            </label>
            <a href="#" className="text-[13px] font-semibold text-[#1c5c47] no-underline hover:underline">
              Forgot password?
            </a>
          </div>
          <input
            type="password"
            name="password"
            value={form.password}
            onChange={handleChange}
            placeholder="••••••••••"
            required
            className="w-full px-4 py-3.5 rounded-xl border border-[#dde8e3] bg-[#f4f7f6] text-[14px] text-[#111918] placeholder-[#b0bfba] outline-none focus:border-[#2d7a63] focus:bg-white transition-colors"
          />
        </div>

        {/* Keep signed in */}
        <div className="flex items-center gap-2.5">
          <input
            type="checkbox"
            name="keepSignedIn"
            id="keepSignedIn"
            checked={form.keepSignedIn}
            onChange={handleChange}
            className="w-4 h-4 rounded border border-[#dde8e3] accent-[#1c5c47] cursor-pointer"
          />
          <label htmlFor="keepSignedIn" className="text-[13.5px] text-[#3d4f49] cursor-pointer select-none">
            Keep me signed in
          </label>
        </div>

        {/* Sign In button */}
        <button
          type="submit"
          className="w-full bg-[#1c5c47] text-white font-jakarta font-semibold text-[15px] py-4 rounded-full border-none cursor-pointer hover:bg-[#2a6b54] transition-colors mt-2"
        >
          Sign In
        </button>

        {/* Sign Up link */}
        <p className="text-[13.5px] text-[#6b7f78] text-center">
          Don't have an account?{" "}
          <Link to="/SignUp" className="font-semibold text-[#1c5c47] no-underline hover:underline">
            Sign Up
          </Link>
        </p>
      </form>
    </div>
  );
};

export default SignInForm;