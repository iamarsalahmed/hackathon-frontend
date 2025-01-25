// 'use client';
// import { useState } from "react";
// import axios from "axios";
// import Link from "next/link";
// import { useRouter } from 'next/navigation'

// export default function Signup() {
//   const [name, setName] = useState("");
//   const [email, setEmail] = useState("");
//   const [password, setPassword] = useState("");
//   const [error, setError] = useState("");
//   const [success, setSuccess] = useState("");
//   const [isSubmitting, setIsSubmitting] = useState(false); // New state for button control
//   const router = useRouter()
//   const handleSignup = async (e) => {
//     e.preventDefault();
//     setIsSubmitting(true); // Disable the button
//     try {
//       const response = await axios.post("https://hackathon-backend-production-ad7c.up.railway.app/user/signup", {
//         name,
//         email,
//         password,
//       });
//       window.location.href("/login")
//       setSuccess(response.data.message);
//       setError("");
//     } catch (err) {
//       setError(err.response?.data?.message || "Signup failed");
//       setSuccess("");
//     } finally {
//       setIsSubmitting(false); // Re-enable the button
//     }
//   };

//   return (
//     <div className="relative flex items-center justify-center min-h-screen bg-gradient-to-r from-blue-500 via-purple-500 to-pink-500">
//       {/* Decorative Shapes */}
//       <div className="absolute top-10 left-10 w-40 h-40 bg-purple-300 rounded-full blur-3xl opacity-30"></div>
//       <div className="absolute bottom-20 right-20 w-60 h-60 bg-blue-300 rounded-full blur-2xl opacity-20"></div>

//       {/* Form Container */}
//       <div className="z-10 w-full max-w-md p-8 bg-white rounded-lg shadow-lg">
//         <h2 className="text-2xl font-bold text-center text-gray-800">Sign Up</h2>
//         <form className="space-y-4" onSubmit={handleSignup}>
//           <div>
//             <label className="block text-sm font-medium text-gray-700">Name</label>
//             <input
//               type="text"
//               value={name}
//               onChange={(e) => setName(e.target.value)}
//               className="w-full px-4 py-2 mt-1 border rounded-lg focus:ring-purple-500 focus:border-purple-500"
//               placeholder="Enter your name"
//               required
//             />
//           </div>
//           <div>
//             <label className="block text-sm font-medium text-gray-700">Email Address</label>
//             <input
//               type="email"
//               value={email}
//               onChange={(e) => setEmail(e.target.value)}
//               className="w-full px-4 py-2 mt-1 border rounded-lg focus:ring-purple-500 focus:border-purple-500"
//               placeholder="Enter your email"
//               required
//             />
//           </div>
//           <div>
//             <label className="block text-sm font-medium text-gray-700">Password</label>
//             <input
//               type="password"
//               value={password}
//               onChange={(e) => setPassword(e.target.value)}
//               className="w-full px-4 py-2 mt-1 border rounded-lg focus:ring-purple-500 focus:border-purple-500"
//               placeholder="Enter your password"
//               required
//             />
//           </div>
//           {error && <p className="text-sm text-red-500">{error}</p>}
//           {success && <p className="text-sm text-green-500">{success}</p>}
//           <button
//             type="submit"
//             disabled={isSubmitting} // Disable button during processing
//             className={`w-full px-4 py-2 font-medium text-white rounded-lg focus:ring-2 focus:ring-offset-2 focus:ring-purple-500 ${
//               isSubmitting
//                 ? "bg-gray-400 cursor-not-allowed"
//                 : "bg-purple-600 hover:bg-purple-700"
//             }`}
//           >
//             {isSubmitting ? "Processing..." : "Sign Up"}
//           </button>
//         </form>
//         <p className="mt-4 text-sm text-center text-gray-600">
//           Already have an account?{" "}
//           <Link href="/login" className="text-purple-500 hover:underline">
//             Login
//           </Link>
//         </p>
//       </div>
//     </div>
//   );
// }
'use client'
import { useState } from "react";
import axios from "axios";
import { useRouter } from "next/navigation";

const SignupPage = () => {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [role, setRole] = useState("Admin");
  const [error, setError] = useState("");
  const router = useRouter();

  const handleSignup = async (e) => {
    e.preventDefault();
    try {
      const response = await axios.post("http://localhost:5000/api/users/register", {
        name,
        email,
        password,
        role,
      });

      // Redirect user after successful registration
      if (response.status === 201) {
        router.push("/user/login");
      }
    } catch (err) {
      setError("Error registering user. Please try again.");
    }
  };

  return (
    <div className="max-w-md mx-auto p-6 bg-white shadow-md rounded-lg">
      <h2 className="text-2xl font-semibold text-center mb-6">Sign Up</h2>
      {error && <p className="text-red-500 text-center mb-4">{error}</p>}
      <form onSubmit={handleSignup}>
        <div className="mb-4">
          <label htmlFor="name" className="block text-sm font-medium text-gray-600">
            Name
          </label>
          <input
            type="text"
            id="name"
            name="name"
            value={name}
            onChange={(e) => setName(e.target.value)}
            required
            className="w-full px-4 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
          />
        </div>

        <div className="mb-4">
          <label htmlFor="email" className="block text-sm font-medium text-gray-600">
            Email
          </label>
          <input
            type="email"
            id="email"
            name="email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            required
            className="w-full px-4 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
          />
        </div>

        <div className="mb-4">
          <label htmlFor="password" className="block text-sm font-medium text-gray-600">
            Password
          </label>
          <input
            type="password"
            id="password"
            name="password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            required
            className="w-full px-4 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
          />
        </div>

        <div className="mb-4">
          <label htmlFor="role" className="block text-sm font-medium text-gray-600">
            Role
          </label>
          <select
            id="role"
            name="role"
            value={role}
            onChange={(e) => setRole(e.target.value)}
            required
            className="w-full px-4 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
          >
            <option value="Admin">Admin</option>
            <option value="Receptionist">Receptionist</option>
            <option value="Staff">Staff</option>
          </select>
        </div>

        <button
          type="submit"
          className="w-full bg-blue-500 text-white py-2 rounded-lg mt-4 hover:bg-blue-600 focus:outline-none focus:ring-2 focus:ring-blue-500"
        >
          Sign Up
        </button>
      </form>

      <p className="text-sm text-center mt-4">
        Already have an account?{" "}
        <a href="/login" className="text-blue-500 hover:underline">
          Login
        </a>
      </p>
    </div>
  );
};

export default SignupPage;


