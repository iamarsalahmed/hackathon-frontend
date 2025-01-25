'use client';
import { useState, useEffect } from 'react';
import { useRouter } from 'next/navigation';
import axios from 'axios';

export default function ShopPage() {
  const [shop, setShop] = useState(null);
  const [items, setItems] = useState([]);
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [itemName, setItemName] = useState('');
  const [itemDescription, setItemDescription] = useState('');
  const [itemPrice, setItemPrice] = useState('');
  const [itemImage, setItemImage] = useState(null);

  const router = useRouter();
  const { id } = router.query; // Shop ID from dynamic route

  useEffect(() => {
    if (id) {
      // Fetch the shop details and items dynamically using the shop ID
      axios.get(`/api/shop/${id}`)
        .then(response => {
          setShop(response.data.shop);
          setItems(response.data.items);
        })
        .catch(error => console.error('Error fetching shop data:', error));
    }
  }, [id]);

  const openModal = () => setIsModalOpen(true);
  const closeModal = () => setIsModalOpen(false);

  const handleAddItem = () => {
    // Add the new item to the items list
    setItems([
      ...items,
      {
        name: itemName,
        description: itemDescription,
        price: itemPrice,
        image: itemImage,
      },
    ]);

    // Reset form data
    setItemName('');
    setItemDescription('');
    setItemPrice('');
    setItemImage(null);
    closeModal();
  };

  if (!shop) return <div>Loading...</div>;

  return (
    <div className="min-h-screen bg-gray-100 p-8">
      <div className="text-center mb-8">
        <h1 className="text-3xl font-bold text-gray-800">{shop.name}</h1>
        <p className="text-gray-600 mt-2">{shop.description}</p>
      </div>

      {/* Add Item Button */}
      <div className="text-center mb-8">
        <button
          onClick={openModal}
          className="bg-blue-600 text-white px-6 py-2 rounded-lg hover:bg-blue-700 transition duration-300"
        >
          Add Item to Shop
        </button>
      </div>

      {/* Display Shop Items */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
        {items.map((item, index) => (
          <div key={index} className="bg-white rounded-lg shadow-lg p-6">
            <img
              src={item.image || 'https://via.placeholder.com/150'}
              alt={item.name}
              className="w-full h-48 object-cover rounded-lg mb-4"
            />
            <h3 className="text-xl font-semibold text-gray-800">{item.name}</h3>
            <p className="text-sm text-gray-600 mt-2">{item.description}</p>
            <p className="text-lg font-bold text-gray-800 mt-2">${item.price}</p>
          </div>
        ))}
      </div>

      {/* Modal for Adding Item */}
      {isModalOpen && (
        <div className="fixed inset-0 bg-gray-800 bg-opacity-50 flex items-center justify-center">
          <div className="bg-white p-8 rounded-lg shadow-lg max-w-lg w-full">
            <h2 className="text-2xl font-semibold text-gray-800 mb-4">Add New Item</h2>

            <div className="mb-4">
              <label className="block text-gray-700">Item Name</label>
              <input
                type="text"
                value={itemName}
                onChange={(e) => setItemName(e.target.value)}
                className="w-full px-4 py-2 mt-1 border rounded-lg focus:ring-blue-500 focus:border-blue-500"
                placeholder="Enter item name"
              />
            </div>

            <div className="mb-4">
              <label className="block text-gray-700">Item Description</label>
              <textarea
                value={itemDescription}
                onChange={(e) => setItemDescription(e.target.value)}
                className="w-full px-4 py-2 mt-1 border rounded-lg focus:ring-blue-500 focus:border-blue-500"
                placeholder="Enter item description"
              />
            </div>

            <div className="mb-4">
              <label className="block text-gray-700">Item Price</label>
              <input
                type="number"
                value={itemPrice}
                onChange={(e) => setItemPrice(e.target.value)}
                className="w-full px-4 py-2 mt-1 border rounded-lg focus:ring-blue-500 focus:border-blue-500"
                placeholder="Enter item price"
              />
            </div>

            <div className="mb-4">
              <label className="block text-gray-700">Item Image URL</label>
              <input
                type="text"
                value={itemImage}
                onChange={(e) => setItemImage(e.target.value)}
                className="w-full px-4 py-2 mt-1 border rounded-lg focus:ring-blue-500 focus:border-blue-500"
                placeholder="Enter item image URL"
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
                onClick={handleAddItem}
                className="bg-blue-600 text-white px-4 py-2 rounded-lg hover:bg-blue-700 transition duration-300"
              >
                Add Item
              </button>
            </div>
          </div>
        </div>
      )}
    </div>
  );
}
