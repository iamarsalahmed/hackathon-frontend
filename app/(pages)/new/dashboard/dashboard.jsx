// import { UsersTable } from "@/components/UsersTable"
// import { VisitorsTable } from "@/components/VisitorsTable"
// import { InteractionsTable } from "@/components/InteractionsTable"

// export default function AdminDashboard() {
//   return (
//     <div className="container mx-auto p-6 space-y-8">
//       <h1 className="text-3xl font-bold mb-6">Admin Dashboard</h1>

//       <section>
//         <h2 className="text-2xl font-semibold mb-4">Users</h2>
//         <UsersTable />
//       </section>

//       <section>
//         <h2 className="text-2xl font-semibold mb-4">Visitors</h2>
//         <VisitorsTable />
//       </section>

//       <section>
//         <h2 className="text-2xl font-semibold mb-4">Interactions</h2>
//         <InteractionsTable />
//       </section>
//     </div>
//   )
// }

"use client"

import { useState, useEffect } from "react"
import { useAuth } from "../../../../context/AuthContext"
import { api } from "../../../../utils/api"
import { Bar, Pie } from "react-chartjs-2"
import { Chart as ChartJS, ArcElement, Tooltip, Legend, CategoryScale, LinearScale, BarElement } from "chart.js"

ChartJS.register(ArcElement, Tooltip, Legend, CategoryScale, LinearScale, BarElement)

export default function Dashboard() {
  const { user } = useAuth()
  const [insights, setInsights] = useState(null)

  useEffect(() => {
    api
      .get("/dashboard/insights")
      .then((data) => setInsights(data.insights))
      .catch((error) => console.error("Error fetching insights:", error))
  }, [])

  if (!insights) return <div>Loading...</div>

  const dailyActivityData = {
    labels: ["New Beneficiaries", "Returning Beneficiaries"],
    datasets: [
      {
        data: [insights.newBeneficiaries, insights.returningBeneficiaries],
        backgroundColor: ["#4CAF50", "#2196F3"],
      },
    ],
  }

  const departmentActivityData = {
    labels: insights.departmentStats.map((stat) => stat._id),
    datasets: [
      {
        label: "Department Activity",
        data: insights.departmentStats.map((stat) => stat.count),
        backgroundColor: "rgba(75, 192, 192, 0.6)",
      },
    ],
  }

  return (
    <div>
      <h2 className="text-2xl font-bold mb-4">Dashboard</h2>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
        <div className="bg-white p-4 rounded shadow">
          <h3 className="font-bold mb-2">Daily Visitor Breakdown</h3>
          <Pie data={dailyActivityData} />
        </div>
        <div className="bg-white p-4 rounded shadow">
          <h3 className="font-bold mb-2">Department Activity</h3>
          <Bar data={departmentActivityData} />
        </div>
      </div>
      {user === "Admin" && (
        <div className="mt-4 bg-white p-4 rounded shadow">
          <h3 className="font-bold mb-2">Quick Stats</h3>
          <p>Total Visitors Today: {insights.newBeneficiaries + insights.returningBeneficiaries}</p>
          <p>Active Tokens: {insights.activeTokens}</p>
          <p>Completed Tokens: {insights.completedTokens}</p>
        </div>
      )}
    </div>
  )
}

