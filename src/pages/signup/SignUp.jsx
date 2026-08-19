import React, { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { useAuth } from "../../context/AuthContext";

const SignUp = () => {
  const navigate = useNavigate();
  const { signUp } = useAuth();

  const [form, setForm] = useState({
    fullName: "",
    email: "",
    password: "",
    confirm: "",
    agreed: false,
  });
  const [error, setError] = useState("");
  const [loading, setLoading] = useState(false);
  const [success, setSuccess] = useState(false);

  const handleChange = (e) => {
    const { name, value, type, checked } = e.target;
    setForm({ ...form, [name]: type === "checkbox" ? checked : value });
    setError("");
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setError("");

    if (!form.agreed) {
      setError("You must agree to the Terms & Conditions.");
      return;
    }
    if (form.password !== form.confirm) {
      setError("Passwords do not match.");
      return;
    }
    if (form.password.length < 6) {
      setError("Password must be at least 6 characters.");
      return;
    }

    setLoading(true);
    const { error } = await signUp({
      fullName: form.fullName,
      email: form.email,
      password: form.password,
    });
    setLoading(false);

    if (error) {
      setError(error.message);
    } else {
      setSuccess(true);
    }
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

          {/* Success state */}
          {success ? (
            <div className="text-center py-4">
              <div className="w-14 h-14 bg-[#c6ece0] rounded-full flex items-center justify-center mx-auto mb-4">
                <svg className="w-7 h-7 text-[#1c5c47]" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5">
                  <polyline points="20 6 9 17 4 12" />
                </svg>
              </div>
              <h2 className="font-jakarta text-[20px] font-bold text-[#111918] mb-2">Check your email!</h2>
              <p className="text-[13.5px] text-[#6b7f78] leading-relaxed mb-6">
                We sent a confirmation link to <strong>{form.email}</strong>. Click it to activate your account.
              </p>
              <Link
                to="/SignInPage"
                className="text-[13.5px] font-semibold text-[#1c5c47] no-underline hover:underline"
              >
                Back to Sign In
              </Link>
            </div>
          ) : (
            <>
              <h1 className="font-jakarta text-[24px] font-bold text-[#111918] tracking-[-0.4px] mb-1">
                Join the community
              </h1>
              <p className="text-[13.5px] text-[#6b7f78] mb-7">
                Create an account to start contributing.
              </p>

              {/* Error message */}
              {error && (
                <div className="bg-red-50 border border-red-200 text-red-700 text-[13px] rounded-xl px-4 py-3 mb-5">
                  {error}
                </div>
              )}

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

                {/* Email */}
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

                {/* Password + Confirm */}
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

                {/* T&C */}
                <div className="flex items-start gap-3">
                  <input
                    type="checkbox"
                    name="agreed"
                    id="agreed"
                    checked={form.agreed}
                    onChange={handleChange}
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
                  disabled={loading}
                  className="w-full bg-[#1c5c47] text-white font-jakarta font-semibold text-[15px] py-4 rounded-full border-none cursor-pointer hover:bg-[#2a6b54] transition-colors flex items-center justify-center gap-2 mt-1 disabled:opacity-60 disabled:cursor-not-allowed"
                >
                  {loading ? (
                    <>
                      <div className="w-4 h-4 border-2 border-white border-t-transparent rounded-full animate-spin" />
                      Creating account...
                    </>
                  ) : (
                    <>Create Account <span className="text-[16px]">→</span></>
                  )}
                </button>

                {/* Sign In link */}
                <p className="text-[13.5px] text-[#6b7f78] text-center">
                  Already have an account?{" "}
                  <Link to="/SignInPage" className="font-semibold text-[#1c5c47] no-underline hover:underline">
                    Sign In
                  </Link>
                </p>
              </form>
            </>
          )}
        </div>

        {/* Feature icons */}
        <div className="flex items-center justify-center gap-16 mt-10 opacity-50">
          {[
            <svg className="w-4 h-4 text-[#1c5c47]" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8"><path d="M17 21v-2a4 4 0 0 0-4-4H5a4 4 0 0 0-4 4v2" /><circle cx="9" cy="7" r="4" /><path d="M23 21v-2a4 4 0 0 0-3-3.87" /><path d="M16 3.13a4 4 0 0 1 0 7.75" /></svg>,
            <svg className="w-4 h-4 text-[#1c5c47]" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8"><circle cx="12" cy="8" r="4" /><path d="M4 20c0-4 3.6-7 8-7s8 3 8 7" /></svg>,
            <svg className="w-4 h-4 text-[#1c5c47]" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8"><path d="M21 15v4a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2v-4" /><polyline points="17 8 12 3 7 8" /><line x1="12" y1="3" x2="12" y2="15" /></svg>,
          ].map((icon, i) => (
            <div key={i} className="w-8 h-8 bg-[#c6ece0] rounded-lg flex items-center justify-center">
              {icon}
            </div>
          ))}
        </div>
      </main>

      <footer className="py-6 text-center">
        <p className="text-[11px] text-[#6b7f78] uppercase tracking-[0.1em]">
          © 2024 The Commons • Designed for Calm
        </p>
      </footer>
    </div>
  );
};

export default SignUp;