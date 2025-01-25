'use client';
import { useState } from "react";
import { useRouter } from 'next/navigation';

export default function Dashboard() {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [shopName, setShopName] = useState("");
  const [shopDescription, setShopDescription] = useState("");
  const [shopLocation, setShopLocation] = useState("");
  const [shops, setShops] = useState([
    { id: 1, name: 'Shop One', description: 'A cool shop with awesome products.', location: 'New York' },
    { id: 2, name: 'Shop Two', description: 'Another amazing shop selling gadgets.', location: 'San Francisco' }
  ]);
  const router = useRouter();

  const openModal = () => {
    setIsModalOpen(true);
  };

  const closeModal = () => {
    setIsModalOpen(false);
  };

  const handleAddShop = () => {
    setShops([
      ...shops,
      { id: shops.length + 1, name: shopName, description: shopDescription, location: shopLocation }
    ]);
    closeModal(); // Close modal after adding shop
    setShopName("");
    setShopDescription("");
    setShopLocation("");
  };

  const handleEditShop = (id) => {
    const shopToEdit = shops.find(shop => shop.id === id);
    setShopName(shopToEdit.name);
    setShopDescription(shopToEdit.description);
    setShopLocation(shopToEdit.location);
    openModal();
  };

  return (
    <div className="min-h-screen bg-gray-100 p-8">
      <h1 className="text-3xl font-bold text-center text-gray-800 mb-8">My Shops Dashboard</h1>

      {/* Add Shop Button */}
      <div className="text-center mb-8">
        <button
          onClick={openModal}
          className="bg-blue-600 text-white px-6 py-2 rounded-lg hover:bg-blue-700 transition duration-300"
        >
          Add Shop
        </button>
      </div>

      {/* Shop Cards */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
        {shops.map(shop => (
          <div key={shop.id} className="bg-white rounded-lg shadow-lg p-6">
            <h2 className="text-xl font-semibold text-gray-800">{shop.name}</h2>
            <p className="text-sm text-gray-600 mt-2">{shop.description}</p>
            <p className="text-sm text-gray-500 mt-2">{shop.location}</p>
            <div className="flex justify-between items-center mt-4">
              <button
                onClick={() => handleEditShop(shop.id)}
                className="bg-yellow-500 text-white px-4 py-2 rounded-lg hover:bg-yellow-600 transition duration-300"
              >
                Edit
              </button>
              <button
                onClick={() => router.push(`/dashboard/${shop.id}`)}
                className="bg-green-500 text-white px-4 py-2 rounded-lg hover:bg-green-600 transition duration-300"
              >
                Visit Shop
              </button>
            </div>
          </div>
        ))}
      </div>

      {/* Modal for Adding/Editing Shop */}
      {isModalOpen && (
        <div className="fixed inset-0 bg-gray-800 bg-opacity-50 flex items-center justify-center">
          <div className="bg-white p-8 rounded-lg shadow-lg max-w-lg w-full">
            <h2 className="text-2xl font-semibold text-gray-800 mb-4">{shopName ? "Edit Shop" : "Add New Shop"}</h2>

            <div className="mb-4">
              <label className="block text-gray-700">Shop Name</label>
              <input
                type="text"
                value={shopName}
                onChange={(e) => setShopName(e.target.value)}
                className="w-full px-4 py-2 mt-1 border rounded-lg focus:ring-blue-500 focus:border-blue-500"
                placeholder="Enter shop name"
              />
            </div>

            <div className="mb-4">
              <label className="block text-gray-700">Shop Description</label>
              <textarea
                value={shopDescription}
                onChange={(e) => setShopDescription(e.target.value)}
                className="w-full px-4 py-2 mt-1 border rounded-lg focus:ring-blue-500 focus:border-blue-500"
                placeholder="Enter shop description"
              />
            </div>

            <div className="mb-4">
              <label className="block text-gray-700">Shop Location</label>
              <input
                type="text"
                value={shopLocation}
                onChange={(e) => setShopLocation(e.target.value)}
                className="w-full px-4 py-2 mt-1 border rounded-lg focus:ring-blue-500 focus:border-blue-500"
                placeholder="Enter shop location"
              />
            </div>

            <div className="flex justify-between">
              <button
                onClick={closeModal}
                className="bg-gray-500 text-white px-4 py-2 rounded-lg hover:bg-gray-600 transition duration-300"
              >
                Cancel
              </button>
              <button
                onClick={handleAddShop}
                className="bg-blue-600 text-white px-4 py-2 rounded-lg hover:bg-blue-700 transition duration-300"
              >
                {shopName ? "Save Changes" : "Add Shop"}
              </button>
            </div>
          </div>
        </div>
      )}
    </div>
  );
}
