import "./App.css";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import ProtectedRoute from "./components/ProtectedRoute";

import LandingPage from "./pages/landing-page/LandingPage";
import AboutUs from "./pages/about/AboutUs";
import Services from "./pages/services/Services";
import ContactPage from "./pages/contact/ContactPage";
import SignInPage from "./pages/signin/SignInPage";
import SignUp from "./pages/signup/SignUp";
import CTA from "./pages/landing-page/CTA";
import Dashboard from "./pages/dashboard/Dashboard";
import CommunityFeed from "./pages/community-feed/CommunityFeed";
import CreatePost from "./pages/create-post/CreatePost";
import HelpSupport from "./pages/help/HelpSupport";
import UserProfile from "./pages/profile/UserProfile";
import AccountSettings from "./pages/settings/AccountSettings";

function App() {
  return (
    <Router>
      <Routes>
        {/* Public routes */}
        <Route path="/" element={<LandingPage />} />
        <Route path="/AboutUs" element={<AboutUs />} />
        <Route path="/Services" element={<Services />} />
        <Route path="/ContactPage" element={<ContactPage />} />
        <Route path="/SignInPage" element={<SignInPage />} />
        <Route path="/SignUp" element={<SignUp />} />
        <Route path="/CTA" element={<CTA />} />
        <Route path="/HelpSupport" element={<HelpSupport />} />

         {/* Protected routes — require login */}
        <Route path="/Dashboard" element={
          <ProtectedRoute><Dashboard /></ProtectedRoute>
        } />
        <Route path="/CommunityFeed" element={
          <ProtectedRoute><CommunityFeed /></ProtectedRoute>
        } />
        <Route path="/CreatePost" element={
          <ProtectedRoute><CreatePost /></ProtectedRoute>
        } />
        <Route path="/UserProfile" element={
          <ProtectedRoute><UserProfile /></ProtectedRoute>
        } />
        <Route path="/AccountSettings" element={
          <ProtectedRoute><AccountSettings /></ProtectedRoute>
        } />
      </Routes>
    </Router>
  );
}

export default App;