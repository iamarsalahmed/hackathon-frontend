// 'use client'

// import { useState } from 'react';

// export default function BeneficiaryPage() {
//   const [beneficiaries, setBeneficiaries] = useState([]);
//   const [showAddBeneficiaryModal, setShowAddBeneficiaryModal] = useState(false);
//   const [showAddRemarksModal, setShowAddRemarksModal] = useState(false);
//   const [newBeneficiary, setNewBeneficiary] = useState({
//     cnic: '',
//     name: '',
//     phone: '',
//     address: '',
//     purpose: '',
//     department: '',
//     status: 'Pending',
//   });
//   const [remarks, setRemarks] = useState([{ action: '', remark: '' }]);

//   // const handleAddBeneficiary = () => {
//   //   setBeneficiaries([...beneficiaries, { ...newBeneficiary, token: Math.random().toString(36).substring(2, 9) }]);
//   //   setShowAddBeneficiaryModal(false);
//   //   setNewBeneficiary({
//   //     cnic: '',
//   //     name: '',
//   //     phone: '',
//   //     address: '',
//   //     purpose: '',
//   //     department: '',
//   //     status: 'Pending',
//   //   });
//   // };

//   const handleAddBeneficiary = async () => {
//     // Prepare the beneficiary data with a token
//     const beneficiaryData = {
//       ...newBeneficiary,
//       token: Math.random().toString(36).substring(2, 9),
//     };

//     try {
//       // Send the data to the backend
//       const response = await fetch('https://saylani-management-production.up.railway.appapi/beneficiaries/createBeneficiary', {
//         method: 'POST',
//         headers: {
//           'Content-Type': 'application/json',
//         },
//         body: JSON.stringify(beneficiaryData),
//       });

//       if (!response.ok) {
//         throw new Error('Failed to add beneficiary');
//       }

//       // Parse the response if needed (optional, depending on your backend response)
//       const result = await response.json();
//       console.log('Beneficiary added successfully', result);

//       // Update the local state with the new beneficiary data
//       setBeneficiaries([...beneficiaries, beneficiaryData]);

//       // Close the modal and reset the form
//       setShowAddBeneficiaryModal(false);
//       setNewBeneficiary({
//         cnic: '',
//         name: '',
//         phone: '',
//         address: '',
//         purpose: '',
//         department: '',
//         status: 'Pending',
//       });
//     } catch (error) {
//       console.error('Error adding beneficiary:', error);
//       // You can also show an error message to the user here
//     }
//   };

//   const handleAddRemarks = () => {
//     // Handle adding remarks logic (can be linked with the beneficiaries data)
//     setShowAddRemarksModal(false);
//   };

//   const handleAddRemarkInput = () => {
//     setRemarks([...remarks, { action: '', remark: '' }]);
//   };

//   const handleRemarkChange = (index, field, value) => {
//     const updatedRemarks = [...remarks];
//     updatedRemarks[index][field] = value;
//     setRemarks(updatedRemarks);
//   };

//   return (
//     <div className="min-h-screen bg-gray-100 p-8">
//       <h1 className="text-3xl font-bold text-center mb-8">Beneficiary Management</h1>

//       {/* Button to trigger Add Beneficiary Modal */}
//       <div className="flex justify-center mb-6">
//         <button
//           onClick={() => setShowAddBeneficiaryModal(true)}
//           className="bg-blue-500 text-white p-3 rounded shadow-lg hover:bg-blue-700"
//         >
//           Add Beneficiary
//         </button>
//       </div>

//       {/* Beneficiary Table */}
//       <div className="overflow-x-auto bg-white shadow-lg rounded-lg p-6 mb-8">
//         <table className="min-w-full table-auto">
//           <thead>
//             <tr className="border-b">
//               <th className="px-6 py-3 text-left text-sm font-medium text-gray-500">CNIC</th>
//               <th className="px-6 py-3 text-left text-sm font-medium text-gray-500">Name</th>
//               <th className="px-6 py-3 text-left text-sm font-medium text-gray-500">Phone</th>
//               <th className="px-6 py-3 text-left text-sm font-medium text-gray-500">Address</th>
//               <th className="px-6 py-3 text-left text-sm font-medium text-gray-500">Purpose</th>
//               <th className="px-6 py-3 text-left text-sm font-medium text-gray-500">Token</th>
//               <th className="px-6 py-3 text-left text-sm font-medium text-gray-500">Department</th>
//               <th className="px-6 py-3 text-left text-sm font-medium text-gray-500">Status</th>
//             </tr>
//           </thead>
//           <tbody>
//             {beneficiaries.map((beneficiary, index) => (
//               <tr key={index} className="border-b">
//                 <td className="px-6 py-4 text-sm text-gray-900">{beneficiary.cnic}</td>
//                 <td className="px-6 py-4 text-sm text-gray-900">{beneficiary.name}</td>
//                 <td className="px-6 py-4 text-sm text-gray-900">{beneficiary.phone}</td>
//                 <td className="px-6 py-4 text-sm text-gray-900">{beneficiary.address}</td>
//                 <td className="px-6 py-4 text-sm text-gray-900">{beneficiary.purpose}</td>
//                 <td className="px-6 py-4 text-sm text-gray-900">{beneficiary.token}</td>
//                 <td className="px-6 py-4 text-sm text-gray-900">{beneficiary.department}</td>
//                 <td className="px-6 py-4 text-sm text-gray-900">{beneficiary.status}</td>
//               </tr>
//             ))}
//           </tbody>
//         </table>
//       </div>

//       {/* Add Beneficiary Modal */}
//       {showAddBeneficiaryModal && (
//         <div className="fixed inset-0 bg-gray-500 bg-opacity-75 flex justify-center items-center">
//           <div className="bg-white p-6 rounded shadow-lg w-1/2">
//             <h3 className="text-2xl font-semibold mb-4">Add Beneficiary</h3>
//             <form>
//               <div className="mb-4">
//                 <label className="block text-sm font-medium text-gray-700">CNIC</label>
//                 <input
//                   type="text"
//                   value={newBeneficiary.cnic}
//                   onChange={(e) => setNewBeneficiary({ ...newBeneficiary, cnic: e.target.value })}
//                   className="mt-2 w-full p-2 border border-gray-300 rounded"
//                 />
//               </div>
//               <div className="mb-4">
//                 <label className="block text-sm font-medium text-gray-700">Name</label>
//                 <input
//                   type="text"
//                   value={newBeneficiary.name}
//                   onChange={(e) => setNewBeneficiary({ ...newBeneficiary, name: e.target.value })}
//                   className="mt-2 w-full p-2 border border-gray-300 rounded"
//                 />
//               </div>
//               <div className="mb-4">
//                 <label className="block text-sm font-medium text-gray-700">Phone</label>
//                 <input
//                   type="text"
//                   value={newBeneficiary.phone}
//                   onChange={(e) => setNewBeneficiary({ ...newBeneficiary, phone: e.target.value })}
//                   className="mt-2 w-full p-2 border border-gray-300 rounded"
//                 />
//               </div>
//               <div className="mb-4">
//                 <label className="block text-sm font-medium text-gray-700">Address</label>
//                 <input
//                   type="text"
//                   value={newBeneficiary.address}
//                   onChange={(e) => setNewBeneficiary({ ...newBeneficiary, address: e.target.value })}
//                   className="mt-2 w-full p-2 border border-gray-300 rounded"
//                 />
//               </div>
//               <div className="mb-4">
//                 <label className="block text-sm font-medium text-gray-700">Purpose</label>
//                 <input
//                   type="text"
//                   value={newBeneficiary.purpose}
//                   onChange={(e) => setNewBeneficiary({ ...newBeneficiary, purpose: e.target.value })}
//                   className="mt-2 w-full p-2 border border-gray-300 rounded"
//                 />
//               </div>
//               <div className="mb-4">
//                 <label className="block text-sm font-medium text-gray-700">Department</label>
//                 <input
//                   type="text"
//                   value={newBeneficiary.department}
//                   onChange={(e) => setNewBeneficiary({ ...newBeneficiary, department: e.target.value })}
//                   className="mt-2 w-full p-2 border border-gray-300 rounded"
//                 />
//               </div>
//               <div className="mb-4">
//                 <label className="block text-sm font-medium text-gray-700">Status</label>
//                 <select
//                   value={newBeneficiary.status}
//                   onChange={(e) => setNewBeneficiary({ ...newBeneficiary, status: e.target.value })}
//                   className="mt-2 w-full p-2 border border-gray-300 rounded"
//                 >
//                   <option value="Pending">Pending</option>
//                   <option value="In Progress">In Progress</option>
//                   <option value="Completed">Completed</option>
//                 </select>
//               </div>
//               <div className="flex justify-between">
//                 <button
//                   type="button"
//                   onClick={() => setShowAddBeneficiaryModal(false)}
//                   className="bg-gray-500 text-white px-4 py-2 rounded"
//                 >
//                   Cancel
//                 </button>
//                 <button
//                   type="button"
//                   onClick={handleAddBeneficiary}
//                   className="bg-blue-500 text-white px-4 py-2 rounded"
//                 >
//                   Add Beneficiary
//                 </button>
//               </div>
//             </form>

//             {/* Add Remarks Button */}
//             <div className="mt-6">
//               <button
//                 onClick={() => setShowAddRemarksModal(true)}
//                 className="bg-green-500 text-white px-4 py-2 rounded"
//               >
//                 Add Remarks
//               </button>
//             </div>
//           </div>
//         </div>
//       )}

//       {/* Add Remarks Modal */}
//       {showAddRemarksModal && (
//         <div className="fixed inset-0 bg-gray-500 bg-opacity-75 flex justify-center items-center">
//           <div className="bg-white p-6 rounded shadow-lg w-1/2">
//             <h3 className="text-2xl font-semibold mb-4">Add Remarks</h3>

//             {remarks.map((remark, index) => (
//               <div key={index} className="mb-4">
//                 <div className="flex justify-between">
//                   <input
//                     type="text"
//                     value={remark.action}
//                     onChange={(e) => handleRemarkChange(index, 'action', e.target.value)}
//                     placeholder="Action"
//                     className="w-1/2 p-2 border border-gray-300 rounded"
//                   />
//                   <input
//                     type="text"
//                     value={remark.remark}
//                     onChange={(e) => handleRemarkChange(index, 'remark', e.target.value)}
//                     placeholder="Remark"
//                     className="w-1/2 p-2 border border-gray-300 rounded"
//                   />
//                 </div>
//               </div>
//             ))}

//             <div className="flex justify-between">
//               <button
//                 type="button"
//                 onClick={handleAddRemarkInput}
//                 className="bg-yellow-500 text-white px-4 py-2 rounded"
//               >
//                 + Add More Remarks
//               </button>
//               <button
//                 type="button"
//                 onClick={handleAddRemarks}
//                 className="bg-blue-500 text-white px-4 py-2 rounded"
//               >
//                 Save Remarks
//               </button>
//             </div>
//           </div>
//         </div>
//       )}
//     </div>
//   );
// }
'use client'

import { useState, useEffect } from 'react';
import axios from "axios"

export default function BeneficiaryPage() {
  const [beneficiaries, setBeneficiaries] = useState([]);
  const [showAddBeneficiaryModal, setShowAddBeneficiaryModal] = useState(false);
  const [showAddRemarksModal, setShowAddRemarksModal] = useState(false);
  const [newBeneficiary, setNewBeneficiary] = useState({
    cnic: '',
    name: '',
    phone: '',
    address: '',
    purpose: '',
    department: '',
    status: 'Pending',
  });
  const [remarks, setRemarks] = useState([{ action: '', remark: '' }]);

  // Fetch beneficiaries from the backend when the component mounts
  useEffect(() => {
    const fetchBeneficiaries = async () => {
      try {
        const response = await axios.get('https://saylani-management-production.up.railway.appapi/beneficiaries/');
        setBeneficiaries(response.data); // Axios response data is directly in 'data'
      } catch (error) {
        console.error('Error fetching beneficiaries:', error);
      }
    };
    fetchBeneficiaries();
  }, []);

  // const handleAddBeneficiary = async () => {
  //   // Prepare the beneficiary data with a token
  //   const beneficiaryData = {
  //     ...newBeneficiary,
  //     token: Math.random().toString(36).substring(2, 9),
  //   };

  //   try {
  //     // Send the data to the backend
  //     const response = await fetch('https://saylani-management-production.up.railway.appapi/beneficiaries/createBeneficiary', {
  //       method: 'POST',
  //       headers: {
  //         'Content-Type': 'application/json',
  //       },
  //       body: JSON.stringify(beneficiaryData),
  //     });

  //     if (!response.ok) {
  //       throw new Error('Failed to add beneficiary');
  //     }

  //     // Parse the response if needed (optional, depending on your backend response)
  //     const result = await response.json();
  //     console.log('Beneficiary added successfully', result);

  //     // Update the local state with the new beneficiary data
  //     setBeneficiaries([...beneficiaries, beneficiaryData]);

  //     // Close the modal and reset the form
  //     setShowAddBeneficiaryModal(false);
  //     setNewBeneficiary({
  //       cnic: '',
  //       name: '',
  //       phone: '',
  //       address: '',
  //       purpose: '',
  //       department: '',
  //       status: 'Pending',
  //     });
  //   } catch (error) {
  //     console.error('Error adding beneficiary:', error);
  //     // You can also show an error message to the user here
  //   }
  // };
  const handleAddBeneficiary = async () => {
    // Prepare the beneficiary data with a token
    const beneficiaryData = {
      ...newBeneficiary,
      token: Math.random().toString(36).substring(2, 9),
    };

    try {
      // Send the data to the backend using Axios
      const response = await axios.post('https://saylani-management-production.up.railway.appapi/beneficiaries/', beneficiaryData, {
        headers: {
          'Content-Type': 'application/json',
        },
      });

      // Check the response status
      if (response.status !== 200) {
        throw new Error('Failed to add beneficiary');
      }

      console.log('Beneficiary added successfully', response.data);

      // Update the local state with the new beneficiary data
      setBeneficiaries([...beneficiaries, beneficiaryData]);

      // Close the modal and reset the form
      setShowAddBeneficiaryModal(false);
      setNewBeneficiary({
        cnic: '',
        name: '',
        phone: '',
        address: '',
        purpose: '',
        department: '',
        status: 'Pending',
      });
    } catch (error) {
      console.error('Error adding beneficiary:', error);
      // You can also show an error message to the user here
    }
  };
  const handleAddRemarks = () => {
    // Handle adding remarks logic (can be linked with the beneficiaries data)
    setShowAddRemarksModal(false);
  };

  const handleAddRemarkInput = () => {
    setRemarks([...remarks, { action: '', remark: '' }]);
  };

  const handleRemarkChange = (index, field, value) => {
    const updatedRemarks = [...remarks];
    updatedRemarks[index][field] = value;
    setRemarks(updatedRemarks);
  };

  return (
    <div className="min-h-screen bg-gray-100 p-8">
      <h1 className="text-3xl font-bold text-center mb-8">Beneficiary Management</h1>

      {/* Button to trigger Add Beneficiary Modal */}
      <div className="flex justify-center mb-6">
        <button
          onClick={() => setShowAddBeneficiaryModal(true)}
          className="bg-blue-500 text-white p-3 rounded shadow-lg hover:bg-blue-700"
        >
          Add Beneficiary
        </button>
      </div>

      {/* Beneficiary Table */}
      <div className="overflow-x-auto bg-white shadow-lg rounded-lg p-6 mb-8">
        <table className="min-w-full table-auto">
          <thead>
            <tr className="border-b">
              <th className="px-6 py-3 text-left text-sm font-medium text-gray-500">CNIC</th>
              <th className="px-6 py-3 text-left text-sm font-medium text-gray-500">Name</th>
              <th className="px-6 py-3 text-left text-sm font-medium text-gray-500">Phone</th>
              <th className="px-6 py-3 text-left text-sm font-medium text-gray-500">Address</th>
              <th className="px-6 py-3 text-left text-sm font-medium text-gray-500">Purpose</th>
              <th className="px-6 py-3 text-left text-sm font-medium text-gray-500">Token</th>
              <th className="px-6 py-3 text-left text-sm font-medium text-gray-500">Department</th>
              <th className="px-6 py-3 text-left text-sm font-medium text-gray-500">Status</th>
            </tr>
          </thead>
          <tbody>
            {beneficiaries.map((beneficiary, index) => (
              <tr key={index} className="border-b">
                <td className="px-6 py-4 text-sm text-gray-900">{beneficiary.cnic}</td>
                <td className="px-6 py-4 text-sm text-gray-900">{beneficiary.name}</td>
                <td className="px-6 py-4 text-sm text-gray-900">{beneficiary.phone}</td>
                <td className="px-6 py-4 text-sm text-gray-900">{beneficiary.address}</td>
                <td className="px-6 py-4 text-sm text-gray-900">{beneficiary.purpose}</td>
                <td className="px-6 py-4 text-sm text-gray-900">{beneficiary.token}</td>
                <td className="px-6 py-4 text-sm text-gray-900">{beneficiary.department}</td>
                <td className="px-6 py-4 text-sm text-gray-900">{beneficiary.status}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>

      {/* Add Beneficiary Modal */}
      {showAddBeneficiaryModal && (
        <div className="fixed inset-0 bg-gray-500 bg-opacity-75 flex justify-center items-center">
          <div className="bg-white p-6 rounded shadow-lg w-1/2">
            <h3 className="text-2xl font-semibold mb-4">Add Beneficiary</h3>
            <form>
              <div className="mb-4">
                <label className="block text-sm font-medium text-gray-700">CNIC</label>
                <input
                  type="number"
                  value={newBeneficiary.cnic}
                  onChange={(e) => setNewBeneficiary({ ...newBeneficiary, cnic: e.target.value })}
                  className="mt-2 w-full p-2 border border-gray-300 rounded"
                />
              </div>
              <div className="mb-4">
                <label className="block text-sm font-medium text-gray-700">Name</label>
                <input
                  type="text"
                  value={newBeneficiary.name}
                  onChange={(e) => setNewBeneficiary({ ...newBeneficiary, name: e.target.value })}
                  className="mt-2 w-full p-2 border border-gray-300 rounded"
                />
              </div>
              <div className="mb-4">
                <label className="block text-sm font-medium text-gray-700">Phone</label>
                <input
                  type="number"
                  value={newBeneficiary.phone}
                  onChange={(e) => setNewBeneficiary({ ...newBeneficiary, phone: e.target.value })}
                  className="mt-2 w-full p-2 border border-gray-300 rounded"
                />
              </div>
              <div className="mb-4">
                <label className="block text-sm font-medium text-gray-700">Address</label>
                <input
                  type="text"
                  value={newBeneficiary.address}
                  onChange={(e) => setNewBeneficiary({ ...newBeneficiary, address: e.target.value })}
                  className="mt-2 w-full p-2 border border-gray-300 rounded"
                />
              </div>
              {/* <div className="mb-4">
                <label className="block text-sm font-medium text-gray-700">Purpose</label>
                <select
                  value={newBeneficiary.purpose}
                  onChange={(e) => setNewBeneficiary({ ...newBeneficiary, purpose: e.target.value })}
                  className="mt-2 w-full p-2 border border-gray-300 rounded"
                >
                  <option value="Financial Aid">Financial Aid</option>
                  <option value="Medical Assistance">Medical Assistance</option>
                  <option value="Education Support">Education Support</option>
                </select>
              </div> */}
              <div className="mb-4">
                <label className="block text-sm font-medium text-gray-700">Purpose</label>
                <input
                  type="text"
                  value={newBeneficiary.purpose}
                  onChange={(e) => setNewBeneficiary({ ...newBeneficiary, purpose: e.target.value })}
                  className="mt-2 w-full p-2 border border-gray-300 rounded"
                />
              </div>
              <div className="mb-4">
                <label className="block text-sm font-medium text-gray-700">Department</label>
                <input
                  type="text"
                  value={newBeneficiary.department}
                  onChange={(e) => setNewBeneficiary({ ...newBeneficiary, department: e.target.value })}
                  className="mt-2 w-full p-2 border border-gray-300 rounded"
                />
              </div>
              <div className="mb-4">
                <label className="block text-sm font-medium text-gray-700">Status</label>
                <select
                  value={newBeneficiary.status}
                  onChange={(e) => setNewBeneficiary({ ...newBeneficiary, status: e.target.value })}
                  className="mt-2 w-full p-2 border border-gray-300 rounded"
                >
                  <option value="Pending">Pending</option>
                  <option value="Approved">Approved</option>
                  <option value="Rejected">Rejected</option>
                </select>
              </div>
              <div className="flex justify-end">
                <button
                  type="button"
                  onClick={handleAddBeneficiary}
                  className="bg-blue-500 text-white px-6 py-2 rounded shadow-md hover:bg-blue-700"
                >
                  Add Beneficiary
                </button>
              </div>
            </form>
            <div
              onClick={() => setShowAddBeneficiaryModal(false)}
              className="absolute top-0 right-0 p-2 cursor-pointer"
            >
              <span className="text-xl text-gray-500">&times;</span>
            </div>
          </div>
        </div>
      )}

      {/* Add Remarks Modal */}
      {showAddRemarksModal && (
        <div className="fixed inset-0 bg-gray-500 bg-opacity-75 flex justify-center items-center">
          <div className="bg-white p-6 rounded shadow-lg w-1/2">
            <h3 className="text-2xl font-semibold mb-4">Add Remarks</h3>
            <form>
              {remarks.map((remark, index) => (
                <div key={index} className="mb-4">
                  <label className="block text-sm font-medium text-gray-700">Action</label>
                  <input
                    type="text"
                    value={remark.action}
                    onChange={(e) => handleRemarkChange(index, 'action', e.target.value)}
                    className="mt-2 w-full p-2 border border-gray-300 rounded"
                  />
                  <label className="block text-sm font-medium text-gray-700 mt-2">Remark</label>
                  <textarea
                    value={remark.remark}
                    onChange={(e) => handleRemarkChange(index, 'remark', e.target.value)}
                    className="mt-2 w-full p-2 border border-gray-300 rounded"
                  />
                </div>
              ))}
              <div className="flex justify-between">
                <button
                  type="button"
                  onClick={handleAddRemarkInput}
                  className="bg-blue-500 text-white px-6 py-2 rounded shadow-md hover:bg-blue-700"
                >
                  Add Remark
                </button>
                <button
                  type="button"
                  onClick={handleAddRemarks}
                  className="bg-green-500 text-white px-6 py-2 rounded shadow-md hover:bg-green-700"
                >
                  Save Remarks
                </button>
              </div>
            </form>
            <div
              onClick={() => setShowAddRemarksModal(false)}
              className="absolute top-0 right-0 p-2 cursor-pointer"
            >
              <span className="text-xl text-gray-500">&times;</span>
            </div>
          </div>
        </div>
      )}
    </div>
  );
}
