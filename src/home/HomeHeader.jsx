import { useNavigate } from "react-router-dom";

const HomeHeader = () => {
  const navigate = useNavigate();

  const handleNavigation = () => {
    navigate("/about");
  };

  return (
    <div className="flex flex-col md:flex-row items-center justify-between py-20 px-8 max-w-7xl mx-auto animate-fade-in">
      <div className="md:w-1/2 md:pr-12 mb-8 md:mb-0">
        <h1 className="text-5xl md:text-6xl font-extrabold mb-4 gradient-text drop-shadow-lg">
          Hi, I&apos;m Priyanshu
          <br />
          <span className="block text-4xl md:text-5xl font-extrabold gradient-text">Agarwal</span>
        </h1>
        <h2 className="text-2xl md:text-3xl text-primary-400 font-semibold mb-6 animate-slide-up">
          Full Stack Developer
        </h2>
        <button
          onClick={handleNavigation}
          className="btn-primary mt-2 animate-scale-in"
        >
          Get In Touch
        </button>
        <div className="mt-8 w-full max-w-xl animate-fade-in">
          <div className="glass-card p-6 text-base md:text-lg text-white font-normal text-left shadow-glow">
            Hi! I&apos;m Priyanshu Agarwal, a developer who loves turning ideas into interactive digital experiences. I blend creativity with code to build modern, impactful web applications. Passionate about innovation, design, and crafting solutions that make a difference.
          </div>
        </div>
      </div>
      <div className="md:w-1/2 flex justify-center items-center animate-float">
        <div className="relative inline-block">
          {/* Glowing border */}
          <div className="absolute -z-0 w-64 h-64 md:w-80 md:h-80 rounded-full top-2 left-2 bg-gradient-to-tr from-blue-500 via-purple-500 to-pink-500 blur-2xl opacity-60 animate-glow"></div>
          <div className="relative z-10 w-64 h-64 md:w-80 md:h-80 rounded-full overflow-hidden shadow-2xl border-4 border-white/20">
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
