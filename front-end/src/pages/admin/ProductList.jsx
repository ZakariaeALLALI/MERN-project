import React, { useState, useEffect } from 'react';
import axios from 'axios';

function ProductList() {
  const [products, setProducts] = useState([]);
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [productToEdit, setProductToEdit] = useState(null);
  const [updatedProductData, setUpdatedProductData] = useState({
    title: '',
    description: '',
    price: '',
    stockQuantity: '',
    availability: false,
  });

  // Fetch products when the component mounts
  useEffect(() => {
    const fetchProducts = async () => {
      try {
        const response = await axios.get('http://localhost:4000/api/products');
        setProducts(response.data);
      } catch (error) {
        console.error('Error fetching products:', error);
      }
    };

    fetchProducts();
  }, []);

  // Handle delete product
  const deleteProduct = async (_id) => {
    try {
      const response = await axios.delete(`http://localhost:4000/api/products/${_id}`);
      // After deletion, remove the product from the UI
      setProducts(products.filter(product => product._id !== _id));
      console.log('Product deleted:', response.data);
    } catch (error) {
      console.error('Error deleting product:', error);
    }
  };

  // Handle update product (open modal)
  const handleUpdateClick = (product) => {
    setProductToEdit(product);
    setUpdatedProductData({
      title: product.title,
      description: product.description,
      price: product.price,
      stockQuantity: product.stockQuantity,
      availability: product.availability,
    });
    setIsModalOpen(true);
  };

  // Handle form input changes for the update
  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setUpdatedProductData({
      ...updatedProductData,
      [name]: value,
    });
  };

  // Handle save (submit the update)
  const handleSubmitUpdate = async (e) => {
    e.preventDefault();
    console.log("Submitting update with data:", updatedProductData); // Check the data being submitted
    console.log("Product ID:", productToEdit._id); // Ensure the ID is valid

    if (!productToEdit || !productToEdit._id) {
      console.error("Invalid product ID");
      return; // Exit if the product ID is invalid
    }

    try {
      const response = await axios.put(
        `http://localhost:4000/api/products/${productToEdit._id}`,
        updatedProductData // Make sure only the updated text fields are sent
      );

      // Assuming the backend returns the updated product data in response.data
      const updatedProduct = response.data.product;
      setProducts(products.map(product => product._id === updatedProduct._id ? updatedProduct : product));

      console.log('Product updated:', updatedProduct);
      setIsModalOpen(false); // Close the modal after successful update
    } catch (error) {
      console.error('Error updating product:', error);
    }
  };

  return (
    <div className="bg-black py-6 px-4">
      <h3 className="text-xl font-bold mb-6 text-white">Product List</h3>

      <div className="space-y-4">
        {products.length > 0 ? (
          products.map((product) => (
            <div
              key={product._id}
              className="bg-white text-black p-4 rounded-lg shadow-md"
            >
              <div className="flex flex-col md:flex-row justify-between items-center md:items-start space-y-4 md:space-y-0">
                <div className="md:w-1/2">
                  <h4 className="text-xl font-semibold">{product.title}</h4>
                  <p className="text-sm">{product.description}</p>
                  <p className="text-sm mt-2">
                    <strong>Price:</strong> ${product.price}
                  </p>
                  <p className="text-sm">
                    <strong>Availability:</strong> {product.availability ? 'Available' : 'Unavailable'}
                  </p>
                  <p className="text-sm">
                    <strong>Stock:</strong> {product.stockQuantity}
                  </p>
                </div>
                {product.image && (
                  <div className="md:w-1/3">
                    <img
                      src={`http://localhost:4000/${product.image}`}
                      alt={product.title || 'Product Image'}
                      className="w-full h-auto object-cover rounded-lg"
                    />
                  </div>
                )}
                <div className="flex space-x-4 mt-4 md:mt-6 justify-start">
                  <button
                    className="bg-yellow-500 text-white px-4 py-1 rounded hover:bg-yellow-600"
                    onClick={() => handleUpdateClick(product)}
                  >
                    Update
                  </button>
                  <button
                    className="bg-red-500 text-white px-4 py-1 rounded hover:bg-red-600"
                    onClick={() => deleteProduct(product._id)}
                  >
                    Delete
                  </button>
                </div>
              </div>
            </div>
          ))
        ) : (
          <div className="text-center text-white">No products available</div>
        )}
      </div>

      {/* Modal for updating product */}
      {isModalOpen && (
        <div className="fixed inset-0 bg-gray-700 bg-opacity-50 flex justify-center items-center z-50">
          <div className="bg-white p-6 rounded-lg shadow-lg w-1/3">
            <h2 className="text-xl font-bold mb-4">Update Product</h2>
            <form onSubmit={handleSubmitUpdate}>
              <div className="mb-4">
                <label htmlFor="title" className="block text-sm font-semibold">Title</label>
                <input
                  type="text"
                  id="title"
                  name="title"
                  value={updatedProductData.title}
                  onChange={handleInputChange}
                  className="w-full px-3 py-2 border border-gray-300 rounded"
                />
              </div>
              <div className="mb-4">
                <label htmlFor="description" className="block text-sm font-semibold">Description</label>
                <textarea
                  id="description"
                  name="description"
                  value={updatedProductData.description}
                  onChange={handleInputChange}
                  className="w-full px-3 py-2 border border-gray-300 rounded"
                />
              </div>
              <div className="mb-4">
                <label htmlFor="price" className="block text-sm font-semibold">Price</label>
                <input
                  type="number"
                  id="price"
                  name="price"
                  value={updatedProductData.price}
                  onChange={handleInputChange}
                  className="w-full px-3 py-2 border border-gray-300 rounded"
                />
              </div>
              <div className="mb-4">
                <label htmlFor="stockQuantity" className="block text-sm font-semibold">Stock Quantity</label>
                <input
                  type="number"
                  id="stockQuantity"
                  name="stockQuantity"
                  value={updatedProductData.stockQuantity}
                  onChange={handleInputChange}
                  className="w-full px-3 py-2 border border-gray-300 rounded"
                />
              </div>
              <div className="mb-4">
                <label htmlFor="availability" className="block text-sm font-semibold">Availability</label>
                <input
                  type="checkbox"
                  id="availability"
                  name="availability"
                  checked={updatedProductData.availability}
                  onChange={(e) => setUpdatedProductData({ ...updatedProductData, availability: e.target.checked })}
                />
              </div>
              <div className="flex justify-end">
                <button type="submit" className="bg-blue-500 text-white px-4 py-2 rounded hover:bg-blue-600">
                  Save
                </button>
                <button
                  type="button"
                  className="ml-4 bg-gray-500 text-white px-4 py-2 rounded hover:bg-gray-600"
                  onClick={() => setIsModalOpen(false)}
                >
                  Cancel
                </button>
              </div>
            </form>
          </div>
        </div>
      )}
    </div>
  );
}

export default ProductList;
