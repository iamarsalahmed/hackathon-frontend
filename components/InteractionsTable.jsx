import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from "@/components/ui/table"

const interactions = [
  {
    id: 1,
    timestamp: "2023-06-15 09:30:00",
    purpose: "General Inquiry",
    departments: "Information Desk",
    status: "Completed",
  },
  {
    id: 2,
    timestamp: "2023-06-15 10:15:00",
    purpose: "Document Submission",
    departments: "Records, Finance",
    status: "In Progress",
  },
  {
    id: 3,
    timestamp: "2023-06-15 11:00:00",
    purpose: "Complaint",
    departments: "Customer Service, Management",
    status: "Pending",
  },
  {
    id: 4,
    timestamp: "2023-06-15 12:30:00",
    purpose: "Service Request",
    departments: "Technical Support",
    status: "Completed",
  },
]

export function InteractionsTable() {
  return (
    <Table>
      <TableHeader>
        <TableRow>
          <TableHead>Timestamp</TableHead>
          <TableHead>Purpose</TableHead>
          <TableHead>Departments Visited</TableHead>
          <TableHead>Status</TableHead>
        </TableRow>
      </TableHeader>
      <TableBody>
        {interactions.map((interaction) => (
          <TableRow key={interaction.id}>
            <TableCell>{interaction.timestamp}</TableCell>
            <TableCell>{interaction.purpose}</TableCell>
            <TableCell>{interaction.departments}</TableCell>
            <TableCell>{interaction.status}</TableCell>
          </TableRow>
        ))}
      </TableBody>
    </Table>
  )
}
