import React, { useEffect, useRef } from "react";
import Navbar from "../../components/Navbar";
import ServicesHero from "./ServicesHero";
import ServiceCards from "./ServiceCards";
import DigitalAllyProgram from "./DigitalAllyProgram";
import CircularFoodEconomy from "./CircularFoodEconomy";
import StrengthInNumbers from "./StrengthInNumbers";
import ServicesFooter from "./ServicesFooter";

const Services = () => {
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
      { threshold: 0.08 }
    );

    rootRef.current?.querySelectorAll(".fade-up").forEach((el) => {
      el.style.opacity = "0";
      el.style.transform = "translateY(22px)";
      el.style.transition = "opacity 0.6s ease, transform 0.6s ease";
      observer.observe(el);
    });

    return () => observer.disconnect();
  }, []);

  return (
    <div ref={rootRef} className="bg-[#eef3f1] text-[#111918] overflow-x-hidden font-sans">
      <Navbar activePage="services" />

      <div className="fade-up"><ServicesHero /></div>
      <div className="fade-up" style={{ transitionDelay: "0.08s" }}><ServiceCards /></div>
      <div className="fade-up" style={{ transitionDelay: "0.12s" }}><DigitalAllyProgram /></div>
      <div className="fade-up" style={{ transitionDelay: "0.08s" }}><CircularFoodEconomy /></div>
      <div className="fade-up" style={{ transitionDelay: "0.08s" }}><StrengthInNumbers /></div>

      <ServicesFooter />
    </div>
  );
};

export default Services;