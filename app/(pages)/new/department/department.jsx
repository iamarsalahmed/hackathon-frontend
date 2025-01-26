// // 'use client'
// // import { useState, useEffect } from "react";

// // // Mocked API function to fetch users (replace with actual API calls)
// // const fetchUsers = async () => {
// //   return [
// //     { id: 1, name: "User A" },
// //     { id: 2, name: "User B" },
// //     { id: 3, name: "User C" },
// //   ];
// // };

// // // Modal Component
// // const Modal = ({ isOpen, onClose, onSave, department, users }) => {
// //   const [name, setName] = useState(department?.name || "");
// //   const [description, setDescription] = useState(department?.description || "");
// //   const [selectedUser, setSelectedUser] = useState(department?.userId || "");

// //   useEffect(() => {
// //     if (isOpen) {
// //       setName(department?.name || "");
// //       setDescription(department?.description || "");
// //       setSelectedUser(department?.userId || "");
// //     }
// //   }, [isOpen, department]);

// //   const handleSave = () => {
// //     if (!name || !description || !selectedUser) {
// //       alert("All fields are required.");
// //       return;
// //     }
// //     onSave({ name, description, userId: selectedUser });
// //     onClose();
// //   };

// //   if (!isOpen) return null;

// //   return (
// //     <div
// //       className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50"
// //       onClick={onClose}
// //     >
// //       <div
// //         className="bg-white rounded-lg p-6 w-full max-w-md shadow-lg"
// //         onClick={(e) => e.stopPropagation()}
// //       >
// //         <h2 className="text-xl font-semibold mb-4">
// //           {department ? "Edit Department" : "Add Department"}
// //         </h2>
// //         <div className="space-y-4">
// //           <input
// //             type="text"
// //             value={name}
// //             onChange={(e) => setName(e.target.value)}
// //             placeholder="Name"
// //             className="border border-gray-300 rounded-md p-2 w-full"
// //           />
// //           <textarea
// //             value={description}
// //             onChange={(e) => setDescription(e.target.value)}
// //             placeholder="Description"
// //             className="border border-gray-300 rounded-md p-2 w-full"
// //           />
// //           <select
// //             value={selectedUser}
// //             onChange={(e) => setSelectedUser(e.target.value)}
// //             className="border border-gray-300 rounded-md p-2 w-full"
// //           >
// //             <option value="" disabled>
// //               Select User
// //             </option>
// //             {users.map((user) => (
// //               <option key={user.id} value={user.id}>
// //                 {user.name}
// //               </option>
// //             ))}
// //           </select>
// //           <div className="flex justify-end space-x-2">
// //             <button
// //               onClick={onClose}
// //               className="bg-gray-500 text-white rounded-md px-4 py-2 hover:bg-gray-600"
// //             >
// //               Cancel
// //             </button>
// //             <button
// //               onClick={handleSave}
// //               className="bg-blue-500 text-white rounded-md px-4 py-2 hover:bg-blue-600"
// //             >
// //               Save
// //             </button>
// //           </div>
// //         </div>
// //       </div>
// //     </div>
// //   );
// // };

// // // Departments Page
// // const DepartmentsPage = () => {
// //   const [departments, setDepartments] = useState([]);
// //   const [isModalOpen, setIsModalOpen] = useState(false);
// //   const [selectedDepartment, setSelectedDepartment] = useState(null);
// //   const [users, setUsers] = useState([]);

// //   useEffect(() => {
// //     // Fetch all users on mount
// //     fetchUsers().then(setUsers);
// //   }, []);

// //   const handleAdd = () => {
// //     setSelectedDepartment(null);
// //     setIsModalOpen(true);
// //   };

// //   const handleEdit = (department) => {
// //     setSelectedDepartment(department);
// //     setIsModalOpen(true);
// //   };

// //   const handleSave = (departmentData) => {
// //     if (selectedDepartment) {
// //       // Update existing department
// //       setDepartments((prev) =>
// //         prev.map((dep) =>
// //           dep.id === selectedDepartment.id
// //             ? { ...dep, ...departmentData }
// //             : dep
// //         )
// //       );
// //     } else {
// //       // Add new department
// //       setDepartments((prev) => [
// //         ...prev,
// //         { id: prev.length + 1, ...departmentData },
// //       ]);
// //     }
// //   };

// //   return (
// //     <div className="p-6">
// //       <div className="flex justify-between items-center mb-4">
// //         <h1 className="text-2xl font-semibold">Departments</h1>
// //         <button
// //           onClick={handleAdd}
// //           className="bg-blue-500 text-white rounded-md px-4 py-2 hover:bg-blue-600"
// //         >
// //           Add Department
// //         </button>
// //       </div>

// //       <table className="min-w-full border border-gray-200 rounded-lg overflow-hidden">
// //         <thead className="bg-gray-200 text-gray-700">
// //           <tr>
// //             <th className="px-4 py-2 text-left">Name</th>
// //             <th className="px-4 py-2 text-left">Description</th>
// //             <th className="px-4 py-2 text-left">Actions</th>
// //           </tr>
// //         </thead>
// //         <tbody>
// //           {departments.map((department) => (
// //             <tr
// //               key={department.id}
// //               className="border-b hover:bg-gray-50"
// //             >
// //               <td className="px-4 py-2">{department.name}</td>
// //               <td className="px-4 py-2">{department.description}</td>
// //               <td className="px-4 py-2">
// //                 <button
// //                   onClick={() => handleEdit(department)}
// //                   className="bg-green-500 text-white rounded-md px-4 py-2 hover:bg-green-600"
// //                 >
// //                   Edit
// //                 </button>
// //               </td>
// //             </tr>
// //           ))}
// //         </tbody>
// //       </table>

// //       <Modal
// //         isOpen={isModalOpen}
// //         onClose={() => setIsModalOpen(false)}
// //         onSave={handleSave}
// //         department={selectedDepartment}
// //         users={users}
// //       />
// //     </div>
// //   );
// // };

// // export default DepartmentsPage;
// 'use client';
// import { useState, useEffect } from 'react';

// // Mocked API function to fetch users (replace with actual API calls)
// const fetchUsers = async () => {
//   return [
//     { id: 1, name: 'User A' },
//     { id: 2, name: 'User B' },
//     { id: 3, name: 'User C' },
//   ];
// };

// // Mocked API function to scan tokens and retrieve beneficiary information
// const scanToken = async () => {
//   return {
//     beneficiaryName: 'John Doe',
//     details: 'Health assistance needed',
//   };
// };

// // Modal Component
// const Modal = ({
//   isOpen,
//   onClose,
//   onSave,
//   department,
//   users,
// }) => {
//   const [name, setName] = useState(department?.name || '');
//   const [description, setDescription] = useState(department?.description || '');
//   const [selectedUser, setSelectedUser] = useState(department?.userId || '');
//   const [status, setStatus] = useState(department?.status || '');
//   const [remarks, setRemarks] = useState(department?.remarks || '');
//   const [beneficiaryInfo, setBeneficiaryInfo] = useState(null);

//   useEffect(() => {
//     if (isOpen) {
//       setName(department?.name || '');
//       setDescription(department?.description || '');
//       setSelectedUser(department?.userId || '');
//       setStatus(department?.status || '');
//       setRemarks(department?.remarks || '');
//       setBeneficiaryInfo(null); // Reset beneficiary info on open
//     }
//   }, [isOpen, department]);

//   const handleScanToken = async () => {
//     const data = await scanToken();
//     setBeneficiaryInfo(data);
//   };

//   const handleSave = () => {
//     if (!name || !description || !selectedUser || !status) {
//       alert('All fields are required.');
//       return;
//     }
//     onSave({ name, description, userId: selectedUser, status, remarks });
//     onClose();
//   };

//   if (!isOpen) return null;

//   return (
//     <div
//       className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50"
//       onClick={onClose}
//     >
//       <div
//         className="bg-white rounded-lg p-6 w-full max-w-md shadow-lg"
//         onClick={(e) => e.stopPropagation()}
//       >
//         <h2 className="text-xl font-semibold mb-4">
//           {department ? 'Edit Department' : 'Add Department'}
//         </h2>
//         <div className="space-y-4">
//           <input
//             type="text"
//             value={name}
//             onChange={(e) => setName(e.target.value)}
//             placeholder="Name"
//             className="border border-gray-300 rounded-md p-2 w-full"
//           />
//           <textarea
//             value={description}
//             onChange={(e) => setDescription(e.target.value)}
//             placeholder="Description"
//             className="border border-gray-300 rounded-md p-2 w-full"
//           />
//           <select
//             value={selectedUser}
//             onChange={(e) => setSelectedUser(e.target.value)}
//             className="border border-gray-300 rounded-md p-2 w-full"
//           >
//             <option value="" disabled>
//               Select User
//             </option>
//             {users.map((user) => (
//               <option key={user.id} value={user.id}>
//                 {user.name}
//               </option>
//             ))}
//           </select>
//           <select
//             value={status}
//             onChange={(e) => setStatus(e.target.value)}
//             className="border border-gray-300 rounded-md p-2 w-full"
//           >
//             <option value="" disabled>
//               Select Status
//             </option>
//             <option value="In Progress">In Progress</option>
//             <option value="Completed">Completed</option>
//           </select>
//           <textarea
//             value={remarks}
//             onChange={(e) => setRemarks(e.target.value)}
//             placeholder="Remarks"
//             className="border border-gray-300 rounded-md p-2 w-full"
//           />
//           {beneficiaryInfo ? (
//             <div className="p-4 bg-gray-100 rounded-md">
//               <p>
//                 <strong>Beneficiary:</strong> {beneficiaryInfo.beneficiaryName}
//               </p>
//               <p>
//                 <strong>Details:</strong> {beneficiaryInfo.details}
//               </p>
//             </div>
//           ) : (
//             <button
//               onClick={handleScanToken}
//               className="bg-green-500 text-white rounded-md px-4 py-2 hover:bg-green-600"
//             >
//               Scan Token
//             </button>
//           )}
//           <div className="flex justify-end space-x-2">
//             <button
//               onClick={onClose}
//               className="bg-gray-500 text-white rounded-md px-4 py-2 hover:bg-gray-600"
//             >
//               Cancel
//             </button>
//             <button
//               onClick={handleSave}
//               className="bg-blue-500 text-white rounded-md px-4 py-2 hover:bg-blue-600"
//             >
//               Save
//             </button>
//           </div>
//         </div>
//       </div>
//     </div>
//   );
// };

// // Departments Page
// const DepartmentsPage = () => {
//   const [departments, setDepartments] = useState([]);
//   const [isModalOpen, setIsModalOpen] = useState(false);
//   const [selectedDepartment, setSelectedDepartment] = useState(null);
//   const [users, setUsers] = useState([]);

//   useEffect(() => {
//     fetchUsers().then(setUsers);
//   }, []);

//   const handleAdd = () => {
//     setSelectedDepartment(null);
//     setIsModalOpen(true);
//   };

//   const handleEdit = (department) => {
//     setSelectedDepartment(department);
//     setIsModalOpen(true);
//   };

//   const handleSave = (departmentData) => {
//     if (selectedDepartment) {
//       setDepartments((prev) =>
//         prev.map((dep) =>
//           dep.id === selectedDepartment.id ? { ...dep, ...departmentData } : dep
//         )
//       );
//     } else {
//       setDepartments((prev) => [
//         ...prev,
//         { id: prev.length + 1, ...departmentData },
//       ]);
//     }
//   };

//   return (
//     <div className="p-6">
//       <div className="flex justify-between items-center mb-4">
//         <h1 className="text-2xl font-semibold">Departments</h1>
//         <button
//           onClick={handleAdd}
//           className="bg-blue-500 text-white rounded-md px-4 py-2 hover:bg-blue-600"
//         >
//           Add Department
//         </button>
//       </div>

//       <table className="min-w-full border border-gray-200 rounded-lg overflow-hidden">
//         <thead className="bg-gray-200 text-gray-700">
//           <tr>
//             <th className="px-4 py-2 text-left">Name</th>
//             <th className="px-4 py-2 text-left">Description</th>
//             <th className="px-4 py-2 text-left">Status</th>
//             <th className="px-4 py-2 text-left">Actions</th>
//           </tr>
//         </thead>
//         <tbody>
//           {departments.map((department) => (
//             <tr key={department.id} className="border-b hover:bg-gray-50">
//               <td className="px-4 py-2">{department.name}</td>
//               <td className="px-4 py-2">{department.description}</td>
//               <td className="px-4 py-2">{department.status}</td>
//               <td className="px-4 py-2">
//                 <button
//                   onClick={() => handleEdit(department)}
//                   className="bg-green-500 text-white rounded-md px-4 py-2 hover:bg-green-600"
//                 >
//                   Edit
//                 </button>
//               </td>
//             </tr>
//           ))}
//         </tbody>
//       </table>

//       <Modal
//         isOpen={isModalOpen}
//         onClose={() => setIsModalOpen(false)}
//         onSave={handleSave}
//         department={selectedDepartment}
//         users={users}
//       />
//     </div>
//   );
// };

// export default DepartmentsPage;
"use client"

import { useState, useEffect } from "react"
import { useAuth } from "../../../../context/AuthContext"
import { api } from "../../../../utils/api.js"

export default function ManageDepartments() {
  const { user } = useAuth()
  const [departments, setDepartments] = useState([])
  const [newDepartment, setNewDepartment] = useState({ name: "", description: "" })

  useEffect(() => {
    if (user.role === "Admin") {
      api
        .get("/departments")
        .then((data) => setDepartments(data))
        .catch((error) => console.error("Error fetching departments:", error))
    }
  }, [user.role])

  const handleAddDepartment = async (e) => {
    e.preventDefault()
    try {
      const response = await api.post("/departments", newDepartment)
      setDepartments([...departments, response.department])
      setNewDepartment({ name: "", description: "" })
    } catch (error) {
      alert("Error adding department")
    }
  }

  if (user.role !== "Admin") {
    return <div>You do not have permission to access this page.</div>
  }

  return (
    <div>
      <h2 className="text-2xl font-bold mb-4">Manage Departments</h2>
      <form onSubmit={handleAddDepartment} className="mb-8 space-y-4">
        <div>
          <label htmlFor="name" className="block mb-1">
            Department Name
          </label>
          <input
            type="text"
            id="name"
            value={newDepartment.name}
            onChange={(e) => setNewDepartment({ ...newDepartment, name: e.target.value })}
            required
            className="w-full p-2 border rounded"
          />
        </div>
        <div>
          <label htmlFor="description" className="block mb-1">
            Description
          </label>
          <textarea
            id="description"
            value={newDepartment.description}
            onChange={(e) => setNewDepartment({ ...newDepartment, description: e.target.value })}
            className="w-full p-2 border rounded"
          ></textarea>
        </div>
        <button type="submit" className="w-full bg-green-600 text-white p-2 rounded">
          Add Department
        </button>
      </form>

      <h3 className="text-xl font-bold mb-2">Existing Departments</h3>
      <table className="w-full bg-white shadow-md rounded">
        <thead>
          <tr className="bg-gray-200 text-gray-600 uppercase text-sm leading-normal">
            <th className="py-3 px-6 text-left">Name</th>
            <th className="py-3 px-6 text-left">Description</th>
          </tr>
        </thead>
        <tbody className="text-gray-600 text-sm font-light">
          {departments.map((department) => (
            <tr key={department._id} className="border-b border-gray-200 hover:bg-gray-100">
              <td className="py-3 px-6 text-left whitespace-nowrap">{department.name}</td>
              <td className="py-3 px-6 text-left">{department.description}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  )
}

