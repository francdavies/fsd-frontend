import React, { useState } from "react";

const Toggle = ({ enabled, onToggle }) => (
  <button
    onClick={onToggle}
    className={`relative w-11 h-6 rounded-full border-none cursor-pointer transition-colors flex-shrink-0 ${
      enabled ? "bg-[#1c5c47]" : "bg-[#dde8e3]"
    }`}
  >
    <span
      className={`absolute top-0.5 w-5 h-5 bg-white rounded-full shadow-sm transition-transform duration-200 ${
        enabled ? "translate-x-5" : "translate-x-0.5"
      }`}
    />
  </button>
);

const SettingsNotifications = () => {
  const [notifications, setNotifications] = useState({
    email: true,
    push: true,
    reminders: false,
  });

  const toggle = (key) =>
    setNotifications((prev) => ({ ...prev, [key]: !prev[key] }));

  const items = [
    {
      key: "email",
      label: "Email Notifications",
      desc: "Weekly digest and urgent community alerts.",
    },
    {
      key: "push",
      label: "Push Notifications",
      desc: "Real-time alerts for local service updates.",
    },
    {
      key: "reminders",
      label: "Service Reminders",
      desc: "Reminders for scheduled services and bookings.",
    },
  ];

  return (
    <div className="flex flex-col lg:flex-row gap-8 py-10 border-b border-[#dde8e3]">

      {/* Left label */}
      <div className="lg:w-[220px] flex-shrink-0">
        <h2 className="font-jakarta text-[16px] font-bold text-[#111918] mb-2">Notifications</h2>
        <p className="text-[13px] text-[#6b7f78] leading-relaxed">
          Choose how you want to be notified about updates and new community requests.
        </p>
      </div>

      {/* Right panel */}
      <div className="flex-1 bg-white rounded-2xl border border-[#dde8e3] px-6 sm:px-8 divide-y divide-[#dde8e3]">
        {items.map((item) => (
          <div key={item.key} className="flex items-center justify-between py-5">
            <div>
              <p className="font-jakarta text-[14.5px] font-bold text-[#111918] mb-0.5">{item.label}</p>
              <p className="text-[13px] text-[#6b7f78]">{item.desc}</p>
            </div>
            <Toggle
              enabled={notifications[item.key]}
              onToggle={() => toggle(item.key)}
            />
          </div>
        ))}
      </div>
    </div>
  );
};

export default SettingsNotifications;
