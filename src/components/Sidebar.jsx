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
    <div className="relative">
      <button 
        onClick={() => setIsOpen(!isOpen)}
        className="lg:hidden fixed top-4 left-4 z-50 p-2 rounded-lg bg-gray-800 text-white hover:bg-gray-700"
      >
         <Menu size={24} />
      </button>

      <div className={`
        fixed top-0 left-0 h-full 
       text-gray-100
        transition-transform duration-300 ease-in-out
        lg:translate-x-0
        ${isOpen ? 'translate-x-0' : '-translate-x-full'}
        w-64 p-6
      `}>
        <div className="space-y-8">

          <nav className="space-y-2">
            {menuItems.map((item, index) => (
              <a
                key={index}
                href={item.path}
                className="flex items-center gap-4 px-4 py-3 rounded-lg
                         hover:bg-gray-800 transition-colors duration-200
                         text-gray-300 hover:text-white mt-9"
              >
                {item.icon}
                <span>{item.label}</span>
              </a>
            ))}
          </nav>
        </div>
      </div>
      {installPrompt && (
        <button
          onClick={handleInstallClick}
          className="fixed bottom-4 right-4 bg-blue-600 text-white px-4 py-2 rounded-lg shadow-lg"
        >
          Install App
        </button>
      )}
    </div>
  );
};

export default Sidebar;