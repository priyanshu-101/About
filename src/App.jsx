import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Sidebar from './components/Sidebar'; 
import About from './components/About'; 
import Services from './components/Services'; 
import './styles/styles.css'
import Home from './home/Home';

const App = () => {
  return (
    <Router>
      <div className="flex min-h-screen">
        <Sidebar /> 
        
        <main className="flex-1 lg:ml-64 transition-all duration-300">
          <Routes>
            <Route path="/" element={<Home />} /> 
            <Route path="/about" element={<About />} />
            <Route path="/services" element={<Services />} />
          </Routes>
        </main>
      </div>
    </Router>
  );
};

export default App;
