import React from "react";

export default function NanoGeniusLogin() {
  return (
    <div className="min-h-screen bg-[#f0f7fd] flex items-center justify-center relative font-sans">
      {/* Background Shapes */}
      <div className="absolute top-0 left-0 w-32 h-32 bg-pink-100 rounded-full"></div>
      <div className="absolute bottom-0 left-0 w-64 h-64 bg-gray-200 rounded-full"></div>
      <div className="absolute top-0 right-0 w-64 h-64 bg-green-100 rounded-bl-full"></div>
      <div className="absolute bottom-0 right-0 w-48 h-48 bg-yellow-100 rounded-tl-full"></div>

      {/* Back Arrow */}
      <button className="absolute top-4 left-4 text-gray-500 text-2xl">←</button>

      {/* Login Card */}
      <div className="bg-green-50 rounded-xl shadow-md px-10 py-10 z-10 w-full max-w-md">
        <h2 className="text-2xl font-semibold text-center text-green-700 mb-6">Welcome Back!</h2>

        <form className="space-y-4">
          <div>
            <label className="block text-gray-700">Email</label>
            <div className="flex items-center border rounded-full px-4 py-2 bg-white">
              <span className="text-gray-400 mr-2">📧</span>
              <input
                type="email"
                placeholder="Enter your email here"
                className="outline-none w-full"
              />
            </div>
          </div>

          <div>
            <label className="block text-gray-700">Password</label>
            <div className="flex items-center border rounded-full px-4 py-2 bg-white">
              <span className="text-gray-400 mr-2">🔒</span>
              <input
                type="password"
                placeholder="Enter your password here"
                className="outline-none w-full"
              />
            </div>
            <div className="text-right mt-1">
              <a href="#" className="text-sm text-gray-500 hover:underline">Forgot your password?</a>
            </div>
          </div>

          <button className="w-full bg-indigo-600 text-white rounded-full py-2 hover:bg-indigo-700">
            Log in
          </button>
        </form>

        <p className="text-center text-sm text-gray-700 mt-4">
          Don’t have an account? <a href="#" className="text-indigo-600 hover:underline">Sign up</a>
        </p>
      </div>

      {/* Dino Image */}
      <img src="/dino.png" alt="Dino" className="absolute bottom-10 right-10 w-32" />
    </div>
  );
}
