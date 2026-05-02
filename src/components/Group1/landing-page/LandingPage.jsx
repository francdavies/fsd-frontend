import React, { useEffect, useRef } from 'react';
import Navbar from "./Navbar";
import Hero from "./Hero";
import Pillars from "./Pillars";
import Testimonial from "./Testimonial";
import CTA from "./CTA";
import Footer from "./Footer";
 
const LandingPage = () => {
  const rootRef = useRef(null);
 
  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.style.opacity = '1';
            entry.target.style.transform = 'translateY(0)';
          }
        });
      },
      { threshold: 0.1 }
    );
 
    const fadeElements = rootRef.current?.querySelectorAll('.fade-up');
    fadeElements?.forEach((el) => {
      el.style.opacity = '0';
      el.style.transform = 'translateY(24px)';
      el.style.transition = 'opacity 0.6s ease, transform 0.6s ease';
      observer.observe(el);
    });
 
    return () => observer.disconnect();
  }, []);
 
  return (
    <div
      ref={rootRef}
      style={{ fontFamily: "'Inter', sans-serif" }}
      className="bg-white text-[#111918] overflow-x-hidden"
    >
      <style>
        {`
          @import url('https://fonts.googleapis.com/css2?family=Plus+Jakarta+Sans:ital,wght@0,600;0,700;0,800;1,700;1,800&family=Inter:wght@400;500;600&display=swap');
          .font-jakarta { font-family: 'Plus Jakarta Sans', sans-serif; }
        `}
      </style>
 
      <Navbar />
      <Hero />
      <Pillars />
      <Testimonial />
      <CTA />
      <Footer />
    </div>
  );
};
 
export default LandingPage;