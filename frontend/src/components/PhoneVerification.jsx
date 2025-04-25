import React, { useState, useEffect } from "react";

export default function PhoneVerification() {
  const [code, setCode] = useState(["", "", "", "", "", ""]);
  const [timer, setTimer] = useState(59);

  useEffect(() => {
    if (timer > 0) {
      const countdown = setInterval(() => setTimer((t) => t - 1), 1000);
      return () => clearInterval(countdown);
    }
  }, [timer]);

  const handleChange = (value, index) => {
    const newCode = [...code];
    newCode[index] = value.slice(-1);
    setCode(newCode);
    const nextInput = document.getElementById(`code-${index + 1}`);
    if (value && nextInput) nextInput.focus();
  };

  return (
    <div className="min-h-screen bg-[#f0f7fd] flex items-center justify-center relative font-sans">
      {/* Background Shapes */}
      <div className="absolute top-0 left-0 w-32 h-32 bg-purple-100 rounded-full"></div>
      <div className="absolute bottom-0 left-0 w-64 h-64 bg-green-100 rounded-tr-full"></div>
      <div className="absolute top-0 right-0 w-64 h-64 bg-pink-100 rounded-bl-full"></div>
      <div className="absolute bottom-0 right-0 w-48 h-48 bg-green-200 rounded-tl-full"></div>

      {/* Back Arrow */}
      <button className="absolute top-4 left-4 text-gray-500 text-2xl">←</button>

      {/* Verification Card */}
      <div className="bg-green-50 rounded-xl shadow-md px-10 py-10 z-10 w-full max-w-md text-center">
        <h2 className="text-2xl font-semibold text-gray-700 mb-2">Check your phone</h2>
        <p className="text-gray-600 mb-6">We’ve sent a code to your phone</p>

        <div className="flex justify-center gap-2 mb-2">
          {code.map((digit, idx) => (
            <input
              key={idx}
              id={`code-${idx}`}
              type="text"
              inputMode="numeric"
              maxLength={1}
              value={digit}
              onChange={(e) => handleChange(e.target.value, idx)}
              className="w-10 h-12 text-center border rounded text-lg"
            />
          ))}
        </div>

        <p className="text-sm text-gray-500 mb-6">
          Code expires in: <span className="font-semibold">00:{timer.toString().padStart(2, "0")}</span>
        </p>

        <button className="w-full bg-indigo-600 text-white rounded-full py-2 hover:bg-indigo-700 mb-2">
          Verify
        </button>
        <button
          onClick={() => setTimer(59)}
          className="w-full border border-indigo-600 text-indigo-600 rounded-full py-2 hover:bg-indigo-50"
        >
          Send Again
        </button>
      </div>

      {/* Chick Image */}
      <img src="/chick.png" alt="Chick" className="absolute bottom-10 left-10 w-32" />
    </div>
  );
}
