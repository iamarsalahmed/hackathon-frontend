'use client';
import { useState } from "react";
import axios from "axios";
import Link from "next/link";
import { useRouter } from 'next/navigation'
import Cookies from "js-cookie";

export default function Login() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState("");
  const [success, setSuccess] = useState("");
  const [isSubmitting, setIsSubmitting] = useState(false);
  const router = useRouter();

  const handleLogin = async (e) => {
    e.preventDefault();
    setIsSubmitting(true); // Disable the button
    try {
      const response = await axios.post(
        // "https://hackathon-backend-production-ad7c.up.railway.app/user/login", 
       " https://hackathon-backend-production-ad7c.up.railway.app/user/login ",
        {
        email,
        password,
      });

      setSuccess(response.data.message);
      localStorage.setItem("AuthToken", response.data.token)
      Cookies.set("AuthToken",response.data.token, { secure: true, expires: 0.5  })
      setError(""); // Clear error message if login is successful

      // Redirect to the dashboard page after successful login
      router.push("/user/dashboard");
    } catch (err) {
      setError(err.response?.data?.message || "Login failed");
      setSuccess("");
    } finally {
      setIsSubmitting(false); // Re-enable the button
    }
  };

  return (
    <div className="relative flex items-center justify-center min-h-screen bg-gradient-to-r from-blue-500 via-purple-500 to-pink-500">
      {/* Decorative Shapes */}
      <div className="absolute top-10 left-10 w-40 h-40 bg-purple-300 rounded-full blur-3xl opacity-30"></div>
      <div className="absolute bottom-20 right-20 w-60 h-60 bg-blue-300 rounded-full blur-2xl opacity-20"></div>

      {/* Form Container */}
      <div className="z-10 w-full max-w-md p-8 bg-white rounded-lg shadow-lg">
        <h2 className="text-2xl font-bold text-center text-gray-800">Welcome Back</h2>
        <form className="space-y-4" onSubmit={handleLogin}>
          <div>
            <label className="block text-sm font-medium text-gray-700">Email Address</label>
            <input
              type="email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              className="w-full px-4 py-2 mt-1 border rounded-lg focus:ring-purple-500 focus:border-purple-500"
              placeholder="Enter your email"
              required
            />
          </div>
          <div>
            <label className="block text-sm font-medium text-gray-700">Password</label>
            <input
              type="password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              className="w-full px-4 py-2 mt-1 border rounded-lg focus:ring-purple-500 focus:border-purple-500"
              placeholder="Enter your password"
              required
            />
          </div>
          {error && <p className="text-sm text-red-500">{error}</p>}
          {success && <p className="text-sm text-green-500">{success}</p>}
          <button
            type="submit"
            disabled={isSubmitting} // Disable button during processing
            className={`w-full px-4 py-2 font-medium text-white rounded-lg focus:ring-2 focus:ring-offset-2 focus:ring-purple-500 ${
              isSubmitting
                ? "bg-gray-400 cursor-not-allowed"
                : "bg-purple-600 hover:bg-purple-700"
            }`}
          >
            {isSubmitting ? "Processing..." : "Login"}
          </button>
        </form>
        <p className="mt-4 text-sm text-center text-gray-600">
          Don't have an account?{" "}
          <Link href="/signup" className="text-purple-500 hover:underline">
            Sign up
          </Link>
        </p>
      </div>
    </div>
  );
}
