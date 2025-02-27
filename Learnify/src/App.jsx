import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'; // ✅ Import Routes & Route
import LandingPage from './components/LandingPage';
import BottomNavBar from './components/BottomNavigation';
import Settings from './components/Settings';
import Signup from './components/SignUp';
import Home from './components/Home';
import Modules from './components/Modules';

const App = () => {
  return (
    <Router> 
      <BottomNavBar />
      <Routes> 
        <Route path="/home" element={<Home />} />
        <Route path="/modules" element={<Modules />} />
        <Route path="/settings" element={<Settings />} />
      </Routes>
    </Router>
  );
};

export default App;


