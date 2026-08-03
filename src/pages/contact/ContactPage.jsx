import React, { useEffect, useRef } from "react";
import ContactNav from "./ContactNav";
import ContactMain from "./ContactMain";
import ContactFooter from "./ContactFooter";

const ContactPage = () => {
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
      <ContactNav />
      <div className="fade-up">
        <ContactMain />
      </div>
      <ContactFooter />
    </div>
  );
};

export default ContactPage;