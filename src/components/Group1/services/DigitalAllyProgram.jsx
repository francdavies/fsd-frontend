import React from "react";
 
const features = [
  {
    title: "Vetted Helpers",
    desc: "All tech assistants undergo a security background check and patience assessment.",
    icon: (
      <svg className="w-4 h-4" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8">
        <path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z" />
      </svg>
    ),
  },
  {
    title: "On-site or Remote",
    desc: "Choose between a home visit or a screen-sharing session via our secure platform.",
    icon: (
      <svg className="w-4 h-4" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8">
        <rect x="2" y="3" width="20" height="14" rx="2" />
        <line x1="8" y1="21" x2="16" y2="21" />
        <line x1="12" y1="17" x2="12" y2="21" />
      </svg>
    ),
  },
];
 
const DigitalAllyProgram = () => {
  return (
    <section className="px-5 sm:px-10 lg:px-16 py-16 bg-white">
      <div className="flex flex-col lg:flex-row gap-10 lg:gap-16 items-center">
 
        {/* Left — illustration card */}
        <div className="w-full lg:w-[320px] flex-shrink-0">
          <div className="bg-[#f5f5f5] rounded-3xl flex items-center justify-center" style={{ minHeight: "340px" }}>
            {/* Hand holding badge illustration */}
            <div className="flex flex-col items-center justify-center p-8">
              <div className="relative">
                {/* Hand SVG */}
                <svg width="160" height="200" viewBox="0 0 160 200" fill="none">
                  {/* Sleeve */}
                  <rect x="45" y="150" width="70" height="40" rx="8" fill="#2a2a2a" />
                  {/* Palm */}
                  <ellipse cx="80" cy="135" rx="48" ry="38" fill="#f4a261" />
                  {/* Fingers */}
                  <rect x="32" y="90" width="20" height="55" rx="10" fill="#f4a261" />
                  <rect x="56" y="75" width="20" height="65" rx="10" fill="#f4a261" />
                  <rect x="80" y="72" width="20" height="65" rx="10" fill="#f4a261" />
                  <rect x="104" y="78" width="20" height="60" rx="10" fill="#f4a261" />
                  {/* Badge on palm */}
                  <rect x="55" y="100" width="50" height="65" rx="8" fill="#e63946" />
                  <rect x="60" y="108" width="40" height="4" rx="2" fill="white" opacity="0.6" />
                  <rect x="60" y="116" width="30" height="3" rx="2" fill="white" opacity="0.4" />
                  <rect x="60" y="123" width="35" height="3" rx="2" fill="white" opacity="0.4" />
                  {/* Lanyard */}
                  <path d="M70 100 Q80 88 90 100" stroke="#e63946" strokeWidth="3" fill="none" />
                  {/* Clip */}
                  <rect x="75" y="84" width="10" height="6" rx="2" fill="#999" />
                </svg>
              </div>
              <div className="w-24 h-2 bg-gray-200 rounded-full mt-2 opacity-50" />
            </div>
          </div>
        </div>
 
        {/* Right — content */}
        <div className="flex-1">
          <h2 className="font-jakarta text-[28px] sm:text-[34px] font-extrabold text-[#111918] leading-tight tracking-[-0.8px] mb-4">
            The Digital Ally Program
          </h2>
          <p className="text-[14px] text-[#6b7f78] leading-relaxed mb-8 max-w-[480px]">
            Our Tech Support isn't just about fixing a broken printer; it's about empowerment. We match "Digital Natives" with "Digital Explorers" to ensure everyone stays connected to family, health services, and information.
          </p>
 
          <div className="flex flex-col gap-5">
            {features.map((f) => (
              <div key={f.title} className="flex items-start gap-4">
                <div className="w-9 h-9 bg-[#e4eee9] rounded-xl flex items-center justify-center flex-shrink-0 text-[#1c5c47] mt-0.5">
                  {f.icon}
                </div>
                <div>
                  <h4 className="font-jakarta text-[14.5px] font-bold text-[#111918] mb-1">{f.title}</h4>
                  <p className="text-[13px] text-[#6b7f78] leading-relaxed">{f.desc}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};
 
export default DigitalAllyProgram;