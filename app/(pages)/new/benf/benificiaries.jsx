// // // 'use client'
// // // import { useState } from "react";
// // // import { Modal } from "@/components/ui/modal"; // Assumed modal component
// // // import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from "@/components/ui/table";
// // // import { Select } from "@/components/ui/select"; // Assumed select component
// // // import { Input } from "@/components/ui/input"; // Assumed input component
// // // import { Button } from "@/components/ui/button"; // Assumed button component

// // // const BeneficiaryPage = () => {
// // //   const [isModalOpen, setIsModalOpen] = useState(false);
// // //   const [isRemarksModalOpen, setIsRemarksModalOpen] = useState(false);
// // //   const [beneficiaries, setBeneficiaries] = useState([]);
// // //   const [remarks, setRemarks] = useState([{ action: "", remarks: "" }]);

// // //   const handleAddBeneficiary = () => {
// // //     // Logic to add beneficiary to the list
// // //     setBeneficiaries([
// // //       ...beneficiaries,
// // //       {
// // //         id: beneficiaries.length + 1,
// // //         cnic: "",
// // //         name: "",
// // //         phone: "",
// // //         address: "",
// // //         tokenId: "",
// // //         purpose: "",
// // //         department: "",
// // //         status: "Pending",
// // //       },
// // //     ]);
// // //     setIsModalOpen(false);
// // //   };

// // //   const handleAddRemark = () => {
// // //     setRemarks([...remarks, { action: "", remarks: "" }]);
// // //   };

// // //   const handleChangeStatus = (index, newStatus) => {
// // //     const updatedBeneficiaries = beneficiaries.map((beneficiary, i) =>
// // //       i === index ? { ...beneficiary, status: newStatus } : beneficiary
// // //     );
// // //     setBeneficiaries(updatedBeneficiaries);
// // //   };

// // //   return (
// // //     <div>
// // //       <Button onClick={() => setIsModalOpen(true)}>Add Beneficiary</Button>

// // //       {/* Add Beneficiary Modal */}
// // //       <Modal isOpen={isModalOpen} onClose={() => setIsModalOpen(false)}>
// // //         <div className="p-4">
// // //           <h2>Add Beneficiary</h2>
// // //           <Input placeholder="CNIC" />
// // //           <Input placeholder="Name" />
// // //           <Input placeholder="Phone" />
// // //           <Input placeholder="Address" />
// // //           <Input placeholder="Token ID" />
// // //           <Input placeholder="Purpose" />
// // //           <Input placeholder="Department" />
// // //           <Select defaultValue="Pending">
// // //             <option value="Pending">Pending</option>
// // //             <option value="In Progress">In Progress</option>
// // //             <option value="Completed">Completed</option>
// // //           </Select>
// // //           <Button onClick={() => setIsRemarksModalOpen(true)}>Add Remarks</Button>
// // //           <Button onClick={handleAddBeneficiary}>Add Beneficiary</Button>
// // //         </div>
// // //       </Modal>

// // //       {/* Add Remarks Modal */}
// // //       <Modal isOpen={isRemarksModalOpen} onClose={() => setIsRemarksModalOpen(false)}>
// // //         <div className="p-4">
// // //           <h3>Add Remarks</h3>
// // //           {remarks.map((remark, index) => (
// // //             <div key={index} className="flex space-x-2 mb-2">
// // //               <Input
// // //                 placeholder="Action"
// // //                 value={remark.action}
// // //                 onChange={(e) => {
// // //                   const updatedRemarks = [...remarks];
// // //                   updatedRemarks[index].action = e.target.value;
// // //                   setRemarks(updatedRemarks);
// // //                 }}
// // //               />
// // //               <Input
// // //                 placeholder="Remarks"
// // //                 value={remark.remarks}
// // //                 onChange={(e) => {
// // //                   const updatedRemarks = [...remarks];
// // //                   updatedRemarks[index].remarks = e.target.value;
// // //                   setRemarks(updatedRemarks);
// // //                 }}
// // //               />
// // //               {index === remarks.length - 1 && (
// // //                 <Button onClick={handleAddRemark}>+</Button>
// // //               )}
// // //             </div>
// // //           ))}
// // //           <Button onClick={() => setIsRemarksModalOpen(false)}>Save Remarks</Button>
// // //         </div>
// // //       </Modal>

// // //       {/* Beneficiary Table */}
// // //       <Table>
// // //         <TableHeader>
// // //           <TableRow>
// // //             <TableHead>CNIC</TableHead>
// // //             <TableHead>Name</TableHead>
// // //             <TableHead>Phone</TableHead>
// // //             <TableHead>Address</TableHead>
// // //             <TableHead>Purpose</TableHead>
// // //             <TableHead>Token</TableHead>
// // //             <TableHead>Department</TableHead>
// // //             <TableHead>Status</TableHead>
// // //           </TableRow>
// // //         </TableHeader>
// // //         <TableBody>
// // //           {beneficiaries.map((beneficiary, index) => (
// // //             <TableRow key={beneficiary.id}>
// // //               <TableCell>{beneficiary.cnic}</TableCell>
// // //               <TableCell>{beneficiary.name}</TableCell>
// // //               <TableCell>{beneficiary.phone}</TableCell>
// // //               <TableCell>{beneficiary.address}</TableCell>
// // //               <TableCell>{beneficiary.purpose}</TableCell>
// // //               <TableCell>{beneficiary.tokenId}</TableCell>
// // //               <TableCell>{beneficiary.department}</TableCell>
// // //               <TableCell>
// // //                 <Select
// // //                   value={beneficiary.status}
// // //                   onChange={(e) => handleChangeStatus(index, e.target.value)}
// // //                 >
// // //                   <option value="Pending">Pending</option>
// // //                   <option value="In Progress">In Progress</option>
// // //                   <option value="Completed">Completed</option>
// // //                 </Select>
// // //               </TableCell>
// // //             </TableRow>
// // //           ))}
// // //         </TableBody>
// // //       </Table>
// // //     </div>
// // //   );
// // // };

// // // export default BeneficiaryPage;
// // 'use client'
// // import { useState } from "react";

// // // Modal Component with Tailwind CSS
// // const Modal = ({ isOpen, onClose, children }) => {
// //   if (!isOpen) return null;
// //   return (
// //     <div
// //       className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50"
// //       onClick={onClose}
// //     >
// //       <div
// //         className="bg-white rounded-lg p-6 w-full max-w-lg shadow-lg"
// //         onClick={(e) => e.stopPropagation()}
// //       >
// //         <button
// //           className="absolute top-2 right-2 text-gray-500 hover:text-gray-800"
// //           onClick={onClose}
// //         >
// //           ✕
// //         </button>
// //         {children}
// //       </div>
// //     </div>
// //   );
// // };

// // // Table Components with Tailwind CSS
// // const Table = ({ children }) => (
// //   <table className="min-w-full border border-gray-200 rounded-lg overflow-hidden">
// //     {children}
// //   </table>
// // );
// // const TableHeader = ({ children }) => (
// //   <thead className="bg-gray-200 text-gray-700">{children}</thead>
// // );
// // const TableBody = ({ children }) => <tbody>{children}</tbody>;
// // const TableRow = ({ children }) => (
// //   <tr className="border-b hover:bg-gray-50">{children}</tr>
// // );
// // const TableCell = ({ children }) => (
// //   <td className="px-4 py-2 text-gray-600">{children}</td>
// // );

// // // Select Component with Tailwind CSS
// // const Select = ({ value, onChange, children }) => (
// //   <select
// //     value={value}
// //     onChange={onChange}
// //     className="border border-gray-300 rounded-md p-2 w-full"
// //   >
// //     {children}
// //   </select>
// // );

// // // Input Component with Tailwind CSS
// // const Input = ({ value, onChange, placeholder }) => (
// //   <input
// //     value={value}
// //     onChange={onChange}
// //     placeholder={placeholder}
// //     className="border border-gray-300 rounded-md p-2 w-full"
// //   />
// // );

// // // Button Component with Tailwind CSS
// // const Button = ({ onClick, children }) => (
// //   <button
// //     onClick={onClick}
// //     className="bg-blue-500 text-white rounded-md px-4 py-2 hover:bg-blue-600"
// //   >
// //     {children}
// //   </button>
// // );

// // const BeneficiaryPage = () => {
// //   const [isModalOpen, setIsModalOpen] = useState(false);
// //   const [isRemarksModalOpen, setIsRemarksModalOpen] = useState(false);
// //   const [beneficiaries, setBeneficiaries] = useState([]);
// //   const [remarks, setRemarks] = useState([{ action: "", remarks: "" }]);

// //   const handleAddBeneficiary = () => {
// //     setBeneficiaries([
// //       ...beneficiaries,
// //       {
// //         id: beneficiaries.length + 1,
// //         cnic: "",
// //         name: "",
// //         phone: "",
// //         address: "",
// //         tokenId: "",
// //         purpose: "",
// //         department: "",
// //         status: "Pending",
// //       },
// //     ]);
// //     setIsModalOpen(false);
// //   };

// //   const handleAddRemark = () => {
// //     setRemarks([...remarks, { action: "", remarks: "" }]);
// //   };

// //   const handleChangeStatus = (index, newStatus) => {
// //     const updatedBeneficiaries = beneficiaries.map((beneficiary, i) =>
// //       i === index ? { ...beneficiary, status: newStatus } : beneficiary
// //     );
// //     setBeneficiaries(updatedBeneficiaries);
// //   };

// //   return (
// //     <div className="p-6">
// //       <Button onClick={() => setIsModalOpen(true)}>Add Beneficiary</Button>

// //       {/* Add Beneficiary Modal */}
// //       <Modal isOpen={isModalOpen} onClose={() => setIsModalOpen(false)}>
// //         <div className="space-y-4">
// //           <h2 className="text-xl font-semibold">Add Beneficiary</h2>
// //           <Input placeholder="CNIC" />
// //           <Input placeholder="Name" />
// //           <Input placeholder="Phone" />
// //           <Input placeholder="Address" />
// //           <Input placeholder="Token ID" />
// //           <Input placeholder="Purpose" />
// //           <Input placeholder="Department" />
// //           <Select defaultValue="Pending">
// //             <option value="Pending">Pending</option>
// //             <option value="In Progress">In Progress</option>
// //             <option value="Completed">Completed</option>
// //           </Select>
// //           <Button onClick={() => setIsRemarksModalOpen(true)}>Add Remarks</Button>
// //           <Button onClick={handleAddBeneficiary}>Add Beneficiary</Button>
// //         </div>
// //       </Modal>

// //       {/* Add Remarks Modal */}
// //       <Modal isOpen={isRemarksModalOpen} onClose={() => setIsRemarksModalOpen(false)}>
// //         <div className="space-y-4">
// //           <h3 className="text-lg font-medium">Add Remarks</h3>
// //           {remarks.map((remark, index) => (
// //             <div key={index} className="flex space-x-2">
// //               <Input
// //                 placeholder="Action"
// //                 value={remark.action}
// //                 onChange={(e) => {
// //                   const updatedRemarks = [...remarks];
// //                   updatedRemarks[index].action = e.target.value;
// //                   setRemarks(updatedRemarks);
// //                 }}
// //               />
// //               <Input
// //                 placeholder="Remarks"
// //                 value={remark.remarks}
// //                 onChange={(e) => {
// //                   const updatedRemarks = [...remarks];
// //                   updatedRemarks[index].remarks = e.target.value;
// //                   setRemarks(updatedRemarks);
// //                 }}
// //               />
// //               {index === remarks.length - 1 && (
// //                 <Button onClick={handleAddRemark}>+</Button>
// //               )}
// //             </div>
// //           ))}
// //           <Button onClick={() => setIsRemarksModalOpen(false)}>Save Remarks</Button>
// //         </div>
// //       </Modal>

// //       {/* Beneficiary Table */}
// //       <div className="mt-6">
// //         <Table>
// //           <TableHeader>
// //             <TableRow>
// //               <TableCell>CNIC</TableCell>
// //               <TableCell>Name</TableCell>
// //               <TableCell>Phone</TableCell>
// //               <TableCell>Address</TableCell>
// //               <TableCell>Purpose</TableCell>
// //               <TableCell>Token</TableCell>
// //               <TableCell>Department</TableCell>
// //               <TableCell>Status</TableCell>
// //             </TableRow>
// //           </TableHeader>
// //           <TableBody>
// //             {beneficiaries.map((beneficiary, index) => (
// //               <TableRow key={beneficiary.id}>
// //                 <TableCell>{beneficiary.cnic}</TableCell>
// //                 <TableCell>{beneficiary.name}</TableCell>
// //                 <TableCell>{beneficiary.phone}</TableCell>
// //                 <TableCell>{beneficiary.address}</TableCell>
// //                 <TableCell>{beneficiary.purpose}</TableCell>
// //                 <TableCell>{beneficiary.tokenId}</TableCell>
// //                 <TableCell>{beneficiary.department}</TableCell>
// //                 <TableCell>
// //                   <Select
// //                     value={beneficiary.status}
// //                     onChange={(e) => handleChangeStatus(index, e.target.value)}
// //                   >
// //                     <option value="Pending">Pending</option>
// //                     <option value="In Progress">In Progress</option>
// //                     <option value="Completed">Completed</option>
// //                   </Select>
// //                 </TableCell>
// //               </TableRow>
// //             ))}
// //           </TableBody>
// //         </Table>
// //       </div>
// //     </div>
// //   );
// // };

// // export default BeneficiaryPage;
// "use client"

// import { useState, useEffect } from "react"
// import { api } from "../../utils/api"

// export default function Beneficiaries() {
//   const [beneficiaries, setBeneficiaries] = useState([])

//   useEffect(() => {
//     api
//       .get("/beneficiaries")
//       .then((data) => setBeneficiaries(data))
//       .catch((error) => console.error("Error fetching beneficiaries:", error))
//   }, [])

//   return (
//     <div>
//       <h2 className="text-2xl font-bold mb-4">Beneficiaries</h2>
//       <table className="w-full bg-white shadow-md rounded">
//         <thead>
//           <tr className="bg-gray-200 text-gray-600 uppercase text-sm leading-normal">
//             <th className="py-3 px-6 text-left">CNIC</th>
//             <th className="py-3 px-6 text-left">Name</th>
//             <th className="py-3 px-6 text-left">Phone</th>
//             <th className="py-3 px-6 text-left">Status</th>
//           </tr>
//         </thead>
//         <tbody className="text-gray-600 text-sm font-light">
//           {beneficiaries.map((beneficiary) => (
//             <tr key={beneficiary.cnic} className="border-b border-gray-200 hover:bg-gray-100">
//               <td className="py-3 px-6 text-left whitespace-nowrap">{beneficiary.cnic}</td>
//               <td className="py-3 px-6 text-left">{beneficiary.name}</td>
//               <td className="py-3 px-6 text-left">{beneficiary.phone}</td>
//               <td className="py-3 px-6 text-left">{beneficiary.status}</td>
//             </tr>
//           ))}
//         </tbody>
//       </table>
//     </div>
//   )
// }

"use client"

import { useState } from "react"
import { useAuth } from "../../../../context/AuthContext"
import { api } from "../../../../utils/api.js"

export default function RegisterBeneficiary() {
  const { user } = useAuth()
  const [formData, setFormData] = useState({
    cnic: "",
    name: "",
    phone: "",
    address: "",
    purpose: "",
    department: "",
  })

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value })
  }

  const handleSubmit = async (e) => {
    e.preventDefault()
    try {
      const response = await api.post("/beneficiaries", formData)
      alert(`Beneficiary registered successfully. Token: ${response.token}`)
      setFormData({
        cnic: "",
        name: "",
        phone: "",
        address: "",
        purpose: "",
        department: "",
      })
    } catch (error) {
      alert("Error registering beneficiary")
    }
  }

  if (user.role !== "Admin" && user.role !== "Receptionist") {
    return <div>You do not have permission to access this page.</div>
  }

  return (
    <div className="max-w-md mx-auto">
      <h2 className="text-2xl font-bold mb-4">Register Beneficiary</h2>
      <form onSubmit={handleSubmit} className="space-y-4">
        <div>
          <label htmlFor="cnic" className="block mb-1">
            CNIC
          </label>
          <input
            type="text"
            id="cnic"
            name="cnic"
            value={formData.cnic}
            onChange={handleChange}
            required
            className="w-full p-2 border rounded"
          />
        </div>
        <div>
          <label htmlFor="name" className="block mb-1">
            Name
          </label>
          <input
            type="text"
            id="name"
            name="name"
            value={formData.name}
            onChange={handleChange}
            required
            className="w-full p-2 border rounded"
          />
        </div>
        <div>
          <label htmlFor="phone" className="block mb-1">
            Phone
          </label>
          <input
            type="tel"
            id="phone"
            name="phone"
            value={formData.phone}
            onChange={handleChange}
            className="w-full p-2 border rounded"
          />
        </div>
        <div>
          <label htmlFor="address" className="block mb-1">
            Address
          </label>
          <textarea
            id="address"
            name="address"
            value={formData.address}
            onChange={handleChange}
            required
            className="w-full p-2 border rounded"
          ></textarea>
        </div>
        <div>
          <label htmlFor="purpose" className="block mb-1">
            Purpose
          </label>
          <select
            id="purpose"
            name="purpose"
            value={formData.purpose}
            onChange={handleChange}
            required
            className="w-full p-2 border rounded"
          >
            <option value="">Select Purpose</option>
            <option value="Financial Aid">Financial Aid</option>
            <option value="Medical Assistance">Medical Assistance</option>
            <option value="Education Support">Education Support</option>
          </select>
        </div>
        <div>
          <label htmlFor="department" className="block mb-1">
            Department
          </label>
          <input
            type="text"
            id="department"
            name="department"
            value={formData.department}
            onChange={handleChange}
            required
            className="w-full p-2 border rounded"
          />
        </div>
        <button type="submit" className="w-full bg-blue-600 text-white p-2 rounded">
          Register Beneficiary
        </button>
      </form>
    </div>
  )
}

