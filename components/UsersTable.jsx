"use client"

import { useState } from "react"
import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from "@/components/ui/table"
import { Select } from "@/components/ui/select"

const users = [
  { id: 1, name: "John Doe", email: "john@example.com", role: "Admin" },
  { id: 2, name: "Jane Smith", email: "jane@example.com", role: "Receptionist" },
  { id: 3, name: "Bob Johnson", email: "bob@example.com", role: "Staff" },
  { id: 4, name: "Alice Brown", email: "alice@example.com", role: "User" },
]

export function UsersTable() {
  const [tableData, setTableData] = useState(users)

  const handleRoleChange = (userId, newRole) => {
    setTableData((prevData) =>
      prevData.map((user) => (user.id === userId ? { ...user, role: newRole } : user))
    )
  }

  return (
    <Table>
      <TableHeader>
        <TableRow>
          <TableHead>Name</TableHead>
          <TableHead>Email</TableHead>
          <TableHead>Role</TableHead>
        </TableRow>
      </TableHeader>
      <TableBody>
        {tableData.map((user) => (
          <TableRow key={user.id}>
            <TableCell>{user.name}</TableCell>
            <TableCell>{user.email}</TableCell>
            <TableCell>
              <Select
                value={user.role}
                onChange={(e) => handleRoleChange(user.id, e.target.value)}
              >
                <option value="Admin">Admin</option>
                <option value="Receptionist">Receptionist</option>
                <option value="Staff">Staff</option>
                <option value="User">User</option>
              </Select>
            </TableCell>
          </TableRow>
        ))}
      </TableBody>
    </Table>
  )
}
