// ResetSuccess.js
import React from "react";
import { useNavigate } from "react-router-dom";

export default function ResetSuccess() {
  const navigate = useNavigate();

  return (
    <div className="min-h-screen bg-[#f0f7fd] flex items-center justify-center relative font-sans">
      {/* Background Shapes */}
      <div className="absolute top-0 left-0 w-32 h-32 bg-gray-200 rounded-full" />
      <div className="absolute bottom-0 left-0 w-64 h-64 bg-green-100 rounded-full" />
      <div className="absolute top-0 right-0 w-64 h-64 bg-purple-100 rounded-bl-full" />
      <div className="absolute bottom-0 right-0 w-48 h-48 bg-pink-100 rounded-tl-full" />

      {/* Message Card */}
      <div className="bg-green-50 rounded-xl shadow-md px-10 py-10 z-10 w-full max-w-md text-center">
        <h2 className="text-2xl font-semibold text-green-700 mb-4">Whoo Whoo!</h2>
        <p className="text-gray-700 mb-6">
          Your password has been reset successfully! <br />
          Now login with your new password.
        </p>
        <button
          onClick={() => navigate("/login")}
          className="bg-indigo-600 text-white rounded-full py-2 px-6 hover:bg-indigo-700"
        >
          Log in
        </button>
      </div>

      {/* Cute Girl Image */}
      <img src="/happy-girl.png" alt="Happy girl" className="absolute bottom-10 left-10 w-32" />
    </div>
  );
}
