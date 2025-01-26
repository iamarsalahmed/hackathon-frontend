// import { Suspense } from "react"
// import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
// import { Overview } from "@/components/Overview"
// import { RecentActivity } from "@/components/RecentActivity"
// import { UserManagement } from "@/components/UserManagement"
// import { DepartmentManagement } from "@/components/DepartmentManagement"
// import { ReportGeneration } from "@/components/ReportGeneration"
// import { MetricsConfig } from "@/components/MetricsConfig"
// import { SystemSettings } from "@/components/SystemSettings"
// import { MetricCard } from "@/components/MetricCard"

// export default function DashboardPage() {
//   return (
//     <div className="space-y-6">
//       <h1 className="text-3xl font-bold">Dashboard</h1>

//       <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-4">
//         <Suspense fallback={<Card className="h-24 animate-pulse" />}>
//           <MetricCard title="Total Users" metric="users" />
//         </Suspense>
//         <Suspense fallback={<Card className="h-24 animate-pulse" />}>
//           <MetricCard title="Active Departments" metric="departments" />
//         </Suspense>
//         <Suspense fallback={<Card className="h-24 animate-pulse" />}>
//           <MetricCard title="Reports Generated" metric="reports" />
//         </Suspense>
//         <Suspense fallback={<Card className="h-24 animate-pulse" />}>
//           <MetricCard title="System Health" metric="health" />
//         </Suspense>
//       </div>

//       <div className="grid gap-6 md:grid-cols-2">
//         <Card>
//           <CardHeader>
//             <CardTitle>Overview</CardTitle>
//           </CardHeader>
//           <CardContent>
//             <Overview />
//           </CardContent>
//         </Card>
//         <Card>
//           <CardHeader>
//             <CardTitle>Recent Activity</CardTitle>
//           </CardHeader>
//           <CardContent>
//             <RecentActivity />
//           </CardContent>
//         </Card>
//       </div>

//       <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
//         <Card>
//           <CardHeader>
//             <CardTitle>User Management</CardTitle>
//           </CardHeader>
//           <CardContent>
//             <UserManagement />
//           </CardContent>
//         </Card>
//         <Card>
//           <CardHeader>
//             <CardTitle>Department Management</CardTitle>
//           </CardHeader>
//           <CardContent>
//             <DepartmentManagement />
//           </CardContent>
//         </Card>
//         <Card>
//           <CardHeader>
//             <CardTitle>Report Generation</CardTitle>
//           </CardHeader>
//           <CardContent>
//             <ReportGeneration />
//           </CardContent>
//         </Card>
//       </div>

//       <div className="grid gap-6 md:grid-cols-2">
//         <Card>
//           <CardHeader>
//             <CardTitle>Dashboard Metrics Configuration</CardTitle>
//           </CardHeader>
//           <CardContent>
//             {/* <MetricsConfig /> */}
//           </CardContent>
//         </Card>
//         <Card>
//           <CardHeader>
//             <CardTitle>System Settings</CardTitle>
//           </CardHeader>
//           <CardContent>
//             {/* <SystemSettings /> */}
//           </CardContent>
//         </Card>
//       </div>
//     </div>
//   )
// }

// 'use client'

// import { useState, useEffect } from 'react';
// import axios from 'axios'
// function AdminDashboard() {

//   // Sample data for the user table
//   const [users, setUsers] = useState([]);

//   // Sample data for the interaction table
//   const [interactions, setInteractions] = useState([
//     { id: 1, timestamp: '2025-01-25 10:30 AM', purpose: 'Meeting', department: 'HR', status: 'Completed' },
//     { id: 2, timestamp: '2025-01-25 11:00 AM', purpose: 'Training', department: 'IT', status: 'In Progress' },
//     { id: 3, timestamp: '2025-01-24 03:30 PM', purpose: 'Interview', department: 'HR', status: 'Completed' },
//   ]);

//   // Sample data for the filterable dashboard
//   const [dashboardData, setDashboardData] = useState([
//     { department: 'HR', completed: 5, pending: 2, inProcess: 3 },
//     { department: 'IT', completed: 8, pending: 4, inProcess: 6 },
//     { department: 'Finance', completed: 2, pending: 1, inProcess: 0 },
//   ]);
//   useEffect(() => {
//     const fetchUsers = async () => {
//       try {
//         const response = await axios.get('https://saylani-management-production.up.railway.appapi/users/');
//         console.log(response.data, "res data")
//         setUsers(response.data); // Axios response data is directly in 'data'
//       } catch (error) {
//         console.error('Error fetching beneficiaries:', error);
//       }
//     };
//     fetchUsers();
//   }, []);

// const [beneficiaries, setBeneficiaries] = useState([]);
//   const [loading, setLoading] = useState(true);
//   const [error, setError] = useState("");

//   useEffect(() => {
//     // Fetch beneficiaries
//     const fetchBeneficiaries = async () => {
//       try {
//         const response = await axios.get("https://saylani-management-production.up.railway.appapi/beneficiaries/"); // Update API endpoint if needed
//         setBeneficiaries(response.data);
//         setLoading(false);
//       } catch (err) {
//         setError("Failed to fetch beneficiaries");
//         setLoading(false);
//       }
//     };

//     fetchBeneficiaries();
//   }, []);

//   if (loading) {
//     return <p>Loading...</p>;
//   }

//   if (error) {
//     return <p className="text-red-500">{error}</p>;
//   }

//   // State for the filter input field
//   const [filter, setFilter] = useState('');

//   const handleFilterChange = (e) => {
//     setFilter(e.target.value);
//   };

//   return (
//     <div className="min-h-screen bg-gray-100 p-8">
//       <h1 className="text-3xl font-bold text-center mb-8">Admin Dashboard</h1>

//       {/* Dashboard Table */}
//       {/* <div className="mb-12">
//         <h2 className="text-2xl font-semibold mb-4">Department Overview</h2>
//         <div className="overflow-x-auto bg-white shadow-lg rounded-lg p-6">
//           <table className="min-w-full table-auto">
//             <thead>
//               <tr className="border-b">
//                 <th className="px-6 py-3 text-left text-sm font-medium text-gray-500">Department</th>
//                 <th className="px-6 py-3 text-left text-sm font-medium text-gray-500">Completed</th>
//                 <th className="px-6 py-3 text-left text-sm font-medium text-gray-500">Pending</th>
//                 <th className="px-6 py-3 text-left text-sm font-medium text-gray-500">In Process</th>
//               </tr>
//             </thead>
//             <tbody>
//               {dashboardData.map((data) => (
//                 <tr key={data.department} className="border-b">
//                   <td className="px-6 py-4 text-sm text-gray-900">{data.department}</td>
//                   <td className="px-6 py-4 text-sm text-gray-900">{data.completed}</td>
//                   <td className="px-6 py-4 text-sm text-gray-900">{data.pending}</td>
//                   <td className="px-6 py-4 text-sm text-gray-900">{data.inProcess}</td>
//                 </tr>
//               ))}
//             </tbody>
//           </table>
//         </div>
//       </div> */}
// <div className="p-6">
//       <h1 className="text-2xl font-bold mb-4">Department</h1>
//       <table className="table-auto border-collapse border border-gray-400 w-full">
//         <thead>
//           <tr className="bg-gray-200">
//             <th className="border border-gray-400 px-4 py-2 text-left">Name</th>
//             <th className="border border-gray-400 px-4 py-2 text-left">CNIC</th>
//             <th className="border border-gray-400 px-4 py-2 text-left">Token</th>
//             <th className="border border-gray-400 px-4 py-2 text-left">Department</th>
//           </tr>
//         </thead>
//         <tbody>
//           {beneficiaries.map((beneficiary) => (
//             <tr key={beneficiary._id} className="hover:bg-gray-100">
//               <td className="border border-gray-400 px-4 py-2">{beneficiary.name}</td>
//               <td className="border border-gray-400 px-4 py-2">{beneficiary.cnic}</td>
//               <td className="border border-gray-400 px-4 py-2">{beneficiary.token}</td>
//               <td className="border border-gray-400 px-4 py-2">{beneficiary.department || "Others"}</td>
//             </tr>
//           ))}
//         </tbody>
//       </table>
//     </div>
//       {/* User Table */}
//       <div className="mb-12">
//         <h2 className="text-2xl font-semibold mb-4">User Management</h2>
//         <div className="overflow-x-auto bg-white shadow-lg rounded-lg p-6">
//           <table className="min-w-full table-auto">
//             <thead>
//               <tr className="border-b">
//                 <th className="px-6 py-3 text-left text-sm font-medium text-gray-500">Name</th>
//                 <th className="px-6 py-3 text-left text-sm font-medium text-gray-500">Email</th>
//                 <th className="px-6 py-3 text-left text-sm font-medium text-gray-500">Role</th>
//               </tr>
//             </thead>
//             <tbody>
//               {users.map((user) => (
//                 <tr key={user.id} className="border-b">
//                   <td className="px-6 py-4 text-sm text-gray-900">{user.name}</td>
//                   <td className="px-6 py-4 text-sm text-gray-900">{user.email}</td>
//                   <td className="px-6 py-4 text-sm text-gray-900">
//                     <select
//                       className="bg-white border border-gray-300 rounded p-1 text-sm"
//                       value={user.role}
//                       onChange={(e) => {
//                         const updatedUsers = users.map((u) =>
//                           u.id === user.id ? { ...u, role: e.target.value } : u
//                         );
//                         setUsers(updatedUsers);
//                       }}
//                     >
//                       <option value="Admin">Admin</option>
//                       <option value="Receptionist">Receptionist</option>
//                       <option value="Staff">Staff</option>
//                       <option value="User">User</option>
//                     </select>
//                   </td>
//                 </tr>
//               ))}
//             </tbody>
//           </table>
//         </div>
//       </div>

//       {/* Interaction Table */}
//       <div className="mb-12">
//         <h2 className="text-2xl font-semibold mb-4">Interaction Records</h2>
//         <div className="overflow-x-auto bg-white shadow-lg rounded-lg p-6">
//           <table className="min-w-full table-auto">
//             <thead>
//               <tr className="border-b">
//                 <th className="px-6 py-3 text-left text-sm font-medium text-gray-500">Timestamp</th>
//                 <th className="px-6 py-3 text-left text-sm font-medium text-gray-500">Purpose</th>
//                 <th className="px-6 py-3 text-left text-sm font-medium text-gray-500">Department</th>
//                 <th className="px-6 py-3 text-left text-sm font-medium text-gray-500">Status</th>
//               </tr>
//             </thead>
//             <tbody>
//               {interactions.map((interaction) => (
//                 <tr key={interaction.id} className="border-b">
//                   <td className="px-6 py-4 text-sm text-gray-900">{interaction.timestamp}</td>
//                   <td className="px-6 py-4 text-sm text-gray-900">{interaction.purpose}</td>
//                   <td className="px-6 py-4 text-sm text-gray-900">{interaction.department}</td>
//                   <td className="px-6 py-4 text-sm text-gray-900">{interaction.status}</td>
//                 </tr>
//               ))}
//             </tbody>
//           </table>
//         </div>
//       </div>

//       {/* Filterable Dashboard */}
//       <div className="mb-12">
//         <h2 className="text-2xl font-semibold mb-4">Filter Dashboard</h2>
//         <div className="flex justify-between items-center mb-4">
//           <input
//             type="text"
//             placeholder="Search by CNIC, Phone, or Name"
//             className="border border-gray-300 rounded p-2 text-sm"
//             value={filter}
//             onChange={handleFilterChange}
//           />
//         </div>

//         <div className="overflow-x-auto bg-white shadow-lg rounded-lg p-6">
//           <table className="min-w-full table-auto">
//             <thead>
//               <tr className="border-b">
//                 <th className="px-6 py-3 text-left text-sm font-medium text-gray-500">CNIC</th>
//                 <th className="px-6 py-3 text-left text-sm font-medium text-gray-500">Phone Number</th>
//                 <th className="px-6 py-3 text-left text-sm font-medium text-gray-500">Name</th>
//               </tr>
//             </thead>
//             <tbody>
//               {/* Display filtered results */}
//               {dashboardData
//                 .filter((item) => {
//                   return (
//                     item.department.toLowerCase().includes(filter.toLowerCase()) ||
//                     item.completed.toString().includes(filter) ||
//                     item.pending.toString().includes(filter)
//                   );
//                 })
//                 .map((data) => (
//                   <tr key={data.department} className="border-b">
//                     <td className="px-6 py-4 text-sm text-gray-900">{data.department}</td>
//                     <td className="px-6 py-4 text-sm text-gray-900">{data.completed}</td>
//                     <td className="px-6 py-4 text-sm text-gray-900">{data.pending}</td>
//                   </tr>
//                 ))}
//             </tbody>
//           </table>
//         </div>
//       </div>
//     </div>
//   );
// }
// export default AdminDashboard;
'use client'

import { useState, useEffect } from 'react';
import axios from 'axios';

function AdminDashboard() {
  // Sample data for the interaction table
  const [interactions, setInteractions] = useState([
    { id: 1, timestamp: '2025-01-25 10:30 AM', purpose: 'Meeting', department: 'HR', status: 'Completed' },
    { id: 2, timestamp: '2025-01-25 11:00 AM', purpose: 'Training', department: 'IT', status: 'In Progress' },
    { id: 3, timestamp: '2025-01-24 03:30 PM', purpose: 'Interview', department: 'HR', status: 'Completed' },
  ]);

  const [dashboardData, setDashboardData] = useState([
    { department: 'HR', completed: 5, pending: 2, inProcess: 3 },
    { department: 'IT', completed: 8, pending: 4, inProcess: 6 },
    { department: 'Finance', completed: 2, pending: 1, inProcess: 0 },
  ]);

  const [users, setUsers] = useState([]);
  const [beneficiaries, setBeneficiaries] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState("");
  const [filter, setFilter] = useState('');

  useEffect(() => {
    const fetchUsers = async () => {
      try {
        const response = await axios.get('https://saylani-management-production.up.railway.appapi/users/');
        setUsers(response.data);
      } catch (error) {
        console.error('Error fetching users:', error);
      }
    };
    fetchUsers();
  }, []);

  useEffect(() => {
    const fetchBeneficiaries = async () => {
      try {
        const response = await axios.get('https://saylani-management-production.up.railway.appapi/beneficiaries/');
        setBeneficiaries(response.data);
        setLoading(false);
      } catch (err) {
        setError('Failed to fetch beneficiaries');
        setLoading(false);
      }
    };
    fetchBeneficiaries();
  }, []);

  const handleFilterChange = (e) => {
    setFilter(e.target.value);
  };

  if (loading) {
    return <p>Loading...</p>;
  }

  if (error) {
    return <p className="text-red-500">{error}</p>;
  }

  return (
    <div className="min-h-screen bg-gray-100 p-8">
      <h1 className="text-3xl font-bold text-center mb-8">Admin Dashboard</h1>

      {/* Beneficiaries Table */}
      <div className="p-6">
        <h1 className="text-2xl font-bold mb-4">Beneficiaries</h1>
        <table className="table-auto border-collapse border border-gray-400 w-full">
          <thead>
            <tr className="bg-gray-200">
              <th className="border border-gray-400 px-4 py-2 text-left">Name</th>
              <th className="border border-gray-400 px-4 py-2 text-left">CNIC</th>
              <th className="border border-gray-400 px-4 py-2 text-left">Token</th>
              <th className="border border-gray-400 px-4 py-2 text-left">Department</th>
            </tr>
          </thead>
          <tbody>
            {beneficiaries.map((beneficiary) => (
              <tr key={beneficiary._id} className="hover:bg-gray-100">
                <td className="border border-gray-400 px-4 py-2">{beneficiary.name}</td>
                <td className="border border-gray-400 px-4 py-2">{beneficiary.cnic}</td>
                <td className="border border-gray-400 px-4 py-2">{beneficiary.token}</td>
                <td className="border border-gray-400 px-4 py-2">{beneficiary.department || "Others"}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>

      {/* User Management Table */}
      <div className="mb-12">
        <h2 className="text-2xl font-semibold mb-4">User Management</h2>
        <div className="overflow-x-auto bg-white shadow-lg rounded-lg p-6">
          <table className="min-w-full table-auto">
            <thead>
              <tr className="border-b">
                <th className="px-6 py-3 text-left text-sm font-medium text-gray-500">Name</th>
                <th className="px-6 py-3 text-left text-sm font-medium text-gray-500">Email</th>
                <th className="px-6 py-3 text-left text-sm font-medium text-gray-500">Role</th>
              </tr>
            </thead>
            <tbody>
              {users.map((user) => (
                <tr key={user._id} className="border-b">
                  <td className="px-6 py-4 text-sm text-gray-900">{user.name}</td>
                  <td className="px-6 py-4 text-sm text-gray-900">{user.email}</td>
                  <td className="px-6 py-4 text-sm text-gray-900">
                    <select
                      className="bg-white border border-gray-300 rounded p-1 text-sm"
                      value={user.role}
                      onChange={(e) => {
                        const updatedUsers = users.map((u) =>
                          u.id === user.id ? { ...u, role: e.target.value } : u
                        );
                        setUsers(updatedUsers);
                      }}
                    >
                      <option value="Admin">Admin</option>
                      <option value="Receptionist">Receptionist</option>
                      <option value="Staff">Staff</option>
                      <option value="User">User</option>
                    </select>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>

      {/* Interaction Records Table */}
      <div className="mb-12">
        <h2 className="text-2xl font-semibold mb-4">Interaction Records</h2>
        <div className="overflow-x-auto bg-white shadow-lg rounded-lg p-6">
          <table className="min-w-full table-auto">
            <thead>
              <tr className="border-b">
                <th className="px-6 py-3 text-left text-sm font-medium text-gray-500">Timestamp</th>
                <th className="px-6 py-3 text-left text-sm font-medium text-gray-500">Purpose</th>
                <th className="px-6 py-3 text-left text-sm font-medium text-gray-500">Department</th>
                <th className="px-6 py-3 text-left text-sm font-medium text-gray-500">Status</th>
              </tr>
            </thead>
            <tbody>
              {interactions.map((interaction) => (
                <tr key={interaction.id} className="border-b">
                  <td className="px-6 py-4 text-sm text-gray-900">{interaction.timestamp}</td>
                  <td className="px-6 py-4 text-sm text-gray-900">{interaction.purpose}</td>
                  <td className="px-6 py-4 text-sm text-gray-900">{interaction.department}</td>
                  <td className="px-6 py-4 text-sm text-gray-900">{interaction.status}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>

      {/* Filterable Dashboard */}
      <div className="mb-12">
        <h2 className="text-2xl font-semibold mb-4">Filter Dashboard</h2>
        <div className="flex justify-between items-center mb-4">
          <input
            type="text"
            placeholder="Search by CNIC, Phone, or Name"
            className="border border-gray-300 rounded p-2 text-sm"
            value={filter}
            onChange={handleFilterChange}
          />
        </div>

        <div className="overflow-x-auto bg-white shadow-lg rounded-lg p-6">
          <table className="min-w-full table-auto">
            <thead>
              <tr className="border-b">
                <th className="px-6 py-3 text-left text-sm font-medium text-gray-500">CNIC</th>
                <th className="px-6 py-3 text-left text-sm font-medium text-gray-500">Phone Number</th>
                <th className="px-6 py-3 text-left text-sm font-medium text-gray-500">Name</th>
              </tr>
            </thead>
            <tbody>
              {dashboardData
                .filter((item) => {
                  return (
                    item.department.toLowerCase().includes(filter.toLowerCase()) ||
                    item.completed.toString().includes(filter) ||
                    item.pending.toString().includes(filter)
                  );
                })
                .map((data) => (
                  <tr key={data.department} className="border-b">
                    <td className="px-6 py-4 text-sm text-gray-900">{data.department}</td>
                    <td className="px-6 py-4 text-sm text-gray-900">{data.completed}</td>
                    <td className="px-6 py-4 text-sm text-gray-900">{data.pending}</td>
                  </tr>
                ))}
            </tbody>
          </table>
        </div>
      </div>
    </div>
  );
}

export default AdminDashboard;
