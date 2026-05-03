import React, { useEffect, useRef } from "react";
import Sidebar from "./Sidebar";
import DashboardHeader from "./DashboardHeader";
import CommunitySnapshot from "./CommunitySnapshot";
import RecentActivity from "./RecentActivity";
import SuggestedForYou from "./SuggestedForYou";
 
const Dashboard = () => {
  const rootRef = useRef(null);
 
  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.style.opacity = "1";
            entry.target.style.transform = "translateY(0)";
          }
        });
      },
      { threshold: 0.1 }
    );
 
    const fadeElements = rootRef.current?.querySelectorAll(".fade-up");
    fadeElements?.forEach((el) => {
      el.style.opacity = "0";
      el.style.transform = "translateY(20px)";
      el.style.transition = "opacity 0.5s ease, transform 0.5s ease";
      observer.observe(el);
    });
 
    return () => observer.disconnect();
  }, []);
 
  return (
    <div
      ref={rootRef}
      style={{ fontFamily: "'Inter', sans-serif" }}
      className="flex flex-col md:flex-row min-h-screen bg-[#eef3f1] text-[#111918] overflow-x-hidden"
    >
      <style>{`
        @import url('https://fonts.googleapis.com/css2?family=Plus+Jakarta+Sans:ital,wght@0,600;0,700;0,800;1,700;1,800&family=Inter:wght@400;500;600&display=swap');
        .font-jakarta { font-family: 'Plus Jakarta Sans', sans-serif; }
      `}</style>
 
      {/* Sidebar handles both mobile top bar + desktop sidebar */}
      <Sidebar />
 
      {/* Main Content */}
      <main className="flex-1 min-w-0 px-5 sm:px-8 lg:px-10 py-8 lg:py-10">
        <div className="fade-up">
          <DashboardHeader />
        </div>
 
        <div className="fade-up flex flex-col lg:flex-row gap-5" style={{ transitionDelay: "0.08s" }}>
          <div className="w-full lg:w-[280px] flex-shrink-0">
            <CommunitySnapshot />
          </div>
          <RecentActivity />
        </div>
 
        <div className="fade-up" style={{ transitionDelay: "0.16s" }}>
          <SuggestedForYou />
        </div>
      </main>
    </div>
  );
};
 
export default Dashboard;