import React from "react";

const OurStory = () => {
  return (
    <section className="px-5 sm:px-10 lg:px-16 py-12 bg-white">
      <div className="flex flex-col lg:flex-row gap-10 lg:gap-16 items-start">

        {/* Left — garden image */}
        <div className="w-full lg:w-[340px] flex-shrink-0">
          <div className="rounded-2xl overflow-hidden h-[320px] lg:h-[420px]">
            <img
              src="https://images.unsplash.com/photo-1416879595882-3373a0480b5b?w=700&q=80"
              alt="Community garden"
              className="w-full h-full object-cover"
            />
          </div>
        </div>

        {/* Right — story content */}
        <div className="flex-1 lg:pt-16">
          <h2 className="font-jakarta text-[26px] sm:text-[30px] font-bold text-[#111918] tracking-[-0.5px] mb-5">
            Our Story
          </h2>
          <p className="text-[14px] text-[#6b7f78] leading-relaxed mb-4">
            Founded in the quiet corners of local libraries and neighborhood parks, The Commons began with a simple question: How can we make asking for help feel as natural as offering it?
          </p>
          <p className="text-[14px] text-[#6b7f78] leading-relaxed mb-7">
            We saw a world where digital connections were getting louder but community ties were growing thinner. We set out to build a platform that didn't demand your attention, but rather rewarded your presence.
          </p>
          <button className="text-[13.5px] font-semibold text-[#1c5c47] bg-transparent border-none cursor-pointer hover:underline p-0 flex items-center gap-1">
            Learn about our methodology →
          </button>
        </div>
      </div>
    </section>
  );
};

export default OurStory;