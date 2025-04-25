// ProfileForm.js
import React, { useState } from "react";

export default function ProfileForm() {
  const [name, setName] = useState("Jenelia");
  const [age, setAge] = useState("4-years");
  const [gender, setGender] = useState("Female");

  return (
    <div className="min-h-screen bg-[#f0f7fd] flex items-center justify-center relative font-sans">
      {/* Decorative Background Blobs */}
      <div className="absolute top-0 left-0 w-48 h-48 bg-orange-100 rounded-full -z-10" />
      <div className="absolute bottom-0 left-0 w-64 h-64 bg-red-100 rounded-full -z-10" />
      <div className="absolute top-0 right-0 w-64 h-64 bg-purple-100 rounded-full -z-10" />

      {/* Profile Form Card */}
      <div className="bg-green-50 rounded-xl shadow-md px-10 py-8 w-full max-w-md z-10">
        <h2 className="text-center text-2xl font-semibold text-green-700 mb-6">Profile</h2>

        {/* Avatar */}
        <div className="flex justify-center mb-6">
          <img
            src="https://cdn-icons-png.flaticon.com/512/4476/4476582.png"
            alt="avatar"
            className="w-20 h-20 rounded-full object-cover"
          />
        </div>

        {/* Name Field */}
        <div className="mb-4">
          <label className="block text-gray-700 text-sm mb-1">Your Name</label>
          <input
            type="text"
            value={name}
            onChange={(e) => setName(e.target.value)}
            className="w-full border border-gray-300 rounded-lg px-3 py-2 focus:outline-none focus:ring-2 focus:ring-indigo-400"
          />
        </div>

        {/* Age Field */}
        <div className="mb-4">
          <label className="block text-gray-700 text-sm mb-1">Age</label>
          <input
            type="text"
            value={age}
            onChange={(e) => setAge(e.target.value)}
            className="w-full border border-gray-300 rounded-lg px-3 py-2 focus:outline-none focus:ring-2 focus:ring-indigo-400"
          />
        </div>

        {/* Gender Selector */}
        <div className="mb-6">
          <label className="block text-gray-700 text-sm mb-2">Gender</label>
          <div className="flex gap-4">
            {["Male", "Female"].map((option) => (
              <label
                key={option}
                className={`flex items-center px-4 py-2 border rounded-lg cursor-pointer ${
                  gender === option ? "bg-indigo-100 border-indigo-500" : "bg-white"
                }`}
              >
                <input
                  type="radio"
                  value={option}
                  checked={gender === option}
                  onChange={() => setGender(option)}
                  className="mr-2"
                />
                {option}
              </label>
            ))}
          </div>
        </div>

        {/* Save Button */}
        <button className="w-full bg-indigo-600 hover:bg-indigo-700 text-white py-2 rounded-full font-semibold">
          Save
        </button>
      </div>
    </div>
  );
}
