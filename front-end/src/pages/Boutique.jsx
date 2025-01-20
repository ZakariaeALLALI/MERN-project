import React, { useEffect, useState } from 'react';
import axios from 'axios';
import Navbar from '../components/Navbar';
import Footer from '../components/Footer';

function Boutique() {
  const [products, setProducts] = useState([]);
  const [selectedCategory, setSelectedCategory] = useState('');
  const [selectedType, setSelectedType] = useState('');
  const [currentPage, setCurrentPage] = useState(1); // Current page
  const [itemsPerPage] = useState(8); // Items per page

  useEffect(() => {
    const fetchProducts = async () => {
      try {
        const response = await axios.get('http://localhost:4000/api/products');
        if (Array.isArray(response.data)) {
          const updatedProducts = response.data.map(product => ({
            ...product,
            availability: product.stockQuantity > 0,  // Check if stockQuantity is greater than 0
          }));
          setProducts(updatedProducts);
        } else {
          console.error('Unexpected response format:', response.data);
        }
      } catch (error) {
        console.error('Error fetching products:', error);
      }
    };

    fetchProducts();
  }, []);
  
  const filteredProducts = products.filter(product => {
    const categoryMatch = selectedCategory ? product.category === selectedCategory : true;
    const typeMatch = selectedType ? product.type === selectedType : true;
    return categoryMatch && typeMatch;
  });

  const lastIndex = currentPage * itemsPerPage;
  const firstIndex = lastIndex - itemsPerPage;
  const currentProducts = filteredProducts.slice(firstIndex, lastIndex);

  const totalPages = Math.ceil(filteredProducts.length / itemsPerPage);

  const addToCart = (product) => {
    // Your add to cart logic goes here
  };

  return (
    <div>
      <Navbar />
      <div
        className="font-news-reader flex flex-col items-center justify-center container mx-auto p-8 md:px-20 lg:px-32 w-full overflow-hidden mt-16 min-h-screen"
        style={{
          backgroundImage: "url('/ringp.png')",
          backgroundSize: 'cover',
          backgroundPosition: 'center',
          backgroundRepeat: 'no-repeat',
          height: '100vh',
        }}
      >
        <div className="text-center">
          <h1
            className="font-news-reader text-white text-6xl font-bold"
            style={{ textShadow: '2px 2px 6px rgba(0, 0, 0, 0.8)' }}
          >
            Welcome to LE PLAISIR's Boutique
          </h1>
          <p
            className="font-news-reader text-white"
            style={{ textShadow: '1px 1px 4px rgba(0, 0, 0, 0.8)' }}
          >
            Clean lines, accurate proportions, precise shapes. To celebrate 100 years of Trinity,
            Cartier has designed three new variations on the ring: a cushion-shaped version, a
            modular version, and an XL version. The collection also includes a reissue of the XL
            bracelet, a true cult piece.
          </p>
        </div>
      </div>
      
      {/* Category Filter */}
      <div className="flex justify-center space-x-4 mb-8 pt-8">
        <button
          className="px-4 py-2 bg-green-900 text-white rounded hover:bg-gray-700"
          onClick={() => setSelectedCategory('')}
        >
          All Categories
        </button>
        <button
          className="px-4 py-2 bg-green-900 text-white rounded hover:bg-gray-700"
          onClick={() => setSelectedCategory('Men')}
        >
          Men
        </button>
        <button
          className="px-4 py-2 bg-green-900 text-white rounded hover:bg-gray-700"
          onClick={() => setSelectedCategory('Women')}
        >
          Women
        </button>
        <button
          className="px-4 py-2 bg-green-900 text-white rounded hover:bg-gray-700"
          onClick={() => setSelectedCategory('Unisex')}
        >
          Unisex
        </button>
      </div>

      {/* Type Filter */}
      <div className="flex justify-center space-x-4 mb-8">
        <button
          className="px-4 py-2 bg-green-900 text-white rounded hover:bg-gray-700"
          onClick={() => setSelectedType('')}
        >
          All Types
        </button>
        <button
          className="px-4 py-2 bg-green-900 text-white rounded hover:bg-gray-700"
          onClick={() => setSelectedType('Earrings')}
        >
          Earrings
        </button>
        <button
          className="px-4 py-2 bg-green-900 text-white rounded hover:bg-gray-700"
          onClick={() => setSelectedType('Necklaces')}
        >
          Necklaces
        </button>
        <button
          className="px-4 py-2 bg-green-900 text-white rounded hover:bg-gray-700"
          onClick={() => setSelectedType('Rings')}
        >
          Rings
        </button>
        <button
          className="px-4 py-2 bg-green-900 text-white rounded hover:bg-gray-700"
          onClick={() => setSelectedType('Bags')}
        >
          Bags
        </button>
        <button
          className="px-4 py-2 bg-green-900 text-white rounded hover:bg-gray-700"
          onClick={() => setSelectedType('Glasses')}
        >
          Glasses
        </button>
      </div>

      {/* Product Grid */}
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-8 pb-5 mx-12">
        {currentProducts.length > 0 ? (
          currentProducts.map((product) => (
            <div key={product._id} className="relative group block border rounded-lg overflow-hidden shadow-lg p-4">
              {/* Product Image */}
              <img
                src={`http://localhost:4000/${product.image}`}
                alt={product.title || 'Product Image'}
                className="h-[250px] w-full object-cover rounded-lg"  // Smaller image size
              />
              
              {/* Overlay for unavailable products */}
              {!product.availability && (
                <div className="absolute inset-0 bg-black bg-opacity-50 flex items-center justify-center">
                  <span className="text-white font-bold text-xl">Sold Out</span>
                </div>
              )}

              <div className="p-4">
                <h3 className="text-gray-900 text-lg font-bold group-hover:underline group-hover:underline-offset-4">
                  {product.title}
                </h3>
                <p className="mt-1 text-gray-500 text-sm">
                  {product.description || "A brief description of the product goes here."}
                </p>
                <p className="mt-2 text-gray-900 font-bold">${product.price || 'Price Unavailable'}</p>
                <button
                  onClick={() => addToCart(product)}
                  className="mt-3 w-full bg-gray-600 text-white py-2 px-4 rounded hover:bg-gray-700 transition"
                  disabled={!product.availability}  // Disable button if product is unavailable
                >
                  Add to Cart
                </button>
              </div>
            </div>
          ))
        ) : (
          <div className="text-center">
            <div className="spinner-border animate-spin"></div>
            <p>Nothing so far</p>
          </div>
        )}
      </div>

      {/* Pagination Controls */}
      <div className="flex justify-center space-x-4 py-4">
        <button
          onClick={() => setCurrentPage(prevPage => Math.max(prevPage - 1, 1))}
          className="px-4 py-2 bg-green-900 text-white rounded hover:bg-gray-700 disabled:opacity-50"
          disabled={currentPage === 1}
        >
          Previous
        </button>
        <span className="flex items-center text-white">
          Page {currentPage} of {totalPages}
        </span>
        <button
          onClick={() => setCurrentPage(prevPage => Math.min(prevPage + 1, totalPages))}
          className="px-4 py-2 bg-green-900 text-white rounded hover:bg-gray-700 disabled:opacity-50"
          disabled={currentPage === totalPages}
        >
          Next
        </button>
      </div>

      <Footer />
    </div>
  );
}

export default Boutique;
