import React from "react";
import ProfileNav from "./ProfileNav";
import ProfileHero from "./ProfileHero";
import ProfileTabs from "./ProfileTabs";
import ProfileFooter from "./ProfileFooter";

const UserProfile = () => {
  return (
    <div className="min-h-screen bg-[#eef3f1] text-[#111918] font-sans">
      <ProfileNav />
      <ProfileHero />
      <ProfileTabs />
      <ProfileFooter />
    </div>
  );
};

export default UserProfile;