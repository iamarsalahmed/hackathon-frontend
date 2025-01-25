'use client'
'use client';

import { useState, useRef } from 'react';
import { QRCodeCanvas } from 'qrcode.react';

export default function ReceptionistDashboard() {
  const [beneficiary, setBeneficiary] = useState({
    cnic: '',
    name: '',
    contact: '',
    address: '',
    purpose: '',
  });

  const [token, setToken] = useState({
    department: '',
    tokenNumber: '',
    data: null,
  });

  const [sequence, setSequence] = useState({
    Management: 1,
    Sales: 1,
    Marketing: 1,
    Finance: 1,
    HR: 1,
    IT: 1,
  });

  const cardRef = useRef();

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setBeneficiary({ ...beneficiary, [name]: value });
  };

  const handleTokenChange = (e) => {
    const { name, value } = e.target;
    setToken({ ...token, [name]: value });
  };

  const generateToken = () => {
    if (!token.department) {
      alert('Please select a department.');
      return;
    }

    // Generate sequential token number
    const currentSequence = sequence[token.department];
    const formattedNumber = currentSequence.toString().padStart(3, '0'); // e.g., 001
    const generatedTokenNumber = `${token.department.substring(0, 4).toUpperCase()}-${formattedNumber}`;

    // Update sequence
    setSequence({
      ...sequence,
      [token.department]: currentSequence + 1,
    });

    const tokenData = {
      department: token.department,
      tokenNumber: generatedTokenNumber,
      ...beneficiary,
    };

    setToken({
      ...token,
      tokenNumber: generatedTokenNumber,
      data: tokenData,
    });

    // Send data to the backend
    sendToBackend(tokenData);
  };

  const sendToBackend = async (data) => {
    try {
      const response = await fetch('/api/tokens', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(data),
      });

      if (!response.ok) {
        throw new Error('Failed to send data to the backend.');
      }

      alert('Token data sent to the backend successfully!');
    } catch (error) {
      console.error('Error:', error);
      alert('Failed to send data to the backend.');
    }
  };

  const printToken = () => {
    if (cardRef.current) {
      const printWindow = window.open('', '_blank');
      printWindow.document.write(`
        <html>
          <head>
            <title>Print Token</title>
            <style>
              body {
                font-family: Arial, sans-serif;
                padding: 20px;
                text-align: center;
              }
              .token-card {
                border: 1px solid #ccc;
                padding: 20px;
                border-radius: 10px;
                max-width: 400px;
                margin: auto;
              }
            </style>
          </head>
          <body>
            ${cardRef.current.outerHTML}
          </body>
        </html>
      `);
      printWindow.document.close();
      printWindow.print();
    }
  };

  return (
    <div className="min-h-screen bg-gray-100 p-8">
      <h1 className="text-3xl font-bold text-center mb-8">Receptionist Dashboard</h1>

      <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
        {/* Register Beneficiary */}
        <div className="bg-white shadow-lg rounded-lg p-6">
          <h2 className="text-xl font-semibold mb-4">Register Beneficiary</h2>
          <div className="grid grid-cols-1 gap-4">
            <label>Enter CNIC</label>
            <input
              type="text"
              name="cnic"
              value={beneficiary.cnic}
              onChange={handleInputChange}
              placeholder="CNIC"
              className="border border-gray-300 p-3 rounded w-full"
            />
            <label>Enter Name</label>
            <input
              type="text"
              name="name"
              value={beneficiary.name}
              onChange={handleInputChange}
              placeholder="Name"
              className="border border-gray-300 p-3 rounded w-full"
            />
            <label>Contact</label>
            <input
              type="text"
              name="contact"
              value={beneficiary.contact}
              onChange={handleInputChange}
              placeholder="Contact"
              className="border border-gray-300 p-3 rounded w-full"
            />
            <label>Address</label>
            <input
              type="text"
              name="address"
              value={beneficiary.address}
              onChange={handleInputChange}
              placeholder="Address"
              className="border border-gray-300 p-3 rounded w-full"
            />
          </div>
        </div>

        {/* Assign Token */}
        <div className="bg-white shadow-lg rounded-lg p-6">
          <h2 className="text-xl font-semibold mb-4">Assign Token</h2>
          <select
            name="department"
            value={token.department}
            onChange={handleTokenChange}
            className="border border-gray-300 p-3 rounded w-full"
          >
            <option value="">Select Department</option>
            <option value="Management">Management</option>
            <option value="Sales">Sales</option>
            <option value="Marketing">Marketing</option>
            <option value="Finance">Finance</option>
            <option value="HR">HR</option>
            <option value="IT">IT</option>
          </select>
          <input type="textarea" name="reason"
           id="" />
          <button
            onClick={generateToken}
            className="bg-green-500 text-white px-4 py-2 rounded mt-4 w-full"
          >
            Generate Token
          </button>
        </div>
      </div>

      {/* Token Card */}
      {token.data && (
        <div
          ref={cardRef}
          id="tokenCard"
          className="bg-white shadow-lg rounded-lg p-6 mt-8 text-center token-card"
        >
          <h2 className="text-xl font-semibold mb-4">Generated Token</h2>
          <p>
            <strong>Token Number:</strong> {token.tokenNumber}
          </p>
          <p>
            <strong>Department:</strong> {token.department}
          </p>
          <p>
            <strong>Beneficiary:</strong> {beneficiary.name} ({beneficiary.cnic})
          </p>
          <div className="flex justify-center my-4">
            <QRCodeCanvas
              value={JSON.stringify(token.data)}
              size={150}
              className="border border-gray-300 rounded"
            />
          </div>
          <button
            onClick={printToken}
            className="bg-blue-500 text-white px-4 py-2 rounded mt-4"
          >
            Print Token
          </button>
        </div>
      )}
    </div>
  );
}
