import React from "react";

const team = [
  {
    name: "Elena Vance",
    role: "Founding Director",
    img: "images/btn.png",
    bg: "bg-[#1a1f2e]",
  },
  {
    name: "Marcus Thorne",
    role: "Product Architect",
    img: "https://randomuser.me/api/portraits/men/45.jpg",
    bg: "bg-[#1c2a1e]",
  },
  {
    name: "Sarah Jenkins",
    role: "Community Lead",
    img: "https://randomuser.me/api/portraits/women/68.jpg",
    bg: "bg-[#1e2a1a]",
  },
  {
    name: "David Chen",
    role: "Operations",
    img: "https://randomuser.me/api/portraits/men/75.jpg",
    bg: "bg-[#0d1f2d]",
  },
];

const MeetTheTeam = () => {
  return (
    <section className="px-5 sm:px-10 lg:px-16 py-14 bg-white">

      {/* Header row */}
      <div className="flex flex-col sm:flex-row sm:items-start sm:justify-between gap-4 mb-10">
        <div>
          <h2 className="font-jakarta text-[28px] sm:text-[32px] font-extrabold text-[#111918] tracking-[-0.5px] mb-2">
            Meet the Team
          </h2>
          <p className="text-[13.5px] text-[#6b7f78] max-w-[360px] leading-relaxed">
            A collective of designers, sociologists, and community organizers dedicated to rebuilding the social fabric.
          </p>
        </div>
        <button className="self-start sm:mt-1 border border-[#dde8e3] bg-white text-[#111918] text-[13px] font-medium rounded-full px-5 py-2.5 cursor-pointer hover:border-[#2d7a63] hover:text-[#1c5c47] transition-colors flex-shrink-0">
          Join the Collective
        </button>
      </div>

      {/* Team grid */}
      <div className="grid grid-cols-2 sm:grid-cols-4 gap-4">
        {team.map((member) => (
          <div key={member.name} className="flex flex-col">
            {/* Square card with dark bg, image centered with padding */}
            <div className={`${member.bg} rounded-2xl aspect-square w-full flex items-center justify-center overflow-hidden mb-3`}>
              <img
                src={member.img}
                alt={member.name}
                className="w-4/5 h-4/5 object-cover object-top rounded-xl"
              />
            </div>
            {/* Name and role below the card */}
            <p className="font-jakarta text-[14px] font-bold text-[#111918] leading-tight">
              {member.name}
            </p>
            <p className="text-[12.5px] text-[#6b7f78] mt-0.5">{member.role}</p>
          </div>
        ))}
      </div>
    </section>
  );
};

export default MeetTheTeam;