import React from "react";

export default function ForgotPassword() {
  return (
    <div className="min-h-screen bg-[#f0f7fd] flex items-center justify-center relative font-sans">
      {/* Background Shapes */}
      <div className="absolute top-0 left-0 w-32 h-32 bg-purple-100 rounded-full"></div>
      <div className="absolute bottom-0 left-0 w-64 h-64 bg-green-100 rounded-full"></div>
      <div className="absolute top-0 right-0 w-64 h-64 bg-pink-100 rounded-bl-full"></div>
      <div className="absolute bottom-0 right-0 w-48 h-48 bg-green-200 rounded-tl-full"></div>

      {/* Back Arrow */}
      <button className="absolute top-4 left-4 text-gray-500 text-2xl">←</button>

      {/* Forgot Password Card */}
      <div className="bg-green-50 rounded-xl shadow-md px-10 py-10 z-10 w-full max-w-md text-center">
        <img src="/ghost.png" alt="Ghost" className="mx-auto w-24 mb-4" />

        <h2 className="text-xl font-semibold text-green-700 mb-2">Forgot password</h2>
        <p className="text-sm text-gray-600 mb-6">
          Please Enter your Email Address to<br />
          Receive a verification code.
        </p>

        <form className="space-y-4">
          <div>
            <label className="block text-left text-gray-700 mb-1">Email</label>
            <div className="flex items-center border rounded-full px-4 py-2 bg-white">
              <span className="text-gray-400 mr-2">📧</span>
              <input
                type="email"
                placeholder="Enter your email here"
                className="outline-none w-full"
              />
            </div>
          </div>

          <div className="text-sm text-orange-500 cursor-pointer hover:underline">
            Try another way.
          </div>

          <button
            type="submit"
            className="w-full bg-indigo-600 text-white rounded-full py-2 hover:bg-indigo-700"
          >
            Send
          </button>
        </form>
      </div>
    </div>
  );
}