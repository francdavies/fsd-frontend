import React from "react";
 
const services = [
  {
    title: "Tech Support",
    desc: "Bridging the digital divide with patient, expert assistance for software, hardware, and online connectivity.",
    items: ["Device Setup", "Cyber Security", "App Troubleshooting"],
    cta: "Request Support →",
    highlighted: false,
    icon: (
      <svg className="w-5 h-5" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8">
        <rect x="2" y="3" width="20" height="14" rx="2" />
        <line x1="8" y1="21" x2="16" y2="21" />
        <line x1="12" y1="17" x2="12" y2="21" />
      </svg>
    ),
  },
  {
    title: "Food Sharing",
    desc: "Reducing waste and fighting hunger through community larders, shared meals, and garden surplus distribution.",
    items: ["Surplus Pickup", "Community Dinners", "Larder Access"],
    cta: "View Pantry →",
    highlighted: true,
    icon: (
      <svg className="w-5 h-5" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8">
        <line x1="18" y1="6" x2="6" y2="18" />
        <line x1="6" y1="6" x2="18" y2="6" />
        <path d="M6 6v12" />
      </svg>
    ),
  },
  {
    title: "Education",
    desc: "Skill-sharing at every level. From K-12 tutoring to adult language learning and vocational workshops.",
    items: ["1-on-1 Tutoring", "Skill Workshops", "Language Exchange"],
    cta: "Find a Mentor →",
    highlighted: false,
    icon: (
      <svg className="w-5 h-5" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8">
        <path d="M22 10v6M2 10l10-5 10 5-10 5z" />
        <path d="M6 12v5c3 3 9 3 12 0v-5" />
      </svg>
    ),
  },
  {
    title: "Physical Help",
    desc: "Local strength for local needs. Help with groceries, furniture moving, or light maintenance.",
    items: ["Grocery Runs", "Heavy Lifting", "Garden Care"],
    cta: "Post a Task →",
    highlighted: true,
    icon: (
      <svg className="w-5 h-5" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8">
        <path d="M18 8h1a4 4 0 0 1 0 8h-1" />
        <path d="M2 8h16v9a4 4 0 0 1-4 4H6a4 4 0 0 1-4-4V8z" />
        <line x1="6" y1="1" x2="6" y2="4" />
        <line x1="10" y1="1" x2="10" y2="4" />
        <line x1="14" y1="1" x2="14" y2="4" />
      </svg>
    ),
  },
];
 
const ServiceCards = () => {
  return (
    <section className="px-5 sm:px-10 lg:px-16 py-10 bg-[#eef3f1]">
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
        {services.map((s) => (
          <div
            key={s.title}
            className={`rounded-2xl p-6 flex flex-col border ${
              s.highlighted
                ? "bg-[#d4ebe3] border-[#b8ddd0]"
                : "bg-white border-[#dde8e3]"
            }`}
          >
            {/* Icon */}
            <div className={`w-10 h-10 rounded-xl flex items-center justify-center mb-5 ${
              s.highlighted ? "bg-[#b8ddd0] text-[#1c5c47]" : "bg-[#e4eee9] text-[#1c5c47]"
            }`}>
              {s.icon}
            </div>
 
            {/* Title */}
            <h3 className="font-jakarta text-[17px] font-bold text-[#111918] mb-2">{s.title}</h3>
 
            {/* Description */}
            <p className="text-[12.5px] text-[#3d4f49] leading-relaxed mb-4 flex-1">{s.desc}</p>
 
            {/* Items list */}
            <ul className="list-none space-y-1.5 mb-5">
              {s.items.map((item) => (
                <li key={item} className="flex items-center gap-2 text-[12px] text-[#3d4f49]">
                  <svg className="w-3 h-3 text-[#2d7a63] flex-shrink-0" viewBox="0 0 24 24" fill="currentColor">
                    <circle cx="12" cy="12" r="10" opacity="0.15" />
                    <path d="M9 12l2 2 4-4" stroke="#2d7a63" strokeWidth="2" fill="none" strokeLinecap="round" strokeLinejoin="round" />
                    <circle cx="12" cy="12" r="9" stroke="#2d7a63" strokeWidth="1.5" fill="none" />
                  </svg>
                  {item}
                </li>
              ))}
            </ul>
 
            {/* CTA */}
            <button className="text-[12.5px] font-semibold text-[#1c5c47] bg-transparent border-none cursor-pointer text-left hover:underline p-0">
              {s.cta}
            </button>
          </div>
        ))}
      </div>
    </section>
  );
};
 
export default ServiceCards;