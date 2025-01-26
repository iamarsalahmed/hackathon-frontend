import React from "react";
import { useRouter } from "next/router";

export default function RedirectPage() {
  const router = useRouter();

  return (
    <div className="flex flex-col items-center justify-center min-h-screen bg-gray-100">
      <div className="bg-white shadow-lg rounded-2xl p-8 max-w-sm w-full text-center">
        <h1 className="text-2xl font-bold text-gray-800 mb-6">Welcome</h1>
        <p className="text-gray-600 mb-6">Choose an option below to proceed:</p>
        <div className="flex flex-col gap-4">
          <button
            className="w-full bg-blue-500 text-white py-2 px-4 rounded-xl hover:bg-blue-600 transition duration-300"
            onClick={() => router.push("/old/login")}
          >
            Go to Login
          </button>
          <button
            className="w-full bg-green-500 text-white py-2 px-4 rounded-xl hover:bg-green-600 transition duration-300"
            onClick={() => router.push("/old/signup")}
          >
            Go to Signup
          </button>
        </div>
      </div>
    </div>
  );
}
