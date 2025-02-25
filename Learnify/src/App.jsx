// import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
// import LandingPage from "./components/LandingPage"
// // import BottomNavBar from "./components/BottomNavigation";
// // import About from "./pages/About";
// // import NotFound from "./pages/NotFound";

// const App = () => {
//   return (
//     <Router>
//       <Routes>
//         <Route path="/" element={<LandingPage />} />
//        {/* <BottomNavBar /> */}
//       </Routes>
//     </Router>
//   );
// };

// export default App;


import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import LandingPage from './components/LandingPage';
// import BottomNavBar from './components/BottomNavigation';
import Signup from './components/SignUp';
import Home from './components/Home'
// import About from './pages/About';
// import Profile from './pages/Profile';
// import NotFound from './pages/NotFound';
const App = () => {
  return (
    <Router>
      <div className="pb-16">
   
        <Home />
        <LandingPage />
        <Signup />
        
     
        {/* <BottomNavBar /> */}
      </div>
    </Router>
  );
};

export default App;

