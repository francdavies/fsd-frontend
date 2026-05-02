import "./App.css";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Welcome from "./components/Welcome";
import LandingPage from "./components/Group1/landing-page/LandingPage";
import Dashboard from "./components/Group1/dashboard/Dashboard";
import Services from "./components/Group1/services/Services";
function App() {
  return (
    <>
      <Router>
        <Routes>
          <Route path="/" element={<Welcome />} />
          <Route path="/LandingPage" element={<LandingPage />} />
          <Route path="/Dashboard" element={<Dashboard />} />
          <Route path="/Services" element={<Services />} />
        </Routes>
      </Router>
    </>
  );
}

export default App;
