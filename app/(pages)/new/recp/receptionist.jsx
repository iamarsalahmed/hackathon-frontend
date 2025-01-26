
// 'use client';

// import { useState, useRef } from 'react';
// import { QRCodeCanvas } from 'qrcode.react';
// import axios from 'axios'; // Importing axios

// export default function ReceptionistDashboard() {
//   const [beneficiary, setBeneficiary] = useState({
//     cnic: '',
//     name: '',
//     contact: '',
//     address: '',
//     purpose: '',
//   });

//   const [token, setToken] = useState({
//     department: '',
//     tokenNumber: '',
//     data: null,
//   });

//   const [sequence, setSequence] = useState({
//     Management: 1,
//     Sales: 1,
//     Marketing: 1,
//     Finance: 1,
//     HR: 1,
//     IT: 1,
//   });

//   const cardRef = useRef();

//   const handleInputChange = (e) => {
//     const { name, value } = e.target;
//     setBeneficiary({ ...beneficiary, [name]: value });
//   };

//   const handleTokenChange = (e) => {
//     const { name, value } = e.target;
//     setToken({ ...token, [name]: value });
//   };

//   const generateToken = () => {
//     if (!token.department) {
//       alert('Please select a department.');
//       return;
//     }

//     // Generate sequential token number
//     const currentSequence = sequence[token.department];
//     const formattedNumber = currentSequence.toString().padStart(3, '0'); // e.g., 001
//     const generatedTokenNumber = `${token.department.substring(0, 4).toUpperCase()}-${formattedNumber}`;

//     // Update sequence
//     setSequence({
//       ...sequence,
//       [token.department]: currentSequence + 1,
//     });

//     const tokenData = {
//       department: token.department,
//       tokenNumber: generatedTokenNumber,
//       ...beneficiary,
//     };

//     setToken({
//       ...token,
//       tokenNumber: generatedTokenNumber,
//       data: tokenData,
//     });

//     // Send data to the backend
//     sendToBackend(tokenData);
//   };

//   const sendToBackend = async (data) => {
//     try {
//       const response = await axios.post(
//         'https://saylani-management-production.up.railway.appapi/beneficiaries/',
//         data,
       
//       );

//       if (response.status === 200 || response.status === 201) {
//         alert('Token data sent to the backend successfully!');
//       } else {
//         alert('Failed to send data to the backend.');
//       }
//     } catch (error) {
//       console.error('Error:', error);
//       alert('Failed to send data to the backend.');
//     }
//   };

//   const printToken = () => {
//     if (cardRef.current) {
//       const printWindow = window.open('', '_blank');
//       printWindow.document.write(`
//         <html>
//           <head>
//             <title>Print Token</title>
//             <style>
//               body {
//                 font-family: Arial, sans-serif;
//                 padding: 20px;
//                 text-align: center;
//               }
//               .token-card {
//                 border: 1px solid #ccc;
//                 padding: 20px;
//                 border-radius: 10px;
//                 max-width: 400px;
//                 margin: auto;
//               }
//             </style>
//           </head>
//           <body>
//             ${cardRef.current.outerHTML}
//           </body>
//         </html>
//       `);
//       printWindow.document.close();
//       printWindow.print();
//     }
//   };

//   return (
//     <div className="min-h-screen bg-gray-100 p-8">
//       <h1 className="text-3xl font-bold text-center mb-8">Receptionist Dashboard</h1>

//       <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
//         {/* Register Beneficiary */}
//         <div className="bg-white shadow-lg rounded-lg p-6">
//           <h2 className="text-xl font-semibold mb-4">Register Beneficiary</h2>
//           <div className="grid grid-cols-1 gap-4">
//             <label>Enter CNIC</label>
//             <input
//               type="text"
//               name="cnic"
//               value={beneficiary.cnic}
//               onChange={handleInputChange}
//               placeholder="CNIC"
//               className="border border-gray-300 p-3 rounded w-full"
//             />
//             <label>Enter Name</label>
//             <input
//               type="text"
//               name="name"
//               value={beneficiary.name}
//               onChange={handleInputChange}
//               placeholder="Name"
//               className="border border-gray-300 p-3 rounded w-full"
//             />
//             <label>Contact</label>
//             <input
//               type="text"
//               name="contact"
//               value={beneficiary.contact}
//               onChange={handleInputChange}
//               placeholder="Contact"
//               className="border border-gray-300 p-3 rounded w-full"
//             />
//             <label>Address</label>
//             <input
//               type="text"
//               name="address"
//               value={beneficiary.address}
//               onChange={handleInputChange}
//               placeholder="Address"
//               className="border border-gray-300 p-3 rounded w-full"
//             />
//             <label>Purpose</label>
//             <input
//               type="text"
//               name="purpose"
//               value={beneficiary.purpose}
//               onChange={handleInputChange}
//               placeholder="Purpose"
//               className="border border-gray-300 p-3 rounded w-full"
//             />
//           </div>
//         </div>

//         {/* Assign Token */}
//         <div className="bg-white shadow-lg rounded-lg p-6">
//           <h2 className="text-xl font-semibold mb-4">Assign Token</h2>
//           <select
//             name="department"
//             value={token.department}
//             onChange={handleTokenChange}
//             className="border border-gray-300 p-3 rounded w-full"
//           >
//             <option value="">Select Department</option>
//             <option value="Management">Management</option>
//             <option value="Sales">Sales</option>
//             <option value="Marketing">Marketing</option>
//             <option value="Finance">Finance</option>
//             <option value="HR">HR</option>
//             <option value="IT">IT</option>
//           </select>
//           <button
//             onClick={generateToken}
//             className="bg-green-500 text-white px-4 py-2 rounded mt-4 w-full"
//           >
//             Generate Token
//           </button>
//         </div>
//       </div>

//       {/* Token Card */}
//       {token.data && (
//         <div
//           ref={cardRef}
//           id="tokenCard"
//           className="bg-white shadow-lg rounded-lg p-6 mt-8 text-center token-card"
//         >
//           <h2 className="text-xl font-semibold mb-4">Generated Token</h2>
//           <p>
//             <strong>Token Number:</strong> {token.tokenNumber}
//           </p>
//           <p>
//             <strong>Department:</strong> {token.department}
//           </p>
//           <p>
//             <strong>Beneficiary:</strong> {beneficiary.name} ({beneficiary.cnic})
//           </p>
//           <div className="flex justify-center my-4">
//             <QRCodeCanvas
//               value={JSON.stringify(token.data)}
//               size={150}
//               className="border border-gray-300 rounded"
//             />
//           </div>
//           <button
//             onClick={printToken}
//             className="bg-blue-500 text-white px-4 py-2 rounded mt-4"
//           >
//             Print Token
//           </button>
//         </div>
//       )}
//     </div>
//   );
// }
"use client"

import { useState } from "react"
import { useAuth } from "../../../../context/AuthContext"
import { api } from "../../../../utils/api"

export default function ScanToken() {
  const { user } = useAuth()
  const [tokenId, setTokenId] = useState("")
  const [beneficiaryData, setBeneficiaryData] = useState(null)
  const [newStatus, setNewStatus] = useState("")
  const [remarks, setRemarks] = useState("")

  const handleScan = async (e) => {
    e.preventDefault()
    try {
      const response = await api.get(`/tokens/${tokenId}`)
      setBeneficiaryData(response)
    } catch (error) {
      alert("Error fetching token details")
    }
  }

  const handleUpdateStatus = async (e) => {
    e.preventDefault()
    try {
      await api.patch(`/tokens/${tokenId}/status`, { status: newStatus })
      alert("Token status updated successfully")
      setBeneficiaryData({ ...beneficiaryData, status: newStatus })
      setNewStatus("")
    } catch (error) {
      alert("Error updating token status")
    }
  }

  if (user.role !== "Admin" && user.role !== "Staff") {
    return <div>You do not have permission to access this page.</div>
  }

  return (
    <div className="max-w-md mx-auto">
      <h2 className="text-2xl font-bold mb-4">Scan Token</h2>
      <form onSubmit={handleScan} className="space-y-4 mb-8">
        <div>
          <label htmlFor="tokenId" className="block mb-1">
            Token ID
          </label>
          <input
            type="text"
            id="tokenId"
            value={tokenId}
            onChange={(e) => setTokenId(e.target.value)}
            required
            className="w-full p-2 border rounded"
          />
        </div>
        <button type="submit" className="w-full bg-blue-600 text-white p-2 rounded">
          Scan Token
        </button>
      </form>

      {beneficiaryData && (
        <div className="bg-white p-4 rounded shadow">
          <h3 className="font-bold mb-2">Beneficiary Details</h3>
          <p>
            <strong>CNIC:</strong> {beneficiaryData.cnic}
          </p>
          <p>
            <strong>Name:</strong> {beneficiaryData.name}
          </p>
          <p>
            <strong>Purpose:</strong> {beneficiaryData.purpose}
          </p>
          <p>
            <strong>Department:</strong> {beneficiaryData.department}
          </p>
          <p>
            <strong>Status:</strong> {beneficiaryData.status}
          </p>

          <form onSubmit={handleUpdateStatus} className="mt-4 space-y-4">
            <div>
              <label htmlFor="newStatus" className="block mb-1">
                Update Status
              </label>
              <select
                id="newStatus"
                value={newStatus}
                onChange={(e) => setNewStatus(e.target.value)}
                required
                className="w-full p-2 border rounded"
              >
                <option value="">Select New Status</option>
                <option value="In Progress">In Progress</option>
                <option value="Completed">Completed</option>
              </select>
            </div>
            <div>
              <label htmlFor="remarks" className="block mb-1">
                Remarks
              </label>
              <textarea
                id="remarks"
                value={remarks}
                onChange={(e) => setRemarks(e.target.value)}
                className="w-full p-2 border rounded"
              ></textarea>
            </div>
            <button type="submit" className="w-full bg-green-600 text-white p-2 rounded">
              Update Status
            </button>
          </form>
        </div>
      )}
    </div>
  )
}

