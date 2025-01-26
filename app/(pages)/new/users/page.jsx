"use client"

import { useState, useEffect } from "react"
import { useAuth } from "../../../../contexts/AuthContext"
import { api } from "../../utils/api"

export default function ManageUsers() {
  const { user } = useAuth()
  const [users, setUsers] = useState([])
  const [newUser, setNewUser] = useState({ name: "", email: "", password: "", role: "Staff" })

  useEffect(() => {
    if (user.role === "Admin") {
      api
        .get("/users")
        .then((data) => setUsers(data))
        .catch((error) => console.error("Error fetching users:", error))
    }
  }, [user.role])

  const handleAddUser = async (e) => {
    e.preventDefault()
    try {
      const response = await api.post("/users/register", newUser)
      setUsers([...users, response.user])
      setNewUser({ name: "", email: "", password: "", role: "Staff" })
    } catch (error) {
      alert("Error adding user")
    }
  }

  if (user.role !== "Admin") {
    return <div>You do not have permission to access this page.</div>
  }

  return (
    <div>
      <h2 className="text-2xl font-bold mb-4">Manage Users</h2>
      <form onSubmit={handleAddUser} className="mb-8 space-y-4">
        <div>
          <label htmlFor="name" className="block mb-1">
            Name
          </label>
          <input
            type="text"
            id="name"
            value={newUser.name}
            onChange={(e) => setNewUser({ ...newUser, name: e.target.value })}
            required
            className="w-full p-2 border rounded"
          />
        </div>
        <div>
          <label htmlFor="email" className="block mb-1">
            Email
          </label>
          <input
            type="email"
            id="email"
            value={newUser.email}
            onChange={(e) => setNewUser({ ...newUser, email: e.target.value })}
            required
            className="w-full p-2 border rounded"
          />
        </div>
        <div>
          <label htmlFor="password" className="block mb-1">
            Password
          </label>
          <input
            type="password"
            id="password"
            value={newUser.password}
            onChange={(e) => setNewUser({ ...newUser, password: e.target.value })}
            required
            className="w-full p-2 border rounded"
          />
        </div>
        <div>
          <label htmlFor="role" className="block mb-1">
            Role
          </label>
          <select
            id="role"
            value={newUser.role}
            onChange={(e) => setNewUser({ ...newUser, role: e.target.value })}
            required
            className="w-full p-2 border rounded"
          >
            <option value="Staff">Staff</option>
            <option value="Receptionist">Receptionist</option>
            <option value="Admin">Admin</option>
          </select>
        </div>
        <button type="submit" className="w-full bg-green-600 text-white p-2 rounded">
          Add User
        </button>
      </form>

      <h3 className="text-xl font-bold mb-2">Existing Users</h3>
      <table className="w-full bg-white shadow-md rounded">
        <thead>
          <tr className="bg-gray-200 text-gray-600 uppercase text-sm leading-normal">
            <th className="py-3 px-6 text-left">Name</th>
            <th className="py-3 px-6 text-left">Email</th>
            <th className="py-3 px-6 text-left">Role</th>
          </tr>
        </thead>
        <tbody className="text-gray-600 text-sm font-light">
          {users.map((user) => (
            <tr key={user._id} className="border-b border-gray-200 hover:bg-gray-100">
              <td className="py-3 px-6 text-left whitespace-nowrap">{user.name}</td>
              <td className="py-3 px-6 text-left">{user.email}</td>
              <td className="py-3 px-6 text-left">{user.role}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  )
}

