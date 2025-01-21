import React from "react";
import Skills from "../home/Skills";
import Sidebar from "../components/Sidebar";
import SocialLinks from "../components/SocialLinks";
import HomeHeader from "./HomeHeader";

const Home = () => {
  return (
    <div className="p-4 md:p-10 flex flex-col md:flex-row h-screen overflow-auto">
      <div className="w-full md:w-1/4 mb-6 md:mb-0">
        <Sidebar />
      </div>
      <div className="flex-1 flex flex-col space-y-6 md:space-y-8 overflow-auto">
        <div>
          <HomeHeader />
        </div>
        <div>
          <Skills />
        </div>
        <div>
          <SocialLinks />
        </div>
      </div>
    </div>
  );
};

export default Home;
