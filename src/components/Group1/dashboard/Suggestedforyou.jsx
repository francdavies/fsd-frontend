import React from "react";
 
const suggestions = [
  {
    id: 1,
    category: "GARDENING",
    distance: "0.4 miles away",
    title: "Community Garden Weeding",
    desc: "The south plot needs some extra care before the weekend harvest. Equipment provided!",
    image: "https://images.unsplash.com/photo-1416879595882-3373a0480b5b?w=400&q=80",
    categoryColor: "text-[#2d7a63]",
  },
  {
    id: 2,
    category: "TECH HELP",
    distance: "0.2 miles away",
    title: "Wi-Fi Router Setup",
    desc: "Need help getting a new mesh network running. I've got the hardware, just need some expertise.",
    image: "https://images.unsplash.com/photo-1555041469-a586c61ea9bc?w=400&q=80",
    categoryColor: "text-[#2d7a63]",
  },
  {
    id: 3,
    category: "EDUCATION",
    distance: "1.3 miles away",
    title: "Reading Helper (3rd Grade)",
    desc: "Looking for a volunteer to spend an hour a week reading with my son to build confidence.",
    image: "https://images.unsplash.com/photo-1503676260728-1c00da094a0b?w=400&q=80",
    categoryColor: "text-[#2d7a63]",
  },
];
 
const SuggestedForYou = () => {
  return (
    <div className="mt-10">
      <div className="mb-5">
        <h2 className="font-jakarta text-[22px] font-extrabold text-[#111918] tracking-tight mb-1">
          Suggested for You
        </h2>
        <p className="text-[13.5px] text-[#6b7f78]">Opportunities to help based on your interests.</p>
      </div>
 
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
        {suggestions.map((s) => (
          <div key={s.id} className="bg-white rounded-2xl border border-[#dde8e3] overflow-hidden flex flex-col">
            {/* Image */}
            <div className="h-[160px] overflow-hidden flex-shrink-0">
              <img
                src={s.image}
                alt={s.title}
                className="w-full h-full object-cover"
                onError={(e) => {
                  e.target.style.display = "none";
                  e.target.parentElement.style.background = "linear-gradient(135deg, #4e7040, #2e4a26)";
                }}
              />
            </div>
 
            {/* Content */}
            <div className="p-5 flex flex-col flex-1">
              <div className="flex items-center justify-between mb-2">
                <span className={`text-[10.5px] font-bold tracking-[0.1em] uppercase ${s.categoryColor}`}>
                  {s.category}
                </span>
                <span className="text-[11.5px] text-[#6b7f78]">{s.distance}</span>
              </div>
              <h3 className="font-jakarta text-[16px] font-bold text-[#111918] mb-2 leading-snug">
                {s.title}
              </h3>
              <p className="text-[13px] text-[#6b7f78] leading-relaxed flex-1 mb-4">
                {s.desc}
              </p>
              <button className="w-full border border-[#dde8e3] rounded-xl py-2.5 text-[13.5px] font-semibold text-[#1c5c47] bg-white hover:bg-[#eef3f1] transition-colors cursor-pointer">
                Offer Help
              </button>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};
 
export default SuggestedForYou;