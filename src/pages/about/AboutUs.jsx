import React, { useEffect, useRef } from "react";
import AboutNav from "./AboutNav";
import AboutHero from "./AboutHero";
import OurStory from "./OurStory";
import OurValues from "./OurValues";
import MeetTheTeam from "./MeetTheTeam";
import AboutCTA from "./AboutCTA";
import AboutFooter from "./AboutFooter";

const AboutPage = () => {
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
    <div
      ref={rootRef}
      className="bg-white text-[#111918] overflow-x-hidden font-sans"
    >
      <AboutNav />

      <div className="fade-up">
        <AboutHero />
      </div>

      <div className="fade-up" style={{ transitionDelay: "0.08s" }}>
        <OurStory />
      </div>

      <div className="fade-up" style={{ transitionDelay: "0.08s" }}>
        <OurValues />
      </div>

      <div className="fade-up" style={{ transitionDelay: "0.08s" }}>
        <MeetTheTeam />
      </div>

      <div className="fade-up" style={{ transitionDelay: "0.08s" }}>
        <AboutCTA />
      </div>

      <AboutFooter />
    </div>
  );
};

export default AboutPage;