import React from "react";

export default function SettingsPage() {
  return (
    <div className="min-h-screen flex items-center justify-center bg-[#e7f0fa] relative">
      {/* Back Arrow */}
      <div className="absolute top-4 left-4">
        <button className="text-gray-600 text-2xl">&#8592;</button>
      </div>

      {/* Card */}
      <div className="bg-[#d7f3b8] p-8 rounded-xl shadow-lg w-80 flex flex-col items-center border-2 border-blue-400">
        {/* Heading */}
        <h2 className="text-2xl font-semibold mb-6">Settings</h2>

        {/* Settings Buttons */}
        <div className="space-y-4 w-full">
          <SettingsButton icon="👤" text="Account" />
          <SettingsButton icon="🔔" text="Notification" />
          <SettingsButton icon="🔒" text="Privacy" />
          <SettingsButton icon="🌐" text="Language" />
          <SettingsButton icon="❓" text="Help" />
          <SettingsButton icon="🚪" text="Log out" />
        </div>
      </div>
    </div>
  );
}

function SettingsButton({ icon, text }) {
  return (
    <button className="flex items-center justify-between w-full bg-purple-200 px-4 py-2 rounded-md text-gray-700">
      <div className="flex items-center space-x-2">
        <span>{icon}</span>
        <span>{text}</span>
      </div>
      <span className="text-lg">{'>'}</span>
    </button>
  );
}
