"use client"

import { useState } from "react"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from "@/components/ui/table"

const initialDepartments = [
  { id: 1, name: "Human Resources", manager: "John Doe" },
  { id: 2, name: "Marketing", manager: "Jane Smith" },
  { id: 3, name: "Engineering", manager: "Bob Johnson" },
]

export function DepartmentManagement() {
  const [departments, setDepartments] = useState(initialDepartments)
  const [newDepartment, setNewDepartment] = useState({ name: "", manager: "" })

  const addDepartment = () => {
    setDepartments([...departments, { ...newDepartment, id: departments.length + 1 }])
    setNewDepartment({ name: "", manager: "" })
  }

  return (
    <div className="space-y-4">
      <div className="grid grid-cols-2 gap-4">
        <div>
          <Label htmlFor="dept-name">Department Name</Label>
          <Input
            id="dept-name"
            value={newDepartment.name}
            onChange={(e) => setNewDepartment({ ...newDepartment, name: e.target.value })}
          />
        </div>
        <div>
          <Label htmlFor="manager">Manager</Label>
          <Input
            id="manager"
            value={newDepartment.manager}
            onChange={(e) => setNewDepartment({ ...newDepartment, manager: e.target.value })}
          />
        </div>
      </div>
      <Button onClick={addDepartment}>Add Department</Button>
      <Table>
        <TableHeader>
          <TableRow>
            <TableHead>Department Name</TableHead>
            <TableHead>Manager</TableHead>
          </TableRow>
        </TableHeader>
        <TableBody>
          {departments.map((dept) => (
            <TableRow key={dept.id}>
              <TableCell>{dept.name}</TableCell>
              <TableCell>{dept.manager}</TableCell>
            </TableRow>
          ))}
        </TableBody>
      </Table>
    </div>
  )
}

