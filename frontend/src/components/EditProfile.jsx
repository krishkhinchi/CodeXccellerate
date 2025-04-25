import React from "react";

export default function EditProfile() {
  return (
    <div className="min-h-screen flex items-center justify-center bg-[#e7f0fa] relative">
      {/* Back Arrow */}
      <div className="absolute top-4 left-4">
        <button className="text-gray-600 text-2xl">&#8592;</button>
      </div>

      {/* Card */}
      <div className="bg-[#d7f3b8] p-8 rounded-xl shadow-lg w-80 flex flex-col items-center border-2 border-blue-400">
        {/* Heading */}
        <h2 className="text-2xl font-semibold mb-4">Edit Profile</h2>

        {/* Profile Image */}
        <img
          src="https://placekitten.com/100/100"
          alt="Profile"
          className="w-24 h-24 rounded-full mb-4"
        />

        {/* View Profile Button */}
        <button className="bg-indigo-600 text-white px-6 py-2 rounded-full mb-6">
          View profile
        </button>

        {/* Menu Buttons */}
        <div className="space-y-4 w-full">
          <MenuButton icon="⚙️" text="Settings" />
          <MenuButton icon="💜" text="Favourites" />
          <MenuButton icon="📄" text="Terms-&-Conditions" />
          <MenuButton icon="👤" text="Help Centre" />
        </div>

        {/* Logout Button */}
        <button className="bg-orange-500 text-white px-6 py-2 rounded-full mt-6 w-full">
          Log out
        </button>
      </div>
    </div>
  );
}

function MenuButton({ icon, text }) {
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
