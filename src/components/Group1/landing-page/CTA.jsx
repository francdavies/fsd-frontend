import React from "react";
 
const CTA = () => {
  return (
    <section className="px-5 sm:px-10 lg:px-20 pb-14 lg:pb-20 bg-white">
      <div className="fade-up bg-[#1c5c47] rounded-[20px] px-6 sm:px-10 lg:px-12 py-12 lg:py-16 text-center">
        <h2 className="font-jakarta text-[32px] sm:text-[38px] lg:text-[46px] font-extrabold text-white mb-4 leading-[1.12] tracking-[-1px]">
          Ready to rebuild<br />the neighborhood?
        </h2>
        <p className="text-[14px] lg:text-[14.5px] text-white/70 mb-8 lg:mb-9 max-w-[400px] mx-auto">
          Join thousands of others who are reclaiming the commons. Your first act of care is just a click away.
        </p>
        <div className="flex flex-col sm:flex-row items-center justify-center gap-3.5">
          <button className="bg-white text-[#1c5c47] rounded-full px-7 py-3.5 text-[14.5px] font-semibold border-none cursor-pointer hover:bg-gray-100 transition-colors w-full sm:w-auto">
            Create Account
          </button>
          <button className="bg-transparent text-white border border-white/40 rounded-full px-7 py-3.5 text-[14.5px] font-medium cursor-pointer hover:border-white transition-colors w-full sm:w-auto">
            Talk to an Ambassador
          </button>
        </div>
      </div>
    </section>
  );
};
 
export default CTA;