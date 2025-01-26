"use client"

import Link from "next/link"
import { useAuth } from "../context/AuthContext"

export default function Navigation() {
  const { user, logout } = useAuth()

  return (
    <nav className="bg-blue-600 text-white p-4">
      <div className="container mx-auto flex justify-between items-center">
        <Link href="/" className="text-2xl font-bold">
          Beneficiary Management App
        </Link>
        <div className="space-x-4">
          {user ? (
            <>
              <Link href="/dashboard">Dashboard</Link>
              {user.role === "Admin" && (
                <>
                  <Link href="/users">Manage Users</Link>
                  <Link href="/departments">Manage Departments</Link>
                </>
              )}
              {(user.role === "Admin" || user.role === "Receptionist") && (
                <Link href="/beneficiaries/register">Register Beneficiary</Link>
              )}
              {(user.role === "Admin" || user.role === "Staff") && <Link href="/tokens/scan">Scan Token</Link>}
              <button onClick={logout} className="bg-red-500 px-3 py-1 rounded">
                Logout
              </button>
            </>
          ) : (
            <Link href="/login">Login</Link>
          )}
        </div>
      </div>
    </nav>
  )
}

