import React from "react";
import { useNavigate } from "react-router-dom";

const HomeHeader = () => {
  const navigate = useNavigate();

  const handleNavigation = () => {
    navigate("/about");
  };

  return (
    <div className="flex flex-col md:flex-row items-center justify-between py-16 px-8 max-w-7xl mx-auto">
      <div className="md:w-1/2 md:pr-12 mb-8 md:mb-0">
        <h1 className="text-4xl md:text-5xl font-bold text-white mb-4">
          Hi, I'm <span className="text-yellow-300">Priyanshu</span>
          <br />
          <span className="text-yellow-300">Agarwal</span>
        </h1>
        <h2 className="text-2xl md:text-3xl text-white mb-6">
          Full Stack Developer
        </h2>
        <button
          onClick={handleNavigation}
          className="bg-yellow-400 text-white px-8 py-3 rounded-lg hover:bg-yellow-600 transition-colors"
        >
          Get In Touch
        </button>
      </div>
      <div className="md:w-1/2 flex justify-center items-center">
        <div className="relative inline-block">
          <div className="absolute -z-0 w-64 h-64 md:w-80 md:h-80 rounded-full top-2 left-2"></div>
          <div className="relative z-10 w-64 h-64 md:w-80 md:h-80 rounded-full overflow-hidden">
            <div className="w-full h-full">
              <img
                src="/hI.jpg"
                alt="Profile"
                className="w-full h-full object-cover"
                style={{
                  objectFit: "cover",
                  objectPosition: "center",
                }}
              />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default HomeHeader;
