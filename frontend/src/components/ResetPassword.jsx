// ResetPassword.js
import React, { useState } from "react";

export default function ResetPassword() {
  const [password, setPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");

  const isValid = password.length >= 8;

  return (
    <div className="min-h-screen bg-[#f0f7fd] flex items-center justify-center relative font-sans">
      {/* Background Shapes */}
      <div className="absolute top-0 left-0 w-32 h-32 bg-gray-200 rounded-full" />
      <div className="absolute bottom-0 left-0 w-64 h-64 bg-pink-200 rounded-full" />
      <div className="absolute top-0 right-0 w-64 h-64 bg-green-100 rounded-bl-full" />
      <div className="absolute bottom-0 right-0 w-48 h-48 bg-green-200 rounded-tl-full" />

      {/* Back Arrow */}
      <button className="absolute top-4 left-4 text-gray-500 text-2xl">←</button>

      {/* Reset Password Card */}
      <div className="bg-green-50 rounded-xl shadow-md px-10 py-10 z-10 w-full max-w-md">
        <h2 className="text-2xl font-semibold text-center text-green-700 mb-2">Reset Password</h2>
        <p className="text-center text-sm text-gray-600 mb-6">
          Please enter your new password
        </p>

        <form className="space-y-4">
          <div>
            <label className="block text-gray-700">New Password</label>
            <div className="flex items-center border rounded-full px-4 py-2 bg-white">
              <span className="text-gray-400 mr-2">🔒</span>
              <input
                type="password"
                placeholder="Enter new password"
                className="outline-none w-full"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
              />
            </div>
          </div>

          <div>
            <label className="block text-gray-700">Confirm Password</label>
            <div className="flex items-center border rounded-full px-4 py-2 bg-white">
              <span className="text-gray-400 mr-2">🔒</span>
              <input
                type="password"
                placeholder="Confirm new password"
                className="outline-none w-full"
                value={confirmPassword}
                onChange={(e) => setConfirmPassword(e.target.value)}
              />
            </div>
            {isValid ? (
              <p className="text-green-600 text-sm mt-2 flex items-center">
                ✅ Your password must contain: <br />
                <span className="ml-6">At least 8 characters</span>
              </p>
            ) : (
              <p className="text-red-500 text-sm mt-2 ml-1">
                ❌ Password must be at least 8 characters
              </p>
            )}
          </div>

          <button
            className={`w-full rounded-full py-2 text-white ${
              isValid ? "bg-indigo-600 hover:bg-indigo-700" : "bg-indigo-300 cursor-not-allowed"
            }`}
            disabled={!isValid}
          >
            Done
          </button>
        </form>
      </div>

      {/* Caterpillar Image */}
      <img src="/caterpillar.png" alt="Caterpillar" className="absolute bottom-8 left-10 w-32" />
    </div>
  );
}
