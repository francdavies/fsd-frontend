import React from "react";
import Navbar from "../../components/Navbar";
import HelpHero from "./HelpHero";
import HelpTopics from "./HelpTopics";
import HelpFAQ from "./HelpFAQ";
import HelpCTA from "./HelpCTA";
import HelpFooter from "./HelpFooter";

const HelpSupport = () => {
  return (
    <div className="min-h-screen bg-[#eef3f1] text-[#111918] font-sans">
      <Navbar activePage="help" />
      <HelpHero />
      <HelpTopics />
      <HelpFAQ />
      <HelpCTA />
      <HelpFooter />
    </div>
  );
};

export default HelpSupport;