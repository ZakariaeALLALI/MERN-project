import axios from 'axios';
import React, { useState } from 'react';
import { toast, ToastContainer } from 'react-toastify';

function AddProducts() {
  const [title, setTitle] = useState('');
  const [description, setDescription] = useState('');
  const [price, setPrice] = useState('');
  const [category, setCategory] = useState('Men');  // Default to 'Men'
  const [type, setType] = useState('Earrings');    // Default to 'Earrings'
  const [availability, setAvailability] = useState(false);
  const [stockQuantity, setStockQuantity] = useState('');
  const [image, setImage] = useState(null);

  const handleSubmit = (event) => {
    event.preventDefault();
  
    // Log form data to verify it's populated
    console.log('Title:', title);
    console.log('Description:', description);
    console.log('Price:', price);
    console.log('Category:', category);
    console.log('Availability:', availability);
    console.log('Stock Quantity:', stockQuantity);
    console.log('Image:', image);
    console.log('Type:', type);  // Make sure this is being logged
  
    // Validate input fields
    if (!title || !description || !price || !category || !type || !stockQuantity) {
      alert("Please fill in all required fields.");
      return;
    }
  
    if (availability === undefined || availability === null) {
      alert("Availability is required.");
      return;
    }
  
    if (!image) {
      alert("Image is required.");
      return;
    }
  
    // Create FormData and append fields to it
    const formData = new FormData();
    formData.append('title', title);
    formData.append('description', description);
    formData.append('price', price);
    formData.append('category', category);
    formData.append('type', type);  // Add this line for 'type'
    formData.append('availability', availability);
    formData.append('stockQuantity', stockQuantity);
    formData.append('image', image);
  
    // Log FormData to verify it's populated correctly
    console.log('FormData:', formData);
  
    // Send the request
    axios.post('http://localhost:4000/api/products', formData)
      .then(response => {
        console.log('Product added:', response.data);
        toast.success("Product added successfully!");
      })
      .catch(error => {
        console.error('Error adding product:', error.response ? error.response.data : error.message);
        toast.error("Error adding product.");
      })
  };
  
  return (
    <div className="flex justify-center items-center min-h-screen bg-black">
      <div id="addProduct" className="bg-white rounded-lg shadow-md p-6 w-full">
        <h3 className="text-xl font-bold mb-4 text-center text-black">Add Product</h3>
        <form onSubmit={handleSubmit} className="space-y-4">
          {/* Title */}
          <div className="mb-4">
            <label htmlFor="title" className="block text-sm font-medium text-gray-700">
              Title
            </label>
            <input
              type="text"
              id="title"
              value={title}
              onChange={(e) => setTitle(e.target.value)}
              placeholder="Enter product title"
              className="w-full mt-2 p-2 border border-gray-300 rounded focus:outline-none focus:ring-2 focus:ring-blue-500"
            />
          </div>

          {/* Description */}
          <div className="mb-4">
            <label htmlFor="description" className="block text-sm font-medium text-gray-700">
              Description
            </label>
            <textarea
              id="description"
              value={description}
              onChange={(e) => setDescription(e.target.value)}
              placeholder="Enter product description"
              className="w-full mt-2 p-2 border border-gray-300 rounded focus:outline-none focus:ring-2 focus:ring-blue-500"
            />
          </div>

          {/* Availability */}
          <div className="mb-4">
            <label htmlFor="availability" className="block text-sm font-medium text-gray-700">
              Availability
            </label>
            <div className="flex items-center mt-2">
              <input
                type="checkbox"
                id="availability"
                checked={availability}
                onChange={(e) => setAvailability(e.target.checked)}
                className="form-checkbox h-5 w-5 text-blue-600"
              />
              <span className="ml-2 text-sm text-gray-700">{availability ? 'Available' : 'Unavailable'}</span>
            </div>
          </div>

          {/* Price */}
          <div className="mb-4">
            <label htmlFor="price" className="block text-sm font-medium text-gray-700">
              Price
            </label>
            <input
              type="text"
              id="price"
              value={price}
              onChange={(e) => setPrice(e.target.value)}
              placeholder="Enter product price"
              className="w-full mt-2 p-2 border border-gray-300 rounded focus:outline-none focus:ring-2 focus:ring-blue-500"
            />
          </div>

          {/* Product Image */}
          <div className="mb-4">
            <label htmlFor="image" className="block text-sm font-medium text-gray-700">
              Product Image
            </label>
            <input
              type="file"
              id="image"
              onChange={(e) => setImage(e.target.files[0])}
              className="w-full mt-2 p-2 border border-gray-300 rounded focus:outline-none focus:ring-2 focus:ring-blue-500"
            />
          </div>

          {/* Stock Quantity */}
          <div className="mb-4">
            <label htmlFor="stockQuantity" className="block text-sm font-medium text-gray-700">
              Stock Quantity
            </label>
            <input
              type="number"
              id="stockQuantity"
              value={stockQuantity}
              onChange={(e) => setStockQuantity(e.target.value)}
              placeholder="Enter product stock quantity"
              className="w-full mt-2 p-2 border border-gray-300 rounded focus:outline-none focus:ring-2 focus:ring-blue-500"
            />
          </div>

          {/* Category */}
          <div className="mb-4">
            <label htmlFor="category" className="block text-sm font-medium text-gray-700">
              Category
            </label>
            <select
              id="category"
              value={category}
              onChange={(e) => setCategory(e.target.value)}
              className="w-full mt-2 p-2 border border-gray-300 rounded focus:outline-none focus:ring-2 focus:ring-blue-500"
            >
              <option value="Men">Men</option>
              <option value="Women">Women</option>
              <option value="Unisex">Unisex</option>
            </select>
          </div>

          {/* Type */}
          <div className="mb-4">
            <label htmlFor="type" className="block text-sm font-medium text-gray-700">
              Type
            </label>
            <select
              id="type"
              value={type}
              onChange={(e) => setType(e.target.value)}
              className="w-full mt-2 p-2 border border-gray-300 rounded focus:outline-none focus:ring-2 focus:ring-blue-500"
            >
              <option value="Earrings">Earrings</option>
              <option value="Necklaces">Necklaces</option>
              <option value="Rings">Rings</option>
              <option value="Bags">Bags</option>
              <option value="Glasses">Glasses</option>
            </select>
          </div>

          {/* Submit Button */}
          <div className="mb-4 flex justify-center">
            <button
              type="submit"
              className="bg-blue-600 text-white p-2 rounded focus:outline-none focus:ring-2 focus:ring-blue-500"
            >
              Add Product
            </button>
          </div>
        </form>
      </div>
      <ToastContainer />
    </div>
  );
}

export default AddProducts;
