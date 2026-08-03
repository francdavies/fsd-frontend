import "./App.css";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import LandingPage from "./pages/landing-page/LandingPage";
import AboutUs from "./pages/about/AboutUs";
import Services from "./pages/services/Services";
import ContactPage from "./pages/contact/ContactPage";
import SignInPage from "./pages/signin/SignInPage";
import Dashboard from "./pages/dashboard/Dashboard";
function App() {
  return (
    <>
      <Router>
        <Routes>
          <Route path="/" element={<LandingPage />} />
          <Route path="/AboutUs" element={<AboutUs />} />
          <Route path="/Services" element={<Services />} />
          <Route path="/ContactPage" element={<ContactPage />} />
          <Route path="/SignInPage" element={<SignInPage />} />
          <Route path="/Dashboard" element={<Dashboard />} />
        </Routes>
      </Router>
    </>
  );
}

export default App;
