import  { useState, useEffect } from 'react';
import { Home, Info, Menu } from 'lucide-react';

const Sidebar = () => {
  const [isOpen, setIsOpen] = useState(false);

  const menuItems = [
    { icon: <Home size={20} />, label: 'Home', path: '/' },
    { icon: <Info size={20} />, label: 'About', path: '/about' }
  ];

  const [installPrompt, setInstallPrompt] = useState(null);

  useEffect(() => {
    const handleInstallPrompt = (event) => {
      event.preventDefault();
      setInstallPrompt(event);
      console.log('Install prompt was triggered');
    };

    window.addEventListener('beforeinstallprompt', handleInstallPrompt);

    if (window.matchMedia('(display-mode: standalone)').matches) {
      console.log('App is already installed');
    } else {
      console.log('App can be installed');
    }

    return () => window.removeEventListener('beforeinstallprompt', handleInstallPrompt);
  }, []);

  const handleInstallClick = async () => {
    if (!installPrompt) {
      console.log('No install prompt available');
      return;
    }

    const result = await installPrompt.prompt();
    console.log('Install prompt result:', result);
    setInstallPrompt(null);
  };

  return (
    <div className="relative z-50">
      {/* Mobile menu button */}
      <button 
        onClick={() => setIsOpen(!isOpen)}
        className="lg:hidden fixed top-4 left-4 z-50 p-2 rounded-lg bg-gradient-to-r from-blue-600 to-purple-600 text-white shadow-glow hover:scale-110 transition-transform duration-200"
        aria-label="Open sidebar menu"
      >
         <Menu size={24} />
      </button>

      {/* Sidebar */}
      <div className={`
        fixed top-0 left-0 h-full w-64 p-6
        transition-transform duration-300 ease-in-out
        bg-white/10 backdrop-blur-lg border-r-2 border-blue-500/30 shadow-2xl
        rounded-tr-3xl rounded-br-3xl
        flex flex-col items-center
        ${isOpen ? 'translate-x-0' : '-translate-x-full'}
        lg:translate-x-0
        z-40
      `}>
        {/* Brand/Logo */}
        <div className="w-full flex items-center justify-center mb-10 mt-2">
          <span className="text-2xl font-extrabold gradient-text tracking-tight select-none">Priyanshu</span>
        </div>
        <nav className="space-y-2 w-full">
          {menuItems.map((item, index) => (
            <a
              key={index}
              href={item.path}
              className="flex items-center gap-4 px-4 py-3 rounded-xl font-semibold text-lg
                         hover:bg-gradient-to-r hover:from-blue-600 hover:to-purple-600 hover:text-white
                         transition-all duration-200 text-gray-200/90 hover:shadow-glow"
            >
              {item.icon}
              <span>{item.label}</span>
            </a>
          ))}
        </nav>
        {/* Install App Button */}
        {installPrompt && (
          <button
            onClick={handleInstallClick}
            className="mt-10 w-full btn-primary"
          >
            Install App
          </button>
        )}
      </div>
    </div>
  );
};

export default Sidebar;