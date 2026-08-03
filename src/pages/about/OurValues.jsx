import React from "react";

const values = [
  {
    title: "Radical Trust",
    desc: "We assume the best in each other. Our systems are designed to foster safety through transparency and mutual accountability.",
    icon: (
      <svg className="w-5 h-5" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8">
        <path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z" />
      </svg>
    ),
  },
  {
    title: "Atmospheric Calm",
    desc: "Technology should be a quiet facilitator, not a noisy distraction. We prioritize a clean, editorial aesthetic that respects your focus.",
    icon: (
      <svg className="w-5 h-5" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8">
        <path d="M12 2a10 10 0 1 0 0 20 10 10 0 0 0 0-20z" />
        <path d="M12 6v6l4 2" />
      </svg>
    ),
  },
  {
    title: "Hyper-Locality",
    desc: "Global tools for local needs. We believe the most significant impact happens within the five-mile radius of your front door.",
    icon: (
      <svg className="w-5 h-5" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8">
        <path d="M17 21v-2a4 4 0 0 0-4-4H5a4 4 0 0 0-4 4v2" />
        <circle cx="9" cy="7" r="4" />
        <path d="M23 21v-2a4 4 0 0 0-3-3.87" />
        <path d="M16 3.13a4 4 0 0 1 0 7.75" />
      </svg>
    ),
  },
];

const OurValues = () => {
  return (
    <section className="px-5 sm:px-10 lg:px-16 py-14 bg-white">

      {/* Header */}
      <div className="mb-10">
        <h2 className="font-jakarta text-[28px] sm:text-[32px] font-extrabold text-[#111918] tracking-[-0.5px] mb-2">
          Our Values
        </h2>
        <div className="w-10 h-0.5 bg-[#2d7a63]" />
      </div>

      {/* Cards */}
      <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
        {values.map((v) => (
          <div
            key={v.title}
            className="bg-[#eef3f1] rounded-2xl p-7 border border-[#dde8e3]"
          >
            <div className="w-10 h-10 bg-[#d4ebe3] rounded-xl flex items-center justify-center mb-5 text-[#1c5c47]">
              {v.icon}
            </div>
            <h3 className="font-jakarta text-[16px] font-bold text-[#111918] mb-3">
              {v.title}
            </h3>
            <p className="text-[13px] text-[#6b7f78] leading-relaxed">{v.desc}</p>
          </div>
        ))}
      </div>
    </section>
  );
};

export default OurValues;