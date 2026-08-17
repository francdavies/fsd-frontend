import React from "react";

const AboutCTA = () => {
  return (
    <section className="px-5 sm:px-10 lg:px-16 py-10 bg-white">
      <div className="bg-[#1c5c47] rounded-[24px] px-8 sm:px-14 py-14 text-center">
        <h2 className="font-jakarta text-[28px] sm:text-[36px] lg:text-[42px] font-extrabold text-white mb-4 leading-tight tracking-[-1px]">
          Ready to rediscover your community?
        </h2>
        <p className="text-[14px] text-white/70 mb-10 max-w-[400px] mx-auto leading-relaxed">
          Join thousands of neighbors who are already building a more resilient, connected world right where they live.
        </p>
        <div className="flex flex-col sm:flex-row items-center justify-center gap-3">
          <button className="bg-white text-[#1c5c47] rounded-full px-7 py-3.5 text-[14px] font-semibold border-none cursor-pointer hover:bg-gray-100 transition-colors w-full sm:w-auto">
            Start Exploration
          </button>
          <button className="bg-transparent text-white border border-white/40 rounded-full px-7 py-3.5 text-[14px] font-medium cursor-pointer hover:border-white transition-colors w-full sm:w-auto">
            View Help Requests
          </button>
        </div>
      </div>
    </section>
  );
};

export default AboutCTA;