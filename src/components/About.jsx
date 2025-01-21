import Experience from "./Experience";
import Sidebar from "./Sidebar";
import Header from "./Header";
import SocialLinks from "./SocialLinks";
import Projects from "./Project";

const About = () => {
  return (
    <div className="min-h-screen lg:flex">
      <div className="lg:w-1/4">
        <Sidebar />
      </div>
      <div className="lg:w-3/4 p-6 ml-12 hide-scrollbar">
        <Header />
        <h1 className="text-2xl font-bold text-gray-100 mb-6 mt-4">Experience</h1>
        <div>
         <Experience />
        </div>
        <h1 className="text-2xl font-bold text-gray-100 mb-6 mt-4">Projects</h1>
        <div>
         <Projects />
        </div>
        <div className="mt-8">
          <SocialLinks />
        </div>
      </div>
    </div>
  );
};

export default About;
