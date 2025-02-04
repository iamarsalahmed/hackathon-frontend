// 'use client';

// import { useState, Component  } from 'react';
// import { QRCodeCanvas } from 'qrcode.react';
// // import QrReader from 'react-qr-scanner'

// export default function DepartmentUserDashboard() {
//   const [scannedToken, setScannedToken] = useState(null);
//   const [tokens, setTokens] = useState([]);
//   const [statistics, setStatistics] = useState({
//     total: 0,
//     pending: 0,
//     inProgress: 0,
//     completed: 0,
//   });
//   const [remarks, setRemarks] = useState("");

//   const handleScan = (data) => {
//     if (data) {
//       const tokenData = JSON.parse(data);
//       setScannedToken(tokenData);
//     }
//   };

//   const handleError = (err) => {
//     console.error("QR Scanner Error:", err);
//   };

//   const updateTokenStatus = (status) => {
//     if (!scannedToken) return;

//     // Update the token status
//     const updatedTokens = tokens.map((token) =>
//       token.tokenNumber === scannedToken.tokenNumber
//         ? { ...token, status, remarks }
//         : token
//     );
//     setTokens(updatedTokens);

//     // Update statistics
//     const newStats = {
//       ...statistics,
//       pending: updatedTokens.filter((t) => t.status === "Pending").length,
//       inProgress: updatedTokens.filter((t) => t.status === "In Progress").length,
//       completed: updatedTokens.filter((t) => t.status === "Completed").length,
//     };
//     setStatistics(newStats);

//     setRemarks(""); // Clear remarks
//     setScannedToken(null); // Reset scanned token
//   };

//   return (
//     <div className="min-h-screen bg-gray-100 p-8">
//       <h1 className="text-3xl font-bold text-center mb-8">Department User Dashboard</h1>

//       {/* Scan Token */}
//       {/* <div className="bg-white shadow-lg rounded-lg p-6 mb-8">
//         <h2 className="text-xl font-semibold mb-4">Scan Token</h2>
//         <QrReader
//           delay={300}
//           onError={handleError}
//           onScan={handleScan}
//           style={{ width: "100%" }}
//         />
//         {scannedToken && (
//           <div className="mt-4">
//             <h3 className="text-lg font-bold">Scanned Token Details:</h3>
//             <p><strong>Token Number:</strong> {scannedToken.tokenNumber}</p>
//             <p><strong>Beneficiary Name:</strong> {scannedToken.name}</p>
//             <p><strong>Contact:</strong> {scannedToken.contact}</p>
//             <p><strong>Purpose:</strong> {scannedToken.purpose}</p>
//             <p><strong>Address:</strong> {scannedToken.address}</p>

//             <textarea
//               placeholder="Add remarks or actions taken..."
//               value={remarks}
//               onChange={(e) => setRemarks(e.target.value)}
//               className="w-full mt-4 border border-gray-300 p-3 rounded"
//             />

//             <div className="mt-4 flex gap-4">
//               <button
//                 onClick={() => updateTokenStatus("In Progress")}
//                 className="bg-yellow-500 text-white px-4 py-2 rounded"
//               >
//                 Mark In Progress
//               </button>
//               <button
//                 onClick={() => updateTokenStatus("Completed")}
//                 className="bg-green-500 text-white px-4 py-2 rounded"
//               >
//                 Mark Completed
//               </button>
//             </div>
//           </div>
//         )}
//       </div> */}

//       {/* Token List */}
//       <div className="bg-white shadow-lg rounded-lg p-6">
//         <h2 className="text-xl font-semibold mb-4">Today's Tokens</h2>
//         <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
//           {tokens.map((token, index) => (
//             <div key={index} className="border p-4 rounded shadow">
//               <p><strong>Token Number:</strong> {token.tokenNumber}</p>
//               <p><strong>Status:</strong> {token.status}</p>
//               <p><strong>Remarks:</strong> {token.remarks || "N/A"}</p>
//             </div>
//           ))}
//         </div>
//       </div>

//       {/* Statistics */}
//       <div className="bg-white shadow-lg rounded-lg p-6 mt-8">
//         <h2 className="text-xl font-semibold mb-4">Statistics</h2>
//         <p><strong>Total Tokens:</strong> {statistics.total}</p>
//         <p><strong>Pending:</strong> {statistics.pending}</p>
//         <p><strong>In Progress:</strong> {statistics.inProgress}</p>
//         <p><strong>Completed:</strong> {statistics.completed}</p>
//       </div>
//     </div>
//   );
// }
'use client';


import React, { useState, useEffect } from "react";
import axios from "axios";

const BeneficiariesTable = () => {
  const [beneficiaries, setBeneficiaries] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState("");

  useEffect(() => {
    // Fetch beneficiaries
    const fetchBeneficiaries = async () => {
      try {
        const response = await axios.get("https://saylani-management-production.up.railway.appapi/beneficiaries/"); // Update API endpoint if needed
        setBeneficiaries(response.data);
        setLoading(false);
      } catch (err) {
        setError("Failed to fetch beneficiaries");
        setLoading(false);
      }
    };

    fetchBeneficiaries();
  }, []);

  if (loading) {
    return <p>Loading...</p>;
  }

  if (error) {
    return <p className="text-red-500">{error}</p>;
  }

  return (
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
  );
};

export default BeneficiariesTable;
