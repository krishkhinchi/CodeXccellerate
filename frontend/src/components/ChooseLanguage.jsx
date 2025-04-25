// ChooseLanguage.js
import React, { useState } from "react";

export default function ChooseLanguage() {
  const [selectedLanguage, setSelectedLanguage] = useState(null);

  const handleSelect = (language) => {
    setSelectedLanguage(language);
  };

  return (
    <div className="min-h-screen bg-[#f0f7fd] flex items-center justify-center relative font-sans">
      {/* Background Blobs */}
      <div className="absolute top-0 left-0 w-32 h-32 bg-pink-100 rounded-full" />
      <div className="absolute bottom-0 left-0 w-64 h-64 bg-green-100 rounded-full" />
      <div className="absolute top-0 right-0 w-64 h-64 bg-purple-100 rounded-bl-full" />
      <div className="absolute bottom-0 right-0 w-48 h-48 bg-yellow-100 rounded-tl-full" />

      {/* Language Selector Card */}
      <div className="bg-green-50 rounded-xl shadow-md px-10 py-10 z-10 w-full max-w-md text-center">
        <h2 className="text-2xl font-semibold text-green-700 mb-2">Choose Language</h2>
        <p className="text-gray-600 mb-6">You want to learn, and master it.</p>

        {/* Language Options */}
        <div className="flex justify-center gap-6 mb-6">
          <div
            onClick={() => handleSelect("Hindi")}
            className={`cursor-pointer w-20 h-20 rounded-lg flex flex-col items-center justify-center shadow-md transition-transform ${
              selectedLanguage === "Hindi" ? "scale-105 ring-4 ring-indigo-400" : ""
            } bg-[#f26c6c] text-white`}
          >
            <span className="text-xs">Hindi-हिन्दी</span>
            <span className="text-3xl font-bold">अ</span>
          </div>

          <div
            onClick={() => handleSelect("English")}
            className={`cursor-pointer w-20 h-20 rounded-lg flex flex-col items-center justify-center shadow-md transition-transform ${
              selectedLanguage === "English" ? "scale-105 ring-4 ring-indigo-400" : ""
            } bg-[#4c9ba5] text-white`}
          >
            <span className="text-xs">English</span>
            <span className="text-3xl font-bold">A</span>
          </div>
        </div>

        {/* Continue Button */}
        <button
          disabled={!selectedLanguage}
          className={`w-full py-2 rounded-full text-white font-semibold ${
            selectedLanguage ? "bg-indigo-600 hover:bg-indigo-700" : "bg-indigo-300 cursor-not-allowed"
          }`}
        >
          Continue
        </button>
      </div>
    </div>
  );
}
