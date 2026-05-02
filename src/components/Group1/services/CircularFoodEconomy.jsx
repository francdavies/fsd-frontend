import React from "react";
 
const CircularFoodEconomy = () => {
  return (
    <section className="px-5 sm:px-10 lg:px-16 py-16 bg-[#eef3f1]">
      <div className="flex flex-col lg:flex-row gap-10 lg:gap-16 items-center">
 
        {/* Left — text content */}
        <div className="flex-1 order-2 lg:order-1">
          <h2 className="font-jakarta text-[28px] sm:text-[34px] font-extrabold text-[#111918] leading-tight tracking-[-0.8px] mb-4">
            Circular Food Economy
          </h2>
          <p className="text-[14px] text-[#6b7f78] leading-relaxed mb-8 max-w-[420px]">
            We are redesigning how community members interact with their food sources. Through our "Commons Larder," surplus from local markets and backyard gardens finds its way to those who appreciate it most.
          </p>
 
          {/* Stats */}
          <div className="grid grid-cols-2 gap-3 max-w-[320px]">
            <div className="bg-white rounded-xl px-5 py-4 border border-[#dde8e3]">
              <div className="font-jakarta text-[26px] font-extrabold text-[#111918] leading-none tracking-tight mb-1">
                4.2t
              </div>
              <div className="text-[10.5px] tracking-[0.1em] uppercase text-[#6b7f78] font-semibold">
                Food Diverted
              </div>
            </div>
            <div className="bg-white rounded-xl px-5 py-4 border border-[#dde8e3]">
              <div className="font-jakarta text-[26px] font-extrabold text-[#111918] leading-none tracking-tight mb-1">
                850
              </div>
              <div className="text-[10.5px] tracking-[0.1em] uppercase text-[#6b7f78] font-semibold">
                Shared Meals
              </div>
            </div>
          </div>
        </div>
 
        {/* Right — garden image */}
        <div className="w-full lg:w-[340px] flex-shrink-0 order-1 lg:order-2">
          <div className="rounded-2xl overflow-hidden h-[280px] lg:h-[320px]">
            <img
              src="https://images.unsplash.com/photo-1416879595882-3373a0480b5b?w=700&q=80"
              alt="Community garden"
              className="w-full h-full object-cover"
              onError={(e) => {
                e.target.parentElement.style.background = "linear-gradient(135deg, #4e7040, #2e4a26)";
                e.target.style.display = "none";
              }}
            />
          </div>
        </div>
      </div>
    </section>
  );
};
 
export default CircularFoodEconomy;