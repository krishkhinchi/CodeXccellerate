import React from "react";

export default function LogoutPage() {
  return (
    <div className="min-h-screen flex items-center justify-center bg-[#e7f0fa] relative">
      {/* Back Arrow */}
      <div className="absolute top-4 left-4">
        <button className="text-gray-600 text-2xl">&#8592;</button>
      </div>

      {/* Card */}
      <div className="bg-[#d7f3b8] p-8 rounded-xl shadow-lg w-80 flex flex-col items-center border-2 border-blue-400">
        {/* Heading */}
        <h2 className="text-2xl font-semibold mb-4">Log Out</h2>

        {/* Crying Sheep Image */}
        <img
          src="https://cdn-icons-png.flaticon.com/512/616/616408.png" // Replace with the image you prefer
          alt="Crying Sheep"
          className="w-32 h-32 mb-6"
        />

        {/* Confirmation Text */}
        <p className="text-center text-gray-700 font-medium mb-6">
          Oh Noo! You're leaving... <br /> Are you sure?
        </p>

        {/* Log Out Button */}
        <button className="bg-indigo-600 text-white px-6 py-2 rounded-full w-full">
          Log out
        </button>
      </div>
    </div>
  );
}
