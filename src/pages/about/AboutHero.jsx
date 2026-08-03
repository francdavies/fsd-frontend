import React from "react";

const AboutHero = () => {
  return (
    <section className="px-5 sm:px-10 lg:px-16 pt-14 pb-10 bg-white">
      <div className="flex flex-col lg:flex-row lg:items-start lg:justify-between gap-8">

        {/* Left — heading */}
        <div className="lg:max-w-[420px]">
          <p className="text-[10.5px] font-semibold tracking-[0.14em] uppercase text-[#2d7a63] mb-4">
            Our Narrative
          </p>
          <h1 className="font-jakarta text-[40px] sm:text-[52px] lg:text-[58px] font-extrabold text-[#111918] leading-[1.05] tracking-[-1.5px]">
            The quiet art of{" "}
            <span className="text-[#2d7a63] italic">neighborly care.</span>
          </h1>
        </div>

        {/* Right — description */}
        <div className="lg:max-w-[280px] lg:pt-16">
          <p className="text-[14px] text-[#6b7f78] leading-relaxed">
            We believe that a community is more than a geographic coordinate; it is a shared sanctuary built on the dependability of those who live within it.
          </p>
        </div>
      </div>
    </section>
  );
};

export default AboutHero;