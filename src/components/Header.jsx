
import {  ArrowUpRight } from 'lucide-react';

const Header = () => {
  const resume = import.meta.env.VITE_RESUME;
  return (
    <div className="w-full bg-orange-400 p-8 text-black rounded-lg">
      <div className="max-w-4xl mx-auto text-center">
        <h1 className="text-xl font-medium mb-6">
        Open to work for an entry-level or intern position as a Frontend/SDE role or UI Engineer.
        </h1>

        <div className="flex flex-col sm:flex-row gap-4 items-center justify-center">
          <a 
            href={resume}
            download="Resume.pdf"
            className="flex items-center gap-2 hover:underline"
          >
            Resume
            <ArrowUpRight className="w-4 h-4" />
          </a>
        </div>
      </div>
    </div>
  );
};

export default Header;
