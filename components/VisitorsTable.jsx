"use client"

import { useState } from "react"
import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from "@/components/ui/table"
import { Input } from "@/components/ui/input"

const visitors = [
  { id: 1, cnic: "12345-1234567-1", phoneNumber: "0300-1234567", name: "Visitor 1" },
  { id: 2, cnic: "23456-2345678-2", phoneNumber: "0300-2345678", name: "Visitor 2" },
  { id: 3, cnic: "34567-3456789-3", phoneNumber: "0300-3456789", name: "Visitor 3" },
  { id: 4, cnic: "45678-4567890-4", phoneNumber: "0300-4567890", name: "Visitor 4" },
]

export function VisitorsTable() {
  const [filter, setFilter] = useState("")

  const filteredVisitors = visitors.filter(
    (visitor) =>
      visitor.cnic.includes(filter) ||
      visitor.phoneNumber.includes(filter) ||
      visitor.name.toLowerCase().includes(filter.toLowerCase()),
  )

  return (
    <div>
      <Input
        type="text"
        placeholder="Filter by CNIC, Phone Number, or Name"
        value={filter}
        onChange={(e) => setFilter(e.target.value)}
        className="mb-4"
      />
      <Table>
        <TableHeader>
          <TableRow>
            <TableHead>CNIC</TableHead>
            <TableHead>Phone Number</TableHead>
            <TableHead>Name</TableHead>
          </TableRow>
        </TableHeader>
        <TableBody>
          {filteredVisitors.map((visitor) => (
            <TableRow key={visitor.id}>
              <TableCell>{visitor.cnic}</TableCell>
              <TableCell>{visitor.phoneNumber}</TableCell>
              <TableCell>{visitor.name}</TableCell>
            </TableRow>
          ))}
        </TableBody>
      </Table>
    </div>
  )
}
