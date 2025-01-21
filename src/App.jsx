import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Sidebar from './components/Sidebar'; 
import About from './components/About'; 
import './styles/styles.css'

const App = () => {
  return (
    <Router>
      <div className="flex">
        <Sidebar /> 
        
        <main className="flex-1">
          <Routes>
            <Route path="/about" element={<About />} />
          </Routes>
        </main>
      </div>
    </Router>
  );
};

export default App;
