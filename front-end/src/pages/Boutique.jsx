import React, { useEffect, useState } from 'react';
import axios from 'axios';
import Navbar from '../components/Navbar';
import Footer from '../components/Footer';

function Boutique() {
  const [products, setProducts] = useState([]);
  const [selectedCategory, setSelectedCategory] = useState('');
  const [selectedType, setSelectedType] = useState('');

  useEffect(() => {
    const fetchProducts = async () => {
      try {
        const response = await axios.get('http://localhost:4000/api/products');
        if (Array.isArray(response.data)) {
          const updatedProducts = response.data.map(product => ({
            ...product,
            availability: product.stockQuantity > 0, 
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
      <div className="flex justify-center space-x-4 mb-8 pt-8">
        <button
          className="px-4 py-2 bg-gray-600 text-white rounded hover:bg-gray-700"
          onClick={() => setSelectedCategory('')}
        >
          All Categories
        </button>
        <button
          className="px-4 py-2 bg-gray-600 text-white rounded hover:bg-gray-700"
          onClick={() => setSelectedCategory('Men')}
        >
          Men
        </button>
        <button
          className="px-4 py-2 bg-gray-600 text-white rounded hover:bg-gray-700"
          onClick={() => setSelectedCategory('Women')}
        >
          Women
        </button>
        <button
          className="px-4 py-2 bg-gray-600 text-white rounded hover:bg-gray-700"
          onClick={() => setSelectedCategory('Unisex')}
        >
          Unisex
        </button>
      </div>

      <div className="flex justify-center space-x-4 mb-8">
        <button
          className="px-4 py-2 bg-gray-600 text-white rounded hover:bg-gray-700"
          onClick={() => setSelectedType('')}
        >
          All Types
        </button>
        <button
          className="px-4 py-2 bg-gray-600 text-white rounded hover:bg-gray-700"
          onClick={() => setSelectedType('Earrings')}
        >
          Earrings
        </button>
        <button
          className="px-4 py-2 bg-gray-600 text-white rounded hover:bg-gray-700"
          onClick={() => setSelectedType('Necklaces')}
        >
          Necklaces
        </button>
        <button
          className="px-4 py-2 bg-gray-600 text-white rounded hover:bg-gray-700"
          onClick={() => setSelectedType('Rings')}
        >
          Rings
        </button>
        <button
          className="px-4 py-2 bg-gray-600 text-white rounded hover:bg-gray-700"
          onClick={() => setSelectedType('Bags')}
        >
          Bags
        </button>
        <button
          className="px-4 py-2 bg-gray-600 text-white rounded hover:bg-gray-700"
          onClick={() => setSelectedType('Glasses')}
        >
          Glasses
        </button>
      </div>

      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-8 pb-5 ml-6">
        {filteredProducts.length > 0 ? (
          filteredProducts.map((product) => (
            <div key={product._id} className="relative group block border rounded-lg overflow-hidden shadow-lg">
              {/* Product Image */}
              <img
                src={product.image ? `http://localhost:4000/${product.image}`: '/placeholder-image.png'}
                alt={product.title || 'Product Image'}
                className="h-[300px] w-full object-cover rounded-lg"
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

      <Footer />
    </div>
  );
}

export default Boutique;
