import { BrowserRouter as Router, Routes, Route, Navigate } from 'react-router-dom';
import { useState, useEffect } from 'react';
import LandingPage from './components/LandingPage';
import BottomNavBar from './components/BottomNavigation';
import Settings from './components/Settings';
import Signup from './components/SignUp';
import Login from './components/Login';
import Home from './components/Home';
import Modules from './components/Modules';
import WelcomeScreen from './components/WelcomeScreen';

const App = () => {
  const [isAuthenticated, setIsAuthenticated] = useState(
    localStorage.getItem("isAuthenticated") === "true"
  );

  useEffect(() => {
    localStorage.setItem("isAuthenticated", isAuthenticated);
  }, [isAuthenticated]);
  const [showWelcomeScreen, setShowWelcomeScreen] = useState(false);

  return (
    <Router>
      <div className="flex flex-col min-h-screen relative w-full max-w-full overflow-hidden">
        {!isAuthenticated ? (
          // Auth routes
          <Routes>
          <Route path="/" element={<LandingPage />} />
          <Route path="/signup" element={
            <Signup onLogin={() => {
              setIsAuthenticated(true);
              setShowWelcomeScreen(true);
            }} />
          } />
          <Route path="/login" element={
            <Login onLogin={() => {
              setIsAuthenticated(true);
              setShowWelcomeScreen(false);
            }} />
          } />
          <Route path="*" element={<Navigate to="/" />} />
        </Routes>
        ) : showWelcomeScreen ? (
          // Show welcome screen after signup
          <div className="flex-1">
            <WelcomeScreen onGetStarted={() => {
              setShowWelcomeScreen(false);
            }} />
            <BottomNavBar />
          </div>
        ) : (
          // Main app routes after authentication
          <div className="flex-1 overflow-auto pb-16 w-full max-w-full">
            <Routes>
              <Route path="/" element={<Navigate to="/home" replace />} />
              <Route path="/home" element={<Home />} />
              <Route path="/modules" element={<Modules />} />
              <Route path="/settings" element={<Settings />} />
              <Route path="*" element={<Navigate to="/home" replace />} />
            </Routes>
            <BottomNavBar />
          </div>
        )}
      </div>
    </Router>
  );
};

export default App;