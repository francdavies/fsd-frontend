import React, { useState } from "react";

const contactDetails = [
  {
    label: "Email Us",
    value: "hello@thecommons.org",
    sub: null,
    icon: (
      <svg className="w-4 h-4" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8">
        <path d="M4 4h16c1.1 0 2 .9 2 2v12c0 1.1-.9 2-2 2H4c-1.1 0-2-.9-2-2V6c0-1.1.9-2 2-2z" />
        <polyline points="22,6 12,13 2,6" />
      </svg>
    ),
  },
  {
    label: "Visit the Library",
    value: "42nd Archive Street,",
    sub: "South District, SD 1024",
    icon: (
      <svg className="w-4 h-4" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8">
        <path d="M21 10c0 7-9 13-9 13s-9-6-9-13a9 9 0 0 1 18 0z" />
        <circle cx="12" cy="10" r="3" />
      </svg>
    ),
  },
  {
    label: "Follow the Commons",
    value: null,
    sub: null,
    links: [
      { label: "Instagram", href: "#" },
      { label: "LinkedIn", href: "#" },
    ],
    icon: (
      <svg className="w-4 h-4" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8">
        <circle cx="18" cy="5" r="3" />
        <circle cx="6" cy="12" r="3" />
        <circle cx="18" cy="19" r="3" />
        <line x1="8.59" y1="13.51" x2="15.42" y2="17.49" />
        <line x1="15.41" y1="6.51" x2="8.59" y2="10.49" />
      </svg>
    ),
  },
];

const ContactMain = () => {
  const [form, setForm] = useState({
    name: "",
    email: "",
    subject: "General Inquiry",
    message: "",
  });

  const handleChange = (e) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
  };

  return (
    <section className="px-5 sm:px-10 lg:px-16 py-14 bg-white">
      <div className="flex flex-col lg:flex-row gap-10 lg:gap-12 items-start">

        {/* ── LEFT COLUMN — wider, takes more space ── */}
        <div className="w-full lg:flex-[1.3] flex flex-col gap-8">
          {/* Heading */}
          <h1 className="font-jakarta text-[38px] sm:text-[48px] lg:text-[54px] font-extrabold text-[#111918] leading-[1.05] tracking-[-1.5px]">
            Let's find your place in our story.
          </h1>

          {/* Description */}
          <p className="text-[14px] text-[#6b7f78] leading-relaxed max-w-[420px]">
            Whether you're looking for support, have a question about membership, or just want to say hello, our door is always open. At The Commons, community starts with a conversation.
          </p>

          {/* Contact details */}
          <div className="flex flex-col gap-6">
            {contactDetails.map((item) => (
              <div key={item.label} className="flex items-start gap-4">
                <div className="w-9 h-9 rounded-full bg-[#eef3f1] border border-[#dde8e3] flex items-center justify-center flex-shrink-0 text-[#3d4f49]">
                  {item.icon}
                </div>
                <div>
                  <p className="text-[13.5px] font-semibold text-[#111918] mb-0.5">{item.label}</p>
                  {item.value && <p className="text-[13px] text-[#6b7f78]">{item.value}</p>}
                  {item.sub && <p className="text-[13px] text-[#6b7f78]">{item.sub}</p>}
                  {item.links && (
                    <div className="flex gap-3 mt-0.5">
                      {item.links.map((link) => (
                        <a key={link.label} href={link.href} className="text-[13px] text-[#1c5c47] font-medium no-underline hover:underline">
                          {link.label}
                        </a>
                      ))}
                    </div>
                  )}
                </div>
              </div>
            ))}
          </div>

          {/* Building image */}
          <div className="rounded-2xl overflow-hidden w-full h-[280px] sm:h-[340px]">
            <img
              src="https://images.unsplash.com/photo-1486325212027-8081e485255e?w=800&q=80"
              alt="The Commons building"
              className="w-full h-full object-cover"
            />
          </div>
        </div>

        {/* ── RIGHT COLUMN — narrower form ── */}
        <div className="w-full lg:flex-1 flex-shrink-0">
          <div className="bg-[#f7f9f8] rounded-2xl border border-[#dde8e3] p-6 sm:p-8">
            <form onSubmit={handleSubmit} className="flex flex-col gap-5">

              {/* Your Name */}
              <div className="flex flex-col gap-1.5">
                <label className="text-[10.5px] font-semibold tracking-[0.12em] uppercase text-[#6b7f78]">
                  Your Name
                </label>
                <input
                  type="text"
                  name="name"
                  value={form.name}
                  onChange={handleChange}
                  placeholder="Jane Doe"
                  className="w-full px-4 py-3 rounded-xl border border-[#dde8e3] bg-white text-[13.5px] text-[#111918] placeholder-[#b0bfba] outline-none focus:border-[#2d7a63] transition-colors"
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
                  placeholder="jane@example.com"
                  className="w-full px-4 py-3 rounded-xl border border-[#dde8e3] bg-white text-[13.5px] text-[#111918] placeholder-[#b0bfba] outline-none focus:border-[#2d7a63] transition-colors"
                />
              </div>

              {/* Subject */}
              <div className="flex flex-col gap-1.5">
                <label className="text-[10.5px] font-semibold tracking-[0.12em] uppercase text-[#6b7f78]">
                  Subject
                </label>
                <div className="relative">
                  <select
                    name="subject"
                    value={form.subject}
                    onChange={handleChange}
                    className="w-full px-4 py-3 rounded-xl border border-[#dde8e3] bg-white text-[13.5px] text-[#111918] outline-none focus:border-[#2d7a63] transition-colors appearance-none cursor-pointer"
                  >
                    <option>General Inquiry</option>
                    <option>Membership</option>
                    <option>Tech Support</option>
                    <option>Food Sharing</option>
                    <option>Volunteering</option>
                    <option>Other</option>
                  </select>
                  <div className="absolute right-4 top-1/2 -translate-y-1/2 pointer-events-none text-[#6b7f78]">
                    <svg className="w-4 h-4" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                      <polyline points="6 9 12 15 18 9" />
                    </svg>
                  </div>
                </div>
              </div>

              {/* Message */}
              <div className="flex flex-col gap-1.5">
                <label className="text-[10.5px] font-semibold tracking-[0.12em] uppercase text-[#6b7f78]">
                  Message
                </label>
                <textarea
                  name="message"
                  value={form.message}
                  onChange={handleChange}
                  placeholder="How can we help you today?"
                  rows={6}
                  className="w-full px-4 py-3 rounded-xl border border-[#dde8e3] bg-white text-[13.5px] text-[#111918] placeholder-[#b0bfba] outline-none focus:border-[#2d7a63] transition-colors resize-none"
                />
              </div>

              {/* Submit */}
              <button
                type="submit"
                className="w-full bg-[#1c5c47] text-white font-jakarta font-semibold text-[15px] py-3.5 rounded-full border-none cursor-pointer hover:bg-[#2a6b54] transition-colors"
              >
                Send Message
              </button>

              {/* Privacy note */}
              <p className="text-[11.5px] text-[#6b7f78] text-center leading-relaxed">
                By submitting this form, you agree to our{" "}
                <a href="#" className="text-[#6b7f78] underline hover:text-[#1c5c47] transition-colors">
                  Privacy Policy
                </a>{" "}
                and understand how we protect your personal sanctuary.
              </p>
            </form>
          </div>
        </div>

      </div>
    </section>
  );
};

export default ContactMain;