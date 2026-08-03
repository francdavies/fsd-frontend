import React from "react";
 
const activities = [
  {
    id: 1,
    title: "Move assistance for Mrs. Higgins",
    desc: "Helping with 4 heavy boxes and a bookshelf.",
    status: "IN PROGRESS",
    statusColor: "bg-[#dde8e3] text-[#1c5c47]",
    badge: { label: "Your Offer Accepted", icon: "✔" },
    meta: "Scheduled: Tomorrow, 2:00 PM",
    metaIcon: "check",
    icon: (
      <svg className="w-5 h-5" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8">
        <rect x="1" y="3" width="15" height="13" rx="1" />
        <path d="M16 8h4l3 5v3h-7V8z" />
        <circle cx="5.5" cy="18.5" r="2.5" />
        <circle cx="18.5" cy="18.5" r="2.5" />
      </svg>
    ),
  },
  {
    id: 2,
    title: "Dog walking - Cooper the Golden",
    desc: "30 minute walk around the park loop.",
    status: "PENDING",
    statusColor: "bg-[#f0f0f0] text-[#6b7f78]",
    badge: { label: "Awaiting Response", icon: "clock" },
    meta: "Posted: 2h ago",
    metaIcon: "clock",
    icon: (
      <svg className="w-5 h-5" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8">
        <path d="M10 5.172C10 3.782 8.423 2.679 6.5 3c-2 .336-3.5 2.112-3.5 4 0 .828.36 1.706 1 2.428" />
        <path d="M14.267 5.172c0-1.39 1.577-2.493 3.5-2.172 2 .336 3.5 2.112 3.5 4 0 1.592-1.181 2.927-2.75 3.770" />
        <path d="M5 11c0 2.21 1.79 4 4 4h6c2.21 0 4-1.79 4-4" />
        <path d="M9 15v4M15 15v4M9 19h6" />
      </svg>
    ),
  },
];
 
const RecentActivity = () => {
  return (
    <div className="flex-1 min-w-0">
      <div className="flex items-center justify-between mb-4">
        <h2 className="font-jakarta text-[18px] font-bold text-[#111918]">Recent Activity</h2>
        <button className="text-[13.5px] text-[#1c5c47] font-semibold bg-transparent border-none cursor-pointer hover:underline">
          View All
        </button>
      </div>
 
      <div className="flex flex-col gap-3">
        {activities.map((act) => (
          <div
            key={act.id}
            className="bg-white rounded-2xl border border-[#dde8e3] p-5"
          >
            <div className="flex items-start gap-3">
              {/* Icon */}
              <div className="w-10 h-10 bg-[#e4eee9] rounded-xl flex items-center justify-center flex-shrink-0 text-[#1c5c47]">
                {act.icon}
              </div>
 
              {/* Content */}
              <div className="flex-1 min-w-0">
                <div className="flex items-start justify-between gap-2 mb-1">
                  <h3 className="font-jakarta text-[14.5px] font-bold text-[#111918] leading-snug">
                    {act.title}
                  </h3>
                  <span className={`text-[10px] font-semibold tracking-wide uppercase px-2.5 py-1 rounded-md flex-shrink-0 ${act.statusColor}`}>
                    {act.status}
                  </span>
                </div>
                <p className="text-[13px] text-[#6b7f78] mb-2">{act.desc}</p>
 
                {/* Badge + meta */}
                <div className="flex items-center gap-3 flex-wrap">
                  {act.metaIcon === "check" ? (
                    <span className="flex items-center gap-1 text-[12px] text-[#1c5c47] font-medium">
                      <span className="text-[#1c5c47]">✔</span>
                      {act.badge.label}
                    </span>
                  ) : (
                    <span className="flex items-center gap-1 text-[12px] text-[#6b7f78]">
                      <svg className="w-3 h-3" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                        <circle cx="12" cy="12" r="10" />
                        <polyline points="12 6 12 12 16 14" />
                      </svg>
                      {act.badge.label}
                    </span>
                  )}
                  <span className="text-[12px] text-[#6b7f78]">{act.meta}</span>
                </div>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};
 
export default RecentActivity;