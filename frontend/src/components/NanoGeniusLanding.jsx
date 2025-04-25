import React from "react";


export default function NanoGeniusLanding() {
  return (
    <div className="font-sans">
      {/* Navbar */}
      <header className="flex items-center justify-between p-4 shadow-md">
        <img src="/logo.png" alt="Nano Genius Logo" className="h-10" />
        <nav className="space-x-6 hidden md:flex">
          <a href="#" className="text-gray-700 hover:text-indigo-600">About Us</a>
          <a href="#" className="text-gray-700 hover:text-indigo-600">Modules</a>
          <a href="#" className="text-gray-700 hover:text-indigo-600">Parent Blog</a>
          <a href="#" className="text-gray-700 hover:text-indigo-600">Library</a>
        </nav>
        <div className="space-x-2">
          <button className="border px-4 py-1 rounded-full text-indigo-700 border-indigo-700 hover:bg-indigo-50">Log in</button>
          <button className="bg-indigo-700 text-white px-4 py-1 rounded-full hover:bg-indigo-800">Sign up</button>
        </div>
      </header>

      {/* Hero Section */}
      <section className="bg-purple-100 text-center py-16 relative">
        <h1 className="text-3xl md:text-4xl font-bold text-indigo-800 mb-4">Joyful learning starts here!</h1>
        <p className="max-w-xl mx-auto text-gray-700 mb-6">Inspire a lifetime of learning and discovery with our free, fun educational program for children ages two to six.</p>
        <button className="bg-indigo-600 text-white px-6 py-2 rounded-full hover:bg-indigo-700">GET STARTED</button>

        {/* Characters */}
        <img src="/bunny.png" alt="Bunny" className="absolute left-10 bottom-0 w-20 hidden md:block" />
        <img src="/girl.png" alt="Girl" className="absolute right-10 bottom-0 w-24 hidden md:block" />
        <img src="/paper-plane.png" alt="Plane" className="absolute top-6 right-1/2 w-8 rotate-12" />
      </section>

      {/* Why Choose Section */}
      <section className="bg-white text-center py-16">
        <h2 className="text-2xl md:text-3xl font-semibold text-gray-800 max-w-xl mx-auto">
          Here’s Why <span className="text-green-700">Parents Choose</span> Nano Genius For Their Kids
        </h2>
        <div className="mt-10 max-w-md mx-auto">
          <img src="/strawberry-book.png" alt="Strawberry Reading" className="mx-auto w-24 mb-4" />
          <h3 className="text-xl font-bold text-gray-900">Thinking Skills</h3>
          <p className="text-gray-700 mt-2">Nourish your child’s never ending curiosity with our wide range of fun, interactive GK books.</p>
        </div>
      </section>
    </div>
  );
}
