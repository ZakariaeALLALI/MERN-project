import React, { useState } from 'react';
import { toast, ToastContainer } from 'react-toastify';

function AddProducts() {
  const [formData, setFormData] = useState({
    title: '',
    description: '',
    price: '',
    category: '',
    type: '',
    availability: false,
    stockQuantity: '',
  });

  const handleInputChange = (e) => {
    const { name, value, type, checked } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: type === 'checkbox' ? checked : value
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    
    // Validate form data
    if (!formData.title || !formData.description || !formData.price || !formData.category || !formData.type || !formData.stockQuantity) {
      toast.error('Please fill in all required fields');
      return;
    }

    // Here you would typically send the data to your backend
    // For now, we'll just show a success message
    toast.success('Product added successfully!');
    
    // Reset form
    setFormData({
      title: '',
      description: '',
      price: '',
      category: '',
      type: '',
      availability: false,
      stockQuantity: '',
    });
  };

  return (
    <div className="min-h-screen bg-gray-100 py-12 px-4 sm:px-6 lg:px-8">
      <div className="max-w-md mx-auto bg-white rounded-lg shadow-lg p-8">
        <h2 className="text-3xl font-bold text-center mb-8">Add New Product</h2>
        
        <form onSubmit={handleSubmit} className="space-y-6">
          {/* Title */}
          <div>
            <label htmlFor="title" className="block text-sm font-medium text-gray-700">
              Title
            </label>
            <input
              type="text"
              id="title"
              name="title"
              value={formData.title}
              onChange={handleInputChange}
              className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-blue-500 focus:ring-blue-500"
              required
            />
          </div>

          {/* Description */}
          <div>
            <label htmlFor="description" className="block text-sm font-medium text-gray-700">
              Description
            </label>
            <textarea
              id="description"
              name="description"
              value={formData.description}
              onChange={handleInputChange}
              rows="3"
              className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-blue-500 focus:ring-blue-500"
              required
            />
          </div>

          {/* Price */}
          <div>
            <label htmlFor="price" className="block text-sm font-medium text-gray-700">
              Price
            </label>
            <input
              type="number"
              id="price"
              name="price"
              value={formData.price}
              onChange={handleInputChange}
              className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-blue-500 focus:ring-blue-500"
              required
            />
          </div>

          {/* Category */}
          <div>
            <label htmlFor="category" className="block text-sm font-medium text-gray-700">
              Category
            </label>
            <select
              id="category"
              name="category"
              value={formData.category}
              onChange={handleInputChange}
              className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-blue-500 focus:ring-blue-500"
              required
            >
              <option value="">Select a category</option>
              <option value="Jewelry">Jewelry</option>
              <option value="Accessories">Accessories</option>
              <option value="Clothing">Clothing</option>
            </select>
          </div>

          {/* Type */}
          <div>
            <label htmlFor="type" className="block text-sm font-medium text-gray-700">
              Type
            </label>
            <select
              id="type"
              name="type"
              value={formData.type}
              onChange={handleInputChange}
              className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-blue-500 focus:ring-blue-500"
              required
            >
              <option value="">Select a type</option>
              <option value="Earrings">Earrings</option>
              <option value="Necklaces">Necklaces</option>
              <option value="Rings">Rings</option>
              <option value="Bags">Bags</option>
              <option value="Glasses">Glasses</option>
            </select>
          </div>

          {/* Stock Quantity */}
          <div>
            <label htmlFor="stockQuantity" className="block text-sm font-medium text-gray-700">
              Stock Quantity
            </label>
            <input
              type="number"
              id="stockQuantity"
              name="stockQuantity"
              value={formData.stockQuantity}
              onChange={handleInputChange}
              className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-blue-500 focus:ring-blue-500"
              required
            />
          </div>

          {/* Availability */}
          <div className="flex items-center">
            <input
              type="checkbox"
              id="availability"
              name="availability"
              checked={formData.availability}
              onChange={handleInputChange}
              className="h-4 w-4 text-blue-600 focus:ring-blue-500 border-gray-300 rounded"
            />
            <label htmlFor="availability" className="ml-2 block text-sm text-gray-900">
              Available for purchase
            </label>
          </div>

          {/* Submit Button */}
          <button
            type="submit"
            className="w-full flex justify-center py-2 px-4 border border-transparent rounded-md shadow-sm text-sm font-medium text-white bg-blue-600 hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-blue-500"
          >
            Add Product
          </button>
        </form>
      </div>
      <ToastContainer />
    </div>
  );
}

export default AddProducts;
