import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import NanoGeniusLanding from "./components/NanoGeniusLanding"; // Landing page component
import NanoGeniusLogin from "./components/NanoGeniusLogin";     // Login page component
import ForgotPassword from "./components/ForgotPassword";
import SignUp from "./components/SignUp";
import PhoneVerification from "./components/PhoneVerification";
import ResetPassword from "./components/ResetPassword";
import ResetSuccess from "./components/ResetSuccess";
import ChooseLanguage from "./components/ChooseLanguage";
import ProfileForm from "./components/ProfileForm";
import EditProfile from "./components/EditProfile";
import SettingsPage from "./components/SettingsPage";
import LogoutPage from "./components/LogoutPage";

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<NanoGeniusLanding />} />
        <Route path="/login" element={<NanoGeniusLogin />} />
        <Route path="/ForgotPassword" element={<ForgotPassword />} />
        <Route path="/SignUp" element={<SignUp />} />
        <Route path="/PhoneVerification" element={<PhoneVerification />} />
        <Route path="/ResetPassword" element={<ResetPassword />} />
        <Route path="/ResetSuccess" element={<ResetSuccess />} />
        <Route path="/ChooseLanguage" element={<ChooseLanguage />} />
        <Route path="/ProfileForm" element={<ProfileForm />} />
        <Route path="/EditProfile" element={<EditProfile />} />
        <Route path="/SettingsPage" element={<SettingsPage />} />
        <Route path="/LogoutPage" element={<LogoutPage />} />
      </Routes>
    </Router>
  );
}

export default App;
