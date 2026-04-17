import "./App.css";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Welcome from "./components/Welcome";
import LandingPage from "./components/Group 1/LandingPage";
function App() {
  return (
    <>
      <Router>
        <Routes>
          <Route path="/" element={<Welcome />} />
          <Route path="/LandingPage" element={<LandingPage />} />
        </Routes>
      </Router>
    </>
  );
}

export default App;
