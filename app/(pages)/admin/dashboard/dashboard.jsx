// 'use client';
// import { useEffect, useState } from "react";
// import { useRouter } from 'next/navigation';
// import axios from "axios";
// import Cookies from "js-cookie";








// export default function Dashboard() {
  
//     const router = useRouter();
//   const [isModalOpen, setIsModalOpen] = useState(false);
//   const [shopName, setShopName] = useState("");
//   const [shopDescription, setShopDescription] = useState("");
//   const [shopLocation, setShopLocation] = useState("");
//   const [shops, setShops] = useState([
//     { id: 1, name: 'Shop One', description: 'A cool shop with awesome products.', location: 'New York' },
//     { id: 2, name: 'Shop Two', description: 'Another amazing shop selling gadgets.', location: 'San Francisco' }
//   ]);
//   useEffect(() => {
//     // const verifyToken = async () => {
//     //   const token = Cookies.get('AuthToken');

//     //   // If no token, redirect to login
//     //   if (!token) {
//     //     router.push("/admin/login");
//     //     return;
//     //   }

//     //   try {
//     //     // Send the token to the backend for verification
//     //     const response = await axios.post(
//     //       "https://hackathon-backend-production-ad7c.up.railway.app/user/verify-token",
//     //       {}, // Body is empty as token is sent in headers
//     //       {
//     //         headers: {
//     //           Authorization: `Bearer ${token}`, // Send token in the Authorization header
//     //         },
//     //       }
//     //     );

//     //     if (!response.data.success) {
//     //       // If token is not valid, redirect to login
//     //       router.push("/admin/login");
//     //     }
//     //     // If token is valid, proceed further (no logs or additional actions)
//     //   } catch (error) {
//     //     // If there is any error, redirect to login silently
//     //     router.push("/admin/login");
//     //   }
//     // };

//     // verifyToken();
//   }, [router]);
//   // useEffect(() => {
//   //   const verifyToken = async () => {
//   //     const token = localStorage.getItem("AuthToken");

//   //     // If no token, redirect to login
//   //     if (!token) {
//   //       router.push("/login");
//   //       return;
//   //     }

//   //     try {
//   //       // Send the token to the backend for verification
//   //       const response = await axios.post(
//   //         "https://hackathon-backend-production-ad7c.up.railway.app/user/verify-token",
//   //         {}, // Body is empty as token is sent in headers
//   //         {
//   //           headers: {
//   //             Authorization: `Bearer ${token}`, // Send token in the Authorization header
//   //           },
//   //         }
//   //       );

//   //       if (response.data.success) {
//   //         console.log("Token verified:", response.data);
//   //         // Continue to the protected page
//   //       } else {
//   //         console.log("Invalid token:", response.data.message);
//   //         router.push("/login"); // Redirect to login
//   //       }
//   //     } catch (error) {
//   //       console.error("Error verifying token:", error);
//   //       router.push("/login"); // Redirect to login in case of error
//   //     }
//   //   };

//   //   verifyToken();
//   // }, [router]);

//   const openModal = () => {
//     setIsModalOpen(true);
//   };

//   const closeModal = () => {
//     setIsModalOpen(false);
//   };

//   const handleAddShop = () => {
//     setShops([
//       ...shops,
//       { id: shops.length + 1, name: shopName, description: shopDescription, location: shopLocation }
//     ]);
//     closeModal(); // Close modal after adding shop
//     setShopName("");
//     setShopDescription("");
//     setShopLocation("");
//   };

//   const handleEditShop = (id) => {
//     const shopToEdit = shops.find(shop => shop.id === id);
//     setShopName(shopToEdit.name);
//     setShopDescription(shopToEdit.description);
//     setShopLocation(shopToEdit.location);
//     openModal();
//   };

//   return (
//     <div className="min-h-screen bg-gray-100 p-8">
//       <h1 className="text-3xl font-bold text-center text-gray-800 mb-8">My Shops Dashboard</h1>

//       {/* Add Shop Button */}
//       <div className="text-center mb-8">
//         <button
//           onClick={openModal}
//           className="bg-blue-600 text-white px-6 py-2 rounded-lg hover:bg-blue-700 transition duration-300"
//         >
//           Add Shop
//         </button>
//       </div>

//       {/* Shop Cards */}
//       <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
//         {shops.map(shop => (
//           <div key={shop.id} className="bg-white rounded-lg shadow-lg p-6">
//             <h2 className="text-xl font-semibold text-gray-800">{shop.name}</h2>
//             <p className="text-sm text-gray-600 mt-2">{shop.description}</p>
//             <p className="text-sm text-gray-500 mt-2">{shop.location}</p>
//             <div className="flex justify-between items-center mt-4">
//               <button
//                 onClick={() => handleEditShop(shop.id)}
//                 className="bg-yellow-500 text-white px-4 py-2 rounded-lg hover:bg-yellow-600 transition duration-300"
//               >
//                 Edit
//               </button>
//               <button
//                 onClick={() => router.push(`/dashboard/${shop.id}`)}
//                 className="bg-green-500 text-white px-4 py-2 rounded-lg hover:bg-green-600 transition duration-300"
//               >
//                 Visit Shop
//               </button>
//             </div>
//           </div>
//         ))}
//       </div>

//       {/* Modal for Adding/Editing Shop */}
//       {isModalOpen && (
//         <div className="fixed inset-0 bg-gray-800 bg-opacity-50 flex items-center justify-center">
//           <div className="bg-white p-8 rounded-lg shadow-lg max-w-lg w-full">
//             <h2 className="text-2xl font-semibold text-gray-800 mb-4">{shopName ? "Edit Shop" : "Add New Shop"}</h2>

//             <div className="mb-4">
//               <label className="block text-gray-700">Shop Name</label>
//               <input
//                 type="text"
//                 value={shopName}
//                 onChange={(e) => setShopName(e.target.value)}
//                 className="w-full px-4 py-2 mt-1 border rounded-lg focus:ring-blue-500 focus:border-blue-500"
//                 placeholder="Enter shop name"
//               />
//             </div>

//             <div className="mb-4">
//               <label className="block text-gray-700">Shop Description</label>
//               <textarea
//                 value={shopDescription}
//                 onChange={(e) => setShopDescription(e.target.value)}
//                 className="w-full px-4 py-2 mt-1 border rounded-lg focus:ring-blue-500 focus:border-blue-500"
//                 placeholder="Enter shop description"
//               />
//             </div>

//             <div className="mb-4">
//               <label className="block text-gray-700">Shop Location</label>
//               <input
//                 type="text"
//                 value={shopLocation}
//                 onChange={(e) => setShopLocation(e.target.value)}
//                 className="w-full px-4 py-2 mt-1 border rounded-lg focus:ring-blue-500 focus:border-blue-500"
//                 placeholder="Enter shop location"
//               />
//             </div>

//             <div className="flex justify-between">
//               <button
//                 onClick={closeModal}
//                 className="bg-gray-500 text-white px-4 py-2 rounded-lg hover:bg-gray-600 transition duration-300"
//               >
//                 Cancel
//               </button>
//               <button
//                 onClick={handleAddShop}
//                 className="bg-blue-600 text-white px-4 py-2 rounded-lg hover:bg-blue-700 transition duration-300"
//               >
//                 {shopName ? "Save Changes" : "Add Shop"}
//               </button>
//             </div>
//           </div>
//         </div>
//       )}
//     </div>
//   );
// }
'use client';

import { useState } from 'react';
import { FaCog, FaPlus, FaTrashAlt } from 'react-icons/fa';

export default function AdminDashboard() {
  const [departments, setDepartments] = useState([
    {
      id: 1,
      name: 'Department A',
      totalTokens: 100,
      pending: 20,
      inProgress: 50,
      completed: 30,
    },
    {
      id: 2,
      name: 'Department B',
      totalTokens: 80,
      pending: 10,
      inProgress: 40,
      completed: 30,
    },
  ]);

  const [newDepartmentName, setNewDepartmentName] = useState('');

  const handleAddDepartment = () => {
    if (!newDepartmentName) return;

    const newDepartment = {
      id: departments.length + 1,
      name: newDepartmentName,
      totalTokens: 0,
      pending: 0,
      inProgress: 0,
      completed: 0,
    };

    setDepartments([...departments, newDepartment]);
    setNewDepartmentName('');
  };

  const handleDeleteDepartment = (id) => {
    setDepartments(departments.filter((dept) => dept.id !== id));
  };

  return (
    <div className="min-h-screen bg-gray-100 p-8">
      <h1 className="text-3xl font-bold text-center mb-8">Admin Dashboard</h1>

      {/* Department Management Section */}
      <div className="bg-white shadow-lg rounded-lg p-6 mb-8">
        <h2 className="text-xl font-semibold mb-4">Manage Departments</h2>
        <div className="flex justify-between mb-4">
          <input
            type="text"
            className="border p-2 rounded"
            placeholder="New Department Name"
            value={newDepartmentName}
            onChange={(e) => setNewDepartmentName(e.target.value)}
          />
          <button
            onClick={handleAddDepartment}
            className="bg-blue-500 text-white px-4 py-2 rounded flex items-center"
          >
            <FaPlus className="mr-2" />
            Add Department
          </button>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6">
          {departments.map((department) => (
            <div
              key={department.id}
              className="bg-gray-50 p-4 rounded-lg shadow-md flex flex-col justify-between"
            >
              <div className="flex justify-between items-center mb-4">
                <h3 className="text-lg font-semibold">{department.name}</h3>
                <button
                  onClick={() => handleDeleteDepartment(department.id)}
                  className="text-red-500"
                >
                  <FaTrashAlt />
                </button>
              </div>
              <div className="flex flex-col mb-4">
                <p><strong>Total Tokens:</strong> {department.totalTokens}</p>
                <p><strong>Pending:</strong> {department.pending}</p>
                <p><strong>In Progress:</strong> {department.inProgress}</p>
                <p><strong>Completed:</strong> {department.completed}</p>
              </div>
              <button className="bg-yellow-500 text-white px-4 py-2 rounded mt-auto">
                View Department
              </button>
            </div>
          ))}
        </div>
      </div>

      {/* Real-Time Statistics */}
      <div className="bg-white shadow-lg rounded-lg p-6 mb-8">
        <h2 className="text-xl font-semibold mb-4">System Overview</h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6">
          <div className="bg-gray-50 p-4 rounded-lg shadow-md">
            <h3 className="text-lg font-semibold">Total Tokens</h3>
            <p>{departments.reduce((total, dept) => total + dept.totalTokens, 0)}</p>
          </div>
          <div className="bg-gray-50 p-4 rounded-lg shadow-md">
            <h3 className="text-lg font-semibold">Pending Tokens</h3>
            <p>{departments.reduce((total, dept) => total + dept.pending, 0)}</p>
          </div>
          <div className="bg-gray-50 p-4 rounded-lg shadow-md">
            <h3 className="text-lg font-semibold">In Progress Tokens</h3>
            <p>{departments.reduce((total, dept) => total + dept.inProgress, 0)}</p>
          </div>
          <div className="bg-gray-50 p-4 rounded-lg shadow-md">
            <h3 className="text-lg font-semibold">Completed Tokens</h3>
            <p>{departments.reduce((total, dept) => total + dept.completed, 0)}</p>
          </div>
        </div>
      </div>

      {/* Token Management Section */}
      <div className="bg-white shadow-lg rounded-lg p-6 mb-8">
        <h2 className="text-xl font-semibold mb-4">Manage Tokens</h2>
        <button className="bg-blue-500 text-white px-4 py-2 rounded">
          View All Tokens
        </button>
      </div>

      {/* Audit Logs */}
      <div className="bg-white shadow-lg rounded-lg p-6 mb-8">
        <h2 className="text-xl font-semibold mb-4">Audit Logs</h2>
        <div className="max-h-64 overflow-y-auto">
          <ul>
            <li className="border-b py-2">User added a new department: Department C</li>
            <li className="border-b py-2">Token 12345 status updated to In Progress</li>
            <li className="border-b py-2">User deleted Department B</li>
            {/* More log entries */}
          </ul>
        </div>
      </div>
    </div>
  );
}
