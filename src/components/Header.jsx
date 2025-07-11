
import { ArrowUpRight } from 'lucide-react';

const Header = () => {
  return (
    <div className="w-full glass-card p-8 rounded-2xl shadow-glow animate-fade-in">
      <div className="max-w-4xl mx-auto text-center">
        <h1 className="text-2xl font-bold gradient-text mb-6 drop-shadow-lg">
          Open to work for an entry-level or intern position as a Frontend/SDE role or UI Engineer.
        </h1>

        <div className="flex flex-col sm:flex-row gap-4 items-center justify-center">
          <a 
            href="/Priyanshu agarwal.pdf"
            download="Priyanshu_Agarwal_Resume.pdf"
            className="btn-primary flex items-center gap-2 animate-scale-in hover:scale-105"
          >
            Resume
            <ArrowUpRight className="w-5 h-5" />
          </a>
        </div>
      </div>
    </div>
  );
};

export default Header;
