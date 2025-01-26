// "use client"

// import React, { createContext, useContext, useState, useEffect } from "react"
// import { useRouter } from "next/navigation"
// import { api } from "@/utils/api"

// const AuthContext = createContext()

// export function AuthProvider({ children }) {
//   const [user, setUser] = useState(null)
//   const [loading, setLoading] = useState(true)
//   const router = useRouter()

//   useEffect(() => {
//     // Check if user is logged in
//     const checkLoggedIn = async () => {
//       try {
//         const token = localStorage.getItem("token")
//         if (token) {
//           const userData = await api.get("/users/me")
//           setUser(userData)
//         }
//       } catch (error) {
//         console.error("Error checking authentication:", error)
//       } finally {
//         setLoading(false)
//       }
//     }

//     checkLoggedIn()
//   }, [])

//   const login = async (email, password) => {
//     try {
//       const response = await api.post("/users/login", { email, password })
//       localStorage.setItem("token", response.token)
//       setUser(response.user)
//       router.push("/dashboard")
//     } catch (error) {
//       console.error("Login error:", error)
//       throw error
//     }
//   }

//   const logout = () => {
//     localStorage.removeItem("token")
//     setUser(null)
//     router.push("/login")
//   }

//   const value = {
//     user,
//     login,
//     logout,
//     loading,
//   }

//   return <AuthContext.Provider value={value}>{children}</AuthContext.Provider>
// }

// export function useAuth() {
//   const context = useContext(AuthContext)
//   if (context === undefined) {
//     throw new Error("useAuth must be used within an AuthProvider")
//   }
//   return context
// }

