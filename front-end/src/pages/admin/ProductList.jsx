import React, { useState } from 'react';

function ProductList() {
  const [products, setProducts] = useState([
    {
      id: 1,
      title: "Elegant Ring",
      description: "Beautiful gold ring with diamond",
      price: 299.99,
      stockQuantity: 5,
      availability: true,
    },
    // Add more mock products as needed
  ]);

  const [isModalOpen, setIsModalOpen] = useState(false);
  const [productToEdit, setProductToEdit] = useState(null);
  const [updatedProductData, setUpdatedProductData] = useState({
    title: '',
    description: '',
    price: '',
    stockQuantity: '',
    availability: false,
  });

  const deleteProduct = (id) => {
    setProducts(products.filter(product => product.id !== id));
  };

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

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setUpdatedProductData({
      ...updatedProductData,
      [name]: value,
    });
  };

  const handleSubmitUpdate = (e) => {
    e.preventDefault();
    setProducts(products.map(product => 
      product.id === productToEdit.id ? { ...product, ...updatedProductData } : product
    ));
    setIsModalOpen(false);
  };

  return (
    <div className="bg-black py-6 px-4">
      <h3 className="text-xl font-bold mb-6 text-white">Product List</h3>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
        {products.map((product) => (
          <div key={product.id} className="bg-white p-4 rounded-lg shadow">
            <h4 className="text-lg font-semibold">{product.title}</h4>
            <p className="text-gray-600">{product.description}</p>
            <p className="text-lg font-bold">${product.price}</p>
            <p className="text-sm">Stock: {product.stockQuantity}</p>
            <div className="mt-4 space-x-2">
              <button
                onClick={() => handleUpdateClick(product)}
                className="bg-blue-500 text-white px-3 py-1 rounded hover:bg-blue-600"
              >
                Edit
              </button>
              <button
                onClick={() => deleteProduct(product.id)}
                className="bg-red-500 text-white px-3 py-1 rounded hover:bg-red-600"
              >
                Delete
              </button>
            </div>
          </div>
        ))}
      </div>

      {/* Edit Modal */}
      {isModalOpen && (
        <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center">
          <div className="bg-white p-6 rounded-lg w-96">
            <h3 className="text-xl font-bold mb-4">Edit Product</h3>
            <form onSubmit={handleSubmitUpdate}>
              <div className="mb-4">
                <label className="block text-sm font-medium mb-1">Title</label>
                <input
                  type="text"
                  name="title"
                  value={updatedProductData.title}
                  onChange={handleInputChange}
                  className="w-full border rounded p-2"
                />
              </div>
              <div className="mb-4">
                <label className="block text-sm font-medium mb-1">Description</label>
                <textarea
                  name="description"
                  value={updatedProductData.description}
                  onChange={handleInputChange}
                  className="w-full border rounded p-2"
                />
              </div>
              <div className="mb-4">
                <label className="block text-sm font-medium mb-1">Price</label>
                <input
                  type="number"
                  name="price"
                  value={updatedProductData.price}
                  onChange={handleInputChange}
                  className="w-full border rounded p-2"
                />
              </div>
              <div className="mb-4">
                <label className="block text-sm font-medium mb-1">Stock Quantity</label>
                <input
                  type="number"
                  name="stockQuantity"
                  value={updatedProductData.stockQuantity}
                  onChange={handleInputChange}
                  className="w-full border rounded p-2"
                />
              </div>
              <div className="flex justify-end space-x-2">
                <button
                  type="button"
                  onClick={() => setIsModalOpen(false)}
                  className="bg-gray-500 text-white px-4 py-2 rounded hover:bg-gray-600"
                >
                  Cancel
                </button>
                <button
                  type="submit"
                  className="bg-blue-500 text-white px-4 py-2 rounded hover:bg-blue-600"
                >
                  Save Changes
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
